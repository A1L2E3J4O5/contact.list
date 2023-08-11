/* let nombres = 
[
    "jesus ramirez",
    "daniela dorado",
    "alejandro ruiz",
]


let dos = parseInt(prompt("elige \n 1 para agregar \n 2 para eliminar"));

if (dos === 1)
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
        console.log(nombres);
    }   
}
else if(dos == 2)
{
    
    alert("nombres registrados: ");
    alert(nombres);
    let borrar = parseInt(prompt("seleciones numero segun registro"));

    if(borrar == 0)
        {
            console.log(nombres[1]);
            console.log(nombres[2]);
            console.log("elemento: ",nombres[0], "eliminado")
        }
    if(borrar == 1)
        {
            console.log(nombres[0]);
            console.log(nombres[2]);
            console.log("elemento: ",nombres[1], "eliminado")
        }
    if(borrar == 2)
        {
            console.log(nombres[0]);
            console.log(nombres[1]);
            console.log("elemento: ",nombres[2], "eliminado")
        }
    if(borrar > 3)
        {
            console.log("registro no encontrado");
        }
}

 */