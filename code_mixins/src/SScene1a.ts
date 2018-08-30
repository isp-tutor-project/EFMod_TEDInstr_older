

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
                default:
                break;
            }
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
                case "AREA_CHANGED":
                    result = !this.testModuleValue("selectedArea", this.SListBox1.selected);
                    break;

                case "TOPIC_CHANGED":
                    result = !this.testModuleValue("selectedTopic", this.SListBox2.selected);
                    break;

                case "VARIABLE_CHANGED":
                    result = !this.testModuleValue("selectedVariable", this.SListBox3.selected);
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

            this.setSceneValue("sceneComplete", false);      

            if (this.queryModuleProp(["selectedArea","selectedTopic", "selectedVariable"])) {

                this.setSceneValue("sceneComplete", true);                  
            }   

            return  this.getSceneValue("sceneComplete"); 
        }


        public $onSelect(target:string) {            

            switch(target) {

                case "SListBox1":

                    if (!this.testModuleValue("selectedArea", this.SListBox1.selected)) {

                        this.setModuleValue("selectedArea", this.SListBox1.selected);

                        this.setModuleValue("selectedTopic", null);
                        this.SListBox2.initFromDataSource(this.SListBox1.selected.value);
                        this.SListBox3.resetInitState();

                        this.nextTrack();
                    }
                    break;

                case "SListBox2":

                    if (!this.testModuleValue("selectedTopic", this.SListBox2.selected)) {

                        this.setModuleValue("selectedTopic", this.SListBox2.selected);

                        this.setModuleValue("selectedVariable", null);
                        this.SListBox3.initFromDataSource(this.SListBox2.selected.value);

                        this.nextTrack();
                    }
                    break;

                case "SListBox3":
                    if (!this.testModuleValue("selectedVariable", this.SListBox3.selected)) {

                        this.setModuleValue("selectedVariable", this.SListBox3.selected);         

                        this.nextTrack();
                    }
                    break;

            }

            this.$updateNav();
        }


        public $onClick(target:string) {            

            switch(target) {

                case "ComponentA":
                    break;
            }
        }
    }
}