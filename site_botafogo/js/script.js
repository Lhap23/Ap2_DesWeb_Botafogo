

localStorage.setItem("senha", hex_md5("SENHA"))


const login_input = document.getElementById("input-login")
const login_button = document.getElementById("btn-entrar")
login_button.onclick = login


function login(){
    const senha = hex_md5(login_input.value)
    if (localStorage.getItem("senha") === senha){
        window.location.href = "home.html"
    } else {
        alert("A senha passada é incorreta")
    }

}



