import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { TeamComponent } from './team/team.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { SeoComponent } from './seo/seo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/company', component: CompanyComponent },
  { path: 'about/team', component: TeamComponent },
  { path: 'services/web-development', component: WebDevelopmentComponent },
  { path: 'services/seo', component: SeoComponent },
  { path: '**', redirectTo: '' } 
  // Adicione outras rotas conforme necessário
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    CompanyComponent,
    TeamComponent,
    WebDevelopmentComponent,
    SeoComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Configure as rotas aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppRoutingModule { }
