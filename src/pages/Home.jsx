import { CardEvento, FormBusqueda } from "../components/";

import "../css/header.css";
import "../css/footer.css";
import { SliderDestacado } from "../components/";

export const Home = () => {
  return (
    <>
      <header>
        <div className="header-home">
          <h1 className="titulo-principal">Gran Rex</h1>
          <FormBusqueda />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-3 ">
              <h2 style={{ fontSize: "35px" }} className="my-3">
                Próximos shows
              </h2>
            </div>
          </div>

          {/* <div className="row justify-content-center">
            <SliderDestacado />
          </div> */}

          <div className="row sin-padding-right-left">
            <CardEvento
              linkEvento={"/shows/el-zar/1"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/El_zar.webp"
              }
              status={"Disponible"}
              title={"EL ZAR"}
              date={"SÁBADO 15 DE ABRIL"}
              time={"20:30HS"}
            />
            <CardEvento
              linkEvento={"/shows/sergio-torres/2"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_torres.webp"
              }
              status={"Disponible"}
              title={"SERGIO TORRES"}
              date={"DOMINGO 16 DE ABRIL"}
              time={"21:30HS"}
            />
            <CardEvento
              linkEvento={"/shows/miranda/3"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/miranda.webp"
              }
              status={"Agotado"}
              title={"MIRANDA"}
              date={"21, 22 Y 23 DE ABRIL"}
              time={"20:00HS Y 20:30HS"}
            />
            <CardEvento
              linkEvento={"/shows/queen/4"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/queen.webp"
              }
              status={"Disponible"}
              title={"QUEEN POR MASTER STROKE"}
              date={"VIERNES 28 DE ABRIL"}
              time={"20:30HS"}
            />
            <CardEvento
              linkEvento={"/shows/damian-cordoba/5"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/damian_cordoba.webp"
              }
              status={"Disponible"}
              title={"DAMIÁN CÓRDOBA"}
              date={"SÁBADO 29 DE ABRIL"}
              time={"20:30HS"}
            />

            <CardEvento
              linkEvento={"/shows/festival-ballet/6"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/festival_ballet.webp"
              }
              status={"Disponible"}
              title={"INTERNATIONAL FESTIVAL BALLET FOR THE PEACE"}
              date={"5 Y 6 DE MAYO"}
              time={"20:30HS"}
            />
            <CardEvento
              linkEvento={"/shows/daleqva/7"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/dale_qva.webp"
              }
              status={"Disponible"}
              title={"DALE Q´VA"}
              date={"VIERNES 12 DE MAYO"}
              time={"20:30HS"}
            />
            <CardEvento
              linkEvento={"/shows/turf/8"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/turf.webp"
              }
              status={"Disponible"}
              title={"TURF"}
              date={"SÁBADO 13 DE MAYO"}
              time={"20:30HS"}
            />
            <CardEvento
              linkEvento={"/shows/the-beats/9"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/the_beats.webp"
              }
              status={"Disponible"}
              title={"THE BEATS"}
              date={"DOMINGO 14 DE MAYO"}
              time={"20:30HS"}
            />
            <CardEvento
              linkEvento={"/shows/massacre/10"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/massacre.webp"
              }
              status={"Disponible"}
              title={"MASSACRE"}
              date={"VIERNES 19 DE MAYO"}
              time={"20:30HS"}
            />

            <CardEvento
              linkEvento={"/shows/jdpantoja-kimloaiza/11"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/jdpantoja_kimloaiza.webp"
              }
              status={"Agotado"}
              title={"JD PANTOJA KIM LOAIZA"}
              date={"20 y 21 DE MAYO"}
              time={"12:00HS y 19:00HS"}
            />
            <CardEvento
              linkEvento={"/shows/sergio-galleguillo/12"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_galleguillo.webp"
              }
              status={"Disponible"}
              title={"SERGIO GALLEGUILLO"}
              date={"20 DE MAYO"}
              time={"21:00HS"}
            />
            <CardEvento
              linkEvento={"/shows/matilda/13"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/matilda.webp"
              }
              status={"Disponible"}
              title={"SERGIO GALLEGUILLO"}
              date={"DEL 1 DE JUNIO AL 30 DE JULIO"}
              time={"CONSULTAR HORARIOS"}
            />
            <CardEvento
              linkEvento={"/shows/bxs/14"}
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/bxs.webp"
              }
              status={"Disponible"}
              title={"BRYNDIS"}
              date={"DOMINGO 27 DE AGOSTO"}
              time={"20:00HS"}
            />
            
           
          </div>
        </div>
      </main>
    </>
  );
};
