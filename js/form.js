let botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', (event) => {
    event.preventDefault();
    let form = document.querySelector('#form-adiciona');
    let paciente = dadosPacienteForm(form);    
    
    let erros = validaPaciente(paciente);    
    if(erros.length > 0){
        exibirMensagemErro(erros);
        return;
    }

    adicionaPaciente(paciente);   
    form.reset();
    document.querySelector('#mensagem-erro').innerHTML = '';
});

//monta um JSON com os campos do formulario
function dadosPacienteForm(form) { 

   let paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
};

//adiciona paciente na tabela
function adicionaPaciente(paciente){
    let novaTr = montaTr(paciente);
    let tabelaPacientes = document.querySelector('#tabela-pacientes');    
    tabelaPacientes.appendChild(novaTr); 
}

//monta uma tr
function montaTr(paciente) {
    
    let pacienteTr = document.createElement('tr'); // cria uma nova tr
    pacienteTr.classList.add('paciente'); // adiciona a classe paciente na tr
    
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-pese'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
};

//monta uma td
function montaTd(dados, classe){
    let td = document.createElement('td'); //cria uma nova td
    td.textContent = dados; //adiciona os dados de conteudo na td
    td.classList.add(classe); //adiciona a classe css na td

    return td;
};

//exibe mensagem de erro quando existe uma
function exibirMensagemErro(erros){

    let ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = '';
    
    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });     
};


//valida os dados do JSON paciente
function validaPaciente(paciente){

    let erros = [];
    
    if(!validaAltura(paciente.altura)) erros.push('Altura invalida.')
    if(!validaPeso(paciente.peso)) erros.push('Peso invalido.')
    if(paciente.nome.length == 0) erros.push('O campo nome nao pode ser em branco.')
    if(paciente.peso.length == 0) erros.push('O campo peso nao pode ser em branco.')
    if(paciente.altura.length == 0) erros.push('O campo altura nao pode ser em branco.')
    if(paciente.gordura.length == 0) erros.push('O campo gordura nao pode ser em branco.')

    return erros;
};