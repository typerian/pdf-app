import { useState, useEffect } from "react";

import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 70,
    paddingBottom: 65,
    paddingHorizontal: 62,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },
  authorFooter: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 12,
  },
  titulo: {
    fontSize: 15,
    textAlign: "center",
    paddingTop: 20,
    marginVertical: 40,
    fontFamily: "Helvetica-Bold",
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  textFooter: {
    margin: 12,
    fontSize: 14,
    textAlign: "center",

    marginVertical: 20,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 60,
  },
  footerChild: {},
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

interface PDFProps {
  data: {
    name: string;
    DNI: number;
    phone: number;
    address: string;
    pro: string;
    role: string;
    ministry: string;
    sherif: string;
  };
}

const PDF: React.FC<PDFProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [person, setPerson] = useState<PDFProps["data"]>();

  const fecha = new Date();
  const day = fecha.getDate();

  const sherifs = [
    {},
    {
      name: "Mariela Castro",
      DNI: "V-15.548.662",
      phone: "04143733259",
      area: "Jefa de Comunidad: Urb. Bella Vista, Sector 2",
    },
    {
      name: "Crismar Pardo",
      DNI: "V-13.812.174",
      phone: "04243362651",
      area: "Jefa de Comunidad: Urb. Bella Vista, Sector 1",
    },
    {
      name: "Neiman Pereira",
      DNI: "V-5.604.594",
      phone: "04145439036",
      area: "Jefa de Comunidad: Las Mercedes",
    },
    {
      name: "Mayra Delgado",
      DNI: "V-13.576.647",
      phone: "04141475245",
      area: "Jefa de Comunidad: Los Naranjos",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    if (!data) return;
    setPerson(data);
  }, [data]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Document>
        <Page size="A4" style={styles.body}>
          <Text style={styles.author}>REPÚBLICA BOLIVARIANA DE VENEZUELA</Text>
          <Text style={styles.author}>SAN JUAN DE LOS MORROS</Text>
          <Text style={styles.author}>MUNICIPIO JUAN GERMÁN ROSCIO NIEVES</Text>

          <Text style={styles.author}>CÓDIGO:100601020</Text>
          <Text style={styles.titulo}>POSTULACIÓN</Text>
          <Text style={styles.text}>
            Reciba un cordial saludo Revolucionario, Socialista, Chavista y
            Madurista de parte de la UBCH Eduardo Méndez, ubicada en la Av.
            Fuerzas Armadas, diagonal Casa Amarilla, Parroquia San Juan de los
            Morros.
          </Text>
          <Text style={styles.text}>
            Esta con la finalidad de dar fe, que el/la ciudadano (a):{" "}
            <Text
              style={{
                textTransform: "uppercase",
                textDecoration: "underline",
                fontFamily: "Helvetica-Bold",
              }}
            >
              {person?.name}
            </Text>
            , titular de la Cédula de Identidad{" "}
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                textDecoration: "underline",
              }}
            >
              V-{person?.DNI.toLocaleString()}
            </Text>
            , número de contacto:{" "}
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                textDecoration: "underline",
              }}
            >
              {person?.phone}
            </Text>
            , quien reside en{" "}
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                textDecoration: "underline",
              }}
            >
              {person?.address}
            </Text>
            , Profesión u Oficio:{" "}
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}
            >
              {person?.pro}
            </Text>
            , militante activo PSUV, conocida como una persona responsable y
            honesta. Por lo que acudo a usted y en sus buenos oficios, con la
            finalidad de solicitarle sea tomada en cuenta esta Postulación como
            <Text> {person?.role} </Text>
            del Ministerio del Poder Popular para la {person?.ministry}.
          </Text>
          <Text style={styles.text}>
            Constancia que se expide a petición de parte interesada, en la
            ciudad de San Juan de los Morros, a los ({day}) días del mes de
            Enero de 2024.
          </Text>

          <Text style={styles.textFooter}>Por:</Text>

          <View style={styles.footer}>
            <View>
              <Text style={styles.authorFooter}>Nancy Contreras</Text>
              <Text style={styles.authorFooter}>C.I: V-8.769.243</Text>
              <Text style={styles.authorFooter}>Contacto: 04241962740</Text>
              <Text style={styles.authorFooter}>
                Jefa UBCH “Eduardo Méndez”
              </Text>
            </View>
            {Number(person?.sherif) > 0 && (
              <View>
                <Text style={styles.authorFooter}>
                  {sherifs[Number(person?.sherif)].name}
                </Text>
                <Text style={styles.authorFooter}>
                  C.I: {sherifs[Number(person?.sherif)].DNI}
                </Text>
                <Text style={styles.authorFooter}>
                  Contacto: {sherifs[Number(person?.sherif)].phone}
                </Text>
                <Text style={styles.authorFooter}>
                  {sherifs[Number(person?.sherif)].area}
                </Text>
              </View>
            )}
          </View>
        </Page>
      </Document>
    </>
  );
};

Font.register({
  family: "Arial",
  src: "https://fonts.gstatic.com/s/Arial/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

export default PDF;
