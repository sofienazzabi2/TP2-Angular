import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { RouterParamComponent } from './components/router-param/router-param.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './login/login.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { loginGuard } from './login/login.guard';
import { SpecificCvComponent } from './cv/specific-cv/specific-cv.component';
import { PurePipeComponent } from './components/pure-pipe/pure-pipe.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MasterDetailsComponent } from './cv/master-details/master-details.component';
import { detailsResolver } from './cv/resolvers/details/details.resolver';
import { cvResolver } from './cv/resolvers/cv/cv.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'cv', component: CvComponent },
      { path: 'cv/:id', component: SpecificCvComponent },
      { path: 'route/:quelquechose', component: RouterParamComponent },
      { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
      { path: 'ex1', component: Ex1Component },
      { path: 'ex2', component: Ex2Component },
      { path: 'pure-pipe', component: PurePipeComponent },
      { path: 'product-list', component: ProductListComponent },
      {
        path: 'cv-resolver',
        children: [
          { path: '', component: CvComponent, resolve: { cvs: cvResolver } },
          {
            path: 'list',
            component: MasterDetailsComponent,
            children: [
              {
                path: ':id',
                component: SpecificCvComponent,
                resolve: { cv: detailsResolver },
              },
            ],
          },
        ],
      },
    ],
  },

  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
