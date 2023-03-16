let auto = 
{
    color: "Blanco",
    marca: "Mazda",
    modelo: "RX-7",
    encender: function()
    {
        document.write("<li class='list-group-item'><p>El auto se encendio.</p></li>");
    },
    apagar: function()
    {
        document.write("<li class='list-group-item'><p>El auto se apago.</p></li>");
    }
}

document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
console.log(auto);
document.write(auto.encender);
document.write("<li class='list-group-item'><p>La marca del auto es "+auto.marca+".</p></li>");
document.write("<li class='list-group-item'><p>El modelo del auto es "+auto.modelo+".</p></li>");
document.write("<li class='list-group-item'><p>El auto es de color "+auto.color+".</p></li>");
document.write(auto.apagar);
document.write("</ul></div></section>");