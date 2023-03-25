import { Travel } from "../../model/Travel"

export default interface ITravelBuilder {
    setTimeBeetweenPoint(interval: number): ITravelBuilder
    addPoints: (pos1: { lat: number, lon: number }, pos2: { lat: number, lon: number }) => ITravelBuilder
    getResult: () => Travel

} 