import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module'; // Configuração das rotas // problema na rota mencionado no readme
import { AppComponent } from './app.component'; // Componente principal (Dashboard)
import { HomeComponent } from './pages/home/home.component'; // Listagem de postagens
import { PostFormComponent } from './pages/post-form/post-form.component'; // Formulário de postagem
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para formulários
import { HttpClientModule } from '@angular/common/http'; // Para consumo de APIs

@NgModule({
  declarations: [
    AppComponent,      // Dashboard inicial
    HomeComponent,     // Tela de listagem de postagens
    PostFormComponent, // Tela de formulário de postagem
  ],
  imports: [
    BrowserModule,      
    //AppRoutingModule, // problema na rota mencionado no readme   
    FormsModule,         
    ReactiveFormsModule, 
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}
