

namespace EFTut_Suppl.EFMod_TEDInstr {

    export class SScene1 {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        public $IvIndex:number = 0;

        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() {
        }

        public $onCreateScene() {            
            this.STable1.listenToCells("click", 0, 1, 0, 4);
            this.STable1.hideCells(1, 1, 2, 4);
            this.STable1.highlightCells("#44444422", 1, 1, 2, 4); 
            this.setSceneValue("rowsComplete", 0);

            this.$IvIndex = 0;
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
        }

        public $preShowScene() {                         
        }        

        public $preHideScene() {            
            this.STable1.highlightNone(); 
        }

        public $onExitScene() {
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

        public $handleEvent(compID:string) {

            console.log(compID);
        }

        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {

            let row = this.getSceneValue("currentRow");

            this.setSceneValue("correct", false);

            switch(nodeId) {

                case "IVALUESELECTION":                
                    let rows = this.getSceneValue("rowsComplete");

                    switch(rows) {
                        case 1:
                            this.assertFeature("FTR_IV1");     
                            break;

                        case 2:
                            this.retractFeature("FTR_IV1");     
                            this.assertFeature("FTR_IVN");                                                    
                            break;                    

                        case 3:
                            this.retractFeature("FTR_IVN");     
                            this.assertFeature("FTR_IVLAST");   
                            break;                                                 
                    }
                    break;    
                
            }

            switch(this.graphState) {

                case "TVALCORRECT":
                case "IVALCORRECT":
                    row = this.getSceneValue("currentRow");                

                    // Convert from lists to text
                    this.STable1.setCellValue(row, 1, this.STable1.getCell(row, 1).selectedValue);
                    this.STable1.setCellValue(row, 2, this.STable1.getCell(row, 2).selectedValue);
                    break;
            }

            switch(nodeId) {
                case "TVWRONG":
                    this.STable1.highlightNone(); 
                    this.STable1.highlightSelected("#99000044"); 
                    this.STable1.highlightCells("#44444422", 1, 1, 2, 4); 
                    break;

                case "TVCORRECT":
                    this.STable1.highlightNone(); 
                    this.STable1.highlightSelected("#00EE0088"); 
                    this.STable1.highlightCells("#44444422", 1, 1, 2, 4); 
                    this.STable1.clearListeners("click");
                    this.STable1.selectedCell.processed = true;
                    break;

                case "TVALUESELECTION":

                    this.STable1.showCells(1, row, 2, row);
                    this.STable1.highlightCells("", 1, row, 2, row);
                    this.STable1.listenToCells("change", 1, row, 2, row);
                    this.setSceneValue("correct", false);  
                    break;

                case "TVALWRONG":
                    this.STable1.highlightCells("#99000044", 1, row, 2, row);
                    break;

                case "TVALCORRECT":
                    this.STable1.highlightRow("#00EE0088", row);
                    this.STable1.clearListeners("change");
                    this.setModuleValue("differentRow", this.STable1.selectedCell.row);                
                    this.setSceneValue("rowsComplete", this.getSceneValue("rowsComplete")+1);
                    break;

                case "IVALUESELECTION":    
                    this.setSceneValue("VSel.col1", null);
                    this.setSceneValue("VSel.col2", null);

                    this.STable1.showCells(1, row, 2, row);
                    this.STable1.highlightCells("", 1, row, 2, row);
                    this.STable1.listenToCells("change", 1, row, 2, row);
                    this.setSceneValue("correct", false);  
                    break;

                case "IVALWRONG":
                    this.STable1.highlightCells("#99000044", 1, row, 2, row);
                    break;

                case "IVALCORRECT":
                    this.STable1.highlightRow("#00EE0088", row);
                    this.STable1.clearListeners("change");

                    this.setModuleValue("sameRow" + this.getSceneValue("rowsComplete"), this.STable1.selectedCell.row);                
                    this.setSceneValue("rowsComplete", this.getSceneValue("rowsComplete")+1);
                    break;

            }
        }


        public $nodePreExit(nodeId:string) {

            let row:number;
            let cell:any;

            switch(nodeId) {

                // case "TVALCORRECT":
                // case "IVALCORRECT":
                //     row = this.getSceneValue("currentRow");                

                //     // Convert from lists to text
                //     this.STable1.setCellValue(row, 1, this.STable1.getCell(row, 1).selectedValue);
                //     this.STable1.setCellValue(row, 2, this.STable1.getCell(row, 2).selectedValue);
                //     break;
            }


            switch(nodeId) {

                case "TVALCORRECT":
                    this.setSceneValue("currentRow", 0);

                case "IVALCORRECT":                
                    row = this.getSceneValue("currentRow");

                    do {
                        row++;
                        if(row >= this.STable1.getRows())
                                                    break;
                        cell = this.STable1.getCell(row,0);

                    }while(cell.processed);
                        
                    this.setSceneValue("currentRow", row);

                    // Reset the row selections on each pass
                    this.getSceneValue("TVSel.col1", null);
                    this.getSceneValue("TVSel.col2", null);

                    this.setModuleValue("independentVarN", cell);
                    break;
            }
        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            switch(constrainId) {
                case "ANS_CORRECT":
                    result = this.getSceneValue("correct"); 
                    break;

                case "ANS_WRONG":
                    result = !this.getSceneValue("correct"); 
                    break;

                case "TABLECOMPLETE":
                    result = this.getSceneValue("currentRow") >= 5; 
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

            let stateComplete:boolean = false;

            switch(this.graphState) {

                default:
                    stateComplete = this.getSceneValue("correct"); 
                    break;
            }

            return  stateComplete; 
        }


        public $onSelect(target:string) {            

            switch(target) {

                case "STable1":
                    switch(this.graphState) {
                        case "root":
                        case "TVWRONG":
                            this.setSceneValue("currentRow", this.STable1.selectedCell.row);                            
                            this.setSceneValue("correct",     
                                                this.getModuleValue("selectedVariable").ontologyKey === this.STable1.selectedCell.ontologyKey);  
                             this.nextTrack();
                        break;

                        case "TVALUESELECTION":
                        case "TVALWRONG":
                            this.setSceneValue("TVSel.col" + this.STable1.selectedCell.col, this.STable1.selectedCell.selectedIndex);

                            if (this.querySceneProp(["TVSel.col1","TVSel.col2"])) {
                                this.setSceneValue("correct",     
                                                    this.getSceneValue("TVSel.col1") !== this.getSceneValue("TVSel.col2"));                                               
                                this.nextTrack();
                            }
                        break;

                        case "IVALUESELECTION":
                        case "IVALWRONG":
                            this.setSceneValue("VSel.col" + this.STable1.selectedCell.col, this.STable1.selectedCell.selectedIndex);

                            if (this.querySceneProp(["VSel.col1","VSel.col2"])) {
                                this.setSceneValue("correct",     
                                                    this.getSceneValue("VSel.col1") === this.getSceneValue("VSel.col2"));  
                                this.nextTrack();
                            }
                        break;

                    }
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