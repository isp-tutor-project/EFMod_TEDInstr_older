

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene15 {

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
            this.STblExp1.hideCells(3, 1, 3, 4);
            this.STblExp1.setColWidth(3,"33%");

            this.setModuleValue("TEDFeatureFocus", ["","","",""]);                
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

            let NCarray  = this.getModuleValue("TEDFeatureFocus");                
            let NCrow;

            switch(constrainId) {
                case "NC1CORRECT":
                    NCrow    = this.getModuleValue("TEDExptVarNC1.index");
                    break;
                case "NC2CORRECT":
                    NCrow    = this.getModuleValue("TEDExptVarNC2.index");
                    break;
                case "NC3CORRECT":
                    NCrow    = this.getModuleValue("TEDExptVarNC3.index");    
                    break;
            }

            let same      = this.STblExp1.getCellValue(NCrow, 1) === this.STblExp1.getCellValue(NCrow, 2);
            let selection = NCarray[NCrow-1];

            if(!same && selection.toLowerCase() === "could cause") result = true;
            if(same  && selection.toLowerCase() !== "could cause") result = true;

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            let VCrow  = this.getModuleValue("TEDExptVariable.index");

            let cfdRows = this.getModuleValue("TEDExptConfounds");
            let ntvRows = this.getModuleValue("TEDExptNonTarget");

            let NTV1row = ntvRows[0];
            let NTV2row = ntvRows[1];
            let NTV3row = ntvRows[2];

            let CFD1row = cfdRows[0];
            let CFD2row = cfdRows[1];
            let CFD3row = cfdRows[2];

            switch(trackID) {

                case "track0A":
                    switch(cueID) {                        
                        case "$start":
                            break;
                        case "$end":
                            break;

                        case "a":
                            this.STblExp1.highlightCells(CONST.BLUE, 0, VCrow, 0, VCrow);
                            break;
                    }
                    break;

                case "track0B":
                    switch(cueID) {                        
                        case "$start":
                            break;
                        case "$end":
                            break;

                            case "a":
                                this.STblExp1.highlightCells(CONST.BLUE, 1, VCrow, 2, VCrow);
                                break;

                            case "b":
                                this.STblExp1.setCellValue(VCrow, 3, "Could cause");
                                break;
                    }
                    break;

                case "track0C":
                    switch(cueID) {                        
                        case "$start":
                            break;
                        case "$end":
                            this.STblExp1.highlightCells(CONST.NONE, 0, NTV1row, 2, NTV1row);
                            this.STblExp1.highlightCells(CONST.NONE, 0, NTV2row, 2, NTV2row);
                            this.STblExp1.highlightCells(CONST.NONE, 0, NTV3row, 2, NTV3row);
                            break;

                        case "a":
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NTV1row, 2, NTV1row);
                            break;
                        case "b":
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NTV2row, 2, NTV2row);
                            break;
                        case "c":
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NTV3row, 2, NTV3row);
                            break;
                    }
                    break;

                case "track0D":
                    switch(cueID) {                        
                        case "$start":
                            break;
                        case "$end":
                            break;


                        case "a":
                            this.STblExp1.showCells(3, NTV1row, 3, NTV1row);
                            this.STblExp1.showCells(3, NTV2row, 3, NTV2row);
                            this.STblExp1.showCells(3, NTV3row, 3, NTV3row);

                            this.STblExp1.listenToCells("change", 3, NTV1row, 3, NTV1row);
                            this.STblExp1.listenToCells("change", 3, NTV2row, 3, NTV2row);
                            this.STblExp1.listenToCells("change", 3, NTV3row, 3, NTV3row);
                            break;        
                    }
                    break;

                case "track1":
                    switch(cueID) {
                        
                        case "$start":         
                            this.setSceneValue("complete", false);                    
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NTV1row, 2, NTV1row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track1A":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.GREEN, 3, NTV1row, 3, NTV1row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track1B":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.RED, 3, NTV1row, 3, NTV1row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NTV2row, 2, NTV2row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2A":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.GREEN, 3, NTV2row, 3, NTV2row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2B":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.RED, 3, NTV2row, 3, NTV2row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track3A":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NTV3row, 2, NTV3row);
                            this.STblExp1.highlightCells(CONST.GREEN, 3, NTV3row, 3, NTV3row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track3B":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NTV3row, 2, NTV3row);
                            this.STblExp1.highlightCells(CONST.RED, 3, NTV3row, 3, NTV3row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track4A":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightRow(CONST.NONE, NTV1row);
                            this.STblExp1.highlightRow(CONST.NONE, NTV2row);
                            this.STblExp1.highlightRow(CONST.NONE, NTV3row);
                            this.STblExp1.hideCells(3, NTV1row, 3, NTV1row);
                            this.STblExp1.hideCells(3, NTV2row, 3, NTV2row);
                            this.STblExp1.hideCells(3, NTV3row, 3, NTV3row);
                            
                            this.STblExp1.highlightRow(CONST.BLUE, VCrow);
                            break;
                        case "$end":
                            break;


                    }
                    break;

                case "track4B":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 3, NTV1row, 3, NTV1row);
                            this.STblExp1.setCellValue(NTV1row, 3, "Could cause");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track4C":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 3, NTV2row, 3, NTV2row);
                            this.STblExp1.setCellValue(NTV2row, 3, "Could cause");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track4D":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 3, NTV3row, 3, NTV3row);
                            this.STblExp1.setCellValue(NTV3row, 3, "Could cause");
                            break;
                        case "$end":
                            this.setSceneValue("complete", true);    
                            break;
                    }
                    break;

                case "track4E":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 3, CFD1row, 3, CFD1row);
                            this.STblExp1.setCellValue(CFD1row, 3, "Could cause");
                            break;
                        case "$end":
                            this.setSceneValue("complete", true);    
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

            let NCarray  = this.getModuleValue("TEDFeatureFocus");                
            let complete = 0;

            switch(target) {
                case "STblExp1": 
                    NCarray[this.STblExp1.selectedCell.row-1] = this.STblExp1.selectedCell.selectedValue;

                    this.setModuleValue("TEDFeatureFocus", NCarray); 

                    NCarray.forEach((element:string) => {
                        if(element !== "") complete++;
                    });

                    this.setSceneValue("complete", complete === 3); 
                    break;
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}