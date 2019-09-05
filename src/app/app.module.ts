// modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components:
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';

// routes:
import { AppRoutingModule } from './app.routes';
import { DocsComponent } from './pages/docs/docs.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    DocsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule // archivo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
