import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public geoBreite = "49.014";
  public geoLaenge = "8.4043";

  public marker1geoBreite = "48.775556";
  public marker1geoLaenge = "9.182778";

  constructor() {}

}
