
/**
 * Ein Objekt dieser Klasse repräsentiert ein Bundesland und seine Hauptstadt.
 * 
 * Die Koordinatenwerte (Dezimalkooridnaten für geografische Breite und Länge) werden als String gespeichert, 
 * damit es zu keinen Ungenauigkeiten wegen Rundungsfehlern kommen kann.
 */
export class Landeshauptstadt {

    constructor(public stadt: string,
                public bundesland: string,
                public geoBreite: string,
                public geoLaenge: string) {}


    /**
     * Methode gibt Text für "Info Window" zurück, der angezeigt wird, wenn man auf die "Stecknadel"
     * mit der jeweiligen Hauptstadt klickt.
     * 
     * @returns Text für Tag `agm-info-window`.
     */
    public getInfoText(): string {

        return `Landeshauptstadt von ${this.bundesland}`;
    }                
}
