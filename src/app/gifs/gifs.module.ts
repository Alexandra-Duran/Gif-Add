import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';


import { HomepageComponent } from './pages/homepage/home-page.component';
import { searchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
  HomepageComponent,
  searchBoxComponent,
  CardListComponent,
  GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class GifsModule { }
