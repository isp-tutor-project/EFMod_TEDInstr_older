/// <reference path="../../dist/TutorEngineOne.d.ts" />
declare module "thermite/TTEDExpt" {
    import { TObject } from "thermite/TObject";
    export class TTEDExpt extends TObject {
        protected STeacherHead: TObject;
        protected STeacher1: TObject;
        protected STeacher2: TObject;
        protected STeacher3: TObject;
        constructor();
        TTEDExptInitialize(): void;
        initialize(): void;
        private init3();
        Destructor(): void;
        deSerializeObj(objData: any): void;
    }
}
