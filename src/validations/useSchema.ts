import z from "zod";

const ministerio = ["educacion", "educación", "salud"] as const;
const sherifs = ["0", "1", "2", "3"] as const;

export const userSchema = z.object({
  DNI: z
    .number()
    .min(7, { message: "No puede ser menor a 7 digitos" })
    .max(9, { message: "No puede ser mayor a 9 digitos" }),
  address: z.string(),
  ministry: z.enum(ministerio, {
    errorMap: () => ({ message: "Porfavor elige un ministerio" }),
  }),
  sherif: z.enum(sherifs, {
    errorMap: () => ({ message: "Porfavor elige un jefe de comunidad" }),
  }),
  name: z.string(),
  phone: z
    .string()
    .max(11)
    .min(11)
    .refine((phone) => !Number.isNaN(parseInt(phone)), {
      message: "Los digitos del campo telefono deben ser numéricos",
    }),
  pro: z.string().trim(),
  role: z.string().trim(),
});
