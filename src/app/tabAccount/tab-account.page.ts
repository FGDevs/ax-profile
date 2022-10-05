import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabDataKey } from 'src/interfaces';

@Component({
  selector: 'app-tab-account',
  templateUrl: 'tab-account.page.html',
  styleUrls: ['tab-account.page.scss']
})
export class TabAccountPage {
  public title: string;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: TabDataKey) => {
      this.title = data.title;
    });
  }
}
