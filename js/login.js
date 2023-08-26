let usuario = document.getElementById('usuario')
let senha = document.getElementById('usuario')

let listaUsuarios = 
[{usuario: 'alexandre',
senha: 29932},
{usuario: 'felipe',
senha: 83392}, 
{usuario: 'vinicius',
senha: 99283}]

function validarLogin() {
    for(let i = 0; i < listaUsuarios.length; i++) {
        if(listaUsuarios[i].usuario === usuario && listaUsuarios[i].senha === senha) {
            console.log("login bem sussedido")
            return
        } else {
            console.log("Usuario ou senha incorretos")
        }
    }
}