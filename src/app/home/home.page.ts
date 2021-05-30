import { Component } from '@angular/core';
import { Landeshauptstadt } from './../landeshauptstadt';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /* Geographische Breite von Mittelpunkt von Deutschland, siehe Berechnungsmethode 1 auf https://de.wikipedia.org/wiki/Mittelpunkte_Deutschlands . */
  readonly mittelpunktDeutschlandGeoBreite = "51.163361";

  /* Geographische Länge von Mittelpunkt von Deutschland, siehe Berechnungsmethode 1 auf https://de.wikipedia.org/wiki/Mittelpunkte_Deutschlands . */
  readonly mittelpunktDeutschlandGeoLaenge = "10.447683";

  /** Geographische Breite vom aktuellen Mittelpunkt der Karte. */    
  public mittelpunktGeoBreite = this.mittelpunktDeutschlandGeoBreite;

  /** Geographische Länge vom aktuellen Mittelpunkt der Karte. */  
  public mittelpunktGeoLaenge = this.mittelpunktDeutschlandGeoLaenge;

  /** Array mit Hauptstädten aller 16 Bundesländern in Deutschland; wird als Marker dargestellt. */
  public hauptstadteArray:Landeshauptstadt[] = [];

  /**
   * Füllt Array mit allen 16 Landeshauptstädten. Siehe auch https://bundesland24.de/bundeslaender/
   */
  constructor() {

    this.hauptstadteArray.push( new Landeshauptstadt("Baden-Württemberg"     , "Stuttgart"  , false, "48.775556", "9.182778"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Bayern"                , "München"    , false, "48.137222", "11.575556" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Berlin"                , ""           , true , "52.518611", "13.408333" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Brandenburg"           , "Potsdam"    , false, "52.395833", "13.061389" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Bremen"                , ""           , true , "53.075878", "8.807311"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Hamburg"               , ""           , true , "53.550556", "9.993333"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Hessen"                , "Wiesbaden"  , false, "50.0825"  , "8.24"      ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Mecklenburg-Vorpommern", "Schwerin"   , false, "53.633333", "11.416667" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Niedersachsen"         , "Hannover"   , false, "52.374444", "9.738611"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Nordrhein-Westfalen"   , "Düsseldorf" , false, "51.225556", "6.782778"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Rheinland-Pfalz"       , "Mainz"      , false, "50"       , "8.271111"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Saarland"              , "Saarbrücken", false, "49.23265" , "6.99619"   ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Sachsen"               , "Dresden"    , false, "51.049259", "13.73836"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Sachsen-Anhalt"        , "Magdeburg"  , false, "52.133333", "11.616667" ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Schleswig-Holstein"    , "Kiel"       , false, "54.32321" , "10.14019"  ) );
    this.hauptstadteArray.push( new Landeshauptstadt("Thüringen"             , "Erfurt"     , false, "50.978056", "11.029167" ) );
  }

}
