
namespace EFTut_Suppl.EFMod_TEDInstr {

	export class CONST {

		public static readonly TUTORCONTAINER = "STutorContainer";

        public static readonly NAVNONE  = 0;
        public static readonly NAVBACK  = 1;
        public static readonly NAVNEXT  = 2;
        public static readonly NAVBOTH  = 3;
        
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
                    
        static readonly YELLOW  = "#FFFF54";    // Highlight
        static readonly BLUE    = "#B6FFFF";    // Highlight
        static readonly GREEN   = "#54FF00";    // Highlight
        static readonly RED     = "#FF0054";    // Highlight

        static readonly LBGREEN   = "#009900";    // Highlight
        static readonly LBRED     = "#CC0000";    // Highlight

        static readonly NONE    = "";          // Highlight


	}

}