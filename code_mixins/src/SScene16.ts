

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene16 {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        public static $QuestionNdx:number = 0;
        public        $QuestionId:string;

    
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
            // Next button only - navigate scene tracks
            // 
            this.setNavMode(CONST.NAVNEXT, CONST.NAVSCENE);

            SScene16.$QuestionNdx++;
            this.$QuestionId = "FFocus:"+ SScene16.$QuestionNdx + "_CorrExp:";
            this.setModuleValue(this.$QuestionId, {}); 

            this.setSceneValue("complete", false);    
        }

        public $preExitScene() {
        }

        public $preShowScene() {                         

            this.STblExp1.setColWidth(3,"0%");

            let confounds:Array<number>= this.getModuleValue("TEDExptConfounds");
            let NCvals:Array<string>=["1","2"];

            this.setModuleValue("TEDcorrection", confounds.length);           

            for(let i1 = 0 ; i1 < confounds.length ; i1++) {

                this.STblExp1.listenToCells("change", 1, confounds[i1], 2, confounds[i1]);

                for(let i2 = 1 ; i2 < 3 ; i2++) {

                    this.STblExp1.initElementFromData(confounds[i1], i2,
                        {
                            "value": "$LIST",
                            "options": [
                                `{{$EFO_S_A?_T?_V${confounds[i1]}_A|name}}`,
                                `{{$EFO_S_A?_T?_V${confounds[i1]}_B|name}}`
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

            let stateComplete:boolean = false;

            switch(this.graphState) {

                default:
                    stateComplete = this.getSceneValue("complete"); 
                    break;
            }

            return  stateComplete; 
        }


        public $onSelect(target:string) {            

            let CORR:number = this.getModuleValue("TEDcorrection");                
            let row         = this.STblExp1.selectedCell.row;

            switch(target) {
                case "STblExp1": 

                    let key = `Row-${this.STblExp1.selectedCell.row} Col-${this.STblExp1.selectedCell.col}`;

                    let tblObj:any = this.getModuleValue(this.$QuestionId);
                    tblObj[key] = this.STblExp1.selectedCell.selectedValue;
                    this.setModuleValue("CHG:" + this.$QuestionId  + ":" + key, this.STblExp1.selectedCell.selectedValue);   

                    let val1 = this.STblExp1.getCellValue(row, 1);
                    let val2 = this.STblExp1.getCellValue(row, 2);

                    if(val1 === val2) {

                        this.STblExp1.highlightCells(CONST.GREEN, 1, row, 2, row); 
                        CORR--;
                    }
                    else {
                        this.STblExp1.highlightCells(CONST.RED, 1, row, 2, row); 
                        CORR++;
                    }
                    break;
            }

            this.setModuleValue("TEDcorrection", CORR);           

            if(CORR == 0) {
                this.setSceneValue("complete", true);    
            }
            else {
                this.setSceneValue("complete", false);    
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}