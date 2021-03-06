import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Input, Output, ViewChild, ContentChild, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService, Header, Footer, PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ObjectUtils } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/ripple';

const _c0 = ["headerchkbox"];
function Listbox_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Listbox_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_1_ng_container_2_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
const _c1 = function (a0) { return { "p-checkbox-disabled": a0 }; };
const _c2 = function (a0, a1, a2) { return { "p-highlight": a0, "p-focus": a1, "p-disabled": a2 }; };
const _c3 = function (a0) { return { "pi pi-check": a0 }; };
function Listbox_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵelementStart(2, "input", 12);
    ɵngcc0.ɵɵlistener("focus", function Listbox_div_2_div_1_Template_input_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.onHeaderCheckboxFocus(); })("blur", function Listbox_div_2_div_1_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.onHeaderCheckboxBlur(); })("keydown.space", function Listbox_div_2_div_1_Template_input_keydown_space_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.toggleAll($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 13, 14);
    ɵngcc0.ɵɵlistener("click", function Listbox_div_2_div_1_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.toggleAll($event); });
    ɵngcc0.ɵɵelement(5, "span", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c1, ctx_r8.disabled || ctx_r8.toggleAllDisabled));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("checked", ctx_r8.allChecked);
    ɵngcc0.ɵɵattribute("disabled", ctx_r8.disabled || ctx_r8.toggleAllDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(7, _c2, ctx_r8.allChecked, ctx_r8.headerCheckboxFocus, ctx_r8.disabled || ctx_r8.toggleAllDisabled));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c3, ctx_r8.allChecked));
} }
function Listbox_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "input", 17);
    ɵngcc0.ɵɵlistener("input", function Listbox_div_2_div_2_Template_input_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.onFilter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(2, "span", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r9.filterValue || "")("disabled", ctx_r9.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r9.filterPlaceHolder)("aria-label", ctx_r9.ariaFilterLabel);
} }
function Listbox_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, Listbox_div_2_div_1_Template, 6, 13, "div", 8);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_2_div_2_Template, 3, 4, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.checkbox && ctx_r1.multiple && ctx_r1.showToggleAll);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.filter);
} }
function Listbox_ng_container_5_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const optgroup_r19 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r20 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r20.getOptionGroupLabel(optgroup_r19) || "empty");
} }
function Listbox_ng_container_5_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Listbox_ng_container_5_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c4 = function (a0) { return { $implicit: a0 }; };
function Listbox_ng_container_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 20);
    ɵngcc0.ɵɵtemplate(1, Listbox_ng_container_5_ng_template_1_span_1_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵtemplate(2, Listbox_ng_container_5_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, Listbox_ng_container_5_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 21);
} if (rf & 2) {
    const optgroup_r19 = ctx.$implicit;
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    const _r4 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r18.groupTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r18.groupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c4, optgroup_r19));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c4, ctx_r18.getOptionGroupChildren(optgroup_r19)));
} }
function Listbox_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Listbox_ng_container_5_ng_template_1_Template, 4, 9, "ng-template", 19);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.optionsToRender);
} }
function Listbox_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Listbox_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Listbox_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    const _r4 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c4, ctx_r3.optionsToRender));
} }
const _c5 = function (a0) { return { "p-highlight": a0 }; };
function Listbox_ng_template_7_li_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelementStart(1, "div", 24);
    ɵngcc0.ɵɵelement(2, "span", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r27 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c1, ctx_r29.disabled || ctx_r29.isOptionDisabled(option_r27)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c5, ctx_r29.isSelected(option_r27)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c3, ctx_r29.isSelected(option_r27)));
} }
function Listbox_ng_template_7_li_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r27 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r30 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r30.getOptionLabel(option_r27));
} }
function Listbox_ng_template_7_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c6 = function (a1, a2) { return { "p-listbox-item": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c7 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function Listbox_ng_template_7_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 23);
    ɵngcc0.ɵɵlistener("click", function Listbox_ng_template_7_li_0_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r35); const option_r27 = ctx.$implicit; const ctx_r34 = ɵngcc0.ɵɵnextContext(2); return ctx_r34.onOptionClick($event, option_r27); })("dblclick", function Listbox_ng_template_7_li_0_Template_li_dblclick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r35); const option_r27 = ctx.$implicit; const ctx_r36 = ɵngcc0.ɵɵnextContext(2); return ctx_r36.onOptionDoubleClick($event, option_r27); })("touchend", function Listbox_ng_template_7_li_0_Template_li_touchend_0_listener() { ɵngcc0.ɵɵrestoreView(_r35); const option_r27 = ctx.$implicit; const ctx_r37 = ɵngcc0.ɵɵnextContext(2); return ctx_r37.onOptionTouchEnd(option_r27); })("keydown", function Listbox_ng_template_7_li_0_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r35); const option_r27 = ctx.$implicit; const ctx_r38 = ɵngcc0.ɵɵnextContext(2); return ctx_r38.onOptionKeyDown($event, option_r27); });
    ɵngcc0.ɵɵtemplate(1, Listbox_ng_template_7_li_0_div_1_Template, 3, 9, "div", 8);
    ɵngcc0.ɵɵtemplate(2, Listbox_ng_template_7_li_0_span_2_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵtemplate(3, Listbox_ng_template_7_li_0_ng_container_3_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r26 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c6, ctx_r26.isSelected(option_r27), ctx_r26.isOptionDisabled(option_r27)));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r26.disabled || ctx_r26.isOptionDisabled(option_r27) ? null : "0")("aria-label", ctx_r26.getOptionLabel(option_r27))("aria-selected", ctx_r26.isSelected(option_r27));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r26.checkbox && ctx_r26.multiple);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r26.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r26.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(11, _c7, option_r27, i_r28));
} }
function Listbox_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Listbox_ng_template_7_li_0_Template, 4, 14, "li", 22);
} if (rf & 2) {
    const optionsToDisplay_r25 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngForOf", optionsToDisplay_r25);
} }
function Listbox_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Listbox_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_9_ng_container_2_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
const _c8 = [[["p-header"]], [["p-footer"]]];
const _c9 = function (a1) { return { "p-listbox p-component": true, "p-disabled": a1 }; };
const _c10 = ["p-header", "p-footer"];
const LISTBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Listbox),
    multi: true
};
class Listbox {
    constructor(el, cd, filterService) {
        this.el = el;
        this.cd = cd;
        this.filterService = filterService;
        this.checkbox = false;
        this.filter = false;
        this.filterMatchMode = 'contains';
        this.metaKeySelection = true;
        this.showToggleAll = true;
        this.optionGroupChildren = "items";
        this.onChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onDblClick = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    get options() {
        return this._options;
    }
    set options(val) {
        this._options = val;
    }
    get filterValue() {
        return this._filterValue;
    }
    set filterValue(val) {
        this._filterValue = val;
        this.activateFilter();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'group':
                    this.groupTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : (option.label != undefined ? option.label : option);
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : (optionGroup.label != undefined ? optionGroup.label : optionGroup);
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : (this.optionLabel || option.value === undefined ? option : option.value);
    }
    isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : (option.disabled !== undefined ? option.disabled : false);
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
    onOptionClick(event, option) {
        if (this.disabled || this.isOptionDisabled(option) || this.readonly) {
            return;
        }
        if (this.multiple) {
            if (this.checkbox)
                this.onOptionClickCheckbox(event, option);
            else
                this.onOptionClickMultiple(event, option);
        }
        else {
            this.onOptionClickSingle(event, option);
        }
        this.onClick.emit({
            originalEvent: event,
            option: option,
            value: this.value
        });
        this.optionTouched = false;
    }
    onOptionTouchEnd(option) {
        if (this.disabled || this.isOptionDisabled(option) || this.readonly) {
            return;
        }
        this.optionTouched = true;
    }
    onOptionDoubleClick(event, option) {
        if (this.disabled || this.isOptionDisabled(option) || this.readonly) {
            return;
        }
        this.onDblClick.emit({
            originalEvent: event,
            option: option,
            value: this.value
        });
    }
    onOptionClickSingle(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let metaSelection = this.optionTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            if (selected) {
                if (metaKey) {
                    this.value = null;
                    valueChanged = true;
                }
            }
            else {
                this.value = this.getOptionValue(option);
                valueChanged = true;
            }
        }
        else {
            this.value = selected ? null : this.getOptionValue(option);
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        }
    }
    onOptionClickMultiple(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let metaSelection = this.optionTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            if (selected) {
                if (metaKey) {
                    this.removeOption(option);
                }
                else {
                    this.value = [this.getOptionValue(option)];
                }
                valueChanged = true;
            }
            else {
                this.value = (metaKey) ? this.value || [] : [];
                this.value = [...this.value, this.getOptionValue(option)];
                valueChanged = true;
            }
        }
        else {
            if (selected) {
                this.removeOption(option);
            }
            else {
                this.value = [...this.value || [], this.getOptionValue(option)];
            }
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        }
    }
    onOptionClickCheckbox(event, option) {
        if (this.disabled || this.readonly) {
            return;
        }
        let selected = this.isSelected(option);
        if (selected) {
            this.removeOption(option);
        }
        else {
            this.value = this.value ? this.value : [];
            this.value = [...this.value, this.getOptionValue(option)];
        }
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    removeOption(option) {
        this.value = this.value.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey));
    }
    isSelected(option) {
        let selected = false;
        let optionValue = this.getOptionValue(option);
        if (this.multiple) {
            if (this.value) {
                for (let val of this.value) {
                    if (ObjectUtils.equals(val, optionValue, this.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.value, optionValue, this.dataKey);
        }
        return selected;
    }
    get allChecked() {
        let optionsToRender = this.optionsToRender;
        if (!optionsToRender || optionsToRender.length === 0) {
            return false;
        }
        else {
            let selectedDisabledItemsLength = 0;
            let unselectedDisabledItemsLength = 0;
            let selectedEnabledItemsLength = 0;
            let visibleOptionsLength = this.group ? 0 : this.optionsToRender.length;
            for (let option of optionsToRender) {
                if (!this.group) {
                    let disabled = this.isOptionDisabled(option);
                    let selected = this.isSelected(option);
                    if (disabled) {
                        if (selected)
                            selectedDisabledItemsLength++;
                        else
                            unselectedDisabledItemsLength++;
                    }
                    else {
                        if (selected)
                            selectedEnabledItemsLength++;
                        else
                            return false;
                    }
                }
                else {
                    for (let opt of this.getOptionGroupChildren(option)) {
                        let disabled = this.isOptionDisabled(opt);
                        let selected = this.isSelected(opt);
                        if (disabled) {
                            if (selected)
                                selectedDisabledItemsLength++;
                            else
                                unselectedDisabledItemsLength++;
                        }
                        else {
                            if (selected)
                                selectedEnabledItemsLength++;
                            else {
                                return false;
                            }
                        }
                        visibleOptionsLength++;
                    }
                }
            }
            return (visibleOptionsLength === selectedDisabledItemsLength
                || visibleOptionsLength === selectedEnabledItemsLength
                || selectedEnabledItemsLength && visibleOptionsLength === (selectedEnabledItemsLength + unselectedDisabledItemsLength + selectedDisabledItemsLength));
        }
    }
    get optionsToRender() {
        return this._filteredOptions || this.options;
    }
    hasFilter() {
        return this._filterValue && this._filterValue.trim().length > 0;
    }
    onFilter(event) {
        this._filterValue = event.target.value;
        this.activateFilter();
    }
    activateFilter() {
        if (this.hasFilter() && this._options) {
            if (this.group) {
                let searchFields = (this.optionLabel || 'label').split(',');
                let filteredGroups = [];
                for (let optgroup of this.options) {
                    let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                    if (filteredSubOptions && filteredSubOptions.length) {
                        filteredGroups.push(Object.assign(Object.assign({}, optgroup), { [this.optionGroupChildren]: filteredSubOptions }));
                    }
                }
                this._filteredOptions = filteredGroups;
            }
            else {
                this._filteredOptions = this._options.filter(option => this.filterService.filters[this.filterMatchMode](this.getOptionLabel(option), this._filterValue, this.filterLocale));
            }
        }
        else {
            this._filteredOptions = null;
        }
    }
    get toggleAllDisabled() {
        let optionsToRender = this.optionsToRender;
        if (!optionsToRender || optionsToRender.length === 0) {
            return true;
        }
        else {
            for (let option of optionsToRender) {
                if (!this.isOptionDisabled(option))
                    return false;
            }
            return true;
        }
    }
    toggleAll(event) {
        if (this.disabled || this.toggleAllDisabled || this.readonly) {
            return;
        }
        let allChecked = this.allChecked;
        if (allChecked)
            this.uncheckAll();
        else
            this.checkAll();
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event, value: this.value });
        event.preventDefault();
    }
    checkAll() {
        let optionsToRender = this.optionsToRender;
        let val = [];
        optionsToRender.forEach(opt => {
            if (!this.group) {
                let optionDisabled = this.isOptionDisabled(opt);
                if (!optionDisabled || (optionDisabled && this.isSelected(opt))) {
                    val.push(this.getOptionValue(opt));
                }
            }
            else {
                let subOptions = this.getOptionGroupChildren(opt);
                if (subOptions) {
                    subOptions.forEach(option => {
                        let optionDisabled = this.isOptionDisabled(option);
                        if (!optionDisabled || (optionDisabled && this.isSelected(option))) {
                            val.push(this.getOptionValue(option));
                        }
                    });
                }
            }
        });
        this.value = val;
    }
    uncheckAll() {
        let optionsToRender = this.optionsToRender;
        let val = [];
        optionsToRender.forEach(opt => {
            if (!this.group) {
                let optionDisabled = this.isOptionDisabled(opt);
                if (optionDisabled && this.isSelected(opt)) {
                    val.push(this.getOptionValue(opt));
                }
            }
            else {
                if (opt.items) {
                    opt.items.forEach(option => {
                        let optionDisabled = this.isOptionDisabled(option);
                        if (optionDisabled && this.isSelected(option)) {
                            val.push(this.getOptionValue(option));
                        }
                    });
                }
            }
        });
        this.value = val;
    }
    onOptionKeyDown(event, option) {
        if (this.readonly) {
            return;
        }
        let item = event.currentTarget;
        switch (event.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(item);
                if (nextItem) {
                    nextItem.focus();
                }
                event.preventDefault();
                break;
            //up
            case 38:
                var prevItem = this.findPrevItem(item);
                if (prevItem) {
                    prevItem.focus();
                }
                event.preventDefault();
                break;
            //enter
            case 13:
                this.onOptionClick(event, option);
                event.preventDefault();
                break;
        }
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return DomHandler.hasClass(nextItem, 'p-disabled') || DomHandler.isHidden(nextItem) || DomHandler.hasClass(nextItem, 'p-listbox-item-group') ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return DomHandler.hasClass(prevItem, 'p-disabled') || DomHandler.isHidden(prevItem) || DomHandler.hasClass(prevItem, 'p-listbox-item-group') ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }
    onHeaderCheckboxFocus() {
        this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
        this.headerCheckboxFocus = false;
    }
}
Listbox.ɵfac = function Listbox_Factory(t) { return new (t || Listbox)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FilterService)); };
Listbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Listbox, selectors: [["p-listbox"]], contentQueries: function Listbox_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Listbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
    } }, inputs: { checkbox: "checkbox", filter: "filter", filterMatchMode: "filterMatchMode", metaKeySelection: "metaKeySelection", showToggleAll: "showToggleAll", optionGroupChildren: "optionGroupChildren", options: "options", filterValue: "filterValue", disabled: "disabled", multiple: "multiple", style: "style", styleClass: "styleClass", listStyle: "listStyle", listStyleClass: "listStyleClass", readonly: "readonly", filterLocale: "filterLocale", dataKey: "dataKey", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", optionDisabled: "optionDisabled", ariaFilterLabel: "ariaFilterLabel", filterPlaceHolder: "filterPlaceHolder", group: "group" }, outputs: { onChange: "onChange", onClick: "onClick", onDblClick: "onDblClick" }, features: [ɵngcc0.ɵɵProvidersFeature([LISTBOX_VALUE_ACCESSOR])], ngContentSelectors: _c10, decls: 10, vars: 15, consts: [[3, "ngClass", "ngStyle"], ["class", "p-listbox-header", 4, "ngIf"], ["role", "listbox", "aria-multiselectable", "multiple", 1, "p-listbox-list"], [4, "ngIf"], ["itemslist", ""], ["class", "p-listbox-footer", 4, "ngIf"], [1, "p-listbox-header"], [4, "ngTemplateOutlet"], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], ["class", "p-listbox-filter-container", 4, "ngIf"], [1, "p-checkbox", "p-component", 3, "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "readonly", "readonly", 3, "checked", "focus", "blur", "keydown.space"], [1, "p-checkbox-box", 3, "ngClass", "click"], ["headerchkbox", ""], [1, "p-checkbox-icon", 3, "ngClass"], [1, "p-listbox-filter-container"], ["type", "text", 1, "p-listbox-filter", "p-inputtext", "p-component", 3, "value", "disabled", "input"], [1, "p-listbox-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "p-listbox-item-group"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pRipple", "", "role", "option", 3, "ngClass", "click", "dblclick", "touchend", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", "role", "option", 3, "ngClass", "click", "dblclick", "touchend", "keydown"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-listbox-footer"]], template: function Listbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c8);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Listbox_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, Listbox_div_2_Template, 3, 2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "div", 0);
        ɵngcc0.ɵɵelementStart(4, "ul", 2);
        ɵngcc0.ɵɵtemplate(5, Listbox_ng_container_5_Template, 2, 1, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(6, Listbox_ng_container_6_Template, 2, 4, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(7, Listbox_ng_template_7_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, Listbox_div_9_Template, 3, 1, "div", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(13, _c9, ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.checkbox && ctx.multiple && ctx.showToggleAll || ctx.filter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.listStyleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-listbox-list-wrapper")("ngStyle", ctx.listStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.group);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.group);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, ɵngcc3.Ripple], styles: [".p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;position:relative;user-select:none}.p-listbox-header,.p-listbox-item{align-items:center;display:flex}.p-listbox-filter-container{flex:1 1 auto;position:relative}.p-listbox-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-listbox-filter{width:100%}"], encapsulation: 2, changeDetection: 0 });
Listbox.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FilterService }
];
Listbox.propDecorators = {
    multiple: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    listStyle: [{ type: Input }],
    listStyleClass: [{ type: Input }],
    readonly: [{ type: Input }],
    disabled: [{ type: Input }],
    checkbox: [{ type: Input }],
    filter: [{ type: Input }],
    filterMatchMode: [{ type: Input }],
    filterLocale: [{ type: Input }],
    metaKeySelection: [{ type: Input }],
    dataKey: [{ type: Input }],
    showToggleAll: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    optionDisabled: [{ type: Input }],
    ariaFilterLabel: [{ type: Input }],
    filterPlaceHolder: [{ type: Input }],
    group: [{ type: Input }],
    onChange: [{ type: Output }],
    onClick: [{ type: Output }],
    onDblClick: [{ type: Output }],
    headerCheckboxViewChild: [{ type: ViewChild, args: ['headerchkbox',] }],
    headerFacet: [{ type: ContentChild, args: [Header,] }],
    footerFacet: [{ type: ContentChild, args: [Footer,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    options: [{ type: Input }],
    filterValue: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Listbox, [{
        type: Component,
        args: [{
                selector: 'p-listbox',
                template: `
    <div [ngClass]="{'p-listbox p-component': true, 'p-disabled': disabled}" [ngStyle]="style" [class]="styleClass">
      <div class="p-listbox-header" *ngIf="headerFacet || headerTemplate">
        <ng-content select="p-header"></ng-content>
        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
      </div>
      <div class="p-listbox-header" *ngIf="(checkbox && multiple && showToggleAll) || filter">
        <div class="p-checkbox p-component" *ngIf="checkbox && multiple && showToggleAll" [ngClass]="{'p-checkbox-disabled': disabled || toggleAllDisabled}">
          <div class="p-hidden-accessible">
            <input type="checkbox" readonly="readonly" [checked]="allChecked" (focus)="onHeaderCheckboxFocus()" (blur)="onHeaderCheckboxBlur()" (keydown.space)="toggleAll($event)" [attr.disabled]="disabled || toggleAllDisabled">
          </div>
          <div #headerchkbox class="p-checkbox-box" [ngClass]="{'p-highlight': allChecked, 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled}" (click)="toggleAll($event)">
            <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':allChecked}"></span>
          </div>
        </div>
        <div class="p-listbox-filter-container" *ngIf="filter">
          <input type="text" [value]="filterValue||''" (input)="onFilter($event)" class="p-listbox-filter p-inputtext p-component" [disabled]="disabled" [attr.placeholder]="filterPlaceHolder" [attr.aria-label]="ariaFilterLabel">
          <span class="p-listbox-filter-icon pi pi-search"></span>
        </div>
      </div>
      <div [ngClass]="'p-listbox-list-wrapper'" [ngStyle]="listStyle" [class]="listStyleClass">
        <ul class="p-listbox-list" role="listbox" aria-multiselectable="multiple">
            <ng-container *ngIf="group">
                <ng-template ngFor let-optgroup [ngForOf]="optionsToRender">
                    <li class="p-listbox-item-group">
                        <span *ngIf="!groupTemplate">{{getOptionGroupLabel(optgroup)||'empty'}}</span>
                        <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                    </li>
                    <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: getOptionGroupChildren(optgroup)}"></ng-container>
                </ng-template>
            </ng-container>
            <ng-container *ngIf="!group">
                    <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optionsToRender}"></ng-container>
            </ng-container>
            <ng-template #itemslist let-optionsToDisplay>
                <li *ngFor="let option of optionsToDisplay; let i = index;" [attr.tabindex]="disabled || isOptionDisabled(option) ? null : '0'" pRipple
                    [ngClass]="{'p-listbox-item':true,'p-highlight':isSelected(option), 'p-disabled': this.isOptionDisabled(option)}" role="option" [attr.aria-label]="getOptionLabel(option)"
                    [attr.aria-selected]="isSelected(option)" (click)="onOptionClick($event,option)" (dblclick)="onOptionDoubleClick($event,option)" (touchend)="onOptionTouchEnd(option)" (keydown)="onOptionKeyDown($event,option)">
                    <div class="p-checkbox p-component" *ngIf="checkbox && multiple" [ngClass]="{'p-checkbox-disabled': disabled || isOptionDisabled(option)}">
                        <div class="p-checkbox-box" [ngClass]="{'p-highlight':isSelected(option)}">
                            <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':isSelected(option)}"></span>
                        </div>
                    </div>
                    <span *ngIf="!itemTemplate">{{getOptionLabel(option)}}</span>
                    <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
                </li>
            </ng-template>
        </ul>
      </div>
      <div class="p-listbox-footer" *ngIf="footerFacet || footerTemplate">
        <ng-content select="p-footer"></ng-content>
        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
      </div>
    </div>
  `,
                providers: [LISTBOX_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;position:relative;user-select:none}.p-listbox-header,.p-listbox-item{align-items:center;display:flex}.p-listbox-filter-container{flex:1 1 auto;position:relative}.p-listbox-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-listbox-filter{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FilterService }]; }, { checkbox: [{
            type: Input
        }], filter: [{
            type: Input
        }], filterMatchMode: [{
            type: Input
        }], metaKeySelection: [{
            type: Input
        }], showToggleAll: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onClick: [{
            type: Output
        }], onDblClick: [{
            type: Output
        }], options: [{
            type: Input
        }], filterValue: [{
            type: Input
        }], disabled: [{
            type: Input
        }], multiple: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], listStyle: [{
            type: Input
        }], listStyleClass: [{
            type: Input
        }], readonly: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], optionDisabled: [{
            type: Input
        }], ariaFilterLabel: [{
            type: Input
        }], filterPlaceHolder: [{
            type: Input
        }], group: [{
            type: Input
        }], headerCheckboxViewChild: [{
            type: ViewChild,
            args: ['headerchkbox']
        }], headerFacet: [{
            type: ContentChild,
            args: [Header]
        }], footerFacet: [{
            type: ContentChild,
            args: [Footer]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
class ListboxModule {
}
ListboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ListboxModule });
ListboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ListboxModule_Factory(t) { return new (t || ListboxModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ListboxModule, { declarations: function () { return [Listbox]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [Listbox, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [Listbox, SharedModule],
                declarations: [Listbox]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { LISTBOX_VALUE_ACCESSOR, Listbox, ListboxModule };

//# sourceMappingURL=primeng-listbox.js.map