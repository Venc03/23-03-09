const Lista = ["fel1.jpg", "yes.png", "yes1.png", "yes2.jpg", "yes3.jpg", "yes4.jpg", "yes5.jpg", "yes6.png"];


window.addEventListener("load", main);


function main(){
    kepLista();
    section();
    kepKiv();
    buttons();
}


function kepLista(){
    const Art = document.querySelectorAll("article");
    for(let i = 0; i < Lista.length; i++){
        const Img = document.createElement("img");
        Img.src = Lista[i];
        Art[0].appendChild(Img);
    
        Img.addEventListener("click", function(){
            const BImg = document.querySelectorAll("section div img")
            BImg[0].src = Lista[i];
        })
    } 
}


function section(){
    const Sec = document.querySelectorAll("section");
    Sec[0].innerHTML = "<button class='lbutton'>&#8592</button><div></div><button class='rbutton'>&#8594</button>";
}


function kepKiv(){
    const Div = document.querySelectorAll("div");
    const Img = document.createElement("img");
    const I = rnd();
    Img.src = Lista[I];
    Div[0].appendChild(Img);
    
}


function rnd(){
    const Min = 0;
    const Max = Lista.length - 1;
    const randomN = Math.floor(Math.random() * (Max - Min + 1)) + Min;
    return randomN;
}


function buttons(){
    const lbutton = document.getElementsByClassName("lbutton")[0];
    const rbutton = document.getElementsByClassName("rbutton")[0]
    let currind = 0
    lbutton.addEventListener("click", function(){
        const BImg = document.querySelectorAll("section div Img")[0]
        currind--;
        if (currind < 0){
            currind = Lista.length - 1;
        }
        BImg.src = Lista[currind];
    })

    rbutton.addEventListener("click", function(){
        const BImg = document.querySelectorAll("section div Img")[0]
        currind++;
        if (currind >= Lista.length){
            currind = 0;
        }
            BImg.src = Lista[currind];
    })
}