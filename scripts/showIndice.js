var indice = document.getElementById('nav')
var index_button = document.getElementById('expand-button');
var index_open = false;

function index_click(){
    if (index_open){
        indice.classList.remove("aberto")
        indice.classList.remove("transition")
        index_open = false
    }else{
        indice.classList.add("aberto")
        indice.classList.add("transition")
        index_open = true
    }
    
}

index_button.addEventListener("click", index_click );