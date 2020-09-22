import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixedscatterComponent } from './mixedscatter/mixedscatter.component';

const routes: Routes = [
  { path: 'mixedscatter-component', component: MixedscatterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
