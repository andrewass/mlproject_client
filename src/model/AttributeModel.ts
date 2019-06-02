export default class AttributeModel{

    attributeName : string
    
    attributeStats : any
    
    constructor(attributeName : string, attributeStats : any){
        this.attributeName = attributeName
        this.attributeStats = attributeStats
    }
}