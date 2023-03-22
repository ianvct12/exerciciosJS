// 1- Faça um programa JavaScript em que o usuário informará a sua idade e o programa emitirá uma mensagem dizendo se o usuário é obrigado votar ou não. Para votar o usuário deve possuir entre 18 e 70 anos.

// var idade=parseInt(prompt("Coloque a sua idade: "));

// if(idade>=18&&idade<70){
//   console.log("Você está apto para votar");
// }else{
//   console.log("Você não está apto para votar");
// }

// 2- Faça uma função que receba os anos, os meses e dias de vida do usuário e exiba os dias de vida dele. Considere cada ano 365 dias e cada mês 30 dias.

// function vida(diasDeVida){
// let anos=parseInt(prompt("Coloque os seus anos de vida: "));
// let meses=parseInt(prompt("Coloque os seus meses de vida: "));
// let dias=parseInt(prompt("Coloque os seus dias de vida"));
//  diasDeVida=(365*anos)+(30*meses)+dias;
//   return diasDeVida;
// }

// var diasDeVida=vida(diasDeVida);

// document.write("Você tem um total de "+ diasDeVida + " dias de vida");


// 3- Crie uma função que receba uma frase e troque todas as ocorrências da letra ‘a’ pela letra ‘U’, todas as ocorrências da letra ‘o’ por ‘G’ e que as únicas letras maiúsculas sejam as letras ‘U’ e ‘G’.


// function substituirLetras(frase) {
//   let novaFrase = "";
//   for (let i = 0; i < frase.length; i++) {
//     let letra = frase[i];
//     if (letra === "a") {
//       novaFrase = novaFrase+"U";
//     } else if (letra == "o") {
//       novaFrase += "G";
//     } else if (letra.toUpperCase() === "U" || letra.toUpperCase() === "G") {
//       novaFrase += letra.toUpperCase();
//     } else {
//       novaFrase += letra;
//     }
//   }
//   return novaFrase;
// }

//  var frasei= prompt("Escreva uma frase");
// var nova=substituirLetras(frasei)


// document.write(nova)

//4- Faça uma calculadora que realize operações com 2 números fornecidos pelo usuário. Após obter os números, pergunte ao usuário qual a operação que ele deseja fazer. Crie uma função para cada tipo de operação. Mostre o resultado ao usuário. 1- Soma, 2- Subtração, 3- Multiplicação, 4- Divisão

// function somar(n1,n2){
//   let resultado=n1+n2;
//   return resultado;
// }

// function subtrair(n1,n2){
//   let resultado=n1-n2;
//   return resultado;
// }

// function multiplicar(n1,n2){
//   let resultado=n1*n2;
//   return resultado;
// }

// function dividir(n1,n2){
//   let resultado=n1/n2;
//   return resultado;
// }

// var n1=0,n2=0,operacao;

// n1=parseInt(prompt("Digite um número: "));
// n2=parseInt(prompt("Digite um número: "));
// operacao=parseInt(prompt("Digite uma operação: 1)Soma;2)Substração;3)Multiplicação;4)Divisão "));

// switch(operacao){
//   case 1:
//     console.log(somar(n1,n2));
//     break;
//   case 2:
//     console.log(subtrair(n1,n2));
//     break;
//   case 3:
//     console.log(multiplicar(n1,n2));
//     break;
//   case 4:
//     console.log(dividir(n1,n2));
//     break;
//   default:console.log("Opção inválida");
// }

//5 - Crie uma função que receba um número e imprima toda a tabuada de 7 enquanto este número for maior que o valor calculado da tabuada.


// function spell(number){
// let i=0,tabuada=0;
  
//   do{
// tabuada=7*i;
//   i++;
//   document.write(tabuada + "\n");
// }while(n>tabuada);
// }

// var n=parseInt(prompt("Digite um número: "))


// spell(n);



//6- As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um que recebe o salário de um colaborador e calcule reajuste segundo o seguinte critério, baseado no salário atual: a. Salários até R$ 280,00 (incluindo): aumento de 20% b. Salários entre R$ 280,00 e R$ 700,00: aumento de 15% c. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10% d. Salários de R$ 1500,00 em diante: aumento de 5% Após o aumento ser calculado, deverá ser informado: o salário antes do reajuste; o percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.

// var salario=Number(prompt("Digite o salário: "));
// var aumento=0,percentual=0;


// if(salario<=280){
//   percentual="20%";
//   console.log(salario+"\n");
//   console.log(percentual+"\n");
//   aumento=salario+0.2*salario;
//   console.log(aumento+"\n");
  
