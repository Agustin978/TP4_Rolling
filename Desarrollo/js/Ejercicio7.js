class Contacto
{
    #id = 0;
    static autoincremental = 0;
    constructor(nombre, numero)
    {
        this.#id = this.autoincremental++;
        this.nombre = nombre;
        this.numero = numero;
    }
    getNombre()
    {
        return this.nombre;
    }
    getNumero()
    {
        return this.numero;
    }
    getID()
    {
        return this.#id;
    }
    setNombre(nuevoNombre)
    {
        this.nombre = nuevoNombre;
    }
    setNumero(nuevoNum)
    {
        this.numero = nuevoNum;
    }
}

class Agenda
{
    contactos = [];
    constructor(contactos)
    {
        this.contactos = contactos;
    }
    aniadirContacto(contacto)
    {
        this.contactos.push(contacto);
    }
    buscarContacto(contactoBusca)
    {
        let contactosBuscados = [];
        for(let contacto in this.contactos)
        {
            if(contacto.getNombre() == contactoBusca)
            {
                contactosBuscados.push(contacto);
            }
        }
        return contactosBuscados;
    }
    listarContactos()
    {
        for(let contacto in this.contactos)
        {
            document.write('Nombre: '+contacto.getNombre()+' - Numero: '+contacto.getNumero()+' - ID: '+contacto.getID());
        } 
    }
    existeContacto(contactoBusca)
    {
        for(let contacto in this.contactos)
        {
            if(contacto.getNombre() == contactoBusca)
            {
                return true;
            }
        }
        return false;
    }
    eliminarContactoporID(contactoID)
    {
        for(let contacto in this.contactos)
        {
            if(contacto.getID() == contactoID)
            {
                this.contactos.splice(1,0,contacto);
            }
        }
    }
}

document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
