import { ElementRef, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy, Renderer2, EventEmitter, ChangeDetectorRef, TemplateRef, QueryList } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { FilterService } from 'primeng/api';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/api';
import * as ɵngcc3 from '@angular/cdk/scrolling';
import * as ɵngcc4 from 'primeng/tooltip';
import * as ɵngcc5 from 'primeng/ripple';
export declare const MULTISELECT_VALUE_ACCESSOR: any;
export declare class MultiSelectItem {
    option: any;
    selected: boolean;
    label: any;
    disabled: boolean;
    itemSize: number;
    template: TemplateRef<any>;
    onClick: EventEmitter<any>;
    onKeydown: EventEmitter<any>;
    onOptionClick(event: Event): void;
    onOptionKeydown(event: Event): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiSelectItem, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MultiSelectItem, "p-multiSelectItem", never, { "option": "option"; "selected": "selected"; "label": "label"; "disabled": "disabled"; "itemSize": "itemSize"; "template": "template"; }, { "onClick": "onClick"; "onKeydown": "onKeydown"; }, never, never>;
}
export declare class MultiSelect implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy, ControlValueAccessor {
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    filterService: FilterService;
    style: any;
    styleClass: string;
    panelStyle: any;
    panelStyleClass: string;
    inputId: string;
    disabled: boolean;
    readonly: boolean;
    group: boolean;
    filter: boolean;
    filterPlaceHolder: string;
    filterLocale: string;
    overlayVisible: boolean;
    tabindex: number;
    appendTo: any;
    dataKey: string;
    name: string;
    ariaLabelledBy: string;
    displaySelectedLabel: boolean;
    maxSelectedLabels: number;
    selectionLimit: number;
    selectedItemsLabel: string;
    showToggleAll: boolean;
    emptyFilterMessage: string;
    resetFilterOnHide: boolean;
    dropdownIcon: string;
    optionLabel: string;
    optionValue: string;
    optionDisabled: string;
    optionGroupLabel: string;
    optionGroupChildren: string;
    showHeader: boolean;
    autoZIndex: boolean;
    baseZIndex: number;
    filterBy: string;
    virtualScroll: boolean;
    itemSize: number;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    ariaFilterLabel: string;
    filterMatchMode: string;
    tooltip: string;
    tooltipPosition: string;
    tooltipPositionStyle: string;
    tooltipStyleClass: string;
    autofocusFilter: boolean;
    display: string;
    containerViewChild: ElementRef;
    filterInputChild: ElementRef;
    accessibleViewChild: ElementRef;
    footerFacet: any;
    headerFacet: any;
    templates: QueryList<any>;
    onChange: EventEmitter<any>;
    onFilter: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    onClick: EventEmitter<any>;
    onPanelShow: EventEmitter<any>;
    onPanelHide: EventEmitter<any>;
    scrollHeight: string;
    _defaultLabel: string;
    set defaultLabel(val: string);
    get defaultLabel(): string;
    _placeholder: string;
    set placeholder(val: string);
    get placeholder(): string;
    get options(): any[];
    set options(val: any[]);
    get filterValue(): string;
    set filterValue(val: string);
    value: any[];
    _filteredOptions: any[];
    onModelChange: Function;
    onModelTouched: Function;
    overlay: HTMLDivElement;
    valuesAsString: string;
    focus: boolean;
    filled: boolean;
    documentClickListener: any;
    _filterValue: string;
    filtered: boolean;
    itemTemplate: TemplateRef<any>;
    groupTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    selectedItemsTemplate: TemplateRef<any>;
    headerCheckboxFocus: boolean;
    _options: any[];
    maxSelectionLimitReached: boolean;
    scrollHandler: any;
    documentResizeListener: any;
    preventModelTouched: boolean;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, filterService: FilterService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    getOptionLabel(option: any): any;
    getOptionValue(option: any): any;
    getOptionGroupLabel(optionGroup: any): any;
    getOptionGroupChildren(optionGroup: any): any;
    isOptionDisabled(option: any): any;
    writeValue(value: any): void;
    checkSelectionLimit(): void;
    updateFilledState(): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onOptionClick(event: any): void;
    isSelected(option: any): boolean;
    findSelectionIndex(val: any): number;
    get toggleAllDisabled(): boolean;
    toggleAll(event: any): void;
    checkAll(): void;
    uncheckAll(): void;
    show(): void;
    onOverlayAnimationStart(event: AnimationEvent): void;
    appendOverlay(): void;
    restoreOverlayAppend(): void;
    alignOverlay(): void;
    hide(): void;
    close(event: any): void;
    onMouseclick(event: MouseEvent, input: any): void;
    removeChip(chip: any, event: MouseEvent): void;
    isOverlayClick(event: MouseEvent): boolean;
    isOutsideClicked(event: MouseEvent): boolean;
    onInputFocus(event: any): void;
    onInputBlur(event: any): void;
    onOptionKeydown(event: any): void;
    findNextItem(item: any): any;
    findPrevItem(item: any): any;
    onKeydown(event: KeyboardEvent): void;
    updateLabel(): void;
    findLabelByValue(val: any): string;
    searchLabelByValue(val: any, options: any[]): string;
    get allChecked(): boolean;
    get optionsToRender(): any[];
    get emptyOptions(): boolean;
    hasFilter(): boolean;
    onFilterInputChange(event: KeyboardEvent): void;
    activateFilter(): void;
    onHeaderCheckboxFocus(): void;
    onHeaderCheckboxBlur(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    onWindowResize(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    onOverlayHide(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiSelect, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MultiSelect, "p-multiSelect", never, { "filter": "filter"; "displaySelectedLabel": "displaySelectedLabel"; "maxSelectedLabels": "maxSelectedLabels"; "selectedItemsLabel": "selectedItemsLabel"; "showToggleAll": "showToggleAll"; "emptyFilterMessage": "emptyFilterMessage"; "resetFilterOnHide": "resetFilterOnHide"; "dropdownIcon": "dropdownIcon"; "optionGroupChildren": "optionGroupChildren"; "showHeader": "showHeader"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "showTransitionOptions": "showTransitionOptions"; "hideTransitionOptions": "hideTransitionOptions"; "filterMatchMode": "filterMatchMode"; "tooltip": "tooltip"; "tooltipPosition": "tooltipPosition"; "tooltipPositionStyle": "tooltipPositionStyle"; "autofocusFilter": "autofocusFilter"; "display": "display"; "scrollHeight": "scrollHeight"; "defaultLabel": "defaultLabel"; "placeholder": "placeholder"; "options": "options"; "filterValue": "filterValue"; "disabled": "disabled"; "overlayVisible": "overlayVisible"; "style": "style"; "styleClass": "styleClass"; "panelStyle": "panelStyle"; "panelStyleClass": "panelStyleClass"; "inputId": "inputId"; "readonly": "readonly"; "group": "group"; "filterPlaceHolder": "filterPlaceHolder"; "filterLocale": "filterLocale"; "tabindex": "tabindex"; "appendTo": "appendTo"; "dataKey": "dataKey"; "name": "name"; "ariaLabelledBy": "ariaLabelledBy"; "selectionLimit": "selectionLimit"; "optionLabel": "optionLabel"; "optionValue": "optionValue"; "optionDisabled": "optionDisabled"; "optionGroupLabel": "optionGroupLabel"; "filterBy": "filterBy"; "virtualScroll": "virtualScroll"; "itemSize": "itemSize"; "ariaFilterLabel": "ariaFilterLabel"; "tooltipStyleClass": "tooltipStyleClass"; }, { "onChange": "onChange"; "onFilter": "onFilter"; "onFocus": "onFocus"; "onBlur": "onBlur"; "onClick": "onClick"; "onPanelShow": "onPanelShow"; "onPanelHide": "onPanelHide"; }, ["footerFacet", "headerFacet", "templates"], ["p-header", "p-footer"]>;
}
export declare class MultiSelectModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<MultiSelectModule, [typeof MultiSelect, typeof MultiSelectItem], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.SharedModule, typeof ɵngcc3.ScrollingModule, typeof ɵngcc4.TooltipModule, typeof ɵngcc5.RippleModule], [typeof MultiSelect, typeof ɵngcc2.SharedModule, typeof ɵngcc3.ScrollingModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<MultiSelectModule>;
}

//# sourceMappingURL=multiselect.d.ts.map