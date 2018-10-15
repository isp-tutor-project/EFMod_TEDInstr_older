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
import { TVirtual }			from "thermite/TVirtual";

import { exptVar }          from "./IExptTypes";

import { CUtil } 			from "util/CUtil";

import Event     = createjs.Event;
import Tween     = createjs.Tween;
import Ease      = createjs.Ease;
import { TTEDExpt } from "./TTEDExpt";




export class TTEDContainer extends TObject
{
	//************ Stage Symbols

    private StedExp:TTEDExpt;
    
	// non-interactive elements
	
    protected ScontrolRegion:TVirtual;
 
	//************ Stage Symbols				


	constructor()
	{
		super();
		this.init3();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TTEDContainerInitialize() {

		this.TObjectInitialize.call(this);
		this.init3();
	}

	public initialize() {

		this.TObjectInitialize.call(this);		
		this.init3();
	}

	private init3() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TTEDContainer:Constructor");


		// Note the CreateJS(AnimateCC) parts of the control have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public onCreate() : void
	{
        // Allow scene to override settings
        // 
        super.onCreate();

        this.StedExp.onCreate();
	}


	public Destructor() : void
	{
		super.Destructor();
	}

    
    // We must initialize the context of child TObject controls 
    // 
    public setContext(_hostModule:any, _ownerModule:any, _hostScene:any) {

        super.setContext(_hostModule, _ownerModule, _hostScene);

        // Add the htmlControls
    }


    
    public showHighlight(...target:any[]) {

        this.StedExp.showHighlight(target);
    }

    public hideHighlight(...target:any[]) {

        this.StedExp.hideHighlight(target);
    }
    
    public showCallOut(...target:any[]) {

        this.StedExp.showCallOut(target);
    }

    public hideCallOut(...target:any[]) {

        this.StedExp.hideCallOut(target);
    }    



//*************** Logging state management
    
    private layoutExpComponent(component:TObject) {

        let mat = this.getConcatenatedDisplayProps(this._props).matrix;

        let txForm = mat.decompose(); 

        txForm.x += this.nominalBounds.x  * txForm.scaleX; 
        txForm.y += this.nominalBounds.y  * txForm.scaleY; 

        component.setTransform(txForm.x, txForm.y, txForm.scaleX, txForm.scaleY, txForm.rotation, txForm.skewX, txForm.skewY);
        component.alpha = this.alpha;
    }


    private initFromExpData(expData:any) {
        
        let expClass:string        = this.hostScene.resolveTemplates(expData.class, expData.templateRef);
        let modClass:Array<string> = expClass.split(".");

        this.StedExp = CUtil.instantiateThermiteObject(modClass[0], modClass[1]) as TTEDExpt;

        if(this.StedExp) {

            // this.layoutExpComponent(this.StedExp);
            this.addChild(this.StedExp);        

            // Special CreateJS processing to initialize component with subcomponents.
            // 
            CUtil.initSceneTick(this.StedExp);

            if(expData.initData) {
                this.StedExp.setContext(this.hostModule, this.ownerModule, this.hostScene);
                this.StedExp.deSerializeObj(expData.initData);
            }
        }
    }


   /*
    * 
    */
   public deSerializeObj(objData:any) : void
   {
        super.deSerializeObj(objData);		
        
        console.log("deserializing: TED Experiment Custom Control");

        if(objData.expData) {
            this.initFromExpData(objData.expData);
        }
        if(objData.initState) {
            if(this.StedExp)
                this.StedExp.deSerializeObj(objData);
        }
    }
}
