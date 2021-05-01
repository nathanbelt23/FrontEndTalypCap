import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, ChangeDetectorRef, IterableDiffers, Input, Output, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { UniqueComponentId, ObjectUtils } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';
import * as ɵngcc3 from 'primeng/ripple';
import * as ɵngcc4 from '@angular/cdk/scrolling';

const _c0 = ["container"];
const _c1 = ["in"];
const _c2 = ["multiIn"];
const _c3 = ["multiContainer"];
const _c4 = ["ddBtn"];
const _c5 = function (a0, a1) { return { "p-autocomplete-dd-input": a0, "p-disabled": a1 }; };
function AutoComplete_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 7, 8);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_input_2_Template_input_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onInputClick($event); })("input", function AutoComplete_input_2_Template_input_input_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onInput($event); })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onKeydown($event); })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onKeyup($event); })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onInputFocus($event); })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onInputBlur($event); })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onInputChange($event); })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onInputPaste($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.inputStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.inputStyle)("autocomplete", ctx_r1.autocomplete)("ngClass", ɵngcc0.ɵɵpureFunction2(23, _c5, ctx_r1.dropdown, ctx_r1.disabled))("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵattribute("type", ctx_r1.type)("id", ctx_r1.inputId)("required", ctx_r1.required)("name", ctx_r1.name)("aria-controls", ctx_r1.listId)("aria-expanded", ctx_r1.overlayVisible)("aria-activedescendant", "p-highlighted-option")("autofocus", ctx_r1.autofocus)("placeholder", ctx_r1.placeholder)("size", ctx_r1.size)("maxlength", ctx_r1.maxlength)("tabindex", ctx_r1.tabindex)("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-required", ctx_r1.required);
} }
function AutoComplete_ul_3_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_ul_3_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 20);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r19 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.resolveFieldData(val_r19));
} }
function AutoComplete_ul_3_li_2_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_ul_3_li_2_span_4_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); ɵngcc0.ɵɵnextContext(); const _r20 = ɵngcc0.ɵɵreference(1); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.removeItem(_r20); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c6 = function (a0) { return { $implicit: a0 }; };
function AutoComplete_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 15, 16);
    ɵngcc0.ɵɵtemplate(2, AutoComplete_ul_3_li_2_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_ul_3_li_2_span_3_Template, 2, 1, "span", 18);
    ɵngcc0.ɵɵtemplate(4, AutoComplete_ul_3_li_2_span_4_Template, 1, 0, "span", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r19 = ctx.$implicit;
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r17.selectedItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c6, val_r19));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r17.selectedItemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r17.disabled && !ctx_r17.readonly);
} }
const _c7 = function (a0, a1) { return { "p-disabled": a0, "p-focus": a1 }; };
function AutoComplete_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ul", 9, 10);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_ul_3_Template_ul_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r28); const _r18 = ɵngcc0.ɵɵreference(5); return _r18.focus(); });
    ɵngcc0.ɵɵtemplate(2, AutoComplete_ul_3_li_2_Template, 5, 6, "li", 11);
    ɵngcc0.ɵɵelementStart(3, "li", 12);
    ɵngcc0.ɵɵelementStart(4, "input", 13, 14);
    ɵngcc0.ɵɵlistener("input", function AutoComplete_ul_3_Template_input_input_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onInput($event); })("click", function AutoComplete_ul_3_Template_input_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onInputClick($event); })("keydown", function AutoComplete_ul_3_Template_input_keydown_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.onKeydown($event); })("keyup", function AutoComplete_ul_3_Template_input_keyup_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onKeyup($event); })("focus", function AutoComplete_ul_3_Template_input_focus_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.onInputFocus($event); })("blur", function AutoComplete_ul_3_Template_input_blur_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.onInputBlur($event); })("change", function AutoComplete_ul_3_Template_input_change_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.onInputChange($event); })("paste", function AutoComplete_ul_3_Template_input_paste_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onInputPaste($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(20, _c7, ctx_r2.disabled, ctx_r2.focus));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.value);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r2.inputStyleClass);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("autocomplete", ctx_r2.autocomplete)("ngStyle", ctx_r2.inputStyle);
    ɵngcc0.ɵɵattribute("type", ctx_r2.type)("id", ctx_r2.inputId)("placeholder", ctx_r2.value && ctx_r2.value.length ? null : ctx_r2.placeholder)("tabindex", ctx_r2.tabindex)("maxlength", ctx_r2.maxlength)("autofocus", ctx_r2.autofocus)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-controls", ctx_r2.listId)("aria-expanded", ctx_r2.overlayVisible)("aria-activedescendant", "p-highlighted-option");
} }
function AutoComplete_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 22);
} }
function AutoComplete_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 23, 24);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_button_5_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); const ctx_r38 = ɵngcc0.ɵɵnextContext(); return ctx_r38.handleDropdownClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r4.dropdownIcon)("disabled", ctx_r4.disabled);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r4.tabindex);
} }
function AutoComplete_div_6_ng_container_3_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const optgroup_r46 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r47 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r47.getOptionGroupLabel(optgroup_r46) || "empty");
} }
function AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_div_6_ng_container_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 30);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_container_3_ng_template_1_span_1_Template, 2, 1, "span", 27);
    ɵngcc0.ɵɵtemplate(2, AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_ng_container_3_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 17);
} if (rf & 2) {
    const optgroup_r46 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r43 = ɵngcc0.ɵɵreference(6);
    const ctx_r45 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r45.groupTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r45.groupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c6, optgroup_r46));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r43)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c6, ctx_r45.getOptionGroupChildren(optgroup_r46)));
} }
function AutoComplete_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_container_3_ng_template_1_Template, 4, 9, "ng-template", 29);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r41 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r41.suggestions);
} }
function AutoComplete_div_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AutoComplete_div_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r43 = ɵngcc0.ɵɵreference(6);
    const ctx_r42 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r43)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, ctx_r42.suggestions));
} }
function AutoComplete_div_6_ng_template_5_ng_container_0_li_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r58 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r60 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r60.resolveFieldData(option_r58));
} }
function AutoComplete_div_6_ng_template_5_ng_container_0_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c8 = function (a0) { return { "p-highlight": a0 }; };
const _c9 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function AutoComplete_div_6_ng_template_5_ng_container_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 35);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_div_6_ng_template_5_ng_container_0_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r64); const option_r58 = ctx.$implicit; const ctx_r63 = ɵngcc0.ɵɵnextContext(4); return ctx_r63.selectItem(option_r58); });
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_template_5_ng_container_0_li_1_span_1_Template, 2, 1, "span", 27);
    ɵngcc0.ɵɵtemplate(2, AutoComplete_div_6_ng_template_5_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r58 = ctx.$implicit;
    const idx_r59 = ctx.index;
    const ctx_r57 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c8, option_r58 === ctx_r57.highlightOption))("id", ctx_r57.highlightOption == option_r58 ? "p-highlighted-option" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r57.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r57.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c9, option_r58, idx_r59));
} }
function AutoComplete_div_6_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_template_5_ng_container_0_li_1_Template, 3, 10, "li", 34);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggestionsToDisplay_r52 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", suggestionsToDisplay_r52);
} }
function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r68 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r75 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r75.resolveFieldData(option_r68));
} }
function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c10 = function (a0) { return { "height": a0 }; };
function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 39);
    ɵngcc0.ɵɵlistener("click", function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template_li_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r79); const option_r68 = ctx.$implicit; const ctx_r78 = ɵngcc0.ɵɵnextContext(5); return ctx_r78.selectItem(option_r68); });
    ɵngcc0.ɵɵtemplate(2, AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_span_2_Template, 2, 1, "span", 27);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r68 = ctx.$implicit;
    const i_r69 = ctx.index;
    const ctx_r67 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c8, option_r68 === ctx_r67.highlightOption))("ngStyle", ɵngcc0.ɵɵpureFunction1(8, _c10, ctx_r67.itemSize + "px"))("id", ctx_r67.highlightOption == option_r68 ? "p-highlighted-option" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r67.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r67.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(10, _c9, option_r68, i_r69));
} }
function AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 37);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template, 4, 13, "ng-container", 38);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const suggestionsToDisplay_r52 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r66 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c10, ctx_r66.scrollHeight))("itemSize", ctx_r66.itemSize);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", suggestionsToDisplay_r52);
} }
function AutoComplete_div_6_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, AutoComplete_div_6_ng_template_5_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 2, 5, "cdk-virtual-scroll-viewport", 36);
} if (rf & 2) {
    const ctx_r55 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r55.virtualScroll && !ctx_r55.noResults);
} }
function AutoComplete_div_6_ng_template_5_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 40);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r56 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r56.emptyMessage);
} }
function AutoComplete_div_6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, AutoComplete_div_6_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 31);
    ɵngcc0.ɵɵtemplate(1, AutoComplete_div_6_ng_template_5_ng_template_1_Template, 1, 1, "ng-template", null, 32, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_ng_template_5_li_3_Template, 2, 1, "li", 33);
} if (rf & 2) {
    const _r54 = ɵngcc0.ɵɵreference(2);
    const ctx_r44 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r44.virtualScroll)("ngIfElse", _r54);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r44.noResults && ctx_r44.emptyMessage);
} }
const _c11 = function () { return ["p-autocomplete-panel p-component"]; };
const _c12 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c13 = function (a1) { return { value: "visible", params: a1 }; };
const _c14 = function (a0) { return { "p-autocomplete-virtualscroll": a0 }; };
function AutoComplete_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r82 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 0, 25);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function AutoComplete_div_6_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r82); const ctx_r81 = ɵngcc0.ɵɵnextContext(); return ctx_r81.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵelementStart(2, "ul", 26);
    ɵngcc0.ɵɵtemplate(3, AutoComplete_div_6_ng_container_3_Template, 2, 1, "ng-container", 27);
    ɵngcc0.ɵɵtemplate(4, AutoComplete_div_6_ng_container_4_Template, 2, 4, "ng-container", 27);
    ɵngcc0.ɵɵtemplate(5, AutoComplete_div_6_ng_template_5_Template, 4, 3, "ng-template", null, 28, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r5.panelStyleClass);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r5.virtualScroll ? "auto" : ctx_r5.scrollHeight);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(11, _c11))("ngStyle", ctx_r5.panelStyle)("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(15, _c13, ɵngcc0.ɵɵpureFunction2(12, _c12, ctx_r5.showTransitionOptions, ctx_r5.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c14, ctx_r5.virtualScroll));
    ɵngcc0.ɵɵattribute("id", ctx_r5.listId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.group);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.group);
} }
const _c15 = function (a1, a2) { return { "p-autocomplete p-component": true, "p-autocomplete-dd": a1, "p-autocomplete-multiple": a2 }; };
const AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoComplete),
    multi: true
};
class AutoComplete {
    constructor(el, renderer, cd, differs) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.differs = differs;
        this.minLength = 1;
        this.delay = 300;
        this.type = 'text';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.dropdownIcon = "pi pi-chevron-down";
        this.unique = true;
        this.completeOnFocus = false;
        this.completeMethod = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onDropdownClick = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.scrollHeight = '200px';
        this.dropdownMode = 'blank';
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.autocomplete = 'off';
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.overlayVisible = false;
        this.focus = false;
        this.inputFieldValue = null;
        this.differ = differs.find([]).create(null);
        this.listId = UniqueComponentId() + '_list';
    }
    get suggestions() {
        return this._suggestions;
    }
    set suggestions(val) {
        this._suggestions = val;
        this.handleSuggestionsChange();
    }
    ngAfterViewChecked() {
        //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
        if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
            setTimeout(() => {
                if (this.overlay) {
                    this.alignOverlay();
                }
            }, 1);
            this.suggestionsUpdated = false;
        }
        if (this.highlightOptionChanged) {
            setTimeout(() => {
                if (this.overlay && this.itemsWrapper) {
                    let listItem = DomHandler.findSingle(this.overlay, 'li.p-highlight');
                    if (listItem) {
                        DomHandler.scrollInView(this.itemsWrapper, listItem);
                    }
                    if (this.virtualScroll && this.viewPort) {
                        let range = this.viewPort.getRenderedRange();
                        this.updateVirtualScrollSelectedIndex();
                        if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                            this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                        }
                    }
                }
            }, 1);
            this.highlightOptionChanged = false;
        }
    }
    handleSuggestionsChange() {
        if (this._suggestions != null && this.loading) {
            this.highlightOption = null;
            if (this._suggestions.length) {
                this.noResults = false;
                this.show();
                this.suggestionsUpdated = true;
                if (this.autoHighlight) {
                    this.highlightOption = this._suggestions[0];
                }
            }
            else {
                this.noResults = true;
                if (this.emptyMessage) {
                    this.show();
                    this.suggestionsUpdated = true;
                }
                else {
                    this.hide();
                }
            }
            this.loading = false;
        }
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
                case 'selectedItem':
                    this.selectedItemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    updateVirtualScrollSelectedIndex() {
        if (this.highlightOption && this.suggestions && this.suggestions.length) {
            this.virtualScrollSelectedIndex = this.findOptionIndex(this.highlightOption, this.suggestions);
        }
    }
    writeValue(value) {
        this.value = value;
        this.filled = this.value && this.value != '';
        this.updateInputField();
        this.cd.markForCheck();
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : (optionGroup.label != undefined ? optionGroup.label : optionGroup);
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
    onInput(event) {
        // When an input element with a placeholder is clicked, the onInput event is invoked in IE.
        if (!this.inputKeyDown && DomHandler.isIE()) {
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        let value = event.target.value;
        if (!this.multiple && !this.forceSelection) {
            this.onModelChange(value);
        }
        if (value.length === 0 && !this.multiple) {
            this.hide();
            this.onClear.emit(event);
            this.onModelChange(value);
        }
        if (value.length >= this.minLength) {
            this.timeout = setTimeout(() => {
                this.search(event, value);
            }, this.delay);
        }
        else {
            this.hide();
        }
        this.updateFilledState();
        this.inputKeyDown = false;
    }
    onInputClick(event) {
        if (this.documentClickListener) {
            this.inputClick = true;
        }
    }
    search(event, query) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }
        this.loading = true;
        this.completeMethod.emit({
            originalEvent: event,
            query: query
        });
    }
    selectItem(option, focus = true) {
        if (this.forceSelectionUpdateModelTimeout) {
            clearTimeout(this.forceSelectionUpdateModelTimeout);
            this.forceSelectionUpdateModelTimeout = null;
        }
        if (this.multiple) {
            this.multiInputEL.nativeElement.value = '';
            this.value = this.value || [];
            if (!this.isSelected(option) || !this.unique) {
                this.value = [...this.value, option];
                this.onModelChange(this.value);
            }
        }
        else {
            this.inputEL.nativeElement.value = this.resolveFieldData(option);
            this.value = option;
            this.onModelChange(this.value);
        }
        this.onSelect.emit(option);
        this.updateFilledState();
        if (focus) {
            this.itemClicked = true;
            this.focusInput();
        }
    }
    show() {
        if (this.multiInputEL || this.inputEL) {
            let hasFocus = this.multiple ?
                this.multiInputEL.nativeElement.ownerDocument.activeElement == this.multiInputEL.nativeElement :
                this.inputEL.nativeElement.ownerDocument.activeElement == this.inputEL.nativeElement;
            if (!this.overlayVisible && hasFocus) {
                this.overlayVisible = true;
            }
        }
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.itemsWrapper = this.virtualScroll ? DomHandler.findSingle(this.overlay, '.cdk-virtual-scroll-viewport') : this.overlay;
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.bindScrollListener();
                this.onShow.emit(event);
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
                this.overlay.style.minWidth = DomHandler.getWidth(this.el.nativeElement.children[0]) + 'px';
            }
        }
    }
    resolveFieldData(value) {
        let data = this.field ? ObjectUtils.resolveFieldData(value, this.field) : value;
        return data !== (null || undefined) ? data : '';
    }
    restoreOverlayAppend() {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.appendTo)
            DomHandler.absolutePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
        else
            DomHandler.relativePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
    }
    hide() {
        this.overlayVisible = false;
        this.cd.markForCheck();
    }
    handleDropdownClick(event) {
        if (!this.overlayVisible) {
            this.focusInput();
            let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
            if (this.dropdownMode === 'blank')
                this.search(event, '');
            else if (this.dropdownMode === 'current')
                this.search(event, queryValue);
            this.onDropdownClick.emit({
                originalEvent: event,
                query: queryValue
            });
        }
        else {
            this.hide();
        }
    }
    focusInput() {
        if (this.multiple)
            this.multiInputEL.nativeElement.focus();
        else
            this.inputEL.nativeElement.focus();
    }
    removeItem(item) {
        let itemIndex = DomHandler.index(item);
        let removedValue = this.value[itemIndex];
        this.value = this.value.filter((val, i) => i != itemIndex);
        this.onModelChange(this.value);
        this.updateFilledState();
        this.onUnselect.emit(removedValue);
    }
    onKeydown(event) {
        if (this.overlayVisible) {
            switch (event.which) {
                //down
                case 40:
                    if (this.group) {
                        let highlightItemIndex = this.findOptionGroupIndex(this.highlightOption, this.suggestions);
                        if (highlightItemIndex !== -1) {
                            let nextItemIndex = highlightItemIndex.itemIndex + 1;
                            if (nextItemIndex < (this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex]).length)) {
                                this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex])[nextItemIndex];
                                this.highlightOptionChanged = true;
                            }
                            else if (this.suggestions[highlightItemIndex.groupIndex + 1]) {
                                this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex + 1])[0];
                                this.highlightOptionChanged = true;
                            }
                        }
                        else {
                            this.highlightOption = this.getOptionGroupChildren(this.suggestions[0])[0];
                        }
                    }
                    else {
                        let highlightItemIndex = this.findOptionIndex(this.highlightOption, this.suggestions);
                        if (highlightItemIndex != -1) {
                            var nextItemIndex = highlightItemIndex + 1;
                            if (nextItemIndex != (this.suggestions.length)) {
                                this.highlightOption = this.suggestions[nextItemIndex];
                                this.highlightOptionChanged = true;
                            }
                        }
                        else {
                            this.highlightOption = this.suggestions[0];
                        }
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    if (this.group) {
                        let highlightItemIndex = this.findOptionGroupIndex(this.highlightOption, this.suggestions);
                        if (highlightItemIndex !== -1) {
                            let prevItemIndex = highlightItemIndex.itemIndex - 1;
                            if (prevItemIndex >= 0) {
                                this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex])[prevItemIndex];
                                this.highlightOptionChanged = true;
                            }
                            else if (prevItemIndex < 0) {
                                let prevGroup = this.suggestions[highlightItemIndex.groupIndex - 1];
                                if (prevGroup) {
                                    this.highlightOption = this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1];
                                    this.highlightOptionChanged = true;
                                }
                            }
                        }
                    }
                    else {
                        let highlightItemIndex = this.findOptionIndex(this.highlightOption, this.suggestions);
                        if (highlightItemIndex > 0) {
                            let prevItemIndex = highlightItemIndex - 1;
                            this.highlightOption = this.suggestions[prevItemIndex];
                            this.highlightOptionChanged = true;
                        }
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                        this.hide();
                    }
                    event.preventDefault();
                    break;
                //escape
                case 27:
                    this.hide();
                    event.preventDefault();
                    break;
                //tab
                case 9:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                    }
                    this.hide();
                    break;
            }
        }
        else {
            if (event.which === 40 && this.suggestions) {
                this.search(event, event.target.value);
            }
        }
        if (this.multiple) {
            switch (event.which) {
                //backspace
                case 8:
                    if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                        this.value = [...this.value];
                        const removedValue = this.value.pop();
                        this.onModelChange(this.value);
                        this.updateFilledState();
                        this.onUnselect.emit(removedValue);
                    }
                    break;
            }
        }
        this.inputKeyDown = true;
    }
    onKeyup(event) {
        this.onKeyUp.emit(event);
    }
    onInputFocus(event) {
        if (!this.itemClicked && this.completeOnFocus) {
            let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
            this.search(event, queryValue);
        }
        this.focus = true;
        this.onFocus.emit(event);
        this.itemClicked = false;
    }
    onInputBlur(event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onInputChange(event) {
        if (this.forceSelection) {
            let valid = false;
            let inputValue = event.target.value.trim();
            if (this.suggestions) {
                for (let suggestion of this.suggestions) {
                    let itemValue = this.field ? ObjectUtils.resolveFieldData(suggestion, this.field) : suggestion;
                    if (itemValue && inputValue === itemValue.trim()) {
                        valid = true;
                        this.forceSelectionUpdateModelTimeout = setTimeout(() => {
                            this.selectItem(suggestion, false);
                        }, 250);
                        break;
                    }
                }
            }
            if (!valid) {
                if (this.multiple) {
                    this.multiInputEL.nativeElement.value = '';
                }
                else {
                    this.value = null;
                    this.inputEL.nativeElement.value = '';
                }
                this.onClear.emit(event);
                this.onModelChange(this.value);
                this.updateFilledState();
            }
        }
    }
    onInputPaste(event) {
        this.onKeydown(event);
    }
    isSelected(val) {
        let selected = false;
        if (this.value && this.value.length) {
            for (let i = 0; i < this.value.length; i++) {
                if (ObjectUtils.equals(this.value[i], val, this.dataKey)) {
                    selected = true;
                    break;
                }
            }
        }
        return selected;
    }
    findOptionIndex(option, suggestions) {
        let index = -1;
        if (suggestions) {
            for (let i = 0; i < suggestions.length; i++) {
                if (ObjectUtils.equals(option, suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    findOptionGroupIndex(val, opts) {
        let groupIndex, itemIndex;
        if (opts) {
            for (let i = 0; i < opts.length; i++) {
                groupIndex = i;
                itemIndex = this.findOptionIndex(val, this.getOptionGroupChildren(opts[i]));
                if (itemIndex !== -1) {
                    break;
                }
            }
        }
        if (itemIndex !== -1) {
            return { groupIndex: groupIndex, itemIndex: itemIndex };
        }
        else {
            return -1;
        }
    }
    updateFilledState() {
        if (this.multiple)
            this.filled = (this.value && this.value.length) || (this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '');
        else
            this.filled = (this.inputFieldValue && this.inputFieldValue != '') || (this.inputEL && this.inputEL.nativeElement && this.inputEL.nativeElement.value != '');
        ;
    }
    updateInputField() {
        let formattedValue = this.resolveFieldData(this.value);
        this.inputFieldValue = formattedValue;
        if (this.inputEL && this.inputEL.nativeElement) {
            this.inputEL.nativeElement.value = formattedValue;
        }
        this.updateFilledState();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (event.which === 3) {
                    return;
                }
                if (!this.inputClick && !this.isDropdownClick(event)) {
                    this.hide();
                }
                this.inputClick = false;
                this.cd.markForCheck();
            });
        }
    }
    isDropdownClick(event) {
        if (this.dropdown) {
            let target = event.target;
            return (target === this.dropdownButton.nativeElement || target.parentNode === this.dropdownButton.nativeElement);
        }
        else {
            return false;
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
        this.hide();
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerEL.nativeElement, () => {
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
        this.onHide.emit();
    }
    ngOnDestroy() {
        if (this.forceSelectionUpdateModelTimeout) {
            clearTimeout(this.forceSelectionUpdateModelTimeout);
            this.forceSelectionUpdateModelTimeout = null;
        }
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
}
AutoComplete.ɵfac = function AutoComplete_Factory(t) { return new (t || AutoComplete)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
AutoComplete.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AutoComplete, selectors: [["p-autoComplete"]], contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function AutoComplete_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.multiInputEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.multiContainerEL = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownButton = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewPort = _t.first);
    } }, hostVars: 4, hostBindings: function AutoComplete_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus && !ctx.disabled || ctx.overlayVisible);
    } }, inputs: { minLength: "minLength", delay: "delay", type: "type", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", dropdownIcon: "dropdownIcon", unique: "unique", completeOnFocus: "completeOnFocus", scrollHeight: "scrollHeight", dropdownMode: "dropdownMode", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", autocomplete: "autocomplete", suggestions: "suggestions", disabled: "disabled", style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", inputStyle: "inputStyle", inputId: "inputId", inputStyleClass: "inputStyleClass", placeholder: "placeholder", readonly: "readonly", virtualScroll: "virtualScroll", itemSize: "itemSize", maxlength: "maxlength", name: "name", required: "required", size: "size", appendTo: "appendTo", autoHighlight: "autoHighlight", forceSelection: "forceSelection", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", group: "group", field: "field", dropdown: "dropdown", multiple: "multiple", tabindex: "tabindex", dataKey: "dataKey", emptyMessage: "emptyMessage", autofocus: "autofocus", optionGroupChildren: "optionGroupChildren", optionGroupLabel: "optionGroupLabel" }, outputs: { completeMethod: "completeMethod", onSelect: "onSelect", onUnselect: "onUnselect", onFocus: "onFocus", onBlur: "onBlur", onDropdownClick: "onDropdownClick", onClear: "onClear", onKeyUp: "onKeyUp", onShow: "onShow", onHide: "onHide" }, features: [ɵngcc0.ɵɵProvidersFeature([AUTOCOMPLETE_VALUE_ACCESSOR])], decls: 7, vars: 12, consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["class", "p-autocomplete-input p-inputtext p-component", "aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "ngStyle", "class", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste", 4, "ngIf"], ["class", "p-autocomplete-multiple-container p-component p-inputtext", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-autocomplete-loader pi pi-spinner pi-spin", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown", "pRipple", "", 3, "icon", "disabled", "click", 4, "ngIf"], [3, "ngClass", "max-height", "ngStyle", "class", 4, "ngIf"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 1, "p-autocomplete-input", "p-inputtext", "p-component", 3, "ngStyle", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste"], ["in", ""], [1, "p-autocomplete-multiple-container", "p-component", "p-inputtext", 3, "ngClass", "click"], ["multiContainer", ""], ["class", "p-autocomplete-token", 4, "ngFor", "ngForOf"], [1, "p-autocomplete-input-token"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "disabled", "readonly", "autocomplete", "ngStyle", "input", "click", "keydown", "keyup", "focus", "blur", "change", "paste"], ["multiIn", ""], [1, "p-autocomplete-token"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], ["class", "p-autocomplete-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-autocomplete-token-label"], [1, "p-autocomplete-token-icon", "pi", "pi-times-circle", 3, "click"], [1, "p-autocomplete-loader", "pi", "pi-spinner", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", 3, "icon", "disabled", "click"], ["ddBtn", ""], ["panel", ""], ["role", "listbox", 1, "p-autocomplete-items", 3, "ngClass"], [4, "ngIf"], ["itemslist", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-autocomplete-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], ["class", "p-autocomplete-emptymessage p-autocomplete-item", 4, "ngIf"], ["role", "option", "class", "p-autocomplete-item", "pRipple", "", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], ["role", "option", "pRipple", "", 1, "p-autocomplete-item", 3, "ngClass", "id", "click"], [3, "ngStyle", "itemSize", 4, "ngIf"], [3, "ngStyle", "itemSize"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["role", "option", "pRipple", "", 1, "p-autocomplete-item", 3, "ngClass", "ngStyle", "id", "click"], [1, "p-autocomplete-emptymessage", "p-autocomplete-item"]], template: function AutoComplete_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0, 1);
        ɵngcc0.ɵɵtemplate(2, AutoComplete_input_2_Template, 2, 26, "input", 2);
        ɵngcc0.ɵɵtemplate(3, AutoComplete_ul_3_Template, 6, 23, "ul", 3);
        ɵngcc0.ɵɵtemplate(4, AutoComplete_i_4_Template, 1, 0, "i", 4);
        ɵngcc0.ɵɵtemplate(5, AutoComplete_button_5_Template, 2, 3, "button", 5);
        ɵngcc0.ɵɵtemplate(6, AutoComplete_div_6_Template, 7, 19, "div", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c15, ctx.dropdown, ctx.multiple))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.multiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.multiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dropdown);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.ButtonDirective, ɵngcc3.Ripple, ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkVirtualForOf], styles: [".p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{margin-top:-.5rem;position:absolute;top:50%}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-bottom-right-radius:0;border-top-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-bottom-left-radius:0;border-top-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%}.p-autocomplete-panel{overflow:auto;position:absolute}.p-autocomplete-items{list-style-type:none;margin:0;padding:0}.p-autocomplete-item{cursor:pointer;overflow:hidden;position:relative;white-space:nowrap}.p-autocomplete-multiple-container{align-items:center;cursor:text;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-autocomplete-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{display:inline-flex;flex:1 1 auto}.p-autocomplete-input-token input{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}"], encapsulation: 2, data: { animation: [
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
AutoComplete.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: IterableDiffers }
];
AutoComplete.propDecorators = {
    minLength: [{ type: Input }],
    delay: [{ type: Input }],
    style: [{ type: Input }],
    panelStyle: [{ type: Input }],
    styleClass: [{ type: Input }],
    panelStyleClass: [{ type: Input }],
    inputStyle: [{ type: Input }],
    inputId: [{ type: Input }],
    inputStyleClass: [{ type: Input }],
    placeholder: [{ type: Input }],
    readonly: [{ type: Input }],
    disabled: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    itemSize: [{ type: Input }],
    maxlength: [{ type: Input }],
    name: [{ type: Input }],
    required: [{ type: Input }],
    size: [{ type: Input }],
    appendTo: [{ type: Input }],
    autoHighlight: [{ type: Input }],
    forceSelection: [{ type: Input }],
    type: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    dropdownIcon: [{ type: Input }],
    unique: [{ type: Input }],
    group: [{ type: Input }],
    completeOnFocus: [{ type: Input }],
    completeMethod: [{ type: Output }],
    onSelect: [{ type: Output }],
    onUnselect: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onDropdownClick: [{ type: Output }],
    onClear: [{ type: Output }],
    onKeyUp: [{ type: Output }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    field: [{ type: Input }],
    scrollHeight: [{ type: Input }],
    dropdown: [{ type: Input }],
    dropdownMode: [{ type: Input }],
    multiple: [{ type: Input }],
    tabindex: [{ type: Input }],
    dataKey: [{ type: Input }],
    emptyMessage: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    autofocus: [{ type: Input }],
    autocomplete: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    containerEL: [{ type: ViewChild, args: ['container',] }],
    inputEL: [{ type: ViewChild, args: ['in',] }],
    multiInputEL: [{ type: ViewChild, args: ['multiIn',] }],
    multiContainerEL: [{ type: ViewChild, args: ['multiContainer',] }],
    dropdownButton: [{ type: ViewChild, args: ['ddBtn',] }],
    viewPort: [{ type: ViewChild, args: [CdkVirtualScrollViewport,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    suggestions: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutoComplete, [{
        type: Component,
        args: [{
                selector: 'p-autoComplete',
                template: `
        <span #container [ngClass]="{'p-autocomplete p-component':true,'p-autocomplete-dd':dropdown,'p-autocomplete-multiple':multiple}" [ngStyle]="style" [class]="styleClass">
            <input *ngIf="!multiple" #in [attr.type]="type" [attr.id]="inputId" [ngStyle]="inputStyle" [class]="inputStyleClass" [autocomplete]="autocomplete" [attr.required]="required" [attr.name]="name"
            class="p-autocomplete-input p-inputtext p-component" [ngClass]="{'p-autocomplete-dd-input':dropdown,'p-disabled': disabled}" [value]="inputFieldValue" aria-autocomplete="list" [attr.aria-controls]="listId" role="searchbox" [attr.aria-expanded]="overlayVisible" aria-haspopup="true" [attr.aria-activedescendant]="'p-highlighted-option'"
            (click)="onInputClick($event)" (input)="onInput($event)" (keydown)="onKeydown($event)" (keyup)="onKeyup($event)" [attr.autofocus]="autofocus" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (change)="onInputChange($event)" (paste)="onInputPaste($event)"
            [attr.placeholder]="placeholder" [attr.size]="size" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [readonly]="readonly" [disabled]="disabled" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-required]="required"
            ><ul *ngIf="multiple" #multiContainer class="p-autocomplete-multiple-container p-component p-inputtext" [ngClass]="{'p-disabled':disabled,'p-focus':focus}" (click)="multiIn.focus()">
                <li #token *ngFor="let val of value" class="p-autocomplete-token">
                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: val}"></ng-container>
                    <span *ngIf="!selectedItemTemplate" class="p-autocomplete-token-label">{{resolveFieldData(val)}}</span>
                    <span  class="p-autocomplete-token-icon pi pi-times-circle" (click)="removeItem(token)" *ngIf="!disabled && !readonly"></span>
                </li>
                <li class="p-autocomplete-input-token">
                    <input #multiIn [attr.type]="type" [attr.id]="inputId" [disabled]="disabled" [attr.placeholder]="(value&&value.length ? null : placeholder)" [attr.tabindex]="tabindex" [attr.maxlength]="maxlength" (input)="onInput($event)"  (click)="onInputClick($event)"
                            (keydown)="onKeydown($event)" [readonly]="readonly" (keyup)="onKeyup($event)" [attr.autofocus]="autofocus" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (change)="onInputChange($event)" (paste)="onInputPaste($event)" [autocomplete]="autocomplete"
                            [ngStyle]="inputStyle" [class]="inputStyleClass" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-required]="required"
                            aria-autocomplete="list" [attr.aria-controls]="listId" role="searchbox" [attr.aria-expanded]="overlayVisible" aria-haspopup="true" [attr.aria-activedescendant]="'p-highlighted-option'">
                </li>
            </ul>
            <i *ngIf="loading" class="p-autocomplete-loader pi pi-spinner pi-spin"></i><button #ddBtn type="button" pButton [icon]="dropdownIcon" class="p-autocomplete-dropdown" [disabled]="disabled" pRipple
                (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex"></button>
            <div #panel *ngIf="overlayVisible" [ngClass]="['p-autocomplete-panel p-component']" [style.max-height]="virtualScroll ? 'auto' : scrollHeight" [ngStyle]="panelStyle" [class]="panelStyleClass"
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)">
                <ul role="listbox" [attr.id]="listId" class="p-autocomplete-items" [ngClass]="{'p-autocomplete-virtualscroll': virtualScroll}">
                    <ng-container *ngIf="group">
                        <ng-template ngFor let-optgroup [ngForOf]="suggestions">
                            <li class="p-autocomplete-item-group">
                                <span *ngIf="!groupTemplate">{{getOptionGroupLabel(optgroup)||'empty'}}</span>
                                <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                            </li>
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: getOptionGroupChildren(optgroup)}"></ng-container>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="!group">
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: suggestions}"></ng-container>
                    </ng-container>
                    <ng-template #itemslist let-suggestionsToDisplay>
                        <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                            <li role="option" *ngFor="let option of suggestionsToDisplay; let idx = index" class="p-autocomplete-item" pRipple [ngClass]="{'p-highlight': (option === highlightOption)}" [id]="highlightOption == option ? 'p-highlighted-option':''" (click)="selectItem(option)">
                                <span *ngIf="!itemTemplate">{{resolveFieldData(option)}}</span>
                                <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: idx}"></ng-container>
                            </li>
                        </ng-container>
                        <ng-template #virtualScrollList>
                            <cdk-virtual-scroll-viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && !noResults">
                                <ng-container *cdkVirtualFor="let option of suggestionsToDisplay; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                    <li role="option" class="p-autocomplete-item" pRipple [ngClass]="{'p-highlight': (option === highlightOption)}" [ngStyle]="{'height': itemSize + 'px'}" [id]="highlightOption == option ? 'p-highlighted-option':''" (click)="selectItem(option)">
                                        <span *ngIf="!itemTemplate">{{resolveFieldData(option)}}</span>
                                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
                                    </li>
                                </ng-container>
                            </cdk-virtual-scroll-viewport>
                        </ng-template>
                        <li *ngIf="noResults && emptyMessage" class="p-autocomplete-emptymessage p-autocomplete-item">{{emptyMessage}}</li>
                    </ng-template>
                </ul>
            </div>
        </span>
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
                    '[class.p-inputwrapper-focus]': '(focus && !disabled) || overlayVisible'
                },
                providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{margin-top:-.5rem;position:absolute;top:50%}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-bottom-right-radius:0;border-top-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-bottom-left-radius:0;border-top-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%}.p-autocomplete-panel{overflow:auto;position:absolute}.p-autocomplete-items{list-style-type:none;margin:0;padding:0}.p-autocomplete-item{cursor:pointer;overflow:hidden;position:relative;white-space:nowrap}.p-autocomplete-multiple-container{align-items:center;cursor:text;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-autocomplete-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{display:inline-flex;flex:1 1 auto}.p-autocomplete-input-token input{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.IterableDiffers }]; }, { minLength: [{
            type: Input
        }], delay: [{
            type: Input
        }], type: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], dropdownIcon: [{
            type: Input
        }], unique: [{
            type: Input
        }], completeOnFocus: [{
            type: Input
        }], completeMethod: [{
            type: Output
        }], onSelect: [{
            type: Output
        }], onUnselect: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onDropdownClick: [{
            type: Output
        }], onClear: [{
            type: Output
        }], onKeyUp: [{
            type: Output
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], scrollHeight: [{
            type: Input
        }], dropdownMode: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], suggestions: [{
            type: Input
        }], disabled: [{
            type: Input
        }], style: [{
            type: Input
        }], panelStyle: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], panelStyleClass: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputStyleClass: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], readonly: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], name: [{
            type: Input
        }], required: [{
            type: Input
        }], size: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], autoHighlight: [{
            type: Input
        }], forceSelection: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], group: [{
            type: Input
        }], field: [{
            type: Input
        }], dropdown: [{
            type: Input
        }], multiple: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], emptyMessage: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], containerEL: [{
            type: ViewChild,
            args: ['container']
        }], inputEL: [{
            type: ViewChild,
            args: ['in']
        }], multiInputEL: [{
            type: ViewChild,
            args: ['multiIn']
        }], multiContainerEL: [{
            type: ViewChild,
            args: ['multiContainer']
        }], dropdownButton: [{
            type: ViewChild,
            args: ['ddBtn']
        }], viewPort: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
class AutoCompleteModule {
}
AutoCompleteModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AutoCompleteModule });
AutoCompleteModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AutoCompleteModule_Factory(t) { return new (t || AutoCompleteModule)(); }, imports: [[CommonModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollingModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AutoCompleteModule, { declarations: function () { return [AutoComplete]; }, imports: function () { return [CommonModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollingModule]; }, exports: function () { return [AutoComplete, SharedModule, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutoCompleteModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollingModule],
                exports: [AutoComplete, SharedModule, ScrollingModule],
                declarations: [AutoComplete]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AUTOCOMPLETE_VALUE_ACCESSOR, AutoComplete, AutoCompleteModule };

//# sourceMappingURL=primeng-autocomplete.js.map