const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const uf = document.getElementById("uf");
const idade = document.getElementById("idade");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();

});

function checkInputs() {
  checkInput(username, "Nome obrigatório");
  checkInput(email, "Email obrigatório");
  checkInput(cpf, "CPF obrigatório");
  checkInput(telefone, "Telefone obrigatório");
  checkInput(cep, "CEP obrigatório");
  checkInput(rua, "Rua obrigatório");
  checkInput(bairro, "Bairro obrigatório");
  checkSelect(uf, "UF obrigatório");
  checkSelect(idade, "Idade obrigatório");

}

document.getElementById('telefone').addEventListener('input', function (e){
  e.target.value = e.target.value.replace(/\D/g, '');
  if (e.target.value.length > 11) {
    e.target.value = e.target.value.substring(0, 11);
  }
  if (e.target.value.length === 11) {
    e.target.value = e.target.value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } 
});

document.getElementById('cep').addEventListener('input', function (e){
  e.target.value = e.target.value.replace(/\D/g, '');
  if (e.target.value.length > 8) {
    e.target.value = e.target.value.substring(0, 8);
  }
  if (e.target.value.length === 8) {
    e.target.value = e.target.value.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1$2-$3');
   
  } 
});

function checkInput(input, message) {
  const inputValue = input.value.trim();
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  if (inputValue === "") {
    textMessage.innerText = message;
    formItem.classList.add("error");
  } else {
    textMessage.innerText = "";
    formItem.classList.remove("error");
  }

 function checkSelect(input, message){
     const inputValue = input.value.trim();
     const formItem = input.parentElement.parentElement;
     const textMessage = formItem.querySelector("a");


     if(inputValue === "") {
       textMessage.innerText = message;
       formItem.classList.add("error");
     }else {
       textMessage.innerText = "";
       formItem.classList.remove("error");

     }


     }


 }

  