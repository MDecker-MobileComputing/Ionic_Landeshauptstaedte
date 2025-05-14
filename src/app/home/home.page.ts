import { Component } from '@angular/core';

import { BundeslandUndHauptstadt } from '../bundesland-und-hauptstadt';
import { AgmInfoWindow } from '@agm/core';


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

  /** Zoomfaktor, bei dem ganz Deutschland auf einmal angezeigt wird. */
  readonly defaultZoomfaktor = 6;


  /** Geographische Breite vom aktuellen Mittelpunkt der Karte; wird an Attribut `latitude` vom `agm-map`-Element gebunden. */
  public mittelpunktGeoBreite = this.mittelpunktDeutschlandGeoBreite;

  /** Geographische Länge vom aktuellen Mittelpunkt der Karte; wird an Attribut `longitude` vom `agm-map`-Element gebunden. */
  public mittelpunktGeoLaenge = this.mittelpunktDeutschlandGeoLaenge;

  /** Zoom-Faktor für geographische Karte. */
  public zoomFaktor = this.defaultZoomfaktor;

  /** Array mit je einem Element für alle 16 Bundesländer+Stadtstaaten in Deutschland. */
  public bundeslandUndHauptstadtArray:BundeslandUndHauptstadt[] = [];

  /**
   * Referenziert das zuletzt geöffnete Info-Windows, damit es geschlossen werden kann (wenn das nächste Info-Windows geöffnet wird,
   * oder wenn die Darstellung zurückgesetzt wird.
   */
  private previousInfoWindow: AgmInfoWindow = null;


  /**
   * Füllt Array mit allen 16 Landeshauptstädten. Siehe auch https://bundesland24.de/bundeslaender/
   */
  constructor() {

    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Baden-Württemberg"     , "Stuttgart"  , false, "48.775556", "9.182778"  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Bayern"                , "München"    , false, "48.137222", "11.575556" ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Berlin"                , ""           , true , "52.518611", "13.408333" ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Brandenburg"           , "Potsdam"    , false, "52.395833", "13.061389" ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Bremen"                , ""           , true , "53.075878", "8.807311"  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Hamburg"               , ""           , true , "53.550556", "9.993333"  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Hessen"                , "Wiesbaden"  , false, "50.0825"  , "8.24"      ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Mecklenburg-Vorpommern", "Schwerin"   , false, "53.633333", "11.416667" ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Niedersachsen"         , "Hannover"   , false, "52.374444", "9.738611"  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Nordrhein-Westfalen"   , "Düsseldorf" , false, "51.225556", "6.782778"  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Rheinland-Pfalz"       , "Mainz"      , false, "50"       , "8.271111"  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Saarland"              , "Saarbrücken", false, "49.23265" , "6.99619"   ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Sachsen"               , "Dresden"    , false, "51.049259", "13.73836"  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Sachsen-Anhalt"        , "Magdeburg"  , false, "52.133333", "11.616667" ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Schleswig-Holstein"    , "Kiel"       , false, "54.32321" , "10.14019"  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt("Thüringen"             , "Erfurt"     , false, "50.978056", "11.029167" ) );
  }

  /**
   * Event-Handler für Klick auf ein Bundesland in der Liste.
   */
  public onBundeslandClick(bundeslandUndHauptstadt: BundeslandUndHauptstadt) {

    console.log(`Geklickt auf ${bundeslandUndHauptstadt.bundesland}.`);

    this.mittelpunktGeoBreite = bundeslandUndHauptstadt.geoBreite;
    this.mittelpunktGeoLaenge = bundeslandUndHauptstadt.geoLaenge;

    this.zoomFaktor = 12;
  }

  /**
   * Event-Handler für Button "Darstellung zurücksetzen" (rechts oben im Hauptfenster).
   * Die Mittelpunkt der Karte wird wieder auf den Mittelpunkt von Deutschland verschoben und
   * der Zoom-Faktor auf den Default-Wert (mit dem ganz Deutschland auf einmal sichtbar wird)
   * zurückgesetzt; außerdem wird ein ggf.
   */
  public onButtonZuruecksetzen() {

    this.mittelpunktGeoBreite = this.mittelpunktDeutschlandGeoBreite;
    this.mittelpunktGeoLaenge = this.mittelpunktDeutschlandGeoLaenge;

    this.zoomFaktor = this.defaultZoomfaktor;

    if (this.previousInfoWindow != null) {

      this.previousInfoWindow.close();
      this.previousInfoWindow = null;
    }
  }

  /**
   * Event-Handler für Klicken auf einen Marker (also eine Hauptstadt).
   * Die Methode sorgt dafür, dass höchstens ein Info-Windows gleichzeitig
   * geöffnet ist (aus Gründen der Übersichtlichkeit).
   *
   * siehe auch: https://stackoverflow.com/a/55873945
   */
  public aufMarkerGeklickt(infoWindow: AgmInfoWindow) {

    console.log(`aufMarkerGeklickt: ${infoWindow}`);

    if (this.previousInfoWindow != null) {

      this.previousInfoWindow.close();
    }

    this.previousInfoWindow = infoWindow;
  }

}
