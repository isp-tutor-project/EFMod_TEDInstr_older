

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
            this.SListBox2.enableList(false); 
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

            if(this.sceneState.scienceArea && this.sceneState.scienceTopic) {
                this.sceneComplete = true;
            }

            this.$updateNav();

            return this.sceneComplete;
        }


        public $onSelect(target:string) {            

            switch(target) {

                case "SListBox1":
                    this.sceneState.scienceArea = this.SListBox1.optionName;
                    this.SListBox2.initFromDataSource(this.SListBox1.optionValue);                    
                    this.nextTrack();
                    break;

                case "SListBox2":
                    this.sceneState.scienceTopic = this.SListBox2.name;
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