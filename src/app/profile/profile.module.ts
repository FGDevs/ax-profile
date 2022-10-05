import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileComponentModule { }
