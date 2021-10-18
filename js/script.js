const clear = document.querySelector(".clear");
const result = document.querySelector(".showResult");

clear.addEventListener ("click", (event)=> {
    result.innerHTML = "";
});

function insert(num) {
    var numero = document.querySelector(".showResult").innerHTML;
    document.querySelector(".showResult").innerHTML = numero + num;
}

function calcular() {
    var resultado = document.querySelector(".showResult").innerHTML;
    if (resultado) {
        document.querySelector(".showResult").innerHTML = eval(resultado);
    } else {
        alert("Adicione algum número para calcular!");
    }
}