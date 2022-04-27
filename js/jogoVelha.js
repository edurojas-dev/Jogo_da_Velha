
var rodada = 1
var matrizJogo = Array(3)

matrizJogo['a']= Array(3)
matrizJogo['b']= Array(3)
matrizJogo['c']= Array(3)

//array chave A:
matrizJogo['a'][1] = 0
matrizJogo['a'][2] = 0
matrizJogo['a'][3] = 0

//array chave B:
matrizJogo['b'][1] = 0
matrizJogo['b'][2] = 0
matrizJogo['b'][3] = 0

//array chave C:
matrizJogo['c'][1] = 0
matrizJogo['c'][2] = 0
matrizJogo['c'][3] = 0


$(document).ready( function(){
   
    //botao play do jogo...
    $('#btnPlay').click( function(){
        //verificar se os campos de apelidos estão preenchidos...
        var jogador1 = $('#nomeGamer1').val()
        var jogador2 = $('#nomeGamer2').val()

        if(jogador1 == null || jogador1 == ''){
            alert('Preencha o campo de Apelido do Jogador 1')
            return false
        }
        if(jogador2 == null || jogador2 == ''){
            alert('Preencha o campo de Apelido do Jogador 2')
            return false
        }

        $('#telaInicial').hide();
        $('#telaPlayJogo').show();

        //exibir os apelidos nos span
        $('#ExibirApelido-Gamer1').html(jogador1)
        $('#ExibirApelido-Gamer1').addClass("apelidoFormatada")

        $('#ExibirApelido-Gamer2').html(jogador2)
        $('#ExibirApelido-Gamer2').addClass("apelidoFormatada")
        
    })

    //capturando click nos bloco do #
    $('.jogada').click( function(){
        var id_clicado = this.id
        jogada(id_clicado)        
    })

    //Função para inclusão de marcação o - x
    function jogada(id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")'
            ponto = -1
        } else{
            icone = 'url("imagens/marcacao_2.png")'
            ponto = 1
        }
        rodada++
        $('#'+id).css('background-image',icone)
        var linhaColuna  = id.split('-')
        
        verificarGanhador()
    }

    var imgMSG = document.getElementById('imgMSG')
    var cont = 0

    function verificarGanhador(){
        $('#msgGanhou').css('color', '#22a6b3')
        //verificar quem ganha...
        if (document.getElementById('a-1').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('a-2').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('a-3').style.backgroundImage == 'url("imagens/marcacao_2.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer2').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
           
        } else if 
            (document.getElementById('b-1').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('b-2').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('b-3').style.backgroundImage == 'url("imagens/marcacao_2.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer2').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if 
            (document.getElementById('c-1').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('c-2').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('c-3').style.backgroundImage == 'url("imagens/marcacao_2.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer2').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        }else if
            (document.getElementById('a-1').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('b-1').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('c-1').style.backgroundImage == 'url("imagens/marcacao_2.png")'){
        
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer2').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('a-2').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('b-2').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('c-2').style.backgroundImage == 'url("imagens/marcacao_2.png")') {
        
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer2').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('a-3').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('b-3').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('c-3').style.backgroundImage == 'url("imagens/marcacao_2.png")') {
            
            $('#msgGanhou').html($('#ExibirApelido-Gamer2').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('a-1').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('b-2').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('c-3').style.backgroundImage == 'url("imagens/marcacao_2.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer2').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        }
        else if
            (document.getElementById('a-3').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('b-2').style.backgroundImage == 'url("imagens/marcacao_2.png")' &&
            document.getElementById('c-1').style.backgroundImage == 'url("imagens/marcacao_2.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer2').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        }
        //jogador 1 ganhou...
        else if (document.getElementById('a-1').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('a-2').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('a-3').style.backgroundImage == 'url("imagens/marcacao_1.png")') {
            
                imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer1').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('b-1').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('b-2').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('b-3').style.backgroundImage == 'url("imagens/marcacao_1.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer1').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('c-1').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('c-2').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('c-3').style.backgroundImage == 'url("imagens/marcacao_1.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer1').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('a-1').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('b-1').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('c-1').style.backgroundImage == 'url("imagens/marcacao_1.png")') {
           
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer1').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('a-2').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('b-2').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('c-2').style.backgroundImage == 'url("imagens/marcacao_1.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer1').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('a-3').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('b-3').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('c-3').style.backgroundImage == 'url("imagens/marcacao_1.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer1').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        } else if
            (document.getElementById('a-1').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('b-2').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('c-3').style.backgroundImage == 'url("imagens/marcacao_1.png")') {
           
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer1').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        }
        else if
            (document.getElementById('a-3').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('b-2').style.backgroundImage == 'url("imagens/marcacao_1.png")' &&
            document.getElementById('c-1').style.backgroundImage == 'url("imagens/marcacao_1.png")') {
            
            imgMSG.src = 'imagens/winner.gif'
            $('#msgGanhou').html($('#ExibirApelido-Gamer1').html() + ' GANHOU!')
            $('#ExemploModalCentralizado').modal()
        }
        else{
            cont++
            if(cont == 9){
                imgMSG.src = 'imagens/deuVelha.jpg'
                imgMSG.style.width = "380px"
                imgMSG.style.borderRadius = "11px"
                $('#msgGanhou').text("Deu velha, ninguém ganhou!")
                $('#ExemploModalCentralizado').modal()
            }
            console.log(cont)
        }
    }

    //restart...
    $('#reiniciarGame').click( function(){
        window.location.reload()
    })
})