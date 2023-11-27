

if(localStorage.getItem("islogged") !== "true"){
    window.location.href = "index.html"
}



const btn_sair = document.getElementById("btn-sair")
btn_sair.onclick = ()=>{window.location.href = "index.html"}



const btn_feminino = document.getElementById("btn-1")
btn_feminino.onclick = ()=>{dadosApi("https://botafogo-atletas.mange.li/feminino").then((r)=>{cria_jogadores(r, "Elenco Feminino")})}
const btn_masculono = document.getElementById("btn-2")
btn_masculono.onclick = ()=>{dadosApi("https://botafogo-atletas.mange.li/masculino").then((r)=>{cria_jogadores(r, "Elenco Masculino")})}
const btn_todos = document.getElementById("btn-3")
btn_todos.onclick = ()=>{dadosApi("https://botafogo-atletas.mange.li/all").then((r)=>{cria_jogadores(r, "Elenco do Botafogo")})}

async function dadosApi(url){
    const loading = document.getElementById("loading")
    loading.style.display = "block"
    const dados = await fetch(url)
    loading.style.display = "none"
    return dados.json()
}

function cria_jogadores(jogadores, titulo){
    const div_atletas = document.getElementById("atletas")
    div_atletas.innerHTML = " " 
    const titulo_elenco = document.getElementById("elenco-nome")
    titulo_elenco.textContent = titulo

    for (const jogador of jogadores) {
        
        const card_jogador = document.createElement('div')
        card_jogador.classList.add("card-jogador");

        const img = document.createElement('img')
        img.src = jogador.imagem;
        img.classList.add("img");
        
        const btn_saiba = document.createElement("button")
        btn_saiba.onclick = ()=>{}


        const bio = document.createElement("div")
        bio.classList.add("bio");
        
        
        const nome = document.createElement('h1')
        nome.textContent = jogador.nome;
        nome.classList.add("nome");
        
        const pos = document.createElement('h2')
        pos.textContent = jogador.posicao;
        pos.classList.add("posicao");
        
        
        card_jogador.appendChild(img)
        bio.appendChild(nome)
        bio.appendChild(pos)
        
        card_jogador.appendChild(bio)
        div_atletas.appendChild(card_jogador)

        card_jogador.onclick = ()=>{
            window.location.href = `detalhe.html?id=${jogador.id}`
        }

    }
}

