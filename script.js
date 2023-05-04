async function getAddress(cep){
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = '';
    
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if(data.erro){
            throw new Error('Inexistent CEP');
        }       
        var estado = document.getElementById('estado');
        var cidade = document.getElementById('cidade');
        var bairro = document.getElementById('bairro');
        var logradouro = document.getElementById('endereco');

        estado.value = data.uf
        cidade.value = data.localidade
        bairro.value = data.bairro
        logradouro.value = data.logradouro

        console.log(data);
        return data;
    } catch(error){
        errorMessage.innerHTML = `<p>CEP inválido</p>`;
        console.log(error);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => getAddress(cep.value));