import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MixedscatterComponent } from './mixedscatter/mixedscatter.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { MixedService } from './mixedscatter/mixed.service';
import { ScatterService } from './scatterplot/scatter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MixedscatterComponent,
    ScatterplotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MixedService,
    ScatterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
