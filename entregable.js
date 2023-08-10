let nombres =
[
    "jesus ramirez",
    "daniela dorado",
    "alejandro ruiz",
]


let dos = parseInt(prompt("elige \n 1 para agregar \n 2 para eliminar"));

if (dos == 1)
{
    for (u = 1; u <= 100; u++)
     {
        let usuario = u;
        usuario = prompt("Nombre y Apellido");
        nombres.push(usuario)
        
        if (usuario === null) {
            console.log("Operación cancelada por el usuario.");
            console.log("fin del registro");
            break;
        }   
<<<<<<< HEAD
        console.log(nombres.join("-"));
=======
        console.log(<list>nombres</list>);
>>>>>>> 7568abeee66e807167ad3753cbe1dfd9dc6877bf
    }   
}
else if(dos == 2)
{
<<<<<<< HEAD
    let borrar = prompt("registro a borrar", nombres);

    if(borrar == nombres[0])
=======
    let borrar = parseInt(prompt("elige  numero segun registro"));
    if(borrar == 0)
>>>>>>> 7568abeee66e807167ad3753cbe1dfd9dc6877bf
    {
        console.log(nombres[1]);
        console.log(nombres[2]);
        console.log("elemento:",nombres[0], "eliminado")
    }
    if(borrar == nombres[1])
    {
        console.log(nombres[0]);
        console.log(nombres[2]);
<<<<<<< HEAD
        console.log("elemento:",nombres[1], "eliminado")
=======
        console.log("elemento: ",nombres[0], "eliminado")
>>>>>>> 7568abeee66e807167ad3753cbe1dfd9dc6877bf
    }
    if(borrar == nombres[2])
    {
        console.log(nombres[0]);
        console.log(nombres[1]);
<<<<<<< HEAD
        console.log("elemento:",nombres[2], "eliminado")
    }
    if(borrar !== nombres[0] )
    {
        console.log("Registro no encontrado");

    } 
    if(borrar !== nombres[1] )
    {

        console.log("Operación cancelad")

    } 
    if(borrar !== nombres[2] )
    {

        console.log("fin del registro");
    } 
    
=======
        console.log("elemento: ",nombres[0], "eliminado")
    }
    if (borrar > 2)
    {
        console.log("registro no encontrado");
    }
>>>>>>> 7568abeee66e807167ad3753cbe1dfd9dc6877bf
}