
namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SSceneStart {

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
            this.setSceneValue("complete", false);      
        }

        public $onEnterScene() {

        }
        
        public $preEnterScene() {
            // Next button only - navigate scene tracks
            // 
            this.setNavMode(CONST.NAVNONE, CONST.NAVSCENE);

            this.addFeature("FTR_TEDEXP1");

            // DEV ONLY
            // TODO : Add a uniform way to initialize tutor variables.
            // 

            // Development only!!!!!! - define experimental group assignment
            // 
            // if(this.testFeatures("FTR_BASELINE")) {

            //     this.setTutorValue("experimentalGroup.ontologyKey", "EG_A3");

            //     this.setModuleValue("selectedArea.ontologyKey", "STBL_A4");
            //     this.setModuleValue("selectedArea.index", 4);

            //     this.setModuleValue("selectedTopic.ontologyKey", "STBL_A4_T1");
            //     this.setModuleValue("selectedTopic.index", 1);

            //     this.setModuleValue("selectedVariable.ontologyKey", "STBL_A4_T1_V1|name");                
            //     this.setModuleValue("selectedVariable.index", 1);
                
            //     this.addFeature("FTR_GRHOUSE");

            // }
            // if(this.testFeatures("FTR_NOCHOICE")) {

            //     this.setTutorValue("experimentalGroup.ontologyKey", "EG_A3");

            //     this.setModuleValue("selectedArea.ontologyKey", "STBL_A4");
            //     this.setModuleValue("selectedArea.index", 4);
                
            //     this.setModuleValue("selectedTopic.ontologyKey", "STBL_A4_T1");
            //     this.setModuleValue("selectedTopic.index", 1);

            //     this.setModuleValue("selectedVariable.ontologyKey", "STBL_A4_T1_V1|name");                
            //     this.setModuleValue("selectedVariable.index", 1);
                
            //     this.addFeature("FTR_GRHOUSE");
            // }

            // define experimental group assignment
            // 
            // if(this.testFeatures("FTR_CHOICE")) {

            //     this.setTutorValue("experimentalGroup.ontologyKey", "EG_A1");
            // }

        }

        public $preShowScene() {                   
        }        

        public $preHideScene() {            
        }

        public $onExitScene() {
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
            }

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

            let result:boolean = false; 

            return  result; 
        }


        public $onAction(target:string) {         
            
            switch(target) {
                
                case "Sstart":
                this.nextTrack("$onAction:"+this.graphState);
                break;
            }
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