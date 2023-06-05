import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './componentes/table/table.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';

const routes: Routes = [
  {path: '',
  redirectTo: 'TableComponent',
  pathMatch: 'prefix'
  },
  {path: "table",
  component: TableComponent
  },
  {path: "resultado",
  component: ResultadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
