const lista = ["fel1.jpg", "yes.png", "yes1.png", "yes2.jpg", "yes3.jpg", "yes4.jpg", "yes5.jpg", "yes6.png"];

window.addEventListener("load", main);

function main(){
    kepLista();
    section();
    kepKiv();
    buttons();
}

function kepLista(){
    const art = document.querySelectorAll("article");
    for(let i = 0; i < lista.length; i++){
        const img = document.createElement("img");
        img.src = lista[i];
        art[0].appendChild(img);
    
        img.addEventListener("click", function(){
            const bImg = document.querySelectorAll("section div img")
            bImg[0].src = lista[i];
        })
    } 
}

function section(){
    const sec = document.querySelectorAll("section");
    sec[0].innerHTML = "<button class='lbutton'>&#8592</button><div></div><button class='rbutton'>&#8594</button>";
}

function kepKiv(){
    const div = document.querySelectorAll("div");
    const img = document.createElement("img");
    const i = rnd();
    img.src = lista[i];
    div[0].appendChild(img);
    
}

function rnd(){
    const min = 0;
    const max = lista.length - 1;
    const randomN = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomN;
}

function buttons(){
    const lbutton = document.getElementsByClassName("lbutton")[0];
    const rbutton = document.getElementsByClassName("rbutton")[0]
    let currind = 0
    lbutton.addEventListener("click", function(){
        const bImg = document.querySelectorAll("section div img")[0]
        currind--;
        if (currind < 0){
            currind = lista.length - 1;
        }
        bImg.src = lista[currind];
    })

    rbutton.addEventListener("click", function(){
        const bImg = document.querySelectorAll("section div img")[0]
        currind++;
        if (currind >= lista.length){
            currind = 0;
        }
            bImg.src = lista[currind];
    })
}