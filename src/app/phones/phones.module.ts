import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhonesComponent } from './phones.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneSingleComponent } from './phone-single/phone-single.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';
import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneItemComponent } from './phone-item/phone-item.component'
import { MaterialModule } from './../material.module'; 

@NgModule({
  imports: [
    CommonModule, 
    PhoneRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PhonesComponent,
    PhoneListComponent,
    PhoneSingleComponent,
    PhoneEditComponent,
    PhoneCreateComponent,
    PhoneItemComponent
  ],
  exports: [
    PhonesComponent,
    PhoneListComponent,
    PhoneSingleComponent,
    PhoneEditComponent,
    PhoneCreateComponent,
    PhoneItemComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PhonesModule { }
