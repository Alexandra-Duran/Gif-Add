import { Component } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',

})
export class HomepageComponent {
  constructor(private gifService: GifService){}

  get gif(): Gif[]{
    return this.gifService.gifList;
  }
}
