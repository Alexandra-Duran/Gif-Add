import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifService: GifService){}

  get tag():string[]{
    return this.gifService.tagsHistory
  }

  public searchTag(tag:string):void{
    return this.gifService.searchTag(tag)
  }

}
