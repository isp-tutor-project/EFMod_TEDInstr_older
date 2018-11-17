
namespace EFTut_Suppl.EFMod_TEDInstr {
    
    export class $Common {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
    
        // Place any common code here 

        // Place empty defaults here - these just avoid unnecessary exceptions for missing methods.

        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() { /* empty */  }
        public $onCreateScene() { /* empty */  }

        public $preEnterScene() { /* empty */  }
        public $onEnterScene()  { /* empty */  }
        
        public $preExitScene() { /* empty */  }
        public $onExitScene()  { /* empty */  }

        public $preShowScene() { /* empty */  }        
        public $preHideScene() { /* empty */  }

        public $demoInitScene() { /* empty */  }

        public $logScene() { /* empty */  }

        public $rewindScene() { /* empty */  }

        public $resolveTemplate(templID:string) { /* empty */  }

        public $handleEvent() { /* empty */  }           


        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) { /* empty */  }

        public $nodePreExit(nodeId:string) { /* empty */  }

        public $nodeAction(actionId:string) : void { /* empty */  }
                
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            /* empty */ 

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(id:string) { /* empty */  }

        public $timedEvents(id:string) { /* empty */  }


        //***********************************************
        // Scene State methods
        //


        public $queryFinished() : boolean {             

            let stateComplete:boolean = false;
            return  stateComplete; 
        }

        public $canGoBack() : boolean {             

            let stateComplete:boolean = true;
            return  stateComplete; 
        }

		public $updateNav() : void {

			// Update the Navigation
            //
            if(!this.$queryFinished())
                this.enableNext(false);		
            else	
                this.enableNext(true);		

            if(!this.$canGoBack())
                this.enableBack(false);		
            else	
                this.enableBack(true);		

		}

        //***********************************************
        // State Data Generator
        // Arguments:
        // name: string prefix on var names
        // newTV: offset to next TV to be chosen relative to TV in S_A_T_V name array 
        // Conf: array of table items to be set as confounded relative to TV in S_A_T_V name array 
        // newVC|Conf are wrapped to a 1 based array index
        //
        public $generateExpt(name:string, offNewTV:number, ...offConf:Array<number>) {

            let AChosen = this.getModuleValue("selectedArea").index;
            let TChosen = this.getModuleValue("selectedTopic").index;
            let VChosen = this.getModuleValue("selectedVariable").index -1;         // selectedVariable is 1-based

            console.log("old TV: " + (VChosen+1));

            let TV = (((VChosen + offNewTV) % 4) + 1);
            console.log("new TV: " + TV);

            // Generate array of indices to non-target variables NTV
            // 
            let NTV:Array<number> = [1,2,3,4];
            let numVar = 4;

            NTV.splice(TV-1, 1);

            this.setModuleValue(name + "NonTarget", NTV);   


            // The conf array is offsets relative to the newVC
            // 
            for(let ndx = 0 ; ndx < offConf.length ; ndx++) {
                offConf[ndx] = (((VChosen+offConf[ndx]) % 4) + 1);
                console.log("Confound: "+ offConf[ndx]);
            }

            // Initialize an array with the indices which are to be confounded
            // TEDExptConfounds
            // 
            let CVars:Array<number> = offConf.slice();
            this.setModuleValue(name + "Confounds", CVars);   

            // Add the TV to the variables to be confounded so it is set different across conditions
            // TEDExptDifferent
            // 
            offConf.push(TV);
            this.setModuleValue(name + "Different", offConf);   

            // Initialize EFM module values
            // TEDExptArea
            // TEDExptTopic
            // TEDExptVariable
            // TEDExptRQ
            // 
            this.setModuleValue(name + "Area",     {"ontologyKey":`S_A${AChosen}`,                    "index": AChosen});
            this.setModuleValue(name + "Topic",    {"ontologyKey":`S_A${AChosen}_T${TChosen}`,        "index": TChosen});
            this.setModuleValue(name + "Variable", {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${TV}`, "index": TV});
            this.setModuleValue(name + "RQ",       {"ontologyKey":`S_A${AChosen}_T${TChosen}_RQ${TV}`,   "index": TV});
            
            // Initialize the ordered array of indices not chosen as TV
            // TEDExptVarNC? with an ontologykey and index value
            // 
            for(let ndx = 0 ; ndx < NTV.length ; ndx++) {

                this.setModuleValue(name + `VarNC${ndx+1}`, {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${NTV[ndx]}`, "index": NTV[ndx]});
            }

            // Generate array of indices to Post-Test variable sequence - start with CHOSEN Target Variable and increment and wrap
            // 
            let PTV:Array<any> = [];
            for(let ndx = 0 ; ndx < numVar ; ndx++) {

                let varNdx = (((VChosen + ndx) % 4) + 1);

                PTV.push({"ontologyKey":`S_A${AChosen}_T${TChosen}_V${varNdx}`, "index": varNdx});
            }
            this.setModuleValue(name + "POSTSequence", PTV);


            // initialize the values for the table entries - set the values all the same initially then confound the desired entries
            // Note that we always set them to variant A
            // 
            // TEDExpt1V?
            // TEDExpt2V?
            // 
            for(let ndx = 1 ; ndx <= 4 ; ndx++) {

                this.setModuleValue(name + `1V${ndx}`, {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${ndx}_A`, "index":ndx});
                this.setModuleValue(name + `2V${ndx}`, {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${ndx}_A`, "index":ndx});   
            }

            // Counfound the desired entry and set the TV as different across conditions.   (i.e. confound Expt2 to variant B)
            // TEDExpt1V?
            // TEDExpt2V?
            for(let ndx = 0 ; ndx < offConf.length ; ndx++) {

                this.setModuleValue(name + `2V${offConf[ndx]}`, {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${offConf[ndx]}_B`, "index":offConf[ndx]});    
            }

            let cfNdx:number = 1;

            // TEDExptNC#SameDiff
            // TEDExptNC#Confound
            // 
            for(let ndx = 1 ; ndx <= NTV.length ; ndx++) {

                if(CVars.includes(NTV[ndx-1])) {
                    this.setModuleValue(name + `NC${ndx}SameDiff`, {"ontologyKey":`TED_E1_Q7NC${ndx}DIFF`, "value":"diff", "index":NTV[ndx-1]});                                       
                    this.setModuleValue(name + `NC${cfNdx++}Confound`, {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${NTV[ndx-1]}`, "index": NTV[ndx-1]} );   
                }
                else {
                    this.setModuleValue(name + `NC${ndx}SameDiff`, {"ontologyKey":`TED_E1_Q7NC${ndx}SAME`, "value":"same", "index":NTV[ndx-1]});                   
                }
            }

            this.addFeature("FTR_POST1");
            this.delFeature(CONST.FTRS_ALL, CONST.VAR_FTR);
            this.addFeaturebyQuery(`S_A${this.getModuleValue(name + "Area.index")}_T${this.getModuleValue(name + "Topic.index")}|features`, EFMod_TEDInstr.CONST.VAR_FTR);            
        }        
    }   
}