import { NgModule, Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, EventEmitter, Output, forwardRef, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/inputtext';
import * as ɵngcc3 from 'primeng/button';

const _c0 = ["input"];
const _c1 = function () { return { "p-inputnumber-button p-inputnumber-button-up": true }; };
const _c2 = function () { return { "p-inputnumber-button p-inputnumber-button-down": true }; };
function InputNumber_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵelementStart(1, "button", 6);
    ɵngcc0.ɵɵlistener("mousedown", function InputNumber_span_3_Template_button_mousedown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onUpButtonMouseDown($event); })("mouseup", function InputNumber_span_3_Template_button_mouseup_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onUpButtonMouseUp(); })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onUpButtonMouseLeave(); })("keydown", function InputNumber_span_3_Template_button_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onUpButtonKeyDown($event); })("keyup", function InputNumber_span_3_Template_button_keyup_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onUpButtonKeyUp(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "button", 6);
    ɵngcc0.ɵɵlistener("mousedown", function InputNumber_span_3_Template_button_mousedown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onDownButtonMouseDown($event); })("mouseup", function InputNumber_span_3_Template_button_mouseup_2_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onDownButtonMouseUp(); })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_2_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onDownButtonMouseLeave(); })("keydown", function InputNumber_span_3_Template_button_keydown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onDownButtonKeyDown($event); })("keyup", function InputNumber_span_3_Template_button_keyup_2_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onDownButtonKeyUp(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r1.incrementButtonClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(10, _c1))("icon", ctx_r1.incrementButtonIcon)("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r1.decrementButtonClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(11, _c2))("icon", ctx_r1.decrementButtonIcon)("disabled", ctx_r1.disabled);
} }
function InputNumber_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("mousedown", function InputNumber_button_4_Template_button_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onUpButtonMouseDown($event); })("mouseup", function InputNumber_button_4_Template_button_mouseup_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onUpButtonMouseUp(); })("mouseleave", function InputNumber_button_4_Template_button_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onUpButtonMouseLeave(); })("keydown", function InputNumber_button_4_Template_button_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onUpButtonKeyDown($event); })("keyup", function InputNumber_button_4_Template_button_keyup_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onUpButtonKeyUp(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r2.incrementButtonClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(5, _c1))("icon", ctx_r2.incrementButtonIcon)("disabled", ctx_r2.disabled);
} }
function InputNumber_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onDownButtonMouseDown($event); })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.onDownButtonMouseUp(); })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onDownButtonMouseLeave(); })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onDownButtonKeyDown($event); })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onDownButtonKeyUp(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r3.decrementButtonClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(5, _c2))("icon", ctx_r3.decrementButtonIcon)("disabled", ctx_r3.disabled);
} }
const _c3 = function (a1, a2, a3) { return { "p-inputnumber p-component": true, "p-inputnumber-buttons-stacked": a1, "p-inputnumber-buttons-horizontal": a2, "p-inputnumber-buttons-vertical": a3 }; };
export const INPUTNUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputNumber),
    multi: true
};
export class InputNumber {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.showButtons = false;
        this.format = true;
        this.buttonLayout = "stacked";
        this.incrementButtonIcon = 'pi pi-angle-up';
        this.decrementButtonIcon = 'pi pi-angle-down';
        this.step = 1;
        this.onInput = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.groupChar = '';
        this.prefixChar = '';
        this.suffixChar = '';
        this._modeOption = "decimal";
        this._useGroupingOption = true;
    }
    get locale() {
        return this._localeOption;
    }
    set locale(localeOption) {
        this._localeOption = localeOption;
        this.updateConstructParser();
    }
    get localeMatcher() {
        return this._localeMatcherOption;
    }
    set localeMatcher(localeMatcherOption) {
        this._localeMatcherOption = localeMatcherOption;
        this.updateConstructParser();
    }
    get mode() {
        return this._modeOption;
    }
    set mode(modeOption) {
        this._modeOption = modeOption;
        this.updateConstructParser();
    }
    get currency() {
        return this._currencyOption;
    }
    set currency(currencyOption) {
        this._currencyOption = currencyOption;
        this.updateConstructParser();
    }
    get currencyDisplay() {
        return this._currencyDisplayOption;
    }
    set currencyDisplay(currencyDisplayOption) {
        this._currencyDisplayOption = currencyDisplayOption;
        this.updateConstructParser();
    }
    get useGrouping() {
        return this._useGroupingOption;
    }
    set useGrouping(useGroupingOption) {
        this._useGroupingOption = useGroupingOption;
        this.updateConstructParser();
    }
    get minFractionDigits() {
        return this._minFractionDigitsOption;
    }
    set minFractionDigits(minFractionDigitsOption) {
        this._minFractionDigitsOption = minFractionDigitsOption;
        this.updateConstructParser();
    }
    get maxFractionDigits() {
        return this._maxFractionDigitsOption;
    }
    set maxFractionDigits(maxFractionDigitsOption) {
        this._maxFractionDigitsOption = maxFractionDigitsOption;
        this.updateConstructParser();
    }
    get prefix() {
        return this._prefixOption;
    }
    set prefix(prefixOption) {
        this._prefixOption = prefixOption;
        this.updateConstructParser();
    }
    get suffix() {
        return this._suffixOption;
    }
    set suffix(suffixOption) {
        this._suffixOption = suffixOption;
        this.updateConstructParser();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        if (disabled)
            this.focused = false;
        this._disabled = disabled;
        if (this.timer)
            this.clearTimer();
    }
    ngOnInit() {
        this.constructParser();
        this.initialized = true;
    }
    getOptions() {
        return {
            localeMatcher: this.localeMatcher,
            style: this.mode,
            currency: this.currency,
            currencyDisplay: this.currencyDisplay,
            useGrouping: this.useGrouping,
            minimumFractionDigits: this.minFractionDigits,
            maximumFractionDigits: this.maxFractionDigits
        };
    }
    constructParser() {
        this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
        const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));
        this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
        this._decimal = this.getDecimalExpression();
        this._group = this.getGroupingExpression();
        this._minusSign = this.getMinusSignExpression();
        this._currency = this.getCurrencyExpression();
        this._suffix = this.getSuffixExpression();
        this._prefix = this.getPrefixExpression();
        this._index = d => index.get(d);
    }
    updateConstructParser() {
        if (this.initialized) {
            this.constructParser();
        }
    }
    escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    getDecimalExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
        return new RegExp(`[${formatter.format(1.1).trim().replace(this._numeral, '')}]`, 'g');
    }
    getGroupingExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true });
        this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
        return new RegExp(`[${this.groupChar}]`, 'g');
    }
    getMinusSignExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
        return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g');
    }
    getCurrencyExpression() {
        if (this.currency) {
            const formatter = new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency, currencyDisplay: this.currencyDisplay });
            return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._decimal, '').replace(this._group, '')}]`, 'g');
        }
        return new RegExp(`[]`, 'g');
    }
    getPrefixExpression() {
        if (this.prefix) {
            this.prefixChar = this.prefix;
        }
        else {
            const formatter = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay });
            this.prefixChar = formatter.format(1).split('1')[0];
        }
        return new RegExp(`${this.escapeRegExp(this.prefixChar || '')}`, 'g');
    }
    getSuffixExpression() {
        if (this.suffix) {
            this.suffixChar = this.suffix;
        }
        else {
            const formatter = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay,
                minimumFractionDigits: 0, maximumFractionDigits: 0 });
            this.suffixChar = formatter.format(1).split('1')[1];
        }
        return new RegExp(`${this.escapeRegExp(this.suffixChar || '')}`, 'g');
    }
    formatValue(value) {
        if (value != null) {
            if (value === '-') { // Minus sign
                return value;
            }
            if (this.format) {
                let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
                let formattedValue = formatter.format(value);
                if (this.prefix) {
                    formattedValue = this.prefix + formattedValue;
                }
                if (this.suffix) {
                    formattedValue = formattedValue + this.suffix;
                }
                return formattedValue;
            }
            return value.toString();
        }
        return '';
    }
    parseValue(text) {
        let filteredText = text
            .replace(this._suffix, '')
            .replace(this._prefix, '')
            .trim()
            .replace(/\s/g, '')
            .replace(this._currency, '')
            .replace(this._group, '')
            .replace(this._minusSign, '-')
            .replace(this._decimal, '.')
            .replace(this._numeral, this._index);
        if (filteredText) {
            if (filteredText === '-') // Minus sign
                return filteredText;
            let parsedValue = +filteredText;
            return isNaN(parsedValue) ? null : parsedValue;
        }
        return null;
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
        let currentValue = this.parseValue(this.input.nativeElement.value) || 0;
        let newValue = this.validateValue(currentValue + step);
        if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
            return;
        }
        this.updateInput(newValue, null, 'spin');
        this.updateModel(event, newValue);
        this.handleOnInput(event, currentValue, newValue);
    }
    onUpButtonMouseDown(event) {
        this.input.nativeElement.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
    }
    onUpButtonMouseUp() {
        this.clearTimer();
    }
    onUpButtonMouseLeave() {
        this.clearTimer();
    }
    onUpButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.repeat(event, null, 1);
        }
    }
    onUpButtonKeyUp() {
        this.clearTimer();
    }
    onDownButtonMouseDown(event) {
        this.input.nativeElement.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
    }
    onDownButtonMouseUp() {
        this.clearTimer();
    }
    onDownButtonMouseLeave() {
        this.clearTimer();
    }
    onDownButtonKeyUp() {
        this.clearTimer();
    }
    onDownButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.repeat(event, null, -1);
        }
    }
    onUserInput(event) {
        if (this.isSpecialChar) {
            event.target.value = this.lastValue;
        }
        this.isSpecialChar = false;
    }
    onInputKeyDown(event) {
        this.lastValue = event.target.value;
        if (event.shiftKey || event.altKey) {
            this.isSpecialChar = true;
            return;
        }
        let selectionStart = event.target.selectionStart;
        let selectionEnd = event.target.selectionEnd;
        let inputValue = event.target.value;
        let newValueStr = null;
        if (event.altKey) {
            event.preventDefault();
        }
        switch (event.which) {
            //up
            case 38:
                this.spin(event, 1);
                event.preventDefault();
                break;
            //down
            case 40:
                this.spin(event, -1);
                event.preventDefault();
                break;
            //left
            case 37:
                if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
                    event.preventDefault();
                }
                break;
            //right
            case 39:
                if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
                    event.preventDefault();
                }
                break;
            //enter
            case 13:
                let newValue = this.validateValue(this.parseValue(this.input.nativeElement.value));
                this.input.nativeElement.value = this.formatValue(newValue);
                this.input.nativeElement.setAttribute('aria-valuenow', newValue);
                this.updateModel(event, newValue);
                break;
            //backspace
            case 8: {
                event.preventDefault();
                if (selectionStart === selectionEnd) {
                    let deleteChar = inputValue.charAt(selectionStart - 1);
                    let decimalCharIndex = inputValue.search(this._decimal);
                    this._decimal.lastIndex = 0;
                    if (this.isNumeralChar(deleteChar)) {
                        if (this._group.test(deleteChar)) {
                            this._group.lastIndex = 0;
                            newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                        }
                        else if (this._decimal.test(deleteChar)) {
                            this._decimal.lastIndex = 0;
                            this.input.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
                        }
                        else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                            newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                        }
                        else if (decimalCharIndex > 0 && decimalCharIndex === 1) {
                            newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                            newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                        }
                        else {
                            newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                        }
                    }
                    this.updateValue(event, newValueStr, null, 'delete-single');
                }
                else {
                    newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                    this.updateValue(event, newValueStr, null, 'delete-range');
                }
                break;
            }
            // del
            case 46:
                event.preventDefault();
                if (selectionStart === selectionEnd) {
                    let deleteChar = inputValue.charAt(selectionStart);
                    let decimalCharIndex = inputValue.search(this._decimal);
                    this._decimal.lastIndex = 0;
                    if (this.isNumeralChar(deleteChar)) {
                        if (this._group.test(deleteChar)) {
                            this._group.lastIndex = 0;
                            newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                        }
                        else if (this._decimal.test(deleteChar)) {
                            this._decimal.lastIndex = 0;
                            this.input.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
                        }
                        else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                            newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                        }
                        else if (decimalCharIndex > 0 && decimalCharIndex === 1) {
                            newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                            newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                        }
                        else {
                            newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                        }
                    }
                    this.updateValue(event, newValueStr, null, 'delete-back-single');
                }
                else {
                    newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                    this.updateValue(event, newValueStr, null, 'delete-range');
                }
                break;
            default:
                break;
        }
        this.onKeyDown.emit(event);
    }
    onInputKeyPress(event) {
        event.preventDefault();
        let code = event.which || event.keyCode;
        let char = String.fromCharCode(code);
        const isDecimalSign = this.isDecimalSign(char);
        const isMinusSign = this.isMinusSign(char);
        if ((48 <= code && code <= 57) || isMinusSign || isDecimalSign) {
            this.insert(event, char, { isDecimalSign, isMinusSign });
        }
    }
    onPaste(event) {
        if (!this.disabled) {
            event.preventDefault();
            let data = (event.clipboardData || window['clipboardData']).getData('Text');
            if (data) {
                let filteredData = this.parseValue(data);
                if (filteredData != null) {
                    this.insert(event, filteredData.toString());
                }
            }
        }
    }
    isMinusSign(char) {
        if (this._minusSign.test(char)) {
            this._minusSign.lastIndex = 0;
            return true;
        }
        return false;
    }
    isDecimalSign(char) {
        if (this._decimal.test(char)) {
            this._decimal.lastIndex = 0;
            return true;
        }
        return false;
    }
    insert(event, text, sign = { isDecimalSign: false, isMinusSign: false }) {
        let selectionStart = this.input.nativeElement.selectionStart;
        let selectionEnd = this.input.nativeElement.selectionEnd;
        let inputValue = this.input.nativeElement.value.trim();
        const decimalCharIndex = inputValue.search(this._decimal);
        this._decimal.lastIndex = 0;
        const minusCharIndex = inputValue.search(this._minusSign);
        this._minusSign.lastIndex = 0;
        let newValueStr;
        if (sign.isMinusSign) {
            if (selectionStart === 0) {
                newValueStr = inputValue;
                if (minusCharIndex === -1 || selectionEnd !== 0) {
                    newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
                }
                this.updateValue(event, newValueStr, text, 'insert');
            }
        }
        else if (sign.isDecimalSign) {
            if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
                this.updateValue(event, inputValue, text, 'insert');
            }
            else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
                newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
                this.updateValue(event, newValueStr, text, 'insert');
            }
        }
        else {
            const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
            const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';
            if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {
                    newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length);
                    this.updateValue(event, newValueStr, text, operation);
                }
            }
            else {
                newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
                this.updateValue(event, newValueStr, text, operation);
            }
        }
    }
    insertText(value, text, start, end) {
        let textSplit = text.split('.');
        if (textSplit.length == 2) {
            const decimalCharIndex = value.slice(start, end).search(this._decimal);
            this._decimal.lastIndex = 0;
            return (decimalCharIndex > 0) ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : (value || this.formatValue(text));
        }
        else if ((end - start) === value.length) {
            return this.formatValue(text);
        }
        else if (start === 0) {
            return text + value.slice(end);
        }
        else if (end === value.length) {
            return value.slice(0, start) + text;
        }
        else {
            return value.slice(0, start) + text + value.slice(end);
        }
    }
    deleteRange(value, start, end) {
        let newValueStr;
        if ((end - start) === value.length)
            newValueStr = '';
        else if (start === 0)
            newValueStr = value.slice(end);
        else if (end === value.length)
            newValueStr = value.slice(0, start);
        else
            newValueStr = value.slice(0, start) + value.slice(end);
        return newValueStr;
    }
    initCursor() {
        let selectionStart = this.input.nativeElement.selectionStart;
        let inputValue = this.input.nativeElement.value;
        let valueLength = inputValue.length;
        let index = null;
        let char = inputValue.charAt(selectionStart);
        if (this.isNumeralChar(char)) {
            return;
        }
        //left
        let i = selectionStart - 1;
        while (i >= 0) {
            char = inputValue.charAt(i);
            if (this.isNumeralChar(char)) {
                index = i;
                break;
            }
            else {
                i--;
            }
        }
        if (index !== null) {
            this.input.nativeElement.setSelectionRange(index + 1, index + 1);
        }
        else {
            i = selectionStart + 1;
            while (i < valueLength) {
                char = inputValue.charAt(i);
                if (this.isNumeralChar(char)) {
                    index = i;
                    break;
                }
                else {
                    i++;
                }
            }
            if (index !== null) {
                this.input.nativeElement.setSelectionRange(index, index);
            }
        }
    }
    onInputClick() {
        this.initCursor();
    }
    isNumeralChar(char) {
        if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
            this.resetRegex();
            return true;
        }
        return false;
    }
    resetRegex() {
        this._numeral.lastIndex = 0;
        this._decimal.lastIndex = 0;
        this._group.lastIndex = 0;
        this._minusSign.lastIndex = 0;
    }
    updateValue(event, valueStr, insertedValueStr, operation) {
        let currentValue = this.input.nativeElement.value;
        let newValue = null;
        if (valueStr != null) {
            newValue = this.parseValue(valueStr);
            this.updateInput(newValue, insertedValueStr, operation);
        }
        this.handleOnInput(event, currentValue, newValue);
    }
    handleOnInput(event, currentValue, newValue) {
        if (this.isValueChanged(currentValue, newValue)) {
            this.onInput.emit({ originalEvent: event, value: newValue });
        }
    }
    isValueChanged(currentValue, newValue) {
        if (newValue === null && currentValue !== null) {
            return true;
        }
        if (newValue != null) {
            let parsedCurrentValue = (typeof currentValue === 'string') ? this.parseValue(currentValue) : currentValue;
            return newValue !== parsedCurrentValue;
        }
        return false;
    }
    validateValue(value) {
        if (this.min !== null && value < this.min) {
            return this.min;
        }
        if (this.max !== null && value > this.max) {
            return this.max;
        }
        if (value === '-') { // Minus sign
            return null;
        }
        return value;
    }
    updateInput(value, insertedValueStr, operation) {
        insertedValueStr = insertedValueStr || '';
        let inputValue = this.input.nativeElement.value;
        let newValue = this.formatValue(value);
        let currentLength = inputValue.length;
        if (currentLength === 0) {
            this.input.nativeElement.value = newValue;
            this.input.nativeElement.setSelectionRange(0, 0);
            this.initCursor();
            const prefixLength = (this.prefixChar || '').length;
            const selectionEnd = prefixLength + insertedValueStr.length;
            this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        }
        else {
            let selectionStart = this.input.nativeElement.selectionStart;
            let selectionEnd = this.input.nativeElement.selectionEnd;
            if (this.maxlength && this.maxlength < newValue.length) {
                return;
            }
            this.input.nativeElement.value = newValue;
            let newLength = newValue.length;
            if (operation === 'range-insert') {
                const startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
                const startValueStr = startValue !== null ? startValue.toString() : '';
                const startExpr = startValueStr.split('').join(`(${this.groupChar})?`);
                const sRegex = new RegExp(startExpr, 'g');
                sRegex.test(newValue);
                const tExpr = insertedValueStr.split('').join(`(${this.groupChar})?`);
                const tRegex = new RegExp(tExpr, 'g');
                tRegex.test(newValue.slice(sRegex.lastIndex));
                selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
                this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
            else if (newLength === currentLength) {
                if (operation === 'insert' || operation === 'delete-back-single')
                    this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
                else if (operation === 'delete-single')
                    this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
                else if (operation === 'delete-range' || operation === 'spin')
                    this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
            else if (operation === 'delete-back-single') {
                let prevChar = inputValue.charAt(selectionEnd - 1);
                let nextChar = inputValue.charAt(selectionEnd);
                let diff = currentLength - newLength;
                let isGroupChar = this._group.test(nextChar);
                if (isGroupChar && diff === 1) {
                    selectionEnd += 1;
                }
                else if (!isGroupChar && this.isNumeralChar(prevChar)) {
                    selectionEnd += (-1 * diff) + 1;
                }
                this._group.lastIndex = 0;
                this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
            else {
                selectionEnd = selectionEnd + (newLength - currentLength);
                this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
        }
        this.input.nativeElement.setAttribute('aria-valuenow', value);
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        let newValue = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValue);
        this.input.nativeElement.setAttribute('aria-valuenow', newValue);
        this.updateModel(event, newValue);
        this.onBlur.emit(event);
    }
    formattedValue() {
        return this.formatValue(this.value);
    }
    updateModel(event, value) {
        if (this.value !== value) {
            this.value = value;
            this.onModelChange(value);
        }
        this.onModelTouched();
    }
    writeValue(value) {
        this.value = value;
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
    get filled() {
        return (this.value != null && this.value.toString().length > 0);
    }
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}
InputNumber.ɵfac = function InputNumber_Factory(t) { return new (t || InputNumber)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
InputNumber.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputNumber, selectors: [["p-inputNumber"]], viewQuery: function InputNumber_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, hostVars: 4, hostBindings: function InputNumber_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused);
    } }, inputs: { showButtons: "showButtons", format: "format", buttonLayout: "buttonLayout", incrementButtonIcon: "incrementButtonIcon", decrementButtonIcon: "decrementButtonIcon", step: "step", locale: "locale", localeMatcher: "localeMatcher", mode: "mode", currency: "currency", currencyDisplay: "currencyDisplay", useGrouping: "useGrouping", minFractionDigits: "minFractionDigits", maxFractionDigits: "maxFractionDigits", prefix: "prefix", suffix: "suffix", disabled: "disabled", inputId: "inputId", styleClass: "styleClass", style: "style", placeholder: "placeholder", size: "size", maxlength: "maxlength", tabindex: "tabindex", title: "title", ariaLabel: "ariaLabel", ariaRequired: "ariaRequired", name: "name", required: "required", autocomplete: "autocomplete", min: "min", max: "max", incrementButtonClass: "incrementButtonClass", decrementButtonClass: "decrementButtonClass", inputStyle: "inputStyle", inputStyleClass: "inputStyleClass" }, outputs: { onInput: "onInput", onFocus: "onFocus", onBlur: "onBlur", onKeyDown: "onKeyDown" }, features: [ɵngcc0.ɵɵProvidersFeature([INPUTNUMBER_VALUE_ACCESSOR])], decls: 6, vars: 30, consts: [[3, "ngClass", "ngStyle"], ["pInputText", "", 3, "ngClass", "ngStyle", "value", "disabled", "input", "keydown", "keypress", "paste", "click", "focus", "blur"], ["input", ""], ["class", "p-inputnumber-button-group", 4, "ngIf"], ["type", "button", "pButton", "", 3, "ngClass", "class", "icon", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], [1, "p-inputnumber-button-group"], ["type", "button", "pButton", "", 3, "ngClass", "icon", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup"]], template: function InputNumber_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("input", function InputNumber_Template_input_input_1_listener($event) { return ctx.onUserInput($event); })("keydown", function InputNumber_Template_input_keydown_1_listener($event) { return ctx.onInputKeyDown($event); })("keypress", function InputNumber_Template_input_keypress_1_listener($event) { return ctx.onInputKeyPress($event); })("paste", function InputNumber_Template_input_paste_1_listener($event) { return ctx.onPaste($event); })("click", function InputNumber_Template_input_click_1_listener() { return ctx.onInputClick(); })("focus", function InputNumber_Template_input_focus_1_listener($event) { return ctx.onInputFocus($event); })("blur", function InputNumber_Template_input_blur_1_listener($event) { return ctx.onInputBlur($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, InputNumber_span_3_Template, 3, 12, "span", 3);
        ɵngcc0.ɵɵtemplate(4, InputNumber_button_4_Template, 1, 6, "button", 4);
        ɵngcc0.ɵɵtemplate(5, InputNumber_button_5_Template, 1, 6, "button", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(26, _c3, ctx.showButtons && ctx.buttonLayout === "stacked", ctx.showButtons && ctx.buttonLayout === "horizontal", ctx.showButtons && ctx.buttonLayout === "vertical"))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.inputStyleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-inputnumber-input")("ngStyle", ctx.inputStyle)("value", ctx.formattedValue())("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("placeholder", ctx.placeholder)("title", ctx.title)("id", ctx.inputId)("size", ctx.size)("name", ctx.name)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-label", ctx.ariaLabel)("aria-required", ctx.ariaRequired)("required", ctx.required)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.InputText, ɵngcc1.NgIf, ɵngcc3.ButtonDirective], styles: [".p-inputnumber{display:inline-flex}.p-inputnumber-button{align-items:center;display:flex;flex:0 0 auto;justify-content:center}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-bottom-right-radius:0;border-top-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{border-bottom-left-radius:0;border-top-left-radius:0;order:3}.p-inputnumber-buttons-horizontal .p-inputnumber-input{border-radius:0;order:2}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{border-bottom-right-radius:0;border-top-right-radius:0;order:1}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{border-bottom-left-radius:0;border-bottom-right-radius:0;order:1;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{border-radius:0;order:2;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;order:3;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}"], encapsulation: 2, changeDetection: 0 });
InputNumber.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
InputNumber.propDecorators = {
    showButtons: [{ type: Input }],
    format: [{ type: Input }],
    buttonLayout: [{ type: Input }],
    inputId: [{ type: Input }],
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    placeholder: [{ type: Input }],
    size: [{ type: Input }],
    maxlength: [{ type: Input }],
    tabindex: [{ type: Input }],
    title: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaRequired: [{ type: Input }],
    name: [{ type: Input }],
    required: [{ type: Input }],
    autocomplete: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    incrementButtonClass: [{ type: Input }],
    decrementButtonClass: [{ type: Input }],
    incrementButtonIcon: [{ type: Input }],
    decrementButtonIcon: [{ type: Input }],
    step: [{ type: Input }],
    inputStyle: [{ type: Input }],
    inputStyleClass: [{ type: Input }],
    input: [{ type: ViewChild, args: ['input',] }],
    onInput: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onKeyDown: [{ type: Output }],
    locale: [{ type: Input }],
    localeMatcher: [{ type: Input }],
    mode: [{ type: Input }],
    currency: [{ type: Input }],
    currencyDisplay: [{ type: Input }],
    useGrouping: [{ type: Input }],
    minFractionDigits: [{ type: Input }],
    maxFractionDigits: [{ type: Input }],
    prefix: [{ type: Input }],
    suffix: [{ type: Input }],
    disabled: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputNumber, [{
        type: Component,
        args: [{
                selector: 'p-inputNumber',
                template: `
        <span [ngClass]="{'p-inputnumber p-component': true,'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',
                'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal', 'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'}"
                [ngStyle]="style" [class]="styleClass">
            <input #input [ngClass]="'p-inputnumber-input'" [ngStyle]="inputStyle" [class]="inputStyleClass" pInputText [value]="formattedValue()" [attr.placeholder]="placeholder" [attr.title]="title" [attr.id]="inputId"
                [attr.size]="size" [attr.name]="name" [attr.autocomplete]="autocomplete" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [attr.aria-label]="ariaLabel"
                [attr.aria-required]="ariaRequired" [disabled]="disabled" [attr.required]="required" [attr.aria-valuemin]="min" [attr.aria-valuemax]="max"
                (input)="onUserInput($event)" (keydown)="onInputKeyDown($event)" (keypress)="onInputKeyPress($event)" (paste)="onPaste($event)" (click)="onInputClick()"
                (focus)="onInputFocus($event)" (blur)="onInputBlur($event)">
            <span class="p-inputnumber-button-group" *ngIf="showButtons && buttonLayout === 'stacked'">
                <button type="button" pButton [ngClass]="{'p-inputnumber-button p-inputnumber-button-up': true}" [class]="incrementButtonClass" [icon]="incrementButtonIcon" [disabled]="disabled"
                    (mousedown)="this.onUpButtonMouseDown($event)" (mouseup)="onUpButtonMouseUp()" (mouseleave)="onUpButtonMouseLeave()" (keydown)="onUpButtonKeyDown($event)" (keyup)="onUpButtonKeyUp()"></button>
                <button type="button" pButton [ngClass]="{'p-inputnumber-button p-inputnumber-button-down': true}" [class]="decrementButtonClass" [icon]="decrementButtonIcon" [disabled]="disabled"
                    (mousedown)="this.onDownButtonMouseDown($event)" (mouseup)="onDownButtonMouseUp()" (mouseleave)="onDownButtonMouseLeave()" (keydown)="onDownButtonKeyDown($event)" (keyup)="onDownButtonKeyUp()"></button>
            </span>
            <button type="button" pButton [ngClass]="{'p-inputnumber-button p-inputnumber-button-up': true}" [class]="incrementButtonClass" [icon]="incrementButtonIcon" *ngIf="showButtons && buttonLayout !== 'stacked'" [disabled]="disabled"
                (mousedown)="this.onUpButtonMouseDown($event)" (mouseup)="onUpButtonMouseUp()" (mouseleave)="onUpButtonMouseLeave()" (keydown)="onUpButtonKeyDown($event)" (keyup)="onUpButtonKeyUp()"></button>
            <button type="button" pButton [ngClass]="{'p-inputnumber-button p-inputnumber-button-down': true}" [class]="decrementButtonClass" [icon]="decrementButtonIcon" *ngIf="showButtons && buttonLayout !== 'stacked'" [disabled]="disabled"
                (mousedown)="this.onDownButtonMouseDown($event)" (mouseup)="onDownButtonMouseUp()" (mouseleave)="onDownButtonMouseLeave()" (keydown)="onDownButtonKeyDown($event)" (keyup)="onDownButtonKeyUp()"></button>
        </span>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [INPUTNUMBER_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focused'
                },
                styles: [".p-inputnumber{display:inline-flex}.p-inputnumber-button{align-items:center;display:flex;flex:0 0 auto;justify-content:center}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-bottom-right-radius:0;border-top-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{border-bottom-left-radius:0;border-top-left-radius:0;order:3}.p-inputnumber-buttons-horizontal .p-inputnumber-input{border-radius:0;order:2}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{border-bottom-right-radius:0;border-top-right-radius:0;order:1}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{border-bottom-left-radius:0;border-bottom-right-radius:0;order:1;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{border-radius:0;order:2;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;order:3;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { showButtons: [{
            type: Input
        }], format: [{
            type: Input
        }], buttonLayout: [{
            type: Input
        }], incrementButtonIcon: [{
            type: Input
        }], decrementButtonIcon: [{
            type: Input
        }], step: [{
            type: Input
        }], onInput: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onKeyDown: [{
            type: Output
        }], locale: [{
            type: Input
        }], localeMatcher: [{
            type: Input
        }], mode: [{
            type: Input
        }], currency: [{
            type: Input
        }], currencyDisplay: [{
            type: Input
        }], useGrouping: [{
            type: Input
        }], minFractionDigits: [{
            type: Input
        }], maxFractionDigits: [{
            type: Input
        }], prefix: [{
            type: Input
        }], suffix: [{
            type: Input
        }], disabled: [{
            type: Input
        }], inputId: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], size: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], title: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], ariaRequired: [{
            type: Input
        }], name: [{
            type: Input
        }], required: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], incrementButtonClass: [{
            type: Input
        }], decrementButtonClass: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }], inputStyleClass: [{
            type: Input
        }], input: [{
            type: ViewChild,
            args: ['input']
        }] }); })();
