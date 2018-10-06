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
    var __moduleName = context_2 && context_2.id;
    var CEFTimeLine_1, TObject_1, CUtil_1, TMaterialIcon;
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
    var __moduleName = context_3 && context_3.id;
    var TObject_2, CUtil_2, TTEDExpt;
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
                calcDirectParentById(comClass) {
                    let parent = this;
                    for (let comNdx = 0; comNdx < 4; comNdx++) {
                        if (this.exptStruct[comNdx].id == comClass) {
                            parent = this.calcDirectParentByNdx(comNdx);
                            break;
                        }
                    }
                    return this;
                }
                calcDirectParentByNdx(comNdx) {
                    let ancPath = this.exptStruct[comNdx].parent;
                    let ancestors = ancPath ? this.exptStruct[comNdx].parent.split(".") : [];
                    let parent = this.seekToParent(ancestors, this);
                    return parent;
                }
                setState(variants) {
                    for (let vDepth = 0; vDepth < 4; vDepth++) {
                        for (let comNdx = 0; comNdx < 4; comNdx++) {
                            if (this.exptStruct[comNdx].depth == vDepth) {
                                let parent = this.calcDirectParentByNdx(comNdx);
                                let target = this.state[this.exptStruct[comNdx].id] = this.exptStruct[comNdx].id + variants[comNdx];
                                parent[target].show();
                            }
                        }
                    }
                }
                getSubComponent(target, com) {
                    let parent = this.calcDirectParentById(target);
                    let varName = this.state[target];
                    return parent[varName][com];
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
                seekToParent(ancestors, parent) {
                    for (let index = 0; index < ancestors.length; index++) {
                        parent = parent[this.state[ancestors[index]]];
                    }
                    return parent;
                }
                hideTags() {
                    for (let sVar = 1; sVar <= 4; sVar++) {
                        this["Shighlight" + sVar].hide();
                        this["Stag" + sVar].hide();
                    }
                }
                hideAll() {
                    for (let vDepth = 0; vDepth < 4; vDepth++) {
                        for (let sVar = 0; sVar < 4; sVar++) {
                            if (this.exptStruct[sVar].depth == vDepth) {
                                for (let variant of this.exptStruct[sVar].variants) {
                                    let varName = this.exptStruct[sVar].id + variant;
                                    this[varName].hide();
                                }
                            }
                        }
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
                    this.exptStruct = this.exptStruct || objData.exptStruct;
                    this.initState = this.initState || objData.initState;
                    if (objData.exptStruct) {
                        this.hideAll();
                    }
                    if (objData.initState) {
                        this.setState(this.initState);
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
//# sourceMappingURL=exts.js.map