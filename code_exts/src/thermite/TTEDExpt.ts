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

import { CUtil } 			from "util/CUtil";
import { CONST }            from "util/CONST";

import Event     = createjs.Event;
import Tween     = createjs.Tween;
import Ease      = createjs.Ease;
import { CEFTimeLine } from "core/CEFTimeLine";
import { exptVar } from "./IExptTypes";




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


	public Destructor() : void
	{
		super.Destructor();
	}


    private calcDirectParentById(comClass:string ) : any {

        let parent:any = this;

        for(let comNdx = 0 ; comNdx < 4 ; comNdx++) {

            if(this.exptStruct[comNdx].id == comClass) {

                parent = this.calcDirectParentByNdx(comNdx);
                break;
            }
        }

        return this;
    }


    private calcDirectParentByNdx(comNdx:number ) : any {

        // Get an ordered array of ancestor objects in the subobject
        // parentage - then seek to the direct parent of this component
        // using previous known components selected at higher levels
        // 
        let ancPath = this.exptStruct[comNdx].parent;

        let ancestors = ancPath? this.exptStruct[comNdx].parent.split("."):[];
        let parent    = this.seekToParent(ancestors, this);

        return parent;
    }


    // Pass a state array to indicate which component variant to show
    // 
    // e.g. ["a","b","b","a"]
    // 
    public setState(variants:Array<string>) {

        // Select/Show components breadth first. Record selected variant in the
        // state array to use in determining the parentage of sub-components to 
        // be shown at lower depth.
        // 
        for(let vDepth = 0 ; vDepth < 4 ; vDepth++) {

            // Show all the (sub)components at this level in the hierarchy
            // 
            for(let comNdx = 0 ; comNdx < 4 ; comNdx++) {

                if(this.exptStruct[comNdx].depth == vDepth) {

                    let parent = this.calcDirectParentByNdx(comNdx);

                    // "state" is an Object with named values based on the expt structure 
                    // 
                    let target = this.state[this.exptStruct[comNdx].id] = this.exptStruct[comNdx].id + variants[comNdx];

                    parent[target].show();
                }
            }
        }
    }

    private getSubComponent(target:string, com:string) : any {

        let parent = this.calcDirectParentById(target );

        // "state" is an Object with named values based on the expt structure 
        // 
        let varName = this.state[target];

        return parent[varName][com];
    }

    public showHighlight(...target:any[]) {

        target.forEach(element => {

            this.getSubComponent(element, "Shighlight").show();    
        });
    }

    public hideHighlight(...target:any[]) {

        target.forEach(element => {

            this.getSubComponent(element, "Shighlight").hide();    
        });
    }
    
    public showCallOut(...target:any[]) {

        target.forEach(element => {

            this.getSubComponent(element, "ScallOut").show();    
        });
    }

    public hideCallOut(...target:any[]) {

        target.forEach(element => {

            this.getSubComponent(element, "ScallOut").hide();    
        });
        
    }
    
    private seekToParent(ancestors:Array<string>, parent:any) : any {

        // Trace down through the selected experiment components
        // to find the direct parent of the next component to show
        // 
        for(let index = 0 ; index < ancestors.length ; index++) {

            parent = parent[this.state[ancestors[index]]];
        }

        return parent;
    }


    public hideAll() {

        for(let vDepth = 0 ; vDepth < 4 ; vDepth++) {

            for(let sVar = 0 ; sVar < 4 ; sVar++) {

                if(this.exptStruct[sVar].depth == vDepth) {

                    for(let variant of this.exptStruct[sVar].variants) {

                        let varName = this.exptStruct[sVar].id + variant;
                        this[varName].hide();    
                        this[varName].Shighlight.hide();    
                        this[varName].ScallOut.hide();    
                    }
                }
            }
        }
    }
    

	
//*************** Logging state management
	
   /*
    * 
    */
   public deSerializeObj(objData:any) : void
   {
       super.deSerializeObj(objData);		
       
       console.log("deserializing: TED Experiment Custom Control");

       this.exptStruct = objData.exptStruct;
       this.initState  = objData.initState;

       this.hideAll();
       this.setState(this.initState);
   }
}
