import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { NgModule, Component, ElementRef, Input, Output, Renderer2, EventEmitter, ContentChildren, ViewChild, forwardRef, ChangeDetectorRef, NgZone, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate, FilterService } from 'primeng/api';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { ObjectUtils } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/ripple';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/api';
import * as ɵngcc4 from 'primeng/tooltip';
import * as ɵngcc5 from '@angular/cdk/scrolling';

function DropdownItem_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label || "empty");
} }
function DropdownItem_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "height": a0 }; };
const _c1 = function (a1, a2) { return { "p-dropdown-item": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c2 = function (a0) { return { $implicit: a0 }; };
const _c3 = ["container"];
const _c4 = ["filter"];
const _c5 = ["in"];
const _c6 = ["editableInput"];
function Dropdown_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.label || "empty");
} }
function Dropdown_span_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c7 = function (a1) { return { "p-dropdown-label p-inputtext": true, "p-dropdown-label-empty": a1 }; };
function Dropdown_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵtemplate(1, Dropdown_span_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(2, Dropdown_span_5_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c7, ctx_r2.label == null || ctx_r2.label.length === 0))("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(10, _c2, ctx_r2.selectedOption));
} }
const _c8 = function (a1) { return { "p-dropdown-label p-inputtext p-placeholder": true, "p-dropdown-label-empty": a1 }; };
function Dropdown_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c8, ctx_r3.placeholder == null || ctx_r3.placeholder.length === 0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.placeholder || "empty");
} }
function Dropdown_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 16, 17);
    ɵngcc0.ɵɵlistener("click", function Dropdown_input_7_Template_input_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onEditableInputClick(); })("input", function Dropdown_input_7_Template_input_input_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onEditableInputChange($event); })("focus", function Dropdown_input_7_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onEditableInputFocus($event); })("blur", function Dropdown_input_7_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onInputBlur($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r4.disabled);
    ɵngcc0.ɵɵattribute("maxlength", ctx_r4.maxlength)("placeholder", ctx_r4.placeholder)("aria-expanded", ctx_r4.overlayVisible);
} }
function Dropdown_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 18);
    ɵngcc0.ɵɵlistener("click", function Dropdown_i_8_Template_i_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.clear($event); });
    ɵngcc0.ɵɵelementEnd();
} }
function Dropdown_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵlistener("click", function Dropdown_div_11_div_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementStart(2, "input", 27, 28);
    ɵngcc0.ɵɵlistener("keydown.enter", function Dropdown_div_11_div_1_Template_input_keydown_enter_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); return $event.preventDefault(); })("keydown", function Dropdown_div_11_div_1_Template_input_keydown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.onKeydown($event, false); })("input", function Dropdown_div_11_div_1_Template_input_input_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onFilterInputChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("value", ctx_r17.filterValue || "");
    ɵngcc0.ɵɵattribute("placeholder", ctx_r17.filterPlaceholder)("aria-label", ctx_r17.ariaFilterLabel);
} }
function Dropdown_div_11_ng_container_4_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const optgroup_r30 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r31 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r31.getOptionGroupLabel(optgroup_r30) || "empty");
} }
function Dropdown_div_11_ng_container_4_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dropdown_div_11_ng_container_4_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1) { return { $implicit: a0, selectedOption: a1 }; };
function Dropdown_div_11_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_4_ng_template_1_span_1_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(2, Dropdown_div_11_ng_container_4_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, Dropdown_div_11_ng_container_4_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 14);
} if (rf & 2) {
    const optgroup_r30 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r20 = ɵngcc0.ɵɵreference(7);
    const ctx_r29 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r29.groupTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r29.groupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c2, optgroup_r30));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r20)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c9, ctx_r29.getOptionGroupChildren(optgroup_r30), ctx_r29.selectedOption));
} }
function Dropdown_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_4_ng_template_1_Template, 4, 10, "ng-template", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r18.optionsToDisplay);
} }
function Dropdown_div_11_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dropdown_div_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r20 = ɵngcc0.ɵɵreference(7);
    const ctx_r19 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r20)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c9, ctx_r19.optionsToDisplay, ctx_r19.selectedOption));
} }
function Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdownItem", 34);
    ɵngcc0.ɵɵlistener("onClick", function Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_dropdownItem_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(4); return ctx_r44.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r42 = ctx.$implicit;
    const selectedOption_r37 = ɵngcc0.ɵɵnextContext(2).selectedOption;
    const ctx_r41 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("option", option_r42)("selected", selectedOption_r37 == option_r42)("label", ctx_r41.getOptionLabel(option_r42))("disabled", ctx_r41.isOptionDisabled(option_r42))("template", ctx_r41.itemTemplate);
} }
function Dropdown_div_11_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template, 1, 5, "ng-template", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const options_r36 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", options_r36);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "p-dropdownItem", 34);
    ɵngcc0.ɵɵlistener("onClick", function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_dropdownItem_onClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r59); const ctx_r58 = ɵngcc0.ɵɵnextContext(5); return ctx_r58.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r51 = ctx.$implicit;
    const selectedOption_r37 = ɵngcc0.ɵɵnextContext(3).selectedOption;
    const ctx_r50 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("option", option_r51)("selected", selectedOption_r37 == option_r51)("label", ctx_r50.getOptionLabel(option_r51))("disabled", ctx_r50.isOptionDisabled(option_r51))("template", ctx_r50.itemTemplate);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    const _r62 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 36, 37);
    ɵngcc0.ɵɵlistener("scrolledIndexChange", function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r62); const ctx_r61 = ɵngcc0.ɵɵnextContext(4); return ctx_r61.scrollToSelectedVirtualScrollElement(); });
    ɵngcc0.ɵɵtemplate(2, Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 5, "ng-container", 38);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const options_r36 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r48 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r48.scrollHeight))("itemSize", ctx_r48.itemSize);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", options_r36);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 35);
} if (rf & 2) {
    const ctx_r40 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r40.virtualScroll && ctx_r40.optionsToDisplay && ctx_r40.optionsToDisplay.length);
} }
function Dropdown_div_11_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Dropdown_div_11_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 32);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 33, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r39 = ɵngcc0.ɵɵreference(2);
    const ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r21.virtualScroll)("ngIfElse", _r39);
} }
function Dropdown_div_11_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 39);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.emptyFilterMessage);
} }
const _c10 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c11 = function (a1) { return { value: "visible", params: a1 }; };
const _c12 = function (a0) { return { "p-dropdown-virtualscroll": a0 }; };
function Dropdown_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r65 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function Dropdown_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r65); const ctx_r64 = ɵngcc0.ɵɵnextContext(); return ctx_r64.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_div_1_Template, 5, 3, "div", 20);
    ɵngcc0.ɵɵelementStart(2, "div", 21);
    ɵngcc0.ɵɵelementStart(3, "ul", 22);
    ɵngcc0.ɵɵtemplate(4, Dropdown_div_11_ng_container_4_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(5, Dropdown_div_11_ng_container_5_Template, 2, 5, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(6, Dropdown_div_11_ng_template_6_Template, 3, 2, "ng-template", null, 23, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(8, Dropdown_div_11_li_8_Template, 2, 1, "li", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r6.panelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-dropdown-panel p-component")("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(15, _c11, ɵngcc0.ɵɵpureFunction2(12, _c10, ctx_r6.showTransitionOptions, ctx_r6.hideTransitionOptions)))("ngStyle", ctx_r6.panelStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.filter);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r6.virtualScroll ? "auto" : ctx_r6.scrollHeight || "auto");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c12, ctx_r6.virtualScroll));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.group);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.group);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.filter && (!ctx_r6.optionsToDisplay || ctx_r6.optionsToDisplay && ctx_r6.optionsToDisplay.length === 0));
} }
const _c13 = function (a1, a2, a3, a4) { return { "p-dropdown p-component": true, "p-disabled": a1, "p-dropdown-open": a2, "p-focus": a3, "p-dropdown-clearable": a4 }; };
export const DROPDOWN_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Dropdown),
    multi: true
};
export class DropdownItem {
    constructor() {
        this.onClick = new EventEmitter();
    }
    onOptionClick(event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    }
}
DropdownItem.ɵfac = function DropdownItem_Factory(t) { return new (t || DropdownItem)(); };
DropdownItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownItem, selectors: [["p-dropdownItem"]], inputs: { option: "option", selected: "selected", label: "label", disabled: "disabled", visible: "visible", itemSize: "itemSize", template: "template" }, outputs: { onClick: "onClick" }, decls: 3, vars: 14, consts: [["role", "option", "pRipple", "", 3, "ngStyle", "ngClass", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DropdownItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵlistener("click", function DropdownItem_Template_li_click_0_listener($event) { return ctx.onOptionClick($event); });
        ɵngcc0.ɵɵtemplate(1, DropdownItem_span_1_Template, 2, 1, "span", 1);
        ɵngcc0.ɵɵtemplate(2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(7, _c0, ctx.itemSize + "px"))("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c1, ctx.selected, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-label", ctx.label)("aria-selected", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(12, _c2, ctx.option));
    } }, directives: [ɵngcc1.Ripple, ɵngcc2.NgStyle, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], encapsulation: 2 });
