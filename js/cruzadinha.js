var respostas = [
    "CPU",
    "ULA",
    "Registradores",
    "RAM",
    "ROM",
    "Eprom",
    "Flash",
    "Memória de massa",
    "DMA",
    "CS",
    "Address bus",
    "data bus",
    "I5",
    "I7",
    "Dual Core",
    "Quad Core",
    "Threads",
    "CACHE",
  ];


  var cruzadinha = [
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
  ];
  var gabarito = [
    ['','','','','','','','','','','','','','',''],
    ['R','O','M','','','','E','H','C','A','C','','','',''],
    ['E','','S','D','A','E','R','H','T','','P','','','',''],
    ['G','','','','E','R','O','C','D','A','U','Q','','',''],
    ['I','5','','','','','C','','','','','','','',''],
    ['S','','','','','','L','','','','','','','',''],
    ['T','','','U','','','A','F','','','','','','R',''],
    ['R','C','','L','','','U','L','7','','','','','A',''],
    ['A','S','S','A','M','E','D','A','I','R','O','M','E','M',''],
    ['D','D','A','T','A','B','U','S','','','','','P','',''],
    ['O','','','','','','','H','','','','','R','',''],
    ['R','','','','','','','','','','','','O','',''],
    ['E','','','','','','','','','','','A','M','D',''],
    ['S','U','B','S','S','E','R','D','D','A','','','','',''],
    ['','','','','','','','','','','','','','',''],
  ]
  var coordenadas = []
  var div_cruzadinha = document.getElementById("div_cruzadinha")

function gerarCruzadinha() {
  for(var i = 0; i < gabarito.length; i++){
    var divLinha = document.createElement("div")
    divLinha.classList.add("linha")
        for(var j = 0; j < gabarito[i].length; j++){
            if(gabarito[i][j] != ""){
                var letra = gabarito[i][j]
                coordenadas.push({x:i, y: j, letra: letra})
                divLinha.innerHTML += `<input onkeyup="adicionarLetra(this.value, ${i}, ${j}, this)">`
            }else{
                divLinha.innerHTML += `<div id="${i}${j}" class="quadrado"></div>`
            }
        }
        div_cruzadinha.appendChild(divLinha)
    }
    gerarTodasSetas()
}

  


  function adicionarLetra(letra, x, y, input) {
   
    input.value = letra.toUpperCase()
    letra = input.value
    var letraCerta = buscarLetra(x, y)

  
    
    if(letra.length == 0){
        input.classList.remove("errado")
        input.classList.remove("certo")
    }
    else if(letra.length > 1){
        alert("INSIRA APENAS UMA LETRA A CADA BLOCO!")
        input.classList.remove("errado")
        input.classList.remove("certo")
        input.value = ""
    }
    else{
        if(letra == letraCerta){
        input.classList.remove("errado")
        input.classList.add("certo")
        cruzadinha[x][y] = letra
       
    }else{
        input.classList.remove("certo")
        input.classList.add("errado")
        cruzadinha[x][y] = letra
      
    }
    }
  }
  function buscarLetra(x,y) {
    return gabarito[x][y]
  }



  function gerarSeta(x,y,numero,direcao){
    x = x.toString()
    y = y.toString()
    var coordenadaQuadrado = (x+y)
    var seta = ""
    if(direcao == "direita"){
        seta = "➡"
    }else if(direcao == "esquerda"){
        seta = "⬅"
    }else if(direcao == "cima"){
        seta = "⬆"
    }else{
        seta = "⬇"
    }
    var div_quadrado = document.getElementById(coordenadaQuadrado)
    div_quadrado.innerHTML = `<p>${numero}</p>
    <p>${seta}</p>`
  }

  function gerarTodasSetas() {
    gerarSeta(4,10,1,"cima")
    gerarSeta(5,3,2,"baixo")
    gerarSeta(1,11,3,"esquerda")
    gerarSeta(1,3,4,"esquerda")
    gerarSeta(2,9,5,"esquerda")
    gerarSeta(3,12,6,"esquerda")
    gerarSeta(4,2,7,"esquerda")
    gerarSeta(5,7,8,"baixo")
    gerarSeta(5,13,9,"baixo")
    gerarSeta(6,1,10,"baixo")
    gerarSeta(8,14,11,"esquerda")
    gerarSeta(7,12,12,"baixo")
    gerarSeta(9,8,13,"esquerda")
    gerarSeta(12,14,14,"esquerda")
    gerarSeta(13,10,15,"esquerda")
    gerarSeta(14,0,16,"cima")
    gerarSeta(6,8,17,"baixo")
    gerarSeta(0,6,18,"baixo")
  }
  
function validarCruzadinha() {
    var contagem = 0
    for(var i = 0; i < gabarito.length; i++){
        for(var j = 0; j < gabarito[i].length; j++){
            if((gabarito[i][j] == cruzadinha[i][j]) && (gabarito[i][j] != "")){
                contagem++
            }
        }
    }
    if(contagem == coordenadas.length){
        return true
    }else{
        return false
    }
}

var verificacao = setInterval(()=>{
    if(validarCruzadinha()){
     
    }else{
         
    }
  
}, 1000)
