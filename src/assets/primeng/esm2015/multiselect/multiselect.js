import { NgModule, Component, ElementRef, Input, Output, Renderer2, EventEmitter, forwardRef, ViewChild, ChangeDetectorRef, ContentChildren, ContentChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { ObjectUtils } from 'primeng/utils';
import { SharedModule, PrimeTemplate, Footer, Header, FilterService } from 'primeng/api';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/ripple';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/api';
import * as ɵngcc4 from 'primeng/tooltip';
import * as ɵngcc5 from '@angular/cdk/scrolling';

function MultiSelectItem_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function MultiSelectItem_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "height": a0 }; };
const _c1 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
const _c2 = function (a0) { return { "p-highlight": a0 }; };
const _c3 = function (a0) { return { "pi pi-check": a0 }; };
const _c4 = function (a0) { return { $implicit: a0 }; };
const _c5 = ["container"];
const _c6 = ["filterInput"];
const _c7 = ["in"];
function MultiSelect_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.valuesAsString || "empty");
} }
function MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 17);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const item_r9 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r13 = ɵngcc0.ɵɵnextContext(3); return ctx_r13.removeChip(item_r9, $event); });
    ɵngcc0.ɵɵelementEnd();
} }
function MultiSelect_ng_container_7_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13, 14);
    ɵngcc0.ɵɵelementStart(2, "span", 15);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template, 1, 0, "span", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.findLabelByValue(item_r9));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r7.disabled);
} }
function MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.placeholder || ctx_r8.defaultLabel || "empty");
} }
function MultiSelect_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_ng_container_7_ng_container_2_div_1_Template, 5, 2, "div", 12);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.value);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.value || ctx_r6.value.length === 0);
} }
function MultiSelect_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.display === "comma");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.display === "chip");
} }
function MultiSelect_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MultiSelect_div_11_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c8 = function (a0) { return { "p-checkbox-disabled": a0 }; };
const _c9 = function (a0, a1, a2) { return { "p-highlight": a0, "p-focus": a1, "p-disabled": a2 }; };
function MultiSelect_div_11_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 30);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "input", 31);
    ɵngcc0.ɵɵlistener("focus", function MultiSelect_div_11_div_1_div_3_Template_input_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(3); return ctx_r25.onHeaderCheckboxFocus(); })("blur", function MultiSelect_div_11_div_1_div_3_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r27 = ɵngcc0.ɵɵnextContext(3); return ctx_r27.onHeaderCheckboxBlur(); })("keydown.space", function MultiSelect_div_11_div_1_div_3_Template_input_keydown_space_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r28 = ɵngcc0.ɵɵnextContext(3); return ctx_r28.toggleAll($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 32);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_div_11_div_1_div_3_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r29 = ɵngcc0.ɵɵnextContext(3); return ctx_r29.toggleAll($event); });
    ɵngcc0.ɵɵelement(4, "span", 33);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c8, ctx_r23.disabled || ctx_r23.toggleAllDisabled));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("checked", ctx_r23.allChecked);
    ɵngcc0.ɵɵattribute("disabled", ctx_r23.disabled || ctx_r23.toggleAllDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(8, _c9, ctx_r23.allChecked, ctx_r23.headerCheckboxFocus, ctx_r23.disabled || ctx_r23.toggleAllDisabled));
    ɵngcc0.ɵɵattribute("aria-checked", ctx_r23.allChecked);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c3, ctx_r23.allChecked));
} }
function MultiSelect_div_11_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 34);
    ɵngcc0.ɵɵelementStart(1, "input", 35, 36);
    ɵngcc0.ɵɵlistener("input", function MultiSelect_div_11_div_1_div_4_Template_input_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r31 = ɵngcc0.ɵɵnextContext(3); return ctx_r31.onFilterInputChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "span", 37);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r24.filterValue || "")("disabled", ctx_r24.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r24.filterPlaceHolder)("aria-label", ctx_r24.ariaFilterLabel);
} }
function MultiSelect_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_div_1_ng_container_2_Template, 1, 0, "ng-container", 25);
    ɵngcc0.ɵɵtemplate(3, MultiSelect_div_11_div_1_div_3_Template, 5, 14, "div", 26);
    ɵngcc0.ɵɵtemplate(4, MultiSelect_div_11_div_1_div_4_Template, 4, 4, "div", 27);
    ɵngcc0.ɵɵelementStart(5, "button", 28);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_div_11_div_1_Template_button_click_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.close($event); });
    ɵngcc0.ɵɵelement(6, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r16.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r16.showToggleAll && !ctx_r16.selectionLimit);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r16.filter);
} }
function MultiSelect_div_11_ng_container_4_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const optgroup_r36 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r37 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r37.getOptionGroupLabel(optgroup_r36) || "empty");
} }
function MultiSelect_div_11_ng_container_4_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MultiSelect_div_11_ng_container_4_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MultiSelect_div_11_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 39);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_container_4_ng_template_1_span_1_Template, 2, 1, "span", 7);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_ng_container_4_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, MultiSelect_div_11_ng_container_4_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 8);
} if (rf & 2) {
    const optgroup_r36 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r19 = ɵngcc0.ɵɵreference(7);
    const ctx_r35 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r35.groupTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r35.groupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c4, optgroup_r36));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r19)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c4, ctx_r35.getOptionGroupChildren(optgroup_r36)));
} }
function MultiSelect_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_container_4_ng_template_1_Template, 4, 9, "ng-template", 38);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r17.optionsToRender);
} }
function MultiSelect_div_11_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MultiSelect_div_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r19 = ɵngcc0.ɵɵreference(7);
    const ctx_r18 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r19)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c4, ctx_r18.optionsToRender));
} }
function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-multiSelectItem", 43);
    ɵngcc0.ɵɵlistener("onClick", function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_multiSelectItem_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); const ctx_r51 = ɵngcc0.ɵɵnextContext(4); return ctx_r51.onOptionClick($event); })("onKeydown", function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_multiSelectItem_onKeydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); const ctx_r53 = ɵngcc0.ɵɵnextContext(4); return ctx_r53.onOptionKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r49 = ctx.$implicit;
    const ctx_r48 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("option", option_r49)("selected", ctx_r48.isSelected(option_r49))("label", ctx_r48.getOptionLabel(option_r49))("disabled", ctx_r48.isOptionDisabled(option_r49))("template", ctx_r48.itemTemplate);
} }
function MultiSelect_div_11_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template, 1, 5, "ng-template", 38);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const optionsToDisplay_r42 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", optionsToDisplay_r42);
} }
function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "p-multiSelectItem", 48);
    ɵngcc0.ɵɵlistener("onClick", function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); const ctx_r65 = ɵngcc0.ɵɵnextContext(5); return ctx_r65.onOptionClick($event); })("onKeydown", function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onKeydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); const ctx_r67 = ɵngcc0.ɵɵnextContext(5); return ctx_r67.onOptionKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r58 = ctx.$implicit;
    const ctx_r57 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("option", option_r58)("selected", ctx_r57.isSelected(option_r58))("label", ctx_r57.getOptionLabel(option_r58))("disabled", ctx_r57.isOptionDisabled(option_r58))("template", ctx_r57.itemTemplate)("itemSize", ctx_r57.itemSize);
} }
function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 45, 46);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 6, "ng-container", 47);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const optionsToDisplay_r42 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r55 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r55.scrollHeight))("itemSize", ctx_r55.itemSize);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", optionsToDisplay_r42);
} }
function MultiSelect_div_11_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 44);
} if (rf & 2) {
    const ctx_r46 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r46.virtualScroll && !ctx_r46.emptyOptions);
} }
function MultiSelect_div_11_ng_template_6_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 49);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r47 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r47.emptyFilterMessage);
} }
function MultiSelect_div_11_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MultiSelect_div_11_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 40);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 41, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, MultiSelect_div_11_ng_template_6_li_3_Template, 2, 1, "li", 42);
} if (rf & 2) {
    const _r45 = ɵngcc0.ɵɵreference(2);
    const ctx_r20 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r20.virtualScroll)("ngIfElse", _r45);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r20.emptyOptions);
} }
function MultiSelect_div_11_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MultiSelect_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 50);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_div_8_ng_container_2_Template, 1, 0, "ng-container", 25);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r21.footerTemplate);
} }
const _c10 = function () { return ["p-multiselect-panel p-component"]; };
const _c11 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c12 = function (a1) { return { value: "visible", params: a1 }; };
const _c13 = function (a0) { return { "p-multiselect-virtualscroll": a0 }; };
function MultiSelect_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r71 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function MultiSelect_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r71); const ctx_r70 = ɵngcc0.ɵɵnextContext(); return ctx_r70.onOverlayAnimationStart($event); })("keydown", function MultiSelect_div_11_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r71); const ctx_r72 = ɵngcc0.ɵɵnextContext(); return ctx_r72.onKeydown($event); });
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_div_1_Template, 7, 3, "div", 19);
    ɵngcc0.ɵɵelementStart(2, "div", 20);
    ɵngcc0.ɵɵelementStart(3, "ul", 21);
    ɵngcc0.ɵɵtemplate(4, MultiSelect_div_11_ng_container_4_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(5, MultiSelect_div_11_ng_container_5_Template, 2, 4, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(6, MultiSelect_div_11_ng_template_6_Template, 4, 3, "ng-template", null, 22, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, MultiSelect_div_11_div_8_Template, 3, 1, "div", 23);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r4.panelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(12, _c10))("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(16, _c12, ɵngcc0.ɵɵpureFunction2(13, _c11, ctx_r4.showTransitionOptions, ctx_r4.hideTransitionOptions)))("ngStyle", ctx_r4.panelStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.showHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r4.virtualScroll ? "auto" : ctx_r4.scrollHeight || "auto");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(18, _c13, ctx_r4.virtualScroll));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.group);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.group);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.footerFacet || ctx_r4.footerTemplate);
} }
const _c14 = [[["p-header"]], [["p-footer"]]];
const _c15 = function (a1, a2, a3, a4) { return { "p-multiselect p-component": true, "p-multiselect-open": a1, "p-multiselect-chip": a2, "p-focus": a3, "p-disabled": a4 }; };
const _c16 = function (a0, a1) { return { "p-placeholder": a0, "p-multiselect-label-empty": a1 }; };
const _c17 = function () { return { "p-multiselect-trigger": true }; };
const _c18 = ["p-header", "p-footer"];
export const MULTISELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelect),
    multi: true
};
export class MultiSelectItem {
    constructor() {
        this.onClick = new EventEmitter();
        this.onKeydown = new EventEmitter();
    }
    onOptionClick(event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    }
    onOptionKeydown(event) {
        this.onKeydown.emit({
            originalEvent: event,
            option: this.option
        });
    }
}
MultiSelectItem.ɵfac = function MultiSelectItem_Factory(t) { return new (t || MultiSelectItem)(); };
MultiSelectItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiSelectItem, selectors: [["p-multiSelectItem"]], inputs: { option: "option", selected: "selected", label: "label", disabled: "disabled", itemSize: "itemSize", template: "template" }, outputs: { onClick: "onClick", onKeydown: "onKeydown" }, decls: 6, vars: 20, consts: [["pRipple", "", 1, "p-multiselect-item", 3, "ngStyle", "ngClass", "click", "keydown"], [1, "p-checkbox", "p-component"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-checkbox-icon", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function MultiSelectItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵlistener("click", function MultiSelectItem_Template_li_click_0_listener($event) { return ctx.onOptionClick($event); })("keydown", function MultiSelectItem_Template_li_keydown_0_listener($event) { return ctx.onOptionKeydown($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, MultiSelectItem_span_4_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵtemplate(5, MultiSelectItem_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(9, _c0, ctx.itemSize + "px"))("ngClass", ɵngcc0.ɵɵpureFunction2(11, _c1, ctx.selected, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-label", ctx.label)("tabindex", ctx.disabled ? null : "0");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(14, _c2, ctx.selected));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c3, ctx.selected));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(18, _c4, ctx.option));
    } }, directives: [ɵngcc1.Ripple, ɵngcc2.NgStyle, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], encapsulation: 2 });
