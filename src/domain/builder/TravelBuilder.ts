import { Travel, GpsPoint, TravelPosition } from './../../model/Travel';
import ITravelBuilder from "../interface/ITravelBuilder";

export default class TravelBuilder implements ITravelBuilder {

    private _travel: Travel;
    constructor() {
        this._travel = new Travel();
    }

    addPoints(pos1: { lat: number; lon: number; }, pos2: { lat: number; lon: number; }) {
        const point1 = new GpsPoint(pos1.lat, pos1.lon);
        const point2 = new GpsPoint(pos1.lat, pos1.lon);

        const step = new TravelPosition(point1, point2);

        this._travel.addStep(step);
        return this  ;
    };

    setTimeBeetweenPoint(interval: number) {
        //TODO implement
        return this;
    }

    getResult()  {
        //TODO Implement

        return this._travel
    };
}