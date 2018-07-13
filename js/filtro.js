var filtroInput = document.querySelector('#filtro-tabela');

filtroInput.addEventListener('input', function(){
    let pacientes = document.querySelectorAll('.paciente');
    
    if(this.value.length > 0){   
        
        pacientes.forEach(function(paciente){
            let tdNome = paciente.querySelector('.info-nome');
            let nome = tdNome.textContent;
            let regExp = new RegExp(filtroInput.value, 'i');
            if(!regExp.test(nome)){
                paciente.classList.add('invisivel');
            }else{
                paciente.classList.remove('invisivel');
            }
        });
    }else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove('invisivel');
        })
    }

})

  // for(let i = 0; i < pacientes.length; i++){
        //     let paciente = pacientes[i];
        //     let tdNome = paciente.querySelector('.info-nome');
        //     let nome = tdNome.textContent;
        //     let regExp = new RegExp(this.value, 'i');
        //     if(!regExp.test(nome)){
        //         paciente.classList.add('invisivel');
        //     }else{
        //         paciente.classList.remove('invisivel');
        //     }
        // }