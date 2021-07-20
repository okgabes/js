
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clickar</b>";
}
function redirecionar(){
    window.open("https://google.com"); //outra janela
    //window.location.href = "https://google.com"; //mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse"
    elemento.innerHTML ="Obrigado por passar o mouse";
    //alert("trocar texto")
    
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Pagina carregada!")
}
function funcaochange(elemento){
    console.log(elemento.value)
}

/*var d = new Date()
//alert(d.getMonth()+1);
//alert(d.getMinutes)
*/


/*var count;
for (count = 0; count<5; count++){
    alert(count);
}*/


/*
var count = 0;
while(count < 5){
    console.log(count);
    count++;
}
*/



/*
var idade = prompt("Qual sua idade") //browser exibe pergunta e coloca na var idade

if(idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}

*/


//var nome = "Gabriel Teixeira";
//var idade = 24;
//var idade2 = 2

//var frase = "japao melhr do mundo"
//alert(nome + " tem " + idade + "anos");

//console.log(frase.replace("japao", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());

//ARRAYS

//var lista = ["maçã","pera", "laranja"];
//lista.push("uva"); //add na ultima posição
//console.log(lista[1]); //exibe a posição 1 da lista
//lista.pop(); //exclui a ultima posição
//console.log(lista.reverse()); //retorna a lista com os elementos ao contrario
//console.log(lista.length); //retorna o tamanho da lista
//console.log(lista.toString()) //transforma em string perde a ref de array
//console.log(lista.join(" - ")) // fica assim -> maçã - pera - laranja

//var fruta ={nome:"maça", cor:"vermelha"}
//dicionary
//console.log(fruta.cor);

//var fruta =[{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(fruta[1].cor);

