import "../css/header.css";

export const Home = () => {
  return (
    <header className="header-home">
      <h1 className="titulo-principal">Gran Rex</h1>
      <form class="d-flex form-buscar">
        <div>🔍︎</div>
        <div className="container-input">
          <input class="border-0" placeholder="Buscar Evento" />
        </div>
        {/* <button class="btn btn-outline-success" type="submit">Buscar</button> */}
      </form>
    </header>
  );
};
