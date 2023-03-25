export class Travel {
    private _travel: TravelPosition[];

    constructor() {
        this._travel = new Array();
    }

    addStep(step: TravelPosition) {
        this._travel.push(step);
    }

    get() {
        return this._travel;
    }

    getLatLngArray(): number[][] {
        return this._travel.map(
            it => {
                return it.getPositionArray();
            }
        ).reduce((acc, it) => {
            acc.push(it[0]);
            acc.push(it[1]);
            return acc;
        }, [])
    }
}

export class TravelPosition {
    private _point1: GpsPoint;
    private _point2: GpsPoint;

    private _spd?: number;
    private _color?: string; //hexa

    constructor(point1: GpsPoint, point2: GpsPoint, spd?: number, color?: string) {
        this._point1 = point1;
        this._point2 = point2;

        this._spd = spd;
        this._color = color;
    }

    getPositionArray() {
        return [
            [this._point1.lat, this._point1.long],
            [this._point2.lat, this._point2.long]
        ]
    }





}


export class GpsPoint {
    readonly lat: number;
    readonly long: number;

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
    }


}