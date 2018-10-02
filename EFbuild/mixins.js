var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class CONST {
        }
        CONST.TUTORCONTAINER = "STutorContainer";
        CONST.NEXTSCENE = "nextbutton";
        CONST.PREVSCENE = "prevbutton";
        CONST.HIDE = false;
        CONST.SHOW = true;
        CONST.NAVSCENE = "SCENE";
        CONST.NAVTUTOR = "TUTOR";
        CONST.MOUSE_MOVE = "mousemove";
        CONST.MOUSE_DOWN = "mousedown";
        CONST.MOUSE_UP = "mouseup";
        CONST.MOUSE_CLICK = "click";
        CONST.DOUBLE_CLICK = "dblclick";
        CONST.ALL = null;
        CONST.CLICK = "click";
        CONST.CHANGED = "changed";
        CONST.FTRS_ALL = null;
        CONST.VAR_FTR = "varsel";
        CONST.YELLOW = "#FFFF5488";
        CONST.BLUE = "#B6FFFF88";
        CONST.GREEN = "#54FF0088";
        CONST.RED = "#FF005488";
        CONST.NONE = "";
        EFMod_TEDInstr.CONST = CONST;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class $Common {
            $preCreateScene() { }
            $onCreateScene() { }
            $preEnterScene() { }
            $onEnterScene() { }
            $preExitScene() { }
            $onExitScene() { }
            $preShowScene() { }
            $preHideScene() { }
            $demoInitScene() { }
            $logScene() { }
            $rewindScene() { }
            $resolveTemplate(templID) { }
            $handleEvent() { }
            $nodePreEnter(nodeId) { }
            $nodePreExit(nodeId) { }
            $nodeAction(actionId) { }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(id) { }
            $timedEvents(id) { }
            $updateNav() {
                if (!this.$queryFinished())
                    this.tutorDoc.TutAutomator.SNavigator._instance.enableNext(false);
                else
                    this.tutorDoc.TutAutomator.SNavigator._instance.enableNext(true);
            }
            $generateExpt(name, newVC, ...conf) {
                let AChosen = this.getModuleValue("selectedArea").index;
                let TChosen = this.getModuleValue("selectedTopic").index;
                let VChosen = this.getModuleValue("selectedVariable").index - 1;
                console.log("old TV: " + (VChosen + 1));
                let VC = (((VChosen + newVC) % 4) + 1);
                console.log("new TV: " + VC);
                let VNC = [1, 2, 3, 4];
                VNC.splice(VC - 1, 1);
                for (let ndx = 0; ndx < conf.length; ndx++) {
                    conf[ndx] = (((VChosen + conf[ndx]) % 4) + 1);
                    console.log("Confound: " + conf[ndx]);
                }
                conf.push(VC);
                this.setModuleValue(name + "Area", { "ontologyKey": `STBL_A${AChosen}`, "index": AChosen });
                this.setModuleValue(name + "Topic", { "ontologyKey": `STBL_A${AChosen}_T${TChosen}`, "index": TChosen });
                this.setModuleValue(name + "Variable", { "ontologyKey": `STBL_A${AChosen}_T${TChosen}_V${VC}`, "index": VC });
                this.setModuleValue(name + "RQ", { "ontologyKey": `S_A${AChosen}_T${TChosen}_RQ${VC}`, "index": VC });
                for (let ndx = 0; ndx < VNC.length; ndx++) {
                    this.setModuleValue(name + `VarNC${ndx + 1}`, { "ontologyKey": `STBL_A${AChosen}_T${TChosen}_V${VNC[ndx]}`, "index": VNC[ndx] });
                }
                for (let ndx = 1; ndx <= 4; ndx++) {
                    this.setModuleValue(name + `V${ndx}A`, { "ontologyKey": `S_A${AChosen}_T${TChosen}_V${ndx}_A`, "index": ndx });
                    this.setModuleValue(name + `V${ndx}B`, { "ontologyKey": `S_A${AChosen}_T${TChosen}_V${ndx}_A`, "index": ndx });
                }
                for (let ndx = 0; ndx < conf.length; ndx++) {
                    this.setModuleValue(name + `V${conf[ndx]}B`, { "ontologyKey": `S_A${AChosen}_T${TChosen}_V${conf[ndx]}_B`, "index": conf[ndx] });
                }
                this.delFeature(EFMod_TEDInstr.CONST.FTRS_ALL, EFMod_TEDInstr.CONST.VAR_FTR);
                this.addFeaturebyQuery(`S_A${this.getModuleValue(name + "Area.index")}_T${this.getModuleValue(name + "Topic.index")}|features`, EFMod_TEDInstr.CONST.VAR_FTR);
            }
        }
        EFMod_TEDInstr.$Common = $Common;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class Globals {
            constructor() {
                this.$var1 = "valname2";
            }
        }
        EFMod_TEDInstr.Globals = Globals;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SNavigator {
            $preCreateScene() {
                this.connectNavButton(EFMod_TEDInstr.CONST.NEXTSCENE, "Snext");
                this.showHideNavButton(EFMod_TEDInstr.CONST.PREVSCENE, EFMod_TEDInstr.CONST.HIDE);
                this.$("hide", "Smask1");
                this.setNavigationTarget(EFMod_TEDInstr.CONST.NAVSCENE);
                this.setModuleValue("TEDExpt1Area", { "ontologyKey": "STBL_A1", "index": 1 });
                this.setModuleValue("TEDExpt1Topic", { "ontologyKey": "STBL_A1_T2", "index": 2 });
                this.setModuleValue("TEDExpt1Variable", { "ontologyKey": "STBL_A1_T2_V3", "index": 3 });
                this.setModuleValue("TEDExpt1VarNC1", { "ontologyKey": "STBL_A1_T2_V1", "index": 1 });
                this.setModuleValue("TEDExpt1VarNC2", { "ontologyKey": "STBL_A1_T2_V2", "index": 2 });
                this.setModuleValue("TEDExpt1VarNC3", { "ontologyKey": "STBL_A1_T2_V4", "index": 4 });
                this.setModuleValue("TEDExpt1RQ", { "ontologyKey": "S_A1_T2_RQ3", "index": 3 });
                this.setModuleValue("TEDExpt1V1A", { "ontologyKey": "S_A1_T2_V1_A", "index": 1 });
                this.setModuleValue("TEDExpt1V1B", { "ontologyKey": "S_A1_T2_V1_B", "index": 1 });
                this.setModuleValue("TEDExpt1V2A", { "ontologyKey": "S_A1_T2_V2_A", "index": 2 });
                this.setModuleValue("TEDExpt1V2B", { "ontologyKey": "S_A1_T2_V2_B", "index": 2 });
                this.setModuleValue("TEDExpt1V3A", { "ontologyKey": "S_A1_T2_V3_A", "index": 3 });
                this.setModuleValue("TEDExpt1V3B", { "ontologyKey": "S_A1_T2_V3_B", "index": 3 });
                this.setModuleValue("TEDExpt1V4A", { "ontologyKey": "S_A1_T2_V4_A", "index": 4 });
                this.setModuleValue("TEDExpt1V4B", { "ontologyKey": "S_A1_T2_V4_B", "index": 4 });
                this.delFeature(EFMod_TEDInstr.CONST.FTRS_ALL, EFMod_TEDInstr.CONST.VAR_FTR);
                this.addFeaturebyQuery(`S_A${this.getModuleValue("TEDExpt1Area.index")}_T${this.getModuleValue("TEDExpt1Topic.index")}|features`, EFMod_TEDInstr.CONST.VAR_FTR);
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A1");
                this.addFeature("FTR_CHOICE");
                this.setModuleValue("TED_EXPT", 1);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (cueID) {
                    case "$start":
                        console.log("executing CuePoint START");
                        break;
                    case "$end":
                        console.log("executing CuePoint END");
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_TEDInstr.SNavigator = SNavigator;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene1 {
            constructor() {
                this.$IvIndex = 0;
            }
            $preCreateScene() {
            }
            $onCreateScene() {
                this.STable1.listenToCells("click", 0, 1, 0, 4);
                this.STable1.hideCells(1, 1, 2, 4);
                this.STable1.highlightCells("#44444422", 1, 1, 2, 4);
                this.setSceneValue("rowsComplete", 0);
                this.$IvIndex = 0;
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
                this.STable1.highlightNone();
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
                let row = this.getSceneValue("currentRow");
                this.setSceneValue("correct", false);
                switch (nodeId) {
                    case "IVALUESELECTION":
                        let rows = this.getSceneValue("rowsComplete");
                        switch (rows) {
                            case 1:
                                this.assertFeature("FTR_IV1");
                                break;
                            case 2:
                                this.retractFeature("FTR_IV1");
                                this.assertFeature("FTR_IVN");
                                break;
                            case 3:
                                this.retractFeature("FTR_IVN");
                                this.assertFeature("FTR_IVLAST");
                                break;
                        }
                        break;
                }
                switch (this.graphState) {
                    case "TVALCORRECT":
                    case "IVALCORRECT":
                        row = this.getSceneValue("currentRow");
                        this.STable1.setCellValue(row, 1, this.STable1.getCell(row, 1).selectedValue);
                        this.STable1.setCellValue(row, 2, this.STable1.getCell(row, 2).selectedValue);
                        break;
                }
                switch (nodeId) {
                    case "TVWRONG":
                        this.STable1.highlightNone();
                        this.STable1.highlightSelected("#99000044");
                        this.STable1.highlightCells("#44444422", 1, 1, 2, 4);
                        break;
                    case "TVCORRECT":
                        this.STable1.highlightNone();
                        this.STable1.highlightSelected("#00EE0088");
                        this.STable1.highlightCells("#44444422", 1, 1, 2, 4);
                        this.STable1.clearListeners("click");
                        this.STable1.selectedCell.processed = true;
                        break;
                    case "TVALUESELECTION":
                        this.STable1.showCells(1, row, 2, row);
                        this.STable1.highlightCells("", 1, row, 2, row);
                        this.STable1.listenToCells("change", 1, row, 2, row);
                        this.setSceneValue("correct", false);
                        break;
                    case "TVALWRONG":
                        this.STable1.highlightCells("#99000044", 1, row, 2, row);
                        break;
                    case "TVALCORRECT":
                        this.STable1.highlightRow("#00EE0088", row);
                        this.STable1.clearListeners("change");
                        this.setModuleValue("differentRow", this.STable1.selectedCell.row);
                        this.setSceneValue("rowsComplete", this.getSceneValue("rowsComplete") + 1);
                        break;
                    case "IVALUESELECTION":
                        this.setSceneValue("VSel.col1", null);
                        this.setSceneValue("VSel.col2", null);
                        this.STable1.showCells(1, row, 2, row);
                        this.STable1.highlightCells("", 1, row, 2, row);
                        this.STable1.listenToCells("change", 1, row, 2, row);
                        this.setSceneValue("correct", false);
                        break;
                    case "IVALWRONG":
                        this.STable1.highlightCells("#99000044", 1, row, 2, row);
                        break;
                    case "IVALCORRECT":
                        this.STable1.highlightRow("#00EE0088", row);
                        this.STable1.clearListeners("change");
                        this.setModuleValue("sameRow" + this.getSceneValue("rowsComplete"), this.STable1.selectedCell.row);
                        this.setSceneValue("rowsComplete", this.getSceneValue("rowsComplete") + 1);
                        break;
                }
            }
            $nodePreExit(nodeId) {
                let row;
                let cell;
                switch (nodeId) {
                }
                switch (nodeId) {
                    case "TVALCORRECT":
                        this.setSceneValue("currentRow", 0);
                    case "IVALCORRECT":
                        row = this.getSceneValue("currentRow");
                        do {
                            row++;
                            if (row >= this.STable1.getRows())
                                break;
                            cell = this.STable1.getCell(row, 0);
                        } while (cell.processed);
                        this.setSceneValue("currentRow", row);
                        this.getSceneValue("TVSel.col1", null);
                        this.getSceneValue("TVSel.col2", null);
                        this.setModuleValue("independentVarN", cell);
                        break;
                }
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                    case "ANS_CORRECT":
                        result = this.getSceneValue("correct");
                        break;
                    case "ANS_WRONG":
                        result = !this.getSceneValue("correct");
                        break;
                    case "TABLECOMPLETE":
                        result = this.getSceneValue("currentRow") >= 5;
                        break;
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                console.log("executing CuePoint START");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = false;
                switch (this.graphState) {
                    default:
                        stateComplete = this.getSceneValue("correct");
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                    case "STable1":
                        switch (this.graphState) {
                            case "root":
                            case "TVWRONG":
                                this.setSceneValue("currentRow", this.STable1.selectedCell.row);
                                this.setSceneValue("correct", this.getModuleValue("selectedVariable").ontologyKey === this.STable1.selectedCell.ontologyKey);
                                this.nextTrack("$onSelect:" + this.graphState);
                                break;
                            case "TVALUESELECTION":
                            case "TVALWRONG":
                                this.setSceneValue("TVSel.col" + this.STable1.selectedCell.col, this.STable1.selectedCell.selectedIndex);
                                if (this.querySceneProp(["TVSel.col1", "TVSel.col2"])) {
                                    this.setSceneValue("correct", this.getSceneValue("TVSel.col1") !== this.getSceneValue("TVSel.col2"));
                                    this.nextTrack("$onSelect:" + this.graphState);
                                }
                                break;
                            case "IVALUESELECTION":
                            case "IVALWRONG":
                                this.setSceneValue("VSel.col" + this.STable1.selectedCell.col, this.STable1.selectedCell.selectedIndex);
                                if (this.querySceneProp(["VSel.col1", "VSel.col2"])) {
                                    this.setSceneValue("correct", this.getSceneValue("VSel.col1") === this.getSceneValue("VSel.col2"));
                                    this.nextTrack("$onSelect:" + this.graphState);
                                }
                                break;
                        }
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                    case "ComponentA":
                        break;
                }
            }
        }
        EFMod_TEDInstr.SScene1 = SScene1;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene10 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                    case "Sanswer":
                        this.setModuleValue("Expt1_Q2_RIGHT", this.Sanswer.selected);
                        break;
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene10 = SScene10;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene11 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                    case "Sanswer":
                        this.setModuleValue("Expt1_Q3_WRONG", this.Sanswer.selected);
                        break;
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene11 = SScene11;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene12 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene12 = SScene12;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene12A {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setSceneValue("Complete", false);
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                    case "CORRECT":
                        result = this.getModuleValue("Expt1_Q4").value;
                        break;
                    case "INCOMPLETE":
                        result = !this.getSceneValue("Complete");
                        break;
                    default:
                        break;
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                    case "Sanswer":
                        this.setModuleValue("Expt1_Q4", this.Sanswer.selected);
                        this.setSceneValue("Complete", true);
                        break;
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene12A = SScene12A;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene13 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                    case "Sanswer":
                        this.setModuleValue("Expt1_Q4A_RIGHT", this.Sanswer.selected);
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene13 = SScene13;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene14 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                    case "Sanswer":
                        this.setModuleValue("Expt1_Q4B_WRONG", this.Sanswer.selected);
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene14 = SScene14;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene15 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
                this.STblExp1.hideCells(3, 1, 3, 4);
                this.STblExp1.setColWidth(3, "33%");
                this.setModuleValue("TEDFeatureFocus", ["", "", "", ""]);
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                let NCarray = this.getModuleValue("TEDFeatureFocus");
                let NCrow;
                switch (constrainId) {
                    case "NC1CORRECT":
                        NCrow = this.getModuleValue("TEDExpt1VarNC1.index");
                        break;
                    case "NC2CORRECT":
                        NCrow = this.getModuleValue("TEDExpt1VarNC2.index");
                        break;
                    case "NC3CORRECT":
                        NCrow = this.getModuleValue("TEDExpt1VarNC3.index");
                        break;
                }
                let same = this.STblExp1.getCellValue(NCrow - 1, 1) === this.STblExp1.getCellValue(NCrow - 1, 2);
                let selection = NCarray[NCrow - 1];
                if (!same && selection.toLowerCase() === "could")
                    result = true;
                return result;
            }
            $cuePoints(trackID, cueID) {
                let VCrow = this.getModuleValue("TEDExpt1Variable.index");
                let NC1row = this.getModuleValue("TEDExpt1VarNC1.index");
                let NC2row = this.getModuleValue("TEDExpt1VarNC2.index");
                let NC3row = this.getModuleValue("TEDExpt1VarNC3.index");
                switch (trackID) {
                    case "track0A":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                            case "a":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.BLUE, 0, VCrow, 0, VCrow);
                                break;
                        }
                        break;
                    case "track0B":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                            case "a":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.BLUE, 1, VCrow, 2, VCrow);
                                break;
                            case "b":
                                this.STblExp1.setCellValue(VCrow, 3, "Could cause");
                                break;
                        }
                        break;
                    case "track0C":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.NONE, 0, NC1row, 2, NC1row);
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.NONE, 0, NC2row, 2, NC2row);
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.NONE, 0, NC3row, 2, NC3row);
                                break;
                            case "a":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 0, NC1row, 2, NC1row);
                                break;
                            case "b":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 0, NC2row, 2, NC2row);
                                break;
                            case "c":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 0, NC3row, 2, NC3row);
                                break;
                        }
                        break;
                    case "track0D":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                            case "a":
                                this.STblExp1.showCells(3, NC1row, 3, NC1row);
                                this.STblExp1.showCells(3, NC2row, 3, NC2row);
                                this.STblExp1.showCells(3, NC3row, 3, NC3row);
                                this.STblExp1.listenToCells("change", 3, NC1row, 3, NC1row);
                                this.STblExp1.listenToCells("change", 3, NC2row, 3, NC2row);
                                this.STblExp1.listenToCells("change", 3, NC3row, 3, NC3row);
                                break;
                        }
                        break;
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 0, NC1row, 2, NC1row);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track1A":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.GREEN, 3, NC1row, 3, NC1row);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track1B":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.RED, 3, NC1row, 3, NC1row);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 0, NC2row, 2, NC2row);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2A":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.GREEN, 3, NC2row, 3, NC2row);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2B":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.RED, 3, NC2row, 3, NC2row);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3A":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 0, NC3row, 2, NC3row);
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.GREEN, 3, NC3row, 3, NC3row);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3B":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 0, NC3row, 2, NC3row);
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.RED, 3, NC3row, 3, NC3row);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4A":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightRow(EFMod_TEDInstr.CONST.NONE, NC1row);
                                this.STblExp1.highlightRow(EFMod_TEDInstr.CONST.NONE, NC2row);
                                this.STblExp1.highlightRow(EFMod_TEDInstr.CONST.NONE, NC3row);
                                this.STblExp1.hideCells(3, NC1row, 3, NC1row);
                                this.STblExp1.hideCells(3, NC2row, 3, NC2row);
                                this.STblExp1.hideCells(3, NC3row, 3, NC3row);
                                this.STblExp1.highlightRow(EFMod_TEDInstr.CONST.BLUE, VCrow);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4B":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 3, NC1row, 3, NC1row);
                                this.STblExp1.setCellValue(NC1row, 3, "Could cause");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4C":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 3, NC2row, 3, NC2row);
                                this.STblExp1.setCellValue(NC2row, 3, "Could cause");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4D":
                        switch (cueID) {
                            case "$start":
                                this.STblExp1.highlightCells(EFMod_TEDInstr.CONST.YELLOW, 3, NC3row, 3, NC3row);
                                this.STblExp1.setCellValue(NC3row, 3, "Could cause");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                let NCarray = this.getModuleValue("TEDFeatureFocus");
                let complete = 0;
                switch (target) {
                    case "STblExp1":
                        NCarray[this.STblExp1.selectedCell.row - 1] = this.STblExp1.selectedCell.selectedValue;
                        this.setModuleValue("TEDFeatureFocus", NCarray);
                        NCarray.forEach((element) => {
                            if (element !== "")
                                complete++;
                        });
                        this.setSceneValue("complete", complete === 3);
                        break;
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene15 = SScene15;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene16 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
                this.STblExp1.setColWidth(3, "0%");
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                let NCarray = this.getModuleValue("TEDFeatureFocus");
                let complete = 0;
                switch (target) {
                    case "STblExp1":
                        break;
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene16 = SScene16;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene1a {
            $onCreateScene() {
                this.setSceneValue("sceneComplete", false);
                this.$updateNav();
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
                this.$generateExpt("TEDExpt1", 1, 2, 3, 4);
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $handleEvent() {
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                    case "root":
                        this.SListBox2.resetInitState();
                        this.SListBox3.resetInitState();
                        break;
                    case "SELECTTOPIC":
                        this.SListBox2.initFromDataSource(this.SListBox1.selected.value);
                        this.setModuleValue("selectedVariable", null);
                        this.SListBox3.resetInitState();
                        break;
                    case "SELECTTV":
                        this.SListBox3.initFromDataSource(this.SListBox2.selected.value);
                        break;
                }
            }
            $nodePreExit(nodeId) {
                switch (nodeId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                    case "AREA_CHANGED":
                        result = !this.testModuleValue("selectedArea", this.SListBox1.selected);
                        if (result) {
                            this.setModuleValue("selectedArea", this.SListBox1.selected);
                        }
                        break;
                    case "TOPIC_CHANGED":
                        result = !this.testModuleValue("selectedTopic", this.SListBox2.selected);
                        if (result) {
                            this.setModuleValue("selectedTopic", this.SListBox2.selected);
                        }
                        break;
                    case "VARIABLE_CHANGED":
                        result = !this.testModuleValue("selectedVariable", this.SListBox3.selected);
                        if (result) {
                            this.setModuleValue("selectedVariable", this.SListBox3.selected);
                        }
                        break;
                    case "!COMPLETE":
                        result = !this.queryModuleProp(["selectedArea", "selectedTopic", "selectedVariable"]);
                        if (!result) {
                            this.addFeaturebyQuery(`S_A${this.getModuleValue("selectedArea.index")}_T${this.getModuleValue("selectedTopic.index")}|features`, EFMod_TEDInstr.CONST.VAR_FTR);
                        }
                        break;
                }
                this.setSceneValue("sceneComplete", this.queryModuleProp(["selectedArea", "selectedTopic", "selectedVariable"]));
                this.$updateNav();
                return result;
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                console.log("executing CuePoint START");
                                break;
                            case "$end":
                                console.log("executing CuePoint END");
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                return this.getSceneValue("sceneComplete");
            }
            $onSelect(target) {
                switch (target) {
                    case "SListBox1":
                    case "SListBox2":
                    case "SListBox3":
                        this.nextTrack("$onSelect:" + this.graphState);
                        break;
                }
            }
            $onClick(target) {
                switch (target) {
                    case "ComponentA":
                        break;
                }
            }
        }
        EFMod_TEDInstr.SScene1a = SScene1a;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene2 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
                this.STable1.hideCells(3, 1, 3, 4);
                this.STable1.setColWidth(3, "33%");
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
                this.setSceneValue("correct", false);
                switch (nodeId) {
                }
                switch (this.graphState) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track2":
                        switch (cueID) {
                            case "a":
                                this.STable1.setCellValue(this.getModuleValue("differentRow"), 3, "DIFFERENT");
                                break;
                        }
                        break;
                    case "track3":
                        switch (cueID) {
                            case "a":
                                this.STable1.setCellValue(this.getModuleValue("sameRow1"), 3, "SAME");
                                break;
                            case "b":
                                this.STable1.setCellValue(this.getModuleValue("sameRow2"), 3, "SAME");
                                break;
                            case "c":
                                this.STable1.setCellValue(this.getModuleValue("sameRow3"), 3, "SAME");
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = false;
                switch (this.graphState) {
                    default:
                        stateComplete = this.getSceneValue("correct");
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene2 = SScene2;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene3 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = false;
                switch (this.graphState) {
                    default:
                        stateComplete = this.getSceneValue("correct");
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene3 = SScene3;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene6 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene6 = SScene6;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene7 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.$generateExpt("TEDExpt1", 1, 2, 3, 4);
                let AChosen = this.getModuleValue("TEDExpt1Area.index");
                let TChosen = this.getModuleValue("TEDExpt1Topic.index");
                let VChosen = this.getModuleValue("TEDExpt1Variable.index");
                this.$("Sicon.|Svar.*").hide();
                this.$(`Sicon1|Svar${VChosen}a`).show();
                this.$(`Sicon2|Svar${VChosen}b`).show();
                this.SsubTitle1.setContentFromString(this.resolveSelector(`$EFO_S_A${AChosen}_T${TChosen}|enumValue${VChosen}a`));
                this.SsubTitle2.setContentFromString(this.resolveSelector(`$EFO_S_A${AChosen}_T${TChosen}|enumValue${VChosen}b`));
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                    case "TEDEXP1":
                        result = this.getModuleValue("TED_EXPT") === "TEDEXP1";
                        break;
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene7 = SScene7;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene8 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1a":
                        switch (cueID) {
                            case "$start":
                                this.Sexpt1.showCallOut("Svar1");
                                this.Sexpt1.showHighlight("Svar1");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track1b":
                        switch (cueID) {
                            case "$start":
                                this.Sexpt2.showCallOut("Svar1");
                                this.Sexpt2.showHighlight("Svar1");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2a":
                        switch (cueID) {
                            case "$start":
                                this.$("Sexpt.").exec("hideHighlight", "Svar1");
                                this.Sexpt1.showCallOut("Svar2");
                                this.Sexpt1.showHighlight("Svar2");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2b":
                        switch (cueID) {
                            case "$start":
                                this.Sexpt2.showCallOut("Svar2");
                                this.Sexpt2.showHighlight("Svar2");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3a":
                        switch (cueID) {
                            case "$start":
                                this.$("Sexpt.").exec("hideHighlight", "Svar2");
                                this.Sexpt1.showCallOut("Svar3");
                                this.Sexpt1.showHighlight("Svar3");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track3b":
                        switch (cueID) {
                            case "$start":
                                this.Sexpt2.showCallOut("Svar3");
                                this.Sexpt2.showHighlight("Svar3");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4a":
                        switch (cueID) {
                            case "$start":
                                this.$("Sexpt.").exec("hideHighlight", "Svar3");
                                this.Sexpt1.showCallOut("Svar4");
                                this.Sexpt1.showHighlight("Svar4");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track4b":
                        switch (cueID) {
                            case "$start":
                                this.Sexpt2.showCallOut("Svar4");
                                this.Sexpt2.showHighlight("Svar4");
                                break;
                            case "$end":
                                this.$("Sexpt.").exec("hideHighlight", "Svar2");
                                this.$("Sexpt.").exec("showHighlight", "Svar1");
                                this.$("Sexpt.").exec("showHighlight", "Svar2");
                                this.$("Sexpt.").exec("showHighlight", "Svar3");
                                this.$("Sexpt.").exec("showHighlight", "Svar4");
                                break;
                        }
                        break;
                    case "track5":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                            case "a":
                                this.$("Sexpt.").exec("showHighlight", "Svar1");
                                this.$("Sexpt.").exec("showHighlight", "Svar2");
                                this.$("Sexpt.").exec("showHighlight", "Svar3");
                                this.$("Sexpt.").exec("showHighlight", "Svar4");
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene8 = SScene8;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_TEDInstr;
    (function (EFMod_TEDInstr) {
        class SScene9 {
            $preCreateScene() {
            }
            $onCreateScene() {
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setSceneValue("Complete", false);
            }
            $preExitScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                    case "CORRECT":
                        result = this.getModuleValue("Expt1_Q1").value;
                        break;
                    case "INCOMPLETE":
                        result = !this.getSceneValue("Complete");
                        break;
                    default:
                        break;
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let stateComplete = true;
                switch (this.graphState) {
                    default:
                        break;
                }
                return stateComplete;
            }
            $onSelect(target) {
                switch (target) {
                    case "Sanswer":
                        this.setModuleValue("Expt1_Q1", this.Sanswer.selected);
                        this.setSceneValue("Complete", true);
                        break;
                }
                this.$updateNav();
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_TEDInstr.SScene9 = SScene9;
    })(EFMod_TEDInstr = EFTut_Suppl.EFMod_TEDInstr || (EFTut_Suppl.EFMod_TEDInstr = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
//# sourceMappingURL=mixins.js.map