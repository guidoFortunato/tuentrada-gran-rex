import React from 'react'

import '../css/preguntasfrecuentes.css'

export const PreguntasFrecuentes = () => {
  return (
    <div className="container" >
          <div className="row" style={{justifyContent:"center"}}>
          <div className="col-12 text-center mt-3 ">
              <h2 style={{ fontSize: "35px" }} className="my-3 heading">
            Preguntas Frecuentes
              </h2>
              
            </div>
            <p className="parrafo-historia">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt adipisci sint enim, temporibus ratione delectus omnis ea alias, nisi accusamus. Nesciunt consectetur aut quae aliquid earum iusto assumenda neque?s Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo reiciendis sequi amet ad rem nemo blanditiis, minima dignissimos corporis nostrum! Enim officia magnam, nisi deleniti quos </p>
    <div className="accordion accordion-flush parrafo-historia " id="accordionFlushExample" >
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div></div></div>
  )
}
