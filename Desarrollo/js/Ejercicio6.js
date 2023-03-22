class Libro
{
    constructor(ISBN, titulo, autor, numPaginas)
    {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    getISBN()
    {
        return this.ISBN;
    }
    getTitulo()
    {
        return this.titulo;
    }
    getAutor()
    {
        return this.autor;
    }
    getNumPaginas()
    {
        return this.numPaginas;
    }
    setISBM(ISBM)
    {
        this.ISBN = ISBM;
    }
    setTitulo(tituloNuevo)
    {
        this.titulo = tituloNuevo;
    }
    setAutor(autor)
    {
        this.autor = autor;
    }
    setNumPaginas(numPag)
    {
        this.numPaginas = numPag;
    }
    muestraDatos()
    {
        return 'El libro '+this.getTitulo()+' con ISBN '+this.getISBN()+' creado por el autor '+this.getAutor()+' tiene '+this.getNumPaginas()+' páginas.';
    }
}

let libro1 = new Libro(123456, 'Harry Potter y la piedra filosofal', 'J. K. Rowling', 309);
let libro2 = new Libro(557935, 'El Señor de los Anillos', 'J. R. R. Tolkien', 576);
let libro3 = new Libro(367524, 'El Principito', 'Antoine de Saint-Exupéry', 12);
libro3.setNumPaginas(120);

document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
document.write("<li class='list-group-item text-center'><p>"+libro1.muestraDatos()+"</p></li>");
document.write("<li class='list-group-item text-center'><p>"+libro2.muestraDatos()+"</p></li>");
document.write("<li class='list-group-item text-center'><p>"+libro3.muestraDatos()+"</p></li>");
document.write("</ul></div></section>");