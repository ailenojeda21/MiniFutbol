// clases.js
class Turno {
    constructor(dia, hora, libre) {
        this.dia = dia;
        this.hora = hora;
        this.libre = libre;
        this.Cliente = Cliente;
    }
    
    set Dia(dia) {
        this.dia = dia;
    }
    get Dia() {
        return this.dia;
    }

    set Hora(hora) {
        this.hora = hora;
    }
    get Hora() {
        return this.hora;
    }
    
    set Libre(libre) {
        this.libre = libre;
    }
    get Libre() {
        return this.libre;
    }
    
    set Cliente(cliente) {
        this.Cliente = cliente;
    }   
    get Cliente() {
        return this.Cliente;
    }
    
    equals(Turno){
        return this.dia == Turno.dia && this.hora == Turno.hora && this.libre == Turno.libre;
    }
    
    FromJSON(json){
        let obj = JSON.parse(json)
        this.dia = obj.dia
        this.hora = obj.hora
        this.libre = obj.libre
        this.Cliente = obj.Cliente
    }
}

class Cliente{
    constructor(nombre,dni,telefono){
        this.nombre = nombre
        this.dni = dni;
        this.telefono = telefono;
    }

    set Nombre(nombre) {
        this.nombre = nombre;
    }
    get Nombre() {
        return this.nombre;
    }

    set Dni(dni) {
        this.dni = dni;
    }
    get Dni() {
        return this.dni;
    }
    
    set Telefono(telefono) {
        this.telefono = telefono;
    }
    get Telefono() {
        return this.telefono;
    }
    
    FromJSON(json){
        let obj = JSON.parse(json)
        this.nombre = obj.nombre
        this.dni = obj.dni
        this.telefono = obj.telefono
    }
}

module.exports = {Turno,Cliente};