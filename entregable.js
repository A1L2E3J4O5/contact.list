let usuari =
    [
        "jesus ",
        "daniela ",
        "camila "
    ]
let Apellidos =
    [
        "ramirez",
        "dorado",
        "ruiz"
    ]
let id  =
    [
        0,
        1,
        2
    ]
let telefonos =
    [
        123,
        456,
        789
    ]
let Ubicaciones=
    [
        "colombia",
        "Argentina",
        "Brasil"
    ]
    
alert("numero de usuario a registrar: "+  id.length)

for (empezar = 1; empezar <= 100; empezar++)
{
    function modificarLista ()
{
    let elegir = parseInt(prompt("elige \n 1 para agregar \n 2 para eliminar" ));
 
 if (elegir === 1)
    {
        for (u = 1; u <= 10; u++)
        {
            nombre = prompt("Cual es tu nombre");
            usuari.push(nombre);

            apellido = prompt("Cual es tu apellido");
            Apellidos.push(apellido);

            idU = prompt("Cual es tu id");
            id.push(idU)

            telefono = prompt("Cual es tu telefono");
            telefonos.push(telefono);

            ubicacion = prompt("Cual es tu ubicacion");
            Ubicaciones.push(ubicacion);

            cancelar = prompt("para agregar dar aceptar para finalizar dar cancelar ")

                                                     
            if (nombre, Apellidos, idU, telefono, ubicacion, cancelar === null) 
                    {
                        console.log("Operación cancelada por el usuario.");
                        console.log("fin del registro");
                        break;
                    }   
        }
        // Ver usuarios

        let a = parseInt(prompt("id de usuario registrado"));

        console.log("nombre: ",usuari[a],"apellido: ", Apellidos[a],"id: ", id[a],"telefono: ", telefonos[a],"ubicacion: ",Ubicaciones[a])

        // Ver usuarios predeterminados
    }

 

if (elegir == 2)
{
    let b = parseInt(prompt("id de usuario que va a  borrar"));

    // Ver usuarios

     console.log("informacion de usuario borrado \n nombre: ",usuari[b],"apellido: ", Apellidos[b],"id: ", id[b],"telefono: ", telefonos[b],"ubicacion: ",Ubicaciones[b])
    
    // Ver usuarios predeterminados

    usuari.pop(b);
    Apellidos.pop(b);
    id.pop(b)
    telefonos.pop(b);
    Ubicaciones.pop(b);

}


if (elegir == null)
{
    empezar = 100;
}

alert("Siguiente ID a registrar: "+  id.length);

}
modificarLista()
}


