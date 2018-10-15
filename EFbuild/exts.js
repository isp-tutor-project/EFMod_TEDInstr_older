System.register("thermite/IExptTypes", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("thermite/TMaterialIcon", ["core/CEFTimeLine", "thermite/TObject", "util/CUtil"], function (exports_2, context_2) {
    "use strict";
    var CEFTimeLine_1, TObject_1, CUtil_1, TMaterialIcon;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (CEFTimeLine_1_1) {
                CEFTimeLine_1 = CEFTimeLine_1_1;
            },
            function (TObject_1_1) {
                TObject_1 = TObject_1_1;
            },
            function (CUtil_1_1) {
                CUtil_1 = CUtil_1_1;
            }
        ],
        execute: function () {
            TMaterialIcon = class TMaterialIcon extends TObject_1.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TMaterialIconInitialize() {
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
                        CUtil_1.CUtil.trace("TMaterialIcon:Constructor");
                    this.effectTimeLine = new CEFTimeLine_1.CEFTimeLine(null, null, { "useTicks": false, "loop": false, "paused": true }, this.tutorDoc);
                    this.effectTweens = new Array();
                }
                Destructor() {
                    super.Destructor();
                }
                captureLogState(obj = null) {
                    obj = super.captureLogState(obj);
                    return obj;
                }
                captureXMLState() {
                    let stateVal = { controller: {} };
                    let controller = stateVal.controller;
                    return stateVal;
                }
                restoreXMLState(stateVal) {
                }
                compareXMLState(stateVal) {
                    var bTest = true;
                    return bTest;
                }
                deSerializeObj(objData) {
                    console.log("deserializing: TMaterialIcon Custom Control");
                    super.deSerializeObj(objData);
                }
            };
            exports_2("TMaterialIcon", TMaterialIcon);
        }
    };
});
System.register("thermite/TTEDExpt", ["thermite/TObject", "util/CUtil"], function (exports_3, context_3) {
    "use strict";
    var TObject_2, CUtil_2, TTEDExpt;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (TObject_2_1) {
                TObject_2 = TObject_2_1;
            },
            function (CUtil_2_1) {
                CUtil_2 = CUtil_2_1;
            }
        ],
        execute: function () {
            TTEDExpt = class TTEDExpt extends TObject_2.TObject {
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
                        CUtil_2.CUtil.trace("TTEDExpt:Constructor");
                    this.exptStruct = [null, null, null, null];
                    this.state = {};
                }
                onCreate() {
                    super.onCreate();
                    for (let i1 = 1; i1 <= 4; i1++) {
                        this["Stag" + i1].addHTMLControls();
                    }
                }
                Destructor() {
                    super.Destructor();
                }
                setContext(_hostModule, _ownerModule, _hostScene) {
                    super.setContext(_hostModule, _ownerModule, _hostScene);
                    for (let i1 = 1; i1 <= 4; i1++) {
                        this["Stag" + i1].setContext(_hostModule, _ownerModule, _hostScene);
                    }
                }
                setState(parent, parentName, variants) {
                    for (let sVar = 0; sVar < 4; sVar++) {
                        if (this.exptStruct[sVar].parent === parentName) {
                            let baseName = this.exptStruct[sVar].id;
                            let varName = baseName + variants[sVar];
                            parent[varName].show();
                            this.setState(parent[varName], baseName, variants);
                        }
                    }
                }
                hideAll(parent, parentName) {
                    for (let sVar = 0; sVar < 4; sVar++) {
                        if (this.exptStruct[sVar].parent === parentName) {
                            this.exptStruct[sVar].parentObj = parent;
                            for (let variant of this.exptStruct[sVar].variants) {
                                let baseName = this.exptStruct[sVar].id;
                                let varName = baseName + variant;
                                parent[varName].hide();
                                this.hideAll(parent[varName], baseName);
                            }
                        }
                    }
                }
                showHighlight(...target) {
                    target.forEach(element => {
                        this["Shighlight" + element].show();
                    });
                }
                hideHighlight(...target) {
                    target.forEach(element => {
                        this["Shighlight" + element].hide();
                    });
                }
                showCallOut(...target) {
                    target.forEach(element => {
                        this["Stag" + element].show();
                    });
                }
                hideCallOut(...target) {
                    target.forEach(element => {
                        this["Stag" + element].hide();
                    });
                }
                hideTags() {
                    for (let sVar = 1; sVar <= 4; sVar++) {
                        this["Shighlight" + sVar].hide();
                        this["Stag" + sVar].hide();
                    }
                }
                initFromTagData(tagData) {
                    for (let i1 = 0; i1 < 4; i1++) {
                        let dataSource = {
                            "layoutsource": tagData.layoutsource,
                            "htmlData": {
                                "html": tagData.tag[i1]
                            },
                            "templateRef": tagData.templateRef
                        };
                        this["Stag" + (i1 + 1)].deSerializeObj(dataSource);
                    }
                }
                deSerializeObj(objData) {
                    super.deSerializeObj(objData);
                    console.log("deserializing: TED Experiment Custom Control");
                    if (objData.exptStruct) {
                        this.exptStruct = this.hostScene.resolveSelector(objData.exptStruct.structData, objData.exptStruct.templateRef);
                        this.hideAll(this, "");
                    }
                    if (objData.initState) {
                        this.initState = objData.initState;
                        this.setState(this, "", this.initState);
                    }
                    if (objData.tagData) {
                        this.initFromTagData(objData.tagData);
                        this.hideTags();
                    }
                }
            };
            exports_3("TTEDExpt", TTEDExpt);
        }
    };
});
System.register("thermite/TTEDContainer", ["thermite/TObject", "util/CUtil"], function (exports_4, context_4) {
    "use strict";
    var TObject_3, CUtil_3, TTEDContainer;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (TObject_3_1) {
                TObject_3 = TObject_3_1;
            },
            function (CUtil_3_1) {
                CUtil_3 = CUtil_3_1;
            }
        ],
        execute: function () {
            TTEDContainer = class TTEDContainer extends TObject_3.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TTEDContainerInitialize() {
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
                        CUtil_3.CUtil.trace("TTEDContainer:Constructor");
                }
                onCreate() {
                    super.onCreate();
                    this.StedExp.onCreate();
                }
                Destructor() {
                    super.Destructor();
                }
                setContext(_hostModule, _ownerModule, _hostScene) {
                    super.setContext(_hostModule, _ownerModule, _hostScene);
                }
                showHighlight(...target) {
                    this.StedExp.showHighlight(target);
                }
                hideHighlight(...target) {
                    this.StedExp.hideHighlight(target);
                }
                showCallOut(...target) {
                    this.StedExp.showCallOut(target);
                }
                hideCallOut(...target) {
                    this.StedExp.hideCallOut(target);
                }
                layoutExpComponent(component) {
                    let mat = this.getConcatenatedDisplayProps(this._props).matrix;
                    let txForm = mat.decompose();
                    txForm.x += this.nominalBounds.x * txForm.scaleX;
                    txForm.y += this.nominalBounds.y * txForm.scaleY;
                    component.setTransform(txForm.x, txForm.y, txForm.scaleX, txForm.scaleY, txForm.rotation, txForm.skewX, txForm.skewY);
                    component.alpha = this.alpha;
                }
                initFromExpData(expData) {
                    let expClass = this.hostScene.resolveTemplates(expData.class, expData.templateRef);
                    let modClass = expClass.split(".");
                    this.StedExp = CUtil_3.CUtil.instantiateThermiteObject(modClass[0], modClass[1]);
                    if (this.StedExp) {
                        this.addChild(this.StedExp);
                        CUtil_3.CUtil.initSceneTick(this.StedExp);
                        if (expData.initData) {
                            this.StedExp.setContext(this.hostModule, this.ownerModule, this.hostScene);
                            this.StedExp.deSerializeObj(expData.initData);
                        }
                    }
                }
                deSerializeObj(objData) {
                    super.deSerializeObj(objData);
                    console.log("deserializing: TED Experiment Custom Control");
                    if (objData.expData) {
                        this.initFromExpData(objData.expData);
                    }
                    if (objData.initState) {
                        if (this.StedExp)
                            this.StedExp.deSerializeObj(objData);
                    }
                }
            };
            exports_4("TTEDContainer", TTEDContainer);
        }
    };
});
//# sourceMappingURL=exts.js.map