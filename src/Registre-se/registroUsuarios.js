const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const senha = document.getElementById("senha")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

function checkusername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "É necessario colocar um nome")
    } else {
        const formItem = username.parentElement;
        formItem.className = "container-form"
    }


}

function checkEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "É necessario preencher o email")
    } else {
        const formItem = email.parentElement;
        formItem.className = "container-form"
    }
}

function checkSenha() {
    const senhaValue = senha.value;

    if (senhaValue === "") {
        errorInput(senha, "É necessario colocar uma senha")
    } else {
        const formItem = senha.parentElement;
        formItem.className = "container-form"
    }

}


function checkForm() {
    checkusername();
    checkEmail();
    checkSenha();

    const formItems = form.querySelectorAll(".container-form")

    const isValid = [...formItems].every ((item) => {
        return item.className === "container-form"
    });

    if(isValid){
        alert("Você se cadastrou!")
        window.location.href = "/src/cadastroSeries/cadastro.html"
    }
}


function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "container-form error"
}

