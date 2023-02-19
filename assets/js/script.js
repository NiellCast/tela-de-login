/* Gambiarra para permitir interação com a página sem back-end e banco de dados */

const getUsername = document.querySelector("#username")
const getPassword = document.querySelector("#password")
const getEmail = document.querySelector("#email")
const sigInButton = document.querySelector("#btn-cadastrar")
const resposta = document.querySelector("#resposta")
const linkJaPossuiConta = document.querySelector("#link-ja-possui-conta")
const accounts = []
let account

function clear() {
    getUsername.value = ""
    getPassword.value = ""
    getEmail.value = ""
}

/* SIGN IN */

sigInButton.addEventListener('click', () => {
    account = {
        username: getUsername.value,
        password: getPassword.value,
        email: getEmail.value
    }

    const contaCadastrada = (accounts.find((elemento, index) => {
        if (account.username === elemento.username || account.email === elemento.email) {
            return true
        }
    }))

    if (contaCadastrada) {
            resposta.innerHTML = "Usuário ou Email já registrado."
            resposta.style.color = 'red'
    } else {
        accounts.push(account)
        clear()

        resposta.innerHTML = "Conta cadastrada com sucesso"
        resposta.style.color = 'green'
    }
  
})