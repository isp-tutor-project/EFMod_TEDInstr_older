System.register("thermite/TTEDExpt", ["thermite/TObject", "util/CUtil"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TObject_1, CUtil_1, TTEDExpt;
    return {
        setters: [
            function (TObject_1_1) {
                TObject_1 = TObject_1_1;
            },
            function (CUtil_1_1) {
                CUtil_1 = CUtil_1_1;
            }
        ],
        execute: function () {
            TTEDExpt = class TTEDExpt extends TObject_1.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TTEDExptInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_1.CUtil.trace("TTEDExpt:Constructor");
                }
                Destructor() {
                    super.Destructor();
                }
                deSerializeObj(objData) {
                    console.log("deserializing: Teacher Custom Control");
                    super.deSerializeObj(objData);
                }
            };
            exports_1("TTEDExpt", TTEDExpt);
        }
    };
});
//# sourceMappingURL=exts.js.map