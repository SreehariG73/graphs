import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MixedscatterComponent } from './mixedscatter/mixedscatter.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';

@NgModule({
  declarations: [
    AppComponent,
    MixedscatterComponent,
    ScatterplotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
