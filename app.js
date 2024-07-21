const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();
await fetch('https://sheet.best/api/sheets/7c1523d3-5e3a-4d31-9ce2-4c61c2fbf2a3', {
     method: 'POST',
     mode: 'cors',
     headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({   
            "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value,
            "Telefono": formulario.telefono.value
        })
    });

    registro.classList.remove('activo');
    exito.classList.add('activo');
});