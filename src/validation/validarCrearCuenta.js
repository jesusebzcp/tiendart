export default function validarCrearCuenta(valores) {
  let errores = {};

  //validar nombre de usuario
  if (!valores.nombre) {
    errores.nombre = 'El Nombre es obligatorio';
  }
  //validar id
  if (!valores.idRt) {
    errores.idRt = 'El ID es obligatorio';
  } else if (valores.idRt.length < 3) {
    errores.password = 'El ID debe ser mayor a 4 digitos';
  }

  //validar telefono
  if (!valores.telefono) {
    errores.telefono = 'El Telefono es obligatorio';
  }

  //validar email
  if (!valores.email) {
    errores.email = 'El Email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = 'Email no valido';
  }

  //validar password
  if (!valores.password) {
    errores.password = 'El password es obligatorio';
  } else if (valores.password.length < 6) {
    errores.password = 'La constraseña debe ser mayor a 6 digitos';
  }
  return errores;
}
