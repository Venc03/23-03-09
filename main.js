window.addEventListener("load", main)

function main(){
    kepLista();
}

function kepLista(){
    const art = document.querySelectorAll("article");
    const lista = ["fel1.jpg", "yes.png", "yes1.png", "yes2.jpg", "yes3.jpg", "yes4.jpg", "yes5.jpg", "yes6.png"]
    for(let i = 0; i < lista.length; i++){
        const img = document.createElement("img");
        img.src = lista[i];
        art[0].appendChild(img);
    }
}