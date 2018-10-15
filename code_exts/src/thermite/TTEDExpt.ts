//*********************************************************************************
//
//  Copyright(c) 2008,2018 Kevin Willows. All Rights Reserved
//
//	License: Proprietary
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//
//*********************************************************************************

/// <reference path="../../../../dist/TutorEngineOne.d.ts" />

//** Imports

import { TObject }			from "thermite/TObject";

import { TMouseEvent } 		from "thermite/events/TMouseEvent";
import { CEFEvent }         from "events/CEFEvent";
import { CEFTimeLine }      from "core/CEFTimeLine";
import { exptVar }          from "./IExptTypes";

import { CUtil } 			from "util/CUtil";
import { CONST }            from "util/CONST";

import Event     = createjs.Event;
import Tween     = createjs.Tween;
import Ease      = createjs.Ease;




export class TTEDExpt extends TObject
{
	//************ Stage Symbols
    
    protected Svar1a:TObject;
    protected Svar1b:TObject;

    protected Svar2a:TObject;
    protected Svar2b:TObject;

    protected Svar3a:TObject;
    protected Svar3b:TObject;

    protected Svar4a:TObject;
    protected Svar4b:TObject;

    protected Stag1:TObject;
    protected Stag2:TObject;
    protected Stag3:TObject;
    protected Stag4:TObject;
    
	// non-interactive elements
	
	
	//************ Stage Symbols				

    private exptStruct:Array<exptVar>;
    private initState:any;
    private state:any;
    
	

	constructor()
	{
		super();
		this.init3();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TTEDExptInitialize() {

		this.TObjectInitialize.call(this);
		this.init3();
	}

	public initialize() {

		this.TObjectInitialize.call(this);		
		this.init3();
	}

	private init3() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TTEDExpt:Constructor");

        this.exptStruct = [null,null,null,null];
        this.state      = {};

		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public onCreate() : void
	{
        // Allow scene to override settings
        // 
        super.onCreate();

        // Add the htmlControls to the tags
        for(let i1:number = 1 ; i1 <= 4 ; i1++) {
            
            // this["Stag" + i1].onAddedToStage();
            this["Stag" + i1].addHTMLControls();
        }
	}


	public Destructor() : void
	{
		super.Destructor();
	}

    
    // We must initialize the context of child TObject controls 
    // 
    public setContext(_hostModule:any, _ownerModule:any, _hostScene:any) {

        super.setContext(_hostModule, _ownerModule, _hostScene);

        // Add the htmlControls to the tags
        for(let i1:number = 1 ; i1 <= 4 ; i1++) {
            
            this["Stag" + i1].setContext(_hostModule, _ownerModule, _hostScene);
        }
    }


    // Pass a state array to indicate which component variant to show
    // 
    // e.g. ["a","b","b","a"]
    // 
    private setState(parent:any, parentName:string, variants:Array<string>) {

        for(let sVar = 0 ; sVar < 4 ; sVar++) {

            // Find all components with the given parent
            // 
            if(this.exptStruct[sVar].parent === parentName) {

                // Show the desired variant of the found item
                // 
                let baseName = this.exptStruct[sVar].id;
                let varName  = baseName + variants[sVar];

                parent[varName].show();    

                // recursively show desired subcomponents
                // 
                this.setState(parent[varName], baseName, variants);
            }
        }
    }


    private hideAll(parent:any, parentName:string) {

        for(let sVar = 0 ; sVar < 4 ; sVar++) {

            if(this.exptStruct[sVar].parent === parentName) {

                this.exptStruct[sVar].parentObj = parent;

                for(let variant of this.exptStruct[sVar].variants) {

                    let baseName = this.exptStruct[sVar].id;
                    let varName  = baseName + variant;

                    parent[varName].hide();    

                    // recursively hide all subcomponents
                    // 
                    this.hideAll(parent[varName], baseName);
                }
            }
        }
    }


    public showHighlight(...target:any[]) {

        target.forEach(element => {

            this["Shighlight"+element].show();    
        });
    }

    public hideHighlight(...target:any[]) {

        target.forEach(element => {

            this["Shighlight"+element].hide();    
        });
    }
    
    public showCallOut(...target:any[]) {

        target.forEach(element => {

            this["Stag"+element].show();    

        });
    }

    public hideCallOut(...target:any[]) {

        target.forEach(element => {

            this["Stag"+element].hide();    

        });
        
    }
    
    private hideTags() {

        for(let sVar = 1 ; sVar <= 4 ; sVar++) {

            this["Shighlight" + sVar].hide();    
            this["Stag"       + sVar].hide();    
        }
    }
        

	
//*************** Logging state management
    
    private initFromTagData(tagData:any) {

        // Initialize the tag text
        // 
        for(let i1:number = 0 ; i1 < 4 ; i1++) {
            
            // Build a dynamic datasource
            // 
            let dataSource = {
                "layoutsource":tagData.layoutsource,
                "htmlData": {
                    "html": tagData.tag[i1]
                },
                "templateRef": tagData.templateRef
            }

            this["Stag" + (i1+1)].deSerializeObj(dataSource);            
        }
    }


   /*
    * 
    */
   public deSerializeObj(objData:any) : void
   {
        super.deSerializeObj(objData);		
        
        console.log("deserializing: TED Experiment Custom Control");

        if(objData.exptStruct) {
            this.exptStruct = this.hostScene.resolveSelector(objData.exptStruct.structData, objData.exptStruct.templateRef);
            this.hideAll(this, "");
        }
        if(objData.initState) {
            this.initState  = objData.initState;
            this.setState(this, "", this.initState);
        }

        if(objData.tagData) {
            this.initFromTagData(objData.tagData); 
            this.hideTags();
        }
    }
}
