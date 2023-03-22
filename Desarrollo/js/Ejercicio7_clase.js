class Contacto
{
    #nombre;
    #telefono;
    constructor(nombre, telefono)
    {
        this.#nombre = nombre;
        this.#telefono = telefono;
    }
    get nombre()
    {
        return this.#nombre;
    }
    set nombre(nuevoNombre)
    {
        this.#nombre = nuevoNombre;
    }
    get telefono()
    {
        return this.#telefono;
    }
    set telefono(nuevoTelefono)
    {
        this.#telefono = nuevoTelefono;
    }
}

class Agenda
{
    #tamanio;
    constructor(tamanio)
    {
        this.contactos = [];
        this.#tamanio = tamanio;
    }

    get tamanio()
    {
        return this.#tamanio;
    }

    set tamanio(nuevoTamanio)
    {
        this.#tamanio = nuevoTamanio;
    }

    agregarContacto(contacto)
    {
        //Debo determinar si el contacto existe en la agenda
        if(!this.existeContacto(contacto.nombre))
        {
            //Y debo determinar si la agenda tiene espacio disponible
            if(!this.agendaLlena())
            {
                this.contactos.push(contacto);
                console.log('Contacto agregado');
            }else
            {
                alert('El contacto no se puede agregar ya que la agenda esta llena.')
            }
        }else
        {
            alert('El contacto ya existe. No lo voy a agregar');
        }
            
        
    }
    agendaLlena()
    {
        if(this.contactos.length === this.tamanio)
        {
            return true;
        }
        return false;
    }
    existeContacto(nombreBusca)
    {
        const existe = this.contactos.find(contacto => contacto.nombre === nombreBusca);
        if(existe)
        {
            console.log('El contacto existe');
            return true;
        }else
        {
            console.log('El contacto no existe');
            return false;
        }
        /*
        for(let contacto in this.contactos)
        {
            if(contacto.nombre == nombreBusca)
            {
                
            }
        }*/
    }
    listarContactos()
    {
        this.contactos.map(contacto => {
            document.write('<li class="list-group-item text-center"><p>Nombre:'+contacto.nombre+' - Telefono: '+contacto.telefono+'</p></li>');
            console.log('Nombre:'+contacto.nombre+' - Telefono: '+contacto.telefono);
        })
    }
    buscarContacto(nombreBusca)
    {
        const contactoBuscado = this.contactos.find(contacto => contacto.nombre === nombreBusca);
        if(contactoBuscado)
        {
            console.log('Contacto encontrado. Nombre: '+contactoBuscado.nombre+' - Telefono: '+contactoBuscado.telefono);
        }else
        {
            console.log('Contacto buscado bajo el nombre '+nombreBusca+' no fue encontrado.');
        }
    }
    eliminarContacto(nombreEliminar)
    {
        let contactosFiltrados = this.contactos.filter(contacto => contacto.nombre != nombreEliminar);
        if(contactosFiltrados.length == this.contactos.length)
        {
            console.log('No se elimino al contacto solicitado ya que no se encontro al contacto con nombre '+nombreEliminar);
        }else
        {
            console.log('Se elimino el contacto de nombre '+nombreEliminar);
        }
        this.contactos = contactosFiltrados;
        this.listarContactos();
    }
    espaciosDisponibles()
    {
        let espacios = this.tamanio - this.contactos.length;
        espacios > 0 ? console.log('Le quedan '+espacios+' disponibles.'):
        console.log('No le quedan espacios disponibles');
    }
    aumentarTamanio(nuevoTamanio)
    {
        this.tamanio(nuevoTamanio);
        this.espaciosDisponibles();
    }
}

let nuevaAgenda = new Agenda(10);
console.log(nuevaAgenda);
document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
do
{
    let opcion = parseInt(prompt('Seleccione una opcion: \n 1-Añadir Contacto\n 2-Existe Contacto\n 3-Listar Contactos\n 4-Buscar Contacto \n 5-Eliminar Contacto\n 6-Agenda Llena\n 7-Huecos Libres\n 8-Cambiar tamalo de la agenda.'));

    switch(opcion)
    {
        case 1:
            console.log('Agrega contacto');
            let nombre = prompt('Ingrese el nombre del contacto:');
            let telefono = prompt('Ingrese el telefono del contacto:');
            let nuevoContacto = new Contacto(nombre, telefono);
            nuevaAgenda.agregarContacto(nuevoContacto);
            break;
        case 2:
            console.log('Existe contacto');
            let nombreBusca = prompt('Ingrese el nombre del contacto a determinar si existe:');
            nuevaAgenda.existeContacto(nombreBusca);
            break;
        case 3:
            console.log('Listar contactos');
            nuevaAgenda.listarContactos();
            break;
        case 4:
            console.log('Buscar contacto');
            let nombreBuscado = prompt('Nombre de la persona que desee buscar:');
            nuevaAgenda.buscarContacto(nombreBuscado);
            break;
        case 5:
            console.log('Eliminar contacto');
            let nombrEliminar = prompt('Ingrese el nombre del contacto que desee elminar: ');
            nuevaAgenda.eliminarContacto(nombrEliminar);
            break;
        case 6:
            if(nuevaAgenda.agendaLlena())
            {
                document.write('La agenda se lleno.');
                console.log('La agenda se lleno.')
            }else
            {
                document.write('La agenda aún no se lleno.');
                console.log('La agenda aún no se lleno.');
            }
            break;
        case 7:
            console.log('Espacios libres.');
            nuevaAgenda.espaciosDisponibles();
            break;
        default:
            console.log('Cambiar tamaño de la agenda.');
            const nuevoTamanio = parseInt(prompt('Ingrese el nuevo espacio de la agenda:'));
            break;
    }
}while(confirm('Desea realizar una nueva operacion?'));
document.write("</ul></div></section>");