import Swal from "sweetalert2"

export const alertaWarning = (text = "Debe ingresar un evento") => {
  
  Swal.fire({
    icon: 'warning',
    html: `<b>${text}</b>`,
    timer: 2000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    iconColor: "#F7AC08",
  })
}

export const alertaSuccess = (text = "Descargado con éxito") => {
  
  Swal.fire({
    icon: 'success',
    html: `<b>${text}</b>`,
    timer: 2000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    // iconColor: "#F7AC08",
  })
}