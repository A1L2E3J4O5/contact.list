let nombres =
[
    "jesus ramirez",
    "daniela dorado",
    "alejandro ruiz",
]


let dos = parseInt(prompt("elige \n 1 para agregar \n 2 para eliminar"));

if (dos == 1)
{
    for (u = 1; u <= 10; u++)
     {
        let usuario = u;
        usuario = prompt("Nombre y Apellido");
        nombres.push(usuario)
        
        if (usuario === null) {
            console.log("Operación cancelada por el usuario.");
            console.log("fin del registro");
            break;
        }   
        console.log(nombres.join("-"));
    }   
}
else if(dos == 2)
{
    let borrar = prompt("registro a borrar", nombres);

    if(borrar == nombres[0])
    {

        console.log(nombres[1]);
        console.log(nombres[2]);
        console.log("elemento:",nombres[0], "eliminado")
    }
    if(borrar == nombres[1])
    {
        console.log(nombres[0]);
        console.log(nombres[2]);
        console.log("elemento:",nombres[1], "eliminado")
    }
    if(borrar == nombres[2])
    {
        console.log(nombres[0]);
        console.log(nombres[1]);
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
    
}