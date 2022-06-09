
//definicoes de campo
var C1 = document.getElementById('C1')
var C2 = document.getElementById('C2')
var C3 = document.getElementById('C3')
var C4 = document.getElementById('C4')
var C5 = document.getElementById('C5')
var C6 = document.getElementById('C6')
var C7 = document.getElementById('C7')
var C8 = document.getElementById('C8')
var C9 = document.getElementById('C9')

//placar
var redP = document.getElementById('vermelho');
var pontosR = 1
var blueP = document.getElementById('azul');
var pontosB = 1


//condicões red 
var coR1 = null
var coR2 = null
var coR3 = null
var coR4 = null
var coR5 = null
var coR6 = null
var coR7 = null
var coR8 = null
var coR9 = null
//condicoes blue
var coB1 = null
var coB2 = null
var coB3 = null
var coB4 = null
var coB5 = null
var coB6 = null
var coB7 = null
var coB8 = null
var coB9 = null

//funcoes de campos
function c1(event) {
  // ação player red
  if (event.button == 0) {
    C1.style.background = 'red'//botao esquerdo
    coR1 = 1
    if (coR1 && coR2 && coR3 == 1 || coR1 && coR4 && coR7 == 1 || coR1 && coR5 && coR9 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }

  }

  if (event.button == 1) {
    //Ação player blue 
    C1.style.background = 'blue'
    coB1 = 1
    // Combinacoes de blocos para vitoria
    if (coB1 && coB2 && coB3 == 1 || coB1 && coB4 && coB7 == 1 || coB1 && coB5 && coB9 == 1) {
      blueP.innerHTML = pontosB++
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'

    }
  }

}
function c2(event) {
  if (event.button == 0) {
    //Ação player blue
    C2.style.background = 'red'//botao esquerdo
    coR2 = 1
    //Combinaçoes de blocos para vitoria 
    if (coR1 && coR2 && coR3 == 1 || coR2 && coR5 && coR8 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'

    }
  }
  if (event.button == 1) {
    C2.style.background = 'blue'// botao meio
    coB2 = 1
    if (coB1 && coB2 && coB3 == 1 || coB2 && coB5 && coB8 == 1) {
      blueP.innerHTML = pontosB++
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }

}
function c3(event) {
  if (event.button == 0) {
    //acão player red 
    C3.style.background = 'red'
    coR3 = 1
    if (coR1 && coR2 && coR3 == 1 || coR3 && coR5 && coR7 == 1 || coR3 && coR6 && coR9 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }
  if (event.button == 1) {
    //ação player blue
    C3.style.background = 'blue'// botao meio
    coB3 = 1
    if (coB1 && coB2 && coB3 == 1 || coB3 && coB5 && coB7 == 1 || coB3 && coB6 && coB9 == 1) {
      blueP.innerHTML = pontosB++
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }

  }

}
function c4(event) {
  //açao player red
  if (event.button == 0) {
    C4.style.background = 'red'//marca o campo com a cor red
    coR4 = 1
    //combinaçao de de blocos para ponto
    if (coR4 && coR5 && coR6 == 1 || coR1 && coR4 && coR7 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }
  if (event.button == 1) {
    //açao player blue
    C4.style.background = 'blue'//botao meio
    coB4 = 1
    //combinação de blocos para ponto
    if (coB4 && coB5 && coB6 == 1 || coB1 && coB4 && coB7 == 1) {
      blueP.innerHTML = pontosB++
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }

}
function c5(event) {
  if (event.button == 0) {
    //acao player red
    C5.style.background = 'red'//botao esquerdo
    coR5 = 1
    //combinaoção de blocos para ponto
    if (coR2 && coR5 && coR8 == 1 || coR4 && coR5 && coR6 == 1 || coR3 && coR5 && coR7 == 1 || coR1 && coR5 && coR9 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }


  }
  if (event.button == 1) {
    //acão plaryer blue
    C5.style.background = 'blue'//botao meio
    coB5 = 1
    if (coB2 && coB5 && coB8 == 1 || coB4 && coB5 && coB6 == 1 || coB3 && coB5 && coB7 == 1 || coB1 && coB5 && coB9 == 1) {
      blueP.innerHTML = pontosB++
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }

}
function c6(event) {
  //acao player red
  if (event.button == 0) {
    C6.style.background = 'red'//marca o campo com a cor red
    coR6 = 1
    //combinacao de blocos para ponto
    if (coR6 && coR5 && coR4 == 1 || coR3 && coR6 && coR9 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }
  if (event.button == 1) {
    //ação pleyer blue
    C6.style.background = 'blue'//marca o campo com a cor blue 
    coB6 = 1
    //combinaçoes de campo para ponto
    if (coB6 && coB5 && coB4 == 1 || coB3 && coB6 && coB9 == 1) {
      blueP.innerHTML = pontosB++
      //zerar campo apos vitoria blue
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }

}
function c7(event) {
  if (event.button == 0) {
    C7.style.background = 'red'//botao esquerdo
    coR7 = 1
    if (coR7 && coR8 && coR9 == 1 || coR1 && coR4 && coR7 == 1 || coR7 && coR5 && coR3 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }
  if (event.button == 1) {
    C7.style.background = 'blue'//botao meio
    coB7 = 1
    //Combinacoes de campos para ponto
    if (coB7 && coB8 && coB9 == 1 || coB1 && coB4 && coB7 == 1 || coB7 && coB5 && coB3 == 1) {
      blueP.innerHTML = pontosB++
      //zerar campo apos vitoria
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }

}
function c8(event) {
  if (event.button == 0) {
    //acao do player red
    C8.style.background = 'red'//marca o campo com a cor red
    coR8 = 1
    //combinao de blocos para vitoria 
    if (coR8 && coR5 && coR2 == 1 || coR7 && coR8 && coR9 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }
  if (event.button == 1) {
    //acao player blue
    C8.style.background = 'blue'//botao meio
    coB8 = 1
    //combinaçao de blocos para ponto
    if (coB8 && coB5 && coB2 == 1 || coB7 && coB8 && coB9 == 1) {
      blueP.innerHTML = pontosB++
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }

}
function c9(event) {
  if (event.button == 0) {
    //açao player red
    C9.style.background = 'red'//marca o campo com a cor red
    coR9 = 1
    //combinacao de blocos para o ponto
    if (coR9 && coR5 && coR1 == 1 || coR9 && coR6 && coR3 == 1 || coR7 && coR8 && coR9 == 1) {
      redP.innerHTML = pontosR++
      //zerar o campo apos vitoria red
      coR1 = null
      coR2 = null
      coR3 = null
      coR4 = null
      coR5 = null
      coR6 = null
      coR7 = null
      coR8 = null
      coR9 = null

      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }
  if (event.button == 1) {
    //acao player blue
    C9.style.background = 'blue'//marca o campo com a cor blue
    coB9 = 1
    //combinaçao de blocos para ponto
    if (coB9 && coB5 && coB1 == 1 || coB9 && coB6 && coB3 == 1 || coB7 && coB8 && coB9 == 1) {
      blueP.innerHTML = pontosB++
      coB1 = null
      coB2 = null
      coB3 = null
      coB4 = null
      coB5 = null
      coB6 = null
      coB7 = null
      coB8 = null
      coB9 = null
      //campos 
      C1.style.background = 'black'
      C2.style.background = 'black'
      C3.style.background = 'black'
      C4.style.background = 'black'
      C5.style.background = 'black'
      C6.style.background = 'black'
      C7.style.background = 'black'
      C8.style.background = 'black'
      C9.style.background = 'black'
    }
  }

}
// limpar a tela
function limpaTela() {
  //condicoes red
  coR1 = null
  coR2 = null
  coR3 = null
  coR4 = null
  coR5 = null
  coR6 = null
  coR7 = null
  coR8 = null
  coR9 = null
  //condicoes blue
  coB1 = null
  coB2 = null
  coB3 = null
  coB4 = null
  coB5 = null
  coB6 = null
  coB7 = null
  coB8 = null
  coB9 = null
  //campos 
  C1.style.background = 'black'
  C2.style.background = 'black'
  C3.style.background = 'black'
  C4.style.background = 'black'
  C5.style.background = 'black'
  C6.style.background = 'black'
  C7.style.background = 'black'
  C8.style.background = 'black'
  C9.style.background = 'black'
}
// zerar placar
function zerar() {
  blueP.innerHTML = ""
  pontosB = 1
  redP.innerHTML = ""
  pontosR = 1
}



/* a ser implementado:

 1* animacao vitoria
 2* animaçao deu velha
 3* uma cor  nao pode sobrepor a outra
 */

 //condicoes red
