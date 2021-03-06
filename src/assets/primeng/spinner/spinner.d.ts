import { ElementRef, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/inputtext';
export declare const SPINNER_VALUE_ACCESSOR: any;
export declare class Spinner implements OnInit, ControlValueAccessor {
    el: ElementRef;
    cd: ChangeDetectorRef;
    onChange: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    min: number;
    max: number;
    maxlength: number;
    size: number;
    placeholder: string;
    inputId: string;
    disabled: boolean;
    readonly: boolean;
    tabindex: number;
    required: boolean;
    name: string;
    ariaLabelledBy: string;
    inputStyle: any;
    inputStyleClass: string;
    formatInput: boolean;
    decimalSeparator: string;
    thousandSeparator: string;
    precision: number;
    value: any;
    _step: number;
    formattedValue: string;
    onModelChange: Function;
    onModelTouched: Function;
    keyPattern: RegExp;
    timer: any;
    focus: boolean;
    filled: boolean;
    negativeSeparator: string;
    localeDecimalSeparator: string;
    localeThousandSeparator: string;
    thousandRegExp: RegExp;
    calculatedPrecision: number;
    inputfieldViewChild: ElementRef;
    get step(): number;
    set step(val: number);
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    repeat(event: Event, interval: number, dir: number): void;
    spin(event: Event, dir: number): void;
    getPrecision(): number;
    toFixed(value: number, precision: number): string;
    onUpButtonMousedown(event: Event): void;
    onUpButtonMouseup(event: Event): void;
    onUpButtonMouseleave(event: Event): void;
    onDownButtonMousedown(event: Event): void;
    onDownButtonMouseup(event: Event): void;
    onDownButtonMouseleave(event: Event): void;
    onInputKeydown(event: KeyboardEvent): void;
    onInputChange(event: Event): void;
    onInput(event: KeyboardEvent): void;
    onInputBlur(event: any): void;
    onInputFocus(event: any): void;
    parseValue(val: string): number;
    formatValue(): void;
    clearTimer(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    updateFilledState(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Spinner, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Spinner, "p-spinner", never, { "step": "step"; "disabled": "disabled"; "min": "min"; "max": "max"; "maxlength": "maxlength"; "size": "size"; "placeholder": "placeholder"; "inputId": "inputId"; "readonly": "readonly"; "tabindex": "tabindex"; "required": "required"; "name": "name"; "ariaLabelledBy": "ariaLabelledBy"; "inputStyle": "inputStyle"; "inputStyleClass": "inputStyleClass"; "formatInput": "formatInput"; "decimalSeparator": "decimalSeparator"; "thousandSeparator": "thousandSeparator"; "precision": "precision"; }, { "onChange": "onChange"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, never, never>;
}
export declare class SpinnerModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<SpinnerModule, [typeof Spinner], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.InputTextModule], [typeof Spinner]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<SpinnerModule>;
}

//# sourceMappingURL=spinner.d.ts.map