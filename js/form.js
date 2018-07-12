let botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', (event) => {
    event.preventDefault();
    let form = document.querySelector('#form-adiciona');
    let paciente = dadosPacienteForm(form);    
    let tabela = montaTr(paciente);
    let erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        exibirMensagemErro(erros);
        return;
    }

    let tabelaPacientes = document.querySelector('#tabela-pacientes');    
    tabelaPacientes.appendChild(tabela);    
    form.reset();
    document.querySelector('#mensagem-erro').innerHTML = '';
});

function montaTr(paciente) {
    
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');
    
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-pese'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
};


function montaTd(dados, classe){
    let td = document.createElement('td');
    td.textContent = dados;
    td.classList.add(classe);

    return td;
};

function exibirMensagemErro(erros){

    let ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = '';
    
    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });     
};


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