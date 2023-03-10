let form = document.querySelector("#form");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!validar()) {
        alert("Form can't contain the letter a");
    }else{
        e.target.submit();
    }

})

function validar() {
    console.log("validación realizada")
    return false;
}

