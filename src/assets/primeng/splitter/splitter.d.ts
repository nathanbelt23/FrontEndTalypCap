import { QueryList, ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/api';
export declare class Splitter {
    cd: ChangeDetectorRef;
    private el;
    styleClass: string;
    panelStyleClass: string;
    style: any;
    stateStorage: string;
    stateKey: string;
    layout: string;
    gutterSize: number;
    panelSizes: number[];
    minSizes: number[];
    onResizeEnd: EventEmitter<any>;
    templates: QueryList<any>;
    containerViewChild: ElementRef;
    nested: boolean;
    panels: any[];
    dragging: boolean;
    mouseMoveListener: any;
    mouseUpListener: any;
    touchMoveListener: any;
    touchEndListener: any;
    size: any;
    gutterElement: any;
    startPos: any;
    prevPanelElement: any;
    nextPanelElement: any;
    nextPanelSize: any;
    prevPanelSize: any;
    _panelSizes: any;
    prevPanelIndex: any;
    constructor(cd: ChangeDetectorRef, el: ElementRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    onResizeStart(event: any, index: any): void;
    onResize(event: any): void;
    resizeEnd(event: any): void;
    onGutterMouseDown(event: any, index: any): void;
    onGutterTouchStart(event: any, index: any): void;
    onGutterTouchEnd(event: any): void;
    validateResize(newPrevPanelSize: any, newNextPanelSize: any): boolean;
    bindMouseListeners(): void;
    bindTouchListeners(): void;
    unbindMouseListeners(): void;
    unbindTouchListeners(): void;
    clear(): void;
    isNested(): boolean;
    isStateful(): boolean;
    getStorage(): Storage;
    saveState(): void;
    restoreState(): boolean;
    containerClass(): {
        'p-splitter p-component': boolean;
        'p-splitter-horizontal': boolean;
        'p-splitter-vertical': boolean;
    };
    panelContainerClass(): {
        'p-splitter-panel': boolean;
        'p-splitter-panel-nested': boolean;
    };
    gutterStyle(): {
        width: string;
        height?: undefined;
    } | {
        height: string;
        width?: undefined;
    };
    horizontal(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Splitter, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Splitter, "p-splitter", never, { "stateStorage": "stateStorage"; "stateKey": "stateKey"; "layout": "layout"; "gutterSize": "gutterSize"; "panelSizes": "panelSizes"; "minSizes": "minSizes"; "styleClass": "styleClass"; "panelStyleClass": "panelStyleClass"; "style": "style"; }, { "onResizeEnd": "onResizeEnd"; }, ["templates"], never>;
}
export declare class SplitterModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<SplitterModule, [typeof Splitter], [typeof ɵngcc1.CommonModule], [typeof Splitter, typeof ɵngcc2.SharedModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<SplitterModule>;
}

//# sourceMappingURL=splitter.d.ts.map