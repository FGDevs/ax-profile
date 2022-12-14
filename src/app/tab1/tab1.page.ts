import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabDataKey } from 'src/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public title: string;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: TabDataKey) => {
      this.title = data.title;
    });
  }
}
