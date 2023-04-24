import React from "react";

export const Spinner = () => {
  return (
    <div className="text-center" style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
};
