

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene12A {

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
            this.setSceneValue("Complete", false);    
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
                    result = this.getModuleValue("Expt1_Q4").value;                                        
                    break;

                    case "INCOMPLETE":
                    result = !this.getSceneValue("Complete");    
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

                case "track1":
                    switch(cueID) {                        
                        case "$start":
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2":
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

            switch(target) {

                case "Sanswer":
                    this.setModuleValue("Expt1_Q4", this.Sanswer.selected);
                    this.setSceneValue("Complete", true);    
                    break;
            }

            this.$updateNav();
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}