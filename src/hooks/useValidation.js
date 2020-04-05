import React, { useEffect, useState } from 'react';

const useValidation = (stateIncial, validar, fn) => {
  const [valores, setValores] = useState(stateIncial);
  const [errores, setErrores] = useState({});
  const [registrarUser, setRegistrarUser] = useState(false);

  useEffect(() => {
    if (registrarUser) {
      const noErrores = Object.keys(errores).length === 0;
      if (noErrores) {
        fn(); //funcion que se ejecuta en el componente
      }
      setRegistrarUser(false);
    }
  }, [errores]);

  // Funcion que se ejecuta mientras el user escriba algo
  const handleChange = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };
  //funciona que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setRegistrarUser(true);
  };
  //cuando se realiza el evento blur
  const handleBlur = () => {
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
  };

  return {
    valores,
    errores,
    registrarUser,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useValidation;
