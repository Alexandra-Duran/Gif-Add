import { Component, ElementRef, ViewChild, Injectable } from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template:`
  <h5> Buscar: </h5>
  <input type="text"
  class="form-control"
  placeholder="Bucar gif..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
 `
})
export class searchBoxComponent {

  constructor(private gifService: GifService){}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag(){
    const newTag = this.tagInput.nativeElement.value

    this.gifService.searchTag(newTag);

    this.tagInput.nativeElement.value = "";


  }
}
