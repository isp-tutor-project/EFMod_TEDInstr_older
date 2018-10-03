

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene16 {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() {
        }

        public $onCreateScene() {                    
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
        }

        public $preExitScene() {
        }

        public $preShowScene() {                         

            this.STblExp1.setColWidth(3,"0%");

            let NCarray:Array<number>=[];
            let NCvals:Array<string>=["1","2"];

            NCarray.push(this.getModuleValue("TEDExptVarNC1.index"));
            NCarray.push(this.getModuleValue("TEDExptVarNC2.index"));
            NCarray.push(this.getModuleValue("TEDExptVarNC3.index"));

            this.setModuleValue("TableNCSequence", NCarray);   
            this.setModuleValue("TEDcorrection", 0);           

            for(let i1 = 0 ; i1 < NCarray.length ; i1++) {

                this.STblExp1.listenToCells("change", 1, NCarray[i1], 2, NCarray[i1]);

                for(let i2 = 1 ; i2 < 3 ; i2++) {

                    this.STblExp1.initElementFromData(NCarray[i1], i2,
                        {
                            "value": "$LIST",
                            "options": [
                                `{{$EFO_STBL_A?_T?_V${NCarray[i1]}_A|name}}`,
                                `{{$EFO_STBL_A?_T?_V${NCarray[i1]}_B|name}}`
                            ],
                            "initialValue":`${NCvals[i2-1]}`,
                            "placeHolder": "{{$EFO_LV_PH1|name}}"
                        }
                    );
                }
            }
        }        

        public $preHideScene() {            
        }

        public $demoInitScene() {
        }

        public $logScene() {
        }

        public $rewindScene() {
        }

        public $resolveTemplate(templID:string) {         
        }

        public $handleEvent(compID:string) {

            console.log(compID);
        }

        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {
        }


        public $nodePreExit(nodeId:string) {

        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1":
                    switch(cueID) {                        
                        case "$start":
                            break;
                        case "$end":
                            break;
                    }
                    break;
            }
        }

        public $timedEvents(id:string) {
        }

        
        //***********************************************
        // Scene State methods
        //

        public $queryFinished() : boolean {             

            let stateComplete:boolean = true;

            switch(this.graphState) {

                default:
                    break;
            }

            return  stateComplete; 
        }


        public $onSelect(target:string) {            

            let CORR:number = this.getModuleValue("TEDcorrection");                
            let row         = this.STblExp1.selectedCell.row;

            switch(target) {
                case "STblExp1": 
                    let val1 = this.STblExp1.getCellValue(row, 1);
                    let val2 = this.STblExp1.getCellValue(row, 2);

                    if(val1 === val2) {

                        this.STblExp1.highlightCells(CONST.GREEN, 1, row, 2, row); 
                        CORR++;
                    }
                    else {
                        this.STblExp1.highlightCells(CONST.RED, 1, row, 2, row); 
                        CORR--;
                    }
                    break;
            }

            this.setModuleValue("TEDcorrection", CORR);           
            this.$updateNav();
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}