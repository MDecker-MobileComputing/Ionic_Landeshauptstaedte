
/**
 * Ein Objekt dieser Klasse repräsentiert ein Bundesland und die zugehörige Hauptstadt;
 * auch Stadtstaaten werden unterstützt.
 *
 * Die Koordinatenwerte (Dezimalkooridnaten für geografische Breite und Länge) werden
 * als String gespeichert, damit es zu keinen Ungenauigkeiten wegen Rundungsfehlern kommen
 * kann.
 */
 export class BundeslandUndHauptstadt {


    /**
     * Wenn `istStadtstatt=true`, dann wird Wert von `bundesland` in `stadt` kopiert.
     */
    constructor(public bundesland: string,
                public stadt: string,
                public istStadtstaat: boolean,
                public geoBreite: string,
                public geoLaenge: string) {

        if (istStadtstaat) {

            stadt = bundesland;
        }
    }


    /**
     * Methode gibt Text für "Info Window" zurück, der angezeigt wird, wenn man auf die "Stecknadel"
     * mit der jeweiligen Hauptstadt klickt.
     *
     * @returns Text für Tag `agm-info-window`.
     */
    public getTextFuerInfoWindow(): string {

        if (this.istStadtstaat) {

            return `Stadtstaat ${this.bundesland}`;

        } else {

            return `Landeshauptstadt von ${this.bundesland}`;
        }
    }


    /**
     * Liefert Text für kurze Beschreibung unter Listeneintrag zurück.
     *
     * @returns Entweder "Stadtstaat" oder "Landeshauptstadt: <nameDerStadt>"
     */
    public getKurzbeschreibungFuerListe(): string {

        if (this.istStadtstaat) {

            return `Stadtstaat`;

        } else {

            return `Landeshauptstadt: ${this.stadt}`;
        }
    }

}
