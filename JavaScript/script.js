function buscar() {
    buscarLink("https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=beng&api_key=REPLACE_ME");
}
function buscarLink(link) {
    // pega o elemento do html com o id lista
    const lista = document.getElementById("lista");

    // adiciona o carregamento a lista
    lista.innerHTML = "<p>carregando dados, por favor aguarde</p>";

    // faz a requisição para a api na url https://jsonplaceholder.typicode.com/user com o metodo GET
    fetch(link)
        .then((response) => response.json())
        .then((response) => {
            // mostra a resposta da api
            //console.log(response);
            // limpa a lista de dados do html
            lista.innerHTML = "";

            // faz um loop pra percorrer todos os dados vindos da api (semelhante ao for)

            //alert(response.title);

            response?.map((response) => {
                // adicionar o dado ao html até chegar ao final do json
                lista.innerHTML += '<div>' + '<h6>Gato : "' + response.id + '</h6>' +'<img src="' + response.url + '">' + '</div> ';
            });
        })
        .catch((error) => {
            // mostra no caso de erro
            console.log(error);
        });
}