// }else if(salario>280 && salario<700){
//   percentual="15%";
//   console.log(salario+"\n");
//   console.log(percentual+"\n");
//   aumento=salario+0.15*salario;
//   console.log(aumento+"\n");
  
// }else if(salario>700&& salario<1500){
//   percentual="10%";
//   console.log(salario+"\n");
//   console.log(percentual+"\n");
//   aumento=salario+0.1*salario;
//   console.log(aumento+"\n");
  
// }else{
//   percentual="5%";
//   console.log(salario+"\n");
//   console.log(percentual+"\n");
//   aumento=salario+0.5*salario;
//   console.log(aumento);
// }



//7- Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso. Exemplo: Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983”.

// var meses=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

// function conver(data){
// let array=data.split("/");
// let indice=parseInt(array[1]);
// let conversao= array[0] + " de " + meses[indice-1] + " de " + array[2];
// return conversao;
// }

// var datinha=prompt("Digite a data: ");

// console.log(conver(datinha));

//8 - Crie uma função que receba um array de nomes fornecidos pelo usuário e retorne o conteúdo da maior string deste array.


// function maiorNome(nomes) {
//   let maior=[];
//   for (let j = 0; j < nomes.length; j++) {//cada nome é um índice
//     if (nomes[j].length > maior.length) {
//       maior = nomes[j];
//     }
//   }
//   return maior;
// }

// var array=[];

// for(i=0;i<5;i++){
//   var nomes=prompt("Digite um nome: ");
//   array.push(nomes);
// }

// console.log(maiorNome(array));



//9 - Crie uma função receba uma frase e conte quantas palavras existem nela.

// function contar(palavra){
//   contagem=palavra.split(" ");
//   return contagem.length
// }
  
// var frase=prompt("Escreva uma frase: ");

// console.log(contar(frase));


// 10 - Faça uma função que receba o nome do usuário, inverta este nome e apresente ao usuário o resultado invertido

// function palavra(pala){
//   for(i=pala.length;i>=0;i--){
//   console.log(pala[i])
// }
// }

// var nome=prompt("Digite o seu nome: ");

// palavra(nome);


//PERGUNTAR O PORQUÊ DE UM PRECISAR FAZER ARRAY E OUTRO NÃO (QUESTÃO 8 E 9); É PORQUE NO PRIMEIRO A GENTE PRECISA JUNTAR TODOS OS VETORES, E NO SEGUNDO TEMOS UM SÓ?


//11- Obtenha a data atual do momento da abertura do navegador e exiba de forma separada o dia da semana, o dia do mês, o mês e o ano. Ex: Dia da semana: Quarta-feira, dia do mês: 19, mês: setembro, ano: 2022.

// var now = new Date();
// document.write ("Hoje é " + now.getDay() + ", " + now.getDate() + " de "
// + now.getMonth() + " de " + now.getFullYear());

// //ou


// var dataAtual = new Date();
// console.log(dataAtual);

//12- Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira

// function somar(a,b,c){
//   soma=a+b+c;
//   return soma;
// }

// function media(soma){
//   media=(soma/3);
//   return media;
// }

// var a,b,c;

// a=Number(prompt("Digite um número: "));
// b=Number(prompt("Digite um número: "));
// c=Number(prompt("Digite um número: "));

// console.log(somar(a,b,c))
// console.log(media(somar(a,b,c)))


// 13- Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso. Mostre o resultado em ordem crescente.
// function ordem(cresc){
// let ordem=0;
//   if(cresc[0]>=cresc[1]&&cresc[1]>=cresc[2]){
//  ordem=console.log(cresc[2],cresc[1],cresc[0])
// }else if(cresc[0]>=cresc[2]&&cresc[2]>=cresc[1]){
//     ordem=console.log(cresc[1],cresc[2],cresc[0])
// }else if(cresc[2]>=cresc[1]&&cresc[1]>=cresc[0]){
//   ordem=console.log(cresc[0],cresc[1],cresc[2])
// }else if(cresc[2]>=cresc[0]&&cresc[0]>=cresc[1]){
//   ordem=console.log(cresc[1],cresc[0],cresc[2])
// }else if(cresc[1]>=cresc[2]&&cresc[2]>=cresc[0]){
//   ordem=console.log(cresc[0],cresc[2],cresc[1])
// }else if(cresc[1]>=cresc[0]&&cresc[0]>=cresc[2]){ 
//     ordem=console.log(cresc[2],cresc[0],cresc[1])
// }
//   return ordem;
// }
  
// var array=[];

// for(i=0;i<3;i++){
//   var number=parseInt(prompt("Escreva um número: "));
//   array.push(number);
// }

// ordem(array)

