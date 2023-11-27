const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")
const url= `https://botafogo-atletas.mange.li/${id}`
async function dadosApi(url){
    const loading = document.getElementById("loading")
    loading.style.display = "flex"
    const dados = await fetch(url)
    loading.style.display = "none"
    return dados.json()
}

if (localStorage.getItem("islogged") === "true")
{    dadosApi(url).then(
        (r) => {
            
            const img = document.getElementById("img")
            const nome = document.getElementById("nome")
            const nome_completo = document.getElementById("nome-completo")
            const posicao = document.getElementById("posicao")
            const descricao = document.getElementById("descricao")
            const altura = document.getElementById("altura")
            const nascimento = document.getElementById("nascimento")



            img.src = r.imagem
            nome.textContent = r.nome
            nome_completo.textContent = r.nome_completo
            posicao.textContent = r.posicao
            descricao.textContent = r.descricao
            altura.textContent = r.altura
            nascimento.textContent = r.nascimento


            const voltar = document.getElementById('btn-voltar')
            voltar.onclick = () => {window.location.href = 'home.html'}
}           
    )

} else {
    window.location.href = "index.html"
}
