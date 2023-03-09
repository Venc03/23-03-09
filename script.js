window.addEventListener("load", function (){
        const art = document.querySelectorAll("article");
        art[0].innerHTML = "<div><img src = 'fel1.jpg' alt = ''></div>";
        const div = document.querySelectorAll("article div");
        art[0].innerHTML += "<button>click me</button>";
        const button = document.querySelectorAll("article button");

        button[0].addEventListener("click", function(){
            console.log(event.target);
            const div = document.querySelectorAll("article div");
            console.log(div[0])
            div[0].classList.add("formazas")
            div[0].getElementsByClassName.border = "1px solid red"
            
        })

        const kep = document.querySelectorAll("article div img")
        console.log(kep)
        kep[0] = this.addEventListener("mouseover", function(){
            event.target.style.border = "5px solid dimgray"
        })
        kep[0] = this.addEventListener("mouseout", function(){
            event.target.style.border = "0px solid dimgray"
        })
});
