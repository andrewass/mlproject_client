import Attribute from "./Attribute";

export default class TrainingFile{
    
    filename: string;
    attributeList: Attribute[];
    
    constructor(filename : string){
        this.filename  = "filenameRandom"
        this.attributeList = []
    }

    addAttribute(attribute : Attribute){
        this.attributeList.push(attribute)
    }
}