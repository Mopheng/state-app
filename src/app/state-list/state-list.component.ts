import { Component, OnInit } from '@angular/core';
import {StateListService} from './state-list.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css'],
  providers: [StateListService]
})
export class StateListComponent implements OnInit {

  stateList = [];
  countyList = [];
  showDetails = false;
  clickedIndex: number;
  searchString: string;

  constructor(private stateListService: StateListService) {
    this.stateListService.get_state_list()
      .subscribe((res: any) => {
        this.stateList = res.data;
      });
  }

  ngOnInit() {
  }

  state_details(index: number) {
    this.showDetails = true;
    this.clickedIndex = index;
    const detailLink = this.stateList[index].detail;
    this.stateListService.get_state_detail(detailLink)
      .subscribe((res: any) => {
        this.countyList = res.data;
      });
  }

}
