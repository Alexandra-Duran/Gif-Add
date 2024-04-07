import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';


import { HomepageComponent } from './pagues/homepage/home-page.component';
import { searchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';




@NgModule({
  declarations: [
  HomepageComponent,
  searchBoxComponent,
  CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class GifsModule { }
