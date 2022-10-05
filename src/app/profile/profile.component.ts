import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  cart = [];

  mail = [];

  notification = [{ type: 'dummy' }];

  user = {
    imageUrl: 'assets/images/ava.png',
    name: 'Albertus Pangaribuan',
    phone: '+62822-8058-1234',
    receh: 0,
    voucher: 0,
    referal: 0,
  };

  missions = {
    total: 20,
    done: 8,
  };
  missionPercentage = this.missions.done / this.missions.total * 100;
  progressStyle = `width: ${this.missionPercentage}%`;

  constructor() { }

  ngOnInit() { }

}
