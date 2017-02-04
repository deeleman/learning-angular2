import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { HelloAngularComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [HelloAngularComponent],
  bootstrap: [HelloAngularComponent],
})
export class AppModule { }
