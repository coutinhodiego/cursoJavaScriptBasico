var buscarPacientes = document.querySelector('#buscar-pacientes');

buscarPacientes.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){

        if(xhr.status == 200){            
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPaciente(paciente);
            }); 
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
        }
    })
    xhr.send();
})