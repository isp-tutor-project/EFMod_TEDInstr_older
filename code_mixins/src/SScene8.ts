

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

                case "track1a":
                    switch(cueID) {                        
                        case "$start":
                            this.Sexpt1.showCallOut("Svar1");
                            this.Sexpt1.showHighlight("Svar1");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track1b":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sexpt2.showCallOut("Svar1");
                            this.Sexpt2.showHighlight("Svar1");
                            break;
                        case "$end":
                            break;
                    }
                    break;


                case "track2a":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sexpt.").exec("hideHighlight", "Svar1");

                            this.Sexpt1.showCallOut("Svar2");
                            this.Sexpt1.showHighlight("Svar2");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2b":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sexpt2.showCallOut("Svar2");
                            this.Sexpt2.showHighlight("Svar2");
                            break;
                        case "$end":
                            break;
                    }
                    break;
                    

                case "track3a":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sexpt.").exec("hideHighlight", "Svar2");

                            this.Sexpt1.showCallOut("Svar3");
                            this.Sexpt1.showHighlight("Svar3");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track3b":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sexpt2.showCallOut("Svar3");
                            this.Sexpt2.showHighlight("Svar3");
                            break;
                        case "$end":
                            break;
                    }
                    break;


                case "track4a":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sexpt.").exec("hideHighlight", "Svar3");

                            this.Sexpt1.showCallOut("Svar4");
                            this.Sexpt1.showHighlight("Svar4");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track4b":
                    switch(cueID) {
                        
                        case "$start":
                            this.Sexpt2.showCallOut("Svar4");
                            this.Sexpt2.showHighlight("Svar4");
                            break;
                        case "$end":
                            this.$("Sexpt.").exec("hideHighlight", "Svar2");

                            this.$("Sexpt.").exec("showHighlight", "Svar1");
                            this.$("Sexpt.").exec("showHighlight", "Svar2");
                            this.$("Sexpt.").exec("showHighlight", "Svar3");
                            this.$("Sexpt.").exec("showHighlight", "Svar4");

                            break;
                    }
                    break;

                case "track5":
                    switch(cueID) {
                        
                        case "$start":
                            break;
                        case "$end":
                            break;

                        case "a":
                            this.$("Sexpt.").exec("showHighlight", "Svar1");
                            this.$("Sexpt.").exec("showHighlight", "Svar2");
                            this.$("Sexpt.").exec("showHighlight", "Svar3");
                            this.$("Sexpt.").exec("showHighlight", "Svar4");
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