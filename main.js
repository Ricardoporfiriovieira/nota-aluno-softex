function calcular(){
    
    let input1 = Number(document.querySelector("#num1").value);
    let input2 = Number(document.querySelector("#num2").value);
    let input3 = Number(document.querySelector("#num3").value);

    if(input1 && input2 && input3){
        let divresultado = document.querySelector(".resultado");

        let media = (input1 + input2 + input3) / 3;

        let resultado = media >= 7?"APROVADO":"REPROVADO";


        divresultado.innerHTML = "<div> Situação: " + resultado + "</div>";
        divresultado.innerHTML +=  "<div> Média: " + media.toFixed(2)  + "</div>" ;
    }
        
}

function notaminima(){
    let input1 = Number(document.querySelector("#num10").value);
    let input2 = Number(document.querySelector("#num20").value);
    let resultado = document.querySelector(".resultado10");
    let msg

    let resul = 21 - (input1 + input2);

    if(resul > 10){
        msg = "Você está praticamente reprovado";
    }

    console.log(resul);

    resultado.innerHTML = "<div> Nota minima para passar com média Sete: " + resul + "</div>" 
    resultado.innerHTML += "<div>" + msg + "</div>";


}