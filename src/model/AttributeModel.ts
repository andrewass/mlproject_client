import { getHeapStatistics } from "v8";

export default class AttributeModel {

    attributeName: string

    attributeStats: any

    constructor(attributeName: string, attributeStats: any) {
        this.attributeName = attributeName
        this.attributeStats = attributeStats
    }

    toString() {
        return this.attributeName + "\n\n" +
            "Total Count : " + this.attributeStats.totalCount + "\n" +
            "Distinct Count : " + this.attributeStats.distinctCount + "\n" +
            "Missing Count : " + this.attributeStats.missingCount + "\n" +
            "Unique Count : " + this.attributeStats.uniqueCount + "\n\n"
            + this.getStats()
    }

    getStats() {
        if (this.attributeStats.nominalCounts) {
            let nominalCountArray = this.attributeStats.nominalCounts
            var res  = ""
            for (var i in nominalCountArray) {
                res = res.concat("Value "+(Number(i)+1)+" count : "+nominalCountArray[i].toString()+"\n")
            }
            return res
        }
        else if (this.attributeStats.numericStats) {
            let numstat = this.attributeStats.numericStats
            return "Max Value : " + numstat.max + "\n" +
                "Min Value : " + numstat.min + "\n" +
                "Mean Value : " + numstat.mean.toFixed(2) + "\n" +
                "Standard Deviation : " + numstat.stdDev.toFixed(2)+"\n"
        }
    }
}