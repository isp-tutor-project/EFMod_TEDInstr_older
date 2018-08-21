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
            $demoInitScene() { }
            $logScene() { }
            $rewindScene() { }
            $resolveTemplate(templID) { }
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
                if (!this.sceneState.sceneComplete)
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
            $preCreateScene() {
                this.STable1.setOntology(this.getTutorState("areaTopic"));
            }
            $onCreateScene() {
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
                this.sceneState.sceneComplete = false;
                this.$updateNav();
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
                this.setTutorState("areaOfScience", this.sceneState.areaOfScience);
                this.setTutorState("areaTopic", this.sceneState.areaTopic);
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
                switch (nodeId) {
                    default:
                        this.sceneState.areaChanged = false;
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
                        result = this.sceneState.areaChanged;
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
                if (this.sceneState.areaOfScience && this.sceneState.areaTopic) {
                    this.sceneState.sceneComplete = true;
                }
                this.$updateNav();
                return this.sceneState.sceneComplete;
            }
            $onSelect(target) {
                switch (target) {
                    case "SListBox1":
                        if (this.sceneState.areaOfScience != this.SListBox1.selected.value.areaOfScience) {
                            this.sceneState.areaOfScience = this.SListBox1.selected.value.areaOfScience;
                            this.sceneState.areaChanged = true;
                            this.sceneState.areaTopic = null;
                            this.SListBox2.initFromDataSource(this.SListBox1.selected.data.value);
                            this.nextTrack();
                        }
                        break;
                    case "SListBox2":
                        this.sceneState.areaTopic = this.SListBox2.selected.data.value;
                        this.nextTrack();
                        break;
                }
                this.$queryFinished();
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
//# sourceMappingURL=mixins.js.map