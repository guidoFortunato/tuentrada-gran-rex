import { Navigate, Route, Routes } from "react-router-dom";
import {
  Beneficios,
  BusquedaEventos,
  Calendario,
  ComoLlegar,
  Historia,
  Home,
  PreguntasFrecuentes,
  Ubicaciones,
} from "../pages/";
import { DetalleEvento } from "../components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/busqueda-eventos/:name" element={<BusquedaEventos />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/como-llegar" element={<ComoLlegar />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />

      {/* EVENTO 1 EL ZAR  */}

      <Route
        path="/shows/el-zar/1"
        element={
          <DetalleEvento
            title={"El Zar"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/El_zar.webp"
            }
            description={`El ZAR presenta RIO HOTEL el 15 de Abril en el Teatro Gran Rex.
            <br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            Entradas en venta:  <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/el-zar/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 2 SERGIO TORRES  */}

      <Route
        path="/shows/sergio-torres/2"
        element={
          <DetalleEvento
            title={"Sergio Torres"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_torres.webp"
            }
            description={`VUELVE AL GRAN REX EL MAXIMO EXPONENTE DE LA CUMBIA SANTAFECINA, SERGIO TORRES “LA VOZ” Y ESTA VEZ VAMOS A FESTEJAR SU CUMPLEAÑOS EN EL REX, EN UNA NOCHE UNICA Y ESPECIAL. VUELVE EL NEGRO AL GRAN REX Y NO TE LO PODES PERDER.<br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/sergio-torres/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 3 MIRANDA  */}

      <Route
        path="/shows/miranda/3"
        element={
          <DetalleEvento
            title={"MIRANDA!"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/miranda.webp"
            }
            description={`Todo listo para la fiesta MIRANDA! <br /> La banda pop más icónica de la escena hispanoamericana, Miranda! cierra el año anunciando su nuevo álbum HOTEL MIRANDA! y las fechas de presentación para el 21 de abril en el imponente Teatro Gran Rex. Con más de 20 años de trayectoria, a la banda liderada por Ale Sergi y Juliana Gattas le sobran los motivos para celebrar y lo harán al mejor estilo Miranda!<br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/miranda/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 4 QUEEN  */}

      <Route
        path="/shows/queen/4"
        element={
          <DetalleEvento
            title={"MASTER STROKE"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/queen.webp"
            }
            description={`Master Stroke, integrado por Ema Caradoso en voz, Brian Morua en guitarra, Manuel Olveira en bajo, Agustín Albertini en batería y Alberto Ludueña en teclados, es la banda tributo a Queen destacada por el mismo Brian May en sus redes sociales y la que Ángel Mahler sumó a sus espectáculos de Rapsodia Bohemia Sinfónico en 2020.<br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={
              "https://www.ticketek.com.ar/queen-por-master-stroke/teatro-gran-rex"
            }
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 5 DAMIAN CORDOBA  */}

      <Route
        path="/shows/damian-cordoba/5"
        element={
          <DetalleEvento
            title={"DAMIAN CÓRDOBA"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/damian_cordoba.webp"
            }
            description={`Damián Córdoba es un fenómeno del cuarteto que se mantiene vigente en el tiempo. Con más de 20 años de trayectoria, continúa llenando en cada presentación, bailes y festivales donde se presenta, convocando multitudes. Así lo viene demostrando con su participación en los principales festivales del país: Festival de Jesús María, Cosquín Cuarteto, Festival de Peñas de Villa María, y muchos, muchos más.<br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/damian-cordoba/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 6 FESTIVAL DE BALLET  */}

      <Route
        path="/shows/festival-ballet/6"
        element={
          <DetalleEvento
            title={"INTERNATIONAL FESTIVAL BALLET FOR THE PEACE"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/festival_ballet.webp"
            }
            description={`International Festival Ballet for the Peace se llevará a cabo los días Viernes 5 y Sabado 6 de Mayo de 2023 en el Teatro Gran Rex. <br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={
              "https://www.ticketek.com.ar/international-festival-ballet-peace/teatro-gran-rex"
            }
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 7 DALE QVA  */}

      <Route
        path="/shows/daleqva/7"
        element={
          <DetalleEvento
            title={"DALE Q’ VA"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/dale_qva.webp"
            }
            description={`Dale Q’ Va es, sin dudas, uno de los grupos cuarteteros del momento, se encuentran viviendo un presente excelente a lo largo y ancho de todo el país. <br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/dale-qva/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 8 TURF  */}

      <Route
        path="/shows/turf/8"
        element={
          <DetalleEvento
            title={"TURF"}
            img={"https://www.tuentrada.com/teatro/gran-rex/imagenes/turf.webp"}
            description={`Turf se presenta el 13 de Mayo en el Teatro Gran Rex. <br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/turf/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 9 THE BEATS  */}

      <Route
        path="/shows/the-beats/9"
        element={
          <DetalleEvento
            title={"THE BEATS"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/the_beats.webp"
            }
            description={`The Beats se presentan el Domingo 14 Mayo 20:30 hs. en el Teatro Gran Rex.<br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/beats/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 10 MASSACRE  */}

      <Route
        path="/shows/massacre/10"
        element={
          <DetalleEvento
            title={"MASSACRE"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/massacre.webp"
            }
            description={`Massacre vuelve a la calle Corrientes con Riesgo Rex un show que
            sorprenderá a propios y extraños.
            El 19 de Mayo de 2023, la psicodelia, la adrenalina y la sorpresa, serán
            el maridaje perfecto para que Riesgo Rex sea otro suceso en la
            trayectoria de la banda.<br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/massacre/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />
      {/* EVENTO 11 JD PANTOJA Y KIM LOAIZA  */}

      <Route
        path="/shows/jdpantoja-kimloaiza/11"
        element={
          <DetalleEvento
            title={"JD PANTOJA KIM LOAIZA"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/jdpantoja_kimloaiza.webp"
            }
            description={`Kim Loaiza y JD Pantoja, los Youtubers y Cantantes más populares del momento, anuncian su último tour juntos el cual lleva por nombre “BYE BYE”, quiénes cantarán por última vez juntos en un mismo escenario su mayores éxitos.<br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={
              "https://www.ticketek.com.ar/jd-pantoja-kim-loaiza/teatro-gran-rex"
            }
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />
      {/* EVENTO 12 SERGIO GALLEGUILLO  */}

      <Route
        path="/shows/sergio-galleguillo/12"
        element={
          <DetalleEvento
            title={"SERGIO GALLEGUILLO"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_galleguillo.webp"
            }
            description={`Sergio Galleguillo lleva “La fiesta de La Rioja” al Gran Rex.
            <br />
            El hoy reconocido Embajador Artístico y Cultural de La Rioja llega al Gran Rex para celebrar el aniversario de La Rioja. “Yo soy nacido en La Rioja señores… La Tierra del Carnaval”, es la lírica que lo abraza a su terruño y a su esencia de folklorista.<br />
            Sergio Galleguillo fue conquistando cada escenario del país donde llevo su música contagiada de alegría, logrando instaurar en los lugares más recónditos de nuestro país y del mundo, el juego y la mística de una ancestral fiesta llamada CHAYA. En sus inicios, conformó grupos como Tiahuanaco y Arahuanco pero, su máxima explosión y aceptación en el folklore fue con “Sergio Galleguillo y Los Amigos”, banda formada en 1997 con la cual editó 6 discos. En 1998 editan su álbum debut “Agitando Pañuelos”. Ese mismo año se presentan en la peña de Los Nocheros en Cosquín, lo cual les da un lugar luego en el escenario de la Plaza Próspero Molina. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={
              "https://www.ticketek.com.ar/sergio-galleguillo/teatro-gran-rex"
            }
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 13 MATILDA  */}

      <Route
        path="/shows/matilda/13"
        element={
          <DetalleEvento
            title={"MATILDA"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/matilda.webp"
            }
            description={`La obra éxito de Broadway y el West End Londinense llega al Teatro Gran Rex por 8 únicas semanas en Junio 2023.
            <br />
            Basado en la homónima novela de Roald Dahl, autor que ha vendido más de 250 millones de libros, y que ha inspirado la icónica película infantil de los 90 es una megaproducción que lleva presentándose, con gran éxito mundialmente: 12 años en Londres y 4 años en cartel en Broadway con más de 1.500 representaciones, 99 premios internacionales y más de 10 millones de espectadores que ya la vieron.<br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias.<br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna.

            <br />     <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/matilda/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 14 BXS  */}

      <Route
        path="/shows/bxs/14"
        element={
          <DetalleEvento
            title={"BXS - BRYNDIS X SIEMPRE"}
            img={"https://www.tuentrada.com/teatro/gran-rex/imagenes/bxs.webp"}
            description={`Grupo Bryndis se presentará el día Domingo 27 de Agosto en el Teatro Gran Rex. <br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de Ticketek <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={"https://www.ticketek.com.ar/bryndis/teatro-gran-rex"}
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />

      {/* EVENTO 15 DANIEL AGOSTINI */}

      <Route
        path="/shows/daniel-agostini/15"
        element={
          <DetalleEvento
            title={"DANIEL AGOSTINI"}
            img={
              "https://www.tuentrada.com/teatro/gran-rex/imagenes/daniel_agostini.webp"
            }
            description={`Daniel Agostini se presentará el día Domingo 10 de Septiembre en el Teatro Gran Rex. <br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna. <br />
            <br />
            Entradas en venta  <br />
            En las boleterias del Teatro Gran Rex 
            (Av. Corrientes 857 -Lunes a Domingo de 12 a 18 hs. Feriados Cerrado.) <br />
            Puntos de venta de TuEntrada.com <br />
            Personas con movilidad reducida  <br />

            Las sillas de ruedas se ubican en el espacio habilitado para las mismas detrás de la fila 25 del sector derecho de la Platea. En todos los casos abonan la entrada. Dichas localidades deben ser adquiridas solo en la boleteria del Teatro, presentando certificado de discapacidad. Al momento de la compra, abonan el ticket de menor valor disponible.
            
            `}
            href={
              "https://www.tuentrada.com/eventos/detalle/Daniel-Agostini/553776971040"
            }
            ubicaciones={[
              {
                id: 1,
                nombre: "PLATEA PLATINO",
                color: "#E9C28C",
                precio: "6000",
              },
              {
                id: 2,
                nombre: "PLATEA ORO",
                color: "#F7E686",
                precio: "5500",
              },
              {
                id: 3,
                nombre: "PLATEA PLATA",
                color: "#D58500",
                precio: "5000",
              },
              {
                id: 4,
                nombre: "PLATEA BRONCE",
                color: "#F1D000",
                precio: "4500",
              },
              {
                id: 5,
                nombre: "PLATEA BRONCE LATERAL",
                color: "#C32520",
                precio: "4100",
              },
              {
                id: 6,
                nombre: "SUPER PULLMAN 1",
                color: "#E9CADF",
                precio: "4300",
              },
              {
                id: 7,
                nombre: "SUPER PULLMAN 2",
                color: "#D07EAE",
                precio: "4000",
              },
              {
                id: 8,
                nombre: "PULLMAN 1",
                color: "#DCE49F",
                precio: "4400",
              },
              {
                id: 9,
                nombre: "PULLMAN 2",
                color: "#8DB235",
                precio: "4200",
              },
              {
                id: 10,
                nombre: "PULLMAN 3",
                color: "#CAE4F6",
                precio: "4000",
              },
              {
                id: 11,
                nombre: "PULLMAN 4",
                color: "#5C9BD3",
                precio: "3800",
              },
              {
                id: 12,
                nombre: "PULLMAN 5",
                color: "#305678",
                precio: "3600",
              },
            ]}
          />
        }
      />
      <Route path="/ubicaciones" element={<Ubicaciones />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
