

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SNavigator {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        // At SciTech, the majority of students in the Choice condition (55%) selected the Soda/Mint experiment.
        //  (See the table below for more detail of their selections.)

        // So, I'm thinking we should include the Soda/Mint experiment (for IV = CO2) 
        // in the No-Choice and Baseline conditions if possible. And randomly assign about 75% 
        // of students in the NoChoice & Baseline conditions to the Soda/Mint experiment and 25% to 
        // the current Greenhouse experiment.
        
        // Kevin: Can you make No Choice & Baseline conditions for the Soda/Mint experiment (CO2 as IV)?

        public $preCreateScene() {
            
            // By default disable all Navigation - Let scenes decide
            // 
            this.setNavMode(CONST.NAVNONE, CONST.NAVSCENE);

            this.addFeature("FTR_TEDEXP1");
            
            if(this.testFeatures("FTR_NCPLANTS")) {
                this.setModuleValue("TEDExptArea",     {"ontologyKey":"S_A4", "index":1});
                this.setModuleValue("TEDExptTopic",    {"ontologyKey":"S_A4_T1", "index":2});
                this.setModuleValue("TEDExptVariable", {"ontologyKey":"S_A4_T1_V1", "index":3});
                this.setModuleValue("TEDExptRQ",       {"ontologyKey":"S_A4_T1_RQ1", "index":3});
            }

            else if(this.testFeatures("FTR_NCSODA")) {
                this.setModuleValue("TEDExptArea",     {"ontologyKey":"S_A1", "index":1});
                this.setModuleValue("TEDExptTopic",    {"ontologyKey":"S_A1_T2", "index":2});
                this.setModuleValue("TEDExptVariable", {"ontologyKey":"S_A1_T2_V4", "index":3});
                this.setModuleValue("TEDExptRQ",       {"ontologyKey":"S_A1_T2_RQ4", "index":3});
            }

            if(this.testFeatures("FTR_CHOICE")) {
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A1");
            }
            else if(this.testFeatures("FTR_NOCHOICE")) {
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A2");
            }
            else if(this.testFeatures("FTR_BASELINE")) {
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A3");
            }


            // let AChosen = this.setModuleValue("selectedArea.index",3);
            // let TChosen = this.setModuleValue("selectedTopic.index",2);

            // for(let index = 1 ; index <= 4 ; index++) {
            //     let VChosen = this.setModuleValue("selectedVariable.index",index);         

            //     this.$generateExpt("TEDExpt", 1, 2,3,4);
            // }

            //@@ DEVELOPMENT ONLY
            // 
            // this.addFeature("FTR_DAYONE_40");
            // this.setModuleValue("TEDExptArea",     {"ontologyKey":"S_A1", "index":1});
            // this.setModuleValue("TEDExptTopic",    {"ontologyKey":"S_A1_T2", "index":2});
            // this.setModuleValue("TEDExptVariable", {"ontologyKey":"S_A1_T2_V3", "index":3});
            // this.setModuleValue("TEDExptVarNC1",   {"ontologyKey":"S_A1_T2_V1", "index":1});
            // this.setModuleValue("TEDExptVarNC2",   {"ontologyKey":"S_A1_T2_V2", "index":2});
            // this.setModuleValue("TEDExptVarNC3",   {"ontologyKey":"S_A1_T2_V4", "index":4});
            // this.setModuleValue("TEDExptRQ",       {"ontologyKey":"S_A1_T2_RQ3", "index":3});

            // this.setModuleValue("TEDExpt1V1", {"ontologyKey":"S_A1_T2_V1_A", "index":1});
            // this.setModuleValue("TEDExpt2V1", {"ontologyKey":"S_A1_T2_V1_B", "index":1});

            // this.setModuleValue("TEDExpt1V2", {"ontologyKey":"S_A1_T2_V2_A", "index":2});
            // this.setModuleValue("TEDExpt2V2", {"ontologyKey":"S_A1_T2_V2_B", "index":2});

            // this.setModuleValue("TEDExpt1V3", {"ontologyKey":"S_A1_T2_V3_A", "index":3});
            // this.setModuleValue("TEDExpt2V3", {"ontologyKey":"S_A1_T2_V3_B", "index":3});

            // this.setModuleValue("TEDExpt1V4", {"ontologyKey":"S_A1_T2_V4_A", "index":4});
            // this.setModuleValue("TEDExpt2V4", {"ontologyKey":"S_A1_T2_V4_B", "index":4});

            // this.delFeature(CONST.FTRS_ALL, CONST.VAR_FTR);
            // this.addFeaturebyQuery(`S_A${this.getModuleValue("TEDExptArea.index")}_T${this.getModuleValue("TEDExptTopic.index")}|features`, EFMod_TEDInstr.CONST.VAR_FTR);            

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