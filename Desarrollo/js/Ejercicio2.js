let cuenta =
{
    titular: 'Alex',
    saldo: 0,
    ingresar: function(dineroIngresa)
    {
        this.saldo = parseInt(this.saldo) + parseInt(dineroIngresa);
        //this.informar()
    },
    extraer: function(dineroExtrae)
    {
        if(parseInt(this.saldo) >= parseInt(dineroExtrae))
        {
            this.saldo = parseInt(this.saldo) - parseInt(dineroExtrae);
        }else
        {
            alert("Su saldo es de $"+this.saldo+", no puede extraer mas que esa cantidad.");
        }
        //this.informar();
    },
    informar: function()
    {
        alert("Cuenta a nombre de "+this.titular+". Su saldo disponible es de $"+this.saldo+".");
    }
}

function ingresarDinero()
{
    let ingresa;
    do
    {
        ingresa = prompt("Indique cuanto dinero desea ingresar:");
        if(isNaN(parseInt(ingresa)) || parseInt(ingresa) < 1)
        {
            alert("Usted a ingresado una cantidad no validad de dinero a ingresar. Por favor intentente nuevamente.");
        }
    }while(isNaN(parseInt(ingresa)) || parseInt(ingresa) < 1);
    cuenta.ingresar(ingresa);
}

function extraeDinero()
{
    let extrae;
    do
    {
        extrae = prompt("Indique cuanto dinero desea extraer:");
        if(isNaN(parseInt(extrae)) || parseInt(extrae) < 1)
        {
            alert("Usted a ingresado una cantidad no validad de dinero a extraer. Por favor intentente nuevamente.");
        }
    }while(isNaN(parseInt(extrae)) || parseInt(extrae) < 1);
    cuenta.extraer(extrae);
}

document.write("<section class='container'> <div class='card my-2'> <ul class='list-group list-group-flush'>");
document.write("<li class='list-group-item text-center'><button type='button' class='btn btn-success mx-1' onclick='ingresarDinero()'>Ingresar dinero.</button><button type='button' class='btn btn-danger mx-1' onclick='extraeDinero()'>Retirar dinero.</button></li>");
document.write("<li class='list-group-item text-center'><button type='button' class='btn btn-success mx-1' onclick='cuenta.informar()'>Recibir informe.</button></li>")
document.write("</ul></div></section>");