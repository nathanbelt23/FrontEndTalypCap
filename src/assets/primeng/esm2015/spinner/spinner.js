import { NgModule, Component, ElementRef, Input, Output, EventEmitter, forwardRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["inputfield"];
const _c1 = function (a1) { return { "ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default": true, "ui-state-disabled": a1 }; };
const _c2 = function (a1) { return { "ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default": true, "ui-state-disabled": a1 }; };
export const SPINNER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Spinner),
    multi: true
};
export class Spinner {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this._step = 1;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.keyPattern = /[0-9\+\-]/;
        this.negativeSeparator = '-';
    }
    get step() {
        return this._step;
    }
    set step(val) {
        this._step = val;
        if (this._step != null) {
            let tokens = this.step.toString().split(/[,]|[.]/);
            this.calculatedPrecision = tokens[1] ? tokens[1].length : undefined;
        }
    }
    ngOnInit() {
        if (this.formatInput) {
            this.localeDecimalSeparator = (1.1).toLocaleString().substring(1, 2);
            this.localeThousandSeparator = (1000).toLocaleString().substring(1, 2);
            this.thousandRegExp = new RegExp(`[${this.thousandSeparator || this.localeThousandSeparator}]`, 'gim');
            if (this.decimalSeparator && this.thousandSeparator && this.decimalSeparator === this.thousandSeparator) {
                console.warn("thousandSeparator and decimalSeparator cannot have the same value.");
            }
        }
    }
    repeat(event, interval, dir) {
        let i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(() => {
            this.repeat(event, 40, dir);
        }, i);
        this.spin(event, dir);
    }
    spin(event, dir) {
        let step = this.step * dir;
        let currentValue;
        let precision = this.getPrecision();
        if (this.value)
            currentValue = (typeof this.value === 'string') ? this.parseValue(this.value) : this.value;
        else
            currentValue = 0;
        if (precision)
            this.value = parseFloat(this.toFixed(currentValue + step, precision));
        else
            this.value = currentValue + step;
        if (this.maxlength !== undefined && this.value.toString().length > this.maxlength) {
            this.value = currentValue;
        }
        if (this.min !== undefined && this.value < this.min) {
            this.value = this.min;
        }
        if (this.max !== undefined && this.value > this.max) {
            this.value = this.max;
        }
        this.formatValue();
        this.onModelChange(this.value);
        this.onChange.emit(event);
    }
    getPrecision() {
        return this.precision === undefined ? this.calculatedPrecision : this.precision;
    }
    toFixed(value, precision) {
        let power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
    }
    onUpButtonMousedown(event) {
        if (!this.disabled) {
            this.inputfieldViewChild.nativeElement.focus();
            this.repeat(event, null, 1);
            this.updateFilledState();
            event.preventDefault();
        }
    }
    onUpButtonMouseup(event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    }
    onUpButtonMouseleave(event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    }
    onDownButtonMousedown(event) {
        if (!this.disabled) {
            this.inputfieldViewChild.nativeElement.focus();
            this.repeat(event, null, -1);
            this.updateFilledState();
            event.preventDefault();
        }
    }
    onDownButtonMouseup(event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    }
    onDownButtonMouseleave(event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    }
    onInputKeydown(event) {
        if (event.which == 38) {
            this.spin(event, 1);
            event.preventDefault();
        }
        else if (event.which == 40) {
            this.spin(event, -1);
            event.preventDefault();
        }
    }
    onInputChange(event) {
        this.onChange.emit(event);
    }
    onInput(event) {
        this.value = this.parseValue(event.target.value);
        this.onModelChange(this.value);
        this.updateFilledState();
    }
    onInputBlur(event) {
        this.focus = false;
        this.formatValue();
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onInputFocus(event) {
        this.focus = true;
        this.onFocus.emit(event);
    }
    parseValue(val) {
        let value;
        let precision = this.getPrecision();
        if (val.trim() === '') {
            value = null;
        }
        else {
            if (this.formatInput) {
                val = val.replace(this.thousandRegExp, '');
            }
            if (precision) {
                val = this.formatInput ? val.replace(this.decimalSeparator || this.localeDecimalSeparator, '.') : val.replace(',', '.');
                value = parseFloat(val);
            }
            else {
                value = parseInt(val, 10);
            }
            if (!isNaN(value)) {
                if (this.max !== null && value > this.max) {
                    value = this.max;
                }
                if (this.min !== null && value < this.min) {
                    value = this.min;
                }
            }
            else {
                value = null;
            }
        }
        return value;
    }
    formatValue() {
        let value = this.value;
        let precision = this.getPrecision();
        if (value != null) {
            if (this.formatInput) {
                value = value.toLocaleString(undefined, { maximumFractionDigits: 20 });
                if (this.decimalSeparator && this.thousandSeparator) {
                    value = value.split(this.localeDecimalSeparator);
                    if (precision && value[1]) {
                        value[1] = (this.decimalSeparator || this.localeDecimalSeparator) + value[1];
                    }
                    if (this.thousandSeparator && value[0].length > 3) {
                        value[0] = value[0].replace(new RegExp(`[${this.localeThousandSeparator}]`, 'gim'), this.thousandSeparator);
                    }
                    value = value.join('');
                }
            }
            this.formattedValue = value.toString();
        }
        else {
            this.formattedValue = null;
        }
        if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
            this.inputfieldViewChild.nativeElement.value = this.formattedValue;
        }
    }
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    writeValue(value) {
        this.value = value;
        this.formatValue();
        this.updateFilledState();
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    updateFilledState() {
        this.filled = (this.value !== undefined && this.value != null);
    }
}
Spinner.ɵfac = function Spinner_Factory(t) { return new (t || Spinner)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Spinner.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Spinner, selectors: [["p-spinner"]], viewQuery: function Spinner_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputfieldViewChild = _t.first);
    } }, hostVars: 4, hostBindings: function Spinner_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ui-inputwrapper-filled", ctx.filled)("ui-inputwrapper-focus", ctx.focus);
    } }, inputs: { step: "step", disabled: "disabled", min: "min", max: "max", maxlength: "maxlength", size: "size", placeholder: "placeholder", inputId: "inputId", readonly: "readonly", tabindex: "tabindex", required: "required", name: "name", ariaLabelledBy: "ariaLabelledBy", inputStyle: "inputStyle", inputStyleClass: "inputStyleClass", formatInput: "formatInput", decimalSeparator: "decimalSeparator", thousandSeparator: "thousandSeparator", precision: "precision" }, outputs: { onChange: "onChange", onFocus: "onFocus", onBlur: "onBlur" }, features: [ɵngcc0.ɵɵProvidersFeature([SPINNER_VALUE_ACCESSOR])], decls: 7, vars: 28, consts: [[1, "ui-spinner", "ui-widget", "ui-corner-all"], ["type", "text", 3, "value", "disabled", "readonly", "ngStyle", "ngClass", "keydown", "blur", "input", "change", "focus"], ["inputfield", ""], ["type", "button", "tabindex", "-1", 3, "ngClass", "disabled", "mouseleave", "mousedown", "mouseup"], [1, "ui-spinner-button-icon", "pi", "pi-caret-up", "ui-clickable"], [1, "ui-spinner-button-icon", "pi", "pi-caret-down", "ui-clickable"]], template: function Spinner_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("keydown", function Spinner_Template_input_keydown_1_listener($event) { return ctx.onInputKeydown($event); })("blur", function Spinner_Template_input_blur_1_listener($event) { return ctx.onInputBlur($event); })("input", function Spinner_Template_input_input_1_listener($event) { return ctx.onInput($event); })("change", function Spinner_Template_input_change_1_listener($event) { return ctx.onInputChange($event); })("focus", function Spinner_Template_input_focus_1_listener($event) { return ctx.onInputFocus($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 3);
        ɵngcc0.ɵɵlistener("mouseleave", function Spinner_Template_button_mouseleave_3_listener($event) { return ctx.onUpButtonMouseleave($event); })("mousedown", function Spinner_Template_button_mousedown_3_listener($event) { return ctx.onUpButtonMousedown($event); })("mouseup", function Spinner_Template_button_mouseup_3_listener($event) { return ctx.onUpButtonMouseup($event); });
        ɵngcc0.ɵɵelement(4, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 3);
        ɵngcc0.ɵɵlistener("mouseleave", function Spinner_Template_button_mouseleave_5_listener($event) { return ctx.onDownButtonMouseleave($event); })("mousedown", function Spinner_Template_button_mousedown_5_listener($event) { return ctx.onDownButtonMousedown($event); })("mouseup", function Spinner_Template_button_mouseup_5_listener($event) { return ctx.onDownButtonMouseup($event); });
        ɵngcc0.ɵɵelement(6, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.inputStyleClass);
        ɵngcc0.ɵɵproperty("value", ctx.formattedValue || null)("disabled", ctx.disabled)("readonly", ctx.readonly)("ngStyle", ctx.inputStyle)("ngClass", "ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all");
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-valumin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("aria-labelledby", ctx.ariaLabelledBy)("size", ctx.size)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("placeholder", ctx.placeholder)("required", ctx.required);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(24, _c1, ctx.disabled))("disabled", ctx.disabled || ctx.readonly);
        ɵngcc0.ɵɵattribute("readonly", ctx.readonly);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(26, _c2, ctx.disabled))("disabled", ctx.disabled || ctx.readonly);
        ɵngcc0.ɵɵattribute("readonly", ctx.readonly);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass], styles: [".ui-spinner{display:inline-block;overflow:visible;padding:0;position:relative;vertical-align:middle}.ui-spinner-input{padding-right:1.5em;vertical-align:middle}.ui-spinner-button{cursor:default;display:block;height:50%;margin:0;overflow:hidden;padding:0;position:absolute;right:0;text-align:center;vertical-align:middle;width:1.5em}.ui-spinner .ui-spinner-button-icon{left:50%;margin-left:-.5em;margin-top:-.5em;position:absolute;top:50%;width:1em}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-fluid .ui-spinner{width:100%}.ui-fluid .ui-spinner .ui-spinner-input{padding-right:2em;width:100%}.ui-fluid .ui-spinner .ui-spinner-button{width:1.5em}.ui-fluid .ui-spinner .ui-spinner-button .ui-spinner-button-icon{left:.7em}"], encapsulation: 2, changeDetection: 0 });
