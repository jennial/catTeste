import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { TableComponent } from './componentes/table/table.component';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { OpcoesComponent } from './componentes/opcoes/opcoes.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    TableComponent,
    ResultadoComponent,
    OpcoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
