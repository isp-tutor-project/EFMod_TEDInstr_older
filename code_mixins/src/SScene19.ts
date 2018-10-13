

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene19 {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() {

            let PTVarray = this.getModuleValue("TEDExptPOSTSequence"); 

            this.setModuleValue("TEDExptPOSTTV", PTVarray.shift());
        }

        public $onCreateScene() {                 
            this.STable1.listenToCells("change", 1,1,2,4);

        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
            this.setSceneValue("complete", false);    
        }

        public $preExitScene() {
            this.delFeature("FTR_POST1");
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

            let result = this.STable1.cellsHaveValues(1,1,2,4);

            this.setSceneValue("complete", result); 
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}