

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene12A {

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

            SScene12A.$QuestionNdx++;
            this.$QuestionId = "Imagine" + SScene12A.$QuestionNdx;

            this.setSceneValue("complete", false);    
        }

        public $preExitScene() {
        }

        public $preShowScene() {                         
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

            switch(constrainId) {
                case "CORRECT":
                    result = this.getModuleValue("Expt1_Q4").value;     // used by tutorgraph
                    result = this.getModuleValue(this.$QuestionId).value;     
                    
                    if(result) {
                        this.Sanswer.setColor(CONST.LBGREEN);
                    }
                    else {
                        this.Sanswer.setColor(CONST.LBRED);
                    }                    
                    break;

                    case "INCOMPLETE":
                    result = !this.getSceneValue("complete");    
                    break;

                default:
                    break;
            }
            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track2":
                case "track3":
                    switch(cueID) {                        
                        case "$start":
                            this.Sanswer.disable();
                            this.setSceneValue("complete", false);  
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

            switch(target) {

                case "Sanswer":
                    this.setModuleValue("Expt1_Q4", this.Sanswer.selected); // Used by tutorgraph
                    this.setModuleValue(this.$QuestionId, this.Sanswer.selected);
                    this.setSceneValue("complete", true);    
                    break;
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}