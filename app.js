function getApi(url){
    return fetch(url).then((resp) => resp.json());
}

window.addEventListener('load', function(){
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    let options = '<option value=""> selecione um estado</option>';

    data = getApi(url).then((data) => {
        for (const key in data) {
            options += `<option value="${data[key].sigla}">${data[key].nome}</option>`;
        }
        estados.innerHTML = options;
    });
    
})