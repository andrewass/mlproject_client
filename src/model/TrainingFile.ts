import AttributeModel from "./AttributeModel";

export default class TrainingFile{
    
    filename: string;
    attributeList: AttributeModel[];
    
    constructor(filename : string){
        this.filename  = ""
        this.attributeList = []
    }

    addAttribute(attribute : AttributeModel){
        this.attributeList.push(attribute)
    }
}