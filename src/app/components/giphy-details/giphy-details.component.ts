import { Component, OnInit } from '@angular/core';
import { GifDataService } from 'src/app/services/gif-data.service';

@Component({
  selector: 'app-giphy-details',
  templateUrl: './giphy-details.component.html',
  styleUrls: ['./giphy-details.component.css']
})
export class GiphyDetailsComponent implements OnInit {

  gifs: any[] = [];

  constructor(private gifDataService: GifDataService) { }

  ngOnInit(): void {
    this.gifDataService.getTrendingGifs()
      .subscribe((response: any) => {
        this.gifs = response.data;
      })
  }
}
