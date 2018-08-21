

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
            this.sceneState.sceneComplete = false;      
            this.$updateNav();
        }

        public $onEnterScene() {

        }
        
        public $preEnterScene() {
        }

        public $preExitScene() {
            this.setTutorState("areaOfScience", this.sceneState.areaOfScience);
            this.setTutorState("areaTopic", this.sceneState.areaTopic);
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

            switch(nodeId) {
                default:
                this.sceneState.areaChanged = false;
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
                result = this.sceneState.areaChanged;
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

            if(this.sceneState.areaOfScience && this.sceneState.areaTopic) {
                this.sceneState.sceneComplete = true;
            }

            this.$updateNav();

            return this.sceneState.sceneComplete;
        }


        public $onSelect(target:string) {            

            switch(target) {

                case "SListBox1":

                    if(this.sceneState.areaOfScience != this.SListBox1.selected.value.areaOfScience) {

                        this.sceneState.areaOfScience = this.SListBox1.selected.value.areaOfScience;
                        this.sceneState.areaChanged   = true;
                        this.sceneState.areaTopic     = null;

                        this.SListBox2.initFromDataSource(this.SListBox1.selected.data.value);                    

                        this.nextTrack();
                    }
                    break;

                case "SListBox2":
                    this.sceneState.areaTopic = this.SListBox2.selected.data.value;

                    this.nextTrack();
                    break;
            }
            this.$queryFinished();
        }


        public $onClick(target:string) {            

            switch(target) {

                case "ComponentA":
                    break;
            }
        }
    }
}