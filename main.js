window.onload=()=>{
    var art1 = document.getElementById("dia1");
    var art2 = document.getElementById("dia2");
    var art3 = document.getElementById("dia3");
    var art4 = document.getElementById("dia4");
    var art5 = document.getElementById("dia5");

    art2.style.display = "none";
    art3.style.display = "none";
    art4.style.display = "none";
    art5.style.display = "none";

    var Btn1 = document.querySelector(".btn1");
    var Btn2 = document.querySelector(".btn2");
    var Btn3 = document.querySelector(".btn3");
    var Btn4 = document.querySelector(".btn4");
    var Btn5 = document.querySelector(".btn5");

    Btn1.addEventListener("click", ()=>{
        art1.style.display = "block";
        art2.style.display = "none";
        art3.style.display = "none";
        art4.style.display = "none";
        art5.style.display = "none";
    })

    Btn2.addEventListener("click", ()=>{
        art1.style.display = "none";
        art2.style.display = "block";
        art3.style.display = "none";
        art4.style.display = "none";
        art5.style.display = "none";
    })

    Btn3.addEventListener("click", ()=>{
        art1.style.display = "none";
        art2.style.display = "none";
        art3.style.display = "block";
        art4.style.display = "none";
        art5.style.display = "none";
    })

    Btn4.addEventListener("click", ()=>{
        art1.style.display = "none";
        art2.style.display = "none";
        art3.style.display = "none";
        art4.style.display = "block";
        art5.style.display = "none";
    })

    Btn5.addEventListener("click", ()=>{
        art1.style.display = "none";
        art2.style.display = "none";
        art3.style.display = "none";
        art4.style.display = "none";
        art5.style.display = "block";
    })
}