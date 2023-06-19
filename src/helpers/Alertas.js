import Swal from "sweetalert2"

export const alertaWarning = (text = "Debe ingresar un evento") => {
  Swal.fire({
    icon: 'warning',
    html: `<b>${text}</b>`,
    timer: 2000,
    confirmButtonColor: "#3c2c1b", // dataInfoGeneral.backgroundButton
  })
}