Spinner.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
Spinner.propDecorators = {
    onChange: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    maxlength: [{ type: Input }],
    size: [{ type: Input }],
    placeholder: [{ type: Input }],
    inputId: [{ type: Input }],
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    tabindex: [{ type: Input }],
    required: [{ type: Input }],
    name: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    inputStyle: [{ type: Input }],
    inputStyleClass: [{ type: Input }],
    formatInput: [{ type: Input }],
    decimalSeparator: [{ type: Input }],
    thousandSeparator: [{ type: Input }],
    precision: [{ type: Input }],
    inputfieldViewChild: [{ type: ViewChild, args: ['inputfield',] }],
    step: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Spinner, [{
        type: Component,
        args: [{
                selector: 'p-spinner',
                template: `
        <span class="ui-spinner ui-widget ui-corner-all">
            <input #inputfield type="text" [attr.id]="inputId" [value]="formattedValue||null" [attr.name]="name" [attr.aria-valumin]="min" [attr.aria-valuemax]="max" [attr.aria-valuenow]="value" [attr.aria-labelledby]="ariaLabelledBy"
            [attr.size]="size" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [attr.placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly" [attr.required]="required"
            (keydown)="onInputKeydown($event)" (blur)="onInputBlur($event)" (input)="onInput($event)" (change)="onInputChange($event)" (focus)="onInputFocus($event)"
            [ngStyle]="inputStyle" [class]="inputStyleClass" [ngClass]="'ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all'">
            <button type="button" [ngClass]="{'ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}" [disabled]="disabled||readonly" tabindex="-1" [attr.readonly]="readonly"
                (mouseleave)="onUpButtonMouseleave($event)" (mousedown)="onUpButtonMousedown($event)" (mouseup)="onUpButtonMouseup($event)">
                <span class="ui-spinner-button-icon pi pi-caret-up ui-clickable"></span>
            </button>
            <button type="button" [ngClass]="{'ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}" [disabled]="disabled||readonly" tabindex="-1" [attr.readonly]="readonly"
                (mouseleave)="onDownButtonMouseleave($event)" (mousedown)="onDownButtonMousedown($event)" (mouseup)="onDownButtonMouseup($event)">
                <span class="ui-spinner-button-icon pi pi-caret-down ui-clickable"></span>
            </button>
        </span>
    `,
                host: {
                    '[class.ui-inputwrapper-filled]': 'filled',
                    '[class.ui-inputwrapper-focus]': 'focus'
                },
                providers: [SPINNER_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ui-spinner{display:inline-block;overflow:visible;padding:0;position:relative;vertical-align:middle}.ui-spinner-input{padding-right:1.5em;vertical-align:middle}.ui-spinner-button{cursor:default;display:block;height:50%;margin:0;overflow:hidden;padding:0;position:absolute;right:0;text-align:center;vertical-align:middle;width:1.5em}.ui-spinner .ui-spinner-button-icon{left:50%;margin-left:-.5em;margin-top:-.5em;position:absolute;top:50%;width:1em}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-fluid .ui-spinner{width:100%}.ui-fluid .ui-spinner .ui-spinner-input{padding-right:2em;width:100%}.ui-fluid .ui-spinner .ui-spinner-button{width:1.5em}.ui-fluid .ui-spinner .ui-spinner-button .ui-spinner-button-icon{left:.7em}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { onChange: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], step: [{
            type: Input
        }], disabled: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], size: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], inputId: [{
            type: Input
        }], readonly: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], required: [{
            type: Input
        }], name: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }], inputStyleClass: [{
            type: Input
        }], formatInput: [{
            type: Input
        }], decimalSeparator: [{
            type: Input
        }], thousandSeparator: [{
            type: Input
        }], precision: [{
            type: Input
        }], inputfieldViewChild: [{
            type: ViewChild,
            args: ['inputfield']
        }] }); })();
