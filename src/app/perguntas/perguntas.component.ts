import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {
  item: any;
  arrow: any;
  count: any;
  ativo = false;
  
  constructor() { }

  ngOnInit(): void {
    this.count = 2;
  }

  exibeMais(posic: any){
    if(this.count % 2 == 0){
      this.item = document.getElementById(posic);
      this.item.style.display = "initial"
      this.arrow = document.getElementById("arrow-"+posic);
      this.arrow.src = '../../assets/arrow.png';
      this.ativo = true;
    } 
    else{
      this.item = document.getElementById(posic);
      this.item.style.display = "none"
      this.arrow = document.getElementById("arrow-"+posic);
      this.arrow.src = '../../assets/arrow.svg';
      this.ativo = false;
    }
    this.count += 1;
  } 


  perguntas = [
    { 
      'title': 'Meus jogos anteriores do Xbox vão funcionar no Xbox Series X? ', 
      'answer':" O Xbox Series X é compatível com milhares de jogos entre quatro gerações do Xbox. E com os jogos com a Entrega Inteligente, você compra um jogo uma vez e recebe a melhor versão do jogo para o console em que está jogando. Para jogar um jogo retrocompatível, insira o disco ou pesquise na biblioteca e selecione o jogo que deseja jogar."
    },
    {
     'title': 'Quais jogos incluem a Entrega Inteligente ?', 
      'answer':"Todos os títulos do Xbox Game Studio incluem a Entrega Inteligente para que você obtenha a melhor versão do jogo, não importa o console em que está jogando. Os jogos de parceiros que optaram por incluir a Entrega Inteligente terão uma observação sobre o recurso na página do jogo digital ou na caixa do disco"
    },
    {
      'title': 'Como saber se minha TV é compatível com 4K ?', 
      'answer':"Para saber se sua TV é compatível com 4K, confira as configurações da TV. A resolução da TV deverá estar especificada nos menus de configuração da TV."
    },
    {
      'title': 'Como posso aumentar o armazenamento do console para ter mais jogos?', 
      'answer':"O Xbox Series X é compatível com um disco rígido padrão independente e produtos com o selo Projetado para Xbox são compatíveis com Xbox. Para ter a melhor experiência, a placa de expansão de armazenamento Seagate de 1 TB para Xbox Series X|S é conectada à parte traseira do console por meio da porta de expansão de armazenamento dedicada e replica a experiência SSD personalizada do console, fornecendo armazenamento adicional de jogos com o mesmo desempenho."
    },
  ]
}
