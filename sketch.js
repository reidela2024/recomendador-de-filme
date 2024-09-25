let campoidade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2" , "recomendador de filmes");
  createSpan("sua idade:");
  campoIdade = createInput("s");
  campoFantasia = createCheckbox("gosta de fantasia?");
  campoAventura = createCheckbox("gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "o menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "homem aranha: no aranha verso";
        } else{
          return "ladrões de bicicletas";
        }
      } else {
        if (gostaDeFantasia) {
          return "as aventuras de pi";
        } else {
          return "depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "a viagem de chihiro";
    } else{
      return "o feitiço do tempo";
    }
  }
}
          
    
            
