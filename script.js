

let isLoginVisible = true;

function alternarFormulario() {
    const leftSection = document.querySelector("#left-section");
    const rightSection = document.querySelector("#right-section");
    const loginForm = document.querySelector("#login");
    const cadastroForm = document.querySelector("#register");
    const botaoAlternar = document.querySelector("#left-section button");

    if (isLoginVisible) {
        // Move as divs para a direita
        leftSection.style.transform = "translateX(100%)";
        rightSection.style.transform = "translateX(-100%)";

        // Atrasa a troca de informações por meio segundo (500 milissegundos)
        setTimeout(function () {
            loginForm.style.display = "none";
            cadastroForm.style.display = "block";
            botaoAlternar.textContent = "Ir para Login";
        }, 250);
    } else {
        // Move as divs para a esquerda
        leftSection.style.transform = "translateX(0)";
        rightSection.style.transform = "translateX(0)";

        // Atrasa a troca de informações por meio segundo (500 milissegundos)
        setTimeout(function () {
            loginForm.style.display = "block";
            cadastroForm.style.display = "none";
            botaoAlternar.textContent = "Ir para Cadastro";
        }, 250);
    }

    isLoginVisible = !isLoginVisible;
}
//Função pra formatar o Input de telefone
function formatarTEL(){
  const telInput = document.getElementById('tel');
  let valor = telInput.value.replace(/\D/g,'');//Remove todos os caracteres não numéricos
  if(valor.length > 11 ){
    valor = valor.slice(0, 11);
  }
  if (valor.length >= 3) {
    valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
  }
  if (valor.length >= 11) {
    valor = valor.replace(/(\d{5})(\d{4})/,'$1-$2');
  }
  telInput.value = valor;
}
document.getElementById('tel').addEventListener('input', formatarTEL);

const cpfInput = document.getElementById('cpf-cnpj');

cpfInput.addEventListener('input', function () {
  let value = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (value.length > 11) {
    // Se mais de 11 dígitos, assume que é CNPJ e formata como CNPJ
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  } else {
    // Caso contrário, formata como CPF
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }
  cpfInput.value = value;
});

const cepInput = document.getElementById('cep');

cepInput.addEventListener('input', function () {
  let value = cepInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (value.length <= 10) {
    value = value.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
  }
  cepInput.value = value;
});