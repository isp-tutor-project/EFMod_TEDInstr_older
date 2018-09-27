
namespace EFTut_Suppl.EFMod_TEDInstr {

	export class CONST {

		public static readonly TUTORCONTAINER = "STutorContainer";

		public static readonly NEXTSCENE      = "nextbutton";
		public static readonly PREVSCENE      = "prevbutton";

        public static readonly HIDE      = false;
		public static readonly SHOW      = true;

		public static readonly NAVSCENE      = "SCENE";
		public static readonly NAVTUTOR      = "TUTOR";

		static readonly MOUSE_MOVE:string 		= "mousemove";			// Click event from the button 
		static readonly MOUSE_DOWN:string 		= "mousedown";			// Click event from the button 
		static readonly MOUSE_UP:string 		= "mouseup";			// Click event from the button 
		static readonly MOUSE_CLICK:string 		= "click";				// Click event from the button 
		static readonly DOUBLE_CLICK:string 	= "dblclick";			// Click event from the button 

		static readonly ALL:string 			    = null;		        	// Click event 

		static readonly CLICK:string 			= "click";				// Click event 
        static readonly CHANGED:string 			= "changed";	        // Change event
        
        static readonly FTRS_ALL:any            = null;        // null to delete all features for an id
        static readonly VAR_FTR                 = "varsel";    // id for the selected variable feature        
					
	}

}