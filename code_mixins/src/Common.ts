
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

		public $updateNav() : void {

			// Update the Navigation
			//
			if(!this.$queryFinished())
				this.tutorDoc.TutAutomator.SNavigator._instance.enableNext(false);		
			else	
                this.tutorDoc.TutAutomator.SNavigator._instance.enableNext(true);		
		}


        //***********************************************
        // State Data Generator
        // Arguments:
        // name: string prefix on var names
        // newVC: offset to next TV to be chosen relative to TV in S_A_T_V name array 
        // Conf: array of table items to be set as confounded relative to TV in S_A_T_V name array 
        // newVC|Conf are wrapped to a 1 based array index
        //
        public $generateExpt(name:string, newVC:number, ...conf:Array<number>) {

            let AChosen = this.getModuleValue("selectedArea").index;
            let TChosen = this.getModuleValue("selectedTopic").index;
            let VChosen = this.getModuleValue("selectedVariable").index -1;         

            console.log("old TV: " + (VChosen+1));

            let TV = (((VChosen + newVC) % 4) + 1);
            console.log("new TV: " + TV);

            let VNC:Array<number> = [1,2,3,4];

            VNC.splice(TV-1, 1);

            for(let ndx = 0 ; ndx < conf.length ; ndx++) {
                conf[ndx] = (((VChosen+conf[ndx]) % 4) + 1);
                console.log("Confound: "+ conf[ndx]);
            }

            // Initialize an array with the indices which are to be confounded
            // TEDExptConfounds
            // 
            let CVars:Array<number> = conf.slice();
            this.setModuleValue(name + "Confounds", CVars);   

            // Add the TV to the variables to be confounded so it is set different across conditions
            // TEDExptDifferent
            // 
            conf.push(TV);
            this.setModuleValue(name + "Different", conf);   

            // Initialize EFM module values
            // TEDExptArea
            // TEDExptTopic
            // TEDExptVariable
            // TEDExptRQ
            // 
            this.setModuleValue(name + "Area",     {"ontologyKey":`STBL_A${AChosen}`,                    "index": AChosen});
            this.setModuleValue(name + "Topic",    {"ontologyKey":`STBL_A${AChosen}_T${TChosen}`,        "index": TChosen});
            this.setModuleValue(name + "Variable", {"ontologyKey":`STBL_A${AChosen}_T${TChosen}_V${TV}`, "index": TV});
            this.setModuleValue(name + "RQ",       {"ontologyKey":`S_A${AChosen}_T${TChosen}_RQ${TV}`,   "index": TV});
            
            // Initialize the ordered array of indices not chosen as TV
            // TEDExptVarNC? with an ontologykey and index value
            // 
            for(let ndx = 0 ; ndx < VNC.length ; ndx++) {

                this.setModuleValue(name + `VarNC${ndx+1}`, {"ontologyKey":`STBL_A${AChosen}_T${TChosen}_V${VNC[ndx]}`, "index": VNC[ndx]});
            }

            // initialize the values for the table entries - set the values all the same initially then confound the desired entries
            // Note that we always set them to variant A and then confound Expt2 to variant B
            // 
            // TEDExptV?A
            // TEDExptV?B
            // 
            for(let ndx = 1 ; ndx <= 4 ; ndx++) {

                this.setModuleValue(name + `V${ndx}A`, {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${ndx}_A`, "index":ndx});
                this.setModuleValue(name + `V${ndx}B`, {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${ndx}_A`, "index":ndx});    
            }

            // Counfound the desired entry and set the TV as different across conditions.
            // TEDExptV?B
            // 
            for(let ndx = 0 ; ndx < conf.length ; ndx++) {

                this.setModuleValue(name + `V${conf[ndx]}B`, {"ontologyKey":`S_A${AChosen}_T${TChosen}_V${conf[ndx]}_B`, "index":conf[ndx]});    
            }

            this.delFeature(CONST.FTRS_ALL, CONST.VAR_FTR);
            this.addFeaturebyQuery(`S_A${this.getModuleValue(name + "Area.index")}_T${this.getModuleValue(name + "Topic.index")}|features`, EFMod_TEDInstr.CONST.VAR_FTR);            
        }        
    }   
}