import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SobreComponent } from './sobre/sobre.component';
import { JogosComponent } from './jogos/jogos.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    SobreComponent,
    JogosComponent,
    PerguntasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