DropdownItem.propDecorators = {
    option: [{ type: Input }],
    selected: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    visible: [{ type: Input }],
    itemSize: [{ type: Input }],
    template: [{ type: Input }],
    onClick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownItem, [{
        type: Component,
        args: [{
                selector: 'p-dropdownItem',
                template: `
        <li (click)="onOptionClick($event)" role="option" pRipple
            [attr.aria-label]="label" [attr.aria-selected]="selected"
            [ngStyle]="{'height': itemSize + 'px'}"
            [ngClass]="{'p-dropdown-item':true, 'p-highlight': selected, 'p-disabled': disabled}">
            <span *ngIf="!template">{{label||'empty'}}</span>
            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>
        </li>
    `
            }]
    }], function () { return []; }, { onClick: [{
            type: Output
        }], option: [{
            type: Input
        }], selected: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], visible: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
export class Dropdown {
    constructor(el, renderer, cd, zone, filterService) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.filterService = filterService;
        this.scrollHeight = '200px';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.optionGroupChildren = "items";
        this.autoDisplayFirst = true;
        this.emptyFilterMessage = 'No results found';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.autofocusFilter = true;
        this.onChange = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.viewPortOffsetTop = 0;
    }
    get disabled() {
        return this._disabled;
    }
    ;
    set disabled(_disabled) {
        if (_disabled) {
            this.focused = false;
            if (this.overlayVisible)
                this.hide();
        }
        this._disabled = _disabled;
        if (!this.cd.destroyed) {
            this.cd.detectChanges();
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    this.selectedItemTemplate = item.template;
                    break;
                case 'group':
                    this.groupTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngOnInit() {
        this.optionsToDisplay = this.options;
        this.updateSelectedOption(null);
    }
    get options() {
        return this._options;
    }
    set options(val) {
        this._options = val;
        this.optionsToDisplay = this._options;
        this.updateSelectedOption(this.value);
        this.optionsChanged = true;
        this.updateFilledState();
        if (this._filterValue && this._filterValue.length) {
            this.activateFilter();
        }
    }
    get filterValue() {
        return this._filterValue;
    }
    set filterValue(val) {
        this._filterValue = val;
        this.activateFilter();
    }
    ngAfterViewInit() {
        if (this.editable) {
            this.updateEditableLabel();
        }
    }
    get label() {
        return this.selectedOption ? this.getOptionLabel(this.selectedOption) : null;
    }
    updateEditableLabel() {
        if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.getOptionLabel(this.selectedOption) : this.value || '');
        }
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : (option.label != undefined ? option.label : option);
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : (this.optionLabel || option.value === undefined ? option : option.value);
    }
    isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : (option.disabled !== undefined ? option.disabled : false);
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : (optionGroup.label != undefined ? optionGroup.label : optionGroup);
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    onItemClick(event) {
        const option = event.option;
        if (!this.isOptionDisabled(option)) {
            this.selectItem(event, option);
            this.accessibleViewChild.nativeElement.focus();
        }
        setTimeout(() => {
            this.hide();
        }, 150);
    }
    selectItem(event, option) {
        if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = this.getOptionValue(option);
            this.filled = true;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
                originalEvent: event.originalEvent,
                value: this.value
            });
            if (this.virtualScroll) {
                setTimeout(() => {
                    this.viewPortOffsetTop = this.viewPort ? this.viewPort.measureScrollOffset() : 0;
                }, 1);
            }
        }
    }
    ngAfterViewChecked() {
        if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;
            if (this.virtualScroll) {
                this.updateVirtualScrollSelectedIndex(true);
            }
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.alignOverlay();
                }, 1);
            });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            if (this.virtualScroll && this.viewPort) {
                let range = this.viewPort.getRenderedRange();
                this.updateVirtualScrollSelectedIndex(false);
                if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                    this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                }
            }
            let selectedItem = DomHandler.findSingle(this.overlay, 'li.p-highlight');
            if (selectedItem) {
                DomHandler.scrollInView(this.itemsWrapper, DomHandler.findSingle(this.overlay, 'li.p-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    }
    writeValue(value) {
        if (this.filter) {
            this.resetFilter();
        }
        this.value = value;
        this.updateSelectedOption(value);
        this.updateEditableLabel();
        this.updateFilledState();
        this.cd.markForCheck();
    }
    resetFilter() {
        this._filterValue = null;
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
        }
        this.optionsToDisplay = this.options;
    }
    updateSelectedOption(val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
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
    onMouseclick(event) {
        if (this.disabled || this.readonly || this.isInputClick(event)) {
            return;
        }
        this.onClick.emit(event);
        this.accessibleViewChild.nativeElement.focus();
        if (this.overlayVisible)
            this.hide();
        else
            this.show();
        this.cd.detectChanges();
    }
    isInputClick(event) {
        return DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') ||
            event.target.isSameNode(this.accessibleViewChild.nativeElement) ||
            (this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement));
    }
    isOutsideClicked(event) {
        return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
    }
    onEditableInputClick() {
        this.bindDocumentClickListener();
    }
    onEditableInputFocus(event) {
        this.focused = true;
        this.hide();
        this.onFocus.emit(event);
    }
    onEditableInputChange(event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    show() {
        this.overlayVisible = true;
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                let itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.p-dropdown-items-wrapper';
                this.itemsWrapper = DomHandler.findSingle(this.overlay, itemsWrapperSelector);
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.bindScrollListener();
                if (this.options && this.options.length) {
                    if (!this.virtualScroll) {
                        let selectedListItem = DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
                        if (selectedListItem) {
                            DomHandler.scrollInView(this.itemsWrapper, selectedListItem);
                        }
                    }
                }
                if (this.filterViewChild && this.filterViewChild.nativeElement) {
                    this.preventModelTouched = true;
                    if (this.autofocusFilter) {
                        this.filterViewChild.nativeElement.focus();
                    }
                }
                this.onShow.emit(event);
                break;
            case 'void':
                this.onOverlayHide();
                this.onHide.emit(event);
                break;
        }
    }
    scrollToSelectedVirtualScrollElement() {
        if (!this.virtualAutoScrolled) {
            if (this.viewPortOffsetTop) {
                this.viewPort.scrollToOffset(this.viewPortOffsetTop);
            }
            else if (this.virtualScrollSelectedIndex > -1) {
                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
        }
        this.virtualAutoScrolled = true;
    }
    updateVirtualScrollSelectedIndex(resetOffset) {
        if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
            if (resetOffset) {
                this.viewPortOffsetTop = 0;
            }
            this.virtualScrollSelectedIndex = this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay);
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
    hide() {
        this.overlayVisible = false;
        if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
        }
        if (this.virtualScroll) {
            this.virtualAutoScrolled = false;
        }
        this.cd.markForCheck();
    }
    alignOverlay() {
        if (this.overlay) {
            if (this.appendTo)
                DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.onBlur.emit(event);
        if (!this.preventModelTouched) {
            this.onModelTouched();
        }
        this.preventModelTouched = false;
    }
    findPrevEnabledOption(index) {
        let prevEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (let i = (index - 1); 0 <= i; i--) {
                let option = this.optionsToDisplay[i];
                if (option.disabled) {
                    continue;
                }
                else {
                    prevEnabledOption = option;
                    break;
                }
            }
            if (!prevEnabledOption) {
                for (let i = this.optionsToDisplay.length - 1; i >= index; i--) {
                    let option = this.optionsToDisplay[i];
                    if (this.isOptionDisabled(option)) {
                        continue;
                    }
                    else {
                        prevEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return prevEnabledOption;
    }
    findNextEnabledOption(index) {
        let nextEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (let i = (index + 1); index < (this.optionsToDisplay.length - 1); i++) {
                let option = this.optionsToDisplay[i];
                if (this.isOptionDisabled(option)) {
                    continue;
                }
                else {
                    nextEnabledOption = option;
                    break;
                }
            }
            if (!nextEnabledOption) {
                for (let i = 0; i < index; i++) {
                    let option = this.optionsToDisplay[i];
                    if (this.isOptionDisabled(option)) {
                        continue;
                    }
                    else {
                        nextEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return nextEnabledOption;
    }
    onKeydown(event, search) {
        if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
            return;
        }
        switch (event.which) {
            //down
            case 40:
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                }
                else {
                    if (this.group) {
                        let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
                        if (selectedItemIndex !== -1) {
                            let nextItemIndex = selectedItemIndex.itemIndex + 1;
                            if (nextItemIndex < (this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex]).length)) {
                                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[nextItemIndex]);
                                this.selectedOptionUpdated = true;
                            }
                            else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex + 1])[0]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                        else {
                            this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[0])[0]);
                        }
                    }
                    else {
                        let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
                        let nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
                        if (nextEnabledOption) {
                            this.selectItem(event, nextEnabledOption);
                            this.selectedOptionUpdated = true;
                        }
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (this.group) {
                    let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
                    if (selectedItemIndex !== -1) {
                        let prevItemIndex = selectedItemIndex.itemIndex - 1;
                        if (prevItemIndex >= 0) {
                            this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[prevItemIndex]);
                            this.selectedOptionUpdated = true;
                        }
                        else if (prevItemIndex < 0) {
                            let prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
                            if (prevGroup) {
                                this.selectItem(event, this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                    }
                }
                else {
                    let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
                    let prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
                    if (prevEnabledOption) {
                        this.selectItem(event, prevEnabledOption);
                        this.selectedOptionUpdated = true;
                    }
                }
                event.preventDefault();
                break;
            //space
            case 32:
            case 32:
                if (!this.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //enter
            case 13:
                if (!this.filter || (this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
                    this.hide();
                }
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide();
                break;
            //search item based on keyboard input
            default:
                if (search && !event.metaKey) {
                    this.search(event);
                }
                break;
        }
    }
    search(event) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        const char = event.key;
        this.previousSearchChar = this.currentSearchChar;
        this.currentSearchChar = char;
        if (this.previousSearchChar === this.currentSearchChar)
            this.searchValue = this.currentSearchChar;
        else
            this.searchValue = this.searchValue ? this.searchValue + char : char;
        let newOption;
        if (this.group) {
            let searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : { groupIndex: 0, itemIndex: 0 };
            newOption = this.searchOptionWithinGroup(searchIndex);
        }
        else {
            let searchIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
            newOption = this.searchOption(++searchIndex);
        }
        if (newOption && !this.isOptionDisabled(newOption)) {
            this.selectItem(event, newOption);
            this.selectedOptionUpdated = true;
        }
        this.searchTimeout = setTimeout(() => {
            this.searchValue = null;
        }, 250);
    }
    searchOption(index) {
        let option;
        if (this.searchValue) {
            option = this.searchOptionInRange(index, this.optionsToDisplay.length);
            if (!option) {
                option = this.searchOptionInRange(0, index);
            }
        }
        return option;
    }
    searchOptionInRange(start, end) {
        for (let i = start; i < end; i++) {
            let opt = this.optionsToDisplay[i];
            if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
                return opt;
            }
        }
        return null;
    }
    searchOptionWithinGroup(index) {
        let option;
        if (this.searchValue) {
            for (let i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
                for (let j = (index.groupIndex === i) ? (index.itemIndex + 1) : 0; j < this.getOptionGroupChildren(this.optionsToDisplay[i]).length; j++) {
                    let opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];
                    if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
                        return opt;
                    }
                }
            }
            if (!option) {
                for (let i = 0; i <= index.groupIndex; i++) {
                    for (let j = 0; j < ((index.groupIndex === i) ? index.itemIndex : this.getOptionGroupChildren(this.optionsToDisplay[i]).length); j++) {
                        let opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];
                        if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
                            return opt;
                        }
                    }
                }
            }
        }
        return null;
    }
    findOptionIndex(val, opts) {
        let index = -1;
        if (opts) {
            for (let i = 0; i < opts.length; i++) {
                if ((val == null && this.getOptionValue(opts[i]) == null) || ObjectUtils.equals(val, this.getOptionValue(opts[i]), this.dataKey)) {
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
    findOption(val, opts, inGroup) {
        if (this.group && !inGroup) {
            let opt;
            if (opts && opts.length) {
                for (let optgroup of opts) {
                    opt = this.findOption(val, this.getOptionGroupChildren(optgroup), true);
                    if (opt) {
                        break;
                    }
                }
            }
            return opt;
        }
        else {
            let index = this.findOptionIndex(val, opts);
            return (index != -1) ? opts[index] : null;
        }
    }
    onFilterInputChange(event) {
        let inputValue = event.target.value;
        if (inputValue && inputValue.length) {
            this._filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this._filterValue = null;
            this.optionsToDisplay = this.options;
        }
        this.optionsChanged = true;
        this.onFilter.emit({ originalEvent: event, filter: this._filterValue });
    }
    activateFilter() {
        let searchFields = (this.filterBy || this.optionLabel || 'label').split(',');
        if (this.options && this.options.length) {
            if (this.group) {
                let filteredGroups = [];
                for (let optgroup of this.options) {
                    let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                    if (filteredSubOptions && filteredSubOptions.length) {
                        filteredGroups.push(Object.assign(Object.assign({}, optgroup), { [this.optionGroupChildren]: filteredSubOptions }));
                    }
                }
                this.optionsToDisplay = filteredGroups;
            }
            else {
                this.optionsToDisplay = this.filterService.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
            }
            this.optionsChanged = true;
        }
    }
    applyFocus() {
        if (this.editable)
            DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();
        else
            DomHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    }
    focus() {
        this.applyFocus();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (this.isOutsideClicked(event)) {
                    this.hide();
                    this.unbindDocumentClickListener();
                }
                this.cd.markForCheck();
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
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, (event) => {
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
    updateFilledState() {
        this.filled = (this.selectedOption != null);
    }
    clear(event) {
        this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
        this.updateSelectedOption(this.value);
        this.updateEditableLabel();
        this.updateFilledState();
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
        this.overlay = null;
        this.itemsWrapper = null;
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
Dropdown.ɵfac = function Dropdown_Factory(t) { return new (t || Dropdown)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FilterService)); };
Dropdown.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Dropdown, selectors: [["p-dropdown"]], contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Dropdown_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(CdkVirtualScrollViewport, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accessibleViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewPort = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.editableInputViewChild = _t.first);
    } }, hostVars: 4, hostBindings: function Dropdown_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
    } }, inputs: { scrollHeight: "scrollHeight", resetFilterOnHide: "resetFilterOnHide", dropdownIcon: "dropdownIcon", optionGroupChildren: "optionGroupChildren", autoDisplayFirst: "autoDisplayFirst", emptyFilterMessage: "emptyFilterMessage", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", filterMatchMode: "filterMatchMode", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", autofocusFilter: "autofocusFilter", disabled: "disabled", options: "options", filterValue: "filterValue", filter: "filter", name: "name", style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", readonly: "readonly", required: "required", editable: "editable", appendTo: "appendTo", tabindex: "tabindex", placeholder: "placeholder", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", inputId: "inputId", selectId: "selectId", dataKey: "dataKey", filterBy: "filterBy", autofocus: "autofocus", optionLabel: "optionLabel", optionValue: "optionValue", optionDisabled: "optionDisabled", optionGroupLabel: "optionGroupLabel", group: "group", showClear: "showClear", virtualScroll: "virtualScroll", itemSize: "itemSize", ariaFilterLabel: "ariaFilterLabel", ariaLabelledBy: "ariaLabelledBy", maxlength: "maxlength", tooltipStyleClass: "tooltipStyleClass" }, outputs: { onChange: "onChange", onFilter: "onFilter", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onShow: "onShow", onHide: "onHide" }, features: [ɵngcc0.ɵɵProvidersFeature([DROPDOWN_VALUE_ACCESSOR])], decls: 12, vars: 22, consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", "aria-haspopup", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "text", "class", "p-dropdown-label p-inputtext", "aria-haspopup", "listbox", 3, "disabled", "click", "input", "focus", "blur", 4, "ngIf"], ["class", "p-dropdown-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["role", "button", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["type", "text", "aria-haspopup", "listbox", 1, "p-dropdown-label", "p-inputtext", 3, "disabled", "click", "input", "focus", "blur"], ["editableInput", ""], [1, "p-dropdown-clear-icon", "pi", "pi-times", 3, "click"], [3, "ngClass", "ngStyle"], ["class", "p-dropdown-header", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["itemslist", ""], ["class", "p-dropdown-empty-message", 4, "ngIf"], [1, "p-dropdown-header"], [1, "p-dropdown-filter-container", 3, "click"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "value", "keydown.enter", "keydown", "input"], ["filter", ""], [1, "p-dropdown-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "p-dropdown-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], [3, "option", "selected", "label", "disabled", "template", "onClick"], [3, "ngStyle", "itemSize", "scrolledIndexChange", 4, "ngIf"], [3, "ngStyle", "itemSize", "scrolledIndexChange"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "p-dropdown-empty-message"]], template: function Dropdown_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function Dropdown_Template_div_click_0_listener($event) { return ctx.onMouseclick($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("focus", function Dropdown_Template_input_focus_3_listener($event) { return ctx.onInputFocus($event); })("blur", function Dropdown_Template_input_blur_3_listener($event) { return ctx.onInputBlur($event); })("keydown", function Dropdown_Template_input_keydown_3_listener($event) { return ctx.onKeydown($event, true); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, Dropdown_span_5_Template, 3, 12, "span", 5);
        ɵngcc0.ɵɵtemplate(6, Dropdown_span_6_Template, 2, 4, "span", 6);
        ɵngcc0.ɵɵtemplate(7, Dropdown_input_7_Template, 2, 4, "input", 7);
        ɵngcc0.ɵɵtemplate(8, Dropdown_i_8_Template, 1, 0, "i", 8);
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelement(10, "span", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, Dropdown_div_11_Template, 9, 19, "div", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(17, _c13, ctx.disabled, ctx.overlayVisible, ctx.focused, ctx.showClear && !ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy)("tabindex", ctx.tabindex)("autofocus", ctx.autofocus);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editable && ctx.label != null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editable && ctx.label == null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.editable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.value != null && ctx.showClear && !ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.overlayVisible);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dropdownIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc4.Tooltip, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, DropdownItem, ɵngcc5.CdkVirtualScrollViewport, ɵngcc5.CdkFixedSizeVirtualScroll, ɵngcc5.CdkVirtualForOf], styles: [".p-dropdown{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"], encapsulation: 2, data: { animation: [
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
Dropdown.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: FilterService }
];
Dropdown.propDecorators = {
    scrollHeight: [{ type: Input }],
    filter: [{ type: Input }],
    name: [{ type: Input }],
    style: [{ type: Input }],
    panelStyle: [{ type: Input }],
    styleClass: [{ type: Input }],
    panelStyleClass: [{ type: Input }],
    readonly: [{ type: Input }],
    required: [{ type: Input }],
    editable: [{ type: Input }],
    appendTo: [{ type: Input }],
    tabindex: [{ type: Input }],
    placeholder: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    filterLocale: [{ type: Input }],
    inputId: [{ type: Input }],
    selectId: [{ type: Input }],
    dataKey: [{ type: Input }],
    filterBy: [{ type: Input }],
    autofocus: [{ type: Input }],
    resetFilterOnHide: [{ type: Input }],
    dropdownIcon: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionDisabled: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    autoDisplayFirst: [{ type: Input }],
    group: [{ type: Input }],
    showClear: [{ type: Input }],
    emptyFilterMessage: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    itemSize: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    ariaFilterLabel: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    filterMatchMode: [{ type: Input }],
    maxlength: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    tooltipPositionStyle: [{ type: Input }],
    tooltipStyleClass: [{ type: Input }],
    autofocusFilter: [{ type: Input }],
    onChange: [{ type: Output }],
    onFilter: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onClick: [{ type: Output }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    filterViewChild: [{ type: ViewChild, args: ['filter',] }],
    accessibleViewChild: [{ type: ViewChild, args: ['in',] }],
    viewPort: [{ type: ViewChild, args: [CdkVirtualScrollViewport,] }],
    editableInputViewChild: [{ type: ViewChild, args: ['editableInput',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    disabled: [{ type: Input }],
    options: [{ type: Input }],
    filterValue: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Dropdown, [{
        type: Component,
        args: [{
                selector: 'p-dropdown',
                template: `
         <div #container [ngClass]="{'p-dropdown p-component':true,
            'p-disabled':disabled, 'p-dropdown-open':overlayVisible, 'p-focus':focused, 'p-dropdown-clearable': showClear && !disabled}"
            (click)="onMouseclick($event)" [ngStyle]="style" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #in [attr.id]="inputId" type="text" readonly (focus)="onInputFocus($event)" aria-haspopup="listbox"
                    aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" [attr.aria-labelledby]="ariaLabelledBy" (blur)="onInputBlur($event)" (keydown)="onKeydown($event, true)"
                    [disabled]="disabled" [attr.tabindex]="tabindex" [attr.autofocus]="autofocus">
            </div>
            <span [ngClass]="{'p-dropdown-label p-inputtext':true,'p-dropdown-label-empty':(label == null || label.length === 0)}" *ngIf="!editable && (label != null)" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <ng-container *ngIf="!selectedItemTemplate">{{label||'empty'}}</ng-container>
                <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: selectedOption}"></ng-container>
            </span>
            <span [ngClass]="{'p-dropdown-label p-inputtext p-placeholder':true,'p-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}" *ngIf="!editable && (label == null)">{{placeholder||'empty'}}</span>
            <input #editableInput type="text" [attr.maxlength]="maxlength" class="p-dropdown-label p-inputtext" *ngIf="editable" [disabled]="disabled" [attr.placeholder]="placeholder"
                aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" (click)="onEditableInputClick()" (input)="onEditableInputChange($event)" (focus)="onEditableInputFocus($event)" (blur)="onInputBlur($event)">
            <i class="p-dropdown-clear-icon pi pi-times" (click)="clear($event)" *ngIf="value != null && showClear && !disabled"></i>
            <div class="p-dropdown-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible">
                <span class="p-dropdown-trigger-icon" [ngClass]="dropdownIcon"></span>
            </div>
            <div *ngIf="overlayVisible" [ngClass]="'p-dropdown-panel p-component'" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" [ngStyle]="panelStyle" [class]="panelStyleClass">
                <div class="p-dropdown-header" *ngIf="filter" >
                    <div class="p-dropdown-filter-container" (click)="$event.stopPropagation()">
                        <input #filter type="text" autocomplete="off" [value]="filterValue||''" class="p-dropdown-filter p-inputtext p-component" [attr.placeholder]="filterPlaceholder"
                        (keydown.enter)="$event.preventDefault()" (keydown)="onKeydown($event, false)" (input)="onFilterInputChange($event)" [attr.aria-label]="ariaFilterLabel">
                        <span class="p-dropdown-filter-icon pi pi-search"></span>
                    </div>
                </div>
                <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : (scrollHeight||'auto')">
                    <ul class="p-dropdown-items" [ngClass]="{'p-dropdown-virtualscroll': virtualScroll}" role="listbox">
                        <ng-container *ngIf="group">
                            <ng-template ngFor let-optgroup [ngForOf]="optionsToDisplay">
                                <li class="p-dropdown-item-group">
                                    <span *ngIf="!groupTemplate">{{getOptionGroupLabel(optgroup)||'empty'}}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                                </li>
                                <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: getOptionGroupChildren(optgroup), selectedOption: selectedOption}"></ng-container>
                            </ng-template>
                        </ng-container>
                        <ng-container *ngIf="!group">
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}"></ng-container>
                        </ng-container>
                        <ng-template #itemslist let-options let-selectedOption="selectedOption">
                            <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                                <ng-template ngFor let-option let-i="index" [ngForOf]="options">
                                    <p-dropdownItem [option]="option" [selected]="selectedOption == option" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)"
                                                    (onClick)="onItemClick($event)"
                                                    [template]="itemTemplate"></p-dropdownItem>
                                </ng-template>
                            </ng-container>
                            <ng-template #virtualScrollList>
                                <cdk-virtual-scroll-viewport (scrolledIndexChange)="scrollToSelectedVirtualScrollElement()" #viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && optionsToDisplay && optionsToDisplay.length">
                                    <ng-container *cdkVirtualFor="let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                        <p-dropdownItem [option]="option" [selected]="selectedOption == option" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)"
                                                                   (onClick)="onItemClick($event)"
                                                                   [template]="itemTemplate"></p-dropdownItem>
                                    </ng-container>
                                </cdk-virtual-scroll-viewport>
                            </ng-template>
                        </ng-template>
                        <li *ngIf="filter && (!optionsToDisplay || (optionsToDisplay && optionsToDisplay.length === 0))" class="p-dropdown-empty-message">{{emptyFilterMessage}}</li>
                    </ul>
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
                    '[class.p-inputwrapper-focus]': 'focused || overlayVisible'
                },
                providers: [DROPDOWN_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-dropdown{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc3.FilterService }]; }, { scrollHeight: [{
            type: Input
        }], resetFilterOnHide: [{
            type: Input
        }], dropdownIcon: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], autoDisplayFirst: [{
            type: Input
        }], emptyFilterMessage: [{
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
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], disabled: [{
            type: Input
        }], options: [{
            type: Input
        }], filterValue: [{
            type: Input
        }], filter: [{
            type: Input
        }], name: [{
            type: Input
        }], style: [{
            type: Input
        }], panelStyle: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], panelStyleClass: [{
            type: Input
        }], readonly: [{
            type: Input
        }], required: [{
            type: Input
        }], editable: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], filterPlaceholder: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], inputId: [{
            type: Input
        }], selectId: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionDisabled: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], group: [{
            type: Input
        }], showClear: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], ariaFilterLabel: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], tooltipStyleClass: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], filterViewChild: [{
            type: ViewChild,
            args: ['filter']
        }], accessibleViewChild: [{
            type: ViewChild,
            args: ['in']
        }], viewPort: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }], editableInputViewChild: [{
            type: ViewChild,
            args: ['editableInput']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class DropdownModule {
}
DropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DropdownModule });
DropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DropdownModule_Factory(t) { return new (t || DropdownModule)(); }, imports: [[CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule], SharedModule, ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DropdownModule, { declarations: function () { return [Dropdown, DropdownItem]; }, imports: function () { return [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule]; }, exports: function () { return [Dropdown, SharedModule, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, ScrollingModule, TooltipModule, RippleModule],
                exports: [Dropdown, SharedModule, ScrollingModule],
                declarations: [Dropdown, DropdownItem]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLHdCQUF3QixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFrRSxLQUFLLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUN4SSxTQUFTLEVBQWEsVUFBVSxFQUFDLGlCQUFpQixFQUFDLE1BQU0sRUFBUyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNySixPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFnQixNQUFNLHFCQUFxQixDQUFDO0FBQ3BGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEUsT0FBTyxFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQXF4QmhCLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxZQUFZLENBQUMsa0JBQy9FLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsZUFBZSxDQUFDLGtCQUNoRCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUMsWUFBWSxDQUFDLGNBQ3hDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2Nyb2xsaW5nTW9kdWxlLCBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixPbkluaXQsQWZ0ZXJWaWV3SW5pdCxBZnRlckNvbnRlbnRJbml0LEFmdGVyVmlld0NoZWNrZWQsT25EZXN0cm95LElucHV0LE91dHB1dCxSZW5kZXJlcjIsRXZlbnRFbWl0dGVyLENvbnRlbnRDaGlsZHJlbixcbiAgICAgICAgUXVlcnlMaXN0LFZpZXdDaGlsZCxUZW1wbGF0ZVJlZixmb3J3YXJkUmVmLENoYW5nZURldGVjdG9yUmVmLE5nWm9uZSxWaWV3UmVmLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RyaWdnZXIsc3R5bGUsdHJhbnNpdGlvbixhbmltYXRlLEFuaW1hdGlvbkV2ZW50fSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1NoYXJlZE1vZHVsZSxQcmltZVRlbXBsYXRlLCBGaWx0ZXJTZXJ2aWNlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0RvbUhhbmRsZXIsIENvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQge09iamVjdFV0aWxzfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1Rvb2x0aXBNb2R1bGV9IGZyb20gJ3ByaW1lbmcvdG9vbHRpcCc7XG5pbXBvcnQge1JpcHBsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xuXG5leHBvcnQgY29uc3QgRFJPUERPV05fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1kcm9wZG93bkl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxsaSAoY2xpY2spPVwib25PcHRpb25DbGljaygkZXZlbnQpXCIgcm9sZT1cIm9wdGlvblwiIHBSaXBwbGVcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIiBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaXRlbVNpemUgKyAncHgnfVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtZHJvcGRvd24taXRlbSc6dHJ1ZSwgJ3AtaGlnaGxpZ2h0Jzogc2VsZWN0ZWQsICdwLWRpc2FibGVkJzogZGlzYWJsZWR9XCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiPnt7bGFiZWx8fCdlbXB0eSd9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogb3B0aW9ufVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2xpPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25JdGVtIHtcblxuICAgIEBJbnB1dCgpIG9wdGlvbjogU2VsZWN0SXRlbTtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGl0ZW1TaXplOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIG9uT3B0aW9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3B0aW9uOiB0aGlzLm9wdGlvblxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1kcm9wZG93bicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgIDxkaXYgI2NvbnRhaW5lciBbbmdDbGFzc109XCJ7J3AtZHJvcGRvd24gcC1jb21wb25lbnQnOnRydWUsXG4gICAgICAgICAgICAncC1kaXNhYmxlZCc6ZGlzYWJsZWQsICdwLWRyb3Bkb3duLW9wZW4nOm92ZXJsYXlWaXNpYmxlLCAncC1mb2N1cyc6Zm9jdXNlZCwgJ3AtZHJvcGRvd24tY2xlYXJhYmxlJzogc2hvd0NsZWFyICYmICFkaXNhYmxlZH1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uTW91c2VjbGljaygkZXZlbnQpXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2luIFthdHRyLmlkXT1cImlucHV0SWRcIiB0eXBlPVwidGV4dFwiIHJlYWRvbmx5IChmb2N1cyk9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQsIHRydWUpXCJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIiBbYXR0ci5hdXRvZm9jdXNdPVwiYXV0b2ZvY3VzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsncC1kcm9wZG93bi1sYWJlbCBwLWlucHV0dGV4dCc6dHJ1ZSwncC1kcm9wZG93bi1sYWJlbC1lbXB0eSc6KGxhYmVsID09IG51bGwgfHwgbGFiZWwubGVuZ3RoID09PSAwKX1cIiAqbmdJZj1cIiFlZGl0YWJsZSAmJiAobGFiZWwgIT0gbnVsbClcIiBbcFRvb2x0aXBdPVwidG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCIgW3Bvc2l0aW9uU3R5bGVdPVwidG9vbHRpcFBvc2l0aW9uU3R5bGVcIiBbdG9vbHRpcFN0eWxlQ2xhc3NdPVwidG9vbHRpcFN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNlbGVjdGVkSXRlbVRlbXBsYXRlXCI+e3tsYWJlbHx8J2VtcHR5J319PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNlbGVjdGVkSXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBzZWxlY3RlZE9wdGlvbn1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsncC1kcm9wZG93bi1sYWJlbCBwLWlucHV0dGV4dCBwLXBsYWNlaG9sZGVyJzp0cnVlLCdwLWRyb3Bkb3duLWxhYmVsLWVtcHR5JzogKHBsYWNlaG9sZGVyID09IG51bGwgfHwgcGxhY2Vob2xkZXIubGVuZ3RoID09PSAwKX1cIiAqbmdJZj1cIiFlZGl0YWJsZSAmJiAobGFiZWwgPT0gbnVsbClcIj57e3BsYWNlaG9sZGVyfHwnZW1wdHknfX08L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgI2VkaXRhYmxlSW5wdXQgdHlwZT1cInRleHRcIiBbYXR0ci5tYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCIgY2xhc3M9XCJwLWRyb3Bkb3duLWxhYmVsIHAtaW5wdXR0ZXh0XCIgKm5nSWY9XCJlZGl0YWJsZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwib3ZlcmxheVZpc2libGVcIiAoY2xpY2spPVwib25FZGl0YWJsZUlucHV0Q2xpY2soKVwiIChpbnB1dCk9XCJvbkVkaXRhYmxlSW5wdXRDaGFuZ2UoJGV2ZW50KVwiIChmb2N1cyk9XCJvbkVkaXRhYmxlSW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJwLWRyb3Bkb3duLWNsZWFyLWljb24gcGkgcGktdGltZXNcIiAoY2xpY2spPVwiY2xlYXIoJGV2ZW50KVwiICpuZ0lmPVwidmFsdWUgIT0gbnVsbCAmJiBzaG93Q2xlYXIgJiYgIWRpc2FibGVkXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZHJvcGRvd24tdHJpZ2dlclwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwib3ZlcmxheVZpc2libGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZHJvcGRvd24tdHJpZ2dlci1pY29uXCIgW25nQ2xhc3NdPVwiZHJvcGRvd25JY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3ZlcmxheVZpc2libGVcIiBbbmdDbGFzc109XCIncC1kcm9wZG93bi1wYW5lbCBwLWNvbXBvbmVudCdcIiBbQG92ZXJsYXlBbmltYXRpb25dPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3Nob3dUcmFuc2l0aW9uUGFyYW1zOiBzaG93VHJhbnNpdGlvbk9wdGlvbnMsIGhpZGVUcmFuc2l0aW9uUGFyYW1zOiBoaWRlVHJhbnNpdGlvbk9wdGlvbnN9fVwiIChAb3ZlcmxheUFuaW1hdGlvbi5zdGFydCk9XCJvbk92ZXJsYXlBbmltYXRpb25TdGFydCgkZXZlbnQpXCIgW25nU3R5bGVdPVwicGFuZWxTdHlsZVwiIFtjbGFzc109XCJwYW5lbFN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kcm9wZG93bi1oZWFkZXJcIiAqbmdJZj1cImZpbHRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZHJvcGRvd24tZmlsdGVyLWNvbnRhaW5lclwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjZmlsdGVyIHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgW3ZhbHVlXT1cImZpbHRlclZhbHVlfHwnJ1wiIGNsYXNzPVwicC1kcm9wZG93bi1maWx0ZXIgcC1pbnB1dHRleHQgcC1jb21wb25lbnRcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJmaWx0ZXJQbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQsIGZhbHNlKVwiIChpbnB1dCk9XCJvbkZpbHRlcklucHV0Q2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFGaWx0ZXJMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWRyb3Bkb3duLWZpbHRlci1pY29uIHBpIHBpLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZHJvcGRvd24taXRlbXMtd3JhcHBlclwiIFtzdHlsZS5tYXgtaGVpZ2h0XT1cInZpcnR1YWxTY3JvbGwgPyAnYXV0bycgOiAoc2Nyb2xsSGVpZ2h0fHwnYXV0bycpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInAtZHJvcGRvd24taXRlbXNcIiBbbmdDbGFzc109XCJ7J3AtZHJvcGRvd24tdmlydHVhbHNjcm9sbCc6IHZpcnR1YWxTY3JvbGx9XCIgcm9sZT1cImxpc3Rib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtb3B0Z3JvdXAgW25nRm9yT2ZdPVwib3B0aW9uc1RvRGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLWRyb3Bkb3duLWl0ZW0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWdyb3VwVGVtcGxhdGVcIj57e2dldE9wdGlvbkdyb3VwTGFiZWwob3B0Z3JvdXApfHwnZW1wdHknfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ3JvdXBUZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogb3B0Z3JvdXB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtc2xpc3Q7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0Z3JvdXApLCBzZWxlY3RlZE9wdGlvbjogc2VsZWN0ZWRPcHRpb259XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtc2xpc3Q7IGNvbnRleHQ6IHskaW1wbGljaXQ6IG9wdGlvbnNUb0Rpc3BsYXksIHNlbGVjdGVkT3B0aW9uOiBzZWxlY3RlZE9wdGlvbn1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpdGVtc2xpc3QgbGV0LW9wdGlvbnMgbGV0LXNlbGVjdGVkT3B0aW9uPVwic2VsZWN0ZWRPcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXZpcnR1YWxTY3JvbGw7IGVsc2UgdmlydHVhbFNjcm9sbExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1vcHRpb24gbGV0LWk9XCJpbmRleFwiIFtuZ0Zvck9mXT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duSXRlbSBbb3B0aW9uXT1cIm9wdGlvblwiIFtzZWxlY3RlZF09XCJzZWxlY3RlZE9wdGlvbiA9PSBvcHRpb25cIiBbbGFiZWxdPVwiZ2V0T3B0aW9uTGFiZWwob3B0aW9uKVwiIFtkaXNhYmxlZF09XCJpc09wdGlvbkRpc2FibGVkKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIj48L3AtZHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdmlydHVhbFNjcm9sbExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgKHNjcm9sbGVkSW5kZXhDaGFuZ2UpPVwic2Nyb2xsVG9TZWxlY3RlZFZpcnR1YWxTY3JvbGxFbGVtZW50KClcIiAjdmlld3BvcnQgW25nU3R5bGVdPVwieydoZWlnaHQnOiBzY3JvbGxIZWlnaHR9XCIgW2l0ZW1TaXplXT1cIml0ZW1TaXplXCIgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsICYmIG9wdGlvbnNUb0Rpc3BsYXkgJiYgb3B0aW9uc1RvRGlzcGxheS5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKmNka1ZpcnR1YWxGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IGxldCBpID0gaW5kZXg7IGxldCBjID0gY291bnQ7IGxldCBmID0gZmlyc3Q7IGxldCBsID0gbGFzdDsgbGV0IGUgPSBldmVuOyBsZXQgbyA9IG9kZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duSXRlbSBbb3B0aW9uXT1cIm9wdGlvblwiIFtzZWxlY3RlZF09XCJzZWxlY3RlZE9wdGlvbiA9PSBvcHRpb25cIiBbbGFiZWxdPVwiZ2V0T3B0aW9uTGFiZWwob3B0aW9uKVwiIFtkaXNhYmxlZF09XCJpc09wdGlvbkRpc2FibGVkKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIj48L3AtZHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiZmlsdGVyICYmICghb3B0aW9uc1RvRGlzcGxheSB8fCAob3B0aW9uc1RvRGlzcGxheSAmJiBvcHRpb25zVG9EaXNwbGF5Lmxlbmd0aCA9PT0gMCkpXCIgY2xhc3M9XCJwLWRyb3Bkb3duLWVtcHR5LW1lc3NhZ2VcIj57e2VtcHR5RmlsdGVyTWVzc2FnZX19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignb3ZlcmxheUFuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgne3tzaG93VHJhbnNpdGlvblBhcmFtc319JylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJ3t7aGlkZVRyYW5zaXRpb25QYXJhbXN9fScsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZvY3VzXSc6ICdmb2N1c2VkIHx8IG92ZXJsYXlWaXNpYmxlJ1xuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbRFJPUERPV05fVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd24gaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJWaWV3SW5pdCxBZnRlckNvbnRlbnRJbml0LEFmdGVyVmlld0NoZWNrZWQsT25EZXN0cm95LENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIEBJbnB1dCgpIHNjcm9sbEhlaWdodDogc3RyaW5nID0gJzIwMHB4JztcblxuICAgIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBwYW5lbFN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBwYW5lbFN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBhbnk7XG5cbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJMb2NhbGU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNlbGVjdElkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJCeTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYXV0b2ZvY3VzOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcmVzZXRGaWx0ZXJPbkhpZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGRyb3Bkb3duSWNvbjogc3RyaW5nID0gJ3BpIHBpLWNoZXZyb24tZG93bic7XG5cbiAgICBASW5wdXQoKSBvcHRpb25MYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uVmFsdWU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG9wdGlvbkRpc2FibGVkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBvcHRpb25Hcm91cExhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBvcHRpb25Hcm91cENoaWxkcmVuOiBzdHJpbmcgPSBcIml0ZW1zXCI7XG5cbiAgICBASW5wdXQoKSBhdXRvRGlzcGxheUZpcnN0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGdyb3VwOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2hvd0NsZWFyOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZW1wdHlGaWx0ZXJNZXNzYWdlOiBzdHJpbmcgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG5cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgaXRlbVNpemU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGF1dG9aSW5kZXg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgYmFzZVpJbmRleDogbnVtYmVyID0gMDtcblxuICAgIEBJbnB1dCgpIHNob3dUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xMnMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xuXG4gICAgQElucHV0KCkgaGlkZVRyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnLjFzIGxpbmVhcic7XG5cbiAgICBASW5wdXQoKSBhcmlhRmlsdGVyTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJNYXRjaE1vZGU6IHN0cmluZyA9IFwiY29udGFpbnNcIjtcblxuICAgIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nID0gJyc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb246IHN0cmluZyA9ICdyaWdodCc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb25TdHlsZTogc3RyaW5nID0gJ2Fic29sdXRlJztcblxuICAgIEBJbnB1dCgpIHRvb2x0aXBTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhdXRvZm9jdXNGaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdmaWx0ZXInKSBmaWx0ZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdpbicpIGFjY2Vzc2libGVWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCkgdmlld1BvcnQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcblxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRhYmxlSW5wdXQnKSBlZGl0YWJsZUlucHV0Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9O1xuXG4gICAgc2V0IGRpc2FibGVkKF9kaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgICBpZiAoX2Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IF9kaXNhYmxlZDtcbiAgICAgICAgaWYgKCEodGhpcy5jZCBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3ZlcmxheTogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpdGVtc1dyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZ3JvdXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHNlbGVjdGVkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgc2VsZWN0ZWRPcHRpb246IGFueTtcblxuICAgIF9vcHRpb25zOiBhbnlbXTtcblxuICAgIHZhbHVlOiBhbnk7XG5cbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvcHRpb25zVG9EaXNwbGF5OiBhbnlbXTtcblxuICAgIGhvdmVyOiBib29sZWFuO1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbjtcblxuICAgIGZpbGxlZDogYm9vbGVhbjtcblxuICAgIG92ZXJsYXlWaXNpYmxlOiBib29sZWFuO1xuXG4gICAgZG9jdW1lbnRDbGlja0xpc3RlbmVyOiBhbnk7XG5cbiAgICBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgICBvcHRpb25zQ2hhbmdlZDogYm9vbGVhbjtcblxuICAgIHBhbmVsOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGRpbWVuc2lvbnNVcGRhdGVkOiBib29sZWFuO1xuXG4gICAgaG92ZXJlZEl0ZW06IGFueTtcblxuICAgIHNlbGVjdGVkT3B0aW9uVXBkYXRlZDogYm9vbGVhbjtcblxuICAgIF9maWx0ZXJWYWx1ZTogc3RyaW5nO1xuXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZztcblxuICAgIHNlYXJjaEluZGV4OiBudW1iZXI7XG5cbiAgICBzZWFyY2hUaW1lb3V0OiBhbnk7XG5cbiAgICBwcmV2aW91c1NlYXJjaENoYXI6IHN0cmluZztcblxuICAgIGN1cnJlbnRTZWFyY2hDaGFyOiBzdHJpbmc7XG5cbiAgICBkb2N1bWVudFJlc2l6ZUxpc3RlbmVyOiBhbnk7XG5cbiAgICB2aXJ0dWFsQXV0b1Njcm9sbGVkOiBib29sZWFuO1xuXG4gICAgdmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXg6IG51bWJlcjtcblxuICAgIHZpZXdQb3J0T2Zmc2V0VG9wOiBudW1iZXIgPSAwO1xuXG4gICAgcHJldmVudE1vZGVsVG91Y2hlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUsIHB1YmxpYyBmaWx0ZXJTZXJ2aWNlOiBGaWx0ZXJTZXJ2aWNlKSB7fVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0ZWRJdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdncm91cCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRPcHRpb24obnVsbCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IG9wdGlvbnMoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBzZXQgb3B0aW9ucyh2YWw6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB2YWw7XG4gICAgICAgIHRoaXMub3B0aW9uc1RvRGlzcGxheSA9IHRoaXMuX29wdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRPcHRpb24odGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMub3B0aW9uc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlclZhbHVlICYmIHRoaXMuX2ZpbHRlclZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IGZpbHRlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZmlsdGVyVmFsdWUodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyVmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKcKge1xuICAgICAgICBpZiAodGhpcy5lZGl0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0YWJsZUxhYmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24gPyB0aGlzLmdldE9wdGlvbkxhYmVsKHRoaXMuc2VsZWN0ZWRPcHRpb24pIDogbnVsbDtcbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0YWJsZUxhYmVsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lZGl0YWJsZUlucHV0Vmlld0NoaWxkICYmIHRoaXMuZWRpdGFibGVJbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRhYmxlSW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uID8gdGhpcy5nZXRPcHRpb25MYWJlbCh0aGlzLnNlbGVjdGVkT3B0aW9uKSA6IHRoaXMudmFsdWV8fCcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE9wdGlvbkxhYmVsKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkxhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uTGFiZWwpIDogKG9wdGlvbi5sYWJlbCAhPSB1bmRlZmluZWQgPyBvcHRpb24ubGFiZWwgOiBvcHRpb24pO1xuICAgIH1cblxuICAgIGdldE9wdGlvblZhbHVlKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uVmFsdWUpIDogKHRoaXMub3B0aW9uTGFiZWwgfHwgb3B0aW9uLnZhbHVlID09PSB1bmRlZmluZWQgPyBvcHRpb24gOiBvcHRpb24udmFsdWUpO1xuICAgIH1cblxuICAgIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uRGlzYWJsZWQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25EaXNhYmxlZCkgOiAob3B0aW9uLmRpc2FibGVkICE9PSB1bmRlZmluZWQgPyBvcHRpb24uZGlzYWJsZWQgOiBmYWxzZSk7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBMYWJlbChvcHRpb25Hcm91cDogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkdyb3VwTGFiZWwgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbkdyb3VwLCB0aGlzLm9wdGlvbkdyb3VwTGFiZWwpIDogKG9wdGlvbkdyb3VwLmxhYmVsICE9IHVuZGVmaW5lZCA/IG9wdGlvbkdyb3VwLmxhYmVsIDogb3B0aW9uR3JvdXApO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0aW9uR3JvdXA6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb25Hcm91cCwgdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuKSA6IG9wdGlvbkdyb3VwLml0ZW1zO1xuICAgIH1cblxuICAgIG9uSXRlbUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGV2ZW50Lm9wdGlvbjtcblxuICAgICAgICBpZiAoIXRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24pKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIG9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc2libGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSwgMTUwKTtcbiAgICB9XG5cbiAgICBzZWxlY3RJdGVtKGV2ZW50LCBvcHRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gIT0gb3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0YWJsZUxhYmVsKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1BvcnRPZmZzZXRUb3AgPSB0aGlzLnZpZXdQb3J0ID8gdGhpcy52aWV3UG9ydC5tZWFzdXJlU2Nyb2xsT2Zmc2V0KCkgOiAwO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zQ2hhbmdlZCAmJiB0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpcnR1YWxTY3JvbGxTZWxlY3RlZEluZGV4KHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsaWduT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvblVwZGF0ZWQgJiYgdGhpcy5pdGVtc1dyYXBwZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwgJiYgdGhpcy52aWV3UG9ydCkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZSA9IHRoaXMudmlld1BvcnQuZ2V0UmVuZGVyZWRSYW5nZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXgoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLnN0YXJ0ID4gdGhpcy52aXJ0dWFsU2Nyb2xsU2VsZWN0ZWRJbmRleCB8fCByYW5nZS5lbmQgPCB0aGlzLnZpcnR1YWxTY3JvbGxTZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1BvcnQuc2Nyb2xsVG9JbmRleCh0aGlzLnZpcnR1YWxTY3JvbGxTZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5vdmVybGF5LCAnbGkucC1oaWdobGlnaHQnKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnNjcm9sbEluVmlldyh0aGlzLml0ZW1zV3JhcHBlciwgRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMub3ZlcmxheSwgJ2xpLnAtaGlnaGxpZ2h0JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvblVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbih2YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdGFibGVMYWJlbCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVzZXRGaWx0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2ZpbHRlclZhbHVlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5maWx0ZXJWaWV3Q2hpbGQgJiYgdGhpcy5maWx0ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zVG9EaXNwbGF5ID0gdGhpcy5vcHRpb25zO1xuICAgIH1cblxuICAgIHVwZGF0ZVNlbGVjdGVkT3B0aW9uKHZhbDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmZpbmRPcHRpb24odmFsLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpO1xuICAgICAgICBpZiAodGhpcy5hdXRvRGlzcGxheUZpcnN0ICYmICF0aGlzLnBsYWNlaG9sZGVyICYmICF0aGlzLnNlbGVjdGVkT3B0aW9uICYmIHRoaXMub3B0aW9uc1RvRGlzcGxheSAmJiB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkubGVuZ3RoICYmICF0aGlzLmVkaXRhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5vcHRpb25zVG9EaXNwbGF5WzBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZWNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZG9ubHkgfHwgdGhpcy5pc0lucHV0Q2xpY2soZXZlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMuYWNjZXNzaWJsZVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgaXNJbnB1dENsaWNrKGV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBEb21IYW5kbGVyLmhhc0NsYXNzKGV2ZW50LnRhcmdldCwgJ3AtZHJvcGRvd24tY2xlYXItaWNvbicpIHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQuaXNTYW1lTm9kZSh0aGlzLmFjY2Vzc2libGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkgfHxcbiAgICAgICAgICAgICh0aGlzLmVkaXRhYmxlSW5wdXRWaWV3Q2hpbGQgJiYgZXZlbnQudGFyZ2V0LmlzU2FtZU5vZGUodGhpcy5lZGl0YWJsZUlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBpc091dHNpZGVDbGlja2VkKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaXNTYW1lTm9kZShldmVudC50YXJnZXQpIHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpIHx8ICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5LmNvbnRhaW5zKDxOb2RlPiBldmVudC50YXJnZXQpKSk7XG4gICAgfVxuXG4gICAgb25FZGl0YWJsZUlucHV0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG9uRWRpdGFibGVJbnB1dEZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25FZGl0YWJsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRPcHRpb24odGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25PdmVybGF5QW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudG9TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5ID0gZXZlbnQuZWxlbWVudDtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXNXcmFwcGVyU2VsZWN0b3IgPSB0aGlzLnZpcnR1YWxTY3JvbGwgPyAnLmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCcgOiAnLnAtZHJvcGRvd24taXRlbXMtd3JhcHBlcic7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1dyYXBwZXIgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5vdmVybGF5LCBpdGVtc1dyYXBwZXJTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1pJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gU3RyaW5nKHRoaXMuYmFzZVpJbmRleCArICgrK0RvbUhhbmRsZXIuemluZGV4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25PdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFNjcm9sbExpc3RlbmVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZExpc3RJdGVtID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuaXRlbXNXcmFwcGVyLCAnLnAtZHJvcGRvd24taXRlbS5wLWhpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkTGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnNjcm9sbEluVmlldyh0aGlzLml0ZW1zV3JhcHBlciwgc2VsZWN0ZWRMaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJWaWV3Q2hpbGQgJiYgdGhpcy5maWx0ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRNb2RlbFRvdWNoZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9mb2N1c0ZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vblNob3cuZW1pdChldmVudCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndm9pZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlIaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkhpZGUuZW1pdChldmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvU2VsZWN0ZWRWaXJ0dWFsU2Nyb2xsRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpcnR1YWxBdXRvU2Nyb2xsZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdQb3J0T2Zmc2V0VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydC5zY3JvbGxUb09mZnNldCh0aGlzLnZpZXdQb3J0T2Zmc2V0VG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1BvcnQuc2Nyb2xsVG9JbmRleCh0aGlzLnZpcnR1YWxTY3JvbGxTZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlydHVhbEF1dG9TY3JvbGxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlydHVhbFNjcm9sbFNlbGVjdGVkSW5kZXgocmVzZXRPZmZzZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gJiYgdGhpcy5vcHRpb25zVG9EaXNwbGF5ICYmIHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChyZXNldE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1BvcnRPZmZzZXRUb3AgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGxTZWxlY3RlZEluZGV4ID0gdGhpcy5maW5kT3B0aW9uSW5kZXgodGhpcy5nZXRPcHRpb25WYWx1ZSh0aGlzLnNlbGVjdGVkT3B0aW9uKSwgdGhpcy5vcHRpb25zVG9EaXNwbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFwcGVuZE92ZXJsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyA9PT0gJ2JvZHknKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSwgdGhpcy5hcHBlbmRUbyk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5LnN0eWxlLm1pbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLm1pbldpZHRoID0gRG9tSGFuZGxlci5nZXRXaWR0aCh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlT3ZlcmxheUFwcGVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5maWx0ZXIgJiYgdGhpcy5yZXNldEZpbHRlck9uSGlkZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy52aXJ0dWFsQXV0b1Njcm9sbGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIGFsaWduT3ZlcmxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pXG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hYnNvbHV0ZVBvc2l0aW9uKHRoaXMub3ZlcmxheSwgdGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5yZWxhdGl2ZVBvc2l0aW9uKHRoaXMub3ZlcmxheSwgdGhpcy5jb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbklucHV0Rm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXRCbHVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcblxuICAgICAgICBpZiAoIXRoaXMucHJldmVudE1vZGVsVG91Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldmVudE1vZGVsVG91Y2hlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZpbmRQcmV2RW5hYmxlZE9wdGlvbihpbmRleCkge1xuICAgICAgICBsZXQgcHJldkVuYWJsZWRPcHRpb247XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1RvRGlzcGxheSAmJiB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gKGluZGV4IC0gMSk7IDAgPD0gaTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMub3B0aW9uc1RvRGlzcGxheVtpXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldkVuYWJsZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFwcmV2RW5hYmxlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkubGVuZ3RoIC0gMTsgaSA+PSBpbmRleCA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zVG9EaXNwbGF5W2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVuYWJsZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmV2RW5hYmxlZE9wdGlvbjtcbiAgICB9XG5cbiAgICBmaW5kTmV4dEVuYWJsZWRPcHRpb24oaW5kZXgpIHtcbiAgICAgICAgbGV0IG5leHRFbmFibGVkT3B0aW9uO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNUb0Rpc3BsYXkgJiYgdGhpcy5vcHRpb25zVG9EaXNwbGF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IChpbmRleCArIDEpOyBpbmRleCA8ICh0aGlzLm9wdGlvbnNUb0Rpc3BsYXkubGVuZ3RoIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVuYWJsZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFuZXh0RW5hYmxlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zVG9EaXNwbGF5W2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVuYWJsZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0RW5hYmxlZE9wdGlvbjtcbiAgICB9XG5cbiAgICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHNlYXJjaDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5yZWFkb25seSB8fCAhdGhpcy5vcHRpb25zVG9EaXNwbGF5IHx8IHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgLy9kb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5VmlzaWJsZSAmJiBldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbUluZGV4ID0gdGhpcy5zZWxlY3RlZE9wdGlvbiA/IHRoaXMuZmluZE9wdGlvbkdyb3VwSW5kZXgodGhpcy5nZXRPcHRpb25WYWx1ZSh0aGlzLnNlbGVjdGVkT3B0aW9uKSwgdGhpcy5vcHRpb25zVG9EaXNwbGF5KSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRJdGVtSW5kZXggPSBzZWxlY3RlZEl0ZW1JbmRleC5pdGVtSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SXRlbUluZGV4IDwgKHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbih0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbc2VsZWN0ZWRJdGVtSW5kZXguZ3JvdXBJbmRleF0pLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGV2ZW50LCB0aGlzLmdldE9wdGlvbkdyb3VwQ2hpbGRyZW4odGhpcy5vcHRpb25zVG9EaXNwbGF5W3NlbGVjdGVkSXRlbUluZGV4Lmdyb3VwSW5kZXhdKVtuZXh0SXRlbUluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zVG9EaXNwbGF5W3NlbGVjdGVkSXRlbUluZGV4Lmdyb3VwSW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbih0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbc2VsZWN0ZWRJdGVtSW5kZXguZ3JvdXBJbmRleCArIDFdKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbih0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbMF0pWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gPyB0aGlzLmZpbmRPcHRpb25JbmRleCh0aGlzLmdldE9wdGlvblZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb24pLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dEVuYWJsZWRPcHRpb24gPSB0aGlzLmZpbmROZXh0RW5hYmxlZE9wdGlvbihzZWxlY3RlZEl0ZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEVuYWJsZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIG5leHRFbmFibGVkT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy91cFxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkT3B0aW9uID8gdGhpcy5maW5kT3B0aW9uR3JvdXBJbmRleCh0aGlzLmdldE9wdGlvblZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb24pLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2SXRlbUluZGV4ID0gc2VsZWN0ZWRJdGVtSW5kZXguaXRlbUluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SXRlbUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbih0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbc2VsZWN0ZWRJdGVtSW5kZXguZ3JvdXBJbmRleF0pW3ByZXZJdGVtSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcmV2SXRlbUluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2R3JvdXAgPSB0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbc2VsZWN0ZWRJdGVtSW5kZXguZ3JvdXBJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGV2ZW50LCB0aGlzLmdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ocHJldkdyb3VwKVt0aGlzLmdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ocHJldkdyb3VwKS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gPyB0aGlzLmZpbmRPcHRpb25JbmRleCh0aGlzLmdldE9wdGlvblZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb24pLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2RW5hYmxlZE9wdGlvbiA9IHRoaXMuZmluZFByZXZFbmFibGVkT3B0aW9uKHNlbGVjdGVkSXRlbUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZFbmFibGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIHByZXZFbmFibGVkT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9zcGFjZVxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZW50ZXJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlciB8fCAodGhpcy5vcHRpb25zVG9EaXNwbGF5ICYmIHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZXNjYXBlIGFuZCB0YWJcbiAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9zZWFyY2ggaXRlbSBiYXNlZCBvbiBrZXlib2FyZCBpbnB1dFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoICYmICFldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zZWFyY2hUaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XG4gICAgICAgIHRoaXMucHJldmlvdXNTZWFyY2hDaGFyID0gdGhpcy5jdXJyZW50U2VhcmNoQ2hhcjtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VhcmNoQ2hhciA9IGNoYXI7XG5cbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNTZWFyY2hDaGFyID09PSB0aGlzLmN1cnJlbnRTZWFyY2hDaGFyKVxuICAgICAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHRoaXMuY3VycmVudFNlYXJjaENoYXI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB0aGlzLnNlYXJjaFZhbHVlID8gdGhpcy5zZWFyY2hWYWx1ZSArIGNoYXIgOiBjaGFyO1xuXG4gICAgICAgIGxldCBuZXdPcHRpb247XG4gICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoSW5kZXggPSB0aGlzLnNlbGVjdGVkT3B0aW9uID8gdGhpcy5maW5kT3B0aW9uR3JvdXBJbmRleCh0aGlzLmdldE9wdGlvblZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb24pLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDoge2dyb3VwSW5kZXg6IDAsIGl0ZW1JbmRleDogMH07XG4gICAgICAgICAgICBuZXdPcHRpb24gPSB0aGlzLnNlYXJjaE9wdGlvbldpdGhpbkdyb3VwKHNlYXJjaEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2hJbmRleCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gPyB0aGlzLmZpbmRPcHRpb25JbmRleCh0aGlzLmdldE9wdGlvblZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb24pLCB0aGlzLm9wdGlvbnNUb0Rpc3BsYXkpIDogLTE7XG4gICAgICAgICAgICBuZXdPcHRpb24gPSB0aGlzLnNlYXJjaE9wdGlvbigrK3NlYXJjaEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdPcHRpb24gJiYgIXRoaXMuaXNPcHRpb25EaXNhYmxlZChuZXdPcHRpb24pKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQsIG5ld09wdGlvbik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBudWxsO1xuICAgICAgICB9LCAyNTApO1xuICAgIH1cblxuICAgIHNlYXJjaE9wdGlvbihpbmRleCkge1xuICAgICAgICBsZXQgb3B0aW9uO1xuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24gPSB0aGlzLnNlYXJjaE9wdGlvbkluUmFuZ2UoaW5kZXgsIHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGgpO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuc2VhcmNoT3B0aW9uSW5SYW5nZSgwLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIHNlYXJjaE9wdGlvbkluUmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9wdCA9IHRoaXMub3B0aW9uc1RvRGlzcGxheVtpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldE9wdGlvbkxhYmVsKG9wdCkudG9Mb2NhbGVMb3dlckNhc2UodGhpcy5maWx0ZXJMb2NhbGUpLnN0YXJ0c1dpdGgoKHRoaXMuc2VhcmNoVmFsdWUgYXMgYW55KS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSkpICYmICF0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzZWFyY2hPcHRpb25XaXRoaW5Hcm91cChpbmRleCkge1xuICAgICAgICBsZXQgb3B0aW9uO1xuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXguZ3JvdXBJbmRleDsgaSA8IHRoaXMub3B0aW9uc1RvRGlzcGxheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAoaW5kZXguZ3JvdXBJbmRleCA9PT0gaSkgPyAoaW5kZXguaXRlbUluZGV4ICsgMSkgOiAwOyBqIDwgdGhpcy5nZXRPcHRpb25Hcm91cENoaWxkcmVuKHRoaXMub3B0aW9uc1RvRGlzcGxheVtpXSkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdCA9IHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbih0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbaV0pW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRPcHRpb25MYWJlbChvcHQpLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuZmlsdGVyTG9jYWxlKS5zdGFydHNXaXRoKCh0aGlzLnNlYXJjaFZhbHVlIGFzIGFueSkudG9Mb2NhbGVMb3dlckNhc2UodGhpcy5maWx0ZXJMb2NhbGUpKSAmJiAhdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXguZ3JvdXBJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKChpbmRleC5ncm91cEluZGV4ID09PSBpKSA/IGluZGV4Lml0ZW1JbmRleCA6IHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbih0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbaV0pLmxlbmd0aCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdCA9IHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbih0aGlzLm9wdGlvbnNUb0Rpc3BsYXlbaV0pW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0T3B0aW9uTGFiZWwob3B0KS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSkuc3RhcnRzV2l0aCgodGhpcy5zZWFyY2hWYWx1ZSBhcyBhbnkpLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuZmlsdGVyTG9jYWxlKSkgJiYgIXRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbmRPcHRpb25JbmRleCh2YWw6IGFueSwgb3B0czogYW55W10pOiBudW1iZXIge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgICAgICBpZiAob3B0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh2YWwgPT0gbnVsbCAmJiB0aGlzLmdldE9wdGlvblZhbHVlKG9wdHNbaV0pID09IG51bGwpIHx8wqBPYmplY3RVdGlscy5lcXVhbHModmFsLCB0aGlzLmdldE9wdGlvblZhbHVlKG9wdHNbaV0pLCB0aGlzLmRhdGFLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGZpbmRPcHRpb25Hcm91cEluZGV4KHZhbDogYW55LCBvcHRzOiBhbnlbXSk6IGFueSB7XG4gICAgICAgIGxldCBncm91cEluZGV4LCBpdGVtSW5kZXg7XG5cbiAgICAgICAgaWYgKG9wdHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdyb3VwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IHRoaXMuZmluZE9wdGlvbkluZGV4KHZhbCwgdGhpcy5nZXRPcHRpb25Hcm91cENoaWxkcmVuKG9wdHNbaV0pKTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4ge2dyb3VwSW5kZXg6IGdyb3VwSW5kZXgsIGl0ZW1JbmRleDogaXRlbUluZGV4fTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRPcHRpb24odmFsOiBhbnksIG9wdHM6IGFueVtdLCBpbkdyb3VwPzogYm9vbGVhbik6IFNlbGVjdEl0ZW0ge1xuICAgICAgICBpZiAodGhpcy5ncm91cCAmJiAhaW5Hcm91cCkge1xuICAgICAgICAgICAgbGV0IG9wdDogU2VsZWN0SXRlbTtcbiAgICAgICAgICAgIGlmIChvcHRzICYmIG9wdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb3B0Z3JvdXAgb2Ygb3B0cykge1xuICAgICAgICAgICAgICAgICAgICBvcHQgPSB0aGlzLmZpbmRPcHRpb24odmFsLCB0aGlzLmdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0Z3JvdXApLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3B0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLmZpbmRPcHRpb25JbmRleCh2YWwsIG9wdHMpO1xuICAgICAgICAgICAgcmV0dXJuIChpbmRleCAhPSAtMSkgPyBvcHRzW2luZGV4XSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpbHRlcklucHV0Q2hhbmdlKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyVmFsdWUgPSBpbnB1dFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUZpbHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zVG9EaXNwbGF5ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25GaWx0ZXIuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIGZpbHRlcjogdGhpcy5fZmlsdGVyVmFsdWV9KTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZUZpbHRlcigpIHtcbiAgICAgICAgbGV0IHNlYXJjaEZpZWxkczogc3RyaW5nW10gPSAodGhpcy5maWx0ZXJCeSB8fMKgdGhpcy5vcHRpb25MYWJlbCB8fCAnbGFiZWwnKS5zcGxpdCgnLCcpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRHcm91cHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBvcHRncm91cCBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkU3ViT3B0aW9ucyA9IHRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXIodGhpcy5nZXRPcHRpb25Hcm91cENoaWxkcmVuKG9wdGdyb3VwKSwgc2VhcmNoRmllbGRzLCB0aGlzLmZpbHRlclZhbHVlLCB0aGlzLmZpbHRlck1hdGNoTW9kZSwgdGhpcy5maWx0ZXJMb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyZWRTdWJPcHRpb25zICYmIGZpbHRlcmVkU3ViT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkR3JvdXBzLnB1c2goey4uLm9wdGdyb3VwLCAuLi57W3RoaXMub3B0aW9uR3JvdXBDaGlsZHJlbl06IGZpbHRlcmVkU3ViT3B0aW9uc319KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1RvRGlzcGxheSA9IGZpbHRlcmVkR3JvdXBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zVG9EaXNwbGF5ID0gdGhpcy5maWx0ZXJTZXJ2aWNlLmZpbHRlcih0aGlzLm9wdGlvbnMsIHNlYXJjaEZpZWxkcywgdGhpcy5maWx0ZXJWYWx1ZSwgdGhpcy5maWx0ZXJNYXRjaE1vZGUsIHRoaXMuZmlsdGVyTG9jYWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBseUZvY3VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lZGl0YWJsZSlcbiAgICAgICAgICAgIERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcucC1kcm9wZG93bi1sYWJlbC5wLWlucHV0dGV4dCcpLmZvY3VzKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpbnB1dFtyZWFkb25seV0nKS5mb2N1cygpO1xuICAgIH1cblxuICAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcGx5Rm9jdXMoKTtcbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudFRhcmdldDogYW55ID0gdGhpcy5lbCA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50IDogJ2RvY3VtZW50JztcblxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudFRhcmdldCwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRzaWRlQ2xpY2tlZChldmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgaWYgKCFEb21IYW5kbGVyLmlzQW5kcm9pZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG5ldyBDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlcih0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHVuYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIudW5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUZpbGxlZFN0YXRlKCkge1xuICAgICAgICB0aGlzLmZpbGxlZCA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uICE9IG51bGwpO1xuICAgIH1cblxuICAgIGNsZWFyKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbih0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0YWJsZUxhYmVsKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICB9XG5cbiAgICBvbk92ZXJsYXlIaWRlKCkge1xuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1zV3JhcHBlciA9IG51bGw7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc3RvcmVPdmVybGF5QXBwZW5kKCk7XG4gICAgICAgIHRoaXMub25PdmVybGF5SGlkZSgpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFNoYXJlZE1vZHVsZSxTY3JvbGxpbmdNb2R1bGUsVG9vbHRpcE1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtEcm9wZG93bixTaGFyZWRNb2R1bGUsU2Nyb2xsaW5nTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEcm9wZG93bixEcm9wZG93bkl0ZW1dXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTW9kdWxlIHsgfVxuIl19