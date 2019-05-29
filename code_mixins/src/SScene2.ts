

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene2 {

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
            // Next button only - navigate scene tracks
            // 
            this.setNavMode(CONST.NAVNEXT, CONST.NAVSCENE);

            this.setSceneValue("complete", false);    
        }

        public $preExitScene() {
        }

        public $preShowScene() {                         
            this.STable1.hideCells(3, 1, 3, 4);
            this.STable1.setColWidth(3,"33%");
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
        
            return this["$"+templID];
        }

        public $handleEvent(compID:string) {

            console.log(compID);
        }

        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {

            this.setSceneValue("correct", false);

            switch(nodeId) {
            }

            switch(this.graphState) {

            }
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

                case "track2":
                    switch(cueID) {
                        case "a":
                        this.STable1.setCellValue( this.getModuleValue("differentRow"), 3, "DIFFERENT");
                        break;
                    }
                    break;

                case "track3":
                    switch(cueID) {
                        case "$end":
                            this.setSceneValue("complete",true); 
                            break;

                        case "a":
                            this.STable1.setCellValue(this.getModuleValue("sameRow1"), 3, "SAME");
                            break;
    
                        case "b":
                            this.STable1.setCellValue(this.getModuleValue("sameRow2"), 3, "SAME");
                            break;

                        case "c":
                            this.STable1.setCellValue(this.getModuleValue("sameRow3"), 3, "SAME");
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

            switch(target) {
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}