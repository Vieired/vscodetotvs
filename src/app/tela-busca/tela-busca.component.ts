import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-busca',
  templateUrl: './tela-busca.component.html',
  styleUrls: ['./tela-busca.component.css']
})
export class TelaBuscaComponent implements OnInit {
  lstProdutos = [
    {
      titulo: 'Hilton Copacabana Rio de Janeiro',
      subtitulo: 'Hilton Copacabana',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      titulo: 'Golden Tulip',
      subtitulo: 'Golden Tulip',
      descricao: 'Golden Tulip é uma cadeia originalmente holandesa de hotéis e resorts. Em todo o mundo existem mais de 240 hotéis Golden Tulip espalhados por 45 países.'
    },
    {
      titulo: 'Hotel Atlântico Prime',
      subtitulo: 'Atlântico Prime',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      titulo: 'Américas Copacabana Hotel',
      subtitulo: 'Américas Copacabana',
      descricao: 'Rio de Janeiro, 0,5 km da praia.'
    },    
    {
      titulo: 'Golden Tulip',
      subtitulo: 'Golden Tulip Inn',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },    
    {
      titulo: 'Casa Nova',
      subtitulo: 'Casa Nova Hotel',
      descricao: 'Localizado a cerca de cinco minutos de caminhada dos Arcos da Lapa, o Casa Nova tem apartamentos com decoração moderna e ar-condicionado. Há unidades com varanda e banheira de hidromassagem.'
    },
    {
      titulo: 'Belmond',
      subtitulo: 'Belmond Copacabana Palace',
      descricao: 'Avenida Atlantica 1702, Rio de Janeiro, RJ, 22021-001, Brasil.'
    },                   
    {
      titulo: 'Nacional',
      subtitulo: 'Hotel Nacional',
      descricao: 'O Hotel Nacional reúne luxo e história em suas suítes, já que ocupa um imponente prédio dos anos 1960. Algumas delas contam com vista para a Praça dos Três Poderes. O local possui saunas seca e úmida e banheira de hidromassagem.'
    },    
    {
      titulo: 'Intercity Ibirapuera',
      subtitulo: 'Intercity Ibirapuera',
      descricao: 'A menos de cinco quilômetros do Aeroporto de Congonhas, o Intercity Ibirapuera, no bairro de Moema, tem quartos com internet gratuita. Alguns são adaptados para a estadia de pessoas com mobilidade reduzida.'
    },
    {
      titulo: 'Hotel Nacional',
      subtitulo: 'Hotel Nacional',
      descricao: 'Brasília, Distrito Federal, Brasil.'
    },
    {
      titulo: 'ibis budget',
      subtitulo: 'ibis budget Sao Paulo Jardins Hotel',
      descricao: 'O ibis budget Sao Paulo Jardins está localizado em uma região moderna e movimentada, com excelentes opções de lojas, bares e restaurantes.'
    },        
  ];
  filtro: string = '';
  itemProd = [];

  obterRespostasBusca() {
    if(this.lstProdutos.length === 0 
      || this.filtro === undefined
      /*|| this.filtro.trim() === ''*/)
      return this.lstProdutos;

    if(this.filtro.trim().length < 1)
      return [];
    else
      return this.lstProdutos.filter((v) => {
        if(v.subtitulo.toLowerCase().indexOf(this.filtro.toLowerCase()) != -1)
          return true;
        return false;
      });      
  }

  constructor() { }

  ngOnInit() {
  }

}
