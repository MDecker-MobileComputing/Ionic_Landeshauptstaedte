import { Component } from '@angular/core';
import { Landeshauptstadt } from './../landeshauptstadt';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Geographische Breite von Mittelpunkt von Deutschland, siehe Berechnungsmethode 1 auf https://de.wikipedia.org/wiki/Mittelpunkte_Deutschlands */
  public aktuellePosGeoBreite = "51.163361";

  /** Geographische Länge von Mittelpunkt von Deutschland, siehe Berechnungsmethode 1 auf https://de.wikipedia.org/wiki/Mittelpunkte_Deutschlands */  
  public aktuellePosgeoLaenge = "10.447683";

  /** Array mit Hauptstädten aller 16 Bundesländern in Deutschland; wird als Marker dargestellt. */
  public hauptstadteArray:Landeshauptstadt[] = [];

  /**
   * Füllt Array mit allen 16 Landeshauptstädten. Siehe auch https://bundesland24.de/bundeslaender/
   */
  constructor() {

    // alphabetisch nach Name Bundesland
    this.hauptstadteArray.push( new Landeshauptstadt("Stuttgart"  , "Baden-Württemberg"     , false, "48.775556", "9.182778"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("München"    , "Bayern"                , false, "48.137222", "11.575556" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Berlin"     , "Berlin"                , true , "52.518611", "13.408333" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Potsdam"    , "Brandenburg"           , false, "52.395833", "13.061389" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Bremen"     , "Bremen"                , true , "53.075878", "8.807311"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Hamburg"    , "Hamburg"               , true , "53.550556", "9.993333"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Wiesbaden"  , "Hessen"                , false, "50.0825"  , "8.24"      ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Schwerin"   , "Mecklenburg-Vorpommern", false, "53.633333", "11.416667" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Hannover"   , "Niedersachsen"         , false, "52.374444", "9.738611"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Düsseldorf" , "Nordrhein-Westfalen"   , false, "51.225556", "6.782778"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Mainz"      , "Rheinland-Pfalz"       , false, "50"       , "8.271111"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Saarbrücken", "Saarland"              , false, "49.23265" , "6.99619"   ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Dresden"    , "Sachsen"               , false, "51.049259", "13.73836"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Magdeburg"  , "Sachsen-Anhalt"        , false, "52.133333", "11.616667" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Kiel"       , "Schleswig-Holstein"    , false, "54.32321" , "10.14019"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Erfurt"     , "Thüringen"             , false, "50.978056", "11.029167" ) );
  }

}