export class InputNumberModule {
}
InputNumberModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputNumberModule });
InputNumberModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputNumberModule_Factory(t) { return new (t || InputNumberModule)(); }, imports: [[CommonModule, InputTextModule, ButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputNumberModule, { declarations: function () { return [InputNumber]; }, imports: function () { return [CommonModule, InputTextModule, ButtonModule]; }, exports: function () { return [InputNumber]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputNumberModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, InputTextModule, ButtonModule],
                exports: [InputNumber],
                declarations: [InputNumber]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRudW1iZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dG51bWJlci9pbnB1dG51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2TCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQVE7QUFDL0MsSUFBSSxPQUFPLEVBQUUsaUJBQWlCO0FBQzlCLElBQUksV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7QUFDOUMsSUFBSSxLQUFLLEVBQUUsSUFBSTtBQUNmLENBQUMsQ0FBQztBQWlDRixNQUFNLE9BQU8sV0FBVztBQUFHLElBcU92QixZQUFtQixFQUFjLEVBQVUsRUFBcUI7QUFBSSxRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBbk94RCxnQkFBVyxHQUFZLEtBQUssQ0FBQztBQUMxQyxRQUNhLFdBQU0sR0FBWSxJQUFJLENBQUM7QUFDcEMsUUFDYSxpQkFBWSxHQUFXLFNBQVMsQ0FBQztBQUM5QyxRQW1DYSx3QkFBbUIsR0FBVyxnQkFBZ0Is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LG1CQVNWLEtBQUs7QUFBSyx1QkFTVixLQUFLO0FBQUssOEJBU1YsS0FBSztBQUFLLDBCQVNWLEtBQUs7QUFBSyxnQ0FTVixLQUFLO0FBQUssZ0NBU1YsS0FBSztBQUFLLHFCQVNWLEtBQUs7QUFBSyxxQkFTVixLQUFLO0FBQUssdUJBVVYsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBMnVCaEIsTUFBTSxPQUFPLGlCQUFpQjtBQUFHOzZDQUxoQyxRQUFRLFNBQUM7Q0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxrQkFDckQsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUN0QixZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FDOUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IElOUFVUTlVNQkVSX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXROdW1iZXIpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWlucHV0TnVtYmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3AtaW5wdXRudW1iZXIgcC1jb21wb25lbnQnOiB0cnVlLCdwLWlucHV0bnVtYmVyLWJ1dHRvbnMtc3RhY2tlZCc6IHRoaXMuc2hvd0J1dHRvbnMgJiYgdGhpcy5idXR0b25MYXlvdXQgPT09ICdzdGFja2VkJyxcbiAgICAgICAgICAgICAgICAncC1pbnB1dG51bWJlci1idXR0b25zLWhvcml6b250YWwnOiB0aGlzLnNob3dCdXR0b25zICYmIHRoaXMuYnV0dG9uTGF5b3V0ID09PSAnaG9yaXpvbnRhbCcsICdwLWlucHV0bnVtYmVyLWJ1dHRvbnMtdmVydGljYWwnOiB0aGlzLnNob3dCdXR0b25zICYmIHRoaXMuYnV0dG9uTGF5b3V0ID09PSAndmVydGljYWwnfVwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCBbbmdDbGFzc109XCIncC1pbnB1dG51bWJlci1pbnB1dCdcIiBbbmdTdHlsZV09XCJpbnB1dFN0eWxlXCIgW2NsYXNzXT1cImlucHV0U3R5bGVDbGFzc1wiIHBJbnB1dFRleHQgW3ZhbHVlXT1cImZvcm1hdHRlZFZhbHVlKClcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFthdHRyLnRpdGxlXT1cInRpdGxlXCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuc2l6ZV09XCJzaXplXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgW2F0dHIuYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiIFthdHRyLm1heGxlbmd0aF09XCJtYXhsZW5ndGhcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXJlcXVpcmVkXT1cImFyaWFSZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthdHRyLnJlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2F0dHIuYXJpYS12YWx1ZW1pbl09XCJtaW5cIiBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiXG4gICAgICAgICAgICAgICAgKGlucHV0KT1cIm9uVXNlcklucHV0KCRldmVudClcIiAoa2V5ZG93bik9XCJvbklucHV0S2V5RG93bigkZXZlbnQpXCIgKGtleXByZXNzKT1cIm9uSW5wdXRLZXlQcmVzcygkZXZlbnQpXCIgKHBhc3RlKT1cIm9uUGFzdGUoJGV2ZW50KVwiIChjbGljayk9XCJvbklucHV0Q2xpY2soKVwiXG4gICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWlucHV0bnVtYmVyLWJ1dHRvbi1ncm91cFwiICpuZ0lmPVwic2hvd0J1dHRvbnMgJiYgYnV0dG9uTGF5b3V0ID09PSAnc3RhY2tlZCdcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIFtuZ0NsYXNzXT1cInsncC1pbnB1dG51bWJlci1idXR0b24gcC1pbnB1dG51bWJlci1idXR0b24tdXAnOiB0cnVlfVwiIFtjbGFzc109XCJpbmNyZW1lbnRCdXR0b25DbGFzc1wiIFtpY29uXT1cImluY3JlbWVudEJ1dHRvbkljb25cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInRoaXMub25VcEJ1dHRvbk1vdXNlRG93bigkZXZlbnQpXCIgKG1vdXNldXApPVwib25VcEJ1dHRvbk1vdXNlVXAoKVwiIChtb3VzZWxlYXZlKT1cIm9uVXBCdXR0b25Nb3VzZUxlYXZlKClcIiAoa2V5ZG93bik9XCJvblVwQnV0dG9uS2V5RG93bigkZXZlbnQpXCIgKGtleXVwKT1cIm9uVXBCdXR0b25LZXlVcCgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbbmdDbGFzc109XCJ7J3AtaW5wdXRudW1iZXItYnV0dG9uIHAtaW5wdXRudW1iZXItYnV0dG9uLWRvd24nOiB0cnVlfVwiIFtjbGFzc109XCJkZWNyZW1lbnRCdXR0b25DbGFzc1wiIFtpY29uXT1cImRlY3JlbWVudEJ1dHRvbkljb25cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInRoaXMub25Eb3duQnV0dG9uTW91c2VEb3duKCRldmVudClcIiAobW91c2V1cCk9XCJvbkRvd25CdXR0b25Nb3VzZVVwKClcIiAobW91c2VsZWF2ZSk9XCJvbkRvd25CdXR0b25Nb3VzZUxlYXZlKClcIiAoa2V5ZG93bik9XCJvbkRvd25CdXR0b25LZXlEb3duKCRldmVudClcIiAoa2V5dXApPVwib25Eb3duQnV0dG9uS2V5VXAoKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbbmdDbGFzc109XCJ7J3AtaW5wdXRudW1iZXItYnV0dG9uIHAtaW5wdXRudW1iZXItYnV0dG9uLXVwJzogdHJ1ZX1cIiBbY2xhc3NdPVwiaW5jcmVtZW50QnV0dG9uQ2xhc3NcIiBbaWNvbl09XCJpbmNyZW1lbnRCdXR0b25JY29uXCIgKm5nSWY9XCJzaG93QnV0dG9ucyAmJiBidXR0b25MYXlvdXQgIT09ICdzdGFja2VkJ1wiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJ0aGlzLm9uVXBCdXR0b25Nb3VzZURvd24oJGV2ZW50KVwiIChtb3VzZXVwKT1cIm9uVXBCdXR0b25Nb3VzZVVwKClcIiAobW91c2VsZWF2ZSk9XCJvblVwQnV0dG9uTW91c2VMZWF2ZSgpXCIgKGtleWRvd24pPVwib25VcEJ1dHRvbktleURvd24oJGV2ZW50KVwiIChrZXl1cCk9XCJvblVwQnV0dG9uS2V5VXAoKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbbmdDbGFzc109XCJ7J3AtaW5wdXRudW1iZXItYnV0dG9uIHAtaW5wdXRudW1iZXItYnV0dG9uLWRvd24nOiB0cnVlfVwiIFtjbGFzc109XCJkZWNyZW1lbnRCdXR0b25DbGFzc1wiIFtpY29uXT1cImRlY3JlbWVudEJ1dHRvbkljb25cIiAqbmdJZj1cInNob3dCdXR0b25zICYmIGJ1dHRvbkxheW91dCAhPT0gJ3N0YWNrZWQnXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInRoaXMub25Eb3duQnV0dG9uTW91c2VEb3duKCRldmVudClcIiAobW91c2V1cCk9XCJvbkRvd25CdXR0b25Nb3VzZVVwKClcIiAobW91c2VsZWF2ZSk9XCJvbkRvd25CdXR0b25Nb3VzZUxlYXZlKClcIiAoa2V5ZG93bik9XCJvbkRvd25CdXR0b25LZXlEb3duKCRldmVudClcIiAoa2V5dXApPVwib25Eb3duQnV0dG9uS2V5VXAoKVwiPjwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFtJTlBVVE5VTUJFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9pbnB1dG51bWJlci5jc3MnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZvY3VzXSc6ICdmb2N1c2VkJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXROdW1iZXIgaW1wbGVtZW50cyBPbkluaXQsQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgc2hvd0J1dHRvbnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGZvcm1hdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBidXR0b25MYXlvdXQ6IHN0cmluZyA9IFwic3RhY2tlZFwiO1xuXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzaXplOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBtYXhsZW5ndGg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcmlhUmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgbWluOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBtYXg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGluY3JlbWVudEJ1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkZWNyZW1lbnRCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaW5jcmVtZW50QnV0dG9uSWNvbjogc3RyaW5nID0gJ3BpIHBpLWFuZ2xlLXVwJztcblxuICAgIEBJbnB1dCgpIGRlY3JlbWVudEJ1dHRvbkljb246IHN0cmluZyA9ICdwaSBwaS1hbmdsZS1kb3duJztcblxuICAgIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDE7XG5cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAT3V0cHV0KCkgb25JbnB1dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbktleURvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgdmFsdWU6IG51bWJlcjtcblxuICAgIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIGZvY3VzZWQ6IGJvb2xlYW47XG5cbiAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcblxuICAgIGdyb3VwQ2hhcjogc3RyaW5nID0gJyc7XG5cbiAgICBwcmVmaXhDaGFyOiBzdHJpbmcgPSAnJztcblxuICAgIHN1ZmZpeENoYXI6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNTcGVjaWFsQ2hhcjogYm9vbGVhbjtcblxuICAgIHRpbWVyOiBhbnk7XG5cbiAgICBsYXN0VmFsdWU6IHN0cmluZztcblxuICAgIF9udW1lcmFsOiBhbnk7XG5cbiAgICBudW1iZXJGb3JtYXQ6IGFueTtcblxuICAgIF9kZWNpbWFsOiBhbnk7XG5cbiAgICBfZ3JvdXA6IGFueTtcblxuICAgIF9taW51c1NpZ246IGFueTtcblxuICAgIF9jdXJyZW5jeTogYW55O1xuXG4gICAgX3ByZWZpeDogYW55O1xuXG4gICAgX3N1ZmZpeDogYW55O1xuXG4gICAgX2luZGV4OiBhbnk7XG5cbiAgICBfbG9jYWxlT3B0aW9uOiBzdHJpbmc7XG5cbiAgICBfbG9jYWxlTWF0Y2hlck9wdGlvbjogc3RyaW5nO1xuXG4gICAgX21vZGVPcHRpb246IHN0cmluZyA9IFwiZGVjaW1hbFwiO1xuXG4gICAgX2N1cnJlbmN5T3B0aW9uOiBzdHJpbmc7XG5cbiAgICBfY3VycmVuY3lEaXNwbGF5T3B0aW9uOiBzdHJpbmc7XG5cbiAgICBfdXNlR3JvdXBpbmdPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgX21pbkZyYWN0aW9uRGlnaXRzT3B0aW9uOiBudW1iZXI7XG5cbiAgICBfbWF4RnJhY3Rpb25EaWdpdHNPcHRpb246IG51bWJlcjtcblxuICAgIF9wcmVmaXhPcHRpb246IHN0cmluZztcblxuICAgIF9zdWZmaXhPcHRpb246IHN0cmluZztcblxuICAgIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGdldCBsb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZU9wdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgbG9jYWxlKGxvY2FsZU9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsZU9wdGlvbiA9IGxvY2FsZU9wdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVDb25zdHJ1Y3RQYXJzZXIoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgbG9jYWxlTWF0Y2hlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlTWF0Y2hlck9wdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgbG9jYWxlTWF0Y2hlcihsb2NhbGVNYXRjaGVyT3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlTWF0Y2hlck9wdGlvbiA9IGxvY2FsZU1hdGNoZXJPcHRpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc3RydWN0UGFyc2VyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IG1vZGUobW9kZU9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX21vZGVPcHRpb24gPSBtb2RlT3B0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnN0cnVjdFBhcnNlcigpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBjdXJyZW5jeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVuY3lPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbmN5KGN1cnJlbmN5T3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY3VycmVuY3lPcHRpb24gPSBjdXJyZW5jeU9wdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVDb25zdHJ1Y3RQYXJzZXIoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgY3VycmVuY3lEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW5jeURpc3BsYXlPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbmN5RGlzcGxheShjdXJyZW5jeURpc3BsYXlPcHRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jdXJyZW5jeURpc3BsYXlPcHRpb24gPSBjdXJyZW5jeURpc3BsYXlPcHRpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc3RydWN0UGFyc2VyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IHVzZUdyb3VwaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlR3JvdXBpbmdPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IHVzZUdyb3VwaW5nKHVzZUdyb3VwaW5nT3B0aW9uOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3VzZUdyb3VwaW5nT3B0aW9uID0gdXNlR3JvdXBpbmdPcHRpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc3RydWN0UGFyc2VyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IG1pbkZyYWN0aW9uRGlnaXRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5GcmFjdGlvbkRpZ2l0c09wdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgbWluRnJhY3Rpb25EaWdpdHMobWluRnJhY3Rpb25EaWdpdHNPcHRpb246IG51bWJlcikge1xuICAgICAgICB0aGlzLl9taW5GcmFjdGlvbkRpZ2l0c09wdGlvbiA9IG1pbkZyYWN0aW9uRGlnaXRzT3B0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnN0cnVjdFBhcnNlcigpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBtYXhGcmFjdGlvbkRpZ2l0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RnJhY3Rpb25EaWdpdHNPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IG1heEZyYWN0aW9uRGlnaXRzKG1heEZyYWN0aW9uRGlnaXRzT3B0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4RnJhY3Rpb25EaWdpdHNPcHRpb24gPSBtYXhGcmFjdGlvbkRpZ2l0c09wdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVDb25zdHJ1Y3RQYXJzZXIoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgcHJlZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVmaXhPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IHByZWZpeChwcmVmaXhPcHRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcmVmaXhPcHRpb24gPSBwcmVmaXhPcHRpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc3RydWN0UGFyc2VyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IHN1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VmZml4T3B0aW9uO1xuICAgIH1cblxuICAgIHNldCBzdWZmaXgoc3VmZml4T3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3VmZml4T3B0aW9uID0gc3VmZml4T3B0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnN0cnVjdFBhcnNlcigpO1xuICAgIH1cblxuXG4gICAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChkaXNhYmxlZClcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy50aW1lcilcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0UGFyc2VyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvY2FsZU1hdGNoZXI6IHRoaXMubG9jYWxlTWF0Y2hlcixcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLm1vZGUsXG4gICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSxcbiAgICAgICAgICAgIGN1cnJlbmN5RGlzcGxheTogdGhpcy5jdXJyZW5jeURpc3BsYXksXG4gICAgICAgICAgICB1c2VHcm91cGluZzogdGhpcy51c2VHcm91cGluZyxcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5taW5GcmFjdGlvbkRpZ2l0cyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5tYXhGcmFjdGlvbkRpZ2l0c1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdFBhcnNlcigpIHtcbiAgICAgICAgdGhpcy5udW1iZXJGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHRoaXMuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgY29uc3QgbnVtZXJhbHMgPSBbLi4ubmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMubG9jYWxlLCB7dXNlR3JvdXBpbmc6IGZhbHNlfSkuZm9ybWF0KDk4NzY1NDMyMTApXS5yZXZlcnNlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3IE1hcChudW1lcmFscy5tYXAoKGQsIGkpID0+IFtkLCBpXSkpO1xuICAgICAgICB0aGlzLl9udW1lcmFsID0gbmV3IFJlZ0V4cChgWyR7bnVtZXJhbHMuam9pbignJyl9XWAsICdnJyk7XG4gICAgICAgIHRoaXMuX2RlY2ltYWwgPSB0aGlzLmdldERlY2ltYWxFeHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuX2dyb3VwID0gdGhpcy5nZXRHcm91cGluZ0V4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5fbWludXNTaWduID0gdGhpcy5nZXRNaW51c1NpZ25FeHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbmN5ID0gdGhpcy5nZXRDdXJyZW5jeUV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5fc3VmZml4ID0gdGhpcy5nZXRTdWZmaXhFeHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHRoaXMuZ2V0UHJlZml4RXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLl9pbmRleCA9IGQgPT4gaW5kZXguZ2V0KGQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbnN0cnVjdFBhcnNlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0UGFyc2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlc2NhcGVSZWdFeHAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICAgIH1cblxuICAgIGdldERlY2ltYWxFeHByZXNzaW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHt1c2VHcm91cGluZzogZmFsc2V9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYFske2Zvcm1hdHRlci5mb3JtYXQoMS4xKS50cmltKCkucmVwbGFjZSh0aGlzLl9udW1lcmFsLCAnJyl9XWAsICdnJyk7XG4gICAgfVxuXG4gICAgZ2V0R3JvdXBpbmdFeHByZXNzaW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHt1c2VHcm91cGluZzogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmdyb3VwQ2hhciA9IGZvcm1hdHRlci5mb3JtYXQoMTAwMDAwMCkudHJpbSgpLnJlcGxhY2UodGhpcy5fbnVtZXJhbCwgJycpLmNoYXJBdCgwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYFske3RoaXMuZ3JvdXBDaGFyfV1gLCAnZycpO1xuICAgIH1cblxuICAgIGdldE1pbnVzU2lnbkV4cHJlc3Npb24oKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwge3VzZUdyb3VwaW5nOiBmYWxzZX0pO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgWyR7Zm9ybWF0dGVyLmZvcm1hdCgtMSkudHJpbSgpLnJlcGxhY2UodGhpcy5fbnVtZXJhbCwgJycpfV1gLCAnZycpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbmN5RXhwcmVzc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVuY3kpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSwgY3VycmVuY3lEaXNwbGF5OiB0aGlzLmN1cnJlbmN5RGlzcGxheX0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYFske2Zvcm1hdHRlci5mb3JtYXQoMSkucmVwbGFjZSgvXFxzL2csICcnKS5yZXBsYWNlKHRoaXMuX251bWVyYWwsICcnKS5yZXBsYWNlKHRoaXMuX2RlY2ltYWwsICcnKS5yZXBsYWNlKHRoaXMuX2dyb3VwLCAnJyl9XWAsICdnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgW11gLCdnJyk7XG4gICAgfVxuXG4gICAgZ2V0UHJlZml4RXhwcmVzc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJlZml4KSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeENoYXIgPSB0aGlzLnByZWZpeDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwge3N0eWxlOiB0aGlzLm1vZGUsIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5LCBjdXJyZW5jeURpc3BsYXk6IHRoaXMuY3VycmVuY3lEaXNwbGF5fSk7XG4gICAgICAgICAgICB0aGlzLnByZWZpeENoYXIgPSBmb3JtYXR0ZXIuZm9ybWF0KDEpLnNwbGl0KCcxJylbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgJHt0aGlzLmVzY2FwZVJlZ0V4cCh0aGlzLnByZWZpeENoYXJ8fCcnKX1gLCAnZycpO1xuICAgIH1cblxuICAgIGdldFN1ZmZpeEV4cHJlc3Npb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN1ZmZpeCkge1xuICAgICAgICAgICAgdGhpcy5zdWZmaXhDaGFyID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHtzdHlsZTogdGhpcy5tb2RlLCBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSwgY3VycmVuY3lEaXNwbGF5OiB0aGlzLmN1cnJlbmN5RGlzcGxheSxcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMH0pO1xuICAgICAgICAgICAgdGhpcy5zdWZmaXhDaGFyID0gZm9ybWF0dGVyLmZvcm1hdCgxKS5zcGxpdCgnMScpWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYCR7dGhpcy5lc2NhcGVSZWdFeHAodGhpcy5zdWZmaXhDaGFyfHwnJyl9YCwgJ2cnKTtcbiAgICB9XG5cbiAgICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnLScpIHsgLy8gTWludXMgc2lnblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwgdGhpcy5nZXRPcHRpb25zKCkpO1xuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlci5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMucHJlZml4ICsgZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0dGVkVmFsdWUgKyB0aGlzLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHBhcnNlVmFsdWUodGV4dCkge1xuICAgICAgICBsZXQgZmlsdGVyZWRUZXh0ID0gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMuX3N1ZmZpeCwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5fcHJlZml4LCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSh0aGlzLl9jdXJyZW5jeSwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5fZ3JvdXAsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMuX21pbnVzU2lnbiwgJy0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMuX2RlY2ltYWwsICcuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSh0aGlzLl9udW1lcmFsLCB0aGlzLl9pbmRleCk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkVGV4dCkge1xuICAgICAgICAgICAgaWYgKGZpbHRlcmVkVGV4dCA9PT0gJy0nKSAvLyBNaW51cyBzaWduXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkVGV4dDtcblxuICAgICAgICAgICAgbGV0IHBhcnNlZFZhbHVlID0gK2ZpbHRlcmVkVGV4dDtcbiAgICAgICAgICAgIHJldHVybiBpc05hTihwYXJzZWRWYWx1ZSkgPyBudWxsIDogcGFyc2VkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXBlYXQoZXZlbnQsIGludGVydmFsLCBkaXIpIHtcbiAgICAgICAgbGV0IGkgPSBpbnRlcnZhbCB8fCA1MDA7XG5cbiAgICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0KGV2ZW50LCA0MCwgZGlyKTtcbiAgICAgICAgfSwgaSk7XG5cbiAgICAgICAgdGhpcy5zcGluKGV2ZW50LCBkaXIpO1xuICAgIH1cblxuICAgIHNwaW4oZXZlbnQsIGRpcikge1xuICAgICAgICBsZXQgc3RlcCA9IHRoaXMuc3RlcCAqIGRpcjtcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpIHx8IDA7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMudmFsaWRhdGVWYWx1ZShjdXJyZW50VmFsdWUgKyBzdGVwKTtcbiAgICAgICAgaWYgKHRoaXMubWF4bGVuZ3RoICYmIHRoaXMubWF4bGVuZ3RoIDwgdGhpcy5mb3JtYXRWYWx1ZShuZXdWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KG5ld1ZhbHVlLCBudWxsLCAnc3BpbicpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKGV2ZW50LCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVPbklucHV0KGV2ZW50LCBjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBvblVwQnV0dG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB0aGlzLnJlcGVhdChldmVudCwgbnVsbCwgMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25VcEJ1dHRvbk1vdXNlVXAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIH1cblxuICAgIG9uVXBCdXR0b25Nb3VzZUxlYXZlKCkge1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICB9XG5cbiAgICBvblVwQnV0dG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0KGV2ZW50LCBudWxsLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXBCdXR0b25LZXlVcCgpIHtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgfVxuXG4gICAgb25Eb3duQnV0dG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB0aGlzLnJlcGVhdChldmVudCwgbnVsbCwgLTEpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRG93bkJ1dHRvbk1vdXNlVXAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIH1cblxuICAgIG9uRG93bkJ1dHRvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIH1cblxuICAgIG9uRG93bkJ1dHRvbktleVVwKCkge1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICB9XG5cbiAgICBvbkRvd25CdXR0b25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzMiB8fCBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5yZXBlYXQoZXZlbnQsIG51bGwsIC0xKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXNlcklucHV0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3BlY2lhbENoYXIpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMubGFzdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTcGVjaWFsQ2hhciA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSW5wdXRLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubGFzdFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BlY2lhbENoYXIgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBsZXQgc2VsZWN0aW9uRW5kID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdWYWx1ZVN0ciA9IG51bGw7XG5cbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIC8vdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluKGV2ZW50LCAxKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZG93blxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW4oZXZlbnQsIC0xKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vbGVmdFxuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNOdW1lcmFsQ2hhcihpbnB1dFZhbHVlLmNoYXJBdChzZWxlY3Rpb25TdGFydCAtIDEpKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL3JpZ2h0XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc051bWVyYWxDaGFyKGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvblN0YXJ0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9lbnRlclxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB0aGlzLnZhbGlkYXRlVmFsdWUodGhpcy5wYXJzZVZhbHVlKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChldmVudCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vYmFja3NwYWNlXG4gICAgICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGV0ZUNoYXIgPSBpbnB1dFZhbHVlLmNoYXJBdChzZWxlY3Rpb25TdGFydCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVjaW1hbENoYXJJbmRleCA9IGlucHV0VmFsdWUuc2VhcmNoKHRoaXMuX2RlY2ltYWwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWNpbWFsLmxhc3RJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNOdW1lcmFsQ2hhcihkZWxldGVDaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dyb3VwLnRlc3QoZGVsZXRlQ2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncm91cC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gaW5wdXRWYWx1ZS5zbGljZSgwLCBzZWxlY3Rpb25TdGFydCAtIDIpICsgaW5wdXRWYWx1ZS5zbGljZShzZWxlY3Rpb25TdGFydCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZGVjaW1hbC50ZXN0KGRlbGV0ZUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCAtIDEsIHNlbGVjdGlvblN0YXJ0IC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWNpbWFsQ2hhckluZGV4ID4gMCAmJiBzZWxlY3Rpb25TdGFydCA+IGRlY2ltYWxDaGFySW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IGlucHV0VmFsdWUuc2xpY2UoMCwgc2VsZWN0aW9uU3RhcnQgLSAxKSArICcwJyArIGlucHV0VmFsdWUuc2xpY2Uoc2VsZWN0aW9uU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVjaW1hbENoYXJJbmRleCA+IDAgJiYgZGVjaW1hbENoYXJJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gaW5wdXRWYWx1ZS5zbGljZSgwLCBzZWxlY3Rpb25TdGFydCAtIDEpICsgJzAnICsgaW5wdXRWYWx1ZS5zbGljZShzZWxlY3Rpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSB0aGlzLnBhcnNlVmFsdWUobmV3VmFsdWVTdHIpID4gMCA/IG5ld1ZhbHVlU3RyIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IGlucHV0VmFsdWUuc2xpY2UoMCwgc2VsZWN0aW9uU3RhcnQgLSAxKSArIGlucHV0VmFsdWUuc2xpY2Uoc2VsZWN0aW9uU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShldmVudCwgbmV3VmFsdWVTdHIsIG51bGwsICdkZWxldGUtc2luZ2xlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHRoaXMuZGVsZXRlUmFuZ2UoaW5wdXRWYWx1ZSwgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlU3RyLCBudWxsLCAnZGVsZXRlLXJhbmdlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRlbFxuICAgICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGV0ZUNoYXIgPSBpbnB1dFZhbHVlLmNoYXJBdChzZWxlY3Rpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWNpbWFsQ2hhckluZGV4ID0gaW5wdXRWYWx1ZS5zZWFyY2godGhpcy5fZGVjaW1hbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlY2ltYWwubGFzdEluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc051bWVyYWxDaGFyKGRlbGV0ZUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ3JvdXAudGVzdChkZWxldGVDaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dyb3VwLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSBpbnB1dFZhbHVlLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0KSArIGlucHV0VmFsdWUuc2xpY2Uoc2VsZWN0aW9uU3RhcnQgKyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2RlY2ltYWwudGVzdChkZWxldGVDaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlY2ltYWwubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQgKyAxLCBzZWxlY3Rpb25TdGFydCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVjaW1hbENoYXJJbmRleCA+IDAgJiYgc2VsZWN0aW9uU3RhcnQgPiBkZWNpbWFsQ2hhckluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSBpbnB1dFZhbHVlLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0KSArICcwJyArIGlucHV0VmFsdWUuc2xpY2Uoc2VsZWN0aW9uU3RhcnQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlY2ltYWxDaGFySW5kZXggPiAwICYmIGRlY2ltYWxDaGFySW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IGlucHV0VmFsdWUuc2xpY2UoMCwgc2VsZWN0aW9uU3RhcnQpICsgJzAnICsgaW5wdXRWYWx1ZS5zbGljZShzZWxlY3Rpb25TdGFydCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gdGhpcy5wYXJzZVZhbHVlKG5ld1ZhbHVlU3RyKSA+IDAgPyBuZXdWYWx1ZVN0ciA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSBpbnB1dFZhbHVlLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0KSArIGlucHV0VmFsdWUuc2xpY2Uoc2VsZWN0aW9uU3RhcnQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlU3RyLCBudWxsLCAnZGVsZXRlLWJhY2stc2luZ2xlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHRoaXMuZGVsZXRlUmFuZ2UoaW5wdXRWYWx1ZSwgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlU3RyLCBudWxsLCAnZGVsZXRlLXJhbmdlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25LZXlEb3duLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXRLZXlQcmVzcyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY29kZSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG4gICAgICAgIGxldCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgY29uc3QgaXNEZWNpbWFsU2lnbiA9IHRoaXMuaXNEZWNpbWFsU2lnbihjaGFyKTtcbiAgICAgICAgY29uc3QgaXNNaW51c1NpZ24gPSB0aGlzLmlzTWludXNTaWduKGNoYXIpO1xuXG4gICAgICAgIGlmICgoNDggPD0gY29kZSAmJiBjb2RlIDw9IDU3KSB8fCBpc01pbnVzU2lnbiB8fCBpc0RlY2ltYWxTaWduKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydChldmVudCwgY2hhciwgeyBpc0RlY2ltYWxTaWduLCBpc01pbnVzU2lnbiB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGFzdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSAoZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3dbJ2NsaXBib2FyZERhdGEnXSkuZ2V0RGF0YSgnVGV4dCcpO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWREYXRhID0gdGhpcy5wYXJzZVZhbHVlKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJlZERhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydChldmVudCwgZmlsdGVyZWREYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzTWludXNTaWduKGNoYXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbnVzU2lnbi50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICB0aGlzLl9taW51c1NpZ24ubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzRGVjaW1hbFNpZ24oY2hhcikge1xuICAgICAgICBpZiAodGhpcy5fZGVjaW1hbC50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNpbWFsLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpbnNlcnQoZXZlbnQsIHRleHQsIHNpZ24gPSB7IGlzRGVjaW1hbFNpZ246IGZhbHNlLCBpc01pbnVzU2lnbjogZmFsc2UgfSkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGxldCBzZWxlY3Rpb25FbmQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IGRlY2ltYWxDaGFySW5kZXggPSBpbnB1dFZhbHVlLnNlYXJjaCh0aGlzLl9kZWNpbWFsKTtcbiAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCBtaW51c0NoYXJJbmRleCA9IGlucHV0VmFsdWUuc2VhcmNoKHRoaXMuX21pbnVzU2lnbik7XG4gICAgICAgIHRoaXMuX21pbnVzU2lnbi5sYXN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgbmV3VmFsdWVTdHI7XG5cbiAgICAgICAgaWYgKHNpZ24uaXNNaW51c1NpZ24pIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25TdGFydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAobWludXNDaGFySW5kZXggPT09IC0xIHx8IHNlbGVjdGlvbkVuZCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHRoaXMuaW5zZXJ0VGV4dChpbnB1dFZhbHVlLCB0ZXh0LCAwLCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlU3RyLCB0ZXh0LCAnaW5zZXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2lnbi5pc0RlY2ltYWxTaWduKSB7XG4gICAgICAgICAgICBpZiAoZGVjaW1hbENoYXJJbmRleCA+IDAgJiYgc2VsZWN0aW9uU3RhcnQgPT09IGRlY2ltYWxDaGFySW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50LCBpbnB1dFZhbHVlLCB0ZXh0LCAnaW5zZXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZWNpbWFsQ2hhckluZGV4ID4gc2VsZWN0aW9uU3RhcnQgJiYgZGVjaW1hbENoYXJJbmRleCA8IHNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gdGhpcy5pbnNlcnRUZXh0KGlucHV0VmFsdWUsIHRleHQsIHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlU3RyLCB0ZXh0LCAnaW5zZXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYXhGcmFjdGlvbkRpZ2l0cyA9IHRoaXMubnVtYmVyRm9ybWF0LnJlc29sdmVkT3B0aW9ucygpLm1heGltdW1GcmFjdGlvbkRpZ2l0cztcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdGlvbiA9IHNlbGVjdGlvblN0YXJ0ICE9PSBzZWxlY3Rpb25FbmQgPyAncmFuZ2UtaW5zZXJ0JyA6ICdpbnNlcnQnO1xuXG4gICAgICAgICAgICBpZiAoZGVjaW1hbENoYXJJbmRleCA+IDAgJiYgc2VsZWN0aW9uU3RhcnQgPiBkZWNpbWFsQ2hhckluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzZWxlY3Rpb25TdGFydCArIHRleHQubGVuZ3RoIC0gKGRlY2ltYWxDaGFySW5kZXggKyAxKSkgPD0gbWF4RnJhY3Rpb25EaWdpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSBpbnB1dFZhbHVlLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0KSArIHRleHQgKyBpbnB1dFZhbHVlLnNsaWNlKHNlbGVjdGlvblN0YXJ0ICsgdGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50LCBuZXdWYWx1ZVN0ciwgdGV4dCwgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHRoaXMuaW5zZXJ0VGV4dChpbnB1dFZhbHVlLCB0ZXh0LCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50LCBuZXdWYWx1ZVN0ciwgdGV4dCwgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc2VydFRleHQodmFsdWUsIHRleHQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IHRleHRTcGxpdCA9IHRleHQuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAodGV4dFNwbGl0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNpbWFsQ2hhckluZGV4ID0gdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCkuc2VhcmNoKHRoaXMuX2RlY2ltYWwpO1xuICAgICAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIChkZWNpbWFsQ2hhckluZGV4ID4gMCkgPyB2YWx1ZS5zbGljZSgwLCBzdGFydCkgKyB0aGlzLmZvcm1hdFZhbHVlKHRleHQpICsgdmFsdWUuc2xpY2UoZW5kKSA6ICh2YWx1ZSB8fCB0aGlzLmZvcm1hdFZhbHVlKHRleHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoZW5kIC0gc3RhcnQpID09PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFZhbHVlKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dCArIHZhbHVlLnNsaWNlKGVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW5kID09PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCBzdGFydCkgKyB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHN0YXJ0KSArIHRleHQgKyB2YWx1ZS5zbGljZShlbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlUmFuZ2UodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlU3RyO1xuXG4gICAgICAgIGlmICgoZW5kIC0gc3RhcnQpID09PSB2YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICBuZXdWYWx1ZVN0ciA9ICcnO1xuICAgICAgICBlbHNlIGlmIChzdGFydCA9PT0gMClcbiAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gdmFsdWUuc2xpY2UoZW5kKTtcbiAgICAgICAgZWxzZSBpZiAoZW5kID09PSB2YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHZhbHVlLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSB2YWx1ZS5zbGljZSgwLCBzdGFydCkgKyB2YWx1ZS5zbGljZShlbmQpO1xuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZVN0cjtcbiAgICB9XG5cbiAgICBpbml0Q3Vyc29yKCkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgdmFsdWVMZW5ndGggPSBpbnB1dFZhbHVlLmxlbmd0aDtcbiAgICAgICAgbGV0IGluZGV4ID0gbnVsbDtcblxuICAgICAgICBsZXQgY2hhciA9IGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1lcmFsQ2hhcihjaGFyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9sZWZ0XG4gICAgICAgIGxldCBpID0gc2VsZWN0aW9uU3RhcnQgLSAxO1xuICAgICAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgICAgICBjaGFyID0gaW5wdXRWYWx1ZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc051bWVyYWxDaGFyKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoaW5kZXggKyAxLCBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaSA9IHNlbGVjdGlvblN0YXJ0ICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdmFsdWVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjaGFyID0gaW5wdXRWYWx1ZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNOdW1lcmFsQ2hhcihjaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKGluZGV4LCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbklucHV0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuaW5pdEN1cnNvcigpO1xuICAgIH1cblxuICAgIGlzTnVtZXJhbENoYXIoY2hhcikge1xuICAgICAgICBpZiAoY2hhci5sZW5ndGggPT09IDEgJiYgKHRoaXMuX251bWVyYWwudGVzdChjaGFyKSB8fCB0aGlzLl9kZWNpbWFsLnRlc3QoY2hhcikgfHwgdGhpcy5fZ3JvdXAudGVzdChjaGFyKSB8fCB0aGlzLl9taW51c1NpZ24udGVzdChjaGFyKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRSZWdleCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzZXRSZWdleCgpIHtcbiAgICAgICAgdGhpcy5fbnVtZXJhbC5sYXN0SW5kZXggPSAgMDtcbiAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAgMDtcbiAgICAgICAgdGhpcy5fZ3JvdXAubGFzdEluZGV4ID0gIDA7XG4gICAgICAgIHRoaXMuX21pbnVzU2lnbi5sYXN0SW5kZXggPSAgMDtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZShldmVudCwgdmFsdWVTdHIsIGluc2VydGVkVmFsdWVTdHIsIG9wZXJhdGlvbikge1xuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGlmICh2YWx1ZVN0ciAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZVN0cik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KG5ld1ZhbHVlLCBpbnNlcnRlZFZhbHVlU3RyLCBvcGVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVPbklucHV0KGV2ZW50LCBjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVPbklucHV0KGV2ZW50LCBjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWVDaGFuZ2VkKGN1cnJlbnRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5wdXQuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbHVlQ2hhbmdlZChjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCAmJiBjdXJyZW50VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRDdXJyZW50VmFsdWUgPSAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ3N0cmluZycpID8gdGhpcy5wYXJzZVZhbHVlKGN1cnJlbnRWYWx1ZSkgOiBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3VmFsdWUgIT09IHBhcnNlZEN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1pbiAhPT0gbnVsbCAmJiB2YWx1ZSA8IHRoaXMubWluKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5taW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXggIT09IG51bGwgJiYgdmFsdWUgPiB0aGlzLm1heCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnLScpIHsgLy8gTWludXMgc2lnblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdXBkYXRlSW5wdXQodmFsdWUsIGluc2VydGVkVmFsdWVTdHIsIG9wZXJhdGlvbikge1xuICAgICAgICBpbnNlcnRlZFZhbHVlU3RyID0gaW5zZXJ0ZWRWYWx1ZVN0ciB8fCAnJztcblxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGxldCBjdXJyZW50TGVuZ3RoID0gaW5wdXRWYWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5pbml0Q3Vyc29yKCk7XG4gICAgICAgICAgICBjb25zdCBwcmVmaXhMZW5ndGggPSAodGhpcy5wcmVmaXhDaGFyIHx8ICcnKS5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSBwcmVmaXhMZW5ndGggKyBpbnNlcnRlZFZhbHVlU3RyLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25FbmQsIHNlbGVjdGlvbkVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICBsZXQgc2VsZWN0aW9uRW5kID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heGxlbmd0aCAmJiB0aGlzLm1heGxlbmd0aCA8IG5ld1ZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3TGVuZ3RoID0gbmV3VmFsdWUubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAncmFuZ2UtaW5zZXJ0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoKGlucHV0VmFsdWUgfHwgJycpLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRWYWx1ZVN0ciA9IHN0YXJ0VmFsdWUgIT09IG51bGwgPyBzdGFydFZhbHVlLnRvU3RyaW5nKCkgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEV4cHIgPSBzdGFydFZhbHVlU3RyLnNwbGl0KCcnKS5qb2luKGAoJHt0aGlzLmdyb3VwQ2hhcn0pP2ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNSZWdleCA9IG5ldyBSZWdFeHAoc3RhcnRFeHByLCAnZycpO1xuICAgICAgICAgICAgICAgIHNSZWdleC50ZXN0KG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRFeHByID0gaW5zZXJ0ZWRWYWx1ZVN0ci5zcGxpdCgnJykuam9pbihgKCR7dGhpcy5ncm91cENoYXJ9KT9gKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0UmVnZXggPSBuZXcgUmVnRXhwKHRFeHByLCAnZycpO1xuICAgICAgICAgICAgICAgIHRSZWdleC50ZXN0KG5ld1ZhbHVlLnNsaWNlKHNSZWdleC5sYXN0SW5kZXgpKTtcblxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IHNSZWdleC5sYXN0SW5kZXggKyB0UmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25FbmQsIHNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnaW5zZXJ0JyB8fCBvcGVyYXRpb24gPT09ICdkZWxldGUtYmFjay1zaW5nbGUnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uRW5kICsgMSwgc2VsZWN0aW9uRW5kICsgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnZGVsZXRlLXNpbmdsZScpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25FbmQgLSAxLCBzZWxlY3Rpb25FbmQgLSAxKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdkZWxldGUtcmFuZ2UnIHx8IG9wZXJhdGlvbiA9PT0gJ3NwaW4nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uRW5kLCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnZGVsZXRlLWJhY2stc2luZ2xlJykge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2Q2hhciA9IGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvbkVuZCAtIDEpO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Q2hhciA9IGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBjdXJyZW50TGVuZ3RoIC0gbmV3TGVuZ3RoO1xuICAgICAgICAgICAgICAgIGxldCBpc0dyb3VwQ2hhciA9IHRoaXMuX2dyb3VwLnRlc3QobmV4dENoYXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzR3JvdXBDaGFyICYmIGRpZmYgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5kICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0dyb3VwQ2hhciAmJiB0aGlzLmlzTnVtZXJhbENoYXIocHJldkNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkVuZCArPSAoLTEgKiBkaWZmKSArIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXAubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uRW5kLCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kICsgKG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25FbmQsIHNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy52YWxpZGF0ZVZhbHVlKHRoaXMucGFyc2VWYWx1ZSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpKTtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCBuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsIG5ld1ZhbHVlKTtcblxuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTW9kZWwoZXZlbnQsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgZ2V0IGZpbGxlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICE9IG51bGwgJiYgdGhpcy52YWx1ZS50b1N0cmluZygpLmxlbmd0aCA+IDApXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxJbnB1dFRleHRNb2R1bGUsIEJ1dHRvbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0lucHV0TnVtYmVyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJbnB1dE51bWJlcl1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXROdW1iZXJNb2R1bGUgeyB9XG4iXX0=