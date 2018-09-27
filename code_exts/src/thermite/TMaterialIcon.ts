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
import { CEFTimeLine }      from "core/CEFTimeLine";

import { TObject }			from "thermite/TObject";
import { THtmlText }        from "thermite/THtmlText";

import { TMouseEvent } 		from "thermite/events/TMouseEvent";
import { CEFEvent }         from "events/CEFEvent";
import { TScene }           from "thermite/TScene";

import { CUtil } 			from "util/CUtil";
import { CONST }            from "util/CONST";

import Event     = createjs.Event;
import Tween     = createjs.Tween;
import Ease      = createjs.Ease;
import Text      = createjs.Text;




export class TMaterialIcon extends TObject
{
	//************ Stage Symbols
    
    protected STextBox1:THtmlText;
    protected STextBox2:THtmlText;
    protected SboxNormal:TObject;      // Float
    protected SboxSelect:TObject;      // Float Highlighted
    protected SbubbleNormal:TObject;
    protected SbubbleSelect:TObject;
    protected SboxShadow:TObject;      // Float
    protected SbubbleShadow:TObject;
	
	// non-interactive elements
	
	
	//************ Stage Symbols				

    private currState:number;                   // current state


	constructor()
	{
		super();
		this.init3();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TMaterialIconInitialize() {

		this.TObjectInitialize.call(this);
		this.init3();
	}

	public initialize() {

		this.TObjectInitialize.call(this);		
		this.init3();
	}

	private init3() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TMaterialIcon:Constructor");

        this.effectTimeLine = new CEFTimeLine(null, null, {"useTicks":false, "loop":false, "paused":true }, this.tutorDoc);
        this.effectTweens   = new Array<Tween>();

		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public Destructor() : void
	{		
		super.Destructor();
	}


    
//*************** Logging state management
	
	public captureLogState(obj:any = null) : Object
	{
		obj = super.captureLogState(obj);
					
		return obj;											   
	}						
	
	public captureXMLState() :any
	{		
		let stateVal:any   = {controller:{}};
		let controller:any = stateVal.controller;

		return stateVal;				
	}		

	public restoreXMLState(stateVal:any) : void
	{
	}		
	
	public compareXMLState(stateVal:any) :boolean
	{
		var bTest:boolean = true;

		return bTest;			
	}		
	
//*************** Logging state management
	
   /*
    * 
    */
   public deSerializeObj(objData:any) : void
   {
       console.log("deserializing: TMaterialIcon Custom Control");

       super.deSerializeObj(objData);				
   }
	
}
