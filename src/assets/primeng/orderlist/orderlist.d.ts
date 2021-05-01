import { ElementRef, AfterViewChecked, AfterContentInit, QueryList, TemplateRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FilterService } from 'primeng/api';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';
import * as ɵngcc3 from 'primeng/api';
import * as ɵngcc4 from 'primeng/ripple';
import * as ɵngcc5 from '@angular/cdk/drag-drop';
export declare class OrderList implements AfterViewChecked, AfterContentInit {
    el: ElementRef;
    cd: ChangeDetectorRef;
    filterService: FilterService;
    header: string;
    style: any;
    styleClass: string;
    listStyle: any;
    responsive: boolean;
    filterBy: string;
    filterPlaceholder: string;
    filterLocale: string;
    metaKeySelection: boolean;
    dragdrop: boolean;
    controlsPosition: string;
    ariaFilterLabel: string;
    filterMatchMode: string;
    breakpoint: string;
    selectionChange: EventEmitter<any>;
    trackBy: Function;
    onReorder: EventEmitter<any>;
    onSelectionChange: EventEmitter<any>;
    onFilterEvent: EventEmitter<any>;
    listViewChild: ElementRef;
    templates: QueryList<any>;
    itemTemplate: TemplateRef<any>;
    _selection: any[];
    movedUp: boolean;
    movedDown: boolean;
    itemTouched: boolean;
    styleElement: any;
    id: string;
    filterValue: string;
    visibleOptions: any[];
    _value: any[];
    constructor(el: ElementRef, cd: ChangeDetectorRef, filterService: FilterService);
    get selection(): any[];
    set selection(val: any[]);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    get value(): any[];
    set value(val: any[]);
    onItemClick(event: any, item: any, index: any): void;
    onFilterKeyup(event: any): void;
    filter(): void;
    isItemVisible(item: any): boolean;
    onItemTouchEnd(): void;
    isSelected(item: any): boolean;
    moveUp(): void;
    moveTop(): void;
    moveDown(): void;
    moveBottom(): void;
    onDrop(event: CdkDragDrop<string[]>): void;
    onItemKeydown(event: KeyboardEvent, item: any, index: Number): void;
    findNextItem(item: any): any;
    findPrevItem(item: any): any;
    createStyle(): void;
    destroyStyle(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderList, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderList, "p-orderList", never, { "metaKeySelection": "metaKeySelection"; "dragdrop": "dragdrop"; "controlsPosition": "controlsPosition"; "filterMatchMode": "filterMatchMode"; "breakpoint": "breakpoint"; "trackBy": "trackBy"; "selection": "selection"; "value": "value"; "header": "header"; "style": "style"; "styleClass": "styleClass"; "listStyle": "listStyle"; "responsive": "responsive"; "filterBy": "filterBy"; "filterPlaceholder": "filterPlaceholder"; "filterLocale": "filterLocale"; "ariaFilterLabel": "ariaFilterLabel"; }, { "selectionChange": "selectionChange"; "onReorder": "onReorder"; "onSelectionChange": "onSelectionChange"; "onFilterEvent": "onFilterEvent"; }, ["templates"], never>;
}
export declare class OrderListModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<OrderListModule, [typeof OrderList], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.ButtonModule, typeof ɵngcc3.SharedModule, typeof ɵngcc4.RippleModule, typeof ɵngcc5.DragDropModule], [typeof OrderList, typeof ɵngcc3.SharedModule, typeof ɵngcc5.DragDropModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<OrderListModule>;
}

//# sourceMappingURL=orderlist.d.ts.map