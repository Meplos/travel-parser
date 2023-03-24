import { Travel } from "../../model/Travel"

export default interface ITravelBuilder {
    setTimeBeetweenPoint(interval: number): ITravelBuilder
    addPoints: (pos1: { lat: number, long: number }, pos2: { lat: number, long: number }) => ITravelBuilder
    result: () => Travel

} 