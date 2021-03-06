import { OnDestroy, AfterViewInit, ElementRef, EventEmitter, NgZone } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class Draggable implements AfterViewInit, OnDestroy {
    el: ElementRef;
    zone: NgZone;
    scope: string;
    dragEffect: string;
    dragHandle: string;
    onDragStart: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDrag: EventEmitter<any>;
    handle: any;
    dragListener: any;
    mouseDownListener: any;
    mouseUpListener: any;
    _pDraggableDisabled: boolean;
    constructor(el: ElementRef, zone: NgZone);
    get pDraggableDisabled(): boolean;
    set pDraggableDisabled(_pDraggableDisabled: boolean);
    ngAfterViewInit(): void;
    bindDragListener(): void;
    unbindDragListener(): void;
    bindMouseListeners(): void;
    unbindMouseListeners(): void;
    drag(event: any): void;
    dragStart(event: any): void;
    dragEnd(event: any): void;
    mousedown(event: any): void;
    mouseup(event: any): void;
    allowDrag(): boolean;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Draggable, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Draggable, "[pDraggable]", never, { "pDraggableDisabled": "pDraggableDisabled"; "scope": "pDraggable"; "dragEffect": "dragEffect"; "dragHandle": "dragHandle"; }, { "onDragStart": "onDragStart"; "onDragEnd": "onDragEnd"; "onDrag": "onDrag"; }, never>;
}
export declare class Droppable implements AfterViewInit, OnDestroy {
    el: ElementRef;
    zone: NgZone;
    scope: string | string[];
    pDroppableDisabled: boolean;
    dropEffect: string;
    onDragEnter: EventEmitter<any>;
    onDragLeave: EventEmitter<any>;
    onDrop: EventEmitter<any>;
    constructor(el: ElementRef, zone: NgZone);
    dragOverListener: any;
    ngAfterViewInit(): void;
    bindDragOverListener(): void;
    unbindDragOverListener(): void;
    dragOver(event: any): void;
    drop(event: any): void;
    dragEnter(event: any): void;
    dragLeave(event: any): void;
    allowDrop(event: any): boolean;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Droppable, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Droppable, "[pDroppable]", never, { "scope": "pDroppable"; "pDroppableDisabled": "pDroppableDisabled"; "dropEffect": "dropEffect"; }, { "onDragEnter": "onDragEnter"; "onDragLeave": "onDragLeave"; "onDrop": "onDrop"; }, never>;
}
export declare class DragDropModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<DragDropModule, [typeof Draggable, typeof Droppable], [typeof ɵngcc1.CommonModule], [typeof Draggable, typeof Droppable]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<DragDropModule>;
}

//# sourceMappingURL=dragdrop.d.ts.map