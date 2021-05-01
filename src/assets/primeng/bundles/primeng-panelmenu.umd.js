(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/router'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('primeng/panelmenu', ['@angular/core','@angular/common','@angular/router','exports', '@angular/core', '@angular/animations', '@angular/common', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.ng.router,(global.primeng = global.primeng || {}, global.primeng.panelmenu = {}), global.ng.core, global.ng.animations, global.ng.common, global.ng.router));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, animations, common, router) { 
function PanelMenuSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} }
var _c0 = function (a0, a1) { return { "pi-angle-right": a0, "pi-angle-down": a1 }; };
function PanelMenuSub_ng_template_1_li_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !child_r1.expanded, child_r1.expanded));
} }
function PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
var _c1 = function (a0) { return { "p-disabled": a0 }; };
function PanelMenuSub_ng_template_1_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵlistener("click", function PanelMenuSub_ng_template_1_li_1_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_span_1_Template, 1, 4, "span", 10);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r10 = ɵngcc0.ɵɵreference(5);
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c1, child_r1.disabled));
    ɵngcc0.ɵɵattribute("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", !ctx_r4.item.expanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("target", child_r1.target)("title", child_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r10);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !child_r1.expanded, child_r1.expanded));
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
var _c2 = function () { return { exact: false }; };
function PanelMenuSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵlistener("click", function PanelMenuSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.handleClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_2_span_1_Template, 1, 4, "span", 10);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r23 = ɵngcc0.ɵɵreference(5);
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(20, _c2))("ngClass", ɵngcc0.ɵɵpureFunction1(21, _c1, child_r1.disabled))("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("tabindex", !ctx_r5.item.expanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("target", child_r1.target)("title", child_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r23);
} }
function PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-panelMenuSub", 20);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("item", child_r1)("expanded", child_r1.expanded)("transitionOptions", ctx_r6.transitionOptions);
} }
function PanelMenuSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 5);
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_Template, 6, 13, "a", 6);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_Template, 6, 23, "a", 7);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template, 1, 3, "p-panelMenuSub", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("p-hidden", child_r1.visible === false);
    ɵngcc0.ɵɵproperty("ngClass", child_r1.styleClass)("ngStyle", child_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function PanelMenuSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PanelMenuSub_ng_template_1_li_0_Template, 1, 0, "li", 2);
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_Template, 4, 7, "li", 3);
} if (rf & 2) {
    var child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
var _c3 = function (a1) { return { "p-submenu-list": true, "p-panelmenu-root-submenu": a1 }; };
var _c4 = function (a0) { return { transitionParams: a0, height: "*" }; };
var _c5 = function (a1) { return { value: "visible", params: a1 }; };
var _c6 = function (a0) { return { transitionParams: a0, height: "0" }; };
var _c7 = function (a1) { return { value: "hidden", params: a1 }; };
var _c8 = function (a0, a1) { return { "pi-chevron-right": a0, "pi-chevron-down": a1 }; };
function PanelMenu_ng_container_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !item_r1.expanded, item_r1.expanded));
} }
function PanelMenu_ng_container_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.icon);
} }
function PanelMenu_ng_container_1_a_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.label);
} }
function PanelMenu_ng_container_1_a_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function PanelMenu_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PanelMenu_ng_container_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var item_r1 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, item_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_a_3_span_1_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(2, PanelMenu_ng_container_1_a_3_span_2_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_3_span_3_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_3_ng_template_4_Template, 1, 1, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r10 = ɵngcc0.ɵɵreference(5);
    var item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵattribute("href", item_r1.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", item_r1.disabled ? null : "0")("id", item_r1.id)("target", item_r1.target)("title", item_r1.title)("aria-expanded", item_r1.expanded)("id", item_r1.id + "_header")("aria-controls", item_r1.id + "_content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r10);
} }
function PanelMenu_ng_container_1_a_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !item_r1.expanded, item_r1.expanded));
} }
function PanelMenu_ng_container_1_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.icon);
} }
function PanelMenu_ng_container_1_a_4_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.label);
} }
function PanelMenu_ng_container_1_a_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function PanelMenu_ng_container_1_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 16);
    ɵngcc0.ɵɵlistener("click", function PanelMenu_ng_container_1_a_4_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); var item_r1 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.handleClick($event, item_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_a_4_span_1_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(2, PanelMenu_ng_container_1_a_4_span_2_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_4_span_3_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_4_ng_template_4_Template, 1, 1, "ng-template", null, 17, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r23 = ɵngcc0.ɵɵreference(5);
    var item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", item_r1.routerLink)("queryParams", item_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(18, _c2))("fragment", item_r1.fragment)("queryParamsHandling", item_r1.queryParamsHandling)("preserveFragment", item_r1.preserveFragment)("skipLocationChange", item_r1.skipLocationChange)("replaceUrl", item_r1.replaceUrl)("state", item_r1.state);
    ɵngcc0.ɵɵattribute("target", item_r1.target)("title", item_r1.title)("id", item_r1.id)("tabindex", item_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r23);
} }
function PanelMenu_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵlistener("@rootItem.done", function PanelMenu_ng_container_1_div_5_Template_div_animation_rootItem_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.onToggleDone(); });
    ɵngcc0.ɵɵelementStart(1, "div", 19);
    ɵngcc0.ɵɵelement(2, "p-panelMenuSub", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@rootItem", item_r1.expanded ? ɵngcc0.ɵɵpureFunction1(9, _c5, ɵngcc0.ɵɵpureFunction1(7, _c4, ctx_r6.animating ? ctx_r6.transitionOptions : "0ms")) : ɵngcc0.ɵɵpureFunction1(13, _c7, ɵngcc0.ɵɵpureFunction1(11, _c6, ctx_r6.transitionOptions)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("id", item_r1.id + "_content")("aria-labelledby", item_r1.id + "_header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", item_r1)("expanded", true)("transitionOptions", ctx_r6.transitionOptions)("root", true);
} }
var _c9 = function (a0) { return { "p-hidden": a0 }; };
var _c10 = function (a1, a2) { return { "p-component p-panelmenu-header": true, "p-highlight": a1, "p-disabled": a2 }; };
function PanelMenu_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_3_Template, 6, 12, "a", 4);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_4_Template, 6, 19, "a", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, PanelMenu_ng_container_1_div_5_Template, 3, 15, "div", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c9, item_r1.visible === false));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(item_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(10, _c10, item_r1.expanded, item_r1.disabled))("ngStyle", item_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
} }
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

    var BasePanelMenuItem = /** @class */ (function () {
        function BasePanelMenuItem(ref) {
            this.ref = ref;
        }
        BasePanelMenuItem.prototype.handleClick = function (event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            item.expanded = !item.expanded;
            this.ref.detectChanges();
            if (!item.url) {
                event.preventDefault();
            }
            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }
        };
        return BasePanelMenuItem;
    }());
    var PanelMenuSub = /** @class */ (function (_super) {
        __extends(PanelMenuSub, _super);
        function PanelMenuSub(ref) {
            return _super.call(this, ref) || this;
        }
PanelMenuSub.ɵfac = function PanelMenuSub_Factory(t) { return new (t || PanelMenuSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PanelMenuSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PanelMenuSub, selectors: [["p-panelMenuSub"]], inputs: { item: "item", expanded: "expanded", transitionOptions: "transitionOptions", root: "root" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 13, consts: [["role", "tree", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 4, "ngIf"], ["class", "p-menuitem", 3, "ngClass", "p-hidden", "ngStyle", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator"], [1, "p-menuitem", 3, "ngClass", "ngStyle"], ["class", "p-menuitem-link", "role", "treeitem", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-menuitem-link", "role", "treeitem", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "item", "expanded", "transitionOptions", 4, "ngIf"], ["role", "treeitem", 1, "p-menuitem-link", 3, "ngClass", "click"], ["class", "p-panelmenu-icon pi pi-fw", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-panelmenu-icon", "pi", "pi-fw", 3, "ngClass"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], ["role", "treeitem", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "item", "expanded", "transitionOptions"]], template: function PanelMenuSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c3, ctx.root))("@submenu", ctx.expanded ? ɵngcc0.ɵɵpureFunction1(7, _c5, ɵngcc0.ɵɵpureFunction1(5, _c4, ctx.transitionOptions)) : ɵngcc0.ɵɵpureFunction1(11, _c7, ɵngcc0.ɵɵpureFunction1(9, _c6, ctx.transitionOptions)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, PanelMenuSub], encapsulation: 2, data: { animation: [
            animations.trigger('submenu', [
                animations.state('hidden', animations.style({
                    height: '0',
                    overflow: 'hidden'
                })),
                animations.state('visible', animations.style({
                    height: '*'
                })),
                animations.transition('visible <=> hidden', [animations.style({ overflow: 'hidden' }), animations.animate('{{transitionParams}}')]),
                animations.transition('void => *', animations.animate(0))
            ])
        ] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenuSub, [{
        type: core.Component,
        args: [{
                selector: 'p-panelMenuSub',
                template: "\n        <ul [ngClass]=\"{'p-submenu-list': true, 'p-panelmenu-root-submenu': root}\" [@submenu]=\"expanded ? {value: 'visible', params: {transitionParams: transitionOptions, height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}\" role=\"tree\">\n            <ng-template ngFor let-child [ngForOf]=\"item.items\">\n                <li *ngIf=\"child.separator\" class=\"p-menu-separator\" role=\"separator\">\n                <li *ngIf=\"!child.separator\" class=\"p-menuitem\" [ngClass]=\"child.styleClass\" [class.p-hidden]=\"child.visible === false\" [ngStyle]=\"child.style\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url\" class=\"p-menuitem-link\" [attr.tabindex]=\"!item.expanded ? null : child.disabled ? null : '0'\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'p-disabled':child.disabled}\" role=\"treeitem\" [attr.aria-expanded]=\"child.expanded\"\n                        (click)=\"handleClick($event,child)\" [attr.target]=\"child.target\" [attr.title]=\"child.title\">\n                        <span class=\"p-panelmenu-icon pi pi-fw\" [ngClass]=\"{'pi-angle-right':!child.expanded,'pi-angle-down':child.expanded}\" *ngIf=\"child.items\"></span>\n                        <span class=\"p-menuitem-icon\" [ngClass]=\"child.icon\" *ngIf=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\" *ngIf=\"child.escape !== false; else htmlLabel\">{{child.label}}</span>\n                        <ng-template #htmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"child.label\"></span></ng-template>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" class=\"p-menuitem-link\" \n                        [ngClass]=\"{'p-disabled':child.disabled}\" [attr.tabindex]=\"!item.expanded ? null : child.disabled ? null : '0'\" [attr.id]=\"child.id\" role=\"treeitem\" [attr.aria-expanded]=\"child.expanded\"\n                        (click)=\"handleClick($event,child)\" [attr.target]=\"child.target\" [attr.title]=\"child.title\"\n                        [fragment]=\"child.fragment\" [queryParamsHandling]=\"child.queryParamsHandling\" [preserveFragment]=\"child.preserveFragment\" [skipLocationChange]=\"child.skipLocationChange\" [replaceUrl]=\"child.replaceUrl\" [state]=\"child.state\">\n                        <span class=\"p-panelmenu-icon pi pi-fw\" [ngClass]=\"{'pi-angle-right':!child.expanded,'pi-angle-down':child.expanded}\" *ngIf=\"child.items\"></span>\n                        <span class=\"p-menuitem-icon\" [ngClass]=\"child.icon\" *ngIf=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\" *ngIf=\"child.escape !== false; else htmlRouteLabel\">{{child.label}}</span>\n                        <ng-template #htmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"child.label\"></span></ng-template>\n                    </a>\n                    <p-panelMenuSub [item]=\"child\" [expanded]=\"child.expanded\" [transitionOptions]=\"transitionOptions\" *ngIf=\"child.items\"></p-panelMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ",
                animations: [
                    animations.trigger('submenu', [
                        animations.state('hidden', animations.style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        animations.state('visible', animations.style({
                            height: '*'
                        })),
                        animations.transition('visible <=> hidden', [animations.style({ overflow: 'hidden' }), animations.animate('{{transitionParams}}')]),
                        animations.transition('void => *', animations.animate(0))
                    ])
                ],
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { item: [{
            type: core.Input
        }], expanded: [{
            type: core.Input
        }], transitionOptions: [{
            type: core.Input
        }], root: [{
            type: core.Input
        }] }); })();
        return PanelMenuSub;
    }(BasePanelMenuItem));
    PanelMenuSub.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    PanelMenuSub.propDecorators = {
        item: [{ type: core.Input }],
        expanded: [{ type: core.Input }],
        transitionOptions: [{ type: core.Input }],
        root: [{ type: core.Input }]
    };
    var PanelMenu = /** @class */ (function (_super) {
        __extends(PanelMenu, _super);
        function PanelMenu(ref) {
            var _this = _super.call(this, ref) || this;
            _this.multiple = true;
            _this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
            return _this;
        }
        PanelMenu.prototype.collapseAll = function () {
            var e_1, _a;
            try {
                for (var _b = __values(this.model), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.expanded) {
                        item.expanded = false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        PanelMenu.prototype.handleClick = function (event, item) {
            var e_2, _a;
            if (!this.multiple) {
                try {
                    for (var _b = __values(this.model), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var modelItem = _c.value;
                        if (item !== modelItem && modelItem.expanded) {
                            modelItem.expanded = false;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            this.animating = true;
            _super.prototype.handleClick.call(this, event, item);
        };
        PanelMenu.prototype.onToggleDone = function () {
            this.animating = false;
        };
PanelMenu.ɵfac = function PanelMenu_Factory(t) { return new (t || PanelMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PanelMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PanelMenu, selectors: [["p-panelMenu"]], inputs: { model: "model", style: "style", styleClass: "styleClass", multiple: "multiple", transitionOptions: "transitionOptions" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[3, "ngStyle", "ngClass"], [4, "ngFor", "ngForOf"], [1, "p-panelmenu-panel", 3, "ngClass"], [3, "ngClass", "ngStyle"], ["class", "p-panelmenu-header-link", 3, "click", 4, "ngIf"], ["class", "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["class", "p-toggleable-content", 4, "ngIf"], [1, "p-panelmenu-header-link", 3, "click"], ["class", "p-panelmenu-icon pi", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-panelmenu-icon", "pi", 3, "ngClass"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [1, "p-toggleable-content"], ["role", "region", 1, "p-panelmenu-content"], [3, "item", "expanded", "transitionOptions", "root"]], template: function PanelMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_Template, 6, 13, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, PanelMenuSub], styles: [".p-panelmenu .p-panelmenu-header-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;position:relative;text-decoration:none;user-select:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{list-style:none;margin:0;padding:0}.p-panelmenu .p-menuitem-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;text-decoration:none;user-select:none}.p-panelmenu .p-menuitem-text{line-height:1}"], encapsulation: 2, data: { animation: [
            animations.trigger('rootItem', [
                animations.state('hidden', animations.style({
                    height: '0',
                    overflow: 'hidden'
                })),
                animations.state('visible', animations.style({
                    height: '*'
                })),
                animations.transition('visible <=> hidden', [animations.style({ overflow: 'hidden' }), animations.animate('{{transitionParams}}')]),
                animations.transition('void => *', animations.animate(0))
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenu, [{
        type: core.Component,
        args: [{
                selector: 'p-panelMenu',
                template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'p-panelmenu p-component'\">\n            <ng-container *ngFor=\"let item of model;let f=first;let l=last;\">\n                <div class=\"p-panelmenu-panel\" [ngClass]=\"{'p-hidden': item.visible === false}\">\n                    <div [ngClass]=\"{'p-component p-panelmenu-header':true, 'p-highlight':item.expanded,'p-disabled':item.disabled}\" [class]=\"item.styleClass\" [ngStyle]=\"item.style\">\n                        <a *ngIf=\"!item.routerLink\" [attr.href]=\"item.url\" (click)=\"handleClick($event,item)\" [attr.tabindex]=\"item.disabled ? null : '0'\" [attr.id]=\"item.id\"\n                           [attr.target]=\"item.target\" [attr.title]=\"item.title\" class=\"p-panelmenu-header-link\" [attr.aria-expanded]=\"item.expanded\" [attr.id]=\"item.id + '_header'\" [attr.aria-controls]=\"item.id +'_content'\">\n                            <span *ngIf=\"item.items\" class=\"p-panelmenu-icon pi\" [ngClass]=\"{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}\"></span>\n                            <span class=\"p-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                            <span class=\"p-menuitem-text\" *ngIf=\"item.escape !== false; else htmlLabel\">{{item.label}}</span>\n                            <ng-template #htmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"item.label\"></span></ng-template>\n                        </a>\n                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\"\n                           (click)=\"handleClick($event,item)\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" class=\"p-panelmenu-header-link\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.disabled ? null : '0'\"\n                           [fragment]=\"item.fragment\" [queryParamsHandling]=\"item.queryParamsHandling\" [preserveFragment]=\"item.preserveFragment\" [skipLocationChange]=\"item.skipLocationChange\" [replaceUrl]=\"item.replaceUrl\" [state]=\"item.state\">\n                            <span *ngIf=\"item.items\" class=\"p-panelmenu-icon pi\" [ngClass]=\"{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}\"></span>\n                            <span class=\"p-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                            <span class=\"p-menuitem-text\" *ngIf=\"item.escape !== false; else htmlRouteLabel\">{{item.label}}</span>\n                            <ng-template #htmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"item.label\"></span></ng-template>\n                        </a>\n                    </div>\n                    <div *ngIf=\"item.items\" class=\"p-toggleable-content\" [@rootItem]=\"item.expanded ? {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}\"  (@rootItem.done)=\"onToggleDone()\">\n                        <div class=\"p-panelmenu-content\" role=\"region\" [attr.id]=\"item.id +'_content' \" [attr.aria-labelledby]=\"item.id +'_header'\">\n                            <p-panelMenuSub [item]=\"item\" [expanded]=\"true\" [transitionOptions]=\"transitionOptions\" [root]=\"true\"></p-panelMenuSub>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    ",
                animations: [
                    animations.trigger('rootItem', [
                        animations.state('hidden', animations.style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        animations.state('visible', animations.style({
                            height: '*'
                        })),
                        animations.transition('visible <=> hidden', [animations.style({ overflow: 'hidden' }), animations.animate('{{transitionParams}}')]),
                        animations.transition('void => *', animations.animate(0))
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-panelmenu .p-panelmenu-header-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;position:relative;text-decoration:none;user-select:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{list-style:none;margin:0;padding:0}.p-panelmenu .p-menuitem-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;text-decoration:none;user-select:none}.p-panelmenu .p-menuitem-text{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { model: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], multiple: [{
            type: core.Input
        }], transitionOptions: [{
            type: core.Input
        }] }); })();
        return PanelMenu;
    }(BasePanelMenuItem));
    PanelMenu.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    PanelMenu.propDecorators = {
        model: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        multiple: [{ type: core.Input }],
        transitionOptions: [{ type: core.Input }]
    };
    var PanelMenuModule = /** @class */ (function () {
        function PanelMenuModule() {
        }
PanelMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PanelMenuModule });
PanelMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PanelMenuModule_Factory(t) { return new (t || PanelMenuModule)(); }, imports: [[common.CommonModule, router.RouterModule], ɵngcc2.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PanelMenuModule, { declarations: [PanelMenu, PanelMenuSub], imports: [ɵngcc1.CommonModule, ɵngcc2.RouterModule], exports: [PanelMenu, ɵngcc2.RouterModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenuModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, router.RouterModule],
                exports: [PanelMenu, router.RouterModule],
                declarations: [PanelMenu, PanelMenuSub]
            }]
    }], function () { return []; }, null); })();
        return PanelMenuModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BasePanelMenuItem = BasePanelMenuItem;
    exports.PanelMenu = PanelMenu;
    exports.PanelMenuModule = PanelMenuModule;
    exports.PanelMenuSub = PanelMenuSub;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-panelmenu.umd.js.map