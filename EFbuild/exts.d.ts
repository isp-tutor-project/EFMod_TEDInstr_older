/// <reference path="../../dist/TutorEngineOne.d.ts" />
declare module "thermite/IExptTypes" {
    export interface exptVar {
        id: string;
        parent: string;
        parentObj?: any;
        depth: number;
        variants: Array<string>;
    }
}
declare module "thermite/TMaterialIcon" {
    import { TObject } from "thermite/TObject";
    import { THtmlText } from "thermite/THtmlText";
    export class TMaterialIcon extends TObject {
        protected STextBox1: THtmlText;
        protected STextBox2: THtmlText;
        protected SboxNormal: TObject;
        protected SboxSelect: TObject;
        protected SbubbleNormal: TObject;
        protected SbubbleSelect: TObject;
        protected SboxShadow: TObject;
        protected SbubbleShadow: TObject;
        private currState;
        constructor();
        TMaterialIconInitialize(): void;
        initialize(): void;
        private init3;
        Destructor(): void;
        captureLogState(obj?: any): Object;
        captureXMLState(): any;
        restoreXMLState(stateVal: any): void;
        compareXMLState(stateVal: any): boolean;
        deSerializeObj(objData: any): void;
    }
}
declare module "thermite/TTEDExpt" {
    import { TObject } from "thermite/TObject";
    export class TTEDExpt extends TObject {
        protected Svar1a: TObject;
        protected Svar1b: TObject;
        protected Svar2a: TObject;
        protected Svar2b: TObject;
        protected Svar3a: TObject;
        protected Svar3b: TObject;
        protected Svar4a: TObject;
        protected Svar4b: TObject;
        protected Stag1: TObject;
        protected Stag2: TObject;
        protected Stag3: TObject;
        protected Stag4: TObject;
        private exptStruct;
        private initState;
        private state;
        constructor();
        TTEDExptInitialize(): void;
        initialize(): void;
        private init3;
        onCreate(): void;
        Destructor(): void;
        setContext(_hostModule: any, _ownerModule: any, _hostScene: any): void;
        private setState;
        private hideAll;
        showHighlight(...target: any[]): void;
        hideHighlight(...target: any[]): void;
        showCallOut(...target: any[]): void;
        hideCallOut(...target: any[]): void;
        private hideTags;
        private initFromTagData;
        deSerializeObj(objData: any): void;
    }
}
declare module "thermite/TTEDContainer" {
    import { TObject } from "thermite/TObject";
    import { TVirtual } from "thermite/TVirtual";
    export class TTEDContainer extends TObject {
        private StedExp;
        protected ScontrolRegion: TVirtual;
        constructor();
        TTEDContainerInitialize(): void;
        initialize(): void;
        private init3;
        onCreate(): void;
        Destructor(): void;
        setContext(_hostModule: any, _ownerModule: any, _hostScene: any): void;
        showHighlight(...target: any[]): void;
        hideHighlight(...target: any[]): void;
        showCallOut(...target: any[]): void;
        hideCallOut(...target: any[]): void;
        private layoutExpComponent;
        private initFromExpData;
        deSerializeObj(objData: any): void;
    }
}
