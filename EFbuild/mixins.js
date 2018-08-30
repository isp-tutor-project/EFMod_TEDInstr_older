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
                this.setNavigationTarget(EFMod_TEDInstr.CONST.NAVSCENE);
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
                                this.nextTrack();
                                break;
                            case "TVALUESELECTION":
                            case "TVALWRONG":
                                this.setSceneValue("TVSel.col" + this.STable1.selectedCell.col, this.STable1.selectedCell.selectedIndex);
                                if (this.querySceneProp(["TVSel.col1", "TVSel.col2"])) {
                                    this.setSceneValue("correct", this.getSceneValue("TVSel.col1") !== this.getSceneValue("TVSel.col2"));
                                    this.nextTrack();
                                }
                                break;
                            case "IVALUESELECTION":
                            case "IVALWRONG":
                                this.setSceneValue("VSel.col" + this.STable1.selectedCell.col, this.STable1.selectedCell.selectedIndex);
                                if (this.querySceneProp(["VSel.col1", "VSel.col2"])) {
                                    this.setSceneValue("correct", this.getSceneValue("VSel.col1") === this.getSceneValue("VSel.col2"));
                                    this.nextTrack();
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
                    default:
                        break;
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
                switch (constrainId) {
                    case "AREA_CHANGED":
                        result = !this.testModuleValue("selectedArea", this.SListBox1.selected);
                        break;
                    case "TOPIC_CHANGED":
                        result = !this.testModuleValue("selectedTopic", this.SListBox2.selected);
                        break;
                    case "VARIABLE_CHANGED":
                        result = !this.testModuleValue("selectedVariable", this.SListBox3.selected);
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
                this.setSceneValue("sceneComplete", false);
                if (this.queryModuleProp(["selectedArea", "selectedTopic", "selectedVariable"])) {
                    this.setSceneValue("sceneComplete", true);
                }
                return this.getSceneValue("sceneComplete");
            }
            $onSelect(target) {
                switch (target) {
                    case "SListBox1":
                        if (!this.testModuleValue("selectedArea", this.SListBox1.selected)) {
                            this.setModuleValue("selectedArea", this.SListBox1.selected);
                            this.setModuleValue("selectedTopic", null);
                            this.SListBox2.initFromDataSource(this.SListBox1.selected.value);
                            this.SListBox3.resetInitState();
                            this.nextTrack();
                        }
                        break;
                    case "SListBox2":
                        if (!this.testModuleValue("selectedTopic", this.SListBox2.selected)) {
                            this.setModuleValue("selectedTopic", this.SListBox2.selected);
                            this.setModuleValue("selectedVariable", null);
                            this.SListBox3.initFromDataSource(this.SListBox2.selected.value);
                            this.nextTrack();
                        }
                        break;
                    case "SListBox3":
                        if (!this.testModuleValue("selectedVariable", this.SListBox3.selected)) {
                            this.setModuleValue("selectedVariable", this.SListBox3.selected);
                            this.nextTrack();
                        }
                        break;
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
//# sourceMappingURL=mixins.js.map