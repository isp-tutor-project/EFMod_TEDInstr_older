

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SNavigator {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() {
            this.connectNavButton(CONST.NEXTSCENE, "Snext");
            this.showHideNavButton(CONST.PREVSCENE, CONST.HIDE);
            this.$("hide","Smask1");
            this.setNavigationTarget(CONST.NAVSCENE);    

            // let AChosen = this.setModuleValue("selectedArea.index",3);
            // let TChosen = this.setModuleValue("selectedTopic.index",2);

            // for(let index = 1 ; index <= 4 ; index++) {
            //     let VChosen = this.setModuleValue("selectedVariable.index",index);         

            //     this.$generateExpt("TEDExpt", 1, 2,3,4);
            // }

            //@@ DEVELOPMENT ONLY
            // 
            this.setModuleValue("TEDExptArea",     {"ontologyKey":"STBL_A1", "index":1});
            this.setModuleValue("TEDExptTopic",    {"ontologyKey":"STBL_A1_T2", "index":2});
            this.setModuleValue("TEDExptVariable", {"ontologyKey":"STBL_A1_T2_V3", "index":3});
            this.setModuleValue("TEDExptVarNC1",   {"ontologyKey":"STBL_A1_T2_V1", "index":1});
            this.setModuleValue("TEDExptVarNC2",   {"ontologyKey":"STBL_A1_T2_V2", "index":2});
            this.setModuleValue("TEDExptVarNC3",   {"ontologyKey":"STBL_A1_T2_V4", "index":4});
            this.setModuleValue("TEDExptRQ",       {"ontologyKey":"S_A1_T2_RQ3", "index":3});

            this.setModuleValue("TEDExptV1A", {"ontologyKey":"S_A1_T2_V1_A", "index":1});
            this.setModuleValue("TEDExptV1B", {"ontologyKey":"S_A1_T2_V1_B", "index":1});

            this.setModuleValue("TEDExptV2A", {"ontologyKey":"S_A1_T2_V2_A", "index":2});
            this.setModuleValue("TEDExptV2B", {"ontologyKey":"S_A1_T2_V2_B", "index":2});

            this.setModuleValue("TEDExptV3A", {"ontologyKey":"S_A1_T2_V3_A", "index":3});
            this.setModuleValue("TEDExptV3B", {"ontologyKey":"S_A1_T2_V3_B", "index":3});

            this.setModuleValue("TEDExptV4A", {"ontologyKey":"S_A1_T2_V4_A", "index":4});
            this.setModuleValue("TEDExptV4B", {"ontologyKey":"S_A1_T2_V4_B", "index":4});

            this.delFeature(CONST.FTRS_ALL, CONST.VAR_FTR);
            this.addFeaturebyQuery(`S_A${this.getModuleValue("TEDExptArea.index")}_T${this.getModuleValue("TEDExptTopic.index")}|features`, EFMod_TEDInstr.CONST.VAR_FTR);            

            // define experimental group assignment
            // 
            this.setTutorValue("experimentalGroup.ontologyKey", "EG_A1");
            this.addFeature("FTR_CHOICE");

            this.setModuleValue("TED_EXPT", 1);                                        
        }

        public $onEnterScene() {

        }
        
        public $preEnterScene() {
        }

        public $preExitScene() {
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

            switch(cueID) {
                
                case "$start":
                    console.log("executing CuePoint START");
                    break;
                case "$end":
                    console.log("executing CuePoint END");
                    break;
            }
        }

        public $timedEvents(id:string) {
        }
    }
}