import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { PageNotFoundComponent } from './';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'contact', component: ContactComponent },
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
