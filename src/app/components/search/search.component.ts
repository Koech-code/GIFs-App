import { Component, OnInit } from '@angular/core';
import { GifDataService } from 'src/app/services/gif-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gifDataService: GifDataService) { }

  ngOnInit(): void {
  }
}
