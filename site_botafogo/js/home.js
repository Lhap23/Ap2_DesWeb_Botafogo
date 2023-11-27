

const btn_sair = document.getElementById("btn-sair")
btn_sair.onclick = sair


function sair(){

}


const btn_feminino = document.getElementById("btn-1")
btn_feminino.onclick = ()=>{dadosApi("https://botafogo-atletas.mange.li/feminino").then((r)=>{cria_jogadores(r)})}
const btn_masculono = document.getElementById("btn-1")
const btn_todos = document.getElementById("btn-1")

async function dadosApi(url){

    const dados = await fetch(url)

    return dados.json()
}

function cria_jogadores(jogadores){
    const div_atletas = document.getElementById("atletas")
    div_atletas.innerHTML = " " 
    for (const jogador of jogadores) {
        
        const card_jogador = document.createElement('div')
        card_jogador.classList.add("card_jogador");

        const img = document.createElement('img')
        img.src = jogador.imagem;
        img.classList.add("img");
        
        const bio = document.createElement("div")
        bio.classList.add("bio");
        
        
        const nome = document.createElement('h2')
        nome.textContent = jogador.nome;
        nome.classList.add("nome");
        
        const pos = document.createElement('h2')
        pos.textContent = jogador.posicao;
        pos.classList.add("posicao");
        
        
        card_jogador.appendChild(img)
        bio.appendChild(pos)
        bio.appendChild(nome)
        
        card_jogador.appendChild(bio)
        div_atletas.appendChild(card_jogador)
    }
}

