document.getElementById('register-form').addEventListener('submit', function(event) {

    event.preventDefault();
    const body = {
        email: document.getElementById('email').value,
        nome: document.getElementById('nome').value,
        lastname: document.getElementById('lastname').value,
        senha: document.getElementById('senha').value,
        passwordConfirmation: document.getElementById('passwordConfirmation').value,
    }
     axios.post("http://localhost:8080/cadastrar", body).then((response)=>{
        console.log("Cadastrado com sucesso! ", response.data)
    })
})