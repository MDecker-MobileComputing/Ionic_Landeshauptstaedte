import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

import { GoogleMap } from '@capacitor/google-maps';

// Importe eigener Klassen
import { BundeslandUndHauptstadt } from '../bundesland-und-hauptstadt';
import { GOOGLE_MAPS_API_KEY } from "../mein-apikey";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements AfterViewInit {

  /** Array mit darzustellenden Landeshauptstädten. */
  public bundeslandUndHauptstadtArray:BundeslandUndHauptstadt[] = [];


  /*
   * Geographischer Mittelpunkt von Deutschland, siehe Berechnungsmethode 1 auf
   * der folgenden Seite: https://de.wikipedia.org/wiki/Mittelpunkte_Deutschlands
   */
  readonly mittelpunktDeutschland = {
                                      lat: 51.163361,
                                      lng: 10.447683
                                    };

  readonly defaultZoomFaktor = 5.5;

  /**
   * Objekt für programmatischen Zugriff auf GoogleMaps-Instanz.
   *
   * siehe auch:
   * * `skipLibCheck:true` in `tsconfig.json`
   * * CSS-Klasse für GoogleMaps-Instanz in `home.page.scss`
   */
  private googleMapObjekt: GoogleMap | null = null;

  /**
   * Füllt Array mit allen 16 Landeshauptstädten. Siehe auch https://bundesland24.de/bundeslaender/
   */
  constructor() {

    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Baden-Württemberg"     , "Stuttgart"  , false, 48.775556, 9.182778  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Bayern"                , "München"    , false, 48.137222, 11.575556 ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Berlin"                , ""           , true , 52.518611, 13.408333 ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Brandenburg"           , "Potsdam"    , false, 52.395833, 13.061389 ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Bremen"                , ""           , true , 53.075878, 8.807311  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Hamburg"               , ""           , true , 53.550556, 9.993333  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Hessen"                , "Wiesbaden"  , false, 50.0825  , 8.24      ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Mecklenburg-Vorpommern", "Schwerin"   , false, 53.633333, 11.416667 ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Niedersachsen"         , "Hannover"   , false, 52.374444, 9.738611  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Nordrhein-Westfalen"   , "Düsseldorf" , false, 51.225556, 6.782778  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Rheinland-Pfalz"       , "Mainz"      , false, 50       , 8.271111  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Saarland"              , "Saarbrücken", false, 49.23265 , 6.99619   ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Sachsen"               , "Dresden"    , false, 51.049259, 13.73836  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Sachsen-Anhalt"        , "Magdeburg"  , false, 52.133333, 11.616667 ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Schleswig-Holstein"    , "Kiel"       , false, 54.32321 , 10.14019  ) );
    this.bundeslandUndHauptstadtArray.push( new BundeslandUndHauptstadt( "Thüringen"             , "Erfurt"     , false, 50.978056, 11.029167 ) );
  }


  /**
   * Lifecycle-Methode. Einzige Methode aus Interface AfterViewInit.
   */
  public async ngAfterViewInit() {

    const mapRef = document.getElementById( "landkarte" );
    if ( !mapRef ) {

      console.error( "Element mit ID 'landkarte' nicht gefunden." );
      return;
    }

    this.googleMapObjekt =
            await GoogleMap.create({
                        id: "meine-karte",
                        element: mapRef,
                        apiKey: GOOGLE_MAPS_API_KEY,
                        config: {
                          center: this.mittelpunktDeutschland,
                          zoom: this.defaultZoomFaktor
                        },
            });


    // "Nadeln" für Landeshauptstädte einzeichnen

    for ( const landeshauptstadt of this.bundeslandUndHauptstadtArray ) {

      await this.googleMapObjekt.addMarker({
        coordinate: {
          lat: landeshauptstadt.geoBreite,
          lng: landeshauptstadt.geoLaenge
        }
      });
    }

  }


  /**
   * Event-Handler für Klick auf ein Bundesland in der Menüleiste.
   */
  public async onMenueEintragClick( bundeslandUndHauptstadt: BundeslandUndHauptstadt ) {

    console.log( "onBundeslandClick: " + bundeslandUndHauptstadt.bundesland );

    if ( this.googleMapObjekt ) {

      await this.googleMapObjekt.setCamera({
        coordinate: {
          lat: bundeslandUndHauptstadt.geoBreite,
          lng: bundeslandUndHauptstadt.geoLaenge
        },
        zoom: this.defaultZoomFaktor
      });
    }
  }


  /**
   * Event-Handler für Klick auf Button "Darstellung zurücksetzen".
   */
  public async onButtonZuruecksetzen() {

    if ( this.googleMapObjekt ) {

      await this.googleMapObjekt.setCamera({
        coordinate: this.mittelpunktDeutschland,
        zoom: this.defaultZoomFaktor
      });

      //await this.googleMapObjekt.setMapType( MapType.Normal );
    }
  }

}
