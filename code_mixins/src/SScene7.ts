

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

            let x = this.getModuleValue("TEDExpt1Area.index");
            let y = this.getModuleValue("TEDExpt1Topic.index");
            let z = this.getModuleValue("TEDExpt1Variable.index");

            this.$("Sicon.|Svar.*").hide();

            this.$(`Sicon1|Svar${z}a`).show();
            this.$(`Sicon2|Svar${z}b`).show();

            this.SsubTitle1.setContentFromString(this.resolveSelector(`$EFO_S_A${x}_T${y}|enumValue${z}a`));
            this.SsubTitle2.setContentFromString(this.resolveSelector(`$EFO_S_A${x}_T${y}|enumValue${z}b`));
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
            }

            this.$updateNav();
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}