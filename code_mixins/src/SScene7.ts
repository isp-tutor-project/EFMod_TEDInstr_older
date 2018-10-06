

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene7 {

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

            // On the second pass we reinitialize the experimental set up.
            // With one confound only
            // 
            if(this.testFeatures("FTR_TEDEXP2")) {

                this.$generateExpt("TEDExpt", 2, 1);
            }

            this.setSceneValue("complete", false);    

            let AChosen = this.getModuleValue("TEDExptArea.index");
            let TChosen = this.getModuleValue("TEDExptTopic.index");
            let VChosen = this.getModuleValue("TEDExptVariable.index");

            this.$("Sicon.|Svar.*").hide();

            this.$(`Sicon1|Svar${VChosen}a`).show();
            this.$(`Sicon2|Svar${VChosen}b`).show();

            this.SsubTitle1.setContentFromString(this.resolveSelector(`$EFO_S_A${AChosen}_T${TChosen}|enumValue${VChosen}a`));
            this.SsubTitle2.setContentFromString(this.resolveSelector(`$EFO_S_A${AChosen}_T${TChosen}|enumValue${VChosen}b`));
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
                case "FTR_TEDEXP1":
                    result = this.testFeatures(constrainId);    
                    break;
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {
                case "track1":
                case "track2":
                    switch(cueID) {
                                                    
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

            switch(target) {
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}