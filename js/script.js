

localStorage.setItem("senha", hex_md5("SENHA"))
localStorage.setItem("islogged", "false")

const login_input = document.getElementById("input-login")
const login_button = document.getElementById("btn-entrar")
login_button.onclick = login


function login(){
    const senha = hex_md5(login_input.value)
    if (localStorage.getItem("senha") === senha){
        window.location.href = "home.html"
        localStorage.setItem("islogged", "true")
    } else {
        alert("A senha passada é incorreta")
        
    }

}