MultiSelectItem.propDecorators = {
    option: [{ type: Input }],
    selected: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    itemSize: [{ type: Input }],
    template: [{ type: Input }],
    onClick: [{ type: Output }],
    onKeydown: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectItem, [{
        type: Component,
        args: [{
                selector: 'p-multiSelectItem',
                template: `
        <li class="p-multiselect-item" (click)="onOptionClick($event)" (keydown)="onOptionKeydown($event)" [attr.aria-label]="label" 
            [attr.tabindex]="disabled ? null : '0'" [ngStyle]="{'height': itemSize + 'px'}"
            [ngClass]="{'p-highlight': selected, 'p-disabled': disabled}" pRipple>
            <div class="p-checkbox p-component">
                <div class="p-checkbox-box" [ngClass]="{'p-highlight': selected}">
                    <span class="p-checkbox-icon" [ngClass]="{'pi pi-check': selected}"></span>
                </div>
            </div>
            <span *ngIf="!template">{{label}}</span>
            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>
        </li>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { onClick: [{
            type: Output
        }], onKeydown: [{
            type: Output
        }], option: [{
            type: Input
        }], selected: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
export class MultiSelect {
    constructor(el, renderer, cd, filterService) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.filterService = filterService;
        this.filter = true;
        this.displaySelectedLabel = true;
        this.maxSelectedLabels = 3;
        this.selectedItemsLabel = 'ellipsis';
        this.showToggleAll = true;
        this.emptyFilterMessage = 'No results found';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.optionGroupChildren = "items";
        this.showHeader = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.autofocusFilter = true;
        this.display = 'comma';
        this.onChange = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onPanelShow = new EventEmitter();
        this.onPanelHide = new EventEmitter();
        this.scrollHeight = '200px';
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    set defaultLabel(val) {
        this._defaultLabel = val;
        this.updateLabel();
    }
    get defaultLabel() {
        return this._defaultLabel;
    }
    set placeholder(val) {
        this._placeholder = val;
        this.updateLabel();
    }
    get placeholder() {
        return this._placeholder;
    }
    get options() {
        return this._options;
    }
    set options(val) {
        this._options = val;
        this.updateLabel();
    }
    get filterValue() {
        return this._filterValue;
    }
    set filterValue(val) {
        this._filterValue = val;
        this.activateFilter();
    }
    ngOnInit() {
        this.updateLabel();
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
                case 'selectedItems':
                    this.selectedItemsTemplate = item.template;
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
    ngAfterViewInit() {
        if (this.overlayVisible) {
            this.show();
        }
    }
    ngAfterViewChecked() {
        if (this.filtered) {
            this.alignOverlay();
            this.filtered = false;
        }
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : (option.label != undefined ? option.label : option);
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : (this.optionLabel || option.value === undefined ? option : option.value);
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : (optionGroup.label != undefined ? optionGroup.label : optionGroup);
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    isOptionDisabled(option) {
        let disabled = this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : (option.disabled !== undefined ? option.disabled : false);
        return (disabled || (this.maxSelectionLimitReached && !this.isSelected(option)));
    }
    writeValue(value) {
        this.value = value;
        this.updateLabel();
        this.updateFilledState();
        this.checkSelectionLimit();
        this.cd.markForCheck();
    }
    checkSelectionLimit() {
        if (this.selectionLimit && (this.value && this.value.length === this.selectionLimit)) {
            this.maxSelectionLimitReached = true;
        }
        else {
            this.maxSelectionLimitReached = false;
        }
    }
    updateFilledState() {
        this.filled = (this.value && this.value.length > 0);
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
    onOptionClick(event) {
        let option = event.option;
        if (this.isOptionDisabled(option)) {
            return;
        }
        let optionValue = this.getOptionValue(option);
        let selectionIndex = this.findSelectionIndex(optionValue);
        if (selectionIndex != -1) {
            this.value = this.value.filter((val, i) => i != selectionIndex);
            if (this.selectionLimit) {
                this.maxSelectionLimitReached = false;
            }
        }
        else {
            if (!this.selectionLimit || (!this.value || this.value.length < this.selectionLimit)) {
                this.value = [...this.value || [], optionValue];
            }
            this.checkSelectionLimit();
        }
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event.originalEvent, value: this.value, itemValue: optionValue });
        this.updateLabel();
        this.updateFilledState();
    }
    isSelected(option) {
        return this.findSelectionIndex(this.getOptionValue(option)) != -1;
    }
    findSelectionIndex(val) {
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if (ObjectUtils.equals(this.value[i], val, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
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
        this.updateFilledState();
        this.updateLabel();
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
    show() {
        if (!this.overlayVisible) {
            this.overlayVisible = true;
        }
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.bindScrollListener();
                if (this.filterInputChild && this.filterInputChild.nativeElement) {
                    this.preventModelTouched = true;
                    if (this.autofocusFilter) {
                        this.filterInputChild.nativeElement.focus();
                    }
                }
                this.onPanelShow.emit();
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                DomHandler.appendChild(this.overlay, this.appendTo);
            if (!this.overlay.style.minWidth) {
                this.overlay.style.minWidth = DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
            }
        }
    }
    restoreOverlayAppend() {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.overlay) {
            if (this.appendTo)
                DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    }
    hide() {
        this.overlayVisible = false;
        this.unbindDocumentClickListener();
        if (this.resetFilterOnHide) {
            this.filterInputChild.nativeElement.value = '';
            this._filterValue = null;
            this._filteredOptions = null;
        }
        this.onPanelHide.emit();
        this.cd.markForCheck();
    }
    close(event) {
        this.hide();
        event.preventDefault();
        event.stopPropagation();
    }
    onMouseclick(event, input) {
        if (this.disabled || this.readonly || event.target.isSameNode(this.accessibleViewChild.nativeElement)) {
            return;
        }
        this.onClick.emit(event);
        if (!this.isOverlayClick(event) && !DomHandler.hasClass(event.target, 'p-multiselect-token-icon')) {
            if (this.overlayVisible) {
                this.hide();
            }
            else {
                input.focus();
                this.show();
            }
        }
    }
    removeChip(chip, event) {
        this.value = this.value.filter(val => !ObjectUtils.equals(val, chip, this.dataKey));
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event, value: this.value });
        this.updateLabel();
        this.updateFilledState();
    }
    isOverlayClick(event) {
        let targetNode = event.target;
        return this.overlay ? (this.overlay.isSameNode(targetNode) || this.overlay.contains(targetNode)) : false;
    }
    isOutsideClicked(event) {
        return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.isOverlayClick(event));
    }
    onInputFocus(event) {
        this.focus = true;
        this.onFocus.emit({ originalEvent: event });
    }
    onInputBlur(event) {
        this.focus = false;
        this.onBlur.emit({ originalEvent: event });
        if (!this.preventModelTouched) {
            this.onModelTouched();
        }
        this.preventModelTouched = false;
    }
    onOptionKeydown(event) {
        if (this.readonly) {
            return;
        }
        switch (event.originalEvent.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(event.originalEvent.target.parentElement);
                if (nextItem) {
                    nextItem.focus();
                }
                event.originalEvent.preventDefault();
                break;
            //up
            case 38:
                var prevItem = this.findPrevItem(event.originalEvent.target.parentElement);
                if (prevItem) {
                    prevItem.focus();
                }
                event.originalEvent.preventDefault();
                break;
            //enter
            case 13:
                this.onOptionClick(event);
                event.originalEvent.preventDefault();
                break;
        }
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return DomHandler.hasClass(nextItem.children[0], 'p-disabled') || DomHandler.isHidden(nextItem.children[0]) || DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem.children[0];
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return DomHandler.hasClass(prevItem.children[0], 'p-disabled') || DomHandler.isHidden(prevItem.children[0]) || DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem.children[0];
        else
            return null;
    }
    onKeydown(event) {
        switch (event.which) {
            //down
            case 40:
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //space
            case 32:
                if (!this.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //escape
            case 27:
                this.hide();
                break;
        }
    }
    updateLabel() {
        if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
            let label = '';
            for (let i = 0; i < this.value.length; i++) {
                let itemLabel = this.findLabelByValue(this.value[i]);
                if (itemLabel) {
                    if (label.length > 0) {
                        label = label + ', ';
                    }
                    label = label + itemLabel;
                }
            }
            if (this.value.length <= this.maxSelectedLabels || this.selectedItemsLabel === 'ellipsis') {
                this.valuesAsString = label;
            }
            else {
                let pattern = /{(.*?)}/;
                if (pattern.test(this.selectedItemsLabel)) {
                    this.valuesAsString = this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.value.length + '');
                }
                else {
                    this.valuesAsString = this.selectedItemsLabel;
                }
            }
        }
        else {
            this.valuesAsString = this.placeholder || this.defaultLabel;
        }
    }
    findLabelByValue(val) {
        if (this.group) {
            let label = null;
            for (let i = 0; i < this.options.length; i++) {
                let subOptions = this.getOptionGroupChildren(this.options[i]);
                if (subOptions) {
                    label = this.searchLabelByValue(val, subOptions);
                    if (label) {
                        break;
                    }
                }
            }
            return label;
        }
        else {
            return this.searchLabelByValue(val, this.options);
        }
    }
    searchLabelByValue(val, options) {
        let label = null;
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            let optionValue = this.getOptionValue(option);
            if (val == null && optionValue == null || ObjectUtils.equals(val, optionValue, this.dataKey)) {
                label = this.getOptionLabel(option);
                break;
            }
        }
        return label;
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
    get emptyOptions() {
        let optionsToRender = this.optionsToRender;
        return !optionsToRender || optionsToRender.length === 0;
    }
    hasFilter() {
        return this._filterValue && this._filterValue.trim().length > 0;
    }
    onFilterInputChange(event) {
        this._filterValue = event.target.value;
        this.activateFilter();
        this.onFilter.emit({ originalEvent: event, filter: this._filterValue });
    }
    activateFilter() {
        if (this.hasFilter() && this._options) {
            let searchFields = (this.filterBy || this.optionLabel || 'label').split(',');
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
                this._filteredOptions = this.filterService.filter(this.options, searchFields, this._filterValue, this.filterMatchMode, this.filterLocale);
            }
        }
        else {
            this._filteredOptions = null;
        }
    }
    onHeaderCheckboxFocus() {
        this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
        this.headerCheckboxFocus = false;
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (this.isOutsideClicked(event)) {
                    this.hide();
                }
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    onWindowResize() {
        if (!DomHandler.isAndroid()) {
            this.hide();
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, () => {
                if (this.overlayVisible) {
                    this.hide();
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
        this.overlay = null;
        this.onModelTouched();
    }
    ngOnDestroy() {
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
}
MultiSelect.ɵfac = function MultiSelect_Factory(t) { return new (t || MultiSelect)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FilterService)); };
MultiSelect.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiSelect, selectors: [["p-multiSelect"]], contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function MultiSelect_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.filterInputChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accessibleViewChild = _t.first);
    } }, hostVars: 4, hostBindings: function MultiSelect_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus || ctx.overlayVisible);
    } }, inputs: { filter: "filter", displaySelectedLabel: "displaySelectedLabel", maxSelectedLabels: "maxSelectedLabels", selectedItemsLabel: "selectedItemsLabel", showToggleAll: "showToggleAll", emptyFilterMessage: "emptyFilterMessage", resetFilterOnHide: "resetFilterOnHide", dropdownIcon: "dropdownIcon", optionGroupChildren: "optionGroupChildren", showHeader: "showHeader", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", filterMatchMode: "filterMatchMode", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", autofocusFilter: "autofocusFilter", display: "display", scrollHeight: "scrollHeight", defaultLabel: "defaultLabel", placeholder: "placeholder", options: "options", filterValue: "filterValue", disabled: "disabled", overlayVisible: "overlayVisible", style: "style", styleClass: "styleClass", panelStyle: "panelStyle", panelStyleClass: "panelStyleClass", inputId: "inputId", readonly: "readonly", group: "group", filterPlaceHolder: "filterPlaceHolder", filterLocale: "filterLocale", tabindex: "tabindex", appendTo: "appendTo", dataKey: "dataKey", name: "name", ariaLabelledBy: "ariaLabelledBy", selectionLimit: "selectionLimit", optionLabel: "optionLabel", optionValue: "optionValue", optionDisabled: "optionDisabled", optionGroupLabel: "optionGroupLabel", filterBy: "filterBy", virtualScroll: "virtualScroll", itemSize: "itemSize", ariaFilterLabel: "ariaFilterLabel", tooltipStyleClass: "tooltipStyleClass" }, outputs: { onChange: "onChange", onFilter: "onFilter", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onPanelShow: "onPanelShow", onPanelHide: "onPanelHide" }, features: [ɵngcc0.ɵɵProvidersFeature([MULTISELECT_VALUE_ACCESSOR])], ngContentSelectors: _c18, decls: 12, vars: 32, consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "readonly", "aria-haspopup", "listbox", "role", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [1, "p-multiselect-label-container", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [1, "p-multiselect-label", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "p-multiselect-trigger-icon", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", "keydown", 4, "ngIf"], ["class", "p-multiselect-token", 4, "ngFor", "ngForOf"], [1, "p-multiselect-token"], ["token", ""], [1, "p-multiselect-token-label"], ["class", "p-multiselect-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-multiselect-token-icon", "pi", "pi-times-circle", 3, "click"], [3, "ngClass", "ngStyle", "keydown"], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-items-wrapper"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-items", "p-component", 3, "ngClass"], ["itemslist", ""], ["class", "p-multiselect-footer", 4, "ngIf"], [1, "p-multiselect-header"], [4, "ngTemplateOutlet"], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-multiselect-close", "p-link", 3, "click"], [1, "p-multiselect-close-icon", "pi", "pi-times"], [1, "p-checkbox", "p-component", 3, "ngClass"], ["type", "checkbox", "readonly", "readonly", 3, "checked", "focus", "blur", "keydown.space"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], [1, "p-multiselect-filter-container"], ["type", "text", "role", "textbox", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "value", "disabled", "input"], ["filterInput", ""], [1, "p-multiselect-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "p-multiselect-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], ["class", "p-multiselect-empty-message", 4, "ngIf"], [3, "option", "selected", "label", "disabled", "template", "onClick", "onKeydown"], [3, "ngStyle", "itemSize", 4, "ngIf"], [3, "ngStyle", "itemSize"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [3, "option", "selected", "label", "disabled", "template", "itemSize", "onClick", "onKeydown"], [1, "p-multiselect-empty-message"], [1, "p-multiselect-footer"]], template: function MultiSelect_Template(rf, ctx) { if (rf & 1) {
        const _r73 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵprojectionDef(_c14);
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function MultiSelect_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r73); const _r1 = ɵngcc0.ɵɵreference(4); return ctx.onMouseclick($event, _r1); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("focus", function MultiSelect_Template_input_focus_3_listener($event) { return ctx.onInputFocus($event); })("blur", function MultiSelect_Template_input_blur_3_listener($event) { return ctx.onInputBlur($event); })("keydown", function MultiSelect_Template_input_keydown_3_listener($event) { return ctx.onKeydown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵtemplate(7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 7);
        ɵngcc0.ɵɵtemplate(8, MultiSelect_ng_container_8_Template, 1, 0, "ng-container", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelement(10, "span", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, MultiSelect_div_11_Template, 9, 20, "div", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(21, _c15, ctx.overlayVisible, ctx.display === "chip", ctx.focus, ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(26, _c16, ctx.valuesAsString === (ctx.defaultLabel || ctx.placeholder), (ctx.valuesAsString == null || ctx.valuesAsString.length === 0) && (ctx.placeholder == null || ctx.placeholder.length === 0)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.selectedItemsTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.selectedItemsTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(29, _c4, ctx.value));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(31, _c17));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dropdownIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc4.Tooltip, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, ɵngcc1.Ripple, MultiSelectItem, ɵngcc5.CdkVirtualScrollViewport, ɵngcc5.CdkFixedSizeVirtualScroll, ɵngcc5.CdkVirtualForOf], styles: [".p-multiselect{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-multiselect-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-multiselect-label-container{cursor:pointer;flex:1 1 auto;overflow:hidden}.p-multiselect-label{cursor:pointer;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{list-style-type:none;margin:0;padding:0}.p-multiselect-item{align-items:center;cursor:pointer;display:flex;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-multiselect-header{align-items:center;display:flex;justify-content:space-between}.p-multiselect-filter-container{flex:1 1 auto;position:relative}.p-multiselect-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{align-items:center;display:flex;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}"], encapsulation: 2, data: { animation: [
            trigger('overlayAnimation', [
                transition(':enter', [
                    style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animate('{{showTransitionParams}}')
                ]),
                transition(':leave', [
                    animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
MultiSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: FilterService }
];
MultiSelect.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    panelStyle: [{ type: Input }],
    panelStyleClass: [{ type: Input }],
    inputId: [{ type: Input }],
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    group: [{ type: Input }],
    filter: [{ type: Input }],
    filterPlaceHolder: [{ type: Input }],
    filterLocale: [{ type: Input }],
    overlayVisible: [{ type: Input }],
    tabindex: [{ type: Input }],
    appendTo: [{ type: Input }],
    dataKey: [{ type: Input }],
    name: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    displaySelectedLabel: [{ type: Input }],
    maxSelectedLabels: [{ type: Input }],
    selectionLimit: [{ type: Input }],
    selectedItemsLabel: [{ type: Input }],
    showToggleAll: [{ type: Input }],
    emptyFilterMessage: [{ type: Input }],
    resetFilterOnHide: [{ type: Input }],
    dropdownIcon: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionDisabled: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    showHeader: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    filterBy: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    itemSize: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    ariaFilterLabel: [{ type: Input }],
    filterMatchMode: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    tooltipPositionStyle: [{ type: Input }],
    tooltipStyleClass: [{ type: Input }],
    autofocusFilter: [{ type: Input }],
    display: [{ type: Input }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    filterInputChild: [{ type: ViewChild, args: ['filterInput',] }],
    accessibleViewChild: [{ type: ViewChild, args: ['in',] }],
    footerFacet: [{ type: ContentChild, args: [Footer,] }],
    headerFacet: [{ type: ContentChild, args: [Header,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    onChange: [{ type: Output }],
    onFilter: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onClick: [{ type: Output }],
    onPanelShow: [{ type: Output }],
    onPanelHide: [{ type: Output }],
    scrollHeight: [{ type: Input }],
    defaultLabel: [{ type: Input }],
    placeholder: [{ type: Input }],
    options: [{ type: Input }],
    filterValue: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelect, [{
        type: Component,
        args: [{
                selector: 'p-multiSelect',
                template: `
        <div #container [ngClass]="{'p-multiselect p-component':true,
            'p-multiselect-open':overlayVisible,
            'p-multiselect-chip': display === 'chip',
            'p-focus':focus,
            'p-disabled': disabled}" [ngStyle]="style" [class]="styleClass"
            (click)="onMouseclick($event,in)">
            <div class="p-hidden-accessible">
                <input #in type="text" readonly="readonly" [attr.id]="inputId" [attr.name]="name" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)"
                       [disabled]="disabled" [attr.tabindex]="tabindex" (keydown)="onKeydown($event)" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible"
                       [attr.aria-labelledby]="ariaLabelledBy" role="listbox">
            </div>
            <div class="p-multiselect-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <div class="p-multiselect-label" [ngClass]="{'p-placeholder': valuesAsString === (defaultLabel || placeholder), 'p-multiselect-label-empty': ((valuesAsString == null || valuesAsString.length === 0) && (placeholder == null || placeholder.length === 0))}">
                    <ng-container *ngIf="!selectedItemsTemplate">
                        <ng-container *ngIf="display === 'comma'">{{valuesAsString || 'empty'}}</ng-container>
                        <ng-container *ngIf="display === 'chip'">
                            <div #token *ngFor="let item of value; let i = index;" class="p-multiselect-token">
                                <span class="p-multiselect-token-label">{{findLabelByValue(item)}}</span>
                                <span *ngIf="!disabled" class="p-multiselect-token-icon pi pi-times-circle" (click)="removeChip(item, $event)"></span>
                            </div>
                            <ng-container *ngIf="!value || value.length === 0">{{placeholder || defaultLabel || 'empty'}}</ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: {$implicit: value}"></ng-container>
                </div>
            </div>
            <div [ngClass]="{'p-multiselect-trigger':true}">
                <span class="p-multiselect-trigger-icon" [ngClass]="dropdownIcon"></span>
            </div>
            <div *ngIf="overlayVisible" [ngClass]="['p-multiselect-panel p-component']" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                [ngStyle]="panelStyle" [class]="panelStyleClass" (keydown)="onKeydown($event)">
                <div class="p-multiselect-header" *ngIf="showHeader">
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <div class="p-checkbox p-component" *ngIf="showToggleAll && !selectionLimit" [ngClass]="{'p-checkbox-disabled': disabled || toggleAllDisabled}">
                        <div class="p-hidden-accessible">
                            <input type="checkbox" readonly="readonly" [checked]="allChecked" (focus)="onHeaderCheckboxFocus()" (blur)="onHeaderCheckboxBlur()" (keydown.space)="toggleAll($event)" [attr.disabled]="disabled || toggleAllDisabled">
                        </div>
                        <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="allChecked" [ngClass]="{'p-highlight':allChecked, 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled}" (click)="toggleAll($event)">
                            <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':allChecked}"></span>
                        </div>
                    </div>
                    <div class="p-multiselect-filter-container" *ngIf="filter">
                        <input #filterInput type="text" role="textbox" [value]="filterValue||''" (input)="onFilterInputChange($event)" class="p-multiselect-filter p-inputtext p-component" [disabled]="disabled" [attr.placeholder]="filterPlaceHolder" [attr.aria-label]="ariaFilterLabel">
                        <span class="p-multiselect-filter-icon pi pi-search"></span>
                    </div>
                    <button class="p-multiselect-close p-link" type="button" (click)="close($event)" pRipple>
                        <span class="p-multiselect-close-icon pi pi-times"></span>
                    </button>
                </div>
                <div class="p-multiselect-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : (scrollHeight||'auto')">
                    <ul class="p-multiselect-items p-component" [ngClass]="{'p-multiselect-virtualscroll': virtualScroll}" role="listbox" aria-multiselectable="true">
                        <ng-container *ngIf="group">
                            <ng-template ngFor let-optgroup [ngForOf]="optionsToRender">
                                <li class="p-multiselect-item-group">
                                    <span *ngIf="!groupTemplate">{{getOptionGroupLabel(optgroup)||'empty'}}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                                </li>
                                <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: getOptionGroupChildren(optgroup)}"></ng-container>
                            </ng-template>
                        </ng-container>
                        <ng-container *ngIf="!group">
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optionsToRender}"></ng-container>
                        </ng-container>
                        <ng-template #itemslist let-optionsToDisplay let-selectedOption="selectedOption">
                            <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                                <ng-template ngFor let-option let-i="index" [ngForOf]="optionsToDisplay">
                                    <p-multiSelectItem [option]="option" [selected]="isSelected(option)" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)"
                                            [template]="itemTemplate"></p-multiSelectItem>
                                </ng-template>
                            </ng-container>
                            <ng-template #virtualScrollList>
                                <cdk-virtual-scroll-viewport #viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && !emptyOptions">
                                    <ng-container *cdkVirtualFor="let option of optionsToDisplay; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                        <p-multiSelectItem [option]="option" [selected]="isSelected(option)" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)"
                                            [template]="itemTemplate" [itemSize]="itemSize"></p-multiSelectItem>
                                    </ng-container>
                                </cdk-virtual-scroll-viewport>
                            </ng-template>
                            <li *ngIf="emptyOptions" class="p-multiselect-empty-message">{{emptyFilterMessage}}</li>
                        </ng-template>
                    </ul>
                </div>
                <div class="p-multiselect-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
                animations: [
                    trigger('overlayAnimation', [
                        transition(':enter', [
                            style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animate('{{showTransitionParams}}')
                        ]),
                        transition(':leave', [
                            animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                        ])
                    ])
                ],
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focus || overlayVisible'
                },
                providers: [MULTISELECT_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-multiselect{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-multiselect-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-multiselect-label-container{cursor:pointer;flex:1 1 auto;overflow:hidden}.p-multiselect-label{cursor:pointer;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{list-style-type:none;margin:0;padding:0}.p-multiselect-item{align-items:center;cursor:pointer;display:flex;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-multiselect-header{align-items:center;display:flex;justify-content:space-between}.p-multiselect-filter-container{flex:1 1 auto;position:relative}.p-multiselect-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{align-items:center;display:flex;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.FilterService }]; }, { filter: [{
            type: Input
        }], displaySelectedLabel: [{
            type: Input
        }], maxSelectedLabels: [{
            type: Input
        }], selectedItemsLabel: [{
            type: Input
        }], showToggleAll: [{
            type: Input
        }], emptyFilterMessage: [{
            type: Input
        }], resetFilterOnHide: [{
            type: Input
        }], dropdownIcon: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], showHeader: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], filterMatchMode: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipPositionStyle: [{
            type: Input
        }], autofocusFilter: [{
            type: Input
        }], display: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onFilter: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onClick: [{
            type: Output
        }], onPanelShow: [{
            type: Output
        }], onPanelHide: [{
            type: Output
        }], scrollHeight: [{
            type: Input
        }], defaultLabel: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], options: [{
            type: Input
        }], filterValue: [{
            type: Input
        }], disabled: [{
            type: Input
        }], overlayVisible: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], panelStyle: [{
            type: Input
        }], panelStyleClass: [{
            type: Input
        }], inputId: [{
            type: Input
        }], readonly: [{
            type: Input
        }], group: [{
            type: Input
        }], filterPlaceHolder: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], name: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], selectionLimit: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionDisabled: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], ariaFilterLabel: [{
            type: Input
        }], tooltipStyleClass: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], filterInputChild: [{
            type: ViewChild,
            args: ['filterInput']
        }], accessibleViewChild: [{
            type: ViewChild,
            args: ['in']
        }], footerFacet: [{
            type: ContentChild,
            args: [Footer]
        }], headerFacet: [{
            type: ContentChild,
            args: [Header]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class MultiSelectModule {
}
MultiSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MultiSelectModule });
MultiSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MultiSelectModule_Factory(t) { return new (t || MultiSelectModule)(); }, imports: [[CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MultiSelectModule, { declarations: function () { return [MultiSelect, MultiSelectItem]; }, imports: function () { return [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule]; }, exports: function () { return [MultiSelect, SharedModule, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule],
                exports: [MultiSelect, SharedModule, ScrollingModule],
                declarations: [MultiSelect, MultiSelectItem]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXdFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDbEosVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBZSxlQUFlLEVBQWEsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZLLE9BQU8sRUFBRSxPQUFPLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQWdCLE1BQU0scUJBQXFCLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6RixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QU07QUFBTywwQkFFMUIsWUFBWSxTQUFDLE1BQU07QUFBTyx3QkFFMUIsZUFBZSxTQUFDLGFBQWE7QUFBTyx1QkFFcEMsTUFBTTtBQUFLLHVCQUVYLE1BQU07QUFBSyxzQkFFWCxNQUFNO0FBQUsscUJBRVgsTUFBTTtBQUFLLHNCQUVYLE1BQU07QUFBSywwQkFFWCxNQUFNO0FBQUssMEJBRVgsTUFBTTtBQUFLLDJCQUVYLEtBQUs7QUFBSywyQkFJVixLQUFLO0FBQUssMEJBV1YsS0FBSztBQUFLLHNCQVNWLEtBQUs7QUFBSywwQkFTVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUE0dkJoQixNQUFNLE9BQU8saUJBQWlCO0FBQUc7NkNBTGhDLFFBQVEsU0FBQztDQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxZQUFZLENBQUMsa0JBQy9FLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsZUFBZSxDQUFDLGtCQUNuRCxZQUFZLEVBQUUsQ0FBQyxXQUFXLEVBQUMsZUFBZSxDQUFDLGNBQzlDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLHN0eWxlLHRyYW5zaXRpb24sYW5pbWF0ZSxBbmltYXRpb25FdmVudH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tSGFuZGxlciwgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBPYmplY3RVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlLCBQcmltZVRlbXBsYXRlLCBGb290ZXIsIEhlYWRlciwgRmlsdGVyU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdG9vbHRpcCc7XG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5cbmV4cG9ydCBjb25zdCBNVUxUSVNFTEVDVF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTXVsdGlTZWxlY3QpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLW11bHRpU2VsZWN0SXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGxpIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1pdGVtXCIgKGNsaWNrKT1cIm9uT3B0aW9uQ2xpY2soJGV2ZW50KVwiIChrZXlkb3duKT1cIm9uT3B0aW9uS2V5ZG93bigkZXZlbnQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbFwiIFxuICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiZGlzYWJsZWQgPyBudWxsIDogJzAnXCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBpdGVtU2l6ZSArICdweCd9XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOiBzZWxlY3RlZCwgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZH1cIiBwUmlwcGxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtY2hlY2tib3ggcC1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveC1ib3hcIiBbbmdDbGFzc109XCJ7J3AtaGlnaGxpZ2h0Jzogc2VsZWN0ZWR9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1jaGVja2JveC1pY29uXCIgW25nQ2xhc3NdPVwieydwaSBwaS1jaGVjayc6IHNlbGVjdGVkfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIj57e2xhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IG9wdGlvbn1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9saT5cbiAgICBgLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RJdGVtIHtcblxuICAgIEBJbnB1dCgpIG9wdGlvbjogYW55O1xuXG4gICAgQElucHV0KCkgc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBsYWJlbDogYW55O1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBpdGVtU2l6ZTogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25LZXlkb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIG9uT3B0aW9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3B0aW9uOiB0aGlzLm9wdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbktleWRvd24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25LZXlkb3duLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBvcHRpb246IHRoaXMub3B0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLW11bHRpU2VsZWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNjb250YWluZXIgW25nQ2xhc3NdPVwieydwLW11bHRpc2VsZWN0IHAtY29tcG9uZW50Jzp0cnVlLFxuICAgICAgICAgICAgJ3AtbXVsdGlzZWxlY3Qtb3Blbic6b3ZlcmxheVZpc2libGUsXG4gICAgICAgICAgICAncC1tdWx0aXNlbGVjdC1jaGlwJzogZGlzcGxheSA9PT0gJ2NoaXAnLFxuICAgICAgICAgICAgJ3AtZm9jdXMnOmZvY3VzLFxuICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZH1cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbk1vdXNlY2xpY2soJGV2ZW50LGluKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2luIHR5cGU9XCJ0ZXh0XCIgcmVhZG9ubHk9XCJyZWFkb25seVwiIFthdHRyLmlkXT1cImlucHV0SWRcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiAoZm9jdXMpPVwib25JbnB1dEZvY3VzKCRldmVudClcIiAoYmx1cik9XCJvbklucHV0Qmx1cigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIiAoa2V5ZG93bik9XCJvbktleWRvd24oJGV2ZW50KVwiIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCIgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJvdmVybGF5VmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRCeVwiIHJvbGU9XCJsaXN0Ym94XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWxhYmVsLWNvbnRhaW5lclwiIFtwVG9vbHRpcF09XCJ0b29sdGlwXCIgW3Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIiBbcG9zaXRpb25TdHlsZV09XCJ0b29sdGlwUG9zaXRpb25TdHlsZVwiIFt0b29sdGlwU3R5bGVDbGFzc109XCJ0b29sdGlwU3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWxhYmVsXCIgW25nQ2xhc3NdPVwieydwLXBsYWNlaG9sZGVyJzogdmFsdWVzQXNTdHJpbmcgPT09IChkZWZhdWx0TGFiZWwgfHwgcGxhY2Vob2xkZXIpLCAncC1tdWx0aXNlbGVjdC1sYWJlbC1lbXB0eSc6ICgodmFsdWVzQXNTdHJpbmcgPT0gbnVsbCB8fCB2YWx1ZXNBc1N0cmluZy5sZW5ndGggPT09IDApICYmIChwbGFjZWhvbGRlciA9PSBudWxsIHx8IHBsYWNlaG9sZGVyLmxlbmd0aCA9PT0gMCkpfVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNlbGVjdGVkSXRlbXNUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc3BsYXkgPT09ICdjb21tYSdcIj57e3ZhbHVlc0FzU3RyaW5nIHx8ICdlbXB0eSd9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc3BsYXkgPT09ICdjaGlwJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI3Rva2VuICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZhbHVlOyBsZXQgaSA9IGluZGV4O1wiIGNsYXNzPVwicC1tdWx0aXNlbGVjdC10b2tlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtdG9rZW4tbGFiZWxcIj57e2ZpbmRMYWJlbEJ5VmFsdWUoaXRlbSl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZGlzYWJsZWRcIiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtdG9rZW4taWNvbiBwaSBwaS10aW1lcy1jaXJjbGVcIiAoY2xpY2spPVwicmVtb3ZlQ2hpcChpdGVtLCAkZXZlbnQpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdmFsdWUgfHwgdmFsdWUubGVuZ3RoID09PSAwXCI+e3twbGFjZWhvbGRlciB8fCBkZWZhdWx0TGFiZWwgfHwgJ2VtcHR5J319PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzZWxlY3RlZEl0ZW1zVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IHZhbHVlfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsncC1tdWx0aXNlbGVjdC10cmlnZ2VyJzp0cnVlfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1tdWx0aXNlbGVjdC10cmlnZ2VyLWljb25cIiBbbmdDbGFzc109XCJkcm9wZG93bkljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJvdmVybGF5VmlzaWJsZVwiIFtuZ0NsYXNzXT1cIlsncC1tdWx0aXNlbGVjdC1wYW5lbCBwLWNvbXBvbmVudCddXCIgW0BvdmVybGF5QW5pbWF0aW9uXT1cInt2YWx1ZTogJ3Zpc2libGUnLCBwYXJhbXM6IHtzaG93VHJhbnNpdGlvblBhcmFtczogc2hvd1RyYW5zaXRpb25PcHRpb25zLCBoaWRlVHJhbnNpdGlvblBhcmFtczogaGlkZVRyYW5zaXRpb25PcHRpb25zfX1cIiAoQG92ZXJsYXlBbmltYXRpb24uc3RhcnQpPVwib25PdmVybGF5QW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwicGFuZWxTdHlsZVwiIFtjbGFzc109XCJwYW5lbFN0eWxlQ2xhc3NcIiAoa2V5ZG93bik9XCJvbktleWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWhlYWRlclwiICpuZ0lmPVwic2hvd0hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImhlYWRlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCIgKm5nSWY9XCJzaG93VG9nZ2xlQWxsICYmICFzZWxlY3Rpb25MaW1pdFwiIFtuZ0NsYXNzXT1cInsncC1jaGVja2JveC1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IHRvZ2dsZUFsbERpc2FibGVkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgcmVhZG9ubHk9XCJyZWFkb25seVwiIFtjaGVja2VkXT1cImFsbENoZWNrZWRcIiAoZm9jdXMpPVwib25IZWFkZXJDaGVja2JveEZvY3VzKClcIiAoYmx1cik9XCJvbkhlYWRlckNoZWNrYm94Qmx1cigpXCIgKGtleWRvd24uc3BhY2UpPVwidG9nZ2xlQWxsKCRldmVudClcIiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCB8fCB0b2dnbGVBbGxEaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveC1ib3hcIiByb2xlPVwiY2hlY2tib3hcIiBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiYWxsQ2hlY2tlZFwiIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOmFsbENoZWNrZWQsICdwLWZvY3VzJzogaGVhZGVyQ2hlY2tib3hGb2N1cywgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZCB8fCB0b2dnbGVBbGxEaXNhYmxlZH1cIiAoY2xpY2spPVwidG9nZ2xlQWxsKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2hlY2tib3gtaWNvblwiIFtuZ0NsYXNzXT1cInsncGkgcGktY2hlY2snOmFsbENoZWNrZWR9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1tdWx0aXNlbGVjdC1maWx0ZXItY29udGFpbmVyXCIgKm5nSWY9XCJmaWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjZmlsdGVySW5wdXQgdHlwZT1cInRleHRcIiByb2xlPVwidGV4dGJveFwiIFt2YWx1ZV09XCJmaWx0ZXJWYWx1ZXx8JydcIiAoaW5wdXQpPVwib25GaWx0ZXJJbnB1dENoYW5nZSgkZXZlbnQpXCIgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWZpbHRlciBwLWlucHV0dGV4dCBwLWNvbXBvbmVudFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cImZpbHRlclBsYWNlSG9sZGVyXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhRmlsdGVyTGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1maWx0ZXItaWNvbiBwaSBwaS1zZWFyY2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1jbG9zZSBwLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW11bHRpc2VsZWN0LWNsb3NlLWljb24gcGkgcGktdGltZXNcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWl0ZW1zLXdyYXBwZXJcIiBbc3R5bGUubWF4LWhlaWdodF09XCJ2aXJ0dWFsU2Nyb2xsID8gJ2F1dG8nIDogKHNjcm9sbEhlaWdodHx8J2F1dG8nKVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWl0ZW1zIHAtY29tcG9uZW50XCIgW25nQ2xhc3NdPVwieydwLW11bHRpc2VsZWN0LXZpcnR1YWxzY3JvbGwnOiB2aXJ0dWFsU2Nyb2xsfVwiIHJvbGU9XCJsaXN0Ym94XCIgYXJpYS1tdWx0aXNlbGVjdGFibGU9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW9wdGdyb3VwIFtuZ0Zvck9mXT1cIm9wdGlvbnNUb1JlbmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWl0ZW0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWdyb3VwVGVtcGxhdGVcIj57e2dldE9wdGlvbkdyb3VwTGFiZWwob3B0Z3JvdXApfHwnZW1wdHknfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ3JvdXBUZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogb3B0Z3JvdXB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtc2xpc3Q7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0Z3JvdXApfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbXNsaXN0OyBjb250ZXh0OiB7JGltcGxpY2l0OiBvcHRpb25zVG9SZW5kZXJ9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaXRlbXNsaXN0IGxldC1vcHRpb25zVG9EaXNwbGF5IGxldC1zZWxlY3RlZE9wdGlvbj1cInNlbGVjdGVkT3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF2aXJ0dWFsU2Nyb2xsOyBlbHNlIHZpcnR1YWxTY3JvbGxMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtb3B0aW9uIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JPZl09XCJvcHRpb25zVG9EaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdEl0ZW0gW29wdGlvbl09XCJvcHRpb25cIiBbc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZChvcHRpb24pXCIgW2xhYmVsXT1cImdldE9wdGlvbkxhYmVsKG9wdGlvbilcIiBbZGlzYWJsZWRdPVwiaXNPcHRpb25EaXNhYmxlZChvcHRpb24pXCIgKG9uQ2xpY2spPVwib25PcHRpb25DbGljaygkZXZlbnQpXCIgKG9uS2V5ZG93bik9XCJvbk9wdGlvbktleWRvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIj48L3AtbXVsdGlTZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdmlydHVhbFNjcm9sbExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgI3ZpZXdwb3J0IFtuZ1N0eWxlXT1cInsnaGVpZ2h0Jzogc2Nyb2xsSGVpZ2h0fVwiIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiICpuZ0lmPVwidmlydHVhbFNjcm9sbCAmJiAhZW1wdHlPcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zVG9EaXNwbGF5OyBsZXQgaSA9IGluZGV4OyBsZXQgYyA9IGNvdW50OyBsZXQgZiA9IGZpcnN0OyBsZXQgbCA9IGxhc3Q7IGxldCBlID0gZXZlbjsgbGV0IG8gPSBvZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdEl0ZW0gW29wdGlvbl09XCJvcHRpb25cIiBbc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZChvcHRpb24pXCIgW2xhYmVsXT1cImdldE9wdGlvbkxhYmVsKG9wdGlvbilcIiBbZGlzYWJsZWRdPVwiaXNPcHRpb25EaXNhYmxlZChvcHRpb24pXCIgKG9uQ2xpY2spPVwib25PcHRpb25DbGljaygkZXZlbnQpXCIgKG9uS2V5ZG93bik9XCJvbk9wdGlvbktleWRvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIiBbaXRlbVNpemVdPVwiaXRlbVNpemVcIj48L3AtbXVsdGlTZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiZW1wdHlPcHRpb25zXCIgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWVtcHR5LW1lc3NhZ2VcIj57e2VtcHR5RmlsdGVyTWVzc2FnZX19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZm9vdGVyXCIgKm5nSWY9XCJmb290ZXJGYWNldCB8fCBmb290ZXJUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ292ZXJsYXlBbmltYXRpb24nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJ3t7c2hvd1RyYW5zaXRpb25QYXJhbXN9fScpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgne3toaWRlVHJhbnNpdGlvblBhcmFtc319Jywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZpbGxlZF0nOiAnZmlsbGVkJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1mb2N1c10nOiAnZm9jdXMgfHwgb3ZlcmxheVZpc2libGUnXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtNVUxUSVNFTEVDVF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9tdWx0aXNlbGVjdC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdCBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0LEFmdGVyQ29udGVudEluaXQsQWZ0ZXJWaWV3Q2hlY2tlZCxPbkRlc3Ryb3ksQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHBhbmVsU3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHBhbmVsU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGdyb3VwOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGZpbHRlclBsYWNlSG9sZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJMb2NhbGU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG92ZXJsYXlWaXNpYmxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBhbnk7XG5cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZGlzcGxheVNlbGVjdGVkTGFiZWw6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgbWF4U2VsZWN0ZWRMYWJlbHM6IG51bWJlciA9IDM7XG5cbiAgICBASW5wdXQoKSBzZWxlY3Rpb25MaW1pdDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgc2VsZWN0ZWRJdGVtc0xhYmVsOiBzdHJpbmcgPSAnZWxsaXBzaXMnO1xuXG4gICAgQElucHV0KCkgc2hvd1RvZ2dsZUFsbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBlbXB0eUZpbHRlck1lc3NhZ2U6IHN0cmluZyA9ICdObyByZXN1bHRzIGZvdW5kJztcblxuICAgIEBJbnB1dCgpIHJlc2V0RmlsdGVyT25IaWRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBkcm9wZG93bkljb246IHN0cmluZyA9ICdwaSBwaS1jaGV2cm9uLWRvd24nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG9wdGlvblZhbHVlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBvcHRpb25EaXNhYmxlZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBMYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBDaGlsZHJlbjogc3RyaW5nID0gXCJpdGVtc1wiO1xuXG4gICAgQElucHV0KCkgc2hvd0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJCeTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGl0ZW1TaXplOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBzaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMTJzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xcyBsaW5lYXInO1xuXG4gICAgQElucHV0KCkgYXJpYUZpbHRlckxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJNYXRjaE1vZGU6IHN0cmluZyA9IFwiY29udGFpbnNcIjtcblxuICAgIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZyA9ICcnO1xuXG4gICAgQElucHV0KCkgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmcgPSAncmlnaHQnO1xuXG4gICAgQElucHV0KCkgdG9vbHRpcFBvc2l0aW9uU3R5bGU6IHN0cmluZyA9ICdhYnNvbHV0ZSc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYXV0b2ZvY3VzRmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGRpc3BsYXk6IHN0cmluZyA9ICdjb21tYSc7XG5cbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpIGZpbHRlcklucHV0Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdpbicpIGFjY2Vzc2libGVWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAQ29udGVudENoaWxkKEZvb3RlcikgZm9vdGVyRmFjZXQ7XG5cbiAgICBAQ29udGVudENoaWxkKEhlYWRlcikgaGVhZGVyRmFjZXQ7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUGFuZWxTaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblBhbmVsSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKSBzY3JvbGxIZWlnaHQ6IHN0cmluZyA9ICcyMDBweCc7XG5cbiAgICBfZGVmYXVsdExhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzZXQgZGVmYXVsdExhYmVsKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRMYWJlbCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0TGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRMYWJlbDtcbiAgICB9XG5cbiAgICBfcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIH1cblxuICAgIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IG9wdGlvbnMoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBzZXQgb3B0aW9ucyh2YWw6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgZmlsdGVyVmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclZhbHVlO1xuICAgIH1cblxuICAgIHNldCBmaWx0ZXJWYWx1ZSh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9maWx0ZXJWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZUZpbHRlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWx1ZTogYW55W107XG5cbiAgICBwdWJsaWMgX2ZpbHRlcmVkT3B0aW9uczogYW55W107XG5cbiAgICBwdWJsaWMgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIG92ZXJsYXk6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcHVibGljIHZhbHVlc0FzU3RyaW5nOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9jdXM6IGJvb2xlYW47XG5cbiAgICBmaWxsZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgZG9jdW1lbnRDbGlja0xpc3RlbmVyOiBhbnk7XG5cbiAgICBwdWJsaWMgX2ZpbHRlclZhbHVlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZmlsdGVyZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBwdWJsaWMgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIGhlYWRlckNoZWNrYm94Rm9jdXM6IGJvb2xlYW47XG5cbiAgICBfb3B0aW9uczogYW55W107XG5cbiAgICBtYXhTZWxlY3Rpb25MaW1pdFJlYWNoZWQ6IGJvb2xlYW47XG5cbiAgICBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgICBkb2N1bWVudFJlc2l6ZUxpc3RlbmVyOiBhbnk7XG5cbiAgICBwcmV2ZW50TW9kZWxUb3VjaGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIGZpbHRlclNlcnZpY2U6IEZpbHRlclNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdGVkSXRlbXMnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxpZ25PdmVybGF5KCk7XG5cbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE9wdGlvbkxhYmVsKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkxhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uTGFiZWwpIDogKG9wdGlvbi5sYWJlbCAhPSB1bmRlZmluZWQgPyBvcHRpb24ubGFiZWwgOiBvcHRpb24pO1xuICAgIH1cblxuICAgIGdldE9wdGlvblZhbHVlKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uVmFsdWUpIDogKHRoaXMub3B0aW9uTGFiZWwgfHwgb3B0aW9uLnZhbHVlID09PSB1bmRlZmluZWQgPyBvcHRpb24gOiBvcHRpb24udmFsdWUpO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwTGFiZWwob3B0aW9uR3JvdXA6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cExhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb25Hcm91cCwgdGhpcy5vcHRpb25Hcm91cExhYmVsKSA6IChvcHRpb25Hcm91cC5sYWJlbCAhPSB1bmRlZmluZWQgPyBvcHRpb25Hcm91cC5sYWJlbCA6IG9wdGlvbkdyb3VwKTtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25Hcm91cENoaWxkcmVuKG9wdGlvbkdyb3VwOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbiA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbikgOiBvcHRpb25Hcm91cC5pdGVtcztcbiAgICB9XG5cbiAgICBpc09wdGlvbkRpc2FibGVkKG9wdGlvbjogYW55KSB7XG4gICAgICAgIGxldCBkaXNhYmxlZCA9IHRoaXMub3B0aW9uRGlzYWJsZWQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25EaXNhYmxlZCkgOiAob3B0aW9uLmRpc2FibGVkICE9PSB1bmRlZmluZWQgPyBvcHRpb24uZGlzYWJsZWQgOiBmYWxzZSk7XG4gICAgICAgIHJldHVybiAoZGlzYWJsZWQgfHwgKHRoaXMubWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkICYmICF0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKSkpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICAgICAgdGhpcy5jaGVja1NlbGVjdGlvbkxpbWl0KCk7XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjaGVja1NlbGVjdGlvbkxpbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25MaW1pdCAmJiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3Rpb25MaW1pdCkpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVGaWxsZWRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5maWxsZWQgPSAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBldmVudC5vcHRpb247XG4gICAgICAgIGlmICh0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgICBsZXQgc2VsZWN0aW9uSW5kZXggPSB0aGlzLmZpbmRTZWxlY3Rpb25JbmRleChvcHRpb25WYWx1ZSk7XG4gICAgICAgIGlmIChzZWxlY3Rpb25JbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWwsaSkgPT4gaSAhPSBzZWxlY3Rpb25JbmRleCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhTZWxlY3Rpb25MaW1pdFJlYWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25MaW1pdCB8fCAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPCB0aGlzLnNlbGVjdGlvbkxpbWl0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbLi4udGhpcy52YWx1ZSB8fCBbXSwgb3B0aW9uVmFsdWVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoZWNrU2VsZWN0aW9uTGltaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCB2YWx1ZTogdGhpcy52YWx1ZSwgaXRlbVZhbHVlOiBvcHRpb25WYWx1ZX0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kU2VsZWN0aW9uSW5kZXgodGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKSAhPSAtMTtcbiAgICB9XG5cbiAgICBmaW5kU2VsZWN0aW9uSW5kZXgodmFsOiBhbnkpOiBudW1iZXLCoHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3RVdGlscy5lcXVhbHModGhpcy52YWx1ZVtpXSwgdmFsLCB0aGlzLmRhdGFLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGdldCB0b2dnbGVBbGxEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IG9wdGlvbnNUb1JlbmRlciA9IHRoaXMub3B0aW9uc1RvUmVuZGVyO1xuICAgICAgICBpZiAoIW9wdGlvbnNUb1JlbmRlciB8fCBvcHRpb25zVG9SZW5kZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBvcHRpb25zVG9SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQWxsKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMudG9nZ2xlQWxsRGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgYWxsQ2hlY2tlZCA9IHRoaXMuYWxsQ2hlY2tlZDsgICAgIFxuXG4gICAgICAgIGlmIChhbGxDaGVja2VkKVxuICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbGwoKTtcblxuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogdGhpcy52YWx1ZSB9KTsgICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjaGVja0FsbCgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnNUb1JlbmRlciA9IHRoaXMub3B0aW9uc1RvUmVuZGVyO1xuICAgICAgICBsZXQgdmFsOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgIG9wdGlvbnNUb1JlbmRlci5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uRGlzYWJsZWQgPSB0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0KTsgXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25EaXNhYmxlZCB8fCAob3B0aW9uRGlzYWJsZWQgJiYgdGhpcy5pc1NlbGVjdGVkKG9wdCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbC5wdXNoKHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1Yk9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0KTtcblxuICAgICAgICAgICAgICAgIGlmIChzdWJPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbkRpc2FibGVkID0gdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbik7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25EaXNhYmxlZCB8fCAob3B0aW9uRGlzYWJsZWQgJiYgdGhpcy5pc1NlbGVjdGVkKG9wdGlvbikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnB1c2godGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIHVuY2hlY2tBbGwoKSB7XG4gICAgICAgIGxldCBvcHRpb25zVG9SZW5kZXIgPSB0aGlzLm9wdGlvbnNUb1JlbmRlcjtcbiAgICAgICAgbGV0IHZhbDogYW55W10gPSBbXTtcblxuICAgICAgICBvcHRpb25zVG9SZW5kZXIuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbkRpc2FibGVkID0gdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdCk7IFxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25EaXNhYmxlZCAmJiB0aGlzLmlzU2VsZWN0ZWQob3B0KSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwucHVzaCh0aGlzLmdldE9wdGlvblZhbHVlKG9wdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHQuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0Lml0ZW1zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25EaXNhYmxlZCA9IHRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24pOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25EaXNhYmxlZCAmJiB0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wdXNoKHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVZpc2libGUpe1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk92ZXJsYXlBbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkgPSBldmVudC5lbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9aSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLnpJbmRleCA9IFN0cmluZyh0aGlzLmJhc2VaSW5kZXggKyAoKytEb21IYW5kbGVyLnppbmRleCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFsaWduT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVySW5wdXRDaGlsZCAmJiB0aGlzLmZpbHRlcklucHV0Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRNb2RlbFRvdWNoZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9mb2N1c0ZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJJbnB1dENoaWxkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub25QYW5lbFNob3cuZW1pdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ZvaWQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25PdmVybGF5SGlkZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRPdmVybGF5KCkge1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gPT09ICdib2R5JylcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXksIHRoaXMuYXBwZW5kVG8pO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMub3ZlcmxheS5zdHlsZS5taW5XaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5taW5XaWR0aCA9IERvbUhhbmRsZXIuZ2V0V2lkdGgodGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZU92ZXJsYXlBcHBlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGlnbk92ZXJsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKVxuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWJzb2x1dGVQb3NpdGlvbih0aGlzLm92ZXJsYXksIHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVsYXRpdmVQb3NpdGlvbih0aGlzLm92ZXJsYXksIHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICBpZiAodGhpcy5yZXNldEZpbHRlck9uSGlkZSl7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0Q2hpbGQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRPcHRpb25zID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uUGFuZWxIaWRlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjbG9zZShldmVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZWNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5IHx8ICg8Tm9kZT4gZXZlbnQudGFyZ2V0KS5pc1NhbWVOb2RlKHRoaXMuYWNjZXNzaWJsZVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc092ZXJsYXlDbGljayhldmVudCkgJiYgIURvbUhhbmRsZXIuaGFzQ2xhc3MoZXZlbnQudGFyZ2V0LCAncC1tdWx0aXNlbGVjdC10b2tlbi1pY29uJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpcChjaGlwOiBhbnksIGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcih2YWwgPT4gIU9iamVjdFV0aWxzLmVxdWFscyh2YWwsIGNoaXAsIHRoaXMuZGF0YUtleSkpO1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgaXNPdmVybGF5Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSA8Tm9kZT4gZXZlbnQudGFyZ2V0O1xuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5ID8gKHRoaXMub3ZlcmxheS5pc1NhbWVOb2RlKHRhcmdldE5vZGUpIHx8IHRoaXMub3ZlcmxheS5jb250YWlucyh0YXJnZXROb2RlKSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc091dHNpZGVDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhKHRoaXMuZWwubmF0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGV2ZW50LnRhcmdldCkgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHwgdGhpcy5pc092ZXJsYXlDbGljayhldmVudCkpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkZvY3VzLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50fSk7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudH0pO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25PcHRpb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2goZXZlbnQub3JpZ2luYWxFdmVudC53aGljaCkge1xuXG4gICAgICAgICAgICAvL2Rvd25cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgdmFyIG5leHRJdGVtID0gdGhpcy5maW5kTmV4dEl0ZW0oZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdmFyIHByZXZJdGVtID0gdGhpcy5maW5kUHJldkl0ZW0oZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZJdGVtLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZW50ZXJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmROZXh0SXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBuZXh0SXRlbSA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSlcbiAgICAgICAgICAgIHJldHVybiBEb21IYW5kbGVyLmhhc0NsYXNzKG5leHRJdGVtLmNoaWxkcmVuWzBdLCAncC1kaXNhYmxlZCcpIHx8IERvbUhhbmRsZXIuaXNIaWRkZW4obmV4dEl0ZW0uY2hpbGRyZW5bMF0pIHx8IERvbUhhbmRsZXIuaGFzQ2xhc3MobmV4dEl0ZW0sICdwLW11bHRpc2VsZWN0LWl0ZW0tZ3JvdXAnKSA/IHRoaXMuZmluZE5leHRJdGVtKG5leHRJdGVtKSA6IG5leHRJdGVtLmNoaWxkcmVuWzBdO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaW5kUHJldkl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgcHJldkl0ZW0gPSBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHByZXZJdGVtKVxuICAgICAgICAgICAgcmV0dXJuIERvbUhhbmRsZXIuaGFzQ2xhc3MocHJldkl0ZW0uY2hpbGRyZW5bMF0sICdwLWRpc2FibGVkJykgfHwgRG9tSGFuZGxlci5pc0hpZGRlbihwcmV2SXRlbS5jaGlsZHJlblswXSkgfHwgRG9tSGFuZGxlci5oYXNDbGFzcyhwcmV2SXRlbSwgJ3AtbXVsdGlzZWxlY3QtaXRlbS1ncm91cCcpID8gdGhpcy5maW5kUHJldkl0ZW0ocHJldkl0ZW0pIDogcHJldkl0ZW0uY2hpbGRyZW5bMF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCl7XG4gICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgLy9kb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5VmlzaWJsZSAmJiBldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vc3BhY2VcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2VzY2FwZVxuICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTGFiZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMub3B0aW9ucyAmJiB0aGlzLnZhbHVlLmxlbmd0aCAmJiB0aGlzLmRpc3BsYXlTZWxlY3RlZExhYmVsKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtTGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5VmFsdWUodGhpcy52YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1MYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbCArICcsICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbCArIGl0ZW1MYWJlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA8PSB0aGlzLm1heFNlbGVjdGVkTGFiZWxzIHx8IHRoaXMuc2VsZWN0ZWRJdGVtc0xhYmVsID09PSAnZWxsaXBzaXMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNBc1N0cmluZyA9IGxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhdHRlcm4gPSAveyguKj8pfS87XG4gICAgICAgICAgICAgICAgaWYgKHBhdHRlcm4udGVzdCh0aGlzLnNlbGVjdGVkSXRlbXNMYWJlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNBc1N0cmluZyA9IHRoaXMuc2VsZWN0ZWRJdGVtc0xhYmVsLnJlcGxhY2UodGhpcy5zZWxlY3RlZEl0ZW1zTGFiZWwubWF0Y2gocGF0dGVybilbMF0sIHRoaXMudmFsdWUubGVuZ3RoICsgJycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzQXNTdHJpbmcgPSB0aGlzLnNlbGVjdGVkSXRlbXNMYWJlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc0FzU3RyaW5nID0gdGhpcy5wbGFjZWhvbGRlciB8fCB0aGlzLmRlZmF1bHRMYWJlbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRMYWJlbEJ5VmFsdWUodmFsOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3ViT3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbih0aGlzLm9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChzdWJPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy5zZWFyY2hMYWJlbEJ5VmFsdWUodmFsLCBzdWJPcHRpb25zKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hMYWJlbEJ5VmFsdWUodmFsLCB0aGlzLm9wdGlvbnMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hMYWJlbEJ5VmFsdWUodmFsOiBhbnksIG9wdGlvbnM6IGFueVtdKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxhYmVsID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAodmFsID09IG51bGwgJiYgb3B0aW9uVmFsdWUgPT0gbnVsbCB8fCBPYmplY3RVdGlscy5lcXVhbHModmFsLCBvcHRpb25WYWx1ZSwgdGhpcy5kYXRhS2V5KSkge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy5nZXRPcHRpb25MYWJlbChvcHRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIGdldCBhbGxDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgb3B0aW9uc1RvUmVuZGVyID0gdGhpcy5vcHRpb25zVG9SZW5kZXI7XG4gICAgICAgIGlmICghb3B0aW9uc1RvUmVuZGVyIHx8IG9wdGlvbnNUb1JlbmRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERpc2FibGVkSXRlbXNMZW5ndGggPSAwO1xuICAgICAgICAgICAgbGV0IHVuc2VsZWN0ZWREaXNhYmxlZEl0ZW1zTGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEVuYWJsZWRJdGVtc0xlbmd0aCA9IDA7XG4gICAgICAgICAgICBsZXQgdmlzaWJsZU9wdGlvbnNMZW5ndGggPSB0aGlzLmdyb3VwID8gMCA6IHRoaXMub3B0aW9uc1RvUmVuZGVyLmxlbmd0aDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIG9wdGlvbnNUb1JlbmRlcikge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ncm91cCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzYWJsZWQgPSB0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKG9wdGlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRGlzYWJsZWRJdGVtc0xlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNlbGVjdGVkRGlzYWJsZWRJdGVtc0xlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRW5hYmxlZEl0ZW1zTGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBvcHQgb2YgdGhpcy5nZXRPcHRpb25Hcm91cENoaWxkcmVuKG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlZCA9IHRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKG9wdCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERpc2FibGVkSXRlbXNMZW5ndGgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNlbGVjdGVkRGlzYWJsZWRJdGVtc0xlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEVuYWJsZWRJdGVtc0xlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlT3B0aW9uc0xlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKHZpc2libGVPcHRpb25zTGVuZ3RoID09PSBzZWxlY3RlZERpc2FibGVkSXRlbXNMZW5ndGggXG4gICAgICAgICAgICAgICAgICAgIHx8IHZpc2libGVPcHRpb25zTGVuZ3RoID09PSBzZWxlY3RlZEVuYWJsZWRJdGVtc0xlbmd0aCBcbiAgICAgICAgICAgICAgICAgICAgfHzCoHNlbGVjdGVkRW5hYmxlZEl0ZW1zTGVuZ3RoICYmIHZpc2libGVPcHRpb25zTGVuZ3RoID09PSAoc2VsZWN0ZWRFbmFibGVkSXRlbXNMZW5ndGggKyB1bnNlbGVjdGVkRGlzYWJsZWRJdGVtc0xlbmd0aCArIHNlbGVjdGVkRGlzYWJsZWRJdGVtc0xlbmd0aCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG9wdGlvbnNUb1JlbmRlcigpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZE9wdGlvbnMgfHwgdGhpcy5vcHRpb25zO1xuICAgIH1cblxuICAgIGdldCBlbXB0eU9wdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBvcHRpb25zVG9SZW5kZXIgPSB0aGlzLm9wdGlvbnNUb1JlbmRlcjtcbiAgICAgICAgcmV0dXJuICFvcHRpb25zVG9SZW5kZXIgfHwgb3B0aW9uc1RvUmVuZGVyLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBoYXNGaWx0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJWYWx1ZSAmJiB0aGlzLl9maWx0ZXJWYWx1ZS50cmltKCkubGVuZ3RoID4gMDsgXG4gICAgfVxuXG4gICAgb25GaWx0ZXJJbnB1dENoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLl9maWx0ZXJWYWx1ZSA9ICg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS52YWx1ZTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZUZpbHRlcigpO1xuICAgICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBmaWx0ZXI6IHRoaXMuX2ZpbHRlclZhbHVlfSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVGaWx0ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcigpICYmIHRoaXMuX29wdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2hGaWVsZHM6IHN0cmluZ1tdID0gKHRoaXMuZmlsdGVyQnkgfHzCoHRoaXMub3B0aW9uTGFiZWwgfHwgJ2xhYmVsJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaEZpZWxkczogc3RyaW5nW10gPSAodGhpcy5vcHRpb25MYWJlbCB8fCAnbGFiZWwnKS5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkR3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb3B0Z3JvdXAgb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFN1Yk9wdGlvbnMgPSB0aGlzLmZpbHRlclNlcnZpY2UuZmlsdGVyKHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRncm91cCksIHNlYXJjaEZpZWxkcywgdGhpcy5maWx0ZXJWYWx1ZSwgdGhpcy5maWx0ZXJNYXRjaE1vZGUsIHRoaXMuZmlsdGVyTG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkU3ViT3B0aW9ucyAmJiBmaWx0ZXJlZFN1Yk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEdyb3Vwcy5wdXNoKHsuLi5vcHRncm91cCwgLi4ue1t0aGlzLm9wdGlvbkdyb3VwQ2hpbGRyZW5dOiBmaWx0ZXJlZFN1Yk9wdGlvbnN9fSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZE9wdGlvbnMgPSBmaWx0ZXJlZEdyb3VwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXIodGhpcy5vcHRpb25zLCBzZWFyY2hGaWVsZHMsIHRoaXMuX2ZpbHRlclZhbHVlLCB0aGlzLmZpbHRlck1hdGNoTW9kZSwgdGhpcy5maWx0ZXJMb2NhbGUpOyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZE9wdGlvbnMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IZWFkZXJDaGVja2JveEZvY3VzKCkge1xuICAgICAgICB0aGlzLmhlYWRlckNoZWNrYm94Rm9jdXMgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSGVhZGVyQ2hlY2tib3hCbHVyKCkge1xuICAgICAgICB0aGlzLmhlYWRlckNoZWNrYm94Rm9jdXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudFRhcmdldDogYW55ID0gdGhpcy5lbCA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50IDogJ2RvY3VtZW50JztcblxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudFRhcmdldCwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRzaWRlQ2xpY2tlZChldmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHVuYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgICBpZiAoIURvbUhhbmRsZXIuaXNBbmRyb2lkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gbmV3IENvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyKHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vdmVybGF5VmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICB1bmJpbmRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnVuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk92ZXJsYXlIaWRlKCkge1xuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN0b3JlT3ZlcmxheUFwcGVuZCgpO1xuICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFNoYXJlZE1vZHVsZSxTY3JvbGxpbmdNb2R1bGUsVG9vbHRpcE1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtNdWx0aVNlbGVjdCxTaGFyZWRNb2R1bGUsU2Nyb2xsaW5nTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtNdWx0aVNlbGVjdCxNdWx0aVNlbGVjdEl0ZW1dXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU2VsZWN0TW9kdWxlIHsgfVxuIl19