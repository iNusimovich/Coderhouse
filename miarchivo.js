let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Ignacio') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert("Bienvenido Ignacio! \n \nLos siguientes usuarios han intentado ingresar pero no lo lograron: \n \n" + ingresados);