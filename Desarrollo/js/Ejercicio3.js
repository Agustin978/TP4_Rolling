let rectangulos = [];
class Rectangulo
{
    constructor(alto, ancho)
    {
        this.alto = alto;
        this.ancho = ancho;
        this.perimetro = this.#calculaPerimetro();
        this.area = this.#calculaArea();
    }
    setAlto(alto)
    {
        this.alto = alto;
    }
    setAncho(ancho)
    {
        this.ancho = ancho;
    }
    getAlto()
    {
        return this.alto;
    }
    getAncho()
    {
        return this.ancho;
    }
    #calculaPerimetro()
    {
        return 2 * (parseInt(this.alto) + parseInt(this.ancho));
    }
    #calculaArea()
    {
        return parseInt(this.alto) * parseInt(this.ancho);
    }
    muestraDatos()
    {
        return 'Altura: '+this.alto+' - Ancho: '+this.ancho+' - Perimetro: '+this.perimetro+' - Area: '+this.area;
    }
}

function agregaRectangulo()
{
    let alto, ancho;
    do
    {
        alto = prompt("Indique la altura del rectangulo:");
        if(isNaN(parseInt(alto)) || parseInt(alto) < 1)
        {
            alert("Usted a ingresado una altura no valida. Por favor intentente nuevamente.");
        }
    }while(isNaN(parseInt(alto)) || parseInt(alto) < 1);

    do
    {
        ancho = prompt("Indique el ancho del rectangulo:");
        if(isNaN(parseInt(ancho)) || parseInt(ancho) < 1)
        {
            alert("Usted a ingresado un ancho no valida. Por favor intentente nuevamente.");
        }
    }while(isNaN(parseInt(ancho)) || parseInt(ancho) < 1);
    rectangulos.push(new Rectangulo(parseInt(alto), parseInt(ancho)));
    mostrar();
}


function mostrar()
{
    let datosHTML = "";
    for(let rectangulo in rectangulos)
    {
        datosHTML += creaDatoHtml(rectangulo);
    }
    document.getElementById('lista_rectangulos').innerHTML = datosHTML;
}

let creaDatoHtml = (rectangulo) =>
{
    let rectanguloHTML = rectangulo.muestraDatos();
    return rectanguloHTML;
}

document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
document.write("<li class='list-group-item text-center'><button type='button' class='btn btn-success mx-1' onclick='agregaRectangulo()'>Agregar un rectangulo.</button><button type='button' class='btn btn-success mx-1' onclick='#'>Mostrar.</button></li>"); 
document.write("<li class='list-group-item text-center' id='lista_rectangulos'></li>");
document.write("</ul></div></section>");
