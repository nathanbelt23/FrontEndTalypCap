import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
export declare const SELECTBUTTON_VALUE_ACCESSOR: any;
export declare class SelectButton implements ControlValueAccessor {
    cd: ChangeDetectorRef;
    options: any[];
    optionLabel: string;
    optionValue: string;
    optionDisabled: string;
    tabindex: number;
    multiple: boolean;
    style: any;
    styleClass: string;
    ariaLabelledBy: string;
    disabled: boolean;
    dataKey: string;
    onOptionClick: EventEmitter<any>;
    onChange: EventEmitter<any>;
    itemTemplate: any;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    constructor(cd: ChangeDetectorRef);
    getOptionLabel(option: any): any;
    getOptionValue(option: any): any;
    isOptionDisabled(option: any): any;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onItemClick(event: any, option: any, index: number): void;
    onBlur(): void;
    removeOption(option: any): void;
    isSelected(option: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SelectButton, "p-selectButton", never, { "tabindex": "tabindex"; "disabled": "disabled"; "options": "options"; "optionLabel": "optionLabel"; "optionValue": "optionValue"; "optionDisabled": "optionDisabled"; "multiple": "multiple"; "style": "style"; "styleClass": "styleClass"; "ariaLabelledBy": "ariaLabelledBy"; "dataKey": "dataKey"; }, { "onOptionClick": "onOptionClick"; "onChange": "onChange"; }, ["itemTemplate"], never>;
}
export declare class SelectButtonModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<SelectButtonModule, [typeof SelectButton], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.RippleModule], [typeof SelectButton]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<SelectButtonModule>;
}

//# sourceMappingURL=selectbutton.d.ts.map