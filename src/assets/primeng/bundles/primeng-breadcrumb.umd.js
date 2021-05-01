(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/router'),exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('primeng/breadcrumb', ['@angular/core','@angular/common','@angular/router','exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.ng.router,(global.primeng = global.primeng || {}, global.primeng.breadcrumb = {}), global.ng.core, global.ng.common, global.ng.router));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, common, router) { 
function Breadcrumb_li_2_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r5.home.icon || "pi pi-home");
} }
function Breadcrumb_li_2_a_1_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.home.label);
} }
function Breadcrumb_li_2_a_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r9.home.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Breadcrumb_li_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_1_ng_container_2_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 12, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r8 = ɵngcc0.ɵɵreference(3);
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.home.escape !== false)("ngIfElse", _r8);
} }
function Breadcrumb_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function Breadcrumb_li_2_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.itemClick($event, ctx_r10.home); });
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_1_span_1_Template, 1, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_1_ng_container_2_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("href", ctx_r3.home.url ? ctx_r3.home.url : null, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵattribute("target", ctx_r3.home.target)("title", ctx_r3.home.title)("id", ctx_r3.home.id)("tabindex", ctx_r3.home.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.home.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.home.label);
} }
function Breadcrumb_li_2_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r12.home.icon || "pi pi-home");
} }
function Breadcrumb_li_2_a_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r14.home.label);
} }
function Breadcrumb_li_2_a_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var ctx_r16 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r16.home.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Breadcrumb_li_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_2_ng_container_2_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 16, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r15 = ɵngcc0.ɵɵreference(3);
    var ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r13.home.escape !== false)("ngIfElse", _r15);
} }
var _c0 = function () { return { exact: false }; };
function Breadcrumb_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 15);
    ɵngcc0.ɵɵlistener("click", function Breadcrumb_li_2_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); var ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.itemClick($event, ctx_r17.home); });
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_2_span_1_Template, 1, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_2_ng_container_2_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("routerLink", ctx_r4.home.routerLink)("queryParams", ctx_r4.home.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r4.home.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(16, _c0))("fragment", ctx_r4.home.fragment)("queryParamsHandling", ctx_r4.home.queryParamsHandling)("preserveFragment", ctx_r4.home.preserveFragment)("skipLocationChange", ctx_r4.home.skipLocationChange)("replaceUrl", ctx_r4.home.replaceUrl)("state", ctx_r4.home.state);
    ɵngcc0.ɵɵattribute("target", ctx_r4.home.target)("title", ctx_r4.home.title)("id", ctx_r4.home.id)("tabindex", ctx_r4.home.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.home.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.home.label);
} }
var _c1 = function (a1) { return { "p-breadcrumb-home": true, "p-disabled": a1 }; };
function Breadcrumb_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_li_2_a_1_Template, 3, 7, "a", 5);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_a_2_Template, 3, 17, "a", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.home.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c1, ctx_r0.home.disabled))("ngStyle", ctx_r0.home.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.home.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.home.routerLink);
} }
function Breadcrumb_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 17);
} }
function Breadcrumb_ng_template_4_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} if (rf & 2) {
    var item_r19 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r19.icon);
} }
function Breadcrumb_ng_template_4_a_1_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r19 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r19.label);
} }
function Breadcrumb_ng_template_4_a_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var item_r19 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r19.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Breadcrumb_ng_template_4_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_2_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 20, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r28 = ɵngcc0.ɵɵreference(3);
    var item_r19 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.escape !== false)("ngIfElse", _r28);
} }
function Breadcrumb_ng_template_4_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function Breadcrumb_ng_template_4_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var item_r19 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.itemClick($event, item_r19); });
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_span_1_Template, 1, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_1_ng_container_2_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r19 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵattribute("href", item_r19.url ? item_r19.url : null, ɵngcc0.ɵɵsanitizeUrl)("target", item_r19.target)("title", item_r19.title)("id", item_r19.id)("tabindex", item_r19.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.label);
} }
function Breadcrumb_ng_template_4_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} if (rf & 2) {
    var item_r19 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r19.icon);
} }
function Breadcrumb_ng_template_4_a_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r19 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r19.label);
} }
function Breadcrumb_ng_template_4_a_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var item_r19 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r19.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Breadcrumb_ng_template_4_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_2_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 21, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r41 = ɵngcc0.ɵɵreference(3);
    var item_r19 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.escape !== false)("ngIfElse", _r41);
} }
function Breadcrumb_ng_template_4_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r47 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 15);
    ɵngcc0.ɵɵlistener("click", function Breadcrumb_ng_template_4_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r47); var item_r19 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r46 = ɵngcc0.ɵɵnextContext(); return ctx_r46.itemClick($event, item_r19); });
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_span_1_Template, 1, 1, "span", 8);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_2_ng_container_2_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r19 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", item_r19.routerLink)("queryParams", item_r19.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r19.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(16, _c0))("fragment", item_r19.fragment)("queryParamsHandling", item_r19.queryParamsHandling)("preserveFragment", item_r19.preserveFragment)("skipLocationChange", item_r19.skipLocationChange)("replaceUrl", item_r19.replaceUrl)("state", item_r19.state);
    ɵngcc0.ɵɵattribute("target", item_r19.target)("title", item_r19.title)("id", item_r19.id)("tabindex", item_r19.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.label);
} }
function Breadcrumb_ng_template_4_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 17);
} }
var _c2 = function (a0) { return { "p-disabled": a0 }; };
function Breadcrumb_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 0);
    ɵngcc0.ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_Template, 3, 7, "a", 18);
    ɵngcc0.ɵɵtemplate(2, Breadcrumb_ng_template_4_a_2_Template, 3, 17, "a", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, Breadcrumb_ng_template_4_li_3_Template, 1, 0, "li", 2);
} if (rf & 2) {
    var item_r19 = ctx.$implicit;
    var end_r20 = ctx.last;
    ɵngcc0.ɵɵclassMap(item_r19.styleClass);
    ɵngcc0.ɵɵproperty("ngStyle", item_r19.style)("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c2, item_r19.disabled));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r19.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r19.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !end_r20);
} }
'use strict';

    var Breadcrumb = /** @class */ (function () {
        function Breadcrumb() {
            this.onItemClick = new core.EventEmitter();
        }
        Breadcrumb.prototype.itemClick = function (event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            if (!item.url) {
                event.preventDefault();
            }
            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }
            this.onItemClick.emit({
                originalEvent: event,
                item: item
            });
        };
        Breadcrumb.prototype.onHomeClick = function (event) {
            if (this.home) {
                this.itemClick(event, this.home);
            }
        };
Breadcrumb.ɵfac = function Breadcrumb_Factory(t) { return new (t || Breadcrumb)(); };
Breadcrumb.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Breadcrumb, selectors: [["p-breadcrumb"]], inputs: { model: "model", style: "style", styleClass: "styleClass", home: "home" }, outputs: { onItemClick: "onItemClick" }, decls: 5, vars: 7, consts: [[3, "ngStyle", "ngClass"], [3, "class", "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-breadcrumb-chevron pi pi-chevron-right", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [3, "ngClass", "ngStyle"], ["class", "p-menuitem-link", 3, "href", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "href", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlHomeLabel", ""], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlHomeRouteLabel", ""], [1, "p-breadcrumb-chevron", "pi", "pi-chevron-right"], ["class", "p-menuitem-link", 3, "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "click"], ["htmlLabel", ""], ["htmlRouteLabel", ""]], template: function Breadcrumb_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul");
        ɵngcc0.ɵɵtemplate(2, Breadcrumb_li_2_Template, 3, 8, "li", 1);
        ɵngcc0.ɵɵtemplate(3, Breadcrumb_li_3_Template, 1, 0, "li", 2);
        ɵngcc0.ɵɵtemplate(4, Breadcrumb_ng_template_4_Template, 4, 9, "ng-template", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-breadcrumb p-component");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.home);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.model && ctx.home);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive], styles: [".p-breadcrumb ul{align-items:center;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Breadcrumb, [{
        type: core.Component,
        args: [{
                selector: 'p-breadcrumb',
                template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'p-breadcrumb p-component'\">\n            <ul>\n                <li [class]=\"home.styleClass\" [ngClass]=\"{'p-breadcrumb-home': true, 'p-disabled':home.disabled}\" [ngStyle]=\"home.style\" *ngIf=\"home\">\n                    <a *ngIf=\"!home.routerLink\" [href]=\"home.url ? home.url : null\" class=\"p-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\" [attr.tabindex]=\"home.disabled ? null : '0'\">\n                        <span *ngIf=\"home.icon\" class=\"p-menuitem-icon\" [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                        <ng-container *ngIf=\"home.label\">\n                            <span *ngIf=\"home.escape !== false; else htmlHomeLabel\" class=\"p-menuitem-text\">{{home.label}}</span>\n                            <ng-template #htmlHomeLabel><span class=\"p-menuitem-text\" [innerHTML]=\"home.label\"></span></ng-template>\n                        </ng-container>\n                    </a>\n                    <a *ngIf=\"home.routerLink\" [routerLink]=\"home.routerLink\" [queryParams]=\"home.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" [routerLinkActiveOptions]=\"home.routerLinkActiveOptions||{exact:false}\" class=\"p-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\" [attr.tabindex]=\"home.disabled ? null : '0'\"\n                        [fragment]=\"home.fragment\" [queryParamsHandling]=\"home.queryParamsHandling\" [preserveFragment]=\"home.preserveFragment\" [skipLocationChange]=\"home.skipLocationChange\" [replaceUrl]=\"home.replaceUrl\" [state]=\"home.state\">\n                        <span *ngIf=\"home.icon\" class=\"p-menuitem-icon\" [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                        <ng-container *ngIf=\"home.label\">\n                            <span *ngIf=\"home.escape !== false; else htmlHomeRouteLabel\" class=\"p-menuitem-text\">{{home.label}}</span>\n                            <ng-template #htmlHomeRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"home.label\"></span></ng-template>\n                        </ng-container>\n                    </a>\n                </li>\n                <li class=\"p-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"model&&home\"></li>\n                <ng-template ngFor let-item let-end=\"last\" [ngForOf]=\"model\">\n                    <li [class]=\"item.styleClass\" [ngStyle]=\"item.style\" [ngClass]=\"{'p-disabled':item.disabled}\">\n                        <a *ngIf=\"!item.routerLink\" [attr.href]=\"item.url ? item.url : null\" class=\"p-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.disabled ? null : '0'\">\n                            <span *ngIf=\"item.icon\" class=\"p-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <ng-container *ngIf=\"item.label\">\n                                <span *ngIf=\"item.escape !== false; else htmlLabel\" class=\"p-menuitem-text\">{{item.label}}</span>\n                                <ng-template #htmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"item.label\"></span></ng-template>\n                            </ng-container>\n                        </a>\n                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\"  [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"p-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.disabled ? null : '0'\"\n                            [fragment]=\"item.fragment\" [queryParamsHandling]=\"item.queryParamsHandling\" [preserveFragment]=\"item.preserveFragment\" [skipLocationChange]=\"item.skipLocationChange\" [replaceUrl]=\"item.replaceUrl\" [state]=\"item.state\">\n                            <span *ngIf=\"item.icon\" class=\"p-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <ng-container *ngIf=\"item.label\">\n                                <span *ngIf=\"item.escape !== false; else htmlRouteLabel\" class=\"p-menuitem-text\">{{item.label}}</span>\n                                <ng-template #htmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"item.label\"></span></ng-template>\n                            </ng-container>\n                        </a>\n                    </li>\n                    <li class=\"p-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"!end\"></li>\n                </ng-template>\n            </ul>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-breadcrumb ul{align-items:center;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none}"]
            }]
    }], function () { return []; }, { onItemClick: [{
            type: core.Output
        }], model: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], home: [{
            type: core.Input
        }] }); })();
        return Breadcrumb;
    }());
    Breadcrumb.propDecorators = {
        model: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        home: [{ type: core.Input }],
        onItemClick: [{ type: core.Output }]
    };
    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
BreadcrumbModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, imports: [[common.CommonModule, router.RouterModule], ɵngcc2.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BreadcrumbModule, { declarations: [Breadcrumb], imports: [ɵngcc1.CommonModule, ɵngcc2.RouterModule], exports: [Breadcrumb, ɵngcc2.RouterModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreadcrumbModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, router.RouterModule],
                exports: [Breadcrumb, router.RouterModule],
                declarations: [Breadcrumb]
            }]
    }], function () { return []; }, null); })();
        return BreadcrumbModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Breadcrumb = Breadcrumb;
    exports.BreadcrumbModule = BreadcrumbModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-breadcrumb.umd.js.map