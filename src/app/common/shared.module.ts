import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './component/top-nav-bar/top-nav-bar.component';
import { RouterModule } from '@angular/router';


const MODULES = [CommonModule,RouterModule];

const PIPES = [];

const DIRECTIVES = [];

const COMPONENTS = [
 TopNavBarComponent
];

@NgModule({
  imports: [...MODULES],
  declarations: [...DIRECTIVES, ...PIPES, ...COMPONENTS],
  exports: [...DIRECTIVES, ...PIPES, ...COMPONENTS, ...MODULES]

})
export class SharedModule { }
