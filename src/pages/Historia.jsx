import { GaleriaHistoria } from "../components";
import "../css/historia.css";

export const Historia = () => {

  return (
    <>
      <div className="container">
        <h2 style={{ fontSize: "35px" }} className="my-3 heading">Historia: un teatro con trayectoria</h2>

        <div className="col-12">
          <p className="parrafo-historia">
            Es el teatro de los grandes espectáculos musicales y recibe a los
            artistas más consagrados, nacional e internacionalmente. Su
            capacidad es para 3.262 espectadores. <br /><br /> El edificio, propiedad de
            Cordero, Cavallo y Lautaret S.A. y terminado en 1937, después de tan
            solo siete meses, es un exponente arquitectónico del estilo
            racionalista, obra del arquitecto Alberto Prebisch, el mismo que
            creó el Obelisco de Buenos Aires, y del ingeniero civil Adolfo T.
            Moret. En sus inicios contaba con altoparlantes en el vestíbulo que
            permitían a los espectadores llamar a sus coches, que se encontraban
            en la estación de más de 200 coches situada en los dos subsuelos.
            También poseía un bar que ocupaba tres pisos, un bowling y billares
            en el subsuelo. <br /><br /> <strong>Descripción arquitectónica</strong>  <br /> Obra significativa de
            Alberto Prebisch, el Gran Rex representó un hito dentro de la
            historia de la arquitectura moderna argentina. Destaca en su
            construcción el efecto de continuidad entre el exterior e interior,
            con su foyer o vestíbulo separados “del afuera” por una superficie
            vidriada, solo cortada por una marquesina lineal. Este magnífico
            espacio se destaca en forma ambivalente, con una grandiosa
            estructura resuelta con una simpleza formal y estética admirable. Su
            interior, de idénticas características espaciales y constructivas,
            destaca por su absoluta falta de decoración, alejándose
            definitivamente de todos aquellas típicas salas cargadas de
            metáforas a las antiguos palacios de música clásicos europeos.La
            estructura del edificio fue realizada en hormigón armado, y el techo
            de la sala en cabriadas metálicas. La imponente fachada es un
            sencillo rectángulo de gran volumen revestido en travertino romano
            sin lustrar y carente de motivos ornamentales, con una gran
            superficie vidriada que muestra los interiores del edificio a la
            gente que pasa por la vereda, y es cortada en mitades por una fina
            viga sostenida de arriba por tensores redondos de hierro recubiertos
            en bronce dorado. El interior es del mismo estilo racionalista, y el
            hall tiene un doble juego de escaleras pensadas para vaciar la sala
            rápidamente y un conjunto de ascensores que comunican con las
            cocheras. Posee una sala asimétrica, producto de haber sido
            construido en un terreno irregular. Por ello, la está dispuesta en
            forma oblicua a la línea del frente. <br /> Esta sala es una gran cáscara
            dividida en fajas encimadas, inspirada en el Radio City de New York.
            Los materiales son mármol Botticcino italiano, revoque, madera
            enchapada y bronce. Los espectadores se disponen en tres niveles:
            platea, primer balcón y segundo balcón. Tanto las butacas como los
            telones y alfombras originales fueron de color tierra siena quemada,
            y las paredes fueron pintadas a la témpera de color ocre ligeramente
            rojizo.
          </p>
        </div>
      </div>
      <div className="container-historia">
        <GaleriaHistoria />
      </div>
    </>
  );
};
