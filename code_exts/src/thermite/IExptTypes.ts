

// An Array<exptVar> Represents the hierarchical structure of the experiment component.
// 
// e.g. the expt Array -- [{"id":"Svar1", "parent":"",            "depth":0, "variants":["a","b"]},
//                         {"id":"Svar2", "parent":"Svar1",       "depth":1, "variants":["a","b"]},
//                         {"id":"Svar3", "parent":"Svar1.Svar2", "depth":2, "variants":["a","b"]},
//                         {"id":"Svar4", "parent":"",            "depth":0, "variants":["a","b"]}] 
// 
// Represents an experiment structure where:
//      Svar1x is a top level child of the expt component
//      Svar2x is a child of Svar1
//      Svar3x is a child of Svar2                     
//      Svar4x is a top level child of the expt component
//  
// 
export interface exptVar {
    id:string;
    parent:string;
    parentObj?:any;
    depth:number;
    variants:Array<string>;
}

