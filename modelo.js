const fs = require('fs')
const Clases = require('./clases.js')

//--- TURNOS -------------------

function nuevoTurno(data){
    if(data instanceof Clases.Turno){
        console.log("--Modelo--")
        let str_turnos = fs.readFileSync('./db/turnos.txt','utf-8')
        let turnos = []
        if(str_turnos){
            turnos = JSON.parse(str_turnos)
        }

        turnos.push(data)

        fs.writeFileSync('./db/turnos.txt',JSON.stringify(turnos))
        return {success: true}
    }
}
function getTurnos(){
    let turnos = [];
    const str_turnos = fs.readFileSync('./db/turnos.txt','utf-8')
    if (str_turnos){
        let arTurnos = JSON.parse(str_turnos)
        for (let i = 0; i < arTurnos.length; i++){
            let t = arTurnos[i]
            let c = t.cliente;
            let cliente = new Clases.Cliente(c.nombre, c.dni, c.telefono);
            turnos.push(new Clases.Turno(t.dia, t.hora, t.libre, cliente))
        }         
    }
    return turnos;
}

function setTurnos(turnos){
    if(Array.isArray(turnos)){
        fs.writeFileSync('./db/turnos.txt', JSON.stringify(turnos), 'utf-8')
        return {success: true}
    } 
}

//--- CLIENTES -----------------

function nuevoCliente(data){
    if(data instanceof Clases.Cliente){
        console.log("--Modelo--")
        let str_cliente = fs.readFileSync('./db/clientes.txt','utf-8')
        let clientes = []
        if(str_cliente){
            clientes = JSON.parse(str_cliente)
        }

        clientes.push(data)

        fs.writeFileSync('./db/clientes.txt',JSON.stringify(clientes))
        return {success: true}
    }
}

function getClientes(){
    let clientes = [];
    const str_cliente = fs.readFileSync('./db/clientes.txt','utf-8')
    if (str_cliente){
        let arClientes = JSON.parse(str_cliente)
        for (let i = 0; i < arClientes.length; i++){
            let c = arClientes[i]
            clientes.push(new Clases.Cliente(c.nombre, c.dni, c.telefono))
        }         
    }
    return clientes;
}

function setClientes(clientes){
    if(Array.isArray(clientes)){
        fs.writeFileSync('./db/clientes.txt', JSON.stringify(clientes), 'utf-8')
        return {success: true}
    } 
}

//--- USUARIOS -------------------

function nuevoUsuario(data){
    if(data instanceof Clases.Usuario){
        console.log("--Modelo--")
        let usuarios = getUsuarios()
        usuarios.push(data)
        setUsuarios(usuarios)
        return {success: true}
    }
}

function getUsuarios(){
    let usuarios = [];
    const str_usuario = fs.readFileSync('./db/usuarios.txt','utf-8')
    if (str_usuario){
        let arUsuarios = JSON.parse(str_usuario)
        for (let i = 0; i < arUsuarios.length; i++){
            let u = arUsuarios[i]
            usuarios.push(new Clases.Usuario(u.nombre, u.contacto, u.pass, u.rol))
        }         
    }
    return usuarios;
}

function setUsuarios(usuarios){
    if(Array.isArray(usuarios)){
        fs.writeFileSync('./db/usuarios.txt', JSON.stringify(usuarios), 'utf-8')
        return {success: true}
    } 
}




module.exports = {nuevoUsuario, getUsuarios, setUsuarios, setClientes, getClientes, setTurnos, getTurnos, nuevoTurno, nuevoCliente}