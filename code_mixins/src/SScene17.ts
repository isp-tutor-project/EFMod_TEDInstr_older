

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene17 {

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
            this.setSceneValue("complete", false);    
        }

        public $preExitScene() {
        }

        public $preShowScene() {            
            this.STblExp1.reifyTable();             
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

                case "track2":
                    switch(cueID) {                        
                        case "$start":
                            this.Sanswer.disable();
                            this.setSceneValue("complete", false); 
                            break;
                        case "$end":
                            this.setSceneValue("complete", true); 
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

            let NCarray  = this.getModuleValue("TEDFeatureFocus");                
            let complete = 0;

            this.setSceneValue("complete", true); 
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}