//14- Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os números do vetor que são maiores que o número recebido.

// function lista(numero,vetor){
//    for(i=0;i<vetor.length;i++){
//   if(numero<vetor[i]){
//     console.log(vetor[i])
//   }
// }
// }
  

// var vetor=[10,20,30,40,50,60,70,80,90,100,200,300,400];
// var numero=Number(prompt("Digite um numero: "));

// lista(numero,vetor)

//15- Pergunte ao usuário para inserir 3 nomes e adicione eles à um vetor. Pergunte novamente 3 nomes e insira em um outro vetor. Crie uma função que receba ambos os vetores e retorne a junção de ambos. Escreva o conteúdo do vetor unificado.

// function juntar(ar1,ar2){
//   juncao=ar1.concat(ar2)
//   return juncao;
// }

// var array1=[];
// var array2=[];

// for(i=0;i<3;i++){
//   var nome=prompt("Insira um nome: ")
//   array1.push(nome);
// }

// for(i=0;i<3;i++){
//   var nome2=prompt("Insira um nome: ");
//   array2.push(nome2)
// }

// console.log(juntar(array1,array2))

// 16- Dado a frase: “As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.” Consiga retirar a frase “motivação não dura sempre” e concatene com “...”. Exiba o resultado

// var frase="As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente."

// retirar=frase.substring(32,57);


// frase2=retirar.concat("...");
// console.log(frase2)


//17- Crie uma função que receba um número (Ex: 9.2) e retorne uma string no seguinte formato: R$ 9,2.

// function retornar(number){
// let conversao=number.toString()
// let subs=conversao.replace(".",",")
// let real="R$";
// let final=real.concat(subs);
//   return final;
// }
// var numero=Number(prompt("Escreva um número: "))

// console.log(retornar(numero))

// 18- Crie uma função que peça que o usuário escolha entre *Pedra, Papel ou Tesoura*. O programa deve escolher uma dessas opções aleatoriamente, informar para o usuário qual foi a escolha sorteada e também, se ele ganhou ou não do programa.
// function resultado(opcao,computador){

//   switch(opcao){
//   case 0:
//     if(computador==1){
//       console.log("Você escolheu pedra, e o programa escolheu papel.Você perdeu!")
//     }else if(computador==0){
//       console.log("Você escolheu pedra, e o programa escolheu pedra.Você empatou!")
//     }else{
//       console.log("Você escolheu pedra, e o programa escolheu tesoura.Parabéns!! Você venceu o jogo!:D")
//     }
//     break;
//   case 1:
//     if(computador==2){
//       console.log("Você escolheu papel, e o programa escolheu tesoura.Você perdeu!")
//     }else if(computador==1){
//       console.log("Você escolheu papel, e o programa escolheu papel.Você empatou!")
//     }else{
//       console.log("Você escolheu papel, e o programa escolheu pedra.Parabéns!! Você venceu o jogo!:D")
//     }
//     break;
//      case 2:
//     if(computador==0){
//       console.log("Você escolheu tesoura, e o programa escolheu pedra.Você perdeu!")
//     }else if(computador==2){
//       console.log("Você escolheu tesoura, e o programa escolheu tesoura.Você empatou!")
//     }else{
//       console.log("Você escolheu tesoura, e o programa escolheu papel.Parabéns!! Você venceu o jogo!:D")
//     }
//     break;
//   default:
//     console.log("Selecione uma opção válida")
// }
// }

// var opcao=parseInt(prompt("Escolha:0)Pedra;1)Papel;2)Tesoura: "));

// var computador=Math.floor(Math.random() * 3);

// resultado(opcao,computador)

// 19- Crie uma função que solicite ao usuário o tamanho de cada um dos lados de um triângulo e o informe se o triângulo é *Equilátero*, *Escaleno* ou *Isósceles*.

// function informar(lado1,lado2,lado3){
  
// if(lado1>lado2&&lado2>lado3||lado1>lado3&&lado3>lado2||lado2>lado1&&lado1>lado3||lado2>lado3&&lado3>lado1||lado3>lado1&&lado1>lado2||lado3>lado2&&lado2>lado1){
//   console.log("Esse triângulo é escaleno")
// }else if(lado1==lado2&&lado2==lado3&&lado1==lado3){
//   console.log("Esse triângulo é equilátero")
// }else{
//   console.log("Esse triângulo é isósceles")
// }
// }

// var lado1=parseInt(prompt("Digite o tamanho de um lado: "));
// var lado2=parseInt(prompt("Digite o tamanho de um lado: "));
// var lado3=parseInt(prompt("Digite o tamanho de um lado: "));

// informar(lado1,lado2,lado3)

