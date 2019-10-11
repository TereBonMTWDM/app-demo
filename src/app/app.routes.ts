import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { PageNotFoundComponent } from './';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoberturaComponent } from './pages/cobertura/cobertura.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product/:codigo', component: ProductComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cobertura', component: CoberturaComponent },
  { path: 'busqueda/:criterio', component: BusquedaComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent },

  // { path: 'path/:routeParam', component: MyComponent },
  // { path: 'staticPath', component: ... },
  // { path: '**', component: ... },
  // { path: 'oldPath', redirectTo: '/staticPath' },
  // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  // imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// export class FeatureRoutingModule {}
