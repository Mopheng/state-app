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
  leftHighlightedMap = {};
  rightHighlightedMap = {};
  showDetails = false;
  equality = false;
  isSingleClick = true;
  clickedIndex: number;
  searchString: string;
  countyPopulationSum: number;

  constructor(private stateListService: StateListService) {
    this.stateListService.get_state_list()
      .subscribe((res: any) => {
        this.stateList = res.data;
      });
  }

  ngOnInit() {
  }

  state_details(index: number) {
    this.isSingleClick = true;

    setTimeout(() => {
      // detect whether action is single click or double click
      if (this.isSingleClick) {
        this.showDetails = true;
        this.clickedIndex = index;
        this.countyPopulationSum = 0;
        const detailLink = this.stateList[index].detail;

        this.stateListService.get_state_detail(detailLink)
          .subscribe((res: any) => {
            this.countyList = res.data;
            this.county_population_sum(this.countyList);

            // check if sum of county population equals record of state population
            this.equality = this.countyPopulationSum === this.stateList[index].population;
          });
      }
    }, 250);
  }

  highlight_toggle(state: number, left: boolean) {
    this.isSingleClick = false;

    this.leftHighlightedMap[state] = !this.leftHighlightedMap[state];
    // if to separate highlighting action between left and right panel, use code blow and change variable in template
    // if (left) {
    //   this.leftHighlightedMap[state] = !this.leftHighlightedMap[state];
    // } else {
    //   this.rightHighlightedMap[state] = !this.rightHighlightedMap[state];
    // }
  }

  county_population_sum(countyList: any[]) {
    countyList.forEach((county) => {
      this.countyPopulationSum += county.population;
    });
  }

}
