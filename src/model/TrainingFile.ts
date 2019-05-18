import Attribute from "./Attribute";

export default class TrainingFile{
    
    filename: string;
    attributeList: Attribute[];
    
    constructor(filename : string){
        this.filename  = ""
        this.attributeList = []
    }

    addAttribute(attribute : Attribute){
        this.attributeList.push(attribute)
    }

    refreshAttributes(attributes: any){
        attributes.forEach(it => {
            alert(it.attributeName)
        });
    }
}