

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene14 {

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

            this.$QuestionId = "Imagine" + SScene12A.$QuestionNdx + "_Reason";

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

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

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
                    this.setModuleValue(this.$QuestionId, this.Sanswer.selected);
                    this.setSceneValue("complete", true);    
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}