import { AfterViewInit, OnDestroy, ElementRef, NgZone, ChangeDetectorRef, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class ScrollPanel implements AfterViewInit, AfterContentInit, OnDestroy {
    el: ElementRef;
    zone: NgZone;
    cd: ChangeDetectorRef;
    style: any;
    styleClass: string;
    constructor(el: ElementRef, zone: NgZone, cd: ChangeDetectorRef);
    containerViewChild: ElementRef;
    contentViewChild: ElementRef;
    xBarViewChild: ElementRef;
    yBarViewChild: ElementRef;
    templates: QueryList<any>;
    scrollYRatio: number;
    scrollXRatio: number;
    timeoutFrame: any;
    initialized: boolean;
    lastPageY: number;
    lastPageX: number;
    isXBarClicked: boolean;
    isYBarClicked: boolean;
    contentTemplate: TemplateRef<any>;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    calculateContainerHeight(): void;
    moveBar(): void;
    onYBarMouseDown(e: MouseEvent): void;
    onXBarMouseDown(e: MouseEvent): void;
    onDocumentMouseMove(e: MouseEvent): void;
    onMouseMoveForXBar(e: MouseEvent): void;
    onMouseMoveForYBar(e: MouseEvent): void;
    scrollTop(scrollTop: number): void;
    onDocumentMouseUp(e: Event): void;
    requestAnimationFrame(f: Function): void;
    ngOnDestroy(): void;
    refresh(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollPanel, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScrollPanel, "p-scrollPanel", never, { "style": "style"; "styleClass": "styleClass"; }, {}, ["templates"], ["*"]>;
}
export declare class ScrollPanelModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ScrollPanelModule, [typeof ScrollPanel], [typeof ɵngcc1.CommonModule], [typeof ScrollPanel]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ScrollPanelModule>;
}

//# sourceMappingURL=scrollpanel.d.ts.map