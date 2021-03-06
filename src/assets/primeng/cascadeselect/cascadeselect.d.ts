import { TemplateRef, QueryList, ElementRef, EventEmitter, ChangeDetectorRef, OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/api';
import * as ɵngcc3 from 'primeng/ripple';
export declare const CASCADESELECT_VALUE_ACCESSOR: any;
export declare class CascadeSelectSub implements OnInit {
    private el;
    selectionPath: any[];
    options: any[];
    optionGroupChildren: any[];
    optionTemplate: TemplateRef<any>;
    level: number;
    optionLabel: string;
    optionValue: string;
    optionGroupLabel: string;
    dirty: boolean;
    root: boolean;
    onSelect: EventEmitter<any>;
    onGroupSelect: EventEmitter<any>;
    get parentActive(): boolean;
    set parentActive(val: boolean);
    activeOption: any;
    _parentActive: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    onOptionClick(event: any, option: any): void;
    onOptionSelect(event: any): void;
    onOptionGroupSelect(event: any): void;
    getOptionLabel(option: any): any;
    getOptionValue(option: any): any;
    getOptionGroupLabel(optionGroup: any): any;
    getOptionGroupChildren(optionGroup: any): any;
    isOptionGroup(option: any): any;
    getOptionLabelToRender(option: any): any;
    getItemClass(option: any): {
        'p-cascadeselect-item': boolean;
        'p-cascadeselect-item-group': any;
        'p-cascadeselect-item-active p-highlight': boolean;
    };
    isOptionActive(option: any): boolean;
    onKeyDown(event: any, option: any, index: any): void;
    position(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CascadeSelectSub, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CascadeSelectSub, "p-cascadeSelectSub", never, { "level": "level"; "parentActive": "parentActive"; "selectionPath": "selectionPath"; "options": "options"; "optionGroupChildren": "optionGroupChildren"; "optionTemplate": "optionTemplate"; "optionLabel": "optionLabel"; "optionValue": "optionValue"; "optionGroupLabel": "optionGroupLabel"; "dirty": "dirty"; "root": "root"; }, { "onSelect": "onSelect"; "onGroupSelect": "onGroupSelect"; }, never, never>;
}
export declare class CascadeSelect implements OnInit, AfterContentInit, OnDestroy {
    private el;
    private cd;
    styleClass: string;
    style: any;
    options: any[];
    optionLabel: string;
    optionValue: string;
    optionGroupLabel: string;
    optionGroupChildren: any[];
    placeholder: string;
    value: string;
    dataKey: string;
    inputId: string;
    tabindex: string;
    ariaLabelledBy: string;
    appendTo: any;
    disabled: boolean;
    rounded: boolean;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    focusInputEl: ElementRef;
    containerEl: ElementRef;
    onChange: EventEmitter<any>;
    onGroupChange: EventEmitter<any>;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    onBeforeShow: EventEmitter<any>;
    onBeforeHide: EventEmitter<any>;
    templates: QueryList<any>;
    selectionPath: any;
    focused: boolean;
    filled: boolean;
    overlayVisible: boolean;
    dirty: boolean;
    valueTemplate: TemplateRef<any>;
    optionTemplate: TemplateRef<any>;
    outsideClickListener: any;
    scrollHandler: any;
    resizeListener: any;
    overlayEl: any;
    onModelChange: Function;
    onModelTouched: Function;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onOptionSelect(event: any): void;
    onOptionGroupSelect(event: any): void;
    getOptionLabel(option: any): any;
    getOptionValue(option: any): any;
    getOptionGroupChildren(optionGroup: any, level: any): any;
    isOptionGroup(option: any, level: any): any;
    updateSelectionPath(): void;
    updateFilledState(): void;
    findModelOptionInGroup(option: any, level: any): any;
    show(): void;
    hide(): void;
    onClick(event: any): void;
    onFocus(): void;
    onBlur(): void;
    onOverlayAnimationStart(event: AnimationEvent): void;
    onOverlayAnimationDone(event: AnimationEvent): void;
    onOverlayEnter(): void;
    onOverlayLeave(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    alignOverlay(): void;
    bindOutsideClickListener(): void;
    unbindOutsideClickListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    bindResizeListener(): void;
    unbindResizeListener(): void;
    appendContainer(): void;
    restoreAppend(): void;
    label(): any;
    onKeyDown(event: any): void;
    containerClass(): {
        'p-cascadeselect p-component p-inputwrapper': boolean;
        'p-disabled': boolean;
        'p-focus': boolean;
    };
    labelClass(): {
        'p-cascadeselect-label': boolean;
        'p-placeholder': boolean;
        'p-cascadeselect-label-empty': boolean;
    };
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CascadeSelect, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CascadeSelect, "p-cascadeSelect", never, { "showTransitionOptions": "showTransitionOptions"; "hideTransitionOptions": "hideTransitionOptions"; "value": "value"; "disabled": "disabled"; "styleClass": "styleClass"; "style": "style"; "options": "options"; "optionLabel": "optionLabel"; "optionValue": "optionValue"; "optionGroupLabel": "optionGroupLabel"; "optionGroupChildren": "optionGroupChildren"; "placeholder": "placeholder"; "dataKey": "dataKey"; "inputId": "inputId"; "tabindex": "tabindex"; "ariaLabelledBy": "ariaLabelledBy"; "appendTo": "appendTo"; "rounded": "rounded"; }, { "onChange": "onChange"; "onGroupChange": "onGroupChange"; "onShow": "onShow"; "onHide": "onHide"; "onBeforeShow": "onBeforeShow"; "onBeforeHide": "onBeforeHide"; }, ["templates"], never>;
}
export declare class CascadeSelectModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CascadeSelectModule, [typeof CascadeSelect, typeof CascadeSelectSub], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.SharedModule, typeof ɵngcc3.RippleModule], [typeof CascadeSelect, typeof CascadeSelectSub, typeof ɵngcc2.SharedModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CascadeSelectModule>;
}

//# sourceMappingURL=cascadeselect.d.ts.map