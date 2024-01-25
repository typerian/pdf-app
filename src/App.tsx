import React, { useState } from "react";
import Quixote from "./components/PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "./validations/useSchema";

interface InputsValids {
  name: string;
  DNI: number;
  phone: number;
  address: string;
  pro: string;
  role: string;
  ministry: string;
  sherif: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsValids>({
    resolver: zodResolver(userSchema),
  });

  const DetailsPerson = {
    name: "Jane Doe Smith",
    DNI: 25252525,
    phone: 4548789635,
    address: "Av. Hight Garden, Calle 2-a, Casa #25",
    pro: "Contador",
    role: "Obrero",
    ministry: "Educación",
    sherif: "0",
  };

  const [person, setPerson] = useState(DetailsPerson);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault();
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
    console.log(person);
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: 0 }}>Postulaciones</h1>
        <div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="ej. Francis Albert Sinatra"
              onChange={handleChange}
            />
            {errors.name?.message && (
              <p style={{ textAlign: "center", color: "red", zIndex: 10 }}>
                {errors?.name.message}
              </p>
            )}

            <label htmlFor="DNI">Número de Cédula</label>
            <input
              type="tel"
              id="DNI"
              {...register("DNI")}
              placeholder="ej. 9999999"
              onChange={handleChange}
            />
            {errors.name?.message && (
              <p style={{ textAlign: "center", color: "red", zIndex: 10 }}>
                {errors?.name.message}
              </p>
            )}

            <label htmlFor="phone">Número de telefono</label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              placeholder="ej. 04140000000"
              onChange={handleChange}
            />
            {errors.name?.message && (
              <p style={{ textAlign: "center", color: "red", zIndex: 10 }}>
                {errors?.name.message}
              </p>
            )}

            <label htmlFor="address">Dirección de Habitación</label>
            <input
              type="text"
              id="address"
              {...register("address")}
              placeholder="Av. El Dorado #No. 69-76, torre 1, piso 16 "
              onChange={handleChange}
            />
            {errors.name?.message && (
              <p style={{ textAlign: "center", color: "red", zIndex: 10 }}>
                {errors?.name.message}
              </p>
            )}

            <label htmlFor="pro">Profesión u Oficio</label>
            <input
              type="text"
              id="pro"
              {...register("pro")}
              placeholder="ej. Bachiller"
              onChange={handleChange}
            />
            {errors.name?.message && (
              <p style={{ textAlign: "center", color: "red", zIndex: 10 }}>
                {errors?.pro?.message}
              </p>
            )}

            <label htmlFor="role">Cargo</label>
            <input
              type="text"
              id="role"
              {...register("role")}
              placeholder="ej. Administrador"
              onChange={handleChange}
            />
            {errors.name?.message && (
              <p style={{ textAlign: "center", color: "red", zIndex: 10 }}>
                {errors?.pro?.message}
              </p>
            )}

            <label htmlFor="sherif">Jefa de Comunidad</label>
            <select id="sherif" {...register("sherif")} onChange={handleChange}>
              <option value="0">Ninguno</option>
              <option value="1">Mariela -- Bella Vista, Sector 2</option>
              <option value="2">Crismar -- Bella Vista, Sector 1</option>
              <option value="3">Neiman -- Las Mercedes</option>
              <option value="4">Mayra -- Los Naranjos</option>
            </select>
            {errors.name?.message && (
              <p style={{ textAlign: "center", color: "red", zIndex: 10 }}>
                {errors?.ministry?.message}
              </p>
            )}

            <label htmlFor="ministry">Ministerio</label>
            <select
              id="ministry"
              {...register("ministry")}
              onChange={handleChange}
            >
              <option value="educación">Educación</option>
              <option value="salud">Salud</option>
            </select>
            {errors.name?.message && (
              <p style={{ textAlign: "center", color: "red", zIndex: 10 }}>
                {errors?.ministry?.message}
              </p>
            )}
          </form>
        </div>
        <PDFDownloadLink
          document={<Quixote data={person} />}
          fileName={`${person.name}.pdf`}
        >
          {({ loading }) =>
            loading ? (
              // biome-ignore lint/a11y/useButtonType: <explanation>
              <button>Loading document</button>
            ) : (
              <button type="submit">Descargar</button>
            )
          }
        </PDFDownloadLink>
      </div>
    </>
  );
}

export default App;
