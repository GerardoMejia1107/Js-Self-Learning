const miPromesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve("Operación completada con éxito");
  } else {
    reject("Hubo un error en la operación");
  }
});

miPromesa
  .then((resultado) => {
    console.log(resultado); // "Operación completada con éxito"
  })
  .catch((error) => {
    console.error(error);
  });
