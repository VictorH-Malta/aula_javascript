// var nome = "Victor Henrique";
// var n1 = 25;
// var n2 = 10;
// var frase = "Japão é o melhor time do mundo";

// console.log(nome);
// console.log(n1 / n2);
// console.log(frase.toLowerCase());

// var lista = ["maçã", "pêra", "laranja"];
// lista.push("uva");
// // lista.pop(); //remove o ultimo elemento do array
// console.log(lista[0]);
// console.log(lista.toString()[0]);
// console.log(lista.join(" | "));

// var fruta = {nome:"maçã", cor:"vermelha"};
// console.log(fruta.cor);

// var frutas = [{nome:"maçã", cor:"vermelha"}, {nome: "uva", cor: "roxa"}];
// console.log(frutas);

// var idade = prompt("Qual a sua idade?");
// if(idade >= 18){
//     alert("maior de idade");
// } else {
//     alert("menor de idade")
// }

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }

// var count;
// for (count = 0; count <= 5; count++ ){
//     alert(count);
// }

// var d = new Date();
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getUTCDate());

// function soma(n1,n2){
//     return n1 + n2;
// }
// alert(soma(5,10));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// alert(setReplace("Vai Japão", "Japão", "Brasil"));

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Digite sua idade");
// console.log(validaIdade(idade));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    // console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://github.com/VictorH-Malta");
    // window.location.href = "https://github.com/VictorH-Malta"; 
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada");
}

function change(elemento){
    console.log(elemento.value);
}