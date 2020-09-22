import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixedscatterComponent } from './mixedscatter/mixedscatter.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';

const routes: Routes = [
  { path: '', component: ScatterplotComponent },
  { path: 'mixedscatter-component', component: MixedscatterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
