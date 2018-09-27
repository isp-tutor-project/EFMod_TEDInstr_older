

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene1a {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        //***********************************************
        // Tutor graph methods
        //
        
        public $onCreateScene() {     
            this.setSceneValue("sceneComplete", false);      
            this.$updateNav();
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

        public $handleEvent() {

        }

        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {

            switch(nodeId) {

                case "root":                
                    this.SListBox2.resetInitState();
                    this.SListBox3.resetInitState();
                    break;

                case "SELECTTOPIC":
                    this.SListBox2.initFromDataSource(this.SListBox1.selected.value);

                    this.setModuleValue("selectedVariable", null);
                    this.SListBox3.resetInitState();
                    break;

                case "SELECTTV":                
                    this.SListBox3.initFromDataSource(this.SListBox2.selected.value);
                break;
            }
        }

        public $nodePreExit(nodeId:string) {

            switch(nodeId) {
            }

        }

        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            switch(constrainId) {
                case "AREA_CHANGED":
                    result = !this.testModuleValue("selectedArea", this.SListBox1.selected);
                    if(result) {
                        this.setModuleValue("selectedArea", this.SListBox1.selected);
                    }
                    break;

                case "TOPIC_CHANGED":
                    result = !this.testModuleValue("selectedTopic", this.SListBox2.selected);
                    if(result) {
                        this.setModuleValue("selectedTopic", this.SListBox2.selected);
                    }
                    break;

                case "VARIABLE_CHANGED":
                    result = !this.testModuleValue("selectedVariable", this.SListBox3.selected);
                    if(result) {
                        this.setModuleValue("selectedVariable", this.SListBox3.selected);         
                    }
                    break;
                    
                case "!COMPLETE":
                    result = !this.queryModuleProp(["selectedArea","selectedTopic", "selectedVariable"]);      
                    
                    if(!result) {
                        this.addFeaturebyQuery(`S_A${this.getModuleValue("selectedArea.index")}_T${this.getModuleValue("selectedTopic.index")}|features`, CONST.VAR_FTR);
                    }
                    
                    break;
            }                    

            this.setSceneValue("sceneComplete", this.queryModuleProp(["selectedArea","selectedTopic", "selectedVariable"]));                  
            this.$updateNav();

            return result;
        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1":
                    switch(cueID) {
                        
                        case "$start":
                            console.log("executing CuePoint START");
                            break;
                        case "$end":
                            console.log("executing CuePoint END");
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


            return  this.getSceneValue("sceneComplete"); 
        }


        public $onSelect(target:string) {            

            switch(target) {

                case "SListBox1":
                case "SListBox2":
                case "SListBox3":
                    this.nextTrack("$onSelect:"+this.graphState);
                    break;
            }
        }


        public $onClick(target:string) {            

            switch(target) {

                case "ComponentA":
                    break;
            }
        }
    }
}