class Persona
{
    #dni;
    constructor(nombre, edad, sexo, peso, altura)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.#dni = this.#generaDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        const anioActual = new Date();
        this.anioNacimiento = anioActual.getFullYear() - this.edad;
    }
    //Metodos getter
    getNombre()
    {
        return this.nombre;
    }
    getEdad()
    {
        return this.edad;
    }
    getSexo()
    {
        return this.sexo;
    }
    getPeso()
    {
        return this.peso;
    }
    getAltura()
    {
        return this.altura;
    }
    getAnioNace()
    {
        return this.anioNacimiento;
    }
    get dni()
    {
        return this.#dni;
    }
    mostrarGeneracion()
    {
        let respuesta;
        if(1930 <= parseInt(this.anioNacimiento) && parseInt(this.anioNacimiento) <= 1948)
        {
            respuesta = 'Austeridad';
        }else if(1949 <= parseInt(this.anioNacimiento) && parseInt(this.anioNacimiento) <= 1968)
        {
            respuesta = 'Ambición';
        }else if(1969 <= parseInt(this.anioNacimiento) && parseInt(this.anioNacimiento) <= 1980)
        {
            respuesta = 'Obsesión por el exito';
        }else if(1981 <= parseInt(this.anioNacimiento) && parseInt(this.anioNacimiento) <= 1993)
        {
            respuesta = 'Frustración';
        }else if(1994 <= parseInt(this.anioNacimiento) && parseInt(this.anioNacimiento) <= 2010)
        {
            respuesta = 'Irreverencia';
        }else
        {
            respuesta = 'Taxonomía no identificada para la edad solicitada :(';
        }
        return respuesta;
    }
    esMayorDeEdad()
    {
        if(parseInt(this.edad) >= 18)
        {
            return true;
        }else
        {
            return false;
        }
    }
    mostrarDatos()
    {
        return 'Nombre: '+this.nombre+' - Edad: '+this.edad+' - Año de nacimiento: '+this.anioNacimiento+' - Sexo: '+this.sexo+' - DNI: '+this.#dni;
    }
    #generaDNI()
    {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
    }
}

function agregaPersona()
{
    let nombre, edad, sexo, peso, altura;
    do
    {
        nombre = prompt('Ingrese el nombre de la persona:');
    }while(!isNaN(nombre) || nombre.length < 3);

    do
    {
        edad = prompt('Ingrese la edad de la persona:');
    }while(isNaN(parseInt(edad)) || parseInt(edad) < 0);

    do
    {
        peso = prompt('Ingrese el peso de la persona:');
    }while(isNaN(parseInt(peso)) || parseInt(peso) < 2);

    do
    {
        altura = prompt('Ingrese la altura de la persona (en centimetros):');
    }while(isNaN(parseInt(altura)) || parseInt(altura) < 50);

    do
    {
        sexo = prompt('Ingrese el sexo de la persona:');
    }while(!isNaN(sexo));

    let persona = new Persona(nombre, edad, sexo, peso, altura);

    if(persona.esMayorDeEdad)
    {
        alert(persona.mostrarDatos() + ' - Taxonomia de su generacion: '+persona.mostrarGeneracion()+' - Es mayor de edad.');
    }else
    {
        alert(persona.mostrarDatos() + ' - Taxonomia de su generacion: '+persona.mostrarGeneracion()+' - No es mayor de edad.');
    }
}

document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
document.write("<li class='list-group-item text-center'><button type='button' class='btn btn-success mx-1' onclick='agregaPersona()'>Agregar persona.</button></li>");
document.write("</ul></div></section>");