// 20- Preencha um vetor com os dados de altura e sexo de 5 pessoas. Crie uma função que receba este vetor e imprime na tela quantas pessoas são do sexo masculino e quantas pessoas são maiores de 1.70m. Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher. Obs: Utilize objetos.

// function pessoa(sexo,altura){
//   this.sexo=sexo;
//   this.altura=altura;
// }

// function contagem(pessoa){
// let contadorH=0;
// let contadorAlt=0;
// let maior=[];
// let quem=[];
// for(i=0;i<persona5.length;i++){
//   if(persona5[i].sexo=="masculino"){
//     contadorH++;
//   }if(persona5[i].altura>1.7){
//     contadorAlt++;
//   }if(persona5[i].altura>maior){
//     maior=persona5[i].altura;
//     quem=persona5[i].sexo;
//   }
// }
// console.log("O número de homens é: " + contadorH + ". A quantidade de pessoas maiores que 1.70m é de: " + contadorAlt + ". A maior altura é de: "+ maior +  ", e pertence a um(a) " +quem);
// }

// var persona5=[
// new pessoa("masculino",1.70),
// new pessoa("feminino",1.80),
// new pessoa("feminino",1.60),
// new pessoa("masculino",1.90),
// new pessoa("masculino",2.00)]

// contagem(persona5);


// 21- Pergunte ao usuário o nome do seu país, continente e sua capital. Através de uma função construtora crie um objeto chamado Pais que tenha essas propriedades e defina o valor das propriedades conforme os valores digitados pelo usuário.

// function pais(pais,continente,capital){
//   this.pais=pais;
//   this.continente=continente;
//   this.capital=capital;
// }

// var local=prompt("Qual é o nome do seu país?");
// var continente=prompt("Qual é o nome do seu continente?");
// var capital=prompt("Qual é o nome do seu capital?");


// var pessoa= new pais(local,continente,capital);

// console.log(pessoa)

// 22- Pergunte ao usuário seu nome, idade, e-mail e sexo. Crie um objeto chamado Pessoa que tenha essas propriedades e defina o valor das propriedades conforme os valores digitados pelo usuário.

// function Pessoa(nome,idade,email,sexo){
//   this.nome=nome;
//   this.idade=idade;
//   this.email=email;
//   this.sexo=sexo;
// }

// var nome=prompt("Digite o seu nome: ");
// var idade=parseInt(prompt("Digite a sua idade: "));
// var email=prompt("Digite o seu e-mail: ");
// var sexo=prompt("Digite o seu sexo;")

// const persona=new Pessoa(nome,idade,email,sexo);
// console.log(persona);

// 23- Crie um objeto “fruta” que possua cor, tamanho e país. Atribua “amarelo” para cor, “média” para tamanho e “Brasil” para país. Após isto peça para o usuário digitar uma cor, um tamanho (pequena, média ou grande) e um país. Atualize as propriedades do objeto de acordo com o que foi digitado pelo usuário.

// var fruta={
//   cor:"amarelo",
//   tamanho:"média",
//   pais:"Brasil"
// }

// var cor=prompt("Digite uma cor:");
// var tamanho=prompt("Digite o tamanho(pequeno,médio ou grande): ");
// var pais=prompt("Digite o país de origem: ");

// var fruta={
//   cor:cor,
//   tamanho:tamanho,
//   pais:pais
// }

// console.log(fruta)

// 24- Crie um objeto chamado “escola” que possui as propriedades: número de alunos, nome do diretor, ano de fundação e endereço. O endereço é um objeto que possui as propriedades: rua, bairro e cidade.

// var escola={
//   numeroDeAlunos:50,
//   nomeDoDiretor:"Lauro",
//   anoDeFundacao:1950,
//   endereco:{
//     rua:"Paraíso dos santos",
//     bairro:"Alegria de Jesus",
//     cidade:"Sinos encantados"
//   }
// };

// console.log(escola)


// 25- Crie um objeto “carro” que tenha uma propriedade de modelo, estado, preço base e ano. O objeto também deve possuir um método para calcular o valor estimado. Use a propriedade “this”. Para calcular o valor estimado utilize o preço base – 1000 para cada ano entre o atual e o ano do carro.

// var carro={
//   modelo:"Batmóvel",
//   estado:"Perfeito",
//   preco:10000000,
//   ano:2020,
//   valorEstimado:function(){
//     const anoAtual = new Date().getFullYear();
//     const anosDeUso = anoAtual - this.ano;
//     const depreciação = 1000 * anosDeUso;
//     return this.preco - depreciação;
//   }
// }

// console.log(carro.valorEstimado())
