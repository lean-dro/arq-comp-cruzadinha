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
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',''],
  ];
  var gabarito = [
    ['','D','A','T','A','B','U','S','','','','','','','',''],
    ['','','D','','','','','','','','','','','','',''],
    ['','','D','','','','','R','O','M','','','','D','',''],
    ['','','R','','','C','','','','E','P','R','O','M','',''],
    ['','','E','','','P','','','','M','','','','A','',''],
    ['','','S','','Q','U','A','D','C','O','R','E','','','',''],
    ['','','S','','','','','','','R','','','D','','',''],
    ['','','B','','','','','','','I','7','','U','L','A',''],
    ['','','U','','','','','','','A','','','A','','',''],
    ['','','S','','T','H','R','E','A','D','S','','L','','F',''],
    ['','','','','','','','','','E','','','C','','L',''],
    ['','','','','','','C','','','M','','','O','','A',''],
    ['','','R','E','G','I','S','T','R','A','D','O','R','E','S',''],
    ['','','A','','','5','','','','S','','','E','','H',''],
    ['','','M','','','','','','','S','','','','','',''],
    ['','','','','','','','','C','A','C','H','E','','',''],
  ]
  var coordenadas = []
  var div_cruzadinha = document.getElementById("div_cruzadinha")

function gerarCruzadinha() {
div_cruzadinha.innerHTML = ""
  for(var i = 0; i < gabarito.length; i++){
    var divLinha = document.createElement("div")
    divLinha.classList.add("linha")
        for(var j = 0; j < gabarito[i].length; j++){
            if(gabarito[i][j] != ""){
                var letra = gabarito[i][j]
                coordenadas.push({x:i, y: j, letra: letra})
                divLinha.innerHTML += `<input id="input${i}${j}" onkeyup="adicionarLetra(this.value, ${i}, ${j}, this)">`
            }else{
                divLinha.innerHTML += `<div id="${i}-${j}" class="quadrado"></div>`
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
    validarCruzadinha()  
}
  function buscarLetra(x,y) {
    return gabarito[x][y]
  }



  function gerarSeta(x,y,numero,direcao){
    x = x.toString()
    y = y.toString()
    var coordenadaQuadrado = (x+"-"+y)
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
    gerarSeta(2,5,1,"baixo")
    gerarSeta(7,11,2,"direita")
    gerarSeta(12,1,3,"direita")
    gerarSeta(11,2,4,"")
    gerarSeta(2,6,5,"direita")
    gerarSeta(3,8,6,"direita")

    gerarSeta(8,14,7,"baixo")
    gerarSeta(1,9,8,"baixo")
    gerarSeta(1,13,9,"baixo")
    gerarSeta(10,6,10,"baixo")
    gerarSeta(10,2,11,"cima")
    gerarSeta(0,0,12,"direita")
   

    gerarSeta(11,5,13,"")
    gerarSeta(7,8,14,"direita")
    gerarSeta(5,12,15,"baixo")
    gerarSeta(5,3,16,"direita")
    gerarSeta(9,3,17,"direita")
    gerarSeta(15,7,18,"direita")
    
  }
  

function trapaca() {
    for(var i = 0; i < gabarito.length; i++){
        for(var j = 0; j < gabarito[i].length; j++){
            if(gabarito[i][j] != ""){
                var input = document.getElementById(`input${i}${j}`)
                cruzadinha[i][j] = gabarito[i][j]
                input.value = gabarito[i][j]
            }
        }
    }
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
        modal.classList.toggle("show")
        return true
    }else{
        return false
    }
}

