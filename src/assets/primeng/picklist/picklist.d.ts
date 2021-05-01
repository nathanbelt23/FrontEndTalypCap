import { ElementRef, AfterContentInit, AfterViewChecked, QueryList, TemplateRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FilterService } from 'primeng/api';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';
import * as ɵngcc3 from 'primeng/api';
import * as ɵngcc4 from 'primeng/ripple';
import * as ɵngcc5 from '@angular/cdk/drag-drop';
export declare class PickList implements AfterViewChecked, AfterContentInit {
    el: ElementRef;
    cd: ChangeDetectorRef;
    filterService: FilterService;
    source: any[];
    target: any[];
    sourceHeader: string;
    targetHeader: string;
    responsive: boolean;
    filterBy: string;
    filterLocale: string;
    trackBy: Function;
    sourceTrackBy: Function;
    targetTrackBy: Function;
    showSourceFilter: boolean;
    showTargetFilter: boolean;
    metaKeySelection: boolean;
    dragdrop: boolean;
    style: any;
    styleClass: string;
    sourceStyle: any;
    targetStyle: any;
    showSourceControls: boolean;
    showTargetControls: boolean;
    sourceFilterPlaceholder: string;
    targetFilterPlaceholder: string;
    disabled: boolean;
    ariaSourceFilterLabel: string;
    ariaTargetFilterLabel: string;
    filterMatchMode: string;
    breakpoint: string;
    onMoveToSource: EventEmitter<any>;
    onMoveAllToSource: EventEmitter<any>;
    onMoveAllToTarget: EventEmitter<any>;
    onMoveToTarget: EventEmitter<any>;
    onSourceReorder: EventEmitter<any>;
    onTargetReorder: EventEmitter<any>;
    onSourceSelect: EventEmitter<any>;
    onTargetSelect: EventEmitter<any>;
    onSourceFilter: EventEmitter<any>;
    onTargetFilter: EventEmitter<any>;
    listViewSourceChild: ElementRef;
    listViewTargetChild: ElementRef;
    sourceFilterViewChild: ElementRef;
    targetFilterViewChild: ElementRef;
    templates: QueryList<any>;
    itemTemplate: TemplateRef<any>;
    visibleOptionsSource: any[];
    visibleOptionsTarget: any[];
    selectedItemsSource: any[];
    selectedItemsTarget: any[];
    reorderedListElement: any;
    movedUp: boolean;
    movedDown: boolean;
    itemTouched: boolean;
    styleElement: any;
    id: string;
    filterValueSource: string;
    filterValueTarget: string;
    fromListType: number;
    emptyMessageSourceTemplate: TemplateRef<any>;
    emptyMessageTargetTemplate: TemplateRef<any>;
    readonly SOURCE_LIST = -1;
    readonly TARGET_LIST = 1;
    constructor(el: ElementRef, cd: ChangeDetectorRef, filterService: FilterService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    onItemClick(event: any, item: any, selectedItems: any[], callback: EventEmitter<any>): void;
    onSourceItemDblClick(): void;
    onTargetItemDblClick(): void;
    onFilter(event: KeyboardEvent, data: any[], listType: number): void;
    filter(data: any[], listType: number): void;
    isItemVisible(item: any, listType: number): boolean;
    isVisibleInList(data: any[], item: any, filterValue: string): boolean;
    onItemTouchEnd(): void;
    private sortByIndexInList;
    moveUp(listElement: any, list: any, selectedItems: any, callback: any, listType: any): void;
    moveTop(listElement: any, list: any, selectedItems: any, callback: any, listType: any): void;
    moveDown(listElement: any, list: any, selectedItems: any, callback: any, listType: any): void;
    moveBottom(listElement: any, list: any, selectedItems: any, callback: any, listType: any): void;
    moveRight(): void;
    moveAllRight(): void;
    moveLeft(): void;
    moveAllLeft(): void;
    isSelected(item: any, selectedItems: any[]): boolean;
    findIndexInSelection(item: any, selectedItems: any[]): number;
    onDrop(event: CdkDragDrop<string[]>, listType: number): void;
    getDropIndexes(fromIndex: any, toIndex: any, droppedList: any, isTransfer: any, data: any): {
        previousIndex: any;
        currentIndex: any;
    };
    findFilteredCurrentIndex(visibleOptions: any, index: any, options: any): number;
    resetFilter(): void;
    onItemKeydown(event: KeyboardEvent, item: any, selectedItems: any[], callback: EventEmitter<any>): void;
    findNextItem(item: any): any;
    findPrevItem(item: any): any;
    createStyle(): void;
    destroyStyle(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PickList, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PickList, "p-pickList", never, { "trackBy": "trackBy"; "showSourceFilter": "showSourceFilter"; "showTargetFilter": "showTargetFilter"; "metaKeySelection": "metaKeySelection"; "dragdrop": "dragdrop"; "showSourceControls": "showSourceControls"; "showTargetControls": "showTargetControls"; "disabled": "disabled"; "filterMatchMode": "filterMatchMode"; "breakpoint": "breakpoint"; "source": "source"; "target": "target"; "sourceHeader": "sourceHeader"; "targetHeader": "targetHeader"; "responsive": "responsive"; "filterBy": "filterBy"; "filterLocale": "filterLocale"; "sourceTrackBy": "sourceTrackBy"; "targetTrackBy": "targetTrackBy"; "style": "style"; "styleClass": "styleClass"; "sourceStyle": "sourceStyle"; "targetStyle": "targetStyle"; "sourceFilterPlaceholder": "sourceFilterPlaceholder"; "targetFilterPlaceholder": "targetFilterPlaceholder"; "ariaSourceFilterLabel": "ariaSourceFilterLabel"; "ariaTargetFilterLabel": "ariaTargetFilterLabel"; }, { "onMoveToSource": "onMoveToSource"; "onMoveAllToSource": "onMoveAllToSource"; "onMoveAllToTarget": "onMoveAllToTarget"; "onMoveToTarget": "onMoveToTarget"; "onSourceReorder": "onSourceReorder"; "onTargetReorder": "onTargetReorder"; "onSourceSelect": "onSourceSelect"; "onTargetSelect": "onTargetSelect"; "onSourceFilter": "onSourceFilter"; "onTargetFilter": "onTargetFilter"; }, ["templates"], never>;
}
export declare class PickListModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<PickListModule, [typeof PickList], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.ButtonModule, typeof ɵngcc3.SharedModule, typeof ɵngcc4.RippleModule, typeof ɵngcc5.DragDropModule], [typeof PickList, typeof ɵngcc3.SharedModule, typeof ɵngcc5.DragDropModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<PickListModule>;
}

//# sourceMappingURL=picklist.d.ts.map