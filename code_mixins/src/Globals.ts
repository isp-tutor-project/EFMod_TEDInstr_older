namespace EFTut_Suppl.EFMod_TEDInstr {

    export class Globals {

        $var1:string = "valname2";

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        


   }
}