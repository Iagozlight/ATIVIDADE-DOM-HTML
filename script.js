function validar_nome(nome) {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nome)
}

function validar_email(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
}

function validar_idade(idade) {
    const regex = /^\d+$/
    if (!regex.test(idade)) return false

    const idadeNum = parseInt(idade)
    return idadeNum >= 0 && idadeNum <= 120
}

function validar_formulario(event) {
    event.preventDefault()

    const nome = document.getElementById ("nome").value.trim()
    const email = document.getElementById ("email").value.trim()
    const idade = document.getElementById ("idade").value.trim()
    const mensagem = document.getElementById ("mensagem")

    let msg = ""

    if ( !validar_nome(nome)) {
        msg += "❌ Nome invalido!";
    }else {
        msg += "✅ Nome valido!"
    }

    if ( !validar_email(email)) {
        msg += "❌ Email invalido!";
    }else {
        msg += "✅ Email valido!"
    }

    if ( !validar_idade(idade)) {
        msg += "❌ Idade invalida!";
    }else {
        msg += "✅ Idade valida!"
    }

    mensagem.innerHTML = msg
    mensagem.style.color = "blue"

}
document.getElementById ("formulario").addEventListener("submit", validar_formulario)
// JS feito por Mateus
