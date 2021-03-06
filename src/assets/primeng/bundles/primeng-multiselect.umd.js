(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/ripple'),require('@angular/common'),require('primeng/api'),require('primeng/tooltip'),require('@angular/cdk/scrolling'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/dom'), require('primeng/utils'), require('primeng/api'), require('@angular/forms'), require('@angular/cdk/scrolling'), require('primeng/tooltip'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/multiselect', ['@angular/core','primeng/ripple','@angular/common','primeng/api','primeng/tooltip','@angular/cdk/scrolling','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/dom', 'primeng/utils', 'primeng/api', '@angular/forms', '@angular/cdk/scrolling', 'primeng/tooltip', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.ripple,global.ng.common,global.primeng.api,global.primeng.tooltip,global.ng.cdk.scrolling,(global.primeng = global.primeng || {}, global.primeng.multiselect = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.dom, global.primeng.utils, global.primeng.api, global.ng.forms, global.ng.cdk.scrolling, global.primeng.tooltip, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, core, animations, common, dom, utils, api, forms, scrolling, tooltip, ripple) { 
function MultiSelectItem_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function MultiSelectItem_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { "height": a0 }; };
var _c1 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
var _c2 = function (a0) { return { "p-highlight": a0 }; };
var _c3 = function (a0) { return { "pi pi-check": a0 }; };
var _c4 = function (a0) { return { $implicit: a0 }; };
var _c5 = ["container"];
var _c6 = ["filterInput"];
var _c7 = ["in"];
function MultiSelect_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.valuesAsString || "empty");
} }
function MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 17);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); var item_r9 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r13 = ɵngcc0.ɵɵnextContext(3); return ctx_r13.removeChip(item_r9, $event); });
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
    var item_r9 = ctx.$implicit;
    var ctx_r7 = ɵngcc0.ɵɵnextContext(3);
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
    var ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.placeholder || ctx_r8.defaultLabel || "empty");
} }
function MultiSelect_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_ng_container_7_ng_container_2_div_1_Template, 5, 2, "div", 12);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
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
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
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
var _c8 = function (a0) { return { "p-checkbox-disabled": a0 }; };
var _c9 = function (a0, a1, a2) { return { "p-highlight": a0, "p-focus": a1, "p-disabled": a2 }; };
function MultiSelect_div_11_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 30);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "input", 31);
    ɵngcc0.ɵɵlistener("focus", function MultiSelect_div_11_div_1_div_3_Template_input_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r25 = ɵngcc0.ɵɵnextContext(3); return ctx_r25.onHeaderCheckboxFocus(); })("blur", function MultiSelect_div_11_div_1_div_3_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r27 = ɵngcc0.ɵɵnextContext(3); return ctx_r27.onHeaderCheckboxBlur(); })("keydown.space", function MultiSelect_div_11_div_1_div_3_Template_input_keydown_space_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r28 = ɵngcc0.ɵɵnextContext(3); return ctx_r28.toggleAll($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 32);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_div_11_div_1_div_3_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r29 = ɵngcc0.ɵɵnextContext(3); return ctx_r29.toggleAll($event); });
    ɵngcc0.ɵɵelement(4, "span", 33);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = ɵngcc0.ɵɵnextContext(3);
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
    var _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 34);
    ɵngcc0.ɵɵelementStart(1, "input", 35, 36);
    ɵngcc0.ɵɵlistener("input", function MultiSelect_div_11_div_1_div_4_Template_input_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r32); var ctx_r31 = ɵngcc0.ɵɵnextContext(3); return ctx_r31.onFilterInputChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "span", 37);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r24.filterValue || "")("disabled", ctx_r24.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r24.filterPlaceHolder)("aria-label", ctx_r24.ariaFilterLabel);
} }
function MultiSelect_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_div_1_ng_container_2_Template, 1, 0, "ng-container", 25);
    ɵngcc0.ɵɵtemplate(3, MultiSelect_div_11_div_1_div_3_Template, 5, 14, "div", 26);
    ɵngcc0.ɵɵtemplate(4, MultiSelect_div_11_div_1_div_4_Template, 4, 4, "div", 27);
    ɵngcc0.ɵɵelementStart(5, "button", 28);
    ɵngcc0.ɵɵlistener("click", function MultiSelect_div_11_div_1_Template_button_click_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.close($event); });
    ɵngcc0.ɵɵelement(6, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r16 = ɵngcc0.ɵɵnextContext(2);
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
    var optgroup_r36 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r37 = ɵngcc0.ɵɵnextContext(3);
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
    var optgroup_r36 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    var _r19 = ɵngcc0.ɵɵreference(7);
    var ctx_r35 = ɵngcc0.ɵɵnextContext();
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
    var ctx_r17 = ɵngcc0.ɵɵnextContext(2);
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
    var _r19 = ɵngcc0.ɵɵreference(7);
    var ctx_r18 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r19)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c4, ctx_r18.optionsToRender));
} }
function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r52 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-multiSelectItem", 43);
    ɵngcc0.ɵɵlistener("onClick", function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_multiSelectItem_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); var ctx_r51 = ɵngcc0.ɵɵnextContext(4); return ctx_r51.onOptionClick($event); })("onKeydown", function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_multiSelectItem_onKeydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); var ctx_r53 = ɵngcc0.ɵɵnextContext(4); return ctx_r53.onOptionKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r49 = ctx.$implicit;
    var ctx_r48 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("option", option_r49)("selected", ctx_r48.isSelected(option_r49))("label", ctx_r48.getOptionLabel(option_r49))("disabled", ctx_r48.isOptionDisabled(option_r49))("template", ctx_r48.itemTemplate);
} }
function MultiSelect_div_11_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template, 1, 5, "ng-template", 38);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var optionsToDisplay_r42 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", optionsToDisplay_r42);
} }
function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r66 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "p-multiSelectItem", 48);
    ɵngcc0.ɵɵlistener("onClick", function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); var ctx_r65 = ɵngcc0.ɵɵnextContext(5); return ctx_r65.onOptionClick($event); })("onKeydown", function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onKeydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); var ctx_r67 = ɵngcc0.ɵɵnextContext(5); return ctx_r67.onOptionKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r58 = ctx.$implicit;
    var ctx_r57 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("option", option_r58)("selected", ctx_r57.isSelected(option_r58))("label", ctx_r57.getOptionLabel(option_r58))("disabled", ctx_r57.isOptionDisabled(option_r58))("template", ctx_r57.itemTemplate)("itemSize", ctx_r57.itemSize);
} }
function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 45, 46);
    ɵngcc0.ɵɵtemplate(2, MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 6, "ng-container", 47);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var optionsToDisplay_r42 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r55 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r55.scrollHeight))("itemSize", ctx_r55.itemSize);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", optionsToDisplay_r42);
} }
function MultiSelect_div_11_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 44);
} if (rf & 2) {
    var ctx_r46 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r46.virtualScroll && !ctx_r46.emptyOptions);
} }
function MultiSelect_div_11_ng_template_6_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 49);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r47 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r47.emptyFilterMessage);
} }
function MultiSelect_div_11_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MultiSelect_div_11_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 40);
    ɵngcc0.ɵɵtemplate(1, MultiSelect_div_11_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 41, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, MultiSelect_div_11_ng_template_6_li_3_Template, 2, 1, "li", 42);
} if (rf & 2) {
    var _r45 = ɵngcc0.ɵɵreference(2);
    var ctx_r20 = ɵngcc0.ɵɵnextContext(2);
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
    var ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r21.footerTemplate);
} }
var _c10 = function () { return ["p-multiselect-panel p-component"]; };
var _c11 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c12 = function (a1) { return { value: "visible", params: a1 }; };
var _c13 = function (a0) { return { "p-multiselect-virtualscroll": a0 }; };
function MultiSelect_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r71 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function MultiSelect_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r71); var ctx_r70 = ɵngcc0.ɵɵnextContext(); return ctx_r70.onOverlayAnimationStart($event); })("keydown", function MultiSelect_div_11_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r71); var ctx_r72 = ɵngcc0.ɵɵnextContext(); return ctx_r72.onKeydown($event); });
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
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
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
var _c14 = [[["p-header"]], [["p-footer"]]];
var _c15 = function (a1, a2, a3, a4) { return { "p-multiselect p-component": true, "p-multiselect-open": a1, "p-multiselect-chip": a2, "p-focus": a3, "p-disabled": a4 }; };
var _c16 = function (a0, a1) { return { "p-placeholder": a0, "p-multiselect-label-empty": a1 }; };
var _c17 = function () { return { "p-multiselect-trigger": true }; };
var _c18 = ["p-header", "p-footer"];
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var MULTISELECT_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return MultiSelect; }),
        multi: true
    };
    var MultiSelectItem = /** @class */ (function () {
        function MultiSelectItem() {
            this.onClick = new core.EventEmitter();
            this.onKeydown = new core.EventEmitter();
        }
        MultiSelectItem.prototype.onOptionClick = function (event) {
            this.onClick.emit({
                originalEvent: event,
                option: this.option
            });
        };
        MultiSelectItem.prototype.onOptionKeydown = function (event) {
            this.onKeydown.emit({
                originalEvent: event,
                option: this.option
            });
        };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectItem, [{
        type: core.Component,
        args: [{
                selector: 'p-multiSelectItem',
                template: "\n        <li class=\"p-multiselect-item\" (click)=\"onOptionClick($event)\" (keydown)=\"onOptionKeydown($event)\" [attr.aria-label]=\"label\" \n            [attr.tabindex]=\"disabled ? null : '0'\" [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'p-highlight': selected, 'p-disabled': disabled}\" pRipple>\n            <div class=\"p-checkbox p-component\">\n                <div class=\"p-checkbox-box\" [ngClass]=\"{'p-highlight': selected}\">\n                    <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check': selected}\"></span>\n                </div>\n            </div>\n            <span *ngIf=\"!template\">{{label}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return []; }, { onClick: [{
            type: core.Output
        }], onKeydown: [{
            type: core.Output
        }], option: [{
            type: core.Input
        }], selected: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], itemSize: [{
            type: core.Input
        }], template: [{
            type: core.Input
        }] }); })();
        return MultiSelectItem;
    }());
    MultiSelectItem.propDecorators = {
        option: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        label: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        template: [{ type: core.Input }],
        onClick: [{ type: core.Output }],
        onKeydown: [{ type: core.Output }]
    };
    var MultiSelect = /** @class */ (function () {
        function MultiSelect(el, renderer, cd, filterService) {
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
            this.onChange = new core.EventEmitter();
            this.onFilter = new core.EventEmitter();
            this.onFocus = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
            this.onPanelShow = new core.EventEmitter();
            this.onPanelHide = new core.EventEmitter();
            this.scrollHeight = '200px';
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
        }
        Object.defineProperty(MultiSelect.prototype, "defaultLabel", {
            get: function () {
                return this._defaultLabel;
            },
            set: function (val) {
                this._defaultLabel = val;
                this.updateLabel();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultiSelect.prototype, "placeholder", {
            get: function () {
                return this._placeholder;
            },
            set: function (val) {
                this._placeholder = val;
                this.updateLabel();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultiSelect.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (val) {
                this._options = val;
                this.updateLabel();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultiSelect.prototype, "filterValue", {
            get: function () {
                return this._filterValue;
            },
            set: function (val) {
                this._filterValue = val;
                this.activateFilter();
            },
            enumerable: false,
            configurable: true
        });
        MultiSelect.prototype.ngOnInit = function () {
            this.updateLabel();
        };
        MultiSelect.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    case 'group':
                        _this.groupTemplate = item.template;
                        break;
                    case 'selectedItems':
                        _this.selectedItemsTemplate = item.template;
                        break;
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        MultiSelect.prototype.ngAfterViewInit = function () {
            if (this.overlayVisible) {
                this.show();
            }
        };
        MultiSelect.prototype.ngAfterViewChecked = function () {
            if (this.filtered) {
                this.alignOverlay();
                this.filtered = false;
            }
        };
        MultiSelect.prototype.getOptionLabel = function (option) {
            return this.optionLabel ? utils.ObjectUtils.resolveFieldData(option, this.optionLabel) : (option.label != undefined ? option.label : option);
        };
        MultiSelect.prototype.getOptionValue = function (option) {
            return this.optionValue ? utils.ObjectUtils.resolveFieldData(option, this.optionValue) : (this.optionLabel || option.value === undefined ? option : option.value);
        };
        MultiSelect.prototype.getOptionGroupLabel = function (optionGroup) {
            return this.optionGroupLabel ? utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : (optionGroup.label != undefined ? optionGroup.label : optionGroup);
        };
        MultiSelect.prototype.getOptionGroupChildren = function (optionGroup) {
            return this.optionGroupChildren ? utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
        };
        MultiSelect.prototype.isOptionDisabled = function (option) {
            var disabled = this.optionDisabled ? utils.ObjectUtils.resolveFieldData(option, this.optionDisabled) : (option.disabled !== undefined ? option.disabled : false);
            return (disabled || (this.maxSelectionLimitReached && !this.isSelected(option)));
        };
        MultiSelect.prototype.writeValue = function (value) {
            this.value = value;
            this.updateLabel();
            this.updateFilledState();
            this.checkSelectionLimit();
            this.cd.markForCheck();
        };
        MultiSelect.prototype.checkSelectionLimit = function () {
            if (this.selectionLimit && (this.value && this.value.length === this.selectionLimit)) {
                this.maxSelectionLimitReached = true;
            }
            else {
                this.maxSelectionLimitReached = false;
            }
        };
        MultiSelect.prototype.updateFilledState = function () {
            this.filled = (this.value && this.value.length > 0);
        };
        MultiSelect.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        MultiSelect.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        MultiSelect.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
        MultiSelect.prototype.onOptionClick = function (event) {
            var option = event.option;
            if (this.isOptionDisabled(option)) {
                return;
            }
            var optionValue = this.getOptionValue(option);
            var selectionIndex = this.findSelectionIndex(optionValue);
            if (selectionIndex != -1) {
                this.value = this.value.filter(function (val, i) { return i != selectionIndex; });
                if (this.selectionLimit) {
                    this.maxSelectionLimitReached = false;
                }
            }
            else {
                if (!this.selectionLimit || (!this.value || this.value.length < this.selectionLimit)) {
                    this.value = __spread(this.value || [], [optionValue]);
                }
                this.checkSelectionLimit();
            }
            this.onModelChange(this.value);
            this.onChange.emit({ originalEvent: event.originalEvent, value: this.value, itemValue: optionValue });
            this.updateLabel();
            this.updateFilledState();
        };
        MultiSelect.prototype.isSelected = function (option) {
            return this.findSelectionIndex(this.getOptionValue(option)) != -1;
        };
        MultiSelect.prototype.findSelectionIndex = function (val) {
            var index = -1;
            if (this.value) {
                for (var i = 0; i < this.value.length; i++) {
                    if (utils.ObjectUtils.equals(this.value[i], val, this.dataKey)) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        Object.defineProperty(MultiSelect.prototype, "toggleAllDisabled", {
            get: function () {
                var e_1, _a;
                var optionsToRender = this.optionsToRender;
                if (!optionsToRender || optionsToRender.length === 0) {
                    return true;
                }
                else {
                    try {
                        for (var optionsToRender_1 = __values(optionsToRender), optionsToRender_1_1 = optionsToRender_1.next(); !optionsToRender_1_1.done; optionsToRender_1_1 = optionsToRender_1.next()) {
                            var option = optionsToRender_1_1.value;
                            if (!this.isOptionDisabled(option))
                                return false;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (optionsToRender_1_1 && !optionsToRender_1_1.done && (_a = optionsToRender_1.return)) _a.call(optionsToRender_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return true;
                }
            },
            enumerable: false,
            configurable: true
        });
        MultiSelect.prototype.toggleAll = function (event) {
            if (this.disabled || this.toggleAllDisabled || this.readonly) {
                return;
            }
            var allChecked = this.allChecked;
            if (allChecked)
                this.uncheckAll();
            else
                this.checkAll();
            this.onModelChange(this.value);
            this.onChange.emit({ originalEvent: event, value: this.value });
            this.updateFilledState();
            this.updateLabel();
            event.preventDefault();
        };
        MultiSelect.prototype.checkAll = function () {
            var _this = this;
            var optionsToRender = this.optionsToRender;
            var val = [];
            optionsToRender.forEach(function (opt) {
                if (!_this.group) {
                    var optionDisabled = _this.isOptionDisabled(opt);
                    if (!optionDisabled || (optionDisabled && _this.isSelected(opt))) {
                        val.push(_this.getOptionValue(opt));
                    }
                }
                else {
                    var subOptions = _this.getOptionGroupChildren(opt);
                    if (subOptions) {
                        subOptions.forEach(function (option) {
                            var optionDisabled = _this.isOptionDisabled(option);
                            if (!optionDisabled || (optionDisabled && _this.isSelected(option))) {
                                val.push(_this.getOptionValue(option));
                            }
                        });
                    }
                }
            });
            this.value = val;
        };
        MultiSelect.prototype.uncheckAll = function () {
            var _this = this;
            var optionsToRender = this.optionsToRender;
            var val = [];
            optionsToRender.forEach(function (opt) {
                if (!_this.group) {
                    var optionDisabled = _this.isOptionDisabled(opt);
                    if (optionDisabled && _this.isSelected(opt)) {
                        val.push(_this.getOptionValue(opt));
                    }
                }
                else {
                    if (opt.items) {
                        opt.items.forEach(function (option) {
                            var optionDisabled = _this.isOptionDisabled(option);
                            if (optionDisabled && _this.isSelected(option)) {
                                val.push(_this.getOptionValue(option));
                            }
                        });
                    }
                }
            });
            this.value = val;
        };
        MultiSelect.prototype.show = function () {
            if (!this.overlayVisible) {
                this.overlayVisible = true;
            }
        };
        MultiSelect.prototype.onOverlayAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    this.overlay = event.element;
                    this.appendOverlay();
                    if (this.autoZIndex) {
                        this.overlay.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
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
        };
        MultiSelect.prototype.appendOverlay = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.overlay);
                else
                    dom.DomHandler.appendChild(this.overlay, this.appendTo);
                if (!this.overlay.style.minWidth) {
                    this.overlay.style.minWidth = dom.DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
                }
            }
        };
        MultiSelect.prototype.restoreOverlayAppend = function () {
            if (this.overlay && this.appendTo) {
                this.el.nativeElement.appendChild(this.overlay);
            }
        };
        MultiSelect.prototype.alignOverlay = function () {
            if (this.overlay) {
                if (this.appendTo)
                    dom.DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
                else
                    dom.DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
            }
        };
        MultiSelect.prototype.hide = function () {
            this.overlayVisible = false;
            this.unbindDocumentClickListener();
            if (this.resetFilterOnHide) {
                this.filterInputChild.nativeElement.value = '';
                this._filterValue = null;
                this._filteredOptions = null;
            }
            this.onPanelHide.emit();
            this.cd.markForCheck();
        };
        MultiSelect.prototype.close = function (event) {
            this.hide();
            event.preventDefault();
            event.stopPropagation();
        };
        MultiSelect.prototype.onMouseclick = function (event, input) {
            if (this.disabled || this.readonly || event.target.isSameNode(this.accessibleViewChild.nativeElement)) {
                return;
            }
            this.onClick.emit(event);
            if (!this.isOverlayClick(event) && !dom.DomHandler.hasClass(event.target, 'p-multiselect-token-icon')) {
                if (this.overlayVisible) {
                    this.hide();
                }
                else {
                    input.focus();
                    this.show();
                }
            }
        };
        MultiSelect.prototype.removeChip = function (chip, event) {
            var _this = this;
            this.value = this.value.filter(function (val) { return !utils.ObjectUtils.equals(val, chip, _this.dataKey); });
            this.onModelChange(this.value);
            this.onChange.emit({ originalEvent: event, value: this.value });
            this.updateLabel();
            this.updateFilledState();
        };
        MultiSelect.prototype.isOverlayClick = function (event) {
            var targetNode = event.target;
            return this.overlay ? (this.overlay.isSameNode(targetNode) || this.overlay.contains(targetNode)) : false;
        };
        MultiSelect.prototype.isOutsideClicked = function (event) {
            return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.isOverlayClick(event));
        };
        MultiSelect.prototype.onInputFocus = function (event) {
            this.focus = true;
            this.onFocus.emit({ originalEvent: event });
        };
        MultiSelect.prototype.onInputBlur = function (event) {
            this.focus = false;
            this.onBlur.emit({ originalEvent: event });
            if (!this.preventModelTouched) {
                this.onModelTouched();
            }
            this.preventModelTouched = false;
        };
        MultiSelect.prototype.onOptionKeydown = function (event) {
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
        };
        MultiSelect.prototype.findNextItem = function (item) {
            var nextItem = item.nextElementSibling;
            if (nextItem)
                return dom.DomHandler.hasClass(nextItem.children[0], 'p-disabled') || dom.DomHandler.isHidden(nextItem.children[0]) || dom.DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem.children[0];
            else
                return null;
        };
        MultiSelect.prototype.findPrevItem = function (item) {
            var prevItem = item.previousElementSibling;
            if (prevItem)
                return dom.DomHandler.hasClass(prevItem.children[0], 'p-disabled') || dom.DomHandler.isHidden(prevItem.children[0]) || dom.DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem.children[0];
            else
                return null;
        };
        MultiSelect.prototype.onKeydown = function (event) {
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
        };
        MultiSelect.prototype.updateLabel = function () {
            if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
                var label = '';
                for (var i = 0; i < this.value.length; i++) {
                    var itemLabel = this.findLabelByValue(this.value[i]);
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
                    var pattern = /{(.*?)}/;
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
        };
        MultiSelect.prototype.findLabelByValue = function (val) {
            if (this.group) {
                var label = null;
                for (var i = 0; i < this.options.length; i++) {
                    var subOptions = this.getOptionGroupChildren(this.options[i]);
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
        };
        MultiSelect.prototype.searchLabelByValue = function (val, options) {
            var label = null;
            for (var i = 0; i < options.length; i++) {
                var option = options[i];
                var optionValue = this.getOptionValue(option);
                if (val == null && optionValue == null || utils.ObjectUtils.equals(val, optionValue, this.dataKey)) {
                    label = this.getOptionLabel(option);
                    break;
                }
            }
            return label;
        };
        Object.defineProperty(MultiSelect.prototype, "allChecked", {
            get: function () {
                var e_2, _a, e_3, _b;
                var optionsToRender = this.optionsToRender;
                if (!optionsToRender || optionsToRender.length === 0) {
                    return false;
                }
                else {
                    var selectedDisabledItemsLength = 0;
                    var unselectedDisabledItemsLength = 0;
                    var selectedEnabledItemsLength = 0;
                    var visibleOptionsLength = this.group ? 0 : this.optionsToRender.length;
                    try {
                        for (var optionsToRender_2 = __values(optionsToRender), optionsToRender_2_1 = optionsToRender_2.next(); !optionsToRender_2_1.done; optionsToRender_2_1 = optionsToRender_2.next()) {
                            var option = optionsToRender_2_1.value;
                            if (!this.group) {
                                var disabled = this.isOptionDisabled(option);
                                var selected = this.isSelected(option);
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
                                try {
                                    for (var _c = (e_3 = void 0, __values(this.getOptionGroupChildren(option))), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        var opt = _d.value;
                                        var disabled = this.isOptionDisabled(opt);
                                        var selected = this.isSelected(opt);
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
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (optionsToRender_2_1 && !optionsToRender_2_1.done && (_a = optionsToRender_2.return)) _a.call(optionsToRender_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return (visibleOptionsLength === selectedDisabledItemsLength
                        || visibleOptionsLength === selectedEnabledItemsLength
                        || selectedEnabledItemsLength && visibleOptionsLength === (selectedEnabledItemsLength + unselectedDisabledItemsLength + selectedDisabledItemsLength));
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultiSelect.prototype, "optionsToRender", {
            get: function () {
                return this._filteredOptions || this.options;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MultiSelect.prototype, "emptyOptions", {
            get: function () {
                var optionsToRender = this.optionsToRender;
                return !optionsToRender || optionsToRender.length === 0;
            },
            enumerable: false,
            configurable: true
        });
        MultiSelect.prototype.hasFilter = function () {
            return this._filterValue && this._filterValue.trim().length > 0;
        };
        MultiSelect.prototype.onFilterInputChange = function (event) {
            this._filterValue = event.target.value;
            this.activateFilter();
            this.onFilter.emit({ originalEvent: event, filter: this._filterValue });
        };
        MultiSelect.prototype.activateFilter = function () {
            var e_4, _a, _b;
            if (this.hasFilter() && this._options) {
                var searchFields = (this.filterBy || this.optionLabel || 'label').split(',');
                if (this.group) {
                    var searchFields_1 = (this.optionLabel || 'label').split(',');
                    var filteredGroups = [];
                    try {
                        for (var _c = __values(this.options), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var optgroup = _d.value;
                            var filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields_1, this.filterValue, this.filterMatchMode, this.filterLocale);
                            if (filteredSubOptions && filteredSubOptions.length) {
                                filteredGroups.push(Object.assign(Object.assign({}, optgroup), (_b = {}, _b[this.optionGroupChildren] = filteredSubOptions, _b)));
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_4) throw e_4.error; }
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
        };
        MultiSelect.prototype.onHeaderCheckboxFocus = function () {
            this.headerCheckboxFocus = true;
        };
        MultiSelect.prototype.onHeaderCheckboxBlur = function () {
            this.headerCheckboxFocus = false;
        };
        MultiSelect.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, 'click', function (event) {
                    if (_this.isOutsideClicked(event)) {
                        _this.hide();
                    }
                });
            }
        };
        MultiSelect.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        MultiSelect.prototype.bindDocumentResizeListener = function () {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        };
        MultiSelect.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        MultiSelect.prototype.onWindowResize = function () {
            if (!dom.DomHandler.isAndroid()) {
                this.hide();
            }
        };
        MultiSelect.prototype.bindScrollListener = function () {
            var _this = this;
            if (!this.scrollHandler) {
                this.scrollHandler = new dom.ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, function () {
                    if (_this.overlayVisible) {
                        _this.hide();
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        };
        MultiSelect.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        MultiSelect.prototype.onOverlayHide = function () {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
            this.onModelTouched();
        };
        MultiSelect.prototype.ngOnDestroy = function () {
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.restoreOverlayAppend();
            this.onOverlayHide();
        };
MultiSelect.ɵfac = function MultiSelect_Factory(t) { return new (t || MultiSelect)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FilterService)); };
MultiSelect.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiSelect, selectors: [["p-multiSelect"]], contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
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
        var _r73 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵprojectionDef(_c14);
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function MultiSelect_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r73); var _r1 = ɵngcc0.ɵɵreference(4); return ctx.onMouseclick($event, _r1); });
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
            animations.trigger('overlayAnimation', [
                animations.transition(':enter', [
                    animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animations.animate('{{showTransitionParams}}')
                ]),
                animations.transition(':leave', [
                    animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelect, [{
        type: core.Component,
        args: [{
                selector: 'p-multiSelect',
                template: "\n        <div #container [ngClass]=\"{'p-multiselect p-component':true,\n            'p-multiselect-open':overlayVisible,\n            'p-multiselect-chip': display === 'chip',\n            'p-focus':focus,\n            'p-disabled': disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            (click)=\"onMouseclick($event,in)\">\n            <div class=\"p-hidden-accessible\">\n                <input #in type=\"text\" readonly=\"readonly\" [attr.id]=\"inputId\" [attr.name]=\"name\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\"\n                       [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event)\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\"\n                       [attr.aria-labelledby]=\"ariaLabelledBy\" role=\"listbox\">\n            </div>\n            <div class=\"p-multiselect-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <div class=\"p-multiselect-label\" [ngClass]=\"{'p-placeholder': valuesAsString === (defaultLabel || placeholder), 'p-multiselect-label-empty': ((valuesAsString == null || valuesAsString.length === 0) && (placeholder == null || placeholder.length === 0))}\">\n                    <ng-container *ngIf=\"!selectedItemsTemplate\">\n                        <ng-container *ngIf=\"display === 'comma'\">{{valuesAsString || 'empty'}}</ng-container>\n                        <ng-container *ngIf=\"display === 'chip'\">\n                            <div #token *ngFor=\"let item of value; let i = index;\" class=\"p-multiselect-token\">\n                                <span class=\"p-multiselect-token-label\">{{findLabelByValue(item)}}</span>\n                                <span *ngIf=\"!disabled\" class=\"p-multiselect-token-icon pi pi-times-circle\" (click)=\"removeChip(item, $event)\"></span>\n                            </div>\n                            <ng-container *ngIf=\"!value || value.length === 0\">{{placeholder || defaultLabel || 'empty'}}</ng-container>\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemsTemplate; context: {$implicit: value}\"></ng-container>\n                </div>\n            </div>\n            <div [ngClass]=\"{'p-multiselect-trigger':true}\">\n                <span class=\"p-multiselect-trigger-icon\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"['p-multiselect-panel p-component']\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\"\n                [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\" (keydown)=\"onKeydown($event)\">\n                <div class=\"p-multiselect-header\" *ngIf=\"showHeader\">\n                    <ng-content select=\"p-header\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                    <div class=\"p-checkbox p-component\" *ngIf=\"showToggleAll && !selectionLimit\" [ngClass]=\"{'p-checkbox-disabled': disabled || toggleAllDisabled}\">\n                        <div class=\"p-hidden-accessible\">\n                            <input type=\"checkbox\" readonly=\"readonly\" [checked]=\"allChecked\" (focus)=\"onHeaderCheckboxFocus()\" (blur)=\"onHeaderCheckboxBlur()\" (keydown.space)=\"toggleAll($event)\" [attr.disabled]=\"disabled || toggleAllDisabled\">\n                        </div>\n                        <div class=\"p-checkbox-box\" role=\"checkbox\" [attr.aria-checked]=\"allChecked\" [ngClass]=\"{'p-highlight':allChecked, 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled}\" (click)=\"toggleAll($event)\">\n                            <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check':allChecked}\"></span>\n                        </div>\n                    </div>\n                    <div class=\"p-multiselect-filter-container\" *ngIf=\"filter\">\n                        <input #filterInput type=\"text\" role=\"textbox\" [value]=\"filterValue||''\" (input)=\"onFilterInputChange($event)\" class=\"p-multiselect-filter p-inputtext p-component\" [disabled]=\"disabled\" [attr.placeholder]=\"filterPlaceHolder\" [attr.aria-label]=\"ariaFilterLabel\">\n                        <span class=\"p-multiselect-filter-icon pi pi-search\"></span>\n                    </div>\n                    <button class=\"p-multiselect-close p-link\" type=\"button\" (click)=\"close($event)\" pRipple>\n                        <span class=\"p-multiselect-close-icon pi pi-times\"></span>\n                    </button>\n                </div>\n                <div class=\"p-multiselect-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"p-multiselect-items p-component\" [ngClass]=\"{'p-multiselect-virtualscroll': virtualScroll}\" role=\"listbox\" aria-multiselectable=\"true\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToRender\">\n                                <li class=\"p-multiselect-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{getOptionGroupLabel(optgroup)||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: getOptionGroupChildren(optgroup)}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToRender}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-optionsToDisplay let-selectedOption=\"selectedOption\">\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"optionsToDisplay\">\n                                    <p-multiSelectItem [option]=\"option\" [selected]=\"isSelected(option)\" [label]=\"getOptionLabel(option)\" [disabled]=\"isOptionDisabled(option)\" (onClick)=\"onOptionClick($event)\" (onKeydown)=\"onOptionKeydown($event)\"\n                                            [template]=\"itemTemplate\"></p-multiSelectItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && !emptyOptions\">\n                                    <ng-container *cdkVirtualFor=\"let option of optionsToDisplay; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                        <p-multiSelectItem [option]=\"option\" [selected]=\"isSelected(option)\" [label]=\"getOptionLabel(option)\" [disabled]=\"isOptionDisabled(option)\" (onClick)=\"onOptionClick($event)\" (onKeydown)=\"onOptionKeydown($event)\"\n                                            [template]=\"itemTemplate\" [itemSize]=\"itemSize\"></p-multiSelectItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                            <li *ngIf=\"emptyOptions\" class=\"p-multiselect-empty-message\">{{emptyFilterMessage}}</li>\n                        </ng-template>\n                    </ul>\n                </div>\n                <div class=\"p-multiselect-footer\" *ngIf=\"footerFacet || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('overlayAnimation', [
                        animations.transition(':enter', [
                            animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animations.animate('{{showTransitionParams}}')
                        ]),
                        animations.transition(':leave', [
                            animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                        ])
                    ])
                ],
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focus || overlayVisible'
                },
                providers: [MULTISELECT_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-multiselect{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-multiselect-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-multiselect-label-container{cursor:pointer;flex:1 1 auto;overflow:hidden}.p-multiselect-label{cursor:pointer;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{align-items:center;cursor:default;display:inline-flex;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{list-style-type:none;margin:0;padding:0}.p-multiselect-item{align-items:center;cursor:pointer;display:flex;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-multiselect-header{align-items:center;display:flex;justify-content:space-between}.p-multiselect-filter-container{flex:1 1 auto;position:relative}.p-multiselect-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{align-items:center;display:flex;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.FilterService }]; }, { filter: [{
            type: core.Input
        }], displaySelectedLabel: [{
            type: core.Input
        }], maxSelectedLabels: [{
            type: core.Input
        }], selectedItemsLabel: [{
            type: core.Input
        }], showToggleAll: [{
            type: core.Input
        }], emptyFilterMessage: [{
            type: core.Input
        }], resetFilterOnHide: [{
            type: core.Input
        }], dropdownIcon: [{
            type: core.Input
        }], optionGroupChildren: [{
            type: core.Input
        }], showHeader: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], filterMatchMode: [{
            type: core.Input
        }], tooltip: [{
            type: core.Input
        }], tooltipPosition: [{
            type: core.Input
        }], tooltipPositionStyle: [{
            type: core.Input
        }], autofocusFilter: [{
            type: core.Input
        }], display: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], onFilter: [{
            type: core.Output
        }], onFocus: [{
            type: core.Output
        }], onBlur: [{
            type: core.Output
        }], onClick: [{
            type: core.Output
        }], onPanelShow: [{
            type: core.Output
        }], onPanelHide: [{
            type: core.Output
        }], scrollHeight: [{
            type: core.Input
        }], defaultLabel: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], options: [{
            type: core.Input
        }], filterValue: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], overlayVisible: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], panelStyle: [{
            type: core.Input
        }], panelStyleClass: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], group: [{
            type: core.Input
        }], filterPlaceHolder: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], dataKey: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], selectionLimit: [{
            type: core.Input
        }], optionLabel: [{
            type: core.Input
        }], optionValue: [{
            type: core.Input
        }], optionDisabled: [{
            type: core.Input
        }], optionGroupLabel: [{
            type: core.Input
        }], filterBy: [{
            type: core.Input
        }], virtualScroll: [{
            type: core.Input
        }], itemSize: [{
            type: core.Input
        }], ariaFilterLabel: [{
            type: core.Input
        }], tooltipStyleClass: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], filterInputChild: [{
            type: core.ViewChild,
            args: ['filterInput']
        }], accessibleViewChild: [{
            type: core.ViewChild,
            args: ['in']
        }], footerFacet: [{
            type: core.ContentChild,
            args: [api.Footer]
        }], headerFacet: [{
            type: core.ContentChild,
            args: [api.Header]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return MultiSelect;
    }());
    MultiSelect.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: api.FilterService }
    ]; };
    MultiSelect.propDecorators = {
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        panelStyle: [{ type: core.Input }],
        panelStyleClass: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        group: [{ type: core.Input }],
        filter: [{ type: core.Input }],
        filterPlaceHolder: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        overlayVisible: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        dataKey: [{ type: core.Input }],
        name: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        displaySelectedLabel: [{ type: core.Input }],
        maxSelectedLabels: [{ type: core.Input }],
        selectionLimit: [{ type: core.Input }],
        selectedItemsLabel: [{ type: core.Input }],
        showToggleAll: [{ type: core.Input }],
        emptyFilterMessage: [{ type: core.Input }],
        resetFilterOnHide: [{ type: core.Input }],
        dropdownIcon: [{ type: core.Input }],
        optionLabel: [{ type: core.Input }],
        optionValue: [{ type: core.Input }],
        optionDisabled: [{ type: core.Input }],
        optionGroupLabel: [{ type: core.Input }],
        optionGroupChildren: [{ type: core.Input }],
        showHeader: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        virtualScroll: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        ariaFilterLabel: [{ type: core.Input }],
        filterMatchMode: [{ type: core.Input }],
        tooltip: [{ type: core.Input }],
        tooltipPosition: [{ type: core.Input }],
        tooltipPositionStyle: [{ type: core.Input }],
        tooltipStyleClass: [{ type: core.Input }],
        autofocusFilter: [{ type: core.Input }],
        display: [{ type: core.Input }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        filterInputChild: [{ type: core.ViewChild, args: ['filterInput',] }],
        accessibleViewChild: [{ type: core.ViewChild, args: ['in',] }],
        footerFacet: [{ type: core.ContentChild, args: [api.Footer,] }],
        headerFacet: [{ type: core.ContentChild, args: [api.Header,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        onChange: [{ type: core.Output }],
        onFilter: [{ type: core.Output }],
        onFocus: [{ type: core.Output }],
        onBlur: [{ type: core.Output }],
        onClick: [{ type: core.Output }],
        onPanelShow: [{ type: core.Output }],
        onPanelHide: [{ type: core.Output }],
        scrollHeight: [{ type: core.Input }],
        defaultLabel: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        options: [{ type: core.Input }],
        filterValue: [{ type: core.Input }]
    };
    var MultiSelectModule = /** @class */ (function () {
        function MultiSelectModule() {
        }
MultiSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MultiSelectModule });
MultiSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MultiSelectModule_Factory(t) { return new (t || MultiSelectModule)(); }, imports: [[common.CommonModule, api.SharedModule, scrolling.ScrollingModule, tooltip.TooltipModule, ripple.RippleModule], ɵngcc3.SharedModule, ɵngcc5.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MultiSelectModule, { declarations: [MultiSelect, MultiSelectItem], imports: [ɵngcc2.CommonModule, ɵngcc3.SharedModule, ɵngcc5.ScrollingModule, ɵngcc4.TooltipModule, ɵngcc1.RippleModule], exports: [MultiSelect, ɵngcc3.SharedModule, ɵngcc5.ScrollingModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, api.SharedModule, scrolling.ScrollingModule, tooltip.TooltipModule, ripple.RippleModule],
                exports: [MultiSelect, api.SharedModule, scrolling.ScrollingModule],
                declarations: [MultiSelect, MultiSelectItem]
            }]
    }], function () { return []; }, null); })();
        return MultiSelectModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MULTISELECT_VALUE_ACCESSOR = MULTISELECT_VALUE_ACCESSOR;
    exports.MultiSelect = MultiSelect;
    exports.MultiSelectItem = MultiSelectItem;
    exports.MultiSelectModule = MultiSelectModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-multiselect.umd.js.map