var pacientes = document.querySelectorAll('.paciente');


for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];
    
    let pesoTd = paciente.querySelector('.info-peso');
    let alturaTd = paciente.querySelector('.info-altura');
    let imcTd = paciente.querySelector('.info-imc');
    
    let peso = pesoTd.textContent;
    let altura = alturaTd.textContent;
    
    
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    
    if(!pesoValido){ 
        console.log(`o peso de ${peso} é invalido`);
        imcTd.textContent = `Peso Invalido.`;
        paciente.classList.add('paciente-invalido');
    }
    
    if(!alturaValida){ 
        console.log(`Altura de ${altura} é invalida.`);
        imcTd.textContent = `Altura Invalida`;
        paciente.classList.add('paciente-invalido');
    }
    
    if(pesoValido && alturaValida){
        imc = calculaImc(peso, altura);
        imcTd.textContent = imc
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso <= 400){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else {
        return false;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}