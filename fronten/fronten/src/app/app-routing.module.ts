import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { AuthGuard } from './components/services/auth.guard';
import { AddreviewsComponent } from './components/addreviews/addreviews.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';
import { ApproveComponent } from './components/approve/approve.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'search',
    component:SearchComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
    
  },
  {
    path:'view-products',
    component:ViewDetailsComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'add-products',
    component:AddProductsComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
   
  },
  {
    path:'addreviews',
    component:AddreviewsComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
   
  },
  {
    path:'addreviews/:productId',
    component:AddreviewsComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
   
  },
  {
    path:'view-review/:productId',
    component:ViewReviewComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
   
  },
  {
    path:'view-review',
    component:ViewReviewComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
   
  },
  {
    path:'approve',
    component:ApproveComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
