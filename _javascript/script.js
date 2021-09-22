function sim(){
	window.location.href ="formulario.html";
}

function nao(){

alert('Apenas clientes maiores de idade poderão participar das promoções.');

}

function limpa_formulário_cep() {
	//Limpa valores do formulário de cep.
	document.getElementById('rua').value=("");
	document.getElementById('bairro').value=("");
	document.getElementById('cidade').value=("");
	document.getElementById('uf').value=("");
	document.getElementById('ibge').value=("");
}
function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
	//Atualiza os campos com os valores.
	document.getElementById('rua').value=(conteudo.logradouro);
	document.getElementById('bairro').value=(conteudo.bairro);
	document.getElementById('cidade').value=(conteudo.localidade);
	document.getElementById('uf').value=(conteudo.uf);
	document.getElementById('ibge').value=(conteudo.ibge);
  } //end if.
  else {
	//CEP não Encontrado.
	limpa_formulário_cep();
	alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');
  //Verifica se campo cep possui valor informado.
  if (cep != "") {
	//Expressão regular para validar o CEP.
	var validacep = /^[0-9]{8}$/;
	//Valida o formato do CEP.
	if(validacep.test(cep)) {
	  //Preenche os campos com "..." enquanto consulta webservice.
	  document.getElementById('rua').value="...";
	  document.getElementById('bairro').value="...";
	  document.getElementById('cidade').value="...";
	  document.getElementById('uf').value="...";
	  document.getElementById('ibge').value="...";
	  //Cria um elemento javascript.
	  var script = document.createElement('script');
	  //Sincroniza com o callback.
	  script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
	  //Insere script no documento e carrega o conteúdo.
	  document.body.appendChild(script);
	} //end if.
	else {
	  //cep é inválido.
	  limpa_formulário_cep();
	  alert("Formato de CEP inválido.");
	}
  } //end if.
  else {
	//cep sem valor, limpa formulário.
	limpa_formulário_cep();
  }
};

  
	



function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // para pegar multiplas seleções -> getAll
    formJSON.sport = data.getAll('sport'); 

// Só imprimi o json se tudo estiver validado
if(validar_tudo() == true)
{

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
	console.log(formJSON);
  }
}
  
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleFormSubmit);
  

  //Validação com REGEX
  function validar_nome() {
	let value = document.getElementById("nome").value;
	let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
	if (!re.test(value)) {
	  // campo inválido, retorna false para o formulário não ser submetido
	  alert('Somente caracteres alfabéticos em "Nome"');
	  document.cadastro.nome.focus();
	  return false;
	}
	return true;
  }

  //Validação com REGEX
  function validar_cpf() {
	let value = document.getElementById("cpf").value;
	let re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
	if (!re.test(value)) {
	  // campo inválido, retorna false para o formulário não ser submetido
	  alert('Conteúdo de CPF Inválido');
	  document.cadastro.cpf.focus();
	  return false;
	}
	return true;
  }

  function confere_usuario()
{
  let usuario_json = '{"usuario1": "nicknick"}';
  let v_usuario = JSON.parse(usuario_json);
  if(v_usuario.usuario1 == document.cadastro.login.value)
    return true;
  else
    {
    alert("Usuario não confere com JSON!");
   /*  document.cadastro.usuario.focus(); */
    return false;
    }
}
function confere_senha()
{
  let senha_json = '{"senha1": "nick@123"}';
  let v_senha = JSON.parse(senha_json);
  if(v_senha.senha1 == document.cadastro.senha.value)
    return true;
  else
    {
    alert("Senha não confere com JSON!");
  /*   document.cadastro.senha.focus(); */
    return false;
    }
}
	//valida todos os campos
	function validar_tudo() {
	  // se um deles for inválido, retorna false e o form não é submetido
	  return validar_nome() && validar_cpf()
	  && confere_usuario() && confere_senha();
	  
	}

	var d = new Date();
document.getElementById("datahoje").value = d;



setInterval(contartempo, 1000);


var contador=1;
function contartempo(){ 
	document.getElementById("tempo").innerHTML = contador;
	contador++;

// quando o contador chegar ao valor, a página recarrega
	if(contador == 100)
	{
		window.location.reload(false);
	}
}
