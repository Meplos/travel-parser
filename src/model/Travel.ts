export class Travel {
    private _travel: TravelPosition[];

    constructor() {
        this._travel = new Array();
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



}


export class GpsPoint {
    private _lat: number;
    private _long: number;

    constructor(lat: number, long: number) {
        this._lat = lat;
        this._long = long;
    }
}