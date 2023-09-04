let usuari =
    [
        "jesus ",
        "daniela ",
        "camila ",
    ]
let Apellidos =
    [
        "ramirez",
        "dorado",
        "ruiz"
    ]


alert("numero de usuarios registrados: "+  id.length)

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


            cancelar = prompt("para agrgar dar aceptar para finalizar dar cancelar ")

                                                     
            if (nombre, Apellidos, cancelar === null) 
                    {
                        console.log("Operación cancelada por el usuario.");
                        console.log("fin del registro");
                        break;
                    }   
        }
        // Ver usuarios

        let a = parseInt(prompt("id de usuario registrado"));

        console.log("nombre: ",usuari[a],"apellido: ", Apellidos[a])

        // Ver usuarios predeterminados
    }

 

if (elegir == 2)
{
    let b = parseInt(prompt("id de usuario que va a  borrar"));

    // Ver usuarios

     console.log("informacion de usuario borrado \n nombre: ",usuari[b],"apellido: ", Apellidos[b])
    
    // Ver usuarios predeterminados

    usuari.pop(b);
    Apellidos.pop(b);


}


alert("numero de usuarios registrados: "+  id.length);

}
setInterval(modificarLista, 1000);
