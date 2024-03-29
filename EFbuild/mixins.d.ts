declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class CONST {
        static readonly TUTORCONTAINER = "STutorContainer";
        static readonly NAVNONE = 0;
        static readonly NAVBACK = 1;
        static readonly NAVNEXT = 2;
        static readonly NAVBOTH = 3;
        static readonly NEXTSCENE = "nextbutton";
        static readonly PREVSCENE = "prevbutton";
        static readonly HIDE = false;
        static readonly SHOW = true;
        static readonly NAVSCENE = "SCENE";
        static readonly NAVTUTOR = "TUTOR";
        static readonly MOUSE_MOVE: string;
        static readonly MOUSE_DOWN: string;
        static readonly MOUSE_UP: string;
        static readonly MOUSE_CLICK: string;
        static readonly DOUBLE_CLICK: string;
        static readonly ALL: string;
        static readonly CLICK: string;
        static readonly CHANGED: string;
        static readonly FTRS_ALL: any;
        static readonly VAR_FTR = "varsel";
        static readonly YELLOW = "#FFFF54";
        static readonly BLUE = "#B6FFFF";
        static readonly GREEN = "#54FF00";
        static readonly RED = "#FF0054";
        static readonly LBGREEN = "#009900";
        static readonly LBRED = "#CC0000";
        static readonly NONE = "";
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class $Common {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $preEnterScene(): void;
        $onEnterScene(): void;
        $preExitScene(): void;
        $onExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(id: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $canGoBack(): boolean;
        $updateNav(): void;
        $generateExpt(name: string, offNewTV: number, ...offConf: Array<number>): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class Globals {
        $var1: string;
        [key: string]: any;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SNavigator {
        [key: string]: any;
        $preCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene1 {
        [key: string]: any;
        $IvIndex: number;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene10 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene11 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene12 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene12A {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene13 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene14 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene15 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene16 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene17 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene18 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene19 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene1a {
        [key: string]: any;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $handleEvent(): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $nodeAction(actionId: string): void;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene2 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene20 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene21 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene3 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene4 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene5 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene6 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene7 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene8 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SScene9 {
        [key: string]: any;
        static $QuestionNdx: number;
        $QuestionId: string;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDInstr {
    class SSceneStart {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
