import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  checkboxMarcado= 0;
  soma = 0;
  total = 0;

  ngOnInit(): void {
  }

  opcoes = [
    {    
    id: '1',
    conteudo: 'Opcao numero oneaaa',
    valor:10,
    selecionada: false
    },
    {    
    id: '2',
    conteudo: 'Opcao 2',
    valor:20,
    selecionada: false
    }
  ];


  enviarResposta(){
    
  }

  alerta(){
    console.log("aqui")
  }

}
