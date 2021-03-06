import { ElementRef, AfterViewInit, OnDestroy, Renderer2, NgZone, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MenuItem, ContextMenuService } from 'primeng/api';
import { Subject, Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';
import * as ɵngcc3 from 'primeng/ripple';
export declare class ContextMenuSub {
    item: MenuItem;
    root: boolean;
    parentItemKey: any;
    leafClick: EventEmitter<any>;
    sublistViewChild: ElementRef;
    menuitemViewChild: ElementRef;
    contextMenu: ContextMenu;
    activeItemKey: string;
    hideTimeout: any;
    activeItemKeyChangeSubscription: Subscription;
    constructor(contextMenu: any);
    ngOnInit(): void;
    onItemMouseEnter(event: any, item: any, key: any): void;
    onItemMouseLeave(event: any, item: any): void;
    onItemClick(event: any, item: any, menuitem: any, key: any): void;
    onLeafClick(): void;
    getKey(index: any): string;
    isActive(key: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ContextMenuSub, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ContextMenuSub, "p-contextMenuSub", never, { "item": "item"; "root": "root"; "parentItemKey": "parentItemKey"; }, { "leafClick": "leafClick"; }, never, never>;
}
export declare class ContextMenu implements AfterViewInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    zone: NgZone;
    contextMenuService: ContextMenuService;
    model: MenuItem[];
    global: boolean;
    target: any;
    style: any;
    styleClass: string;
    appendTo: any;
    autoZIndex: boolean;
    baseZIndex: number;
    triggerEvent: string;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    containerViewChild: ElementRef;
    documentClickListener: any;
    documentKeydownListener: any;
    windowResizeListener: any;
    triggerEventListener: any;
    ngDestroy$: Subject<unknown>;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, zone: NgZone, contextMenuService: ContextMenuService);
    ngAfterViewInit(): void;
    show(event?: MouseEvent): void;
    hide(): void;
    moveOnTop(): void;
    toggle(event?: MouseEvent): void;
    position(event?: MouseEvent): void;
    positionSubmenu(sublist: any): void;
    isItemMatched(menuitem: any): boolean;
    findNextItem(menuitem: any, isRepeated?: any): any;
    findPrevItem(menuitem: any, isRepeated?: any): any;
    getActiveItem(): any;
    clearActiveItem(): void;
    removeActiveFromSubLists(el: any): void;
    removeActiveFromSublist(menuitem: any): void;
    bindGlobalListeners(): void;
    findModelItemFromKey(key: any): any;
    handleItemClick(event: any, item: any, menuitem: any): void;
    unbindGlobalListeners(): void;
    onWindowResize(event: any): void;
    isOutsideClicked(event: Event): boolean;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ContextMenu, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ContextMenu, "p-contextMenu", never, { "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "triggerEvent": "triggerEvent"; "model": "model"; "global": "global"; "target": "target"; "style": "style"; "styleClass": "styleClass"; "appendTo": "appendTo"; }, { "onShow": "onShow"; "onHide": "onHide"; }, never, never>;
}
export declare class ContextMenuModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ContextMenuModule, [typeof ContextMenu, typeof ContextMenuSub], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.RouterModule, typeof ɵngcc3.RippleModule], [typeof ContextMenu, typeof ɵngcc2.RouterModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ContextMenuModule>;
}

//# sourceMappingURL=contextmenu.d.ts.map