export class SpinnerModule {
}
SpinnerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SpinnerModule });
SpinnerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); }, imports: [[CommonModule, InputTextModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SpinnerModule, { declarations: function () { return [Spinner]; }, imports: function () { return [CommonModule, InputTextModule]; }, exports: function () { return [Spinner]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, InputTextModule],
                exports: [Spinner],
                declarations: [Spinner]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQVEsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvSyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUV2RSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBUTtBQUMzQyxJQUFJLE9BQU8sRUFBRSxpQkFBaUI7QUFDOUIsSUFBSSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztBQUMxQyxJQUFJLEtBQUssRUFBRSxJQUFJO0FBQ2YsQ0FBQyxDQUFDO0FBNkJGLE1BQU0sT0FBTyxPQUFPO0FBQUcsSUFzRm5CLFlBQW1CLEVBQWMsRUFBUyxFQUFxQjtBQUFJLFFBQWhELE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFRLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUFwRnRELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMvRCxRQUNjLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5RCxRQUNjLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3RCxRQXVDSSxVQUFLLEdBQVcsQ0FBQyxDQUFDO0FBQ3RCLFFBR0ksa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDdkMsUUFDSSxtQkFBYyxH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QUFDdkc7QUFDQSxZQUFZLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDN0IsUUFDUSxJQUFJLFNBQVM7QUFDckIsWUFBWSxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNsRjtBQUNBLFlBQVksSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQzdDLFFBQ1EsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQzNGLFlBQVksSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7QUFDdEMsU0FBUztBQUNULFFBQ1EsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDN0QsWUFBWSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbEMsU0FBUztBQUNULFFBQ1EsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDN0QsWUFBWSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbEMsU0FBUztBQUNULFFBQ1EsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNCLFFBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxJQUFJLENBQUM7QUFDTCxJQUNJLFlBQVk7QUFDaEIsUUFBUSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMs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QkFBRTtBQXFRaEIsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FMNUIsUUFBUSxTQUFDO0tBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLGVBQWUsQ0FBQyxrQkFDdkMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGtCQUNsQixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FDMUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixPbkluaXQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixmb3J3YXJkUmVmLFZpZXdDaGlsZCxDaGFuZ2VEZXRlY3RvclJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IFNQSU5ORVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTcGlubmVyKSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXNwaW5uZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidWktc3Bpbm5lciB1aS13aWRnZXQgdWktY29ybmVyLWFsbFwiPlxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dGZpZWxkIHR5cGU9XCJ0ZXh0XCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFt2YWx1ZV09XCJmb3JtYXR0ZWRWYWx1ZXx8bnVsbFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFthdHRyLmFyaWEtdmFsdW1pbl09XCJtaW5cIiBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiIFthdHRyLmFyaWEtdmFsdWVub3ddPVwidmFsdWVcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIlxuICAgICAgICAgICAgW2F0dHIuc2l6ZV09XCJzaXplXCIgW2F0dHIubWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4XCIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwicmVhZG9ubHlcIiBbYXR0ci5yZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAoa2V5ZG93bik9XCJvbklucHV0S2V5ZG93bigkZXZlbnQpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIiAoY2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJpbnB1dFN0eWxlXCIgW2NsYXNzXT1cImlucHV0U3R5bGVDbGFzc1wiIFtuZ0NsYXNzXT1cIid1aS1zcGlubmVyLWlucHV0IHVpLWlucHV0dGV4dCB1aS13aWRnZXQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsJ1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwieyd1aS1zcGlubmVyLWJ1dHRvbiB1aS1zcGlubmVyLXVwIHVpLWNvcm5lci10ciB1aS1idXR0b24gdWktd2lkZ2V0IHVpLXN0YXRlLWRlZmF1bHQnOnRydWUsJ3VpLXN0YXRlLWRpc2FibGVkJzpkaXNhYmxlZH1cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWR8fHJlYWRvbmx5XCIgdGFiaW5kZXg9XCItMVwiIFthdHRyLnJlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJvblVwQnV0dG9uTW91c2VsZWF2ZSgkZXZlbnQpXCIgKG1vdXNlZG93bik9XCJvblVwQnV0dG9uTW91c2Vkb3duKCRldmVudClcIiAobW91c2V1cCk9XCJvblVwQnV0dG9uTW91c2V1cCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1zcGlubmVyLWJ1dHRvbi1pY29uIHBpIHBpLWNhcmV0LXVwIHVpLWNsaWNrYWJsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwieyd1aS1zcGlubmVyLWJ1dHRvbiB1aS1zcGlubmVyLWRvd24gdWktY29ybmVyLWJyIHVpLWJ1dHRvbiB1aS13aWRnZXQgdWktc3RhdGUtZGVmYXVsdCc6dHJ1ZSwndWktc3RhdGUtZGlzYWJsZWQnOmRpc2FibGVkfVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZHx8cmVhZG9ubHlcIiB0YWJpbmRleD1cIi0xXCIgW2F0dHIucmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uRG93bkJ1dHRvbk1vdXNlbGVhdmUoJGV2ZW50KVwiIChtb3VzZWRvd24pPVwib25Eb3duQnV0dG9uTW91c2Vkb3duKCRldmVudClcIiAobW91c2V1cCk9XCJvbkRvd25CdXR0b25Nb3VzZXVwKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLXNwaW5uZXItYnV0dG9uLWljb24gcGkgcGktY2FyZXQtZG93biB1aS1jbGlja2FibGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnVpLWlucHV0d3JhcHBlci1maWxsZWRdJzogJ2ZpbGxlZCcsXG4gICAgICAgICdbY2xhc3MudWktaW5wdXR3cmFwcGVyLWZvY3VzXSc6ICdmb2N1cydcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW1NQSU5ORVJfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3Bpbm5lci5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyIGltcGxlbWVudHMgT25Jbml0LENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgbWluOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBtYXg6IG51bWJlcjtcbiAgICBcbiAgICBASW5wdXQoKSBtYXhsZW5ndGg6IG51bWJlcjtcbiAgICBcbiAgICBASW5wdXQoKSBzaXplOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgXG4gICAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyO1xuICAgICAgICAgICAgXG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaW5wdXRTdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgaW5wdXRTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmb3JtYXRJbnB1dDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGRlY2ltYWxTZXBhcmF0b3I6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRob3VzYW5kU2VwYXJhdG9yOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBwcmVjaXNpb246IG51bWJlcjtcbiAgICBcbiAgICB2YWx1ZTogYW55O1xuXG4gICAgX3N0ZXA6IG51bWJlciA9IDE7XG5cbiAgICBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nO1xuICAgICAgICBcbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIGtleVBhdHRlcm46IFJlZ0V4cCA9IC9bMC05XFwrXFwtXS87XG4gICAgICAgIFxuICAgIHB1YmxpYyB0aW1lcjogYW55O1xuICAgIFxuICAgIHB1YmxpYyBmb2N1czogYm9vbGVhbjtcbiAgICBcbiAgICBwdWJsaWMgZmlsbGVkOiBib29sZWFuO1xuICAgIFxuICAgIHB1YmxpYyBuZWdhdGl2ZVNlcGFyYXRvciA9ICctJztcblxuICAgIGxvY2FsZURlY2ltYWxTZXBhcmF0b3I6IHN0cmluZztcblxuICAgIGxvY2FsZVRob3VzYW5kU2VwYXJhdG9yOiBzdHJpbmc7XG5cbiAgICB0aG91c2FuZFJlZ0V4cDogUmVnRXhwO1xuXG4gICAgY2FsY3VsYXRlZFByZWNpc2lvbjogbnVtYmVyO1xuICAgIFxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0ZmllbGQnKSBpbnB1dGZpZWxkVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQElucHV0KCkgZ2V0IHN0ZXAoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gICAgfVxuICAgIHNldCBzdGVwKHZhbDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3RlcCA9IHZhbDtcblxuICAgICAgICBpZiAodGhpcy5fc3RlcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5zdGVwLnRvU3RyaW5nKCkuc3BsaXQoL1ssXXxbLl0vKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFByZWNpc2lvbiA9IHRva2Vuc1sxXSA/IHRva2Vuc1sxXS5sZW5ndGggOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1hdElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZURlY2ltYWxTZXBhcmF0b3IgPSAoMS4xKS50b0xvY2FsZVN0cmluZygpLnN1YnN0cmluZygxLCAyKTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVGhvdXNhbmRTZXBhcmF0b3IgPSAoMTAwMCkudG9Mb2NhbGVTdHJpbmcoKS5zdWJzdHJpbmcoMSwgMik7XG4gICAgICAgICAgICB0aGlzLnRob3VzYW5kUmVnRXhwID0gbmV3IFJlZ0V4cChgWyR7dGhpcy50aG91c2FuZFNlcGFyYXRvciB8fCB0aGlzLmxvY2FsZVRob3VzYW5kU2VwYXJhdG9yfV1gLCAnZ2ltJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlY2ltYWxTZXBhcmF0b3IgJiYgdGhpcy50aG91c2FuZFNlcGFyYXRvciAmJiB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09IHRoaXMudGhvdXNhbmRTZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJ0aG91c2FuZFNlcGFyYXRvciBhbmQgZGVjaW1hbFNlcGFyYXRvciBjYW5ub3QgaGF2ZSB0aGUgc2FtZSB2YWx1ZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBlYXQoZXZlbnQ6IEV2ZW50LCBpbnRlcnZhbDogbnVtYmVyLCBkaXI6IG51bWJlcikge1xuICAgICAgICBsZXQgaSA9IGludGVydmFsfHw1MDA7XG5cbiAgICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0KGV2ZW50LCA0MCwgZGlyKTtcbiAgICAgICAgfSwgaSk7XG5cbiAgICAgICAgdGhpcy5zcGluKGV2ZW50LCBkaXIpO1xuICAgIH1cbiAgICBcbiAgICBzcGluKGV2ZW50OiBFdmVudCwgZGlyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnN0ZXAgKiBkaXI7XG4gICAgICAgIGxldCBjdXJyZW50VmFsdWU6IG51bWJlcjtcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUpXG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgPSAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdzdHJpbmcnKSA/IHRoaXMucGFyc2VWYWx1ZSh0aGlzLnZhbHVlKSA6IHRoaXMudmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IDA7XG4gICAgICAgIFxuICAgICAgICBpZiAocHJlY2lzaW9uKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy50b0ZpeGVkKGN1cnJlbnRWYWx1ZSArIHN0ZXAsIHByZWNpc2lvbikpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gY3VycmVudFZhbHVlICsgc3RlcDtcbiAgICBcbiAgICAgICAgaWYgKHRoaXMubWF4bGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZS50b1N0cmluZygpLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmICh0aGlzLm1pbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMudmFsdWUgPCB0aGlzLm1pbikge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWluO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWF4ICE9PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZSA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZm9ybWF0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIGdldFByZWNpc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGN1bGF0ZWRQcmVjaXNpb24gOiB0aGlzLnByZWNpc2lvbjtcbiAgICB9XG4gICAgXG4gICAgdG9GaXhlZCh2YWx1ZTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlcikge1xuICAgICAgICBsZXQgcG93ZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9ufHwwKTtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhNYXRoLnJvdW5kKHZhbHVlICogcG93ZXIpIC8gcG93ZXIpO1xuICAgIH1cbiAgICBcbiAgICBvblVwQnV0dG9uTW91c2Vkb3duKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRmaWVsZFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlcGVhdChldmVudCwgbnVsbCwgMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uVXBCdXR0b25Nb3VzZXVwKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uVXBCdXR0b25Nb3VzZWxlYXZlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uRG93bkJ1dHRvbk1vdXNlZG93bihldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ZmllbGRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5yZXBlYXQoZXZlbnQsIG51bGwsIC0xKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgb25Eb3duQnV0dG9uTW91c2V1cChldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbkRvd25CdXR0b25Nb3VzZWxlYXZlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uSW5wdXRLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PSAzOCkge1xuICAgICAgICAgICAgdGhpcy5zcGluKGV2ZW50LCAxKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQud2hpY2ggPT0gNDApIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbihldmVudCwgLTEpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25JbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKCg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS52YWx1ZSk7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWxsZWRTdGF0ZSgpO1xuICAgIH1cbiAgICAgICAgXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm1hdFZhbHVlKCk7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICAgICAgdGhpcy5vbkJsdXIuZW1pdChldmVudCk7XG4gICAgfVxuICAgIFxuICAgIG9uSW5wdXRGb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgICBcbiAgICBwYXJzZVZhbHVlKHZhbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHZhbHVlOiBudW1iZXI7XG4gICAgICAgIGxldCBwcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAodmFsLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1hdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UodGhpcy50aG91c2FuZFJlZ0V4cCwgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5mb3JtYXRJbnB1dCA/IHZhbC5yZXBsYWNlKHRoaXMuZGVjaW1hbFNlcGFyYXRvciB8fCB0aGlzLmxvY2FsZURlY2ltYWxTZXBhcmF0b3IsICcuJykgOiB2YWwucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heCAhPT0gbnVsbCAmJiB2YWx1ZSA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5tYXg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWluICE9PSBudWxsICYmIHZhbHVlIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBmb3JtYXRWYWx1ZSgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1hdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHttYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIwfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciAmJiB0aGlzLnRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQodGhpcy5sb2NhbGVEZWNpbWFsU2VwYXJhdG9yKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWNpc2lvbiAmJiB2YWx1ZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbMV0gPSAodGhpcy5kZWNpbWFsU2VwYXJhdG9yIHx8IHRoaXMubG9jYWxlRGVjaW1hbFNlcGFyYXRvcikgKyB2YWx1ZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aG91c2FuZFNlcGFyYXRvciAmJiB2YWx1ZVswXS5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVswXSA9IHZhbHVlWzBdLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7dGhpcy5sb2NhbGVUaG91c2FuZFNlcGFyYXRvcn1dYCwgJ2dpbScpLCB0aGlzLnRob3VzYW5kU2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnB1dGZpZWxkVmlld0NoaWxkICYmIHRoaXMuaW5wdXRmaWVsZFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ZmllbGRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgICAgICBcbiAgICBjbGVhclRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtYXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuICAgIFxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZUZpbGxlZFN0YXRlKCkge1xuICAgICAgICB0aGlzLmZpbGxlZCA9ICh0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZSAhPSBudWxsKTtcbiAgICB9XG59XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLElucHV0VGV4dE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1NwaW5uZXJdLFxuICAgIGRlY2xhcmF0aW9uczogW1NwaW5uZXJdXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJNb2R1bGUgeyB9XG4iXX0=