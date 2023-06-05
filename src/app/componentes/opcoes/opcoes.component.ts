import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.css']
})
export class OpcoesComponent {

 @Input() opcoes = {
  id: '2',
  conteudo: 'Opcao 2',
  valor:20,
  selecionada: false
  }
}
