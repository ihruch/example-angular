import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { PhonesComponent } from './phones.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';
import { PhoneSingleComponent } from './phone-single/phone-single.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
 
import { AuthGuard } from './../shared/guards/auth.guard';
import { ListResolverGuard } from './../shared/guards/list-resolver.guard';
import { CanDeactivateGuard } from './../shared/guards/can-deactivate.guard';
const routes: Routes = [
  {
    path: 'phones',
    component: PhonesComponent,
    canActivate: [AuthGuard],
    resolve: {phones: ListResolverGuard },
    children: [
      {
        path: '',
        component: PhoneListComponent,
      },
      {
        path: 'create',
        component: PhoneCreateComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: ':id',
        component: PhoneSingleComponent,
      },
      {
        path: ':id/edit',
        component: PhoneEditComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule { }

