import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { DashbordAdminComponent } from './modules/dashbordAdmin/dashbordAdmin.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ManageUserComponent } from './modules/manageUser/manageUser.component';
import { ManageProductComponent } from './modules/manageProduct/manageProduct.component';
import { ProductComponent } from './modules/product/product.component';
import { UpdateProductComponent } from './modules/updateProduct/updateProduct.component';
import { ReportComponent } from './modules/report/report.component';
import { UserhomeComponent } from './modules/userhome/userhome.component';

import { CartComponent } from './modules/cart/cart.component';
import { OrderComponent } from './modules/order/order.component';
import { GetallorderComponent } from './modules/getallorder/getallorder.component';
import { GetallorderUserComponent } from './modules/getallorderUser/getallorderUser.component';

const routes: Routes = [
  {
    path: '',
    component: FullwidthComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'dashbord-admin',
        component: DashbordAdminComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'manage-user',
        component: ManageUserComponent,
      },
      {
        path: 'profile/:userId',
        component: ProfileComponent,
      },
      {
        path: 'manage-product',
        component: ManageProductComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'product/:productId',
        component: UpdateProductComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
      {
        path: 'userhome',
        component: UserhomeComponent,
      },

      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'getallorder',
        component: GetallorderComponent,
      },
      {
        path: 'getallorderuser',
        component: GetallorderUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
