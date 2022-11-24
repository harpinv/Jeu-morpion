let bloc = document.getElementsByClassName('bloc');
let para = document.querySelector('p');
let joueur1 = true;
let joueur2 = false;
let commence = document.getElementById('commence');

for(let i = 0; i < bloc.length; i++) {
    bloc[i].addEventListener("click", function () {
        if(joueur1 === true) {
            joueur1 = false;
            joueur2 = true;
            bloc[i].innerText = "x";
            para.innerText = "Au tour de joueur 2,";
            resultats();
        } else {
            joueur2 = false;
            joueur1 = true;
            bloc[i].innerText = "o";
            para.innerText = "Au tour de joueur 1,";
            resultats();
        }
    })
}

function resultats() {
    let cate1 = document.getElementById("case1").innerText;
    let cate2 = document.getElementById("case2").innerText;
    let cate3 = document.getElementById("case3").innerText;
    let cate4 = document.getElementById("case4").innerText;
    let cate5 = document.getElementById("case5").innerText;
    let cate6 = document.getElementById("case6").innerText;
    let cate7 = document.getElementById("case7").innerText;
    let cate8 = document.getElementById("case8").innerText;
    let cate9 = document.getElementById("case9").innerText;

    if(cate1 === cate2  && cate2 === cate3 && (cate1 === "x" || cate1 === "o") && (cate2 === "x" || cate2 === "o") && (cate3 === "x" || cate3 === "o")) {
        para.innerText = "partie fini";
        para.style.color = "green";
    } else if(cate4 === cate5 && cate5 === cate6 && (cate4 === "x" || cate4 === "o") && (cate5 === "x" || cate5 === "o") && (cate6 === "x" || cate6 === "o")) {
        para.innerText = "partie fini";
        para.style.color = "green";
    } else if(cate7 === cate8 && cate8 === cate9 && (cate7 === "x" || cate7 === "o") && (cate8 === "x" || cate8 === "o") && (cate9 === "x" || cate9 === "o")) {
        para.innerText = "partie fini";
        para.style.color = "green";
    } else if(cate1 === cate4 && cate4 === cate7 && (cate1 === "x" || cate1 === "o") && (cate4 === "x" || cate4 === "o") && (cate7 === "x" || cate7 === "o")) {
        para.innerText = "partie fini";
        para.style.color = "green";
    } else if(cate2 === cate5 && cate5 === cate8 && (cate2 === "x" || cate2 === "o") && (cate5 === "x" || cate5 === "o") && (cate8 === "x" || cate8 === "o")) {
        para.innerText = "partie fini";
        para.style.color = "green";
    } else if(cate3 === cate6 && cate6 === cate9 && (cate3 === "x" || cate3 === "o") && (cate6 === "x" || cate6 === "o") && (cate9 === "x" || cate9 === "o")) {
        para.innerText = "partie fini";
        para.style.color = "green";
    } else if(cate1 === cate5 && cate5 === cate9 && (cate1 === "x" || cate1 === "o") && (cate5 === "x" || cate5 === "o") && (cate9 === "x" || cate9 === "o")) {
        para.innerText = "partie fini";
        para.style.color = "green";
    } else if(cate3 === cate5 && cate5 === cate7 && (cate3 === "x" || cate3 === "o") && (cate5 === "x" || cate5 === "o") && (cate7 === "x" || cate7 === "o")) {
        para.innerText = "partie fini";
        para.style.color = "green";
    } else {
        para.innerText += " pas de gagnant";
        para.style.color = "red";
    }
}

commence.addEventListener("click", function () {
    joueur1 = true;
    joueur2 = false;
    para.innerText = "Au tour de joueur 1,";
    for (let i = 0; i < bloc.length; i++) {
        bloc[i].innerText = "";
    }
})
