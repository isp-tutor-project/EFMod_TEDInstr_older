

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene8 {

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
            this.setSceneValue("complete", false);    
        }

        public $preExitScene() {
        }

        public $preShowScene() {        
            
            let CVars:Array<number> = this.getModuleValue("TEDExptDifferent");   

            let initState:Array<string> = ["a","a","a","a"];

            // note: TEDExptDifferent is 1 based
            CVars.forEach(index => {
               initState[index-1]  = "b";
            });

            this.Sexpt1.deSerializeObj({"initState":["a","a","a","a"]});
            this.Sexpt2.deSerializeObj({"initState":initState });
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

                case "track1a":
                    switch(cueID) {                        
                        case "$start":
                            this.Sexpt1.showCallOut("1");
                            this.Sexpt1.showHighlight("1");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track1b":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sexpt2.showCallOut("1");
                            this.Sexpt2.showHighlight("1");
                            break;
                        case "$end":
                            break;
                    }
                    break;


                case "track2a":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sexpt.").exec("hideHighlight", "1");

                            this.Sexpt1.showCallOut("2");
                            this.Sexpt1.showHighlight("2");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2b":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sexpt2.showCallOut("2");
                            this.Sexpt2.showHighlight("2");
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    

                case "track3a":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sexpt.").exec("hideHighlight", "2");

                            this.Sexpt1.showCallOut("3");
                            this.Sexpt1.showHighlight("3");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track3b":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sexpt2.showCallOut("3");
                            this.Sexpt2.showHighlight("3");
                            break;
                        case "$end":
                            break;
                    }
                    break;


                case "track4a":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sexpt.").exec("hideHighlight", "3");

                            this.Sexpt1.showCallOut("4");
                            this.Sexpt1.showHighlight("4");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track4b":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sexpt2.showCallOut("4");
                            this.Sexpt2.showHighlight("4");
                            break;
                        case "$end":
                            this.$("Sexpt.").exec("hideHighlight", "2");

                            this.$("Sexpt.").exec("showHighlight", "1");
                            this.$("Sexpt.").exec("showHighlight", "2");
                            this.$("Sexpt.").exec("showHighlight", "3");
                            this.$("Sexpt.").exec("showHighlight", "4");

                            break;
                    }
                    break;

                case "track5":
                    switch(cueID) {
                        
                        case "$start":
                            break;
                        case "$end":
                            this.setSceneValue("complete", true);                            
                            break;

                        case "a":
                            this.$("Sexpt.").exec("showHighlight", "1");
                            this.$("Sexpt.").exec("showHighlight", "2");
                            this.$("Sexpt.").exec("showHighlight", "3");
                            this.$("Sexpt.").exec("showHighlight", "4");
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