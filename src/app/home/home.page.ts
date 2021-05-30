import { Component } from '@angular/core';
import { StadtUndLand } from '../stadtundland';

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

  /** Geographische Breite vom aktuellen Mittelpunkt der Karte; wird an Attribut `latitude` vom `agm-map`-Element gebunden. */
  public mittelpunktGeoBreite = this.mittelpunktDeutschlandGeoBreite;

  /** Geographische Länge vom aktuellen Mittelpunkt der Karte; wird an Attribut `longitude` vom `agm-map`-Element gebunden. */  
  public mittelpunktGeoLaenge = this.mittelpunktDeutschlandGeoLaenge;

  /** Array mit je einem Element für alle 16 Bundesländer+Stadtstaaten in Deutschland. */
  public stadtLandArray:StadtUndLand[] = [];

  /**
   * Füllt Array mit allen 16 Landeshauptstädten. Siehe auch https://bundesland24.de/bundeslaender/
   */
  constructor() {

    this.stadtLandArray.push( new StadtUndLand("Baden-Württemberg"     , "Stuttgart"  , false, "48.775556", "9.182778"  ) );
    this.stadtLandArray.push( new StadtUndLand("Bayern"                , "München"    , false, "48.137222", "11.575556" ) );
    this.stadtLandArray.push( new StadtUndLand("Berlin"                , ""           , true , "52.518611", "13.408333" ) );
    this.stadtLandArray.push( new StadtUndLand("Brandenburg"           , "Potsdam"    , false, "52.395833", "13.061389" ) );
    this.stadtLandArray.push( new StadtUndLand("Bremen"                , ""           , true , "53.075878", "8.807311"  ) );
    this.stadtLandArray.push( new StadtUndLand("Hamburg"               , ""           , true , "53.550556", "9.993333"  ) );
    this.stadtLandArray.push( new StadtUndLand("Hessen"                , "Wiesbaden"  , false, "50.0825"  , "8.24"      ) );
    this.stadtLandArray.push( new StadtUndLand("Mecklenburg-Vorpommern", "Schwerin"   , false, "53.633333", "11.416667" ) );
    this.stadtLandArray.push( new StadtUndLand("Niedersachsen"         , "Hannover"   , false, "52.374444", "9.738611"  ) );
    this.stadtLandArray.push( new StadtUndLand("Nordrhein-Westfalen"   , "Düsseldorf" , false, "51.225556", "6.782778"  ) );
    this.stadtLandArray.push( new StadtUndLand("Rheinland-Pfalz"       , "Mainz"      , false, "50"       , "8.271111"  ) );
    this.stadtLandArray.push( new StadtUndLand("Saarland"              , "Saarbrücken", false, "49.23265" , "6.99619"   ) );
    this.stadtLandArray.push( new StadtUndLand("Sachsen"               , "Dresden"    , false, "51.049259", "13.73836"  ) );
    this.stadtLandArray.push( new StadtUndLand("Sachsen-Anhalt"        , "Magdeburg"  , false, "52.133333", "11.616667" ) );
    this.stadtLandArray.push( new StadtUndLand("Schleswig-Holstein"    , "Kiel"       , false, "54.32321" , "10.14019"  ) );
    this.stadtLandArray.push( new StadtUndLand("Thüringen"             , "Erfurt"     , false, "50.978056", "11.029167" ) );
  }

  /**
   * Event-Handler für Klick auf ein Bundesland in der Liste.
   */
  public onBundeslandClick(stadt: StadtUndLand) {
    
    console.log(`Geklickt auf ${stadt.bundesland}.`);
  }  

}
