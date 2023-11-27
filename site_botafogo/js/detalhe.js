const id = URLSearchParams(window.location.search).get("id")

async function dadosApi(url){
    const loading = document.getElementById("loading")
    loading.style.display = "block"
    const dados = await fetch(url)
    loading.style.display = "none"
    return dados.json()
}

if (sessionStorage.getItem("islogged") == "true")
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


            const voltar = document.getElementById('button')
            voltar.onclick = () => {window.location.href = 'index.html'}
}
    )

} else {
    window.location.href = "index.html"
}
