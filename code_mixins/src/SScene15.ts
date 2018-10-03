

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
                    NCrow = this.getModuleValue("TEDExptVarNC1.index");
                    break;
                case "NC2CORRECT":
                    NCrow = this.getModuleValue("TEDExptVarNC2.index");
                    break;
                case "NC3CORRECT":
                    NCrow = this.getModuleValue("TEDExptVarNC3.index");    
                    break;
            }

            let same      = this.STblExp1.getCellValue(NCrow-1, 1) === this.STblExp1.getCellValue(NCrow-1, 2);
            let selection = NCarray[NCrow-1];

            if(!same && selection.toLowerCase() === "could") result = true;

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            let VCrow  = this.getModuleValue("TEDExptVariable.index");
            let NC1row = this.getModuleValue("TEDExptVarNC1.index");
            let NC2row = this.getModuleValue("TEDExptVarNC2.index");
            let NC3row = this.getModuleValue("TEDExptVarNC3.index");

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
                            this.STblExp1.highlightCells(CONST.NONE, 0, NC1row, 2, NC1row);
                            this.STblExp1.highlightCells(CONST.NONE, 0, NC2row, 2, NC2row);
                            this.STblExp1.highlightCells(CONST.NONE, 0, NC3row, 2, NC3row);
                            break;

                        case "a":
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NC1row, 2, NC1row);
                            break;
                        case "b":
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NC2row, 2, NC2row);
                            break;
                        case "c":
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NC3row, 2, NC3row);
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
                            this.STblExp1.showCells(3, NC1row, 3, NC1row);
                            this.STblExp1.showCells(3, NC2row, 3, NC2row);
                            this.STblExp1.showCells(3, NC3row, 3, NC3row);

                            this.STblExp1.listenToCells("change", 3, NC1row, 3, NC1row);
                            this.STblExp1.listenToCells("change", 3, NC2row, 3, NC2row);
                            this.STblExp1.listenToCells("change", 3, NC3row, 3, NC3row);
                            break;        
                    }
                    break;

                case "track1":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NC1row, 2, NC1row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track1A":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.GREEN, 3, NC1row, 3, NC1row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track1B":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.RED, 3, NC1row, 3, NC1row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NC2row, 2, NC2row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2A":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.GREEN, 3, NC2row, 3, NC2row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track2B":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.RED, 3, NC2row, 3, NC2row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track3A":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NC3row, 2, NC3row);
                            this.STblExp1.highlightCells(CONST.GREEN, 3, NC3row, 3, NC3row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track3B":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 0, NC3row, 2, NC3row);
                            this.STblExp1.highlightCells(CONST.RED, 3, NC3row, 3, NC3row);
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track4A":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightRow(CONST.NONE, NC1row);
                            this.STblExp1.highlightRow(CONST.NONE, NC2row);
                            this.STblExp1.highlightRow(CONST.NONE, NC3row);
                            this.STblExp1.hideCells(3, NC1row, 3, NC1row);
                            this.STblExp1.hideCells(3, NC2row, 3, NC2row);
                            this.STblExp1.hideCells(3, NC3row, 3, NC3row);
                            
                            this.STblExp1.highlightRow(CONST.BLUE, VCrow);
                            break;
                        case "$end":
                            break;


                    }
                    break;

                case "track4B":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 3, NC1row, 3, NC1row);
                            this.STblExp1.setCellValue(NC1row, 3, "Could cause");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track4C":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 3, NC2row, 3, NC2row);
                            this.STblExp1.setCellValue(NC2row, 3, "Could cause");
                            break;
                        case "$end":
                            break;
                    }
                    break;

                case "track4D":
                    switch(cueID) {
                        
                        case "$start":                            
                            this.STblExp1.highlightCells(CONST.YELLOW, 3, NC3row, 3, NC3row);
                            this.STblExp1.setCellValue(NC3row, 3, "Could cause");
                            break;
                        case "$end":
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

            this.$updateNav();
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}