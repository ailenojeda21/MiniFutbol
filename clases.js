// clases.js
class Turno {
    constructor(dia, hora, libre) {
        this._dia = dia;
        this._hora = hora;
        this._libre = libre;
        this._cliente = Cliente;
    }

    get dia(){
        return this._dia
    }
    set dia(nuevoDia){
        this._dia = nuevoDia
    }

    get hora(){
        return this._hora
    }
    set hora(nuevaHora){
        this._hora = nuevaHora
    }

    get libre(){
        return this._libre
    }
    set libre(nuevoEstado){
        this._libre = nuevoEstado
    }              

    get cliente(){
        return this._cliente
    }
    set cliente(nuevoCliente){
        this._cliente = nuevoCliente
    }

    fromJSON(json){
        const {dia,hora,libre,cliente} = JSON.parse(json)
        this._dia = dia
        this._hora = hora
        this._libre = libre
        this._cliente = new Cliente(cliente.nombre, cliente.dni, cliente.telefono);
    }

}

class Cliente{
    constructor(nombre,dni,telefono){
        this._nombre = nombre
        this._dni = dni;
        this._telefono = telefono;
    }

    get nombre(){
        return this._nombre
    }       
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    get dni(){
        return this._dni
    }
    set dni(nuevoDni){
        this._dni = nuevoDni
    }   

    get telefono(){
        return this._telefono
    } 
    set telefono(nuevoTelefono){
        this._telefono = nuevoTelefono
    }

    fromJSON(json){
        const {nombre,dni,telefono} = JSON.parse(json)
        this._nombre = nombre
        this._dni = dni
        this._telefono = telefono
    }
}

module.exports = {Turno,Cliente};

