(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/api'),require('@angular/common'),require('primeng/paginator'),require('@angular/cdk/scrolling'),require('primeng/inputtext'),require('primeng/inputnumber'),require('@angular/forms'),require('primeng/tristatecheckbox'),require('primeng/calendar'),require('primeng/dropdown'),require('primeng/button'),require('primeng/selectbutton'),exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('primeng/api'), require('primeng/paginator'), require('primeng/inputtext'), require('primeng/button'), require('primeng/selectbutton'), require('primeng/tristatecheckbox'), require('primeng/calendar'), require('primeng/inputnumber'), require('primeng/dropdown'), require('primeng/dom'), require('primeng/utils'), require('rxjs'), require('@angular/cdk/scrolling'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('primeng/table', ['@angular/core','primeng/api','@angular/common','primeng/paginator','@angular/cdk/scrolling','primeng/inputtext','primeng/inputnumber','@angular/forms','primeng/tristatecheckbox','primeng/calendar','primeng/dropdown','primeng/button','primeng/selectbutton','exports', '@angular/core', '@angular/common', '@angular/forms', 'primeng/api', 'primeng/paginator', 'primeng/inputtext', 'primeng/button', 'primeng/selectbutton', 'primeng/tristatecheckbox', 'primeng/calendar', 'primeng/inputnumber', 'primeng/dropdown', 'primeng/dom', 'primeng/utils', 'rxjs', '@angular/cdk/scrolling', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.api,global.ng.common,global.primeng.paginator,global.ng.cdk.scrolling,global.primeng.inputtext,global.primeng.inputnumber,global.ng.forms,global.primeng.tristatecheckbox,global.primeng.calendar,global.primeng.dropdown,global.primeng.button,global.primeng.selectbutton,(global.primeng = global.primeng || {}, global.primeng.table = {}), global.ng.core, global.ng.common, global.ng.forms, global.primeng.api, global.primeng.paginator, global.primeng.inputtext, global.primeng.button, global.primeng.selectbutton, global.primeng.tristatecheckbox, global.primeng.calendar, global.primeng.inputnumber, global.primeng.dropdown, global.primeng.dom, global.primeng.utils, global.rxjs, global.ng.cdk.scrolling, global.ng.animations));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,ɵngcc9,ɵngcc10,ɵngcc11,ɵngcc12,exports, core, common, forms, api, paginator, inputtext, button, selectbutton, tristatecheckbox, calendar, inputnumber, dropdown, dom, utils, rxjs, scrolling, animations) { 
var _c0 = ["container"];
var _c1 = ["resizeHelper"];
var _c2 = ["reorderIndicatorUp"];
var _c3 = ["reorderIndicatorDown"];
var _c4 = ["table"];
var _c5 = ["scrollableView"];
var _c6 = ["scrollableFrozenView"];
function Table_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("p-datatable-loading-icon pi-spin " + ctx_r1.loadingIcon);
} }
function Table_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Table_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtemplate(1, Table_div_3_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.captionTemplate);
} }
function Table_p_paginator_4_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 15);
    ɵngcc0.ɵɵlistener("onPageChange", function Table_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onPageChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r3.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showFirstLastIcon", ctx_r3.showFirstLastIcon)("dropdownItemTemplate", ctx_r3.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showPageLinks", ctx_r3.showPageLinks);
} }
function Table_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Table_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Table_div_5_tfoot_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c7 = function (a0) { return { $implicit: a0 }; };
function Table_div_5_tfoot_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tfoot", 23);
    ɵngcc0.ɵɵtemplate(1, Table_div_5_tfoot_7_ng_container_1_Template, 1, 0, "ng-container", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r17.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c7, ctx_r17.columns));
} }
function Table_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "table", 17, 18);
    ɵngcc0.ɵɵtemplate(3, Table_div_5_ng_container_3_Template, 1, 0, "ng-container", 19);
    ɵngcc0.ɵɵelementStart(4, "thead", 20);
    ɵngcc0.ɵɵtemplate(5, Table_div_5_ng_container_5_Template, 1, 0, "ng-container", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(6, "tbody", 21);
    ɵngcc0.ɵɵtemplate(7, Table_div_5_tfoot_7_Template, 2, 4, "tfoot", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r4.tableStyleClass)("ngStyle", ctx_r4.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(11, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTableBody", ctx_r4.columns)("pTableBodyTemplate", ctx_r4.bodyTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.footerTemplate);
} }
var _c8 = function (a0) { return { width: a0 }; };
function Table_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 28, 29);
} if (rf & 2) {
    var ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("pScrollableView", ctx_r19.frozenColumns)("frozen", true)("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c8, ctx_r19.frozenWidth))("scrollHeight", ctx_r19.scrollHeight);
} }
var _c9 = function (a0, a1) { return { left: a0, width: a1 }; };
function Table_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, Table_div_6_div_1_Template, 2, 6, "div", 25);
    ɵngcc0.ɵɵelement(2, "div", 26, 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.frozenColumns || ctx_r5.frozenBodyTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pScrollableView", ctx_r5.columns)("frozen", false)("scrollHeight", ctx_r5.scrollHeight)("ngStyle", ɵngcc0.ɵɵpureFunction2(5, _c9, ctx_r5.frozenWidth, "calc(100% - " + ctx_r5.frozenWidth + ")"));
} }
function Table_p_paginator_7_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 30);
    ɵngcc0.ɵɵlistener("onPageChange", function Table_p_paginator_7_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onPageChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r6.rows)("first", ctx_r6.first)("totalRecords", ctx_r6.totalRecords)("pageLinkSize", ctx_r6.pageLinks)("alwaysShow", ctx_r6.alwaysShowPaginator)("rowsPerPageOptions", ctx_r6.rowsPerPageOptions)("templateLeft", ctx_r6.paginatorLeftTemplate)("templateRight", ctx_r6.paginatorRightTemplate)("dropdownAppendTo", ctx_r6.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r6.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r6.currentPageReportTemplate)("showFirstLastIcon", ctx_r6.showFirstLastIcon)("dropdownItemTemplate", ctx_r6.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r6.showCurrentPageReport)("showJumpToPageDropdown", ctx_r6.showJumpToPageDropdown)("showPageLinks", ctx_r6.showPageLinks);
} }
function Table_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Table_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 31);
    ɵngcc0.ɵɵtemplate(1, Table_div_8_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.summaryTemplate);
} }
function Table_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 32, 33);
} }
function Table_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 34, 35);
} }
function Table_span_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 36, 37);
} }
var _c10 = function (a1, a2, a3, a4, a5, a6, a7) { return { "p-datatable p-component": true, "p-datatable-hoverable-rows": a1, "p-datatable-auto-layout": a2, "p-datatable-resizable": a3, "p-datatable-resizable-fit": a4, "p-datatable-scrollable": a5, "p-datatable-flex-scrollable": a6, "p-datatable-responsive": a7 }; };
var _c11 = ["pTableBody", ""];
function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c12 = function (a0, a1, a2, a3) { return { $implicit: a0, rowIndex: a1, columns: a2, editing: a3 }; };
function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
} if (rf & 2) {
    var rowData_r7 = ctx.$implicit;
    var rowIndex_r8 = ctx.index;
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction4(2, _c12, rowData_r7, ctx_r6.dt.paginator ? ctx_r6.dt.first + rowIndex_r8 : rowIndex_r8, ctx_r6.columns, ctx_r6.dt.editMode === "row" && ctx_r6.dt.isRowEditing(rowData_r7)));
} }
function TableBody_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_Template, 1, 7, "ng-template", 1);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.dt.paginator && !ctx_r0.dt.lazy ? ɵngcc0.ɵɵpipeBind3(2, 2, ctx_r0.dt.filteredValue || ctx_r0.dt.value, ctx_r0.dt.first, ctx_r0.dt.first + ctx_r0.dt.rows) : ctx_r0.dt.filteredValue || ctx_r0.dt.value)("ngForTrackBy", ctx_r0.dt.rowTrackBy);
} }
function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
} if (rf & 2) {
    var rowData_r11 = ctx.$implicit;
    var rowIndex_r12 = ctx.index;
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", rowData_r11 ? ctx_r10.template : ctx_r10.dt.loadingBodyTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction4(2, _c12, rowData_r11, ctx_r10.dt.paginator ? ctx_r10.dt.first + rowIndex_r12 : rowIndex_r12, ctx_r10.columns, ctx_r10.dt.editMode === "row" && ctx_r10.dt.isRowEditing(rowData_r11)));
} }
function TableBody_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_Template, 1, 7, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r1.dt.filteredValue || ctx_r1.dt.value)("cdkVirtualForTrackBy", ctx_r1.dt.rowTrackBy)("cdkVirtualForTemplateCacheSize", 0);
} }
function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c13 = function (a0, a1, a2) { return { $implicit: a0, rowIndex: a1, columns: a2 }; };
function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r20 = ɵngcc0.ɵɵnextContext();
    var rowData_r15 = ctx_r20.$implicit;
    var rowIndex_r16 = ctx_r20.index;
    var ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r18.dt.expandedRowTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c13, rowData_r15, ctx_r18.dt.paginator ? ctx_r18.dt.first + rowIndex_r16 : rowIndex_r16, ctx_r18.columns));
} }
var _c14 = function (a0, a1, a2, a3, a4) { return { $implicit: a0, rowIndex: a1, columns: a2, expanded: a3, editing: a4 }; };
function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 6, "ng-container", 0);
} if (rf & 2) {
    var rowData_r15 = ctx.$implicit;
    var rowIndex_r16 = ctx.index;
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r14.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(3, _c14, rowData_r15, ctx_r14.dt.paginator ? ctx_r14.dt.first + rowIndex_r16 : rowIndex_r16, ctx_r14.columns, ctx_r14.dt.isRowExpanded(rowData_r15), ctx_r14.dt.editMode === "row" && ctx_r14.dt.isRowEditing(rowData_r15)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.dt.isRowExpanded(rowData_r15));
} }
function TableBody_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_Template, 2, 9, "ng-template", 1);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.dt.paginator && !ctx_r2.dt.lazy ? ɵngcc0.ɵɵpipeBind3(2, 2, ctx_r2.dt.filteredValue || ctx_r2.dt.value, ctx_r2.dt.first, ctx_r2.dt.first + ctx_r2.dt.rows) : ctx_r2.dt.filteredValue || ctx_r2.dt.value)("ngForTrackBy", ctx_r2.dt.rowTrackBy);
} }
function TableBody_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TableBody_ng_container_3_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TableBody_ng_container_3_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_3_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r27 = ɵngcc0.ɵɵnextContext();
    var rowData_r22 = ctx_r27.$implicit;
    var rowIndex_r23 = ctx_r27.index;
    var ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r25.dt.frozenExpandedRowTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c13, rowData_r22, ctx_r25.dt.paginator ? ctx_r25.dt.first + rowIndex_r23 : rowIndex_r23, ctx_r25.columns));
} }
function TableBody_ng_container_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_3_ng_template_1_ng_container_1_Template, 2, 6, "ng-container", 0);
} if (rf & 2) {
    var rowData_r22 = ctx.$implicit;
    var rowIndex_r23 = ctx.index;
    var ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r21.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(3, _c14, rowData_r22, ctx_r21.dt.paginator ? ctx_r21.dt.first + rowIndex_r23 : rowIndex_r23, ctx_r21.columns, ctx_r21.dt.isRowExpanded(rowData_r22), ctx_r21.dt.editMode === "row" && ctx_r21.dt.isRowEditing(rowData_r22)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r21.dt.isRowExpanded(rowData_r22));
} }
function TableBody_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_3_ng_template_1_Template, 2, 9, "ng-template", 1);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.dt.paginator && !ctx_r3.dt.lazy ? ɵngcc0.ɵɵpipeBind3(2, 2, ctx_r3.dt.filteredValue || ctx_r3.dt.value, ctx_r3.dt.first, ctx_r3.dt.first + ctx_r3.dt.rows) : ctx_r3.dt.filteredValue || ctx_r3.dt.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
} }
function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c15 = function (a0, a1) { return { $implicit: a0, frozen: a1 }; };
function TableBody_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.dt.loadingBodyTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c15, ctx_r4.columns, ctx_r4.frozen));
} }
function TableBody_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TableBody_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.dt.emptyMessageTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c15, ctx_r5.columns, ctx_r5.frozen));
} }
var _c16 = ["scrollHeader"];
var _c17 = ["scrollHeaderBox"];
var _c18 = ["scrollBody"];
var _c19 = ["scrollTable"];
var _c20 = ["scrollFooter"];
var _c21 = ["scrollFooterBox"];
var _c22 = ["scrollableAligner"];
var _c23 = ["pScrollableView", ""];
function ScrollableView_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ScrollableView_ng_template_9_ng_container_0_Template, 1, 0, "ng-container", 5);
} if (rf & 2) {
    var rowData_r12 = ctx.$implicit;
    var rowIndex_r13 = ctx.index;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.dt.frozenRowsTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c13, rowData_r12, rowIndex_r13, ctx_r4.columns));
} }
function ScrollableView_ng_container_10_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_container_10_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23, 24);
} }
var _c24 = function (a0, a1) { return { "max-height": a0, "overflow-y": a1 }; };
function ScrollableView_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 17, 18);
    ɵngcc0.ɵɵelementStart(3, "table", 19, 20);
    ɵngcc0.ɵɵtemplate(5, ScrollableView_ng_container_10_ng_container_5_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelement(6, "tbody", 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, ScrollableView_ng_container_10_div_7_Template, 2, 0, "div", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(10, _c24, ctx_r5.dt.scrollHeight !== "flex" ? ctx_r5.scrollHeight : undefined, !ctx_r5.frozen && ctx_r5.dt.scrollHeight ? "scroll" : undefined));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r5.dt.tableStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r5.dt.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.frozen ? ctx_r5.dt.frozenColGroupTemplate || ctx_r5.dt.colGroupTemplate : ctx_r5.dt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(13, _c7, ctx_r5.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTableBody", ctx_r5.columns)("pTableBodyTemplate", ctx_r5.frozen ? ctx_r5.dt.frozenBodyTemplate || ctx_r5.dt.bodyTemplate : ctx_r5.dt.bodyTemplate)("frozen", ctx_r5.frozen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.frozen);
} }
function ScrollableView_ng_template_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_template_11_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23, 24);
} }
function ScrollableView_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    var _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 25);
    ɵngcc0.ɵɵlistener("scrolledIndexChange", function ScrollableView_ng_template_11_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onScrollIndexChange($event); });
    ɵngcc0.ɵɵelementStart(1, "table", 19, 20);
    ɵngcc0.ɵɵtemplate(3, ScrollableView_ng_template_11_ng_container_3_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelement(4, "tbody", 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, ScrollableView_ng_template_11_div_5_Template, 2, 0, "div", 22);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r7.dt.scrollHeight !== "flex" ? ctx_r7.scrollHeight : undefined);
    ɵngcc0.ɵɵproperty("itemSize", ctx_r7.dt.virtualRowHeight)("minBufferPx", ctx_r7.dt.minBufferPx)("maxBufferPx", ctx_r7.dt.maxBufferPx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r7.dt.tableStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r7.dt.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.frozen ? ctx_r7.dt.frozenColGroupTemplate || ctx_r7.dt.colGroupTemplate : ctx_r7.dt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c7, ctx_r7.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTableBody", ctx_r7.columns)("pTableBodyTemplate", ctx_r7.frozen ? ctx_r7.dt.frozenBodyTemplate || ctx_r7.dt.bodyTemplate : ctx_r7.dt.bodyTemplate)("frozen", ctx_r7.frozen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.frozen);
} }
function ScrollableView_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function ScrollableView_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function SortIcon_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.getMultiSortMetaIndex() + 1);
} }
var _c25 = function (a0, a1, a2) { return { "pi-sort-amount-up-alt": a0, "pi-sort-amount-down": a1, "pi-sort-alt": a2 }; };
function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function CellEditor_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.inputTemplate);
} }
function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function CellEditor_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.outputTemplate);
} }
var _c26 = ["box"];
var _c27 = function (a1, a2) { return { "p-radiobutton-box p-component": true, "p-highlight": a1, "p-disabled": a2 }; };
var _c28 = function (a1, a2) { return { "p-checkbox-box p-component": true, "p-highlight": a1, "p-disabled": a2 }; };
var _c29 = function (a0) { return { "pi pi-check": a0 }; };
var _c30 = function (a1, a2) { return { "p-checkbox-box": true, "p-highlight": a1, "p-disabled": a2 }; };
function ColumnFilterFormElement_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c31 = function (a0, a1) { return { $implicit: a0, filterCallback: a1 }; };
function ColumnFilterFormElement_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ColumnFilterFormElement_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.filterTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c31, ctx_r0.filterConstraint.value, ctx_r0.filterCallback));
} }
function ColumnFilterFormElement_ng_template_1_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 7);
    ɵngcc0.ɵɵlistener("input", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_input_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onModelChange($event.target.value); })("keydown.enter", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.onTextInputEnterKeyDown($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("value", ctx_r4.filterConstraint == null ? null : ctx_r4.filterConstraint.value);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r4.placeholder);
} }
function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-inputNumber", 8);
    ɵngcc0.ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.onModelChange($event); })("onKeyDown", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_onKeyDown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.onNumericInputKeyDown($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r5.filterConstraint == null ? null : ctx_r5.filterConstraint.value)("showButtons", true)("minFractionDigits", ctx_r5.minFractionDigits)("maxFractionDigits", ctx_r5.maxFractionDigits)("prefix", ctx_r5.prefix)("suffix", ctx_r5.suffix)("placeholder", ctx_r5.placeholder)("mode", ctx_r5.currency ? "currency" : "decimal")("locale", ctx_r5.locale)("localeMatcher", ctx_r5.localeMatcher)("currency", ctx_r5.currency)("currencyDisplay", ctx_r5.currencyDisplay)("useGrouping", ctx_r5.useGrouping);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r5.placeholder);
} }
function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-triStateCheckbox", 9);
    ɵngcc0.ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template_p_triStateCheckbox_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onModelChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r6.filterConstraint == null ? null : ctx_r6.filterConstraint.value);
} }
function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-calendar", 9);
    ɵngcc0.ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template_p_calendar_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.onModelChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r7.filterConstraint == null ? null : ctx_r7.filterConstraint.value);
} }
function ColumnFilterFormElement_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 3);
    ɵngcc0.ɵɵtemplate(1, ColumnFilterFormElement_ng_template_1_input_1_Template, 1, 2, "input", 4);
    ɵngcc0.ɵɵtemplate(2, ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template, 1, 14, "p-inputNumber", 5);
    ɵngcc0.ɵɵtemplate(3, ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template, 1, 1, "p-triStateCheckbox", 6);
    ɵngcc0.ɵɵtemplate(4, ColumnFilterFormElement_ng_template_1_p_calendar_4_Template, 1, 1, "p-calendar", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r2.type);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "text");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "numeric");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "boolean");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "date");
} }
var _c32 = ["icon"];
function ColumnFilter_p_columnFilterFormElement_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-columnFilterFormElement", 5);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("type", ctx_r0.type)("field", ctx_r0.field)("filterConstraint", ctx_r0.dt.filters[ctx_r0.field])("filterTemplate", ctx_r0.filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping);
} }
var _c33 = function (a0, a1) { return { "p-column-filter-menu-button-open": a0, "p-column-filter-menu-button-active": a1 }; };
function ColumnFilter_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6, 7);
    ɵngcc0.ɵɵlistener("click", function ColumnFilter_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.toggleMenu(); })("keydown", function ColumnFilter_button_2_Template_button_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onToggleButtonKeyDown($event); });
    ɵngcc0.ɵɵelement(2, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c33, ctx_r1.overlayVisible, ctx_r1.hasFilter()));
    ɵngcc0.ɵɵattribute("aria-expanded", ctx_r1.overlayVisible);
} }
var _c34 = function (a0) { return { "p-hidden-space": a0 }; };
function ColumnFilter_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 9, 7);
    ɵngcc0.ɵɵlistener("click", function ColumnFilter_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.clearFilter(); });
    ɵngcc0.ɵɵelement(2, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c34, !ctx_r2.hasRowFilter()));
} }
function ColumnFilter_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c35 = function (a0) { return { "p-highlight": a0 }; };
function ColumnFilter_div_4_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 19);
    ɵngcc0.ɵɵlistener("click", function ColumnFilter_div_4_ul_2_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); var matchMode_r17 = ctx.$implicit; var ctx_r19 = ɵngcc0.ɵɵnextContext(3); return ctx_r19.onRowMatchModeChange(matchMode_r17.value); })("keydown", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); var ctx_r21 = ɵngcc0.ɵɵnextContext(3); return ctx_r21.onRowMatchModeKeyDown($event); })("keydown.enter", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); var matchMode_r17 = ctx.$implicit; var ctx_r22 = ɵngcc0.ɵɵnextContext(3); return ctx_r22.onRowMatchModeChange(matchMode_r17.value); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var matchMode_r17 = ctx.$implicit;
    var i_r18 = ctx.index;
    var ctx_r16 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c35, ctx_r16.isRowMatchModeSelected(matchMode_r17.value)));
    ɵngcc0.ɵɵattribute("tabindex", i_r18 === 0 ? "0" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(matchMode_r17.label);
} }
function ColumnFilter_div_4_ul_2_Template(rf, ctx) { if (rf & 1) {
    var _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ul", 15);
    ɵngcc0.ɵɵtemplate(1, ColumnFilter_div_4_ul_2_li_1_Template, 2, 5, "li", 16);
    ɵngcc0.ɵɵelement(2, "li", 17);
    ɵngcc0.ɵɵelementStart(3, "li", 18);
    ɵngcc0.ɵɵlistener("click", function ColumnFilter_div_4_ul_2_Template_li_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r24); var ctx_r23 = ɵngcc0.ɵɵnextContext(2); return ctx_r23.onRowClearItemClick(); })("keydown", function ColumnFilter_div_4_ul_2_Template_li_keydown_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); var ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.onRowMatchModeKeyDown($event); })("keydown.enter", function ColumnFilter_div_4_ul_2_Template_li_keydown_enter_3_listener() { ɵngcc0.ɵɵrestoreView(_r24); var ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.onRowClearItemClick(); });
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r12.matchModes);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r12.noFilterLabel);
} }
function ColumnFilter_div_4_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 27);
    ɵngcc0.ɵɵelementStart(1, "p-dropdown", 28);
    ɵngcc0.ɵɵlistener("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_0_Template_p_dropdown_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); var ctx_r32 = ɵngcc0.ɵɵnextContext(3); return ctx_r32.onOperatorChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r27 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("options", ctx_r27.operatorOptions)("ngModel", ctx_r27.operator);
} }
function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template(rf, ctx) { if (rf & 1) {
    var _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdown", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template_p_dropdown_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); var fieldConstraint_r34 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r38 = ɵngcc0.ɵɵnextContext(3); return ctx_r38.onMenuMatchModeChange($event, fieldConstraint_r34); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var fieldConstraint_r34 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r36 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("options", ctx_r36.matchModes)("ngModel", fieldConstraint_r34.matchMode);
} }
function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r44 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 34);
    ɵngcc0.ɵɵlistener("click", function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r44); var fieldConstraint_r34 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r42 = ɵngcc0.ɵɵnextContext(3); return ctx_r42.removeConstraint(fieldConstraint_r34); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r37 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("label", ctx_r37.removeRuleButtonLabel);
} }
function ColumnFilter_div_4_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵtemplate(1, ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template, 1, 2, "p-dropdown", 30);
    ɵngcc0.ɵɵelement(2, "p-columnFilterFormElement", 31);
    ɵngcc0.ɵɵelementStart(3, "div");
    ɵngcc0.ɵɵtemplate(4, ColumnFilter_div_4_ng_template_3_div_2_button_4_Template, 1, 1, "button", 32);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var fieldConstraint_r34 = ctx.$implicit;
    var ctx_r28 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r28.showMatchModes && ctx_r28.matchModes);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", ctx_r28.type)("field", ctx_r28.field)("filterConstraint", fieldConstraint_r34)("filterTemplate", ctx_r28.filterTemplate)("placeholder", ctx_r28.placeholder)("minFractionDigits", ctx_r28.minFractionDigits)("maxFractionDigits", ctx_r28.maxFractionDigits)("prefix", ctx_r28.prefix)("suffix", ctx_r28.suffix)("locale", ctx_r28.locale)("localeMatcher", ctx_r28.localeMatcher)("currency", ctx_r28.currency)("currencyDisplay", ctx_r28.currencyDisplay)("useGrouping", ctx_r28.useGrouping);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r28.showRemoveIcon);
} }
function ColumnFilter_div_4_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r46 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 35);
    ɵngcc0.ɵɵelementStart(1, "button", 36);
    ɵngcc0.ɵɵlistener("click", function ColumnFilter_div_4_ng_template_3_div_3_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r46); var ctx_r45 = ɵngcc0.ɵɵnextContext(3); return ctx_r45.addConstraint(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r29 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("label", ctx_r29.addRuleButtonLabel);
} }
function ColumnFilter_div_4_ng_template_3_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r48 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 37);
    ɵngcc0.ɵɵlistener("click", function ColumnFilter_div_4_ng_template_3_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r48); var ctx_r47 = ɵngcc0.ɵɵnextContext(3); return ctx_r47.clearFilter(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r30 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("label", ctx_r30.clearButtonLabel);
} }
function ColumnFilter_div_4_ng_template_3_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r50 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 38);
    ɵngcc0.ɵɵlistener("click", function ColumnFilter_div_4_ng_template_3_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r50); var ctx_r49 = ɵngcc0.ɵɵnextContext(3); return ctx_r49.applyFilter(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("label", ctx_r31.applyButtonLabel);
} }
function ColumnFilter_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ColumnFilter_div_4_ng_template_3_div_0_Template, 2, 2, "div", 20);
    ɵngcc0.ɵɵelementStart(1, "div", 21);
    ɵngcc0.ɵɵtemplate(2, ColumnFilter_div_4_ng_template_3_div_2_Template, 5, 16, "div", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, ColumnFilter_div_4_ng_template_3_div_3_Template, 2, 1, "div", 23);
    ɵngcc0.ɵɵelementStart(4, "div", 24);
    ɵngcc0.ɵɵtemplate(5, ColumnFilter_div_4_ng_template_3_button_5_Template, 1, 1, "button", 25);
    ɵngcc0.ɵɵtemplate(6, ColumnFilter_div_4_ng_template_3_button_6_Template, 1, 1, "button", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.isShowOperator);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r14.fieldConstraints);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.isShowAddConstraint);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.showClearButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.showApplyButton);
} }
function ColumnFilter_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c36 = function (a1) { return { "p-column-filter-overlay p-component p-fluid": true, "p-column-filter-overlay-menu": a1 }; };
function ColumnFilter_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r52 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); var ctx_r51 = ɵngcc0.ɵɵnextContext(); return ctx_r51.onOverlayAnimationStart($event); })("keydown.escape", function ColumnFilter_div_4_Template_div_keydown_escape_0_listener() { ɵngcc0.ɵɵrestoreView(_r52); var ctx_r53 = ɵngcc0.ɵɵnextContext(); return ctx_r53.onEscape(); });
    ɵngcc0.ɵɵtemplate(1, ColumnFilter_div_4_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(2, ColumnFilter_div_4_ul_2_Template, 5, 2, "ul", 13);
    ɵngcc0.ɵɵtemplate(3, ColumnFilter_div_4_ng_template_3_Template, 7, 5, "ng-template", null, 14, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, ColumnFilter_div_4_ng_container_5_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r13 = ɵngcc0.ɵɵreference(4);
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c36, ctx_r3.display === "menu"))("@overlayAnimation", "visible");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(10, _c7, ctx_r3.field));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.display === "row")("ngIfElse", _r13);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(12, _c7, ctx_r3.field));
} }
var _c37 = function (a0, a1) { return { "p-column-filter-row": a0, "p-column-filter-menu": a1 }; };
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

    var TableService = /** @class */ (function () {
        function TableService() {
            this.sortSource = new rxjs.Subject();
            this.selectionSource = new rxjs.Subject();
            this.contextMenuSource = new rxjs.Subject();
            this.valueSource = new rxjs.Subject();
            this.totalRecordsSource = new rxjs.Subject();
            this.columnsSource = new rxjs.Subject();
            this.resetSource = new rxjs.Subject();
            this.sortSource$ = this.sortSource.asObservable();
            this.selectionSource$ = this.selectionSource.asObservable();
            this.contextMenuSource$ = this.contextMenuSource.asObservable();
            this.valueSource$ = this.valueSource.asObservable();
            this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
            this.columnsSource$ = this.columnsSource.asObservable();
            this.resetSource$ = this.resetSource.asObservable();
        }
        TableService.prototype.onSort = function (sortMeta) {
            this.sortSource.next(sortMeta);
        };
        TableService.prototype.onSelectionChange = function () {
            this.selectionSource.next();
        };
        TableService.prototype.onResetChange = function () {
            this.resetSource.next();
        };
        TableService.prototype.onContextMenu = function (data) {
            this.contextMenuSource.next(data);
        };
        TableService.prototype.onValueChange = function (value) {
            this.valueSource.next(value);
        };
        TableService.prototype.onTotalRecordsChange = function (value) {
            this.totalRecordsSource.next(value);
        };
        TableService.prototype.onColumnsChange = function (columns) {
            this.columnsSource.next(columns);
        };
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(); };
TableService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TableService, factory: function (t) { return TableService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableService, [{
        type: core.Injectable
    }], function () { return []; }, null); })();
        return TableService;
    }());
    var Table = /** @class */ (function () {
        function Table(el, zone, tableService, cd, filterService) {
            this.el = el;
            this.zone = zone;
            this.tableService = tableService;
            this.cd = cd;
            this.filterService = filterService;
            this.pageLinks = 5;
            this.alwaysShowPaginator = true;
            this.paginatorPosition = 'bottom';
            this.paginatorDropdownScrollHeight = '200px';
            this.currentPageReportTemplate = '{currentPage} of {totalPages}';
            this.showFirstLastIcon = true;
            this.showPageLinks = true;
            this.defaultSortOrder = 1;
            this.sortMode = 'single';
            this.resetPageOnSort = true;
            this.selectionChange = new core.EventEmitter();
            this.contextMenuSelectionChange = new core.EventEmitter();
            this.contextMenuSelectionMode = "separate";
            this.rowTrackBy = function (index, item) { return item; };
            this.lazy = false;
            this.lazyLoadOnInit = true;
            this.compareSelectionBy = 'deepEquals';
            this.csvSeparator = ',';
            this.exportFilename = 'download';
            this.filters = {};
            this.filterDelay = 300;
            this.expandedRowKeys = {};
            this.editingRowKeys = {};
            this.rowExpandMode = 'multiple';
            this.virtualScrollDelay = 250;
            this.virtualRowHeight = 28;
            this.columnResizeMode = 'fit';
            this.loadingIcon = 'pi pi-spinner';
            this.showLoader = true;
            this.stateStorage = 'session';
            this.editMode = 'cell';
            this.onRowSelect = new core.EventEmitter();
            this.onRowUnselect = new core.EventEmitter();
            this.onPage = new core.EventEmitter();
            this.onSort = new core.EventEmitter();
            this.onFilter = new core.EventEmitter();
            this.onLazyLoad = new core.EventEmitter();
            this.onRowExpand = new core.EventEmitter();
            this.onRowCollapse = new core.EventEmitter();
            this.onContextMenuSelect = new core.EventEmitter();
            this.onColResize = new core.EventEmitter();
            this.onColReorder = new core.EventEmitter();
            this.onRowReorder = new core.EventEmitter();
            this.onEditInit = new core.EventEmitter();
            this.onEditComplete = new core.EventEmitter();
            this.onEditCancel = new core.EventEmitter();
            this.onHeaderCheckboxToggle = new core.EventEmitter();
            this.sortFunction = new core.EventEmitter();
            this.firstChange = new core.EventEmitter();
            this.rowsChange = new core.EventEmitter();
            this.onStateSave = new core.EventEmitter();
            this.onStateRestore = new core.EventEmitter();
            this._value = [];
            this._totalRecords = 0;
            this._first = 0;
            this.selectionKeys = {};
            this._sortOrder = 1;
        }
        Table.prototype.ngOnInit = function () {
            if (this.lazy && this.lazyLoadOnInit) {
                if (!this.virtualScroll) {
                    this.onLazyLoad.emit(this.createLazyLoadMetadata());
                }
                if (this.restoringFilter) {
                    this.restoringFilter = false;
                }
            }
            this.initialized = true;
        };
        Table.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'caption':
                        _this.captionTemplate = item.template;
                        break;
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'body':
                        _this.bodyTemplate = item.template;
                        break;
                    case 'loadingbody':
                        _this.loadingBodyTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    case 'summary':
                        _this.summaryTemplate = item.template;
                        break;
                    case 'colgroup':
                        _this.colGroupTemplate = item.template;
                        break;
                    case 'rowexpansion':
                        _this.expandedRowTemplate = item.template;
                        break;
                    case 'frozenrows':
                        _this.frozenRowsTemplate = item.template;
                        break;
                    case 'frozenheader':
                        _this.frozenHeaderTemplate = item.template;
                        break;
                    case 'frozenbody':
                        _this.frozenBodyTemplate = item.template;
                        break;
                    case 'frozenfooter':
                        _this.frozenFooterTemplate = item.template;
                        break;
                    case 'frozencolgroup':
                        _this.frozenColGroupTemplate = item.template;
                        break;
                    case 'frozenrowexpansion':
                        _this.frozenExpandedRowTemplate = item.template;
                        break;
                    case 'emptymessage':
                        _this.emptyMessageTemplate = item.template;
                        break;
                    case 'paginatorleft':
                        _this.paginatorLeftTemplate = item.template;
                        break;
                    case 'paginatorright':
                        _this.paginatorRightTemplate = item.template;
                        break;
                    case 'paginatordropdownitem':
                        _this.paginatorDropdownItemTemplate = item.template;
                        break;
                }
            });
        };
        Table.prototype.ngAfterViewInit = function () {
            if (this.isStateful() && this.resizableColumns) {
                this.restoreColumnWidths();
            }
        };
        Table.prototype.ngOnChanges = function (simpleChange) {
            if (simpleChange.value) {
                if (this.isStateful() && !this.stateRestored) {
                    this.restoreState();
                }
                this._value = simpleChange.value.currentValue;
                if (!this.lazy) {
                    this.totalRecords = (this._value ? this._value.length : 0);
                    if (this.sortMode == 'single' && this.sortField)
                        this.sortSingle();
                    else if (this.sortMode == 'multiple' && this.multiSortMeta)
                        this.sortMultiple();
                    else if (this.hasFilter()) //sort already filters
                        this._filter();
                }
                this.tableService.onValueChange(simpleChange.value.currentValue);
            }
            if (simpleChange.columns) {
                this._columns = simpleChange.columns.currentValue;
                this.tableService.onColumnsChange(simpleChange.columns.currentValue);
                if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
                    this.restoreColumnOrder();
                }
            }
            if (simpleChange.sortField) {
                this._sortField = simpleChange.sortField.currentValue;
                //avoid triggering lazy load prior to lazy initialization at onInit
                if (!this.lazy || this.initialized) {
                    if (this.sortMode === 'single') {
                        this.sortSingle();
                    }
                }
            }
            if (simpleChange.sortOrder) {
                this._sortOrder = simpleChange.sortOrder.currentValue;
                //avoid triggering lazy load prior to lazy initialization at onInit
                if (!this.lazy || this.initialized) {
                    if (this.sortMode === 'single') {
                        this.sortSingle();
                    }
                }
            }
            if (simpleChange.multiSortMeta) {
                this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
                if (this.sortMode === 'multiple' && (this.initialized || (!this.lazy && !this.virtualScroll))) {
                    this.sortMultiple();
                }
            }
            if (simpleChange.selection) {
                this._selection = simpleChange.selection.currentValue;
                if (!this.preventSelectionSetterPropagation) {
                    this.updateSelectionKeys();
                    this.tableService.onSelectionChange();
                }
                this.preventSelectionSetterPropagation = false;
            }
        };
        Object.defineProperty(Table.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (val) {
                this._value = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "columns", {
            get: function () {
                return this._columns;
            },
            set: function (cols) {
                this._columns = cols;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "first", {
            get: function () {
                return this._first;
            },
            set: function (val) {
                this._first = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "rows", {
            get: function () {
                return this._rows;
            },
            set: function (val) {
                this._rows = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "totalRecords", {
            get: function () {
                return this._totalRecords;
            },
            set: function (val) {
                this._totalRecords = val;
                this.tableService.onTotalRecordsChange(this._totalRecords);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "sortField", {
            get: function () {
                return this._sortField;
            },
            set: function (val) {
                this._sortField = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "sortOrder", {
            get: function () {
                return this._sortOrder;
            },
            set: function (val) {
                this._sortOrder = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "multiSortMeta", {
            get: function () {
                return this._multiSortMeta;
            },
            set: function (val) {
                this._multiSortMeta = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Table.prototype, "selection", {
            get: function () {
                return this._selection;
            },
            set: function (val) {
                this._selection = val;
            },
            enumerable: false,
            configurable: true
        });
        Table.prototype.updateSelectionKeys = function () {
            var e_1, _b;
            if (this.dataKey && this._selection) {
                this.selectionKeys = {};
                if (Array.isArray(this._selection)) {
                    try {
                        for (var _c = __values(this._selection), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var data = _d.value;
                            this.selectionKeys[String(utils.ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    this.selectionKeys[String(utils.ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
                }
            }
        };
        Table.prototype.onPageChange = function (event) {
            this.first = event.first;
            this.rows = event.rows;
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            this.onPage.emit({
                first: this.first,
                rows: this.rows
            });
            this.firstChange.emit(this.first);
            this.rowsChange.emit(this.rows);
            this.tableService.onValueChange(this.value);
            if (this.isStateful()) {
                this.saveState();
            }
            this.anchorRowIndex = null;
            if (this.scrollable) {
                this.resetScrollTop();
            }
        };
        Table.prototype.sort = function (event) {
            var originalEvent = event.originalEvent;
            if (this.sortMode === 'single') {
                this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
                this._sortField = event.field;
                if (this.resetPageOnSort) {
                    this._first = 0;
                    this.firstChange.emit(this._first);
                    if (this.scrollable) {
                        this.resetScrollTop();
                    }
                }
                this.sortSingle();
            }
            if (this.sortMode === 'multiple') {
                var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
                var sortMeta = this.getSortMeta(event.field);
                if (sortMeta) {
                    if (!metaKey) {
                        this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                        if (this.resetPageOnSort) {
                            this._first = 0;
                            this.firstChange.emit(this._first);
                            if (this.scrollable) {
                                this.resetScrollTop();
                            }
                        }
                    }
                    else {
                        sortMeta.order = sortMeta.order * -1;
                    }
                }
                else {
                    if (!metaKey || !this.multiSortMeta) {
                        this._multiSortMeta = [];
                        if (this.resetPageOnSort) {
                            this._first = 0;
                            this.firstChange.emit(this._first);
                        }
                    }
                    this._multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
                }
                this.sortMultiple();
            }
            if (this.isStateful()) {
                this.saveState();
            }
            this.anchorRowIndex = null;
        };
        Table.prototype.sortSingle = function () {
            var _this = this;
            if (this.sortField && this.sortOrder) {
                if (this.restoringSort) {
                    this.restoringSort = false;
                }
                if (this.lazy) {
                    this.onLazyLoad.emit(this.createLazyLoadMetadata());
                }
                else if (this.value) {
                    if (this.customSort) {
                        this.sortFunction.emit({
                            data: this.value,
                            mode: this.sortMode,
                            field: this.sortField,
                            order: this.sortOrder
                        });
                    }
                    else {
                        this.value.sort(function (data1, data2) {
                            var value1 = utils.ObjectUtils.resolveFieldData(data1, _this.sortField);
                            var value2 = utils.ObjectUtils.resolveFieldData(data2, _this.sortField);
                            var result = null;
                            if (value1 == null && value2 != null)
                                result = -1;
                            else if (value1 != null && value2 == null)
                                result = 1;
                            else if (value1 == null && value2 == null)
                                result = 0;
                            else if (typeof value1 === 'string' && typeof value2 === 'string')
                                result = value1.localeCompare(value2);
                            else
                                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                            return (_this.sortOrder * result);
                        });
                        this._value = __spread(this.value);
                    }
                    if (this.hasFilter()) {
                        this._filter();
                    }
                }
                var sortMeta = {
                    field: this.sortField,
                    order: this.sortOrder
                };
                this.onSort.emit(sortMeta);
                this.tableService.onSort(sortMeta);
            }
        };
        Table.prototype.sortMultiple = function () {
            var _this = this;
            if (this.multiSortMeta) {
                if (this.lazy) {
                    this.onLazyLoad.emit(this.createLazyLoadMetadata());
                }
                else if (this.value) {
                    if (this.customSort) {
                        this.sortFunction.emit({
                            data: this.value,
                            mode: this.sortMode,
                            multiSortMeta: this.multiSortMeta
                        });
                    }
                    else {
                        this.value.sort(function (data1, data2) {
                            return _this.multisortField(data1, data2, _this.multiSortMeta, 0);
                        });
                        this._value = __spread(this.value);
                    }
                    if (this.hasFilter()) {
                        this._filter();
                    }
                }
                this.onSort.emit({
                    multisortmeta: this.multiSortMeta
                });
                this.tableService.onSort(this.multiSortMeta);
            }
        };
        Table.prototype.multisortField = function (data1, data2, multiSortMeta, index) {
            var value1 = utils.ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
            var value2 = utils.ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
            var result = null;
            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else if (typeof value1 == 'string' || value1 instanceof String) {
                if (value1.localeCompare && (value1 != value2)) {
                    return (multiSortMeta[index].order * value1.localeCompare(value2));
                }
            }
            else {
                result = (value1 < value2) ? -1 : 1;
            }
            if (value1 == value2) {
                return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
            }
            return (multiSortMeta[index].order * result);
        };
        Table.prototype.getSortMeta = function (field) {
            if (this.multiSortMeta && this.multiSortMeta.length) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field === field) {
                        return this.multiSortMeta[i];
                    }
                }
            }
            return null;
        };
        Table.prototype.isSorted = function (field) {
            if (this.sortMode === 'single') {
                return (this.sortField && this.sortField === field);
            }
            else if (this.sortMode === 'multiple') {
                var sorted = false;
                if (this.multiSortMeta) {
                    for (var i = 0; i < this.multiSortMeta.length; i++) {
                        if (this.multiSortMeta[i].field == field) {
                            sorted = true;
                            break;
                        }
                    }
                }
                return sorted;
            }
        };
        Table.prototype.handleRowClick = function (event) {
            var target = event.originalEvent.target;
            var targetNode = target.nodeName;
            var parentNode = target.parentElement && target.parentElement.nodeName;
            if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' ||
                parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' ||
                (dom.DomHandler.hasClass(event.originalEvent.target, 'p-clickable'))) {
                return;
            }
            if (this.selectionMode) {
                this.preventSelectionSetterPropagation = true;
                if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
                    dom.DomHandler.clearSelection();
                    if (this.rangeRowIndex != null) {
                        this.clearSelectionRange(event.originalEvent);
                    }
                    this.rangeRowIndex = event.rowIndex;
                    this.selectRange(event.originalEvent, event.rowIndex);
                }
                else {
                    var rowData = event.rowData;
                    var selected = this.isSelected(rowData);
                    var metaSelection = this.rowTouched ? false : this.metaKeySelection;
                    var dataKeyValue = this.dataKey ? String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
                    this.anchorRowIndex = event.rowIndex;
                    this.rangeRowIndex = event.rowIndex;
                    if (metaSelection) {
                        var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                        if (selected && metaKey) {
                            if (this.isSingleSelectionMode()) {
                                this._selection = null;
                                this.selectionKeys = {};
                                this.selectionChange.emit(null);
                            }
                            else {
                                var selectionIndex_1 = this.findIndexInSelection(rowData);
                                this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_1; });
                                this.selectionChange.emit(this.selection);
                                if (dataKeyValue) {
                                    delete this.selectionKeys[dataKeyValue];
                                }
                            }
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                        }
                        else {
                            if (this.isSingleSelectionMode()) {
                                this._selection = rowData;
                                this.selectionChange.emit(rowData);
                                if (dataKeyValue) {
                                    this.selectionKeys = {};
                                    this.selectionKeys[dataKeyValue] = 1;
                                }
                            }
                            else if (this.isMultipleSelectionMode()) {
                                if (metaKey) {
                                    this._selection = this.selection || [];
                                }
                                else {
                                    this._selection = [];
                                    this.selectionKeys = {};
                                }
                                this._selection = __spread(this.selection, [rowData]);
                                this.selectionChange.emit(this.selection);
                                if (dataKeyValue) {
                                    this.selectionKeys[dataKeyValue] = 1;
                                }
                            }
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                        }
                    }
                    else {
                        if (this.selectionMode === 'single') {
                            if (selected) {
                                this._selection = null;
                                this.selectionKeys = {};
                                this.selectionChange.emit(this.selection);
                                this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            }
                            else {
                                this._selection = rowData;
                                this.selectionChange.emit(this.selection);
                                this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                                if (dataKeyValue) {
                                    this.selectionKeys = {};
                                    this.selectionKeys[dataKeyValue] = 1;
                                }
                            }
                        }
                        else if (this.selectionMode === 'multiple') {
                            if (selected) {
                                var selectionIndex_2 = this.findIndexInSelection(rowData);
                                this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_2; });
                                this.selectionChange.emit(this.selection);
                                this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                                if (dataKeyValue) {
                                    delete this.selectionKeys[dataKeyValue];
                                }
                            }
                            else {
                                this._selection = this.selection ? __spread(this.selection, [rowData]) : [rowData];
                                this.selectionChange.emit(this.selection);
                                this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                                if (dataKeyValue) {
                                    this.selectionKeys[dataKeyValue] = 1;
                                }
                            }
                        }
                    }
                }
                this.tableService.onSelectionChange();
                if (this.isStateful()) {
                    this.saveState();
                }
            }
            this.rowTouched = false;
        };
        Table.prototype.handleRowTouchEnd = function (event) {
            this.rowTouched = true;
        };
        Table.prototype.handleRowRightClick = function (event) {
            if (this.contextMenu) {
                var rowData = event.rowData;
                if (this.contextMenuSelectionMode === 'separate') {
                    this.contextMenuSelection = rowData;
                    this.contextMenuSelectionChange.emit(rowData);
                    this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, data: rowData, index: event.rowIndex });
                    this.contextMenu.show(event.originalEvent);
                    this.tableService.onContextMenu(rowData);
                }
                else if (this.contextMenuSelectionMode === 'joint') {
                    this.preventSelectionSetterPropagation = true;
                    var selected = this.isSelected(rowData);
                    var dataKeyValue = this.dataKey ? String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
                    if (!selected) {
                        if (this.isSingleSelectionMode()) {
                            this.selection = rowData;
                            this.selectionChange.emit(rowData);
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this._selection = this.selection ? __spread(this.selection, [rowData]) : [rowData];
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                    this.tableService.onSelectionChange();
                    this.contextMenu.show(event.originalEvent);
                    this.onContextMenuSelect.emit({ originalEvent: event, data: rowData, index: event.rowIndex });
                }
            }
        };
        Table.prototype.selectRange = function (event, rowIndex) {
            var rangeStart, rangeEnd;
            if (this.anchorRowIndex > rowIndex) {
                rangeStart = rowIndex;
                rangeEnd = this.anchorRowIndex;
            }
            else if (this.anchorRowIndex < rowIndex) {
                rangeStart = this.anchorRowIndex;
                rangeEnd = rowIndex;
            }
            else {
                rangeStart = rowIndex;
                rangeEnd = rowIndex;
            }
            if (this.lazy && this.paginator) {
                rangeStart -= this.first;
                rangeEnd -= this.first;
            }
            var rangeRowsData = [];
            for (var i = rangeStart; i <= rangeEnd; i++) {
                var rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
                if (!this.isSelected(rangeRowData)) {
                    rangeRowsData.push(rangeRowData);
                    this._selection = __spread(this.selection, [rangeRowData]);
                    var dataKeyValue = this.dataKey ? String(utils.ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
                    if (dataKeyValue) {
                        this.selectionKeys[dataKeyValue] = 1;
                    }
                }
            }
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event, data: rangeRowsData, type: 'row' });
        };
        Table.prototype.clearSelectionRange = function (event) {
            var rangeStart, rangeEnd;
            if (this.rangeRowIndex > this.anchorRowIndex) {
                rangeStart = this.anchorRowIndex;
                rangeEnd = this.rangeRowIndex;
            }
            else if (this.rangeRowIndex < this.anchorRowIndex) {
                rangeStart = this.rangeRowIndex;
                rangeEnd = this.anchorRowIndex;
            }
            else {
                rangeStart = this.rangeRowIndex;
                rangeEnd = this.rangeRowIndex;
            }
            var _loop_1 = function (i) {
                var rangeRowData = this_1.value[i];
                var selectionIndex = this_1.findIndexInSelection(rangeRowData);
                this_1._selection = this_1.selection.filter(function (val, i) { return i != selectionIndex; });
                var dataKeyValue = this_1.dataKey ? String(utils.ObjectUtils.resolveFieldData(rangeRowData, this_1.dataKey)) : null;
                if (dataKeyValue) {
                    delete this_1.selectionKeys[dataKeyValue];
                }
                this_1.onRowUnselect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
            };
            var this_1 = this;
            for (var i = rangeStart; i <= rangeEnd; i++) {
                _loop_1(i);
            }
        };
        Table.prototype.isSelected = function (rowData) {
            if (rowData && this.selection) {
                if (this.dataKey) {
                    return this.selectionKeys[utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
                }
                else {
                    if (this.selection instanceof Array)
                        return this.findIndexInSelection(rowData) > -1;
                    else
                        return this.equals(rowData, this.selection);
                }
            }
            return false;
        };
        Table.prototype.findIndexInSelection = function (rowData) {
            var index = -1;
            if (this.selection && this.selection.length) {
                for (var i = 0; i < this.selection.length; i++) {
                    if (this.equals(rowData, this.selection[i])) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        Table.prototype.toggleRowWithRadio = function (event, rowData) {
            this.preventSelectionSetterPropagation = true;
            if (this.selection != rowData) {
                this._selection = rowData;
                this.selectionChange.emit(this.selection);
                this.onRowSelect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'radiobutton' });
                if (this.dataKey) {
                    this.selectionKeys = {};
                    this.selectionKeys[String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
                }
            }
            else {
                this._selection = null;
                this.selectionChange.emit(this.selection);
                this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'radiobutton' });
            }
            this.tableService.onSelectionChange();
            if (this.isStateful()) {
                this.saveState();
            }
        };
        Table.prototype.toggleRowWithCheckbox = function (event, rowData) {
            this.selection = this.selection || [];
            var selected = this.isSelected(rowData);
            var dataKeyValue = this.dataKey ? String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
            this.preventSelectionSetterPropagation = true;
            if (selected) {
                var selectionIndex_3 = this.findIndexInSelection(rowData);
                this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_3; });
                this.selectionChange.emit(this.selection);
                this.onRowUnselect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
                if (dataKeyValue) {
                    delete this.selectionKeys[dataKeyValue];
                }
            }
            else {
                this._selection = this.selection ? __spread(this.selection, [rowData]) : [rowData];
                this.selectionChange.emit(this.selection);
                this.onRowSelect.emit({ originalEvent: event.originalEvent, index: event.rowIndex, data: rowData, type: 'checkbox' });
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
            }
            this.tableService.onSelectionChange();
            if (this.isStateful()) {
                this.saveState();
            }
        };
        Table.prototype.toggleRowsWithCheckbox = function (event, check) {
            this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
            this.preventSelectionSetterPropagation = true;
            this.updateSelectionKeys();
            this.selectionChange.emit(this._selection);
            this.tableService.onSelectionChange();
            this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
            if (this.isStateful()) {
                this.saveState();
            }
        };
        Table.prototype.equals = function (data1, data2) {
            return this.compareSelectionBy === 'equals' ? (data1 === data2) : utils.ObjectUtils.equals(data1, data2, this.dataKey);
        };
        /* Legacy Filtering for custom elements */
        Table.prototype.filter = function (value, field, matchMode) {
            var _this = this;
            if (this.filterTimeout) {
                clearTimeout(this.filterTimeout);
            }
            if (!this.isFilterBlank(value)) {
                this.filters[field] = { value: value, matchMode: matchMode };
            }
            else if (this.filters[field]) {
                delete this.filters[field];
            }
            this.filterTimeout = setTimeout(function () {
                _this._filter();
                _this.filterTimeout = null;
            }, this.filterDelay);
            this.anchorRowIndex = null;
        };
        Table.prototype.filterGlobal = function (value, matchMode) {
            this.filter(value, 'global', matchMode);
        };
        Table.prototype.isFilterBlank = function (filter) {
            if (filter !== null && filter !== undefined) {
                if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                    return true;
                else
                    return false;
            }
            return true;
        };
        Table.prototype._filter = function () {
            var e_2, _b;
            if (!this.restoringFilter) {
                this.first = 0;
                this.firstChange.emit(this.first);
            }
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else {
                if (!this.value) {
                    return;
                }
                if (!this.hasFilter()) {
                    this.filteredValue = null;
                    if (this.paginator) {
                        this.totalRecords = this.value ? this.value.length : 0;
                    }
                }
                else {
                    var globalFilterFieldsArray = void 0;
                    if (this.filters['global']) {
                        if (!this.columns && !this.globalFilterFields)
                            throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                        else
                            globalFilterFieldsArray = this.globalFilterFields || this.columns;
                    }
                    this.filteredValue = [];
                    for (var i = 0; i < this.value.length; i++) {
                        var localMatch = true;
                        var globalMatch = false;
                        var localFiltered = false;
                        for (var prop in this.filters) {
                            if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                                localFiltered = true;
                                var filterField = prop;
                                var filterMeta = this.filters[filterField];
                                if (Array.isArray(filterMeta)) {
                                    try {
                                        for (var filterMeta_1 = (e_2 = void 0, __values(filterMeta)), filterMeta_1_1 = filterMeta_1.next(); !filterMeta_1_1.done; filterMeta_1_1 = filterMeta_1.next()) {
                                            var meta = filterMeta_1_1.value;
                                            localMatch = this.executeLocalFilter(filterField, this.value[i], meta);
                                            if ((meta.operator === api.FilterOperator.OR && localMatch) || (meta.operator === api.FilterOperator.AND && !localMatch)) {
                                                break;
                                            }
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (filterMeta_1_1 && !filterMeta_1_1.done && (_b = filterMeta_1.return)) _b.call(filterMeta_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                }
                                else {
                                    localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
                                }
                                if (!localMatch) {
                                    break;
                                }
                            }
                        }
                        if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                            for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                                var globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                                globalMatch = this.filterService.filters[this.filters['global'].matchMode](utils.ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value, this.filterLocale);
                                if (globalMatch) {
                                    break;
                                }
                            }
                        }
                        var matches = void 0;
                        if (this.filters['global']) {
                            matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch;
                        }
                        else {
                            matches = localFiltered && localMatch;
                        }
                        if (matches) {
                            this.filteredValue.push(this.value[i]);
                        }
                    }
                    if (this.filteredValue.length === this.value.length) {
                        this.filteredValue = null;
                    }
                    if (this.paginator) {
                        this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
                    }
                }
            }
            this.onFilter.emit({
                filters: this.filters,
                filteredValue: this.filteredValue || this.value
            });
            this.tableService.onValueChange(this.value);
            if (this.isStateful() && !this.restoringFilter) {
                this.saveState();
            }
            if (this.restoringFilter) {
                this.restoringFilter = false;
            }
            this.cd.markForCheck();
            if (this.scrollable) {
                this.resetScrollTop();
            }
        };
        Table.prototype.executeLocalFilter = function (field, rowData, filterMeta) {
            var filterValue = filterMeta.value;
            var filterMatchMode = filterMeta.matchMode || api.FilterMatchMode.STARTS_WITH;
            var dataFieldValue = utils.ObjectUtils.resolveFieldData(rowData, field);
            var filterConstraint = this.filterService.filters[filterMatchMode];
            return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
        };
        Table.prototype.hasFilter = function () {
            var empty = true;
            for (var prop in this.filters) {
                if (this.filters.hasOwnProperty(prop)) {
                    empty = false;
                    break;
                }
            }
            return !empty;
        };
        Table.prototype.createLazyLoadMetadata = function () {
            return {
                first: this.first,
                rows: this.rows,
                sortField: this.sortField,
                sortOrder: this.sortOrder,
                filters: this.filters,
                globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
                multiSortMeta: this.multiSortMeta
            };
        };
        Table.prototype.clear = function () {
            this._sortField = null;
            this._sortOrder = this.defaultSortOrder;
            this._multiSortMeta = null;
            this.tableService.onSort(null);
            this.filteredValue = null;
            this.tableService.onResetChange();
            this.first = 0;
            this.firstChange.emit(this.first);
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else {
                this.totalRecords = (this._value ? this._value.length : 0);
            }
        };
        Table.prototype.reset = function () {
            this.clear();
        };
        Table.prototype.exportCSV = function (options) {
            var _this = this;
            var data;
            var csv = '';
            var columns = this.frozenColumns ? __spread(this.frozenColumns, this.columns) : this.columns;
            if (options && options.selectionOnly) {
                data = this.selection || [];
            }
            else {
                data = this.filteredValue || this.value;
                if (this.frozenValue) {
                    data = data ? __spread(this.frozenValue, data) : this.frozenValue;
                }
            }
            //headers
            for (var i = 0; i < columns.length; i++) {
                var column = columns[i];
                if (column.exportable !== false && column.field) {
                    csv += '"' + (column.header || column.field) + '"';
                    if (i < (columns.length - 1)) {
                        csv += this.csvSeparator;
                    }
                }
            }
            //body
            data.forEach(function (record, i) {
                csv += '\n';
                for (var i_1 = 0; i_1 < columns.length; i_1++) {
                    var column = columns[i_1];
                    if (column.exportable !== false && column.field) {
                        var cellData = utils.ObjectUtils.resolveFieldData(record, column.field);
                        if (cellData != null) {
                            if (_this.exportFunction) {
                                cellData = _this.exportFunction({
                                    data: cellData,
                                    field: column.field
                                });
                            }
                            else
                                cellData = String(cellData).replace(/"/g, '""');
                        }
                        else
                            cellData = '';
                        csv += '"' + cellData + '"';
                        if (i_1 < (columns.length - 1)) {
                            csv += _this.csvSeparator;
                        }
                    }
                }
            });
            var blob = new Blob([csv], {
                type: 'text/csv;charset=utf-8;'
            });
            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
            }
            else {
                var link = document.createElement("a");
                link.style.display = 'none';
                document.body.appendChild(link);
                if (link.download !== undefined) {
                    link.setAttribute('href', URL.createObjectURL(blob));
                    link.setAttribute('download', this.exportFilename + '.csv');
                    link.click();
                }
                else {
                    csv = 'data:text/csv;charset=utf-8,' + csv;
                    window.open(encodeURI(csv));
                }
                document.body.removeChild(link);
            }
        };
        Table.prototype.resetScrollTop = function () {
            if (this.virtualScroll)
                this.scrollToVirtualIndex(0);
            else
                this.scrollTo({ top: 0 });
        };
        Table.prototype.scrollToVirtualIndex = function (index) {
            if (this.scrollableViewChild) {
                this.scrollableViewChild.scrollToVirtualIndex(index);
            }
            if (this.scrollableFrozenViewChild) {
                this.scrollableFrozenViewChild.scrollToVirtualIndex(index);
            }
        };
        Table.prototype.scrollTo = function (options) {
            if (this.scrollableViewChild) {
                this.scrollableViewChild.scrollTo(options);
            }
            if (this.scrollableFrozenViewChild) {
                this.scrollableFrozenViewChild.scrollTo(options);
            }
        };
        Table.prototype.updateEditingCell = function (cell, data, field, index) {
            this.editingCell = cell;
            this.editingCellData = data;
            this.editingCellField = field;
            this.editingCellRowIndex = index;
            this.bindDocumentEditListener();
        };
        Table.prototype.isEditingCellValid = function () {
            return (this.editingCell && dom.DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0);
        };
        Table.prototype.bindDocumentEditListener = function () {
            var _this = this;
            if (!this.documentEditListener) {
                this.documentEditListener = function (event) {
                    if (_this.editingCell && !_this.editingCellClick && _this.isEditingCellValid()) {
                        dom.DomHandler.removeClass(_this.editingCell, 'p-cell-editing');
                        _this.editingCell = null;
                        _this.onEditComplete.emit({ field: _this.editingCellField, data: _this.editingCellData, originalEvent: event, index: _this.editingCellRowIndex });
                        _this.editingCellField = null;
                        _this.editingCellData = null;
                        _this.editingCellRowIndex = null;
                        _this.unbindDocumentEditListener();
                        _this.cd.markForCheck();
                    }
                    _this.editingCellClick = false;
                };
                document.addEventListener('click', this.documentEditListener);
            }
        };
        Table.prototype.unbindDocumentEditListener = function () {
            if (this.documentEditListener) {
                document.removeEventListener('click', this.documentEditListener);
                this.documentEditListener = null;
            }
        };
        Table.prototype.initRowEdit = function (rowData) {
            var dataKeyValue = String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey));
            this.editingRowKeys[dataKeyValue] = true;
        };
        Table.prototype.saveRowEdit = function (rowData, rowElement) {
            if (dom.DomHandler.find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
                var dataKeyValue = String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey));
                delete this.editingRowKeys[dataKeyValue];
            }
        };
        Table.prototype.cancelRowEdit = function (rowData) {
            var dataKeyValue = String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey));
            delete this.editingRowKeys[dataKeyValue];
        };
        Table.prototype.toggleRow = function (rowData, event) {
            if (!this.dataKey) {
                throw new Error('dataKey must be defined to use row expansion');
            }
            var dataKeyValue = String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey));
            if (this.expandedRowKeys[dataKeyValue] != null) {
                delete this.expandedRowKeys[dataKeyValue];
                this.onRowCollapse.emit({
                    originalEvent: event,
                    data: rowData
                });
            }
            else {
                if (this.rowExpandMode === 'single') {
                    this.expandedRowKeys = {};
                }
                this.expandedRowKeys[dataKeyValue] = true;
                this.onRowExpand.emit({
                    originalEvent: event,
                    data: rowData
                });
            }
            if (event) {
                event.preventDefault();
            }
            if (this.isStateful()) {
                this.saveState();
            }
        };
        Table.prototype.isRowExpanded = function (rowData) {
            return this.expandedRowKeys[String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
        };
        Table.prototype.isRowEditing = function (rowData) {
            return this.editingRowKeys[String(utils.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
        };
        Table.prototype.isSingleSelectionMode = function () {
            return this.selectionMode === 'single';
        };
        Table.prototype.isMultipleSelectionMode = function () {
            return this.selectionMode === 'multiple';
        };
        Table.prototype.onColumnResizeBegin = function (event) {
            var containerLeft = dom.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
            this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
            this.onColumnResize(event);
            event.preventDefault();
        };
        Table.prototype.onColumnResize = function (event) {
            var containerLeft = dom.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
            dom.DomHandler.addClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
            this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
            this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
            this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
            this.resizeHelperViewChild.nativeElement.style.display = 'block';
        };
        Table.prototype.onColumnResizeEnd = function (event, column) {
            var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
            var columnWidth = column.offsetWidth;
            var minWidth = parseInt(column.style.minWidth || 15);
            if (columnWidth + delta < minWidth) {
                delta = minWidth - columnWidth;
            }
            var newColumnWidth = columnWidth + delta;
            if (newColumnWidth >= minWidth) {
                if (this.columnResizeMode === 'fit') {
                    var nextColumn = column.nextElementSibling;
                    while (!nextColumn.offsetParent) {
                        nextColumn = nextColumn.nextElementSibling;
                    }
                    if (nextColumn) {
                        var nextColumnWidth = nextColumn.offsetWidth - delta;
                        var nextColumnMinWidth = nextColumn.style.minWidth || 15;
                        if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                            if (this.scrollable) {
                                var scrollableView = this.findParentScrollableView(column);
                                var scrollableBodyTable = dom.DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-body table') || dom.DomHandler.findSingle(scrollableView, '.p-datatable-virtual-scrollable-body table');
                                var scrollableHeaderTable = dom.DomHandler.findSingle(scrollableView, 'table.p-datatable-scrollable-header-table');
                                var scrollableFooterTable = dom.DomHandler.findSingle(scrollableView, 'table.p-datatable-scrollable-footer-table');
                                var resizeColumnIndex = dom.DomHandler.index(column);
                                this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                                this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                                this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            }
                            else {
                                column.style.width = newColumnWidth + 'px';
                                if (nextColumn) {
                                    nextColumn.style.width = nextColumnWidth + 'px';
                                }
                            }
                        }
                    }
                }
                else if (this.columnResizeMode === 'expand') {
                    if (newColumnWidth >= minWidth) {
                        if (this.scrollable) {
                            this.setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta);
                        }
                        else {
                            this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                            column.style.width = newColumnWidth + 'px';
                            var containerWidth = this.tableViewChild.nativeElement.style.width;
                            this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                        }
                    }
                }
                this.onColResize.emit({
                    element: column,
                    delta: delta
                });
                if (this.isStateful()) {
                    this.saveState();
                }
            }
            this.resizeHelperViewChild.nativeElement.style.display = 'none';
            dom.DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
        };
        Table.prototype.setScrollableItemsWidthOnExpandResize = function (column, newColumnWidth, delta) {
            var scrollableView = column ? this.findParentScrollableView(column) : this.containerViewChild.nativeElement;
            var scrollableBody = dom.DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-body') || dom.DomHandler.findSingle(scrollableView, 'cdk-virtual-scroll-viewport');
            var scrollableHeader = dom.DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-header');
            var scrollableFooter = dom.DomHandler.findSingle(scrollableView, '.p-datatable-scrollable-footer');
            var scrollableBodyTable = dom.DomHandler.findSingle(scrollableBody, '.p-datatable-scrollable-body table') || dom.DomHandler.findSingle(scrollableView, 'cdk-virtual-scroll-viewport table');
            var scrollableHeaderTable = dom.DomHandler.findSingle(scrollableHeader, 'table.p-datatable-scrollable-header-table');
            var scrollableFooterTable = dom.DomHandler.findSingle(scrollableFooter, 'table.p-datatable-scrollable-footer-table');
            var scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
            var scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
            var isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;
            var setWidth = function (container, table, width, isContainerInViewport) {
                if (container && table) {
                    container.style.width = isContainerInViewport ? width + dom.DomHandler.calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
                    table.style.width = width + 'px';
                }
            };
            setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
            setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
            setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
            if (column) {
                var resizeColumnIndex = dom.DomHandler.index(column);
                this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
            }
        };
        Table.prototype.findParentScrollableView = function (column) {
            if (column) {
                var parent = column.parentElement;
                while (parent && !dom.DomHandler.hasClass(parent, 'p-datatable-scrollable-view')) {
                    parent = parent.parentElement;
                }
                return parent;
            }
            else {
                return null;
            }
        };
        Table.prototype.resizeColGroup = function (table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
            if (table) {
                var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
                if (colGroup) {
                    var col = colGroup.children[resizeColumnIndex];
                    var nextCol = col.nextElementSibling;
                    col.style.width = newColumnWidth + 'px';
                    if (nextCol && nextColumnWidth) {
                        nextCol.style.width = nextColumnWidth + 'px';
                    }
                }
                else {
                    throw "Scrollable tables require a colgroup to support resizable columns";
                }
            }
        };
        Table.prototype.onColumnDragStart = function (event, columnElement) {
            this.reorderIconWidth = dom.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
            this.reorderIconHeight = dom.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
            this.draggedColumn = columnElement;
            event.dataTransfer.setData('text', 'b'); // For firefox
        };
        Table.prototype.onColumnDragEnter = function (event, dropHeader) {
            if (this.reorderableColumns && this.draggedColumn && dropHeader) {
                event.preventDefault();
                var containerOffset = dom.DomHandler.getOffset(this.containerViewChild.nativeElement);
                var dropHeaderOffset = dom.DomHandler.getOffset(dropHeader);
                if (this.draggedColumn != dropHeader) {
                    var dragIndex = dom.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
                    var dropIndex = dom.DomHandler.indexWithinGroup(dropHeader, 'preorderablecolumn');
                    var targetLeft = dropHeaderOffset.left - containerOffset.left;
                    var targetTop = containerOffset.top - dropHeaderOffset.top;
                    var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                    this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                    if (event.pageX > columnCenter) {
                        this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                        this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                        this.dropPosition = 1;
                    }
                    else {
                        this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                        this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                        this.dropPosition = -1;
                    }
                    if ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dropIndex - dragIndex === -1 && this.dropPosition === 1)) {
                        this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                        this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
                    }
                    else {
                        this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                        this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
                    }
                }
                else {
                    event.dataTransfer.dropEffect = 'none';
                }
            }
        };
        Table.prototype.onColumnDragLeave = function (event) {
            if (this.reorderableColumns && this.draggedColumn) {
                event.preventDefault();
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            }
        };
        Table.prototype.onColumnDrop = function (event, dropColumn) {
            var _this = this;
            event.preventDefault();
            if (this.draggedColumn) {
                var dragIndex = dom.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
                var dropIndex = dom.DomHandler.indexWithinGroup(dropColumn, 'preorderablecolumn');
                var allowDrop = (dragIndex != dropIndex);
                if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                    allowDrop = false;
                }
                if (allowDrop && ((dropIndex < dragIndex && this.dropPosition === 1))) {
                    dropIndex = dropIndex + 1;
                }
                if (allowDrop && ((dropIndex > dragIndex && this.dropPosition === -1))) {
                    dropIndex = dropIndex - 1;
                }
                if (allowDrop) {
                    utils.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                    this.onColReorder.emit({
                        dragIndex: dragIndex,
                        dropIndex: dropIndex,
                        columns: this.columns
                    });
                    if (this.isStateful()) {
                        this.zone.runOutsideAngular(function () {
                            setTimeout(function () {
                                _this.saveState();
                            });
                        });
                    }
                }
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
                this.draggedColumn.draggable = false;
                this.draggedColumn = null;
                this.dropPosition = null;
            }
        };
        Table.prototype.onRowDragStart = function (event, index) {
            this.rowDragging = true;
            this.draggedRowIndex = index;
            event.dataTransfer.setData('text', 'b'); // For firefox
        };
        Table.prototype.onRowDragOver = function (event, index, rowElement) {
            if (this.rowDragging && this.draggedRowIndex !== index) {
                var rowY = dom.DomHandler.getOffset(rowElement).top + dom.DomHandler.getWindowScrollTop();
                var pageY = event.pageY;
                var rowMidY = rowY + dom.DomHandler.getOuterHeight(rowElement) / 2;
                var prevRowElement = rowElement.previousElementSibling;
                if (pageY < rowMidY) {
                    dom.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
                    this.droppedRowIndex = index;
                    if (prevRowElement)
                        dom.DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    else
                        dom.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                }
                else {
                    if (prevRowElement)
                        dom.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    else
                        dom.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                    this.droppedRowIndex = index + 1;
                    dom.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
                }
            }
        };
        Table.prototype.onRowDragLeave = function (event, rowElement) {
            var prevRowElement = rowElement.previousElementSibling;
            if (prevRowElement) {
                dom.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
            }
            dom.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
            dom.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
        };
        Table.prototype.onRowDragEnd = function (event) {
            this.rowDragging = false;
            this.draggedRowIndex = null;
            this.droppedRowIndex = null;
        };
        Table.prototype.onRowDrop = function (event, rowElement) {
            if (this.droppedRowIndex != null) {
                var dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
                utils.ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
                this.onRowReorder.emit({
                    dragIndex: this.draggedRowIndex,
                    dropIndex: dropIndex
                });
            }
            //cleanup
            this.onRowDragLeave(event, rowElement);
            this.onRowDragEnd(event);
        };
        Table.prototype.isEmpty = function () {
            var data = this.filteredValue || this.value;
            return data == null || data.length == 0;
        };
        Table.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        Table.prototype.getStorage = function () {
            switch (this.stateStorage) {
                case 'local':
                    return window.localStorage;
                case 'session':
                    return window.sessionStorage;
                default:
                    throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
            }
        };
        Table.prototype.isStateful = function () {
            return this.stateKey != null;
        };
        Table.prototype.saveState = function () {
            var storage = this.getStorage();
            var state = {};
            if (this.paginator) {
                state.first = this.first;
                state.rows = this.rows;
            }
            if (this.sortField) {
                state.sortField = this.sortField;
                state.sortOrder = this.sortOrder;
            }
            if (this.multiSortMeta) {
                state.multiSortMeta = this.multiSortMeta;
            }
            if (this.hasFilter()) {
                state.filters = this.filters;
            }
            if (this.resizableColumns) {
                this.saveColumnWidths(state);
            }
            if (this.reorderableColumns) {
                this.saveColumnOrder(state);
            }
            if (this.selection) {
                state.selection = this.selection;
            }
            if (Object.keys(this.expandedRowKeys).length) {
                state.expandedRowKeys = this.expandedRowKeys;
            }
            storage.setItem(this.stateKey, JSON.stringify(state));
            this.onStateSave.emit(state);
        };
        Table.prototype.clearState = function () {
            var storage = this.getStorage();
            if (this.stateKey) {
                storage.removeItem(this.stateKey);
            }
        };
        Table.prototype.restoreState = function () {
            var _this = this;
            var storage = this.getStorage();
            var stateString = storage.getItem(this.stateKey);
            var dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
            var reviver = function (key, value) {
                if (typeof value === "string" && dateFormat.test(value)) {
                    return new Date(value);
                }
                return value;
            };
            if (stateString) {
                var state_1 = JSON.parse(stateString, reviver);
                if (this.paginator) {
                    if (this.first !== undefined) {
                        this.first = state_1.first;
                        this.firstChange.emit(this.first);
                    }
                    if (this.rows !== undefined) {
                        this.rows = state_1.rows;
                        this.rowsChange.emit(this.rows);
                    }
                }
                if (state_1.sortField) {
                    this.restoringSort = true;
                    this._sortField = state_1.sortField;
                    this._sortOrder = state_1.sortOrder;
                }
                if (state_1.multiSortMeta) {
                    this.restoringSort = true;
                    this._multiSortMeta = state_1.multiSortMeta;
                }
                if (state_1.filters) {
                    this.restoringFilter = true;
                    this.filters = state_1.filters;
                }
                if (this.resizableColumns) {
                    this.columnWidthsState = state_1.columnWidths;
                    this.tableWidthState = state_1.tableWidth;
                }
                if (state_1.expandedRowKeys) {
                    this.expandedRowKeys = state_1.expandedRowKeys;
                }
                if (state_1.selection) {
                    Promise.resolve(null).then(function () { return _this.selectionChange.emit(state_1.selection); });
                }
                this.stateRestored = true;
                this.onStateRestore.emit(state_1);
            }
        };
        Table.prototype.saveColumnWidths = function (state) {
            var widths = [];
            var headers = dom.DomHandler.find(this.containerViewChild.nativeElement, '.p-datatable-thead > tr:first-child > th');
            headers.map(function (header) { return widths.push(dom.DomHandler.getOuterWidth(header)); });
            state.columnWidths = widths.join(',');
            if (this.columnResizeMode === 'expand') {
                state.tableWidth = this.scrollable ? dom.DomHandler.findSingle(this.containerViewChild.nativeElement, '.p-datatable-scrollable-header-table').style.width :
                    dom.DomHandler.getOuterWidth(this.tableViewChild.nativeElement) + 'px';
            }
        };
        Table.prototype.restoreColumnWidths = function () {
            if (this.columnWidthsState) {
                var widths_1 = this.columnWidthsState.split(',');
                if (this.columnResizeMode === 'expand' && this.tableWidthState) {
                    if (this.scrollable) {
                        this.setScrollableItemsWidthOnExpandResize(null, this.tableWidthState, 0);
                    }
                    else {
                        this.tableViewChild.nativeElement.style.width = this.tableWidthState;
                    }
                }
                if (this.scrollable) {
                    var headerCols = dom.DomHandler.find(this.containerViewChild.nativeElement, '.p-datatable-scrollable-header-table > colgroup > col');
                    var bodyCols = this.virtualScroll ? dom.DomHandler.find(this.containerViewChild.nativeElement, 'cdk-virtual-scroll-viewport table > colgroup > col') : dom.DomHandler.find(this.containerViewChild.nativeElement, '.p-datatable-scrollable-body table > colgroup > col');
                    headerCols.map(function (col, index) { return col.style.width = widths_1[index] + 'px'; });
                    bodyCols.map(function (col, index) { return col.style.width = widths_1[index] + 'px'; });
                }
                else {
                    var headers = dom.DomHandler.find(this.tableViewChild.nativeElement, '.p-datatable-thead > tr:first-child > th');
                    headers.map(function (header, index) { return header.style.width = widths_1[index] + 'px'; });
                }
            }
        };
        Table.prototype.saveColumnOrder = function (state) {
            if (this.columns) {
                var columnOrder_1 = [];
                this.columns.map(function (column) {
                    columnOrder_1.push(column.field || column.key);
                });
                state.columnOrder = columnOrder_1;
            }
        };
        Table.prototype.restoreColumnOrder = function () {
            var _this = this;
            var storage = this.getStorage();
            var stateString = storage.getItem(this.stateKey);
            if (stateString) {
                var state = JSON.parse(stateString);
                var columnOrder = state.columnOrder;
                if (columnOrder) {
                    var reorderedColumns_1 = [];
                    columnOrder.map(function (key) {
                        var col = _this.findColumnByKey(key);
                        if (col) {
                            reorderedColumns_1.push(col);
                        }
                    });
                    this.columnOrderStateRestored = true;
                    this.columns = reorderedColumns_1;
                }
            }
        };
        Table.prototype.findColumnByKey = function (key) {
            var e_3, _b;
            if (this.columns) {
                try {
                    for (var _c = __values(this.columns), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var col = _d.value;
                        if (col.key === key || col.field === key)
                            return col;
                        else
                            continue;
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
            else {
                return null;
            }
        };
        Table.prototype.ngOnDestroy = function () {
            this.unbindDocumentEditListener();
            this.editingCell = null;
            this.initialized = null;
        };
Table.ɵfac = function Table_Factory(t) { return new (t || Table)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FilterService)); };
Table.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Table, selectors: [["p-table"]], contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Table_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.resizeHelperViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.reorderIndicatorUpViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.reorderIndicatorDownViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableFrozenViewChild = _t.first);
    } }, inputs: { pageLinks: "pageLinks", alwaysShowPaginator: "alwaysShowPaginator", paginatorPosition: "paginatorPosition", paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight", currentPageReportTemplate: "currentPageReportTemplate", showFirstLastIcon: "showFirstLastIcon", showPageLinks: "showPageLinks", defaultSortOrder: "defaultSortOrder", sortMode: "sortMode", resetPageOnSort: "resetPageOnSort", contextMenuSelectionMode: "contextMenuSelectionMode", rowTrackBy: "rowTrackBy", lazy: "lazy", lazyLoadOnInit: "lazyLoadOnInit", compareSelectionBy: "compareSelectionBy", csvSeparator: "csvSeparator", exportFilename: "exportFilename", filters: "filters", filterDelay: "filterDelay", expandedRowKeys: "expandedRowKeys", editingRowKeys: "editingRowKeys", rowExpandMode: "rowExpandMode", virtualScrollDelay: "virtualScrollDelay", virtualRowHeight: "virtualRowHeight", columnResizeMode: "columnResizeMode", loadingIcon: "loadingIcon", showLoader: "showLoader", stateStorage: "stateStorage", editMode: "editMode", totalRecords: "totalRecords", value: "value", columns: "columns", first: "first", rows: "rows", sortField: "sortField", sortOrder: "sortOrder", multiSortMeta: "multiSortMeta", selection: "selection", contextMenuSelection: "contextMenuSelection", frozenColumns: "frozenColumns", frozenValue: "frozenValue", style: "style", styleClass: "styleClass", tableStyle: "tableStyle", tableStyleClass: "tableStyleClass", paginator: "paginator", rowsPerPageOptions: "rowsPerPageOptions", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", showJumpToPageDropdown: "showJumpToPageDropdown", selectionMode: "selectionMode", dataKey: "dataKey", metaKeySelection: "metaKeySelection", globalFilterFields: "globalFilterFields", filterLocale: "filterLocale", scrollable: "scrollable", scrollHeight: "scrollHeight", virtualScroll: "virtualScroll", frozenWidth: "frozenWidth", responsive: "responsive", contextMenu: "contextMenu", resizableColumns: "resizableColumns", reorderableColumns: "reorderableColumns", loading: "loading", rowHover: "rowHover", customSort: "customSort", autoLayout: "autoLayout", exportFunction: "exportFunction", stateKey: "stateKey", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, outputs: { selectionChange: "selectionChange", contextMenuSelectionChange: "contextMenuSelectionChange", onRowSelect: "onRowSelect", onRowUnselect: "onRowUnselect", onPage: "onPage", onSort: "onSort", onFilter: "onFilter", onLazyLoad: "onLazyLoad", onRowExpand: "onRowExpand", onRowCollapse: "onRowCollapse", onContextMenuSelect: "onContextMenuSelect", onColResize: "onColResize", onColReorder: "onColReorder", onRowReorder: "onRowReorder", onEditInit: "onEditInit", onEditComplete: "onEditComplete", onEditCancel: "onEditCancel", onHeaderCheckboxToggle: "onHeaderCheckboxToggle", sortFunction: "sortFunction", firstChange: "firstChange", rowsChange: "rowsChange", onStateSave: "onStateSave", onStateRestore: "onStateRestore" }, features: [ɵngcc0.ɵɵProvidersFeature([TableService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 22, consts: [["data-scrollselectors", ".p-datatable-scrollable-body, .p-datatable-unfrozen-view .p-datatable-scrollable-body", 3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-datatable-loading-overlay p-component-overlay", 4, "ngIf"], ["class", "p-datatable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-datatable-wrapper", 4, "ngIf"], ["class", "p-datatable-scrollable-wrapper", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-datatable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-down p-datatable-reorder-indicator-up", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-up p-datatable-reorder-indicator-down", "style", "display:none", 4, "ngIf"], [1, "p-datatable-loading-overlay", "p-component-overlay"], [1, "p-datatable-header"], [4, "ngTemplateOutlet"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-datatable-wrapper"], ["role", "grid", 3, "ngClass", "ngStyle"], ["table", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-datatable-thead"], [1, "p-datatable-tbody", 3, "pTableBody", "pTableBodyTemplate"], ["class", "p-datatable-tfoot", 4, "ngIf"], [1, "p-datatable-tfoot"], [1, "p-datatable-scrollable-wrapper"], ["class", "p-datatable-scrollable-view p-datatable-frozen-view", 3, "pScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [1, "p-datatable-scrollable-view", 3, "pScrollableView", "frozen", "scrollHeight", "ngStyle"], ["scrollableView", ""], [1, "p-datatable-scrollable-view", "p-datatable-frozen-view", 3, "pScrollableView", "frozen", "ngStyle", "scrollHeight"], ["scrollableFrozenView", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-datatable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "pi", "pi-arrow-down", "p-datatable-reorder-indicator-up", 2, "display", "none"], ["reorderIndicatorUp", ""], [1, "pi", "pi-arrow-up", "p-datatable-reorder-indicator-down", 2, "display", "none"], ["reorderIndicatorDown", ""]], template: function Table_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, Table_div_2_Template, 2, 2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, Table_div_3_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(4, Table_p_paginator_4_Template, 1, 16, "p-paginator", 4);
        ɵngcc0.ɵɵtemplate(5, Table_div_5_Template, 8, 13, "div", 5);
        ɵngcc0.ɵɵtemplate(6, Table_div_6_Template, 4, 8, "div", 6);
        ɵngcc0.ɵɵtemplate(7, Table_p_paginator_7_Template, 1, 16, "p-paginator", 7);
        ɵngcc0.ɵɵtemplate(8, Table_div_8_Template, 2, 1, "div", 8);
        ɵngcc0.ɵɵtemplate(9, Table_div_9_Template, 2, 0, "div", 9);
        ɵngcc0.ɵɵtemplate(10, Table_span_10_Template, 2, 0, "span", 10);
        ɵngcc0.ɵɵtemplate(11, Table_span_11_Template, 2, 0, "span", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction7(14, _c10, ctx.rowHover || ctx.selectionMode, ctx.autoLayout, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.scrollable, ctx.scrollable && ctx.scrollHeight === "flex", ctx.responsive));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading && ctx.showLoader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.captionTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.scrollable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.scrollable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.summaryTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.resizableColumns);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.reorderableColumns);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.reorderableColumns);
    } }, directives: function () { return [ɵngcc2.NgStyle, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc3.Paginator, TableBody, ScrollableView]; }, styles: [".p-datatable{position:relative}.p-datatable table{border-collapse:collapse;table-layout:fixed;width:100%}.p-datatable .p-sortable-column{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-badge,.p-datatable .p-sortable-column .p-sortable-column-icon{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{align-items:center;display:inline-flex;justify-content:center}.p-datatable-auto-layout>.p-datatable-wrapper{overflow-x:auto}.p-datatable-auto-layout>.p-datatable-wrapper>table{table-layout:auto}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable-wrapper{position:relative}.p-datatable-scrollable-footer,.p-datatable-scrollable-header{overflow:hidden}.p-datatable-scrollable-body{overflow:auto;position:relative}.p-datatable-scrollable-body>table>.p-datatable-tbody>tr:first-child>td{border-top:0}.p-datatable-virtual-table{position:absolute}.p-datatable-frozen-view .p-datatable-scrollable-body{overflow:hidden}.p-datatable-frozen-view>.p-datatable-scrollable-body>table>.p-datatable-tbody>tr>td:last-child{border-right:0}.p-datatable-unfrozen-view{position:absolute;top:0}.p-datatable-flex-scrollable,.p-datatable-flex-scrollable .p-datatable-scrollable-view,.p-datatable-flex-scrollable .p-datatable-scrollable-wrapper{display:flex;flex:1;flex-direction:column;height:100%}.p-datatable-flex-scrollable .p-datatable-scrollable-body,.p-datatable-flex-scrollable .p-datatable-virtual-scrollable-body{flex:1}.p-datatable-resizable>.p-datatable-wrapper{overflow-x:auto}.p-datatable-resizable .p-datatable-tbody>tr>td,.p-datatable-resizable .p-datatable-tfoot>tr>td,.p-datatable-resizable .p-datatable-thead>tr>th{overflow:hidden;white-space:nowrap}.p-datatable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{border:1px solid transparent;cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5rem}.p-datatable .p-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.p-datatable .p-row-editor-cancel,.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-toggler{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-down,.p-datatable-reorder-indicator-up{display:none;position:absolute}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{align-items:center;display:flex;justify-content:center;position:absolute;z-index:2}.p-column-filter-row{align-items:center;display:flex;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-clear-button,.p-column-filter-menu-button{align-items:center;cursor:pointer;display:inline-flex;justify-content:center;overflow:hidden;position:relative;text-decoration:none}.p-column-filter-overlay{position:absolute}.p-column-filter-row-items{list-style:none;margin:0;padding:0}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{align-items:center;display:flex;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td .p-column-title{display:none}cdk-virtual-scroll-viewport{outline:0 none}@media screen and (max-width:40em){.p-datatable.p-datatable-responsive .p-datatable-tfoot>tr>td,.p-datatable.p-datatable-responsive .p-datatable-thead>tr>th{display:none!important}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td{border:0;clear:left;display:block;float:left;text-align:left;width:100%}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td .p-column-title{display:inline-block;font-weight:700;margin:-.4em 1em -.4em -.4rem;min-width:30%;padding:.4rem}}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Table, [{
        type: core.Component,
        args: [{
                selector: 'p-table',
                template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\" data-scrollselectors=\".p-datatable-scrollable-body, .p-datatable-unfrozen-view .p-datatable-scrollable-body\"\n            [ngClass]=\"{'p-datatable p-component': true,\n                'p-datatable-hoverable-rows': (rowHover||selectionMode),\n                'p-datatable-auto-layout': autoLayout,\n                'p-datatable-resizable': resizableColumns,\n                'p-datatable-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'p-datatable-scrollable': scrollable,\n                'p-datatable-flex-scrollable': (scrollable && scrollHeight === 'flex'),\n                'p-datatable-responsive': responsive}\">\n            <div class=\"p-datatable-loading-overlay p-component-overlay\" *ngIf=\"loading && showLoader\">\n                <i [class]=\"'p-datatable-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"p-datatable-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"p-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showFirstLastIcon]=\"showFirstLastIcon\" [dropdownItemTemplate]=\"paginatorDropdownItemTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\" [showJumpToPageDropdown]=\"showJumpToPageDropdown\" [showPageLinks]=\"showPageLinks\"></p-paginator>\n\n            <div class=\"p-datatable-wrapper\" *ngIf=\"!scrollable\">\n                <table role=\"grid\" #table [ngClass]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"p-datatable-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"p-datatable-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                    <tfoot *ngIf=\"footerTemplate\" class=\"p-datatable-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n\n            <div class=\"p-datatable-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"p-datatable-scrollable-view p-datatable-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" #scrollableFrozenView [pScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div class=\"p-datatable-scrollable-view\" #scrollableView [pScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\" [ngStyle]=\"{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}\"></div>\n            </div>\n\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"p-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showFirstLastIcon]=\"showFirstLastIcon\" [dropdownItemTemplate]=\"paginatorDropdownItemTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\" [showJumpToPageDropdown]=\"showJumpToPageDropdown\" [showPageLinks]=\"showPageLinks\"></p-paginator>\n\n            <div *ngIf=\"summaryTemplate\" class=\"p-datatable-footer\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"p-column-resizer-helper\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n            <span #reorderIndicatorUp class=\"pi pi-arrow-down p-datatable-reorder-indicator-up\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"pi pi-arrow-up p-datatable-reorder-indicator-down\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
                providers: [TableService],
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-datatable{position:relative}.p-datatable table{border-collapse:collapse;table-layout:fixed;width:100%}.p-datatable .p-sortable-column{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-badge,.p-datatable .p-sortable-column .p-sortable-column-icon{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{align-items:center;display:inline-flex;justify-content:center}.p-datatable-auto-layout>.p-datatable-wrapper{overflow-x:auto}.p-datatable-auto-layout>.p-datatable-wrapper>table{table-layout:auto}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable-wrapper{position:relative}.p-datatable-scrollable-footer,.p-datatable-scrollable-header{overflow:hidden}.p-datatable-scrollable-body{overflow:auto;position:relative}.p-datatable-scrollable-body>table>.p-datatable-tbody>tr:first-child>td{border-top:0}.p-datatable-virtual-table{position:absolute}.p-datatable-frozen-view .p-datatable-scrollable-body{overflow:hidden}.p-datatable-frozen-view>.p-datatable-scrollable-body>table>.p-datatable-tbody>tr>td:last-child{border-right:0}.p-datatable-unfrozen-view{position:absolute;top:0}.p-datatable-flex-scrollable,.p-datatable-flex-scrollable .p-datatable-scrollable-view,.p-datatable-flex-scrollable .p-datatable-scrollable-wrapper{display:flex;flex:1;flex-direction:column;height:100%}.p-datatable-flex-scrollable .p-datatable-scrollable-body,.p-datatable-flex-scrollable .p-datatable-virtual-scrollable-body{flex:1}.p-datatable-resizable>.p-datatable-wrapper{overflow-x:auto}.p-datatable-resizable .p-datatable-tbody>tr>td,.p-datatable-resizable .p-datatable-tfoot>tr>td,.p-datatable-resizable .p-datatable-thead>tr>th{overflow:hidden;white-space:nowrap}.p-datatable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{border:1px solid transparent;cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5rem}.p-datatable .p-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.p-datatable .p-row-editor-cancel,.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-toggler{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-down,.p-datatable-reorder-indicator-up{display:none;position:absolute}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{align-items:center;display:flex;justify-content:center;position:absolute;z-index:2}.p-column-filter-row{align-items:center;display:flex;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-clear-button,.p-column-filter-menu-button{align-items:center;cursor:pointer;display:inline-flex;justify-content:center;overflow:hidden;position:relative;text-decoration:none}.p-column-filter-overlay{position:absolute}.p-column-filter-row-items{list-style:none;margin:0;padding:0}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{align-items:center;display:flex;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td .p-column-title{display:none}cdk-virtual-scroll-viewport{outline:0 none}@media screen and (max-width:40em){.p-datatable.p-datatable-responsive .p-datatable-tfoot>tr>td,.p-datatable.p-datatable-responsive .p-datatable-thead>tr>th{display:none!important}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td{border:0;clear:left;display:block;float:left;text-align:left;width:100%}.p-datatable.p-datatable-responsive .p-datatable-tbody>tr>td .p-column-title{display:inline-block;font-weight:700;margin:-.4em 1em -.4em -.4rem;min-width:30%;padding:.4rem}}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FilterService }]; }, { pageLinks: [{
            type: core.Input
        }], alwaysShowPaginator: [{
            type: core.Input
        }], paginatorPosition: [{
            type: core.Input
        }], paginatorDropdownScrollHeight: [{
            type: core.Input
        }], currentPageReportTemplate: [{
            type: core.Input
        }], showFirstLastIcon: [{
            type: core.Input
        }], showPageLinks: [{
            type: core.Input
        }], defaultSortOrder: [{
            type: core.Input
        }], sortMode: [{
            type: core.Input
        }], resetPageOnSort: [{
            type: core.Input
        }], selectionChange: [{
            type: core.Output
        }], contextMenuSelectionChange: [{
            type: core.Output
        }], contextMenuSelectionMode: [{
            type: core.Input
        }], rowTrackBy: [{
            type: core.Input
        }], lazy: [{
            type: core.Input
        }], lazyLoadOnInit: [{
            type: core.Input
        }], compareSelectionBy: [{
            type: core.Input
        }], csvSeparator: [{
            type: core.Input
        }], exportFilename: [{
            type: core.Input
        }], filters: [{
            type: core.Input
        }], filterDelay: [{
            type: core.Input
        }], expandedRowKeys: [{
            type: core.Input
        }], editingRowKeys: [{
            type: core.Input
        }], rowExpandMode: [{
            type: core.Input
        }], virtualScrollDelay: [{
            type: core.Input
        }], virtualRowHeight: [{
            type: core.Input
        }], columnResizeMode: [{
            type: core.Input
        }], loadingIcon: [{
            type: core.Input
        }], showLoader: [{
            type: core.Input
        }], stateStorage: [{
            type: core.Input
        }], editMode: [{
            type: core.Input
        }], onRowSelect: [{
            type: core.Output
        }], onRowUnselect: [{
            type: core.Output
        }], onPage: [{
            type: core.Output
        }], onSort: [{
            type: core.Output
        }], onFilter: [{
            type: core.Output
        }], onLazyLoad: [{
            type: core.Output
        }], onRowExpand: [{
            type: core.Output
        }], onRowCollapse: [{
            type: core.Output
        }], onContextMenuSelect: [{
            type: core.Output
        }], onColResize: [{
            type: core.Output
        }], onColReorder: [{
            type: core.Output
        }], onRowReorder: [{
            type: core.Output
        }], onEditInit: [{
            type: core.Output
        }], onEditComplete: [{
            type: core.Output
        }], onEditCancel: [{
            type: core.Output
        }], onHeaderCheckboxToggle: [{
            type: core.Output
        }], sortFunction: [{
            type: core.Output
        }], firstChange: [{
            type: core.Output
        }], rowsChange: [{
            type: core.Output
        }], onStateSave: [{
            type: core.Output
        }], onStateRestore: [{
            type: core.Output
        }], totalRecords: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], columns: [{
            type: core.Input
        }], first: [{
            type: core.Input
        }], rows: [{
            type: core.Input
        }], sortField: [{
            type: core.Input
        }], sortOrder: [{
            type: core.Input
        }], multiSortMeta: [{
            type: core.Input
        }], selection: [{
            type: core.Input
        }], contextMenuSelection: [{
            type: core.Input
        }], frozenColumns: [{
            type: core.Input
        }], frozenValue: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], tableStyle: [{
            type: core.Input
        }], tableStyleClass: [{
            type: core.Input
        }], paginator: [{
            type: core.Input
        }], rowsPerPageOptions: [{
            type: core.Input
        }], paginatorDropdownAppendTo: [{
            type: core.Input
        }], showCurrentPageReport: [{
            type: core.Input
        }], showJumpToPageDropdown: [{
            type: core.Input
        }], selectionMode: [{
            type: core.Input
        }], dataKey: [{
            type: core.Input
        }], metaKeySelection: [{
            type: core.Input
        }], globalFilterFields: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], scrollable: [{
            type: core.Input
        }], scrollHeight: [{
            type: core.Input
        }], virtualScroll: [{
            type: core.Input
        }], frozenWidth: [{
            type: core.Input
        }], responsive: [{
            type: core.Input
        }], contextMenu: [{
            type: core.Input
        }], resizableColumns: [{
            type: core.Input
        }], reorderableColumns: [{
            type: core.Input
        }], loading: [{
            type: core.Input
        }], rowHover: [{
            type: core.Input
        }], customSort: [{
            type: core.Input
        }], autoLayout: [{
            type: core.Input
        }], exportFunction: [{
            type: core.Input
        }], stateKey: [{
            type: core.Input
        }], minBufferPx: [{
            type: core.Input
        }], maxBufferPx: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], resizeHelperViewChild: [{
            type: core.ViewChild,
            args: ['resizeHelper']
        }], reorderIndicatorUpViewChild: [{
            type: core.ViewChild,
            args: ['reorderIndicatorUp']
        }], reorderIndicatorDownViewChild: [{
            type: core.ViewChild,
            args: ['reorderIndicatorDown']
        }], tableViewChild: [{
            type: core.ViewChild,
            args: ['table']
        }], scrollableViewChild: [{
            type: core.ViewChild,
            args: ['scrollableView']
        }], scrollableFrozenViewChild: [{
            type: core.ViewChild,
            args: ['scrollableFrozenView']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Table;
    }());
    Table.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: TableService },
        { type: core.ChangeDetectorRef },
        { type: api.FilterService }
    ]; };
    Table.propDecorators = {
        frozenColumns: [{ type: core.Input }],
        frozenValue: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        tableStyle: [{ type: core.Input }],
        tableStyleClass: [{ type: core.Input }],
        paginator: [{ type: core.Input }],
        pageLinks: [{ type: core.Input }],
        rowsPerPageOptions: [{ type: core.Input }],
        alwaysShowPaginator: [{ type: core.Input }],
        paginatorPosition: [{ type: core.Input }],
        paginatorDropdownAppendTo: [{ type: core.Input }],
        paginatorDropdownScrollHeight: [{ type: core.Input }],
        currentPageReportTemplate: [{ type: core.Input }],
        showCurrentPageReport: [{ type: core.Input }],
        showJumpToPageDropdown: [{ type: core.Input }],
        showFirstLastIcon: [{ type: core.Input }],
        showPageLinks: [{ type: core.Input }],
        defaultSortOrder: [{ type: core.Input }],
        sortMode: [{ type: core.Input }],
        resetPageOnSort: [{ type: core.Input }],
        selectionMode: [{ type: core.Input }],
        selectionChange: [{ type: core.Output }],
        contextMenuSelection: [{ type: core.Input }],
        contextMenuSelectionChange: [{ type: core.Output }],
        contextMenuSelectionMode: [{ type: core.Input }],
        dataKey: [{ type: core.Input }],
        metaKeySelection: [{ type: core.Input }],
        rowTrackBy: [{ type: core.Input }],
        lazy: [{ type: core.Input }],
        lazyLoadOnInit: [{ type: core.Input }],
        compareSelectionBy: [{ type: core.Input }],
        csvSeparator: [{ type: core.Input }],
        exportFilename: [{ type: core.Input }],
        filters: [{ type: core.Input }],
        globalFilterFields: [{ type: core.Input }],
        filterDelay: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        expandedRowKeys: [{ type: core.Input }],
        editingRowKeys: [{ type: core.Input }],
        rowExpandMode: [{ type: core.Input }],
        scrollable: [{ type: core.Input }],
        scrollHeight: [{ type: core.Input }],
        virtualScroll: [{ type: core.Input }],
        virtualScrollDelay: [{ type: core.Input }],
        virtualRowHeight: [{ type: core.Input }],
        frozenWidth: [{ type: core.Input }],
        responsive: [{ type: core.Input }],
        contextMenu: [{ type: core.Input }],
        resizableColumns: [{ type: core.Input }],
        columnResizeMode: [{ type: core.Input }],
        reorderableColumns: [{ type: core.Input }],
        loading: [{ type: core.Input }],
        loadingIcon: [{ type: core.Input }],
        showLoader: [{ type: core.Input }],
        rowHover: [{ type: core.Input }],
        customSort: [{ type: core.Input }],
        autoLayout: [{ type: core.Input }],
        exportFunction: [{ type: core.Input }],
        stateKey: [{ type: core.Input }],
        stateStorage: [{ type: core.Input }],
        editMode: [{ type: core.Input }],
        minBufferPx: [{ type: core.Input }],
        maxBufferPx: [{ type: core.Input }],
        onRowSelect: [{ type: core.Output }],
        onRowUnselect: [{ type: core.Output }],
        onPage: [{ type: core.Output }],
        onSort: [{ type: core.Output }],
        onFilter: [{ type: core.Output }],
        onLazyLoad: [{ type: core.Output }],
        onRowExpand: [{ type: core.Output }],
        onRowCollapse: [{ type: core.Output }],
        onContextMenuSelect: [{ type: core.Output }],
        onColResize: [{ type: core.Output }],
        onColReorder: [{ type: core.Output }],
        onRowReorder: [{ type: core.Output }],
        onEditInit: [{ type: core.Output }],
        onEditComplete: [{ type: core.Output }],
        onEditCancel: [{ type: core.Output }],
        onHeaderCheckboxToggle: [{ type: core.Output }],
        sortFunction: [{ type: core.Output }],
        firstChange: [{ type: core.Output }],
        rowsChange: [{ type: core.Output }],
        onStateSave: [{ type: core.Output }],
        onStateRestore: [{ type: core.Output }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        resizeHelperViewChild: [{ type: core.ViewChild, args: ['resizeHelper',] }],
        reorderIndicatorUpViewChild: [{ type: core.ViewChild, args: ['reorderIndicatorUp',] }],
        reorderIndicatorDownViewChild: [{ type: core.ViewChild, args: ['reorderIndicatorDown',] }],
        tableViewChild: [{ type: core.ViewChild, args: ['table',] }],
        scrollableViewChild: [{ type: core.ViewChild, args: ['scrollableView',] }],
        scrollableFrozenViewChild: [{ type: core.ViewChild, args: ['scrollableFrozenView',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        value: [{ type: core.Input }],
        columns: [{ type: core.Input }],
        first: [{ type: core.Input }],
        rows: [{ type: core.Input }],
        totalRecords: [{ type: core.Input }],
        sortField: [{ type: core.Input }],
        sortOrder: [{ type: core.Input }],
        multiSortMeta: [{ type: core.Input }],
        selection: [{ type: core.Input }]
    };
    var TableBody = /** @class */ (function () {
        function TableBody(dt, tableService, cd) {
            var _this = this;
            this.dt = dt;
            this.tableService = tableService;
            this.cd = cd;
            this.subscription = this.dt.tableService.valueSource$.subscribe(function () {
                if (_this.dt.virtualScroll) {
                    _this.cd.detectChanges();
                }
            });
        }
        TableBody.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TableBody.ɵfac = function TableBody_Factory(t) { return new (t || TableBody)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TableBody.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableBody, selectors: [["", "pTableBody", ""]], inputs: { columns: ["pTableBody", "columns"], template: ["pTableBodyTemplate", "template"], frozen: "frozen" }, attrs: _c11, decls: 6, vars: 6, consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"]], template: function TableBody_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TableBody_ng_container_0_Template, 3, 6, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, TableBody_ng_container_1_Template, 2, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(2, TableBody_ng_container_2_Template, 3, 6, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(3, TableBody_ng_container_3_Template, 3, 6, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(5, TableBody_ng_container_5_Template, 2, 5, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.dt.expandedRowTemplate && !ctx.dt.virtualScroll);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.dt.expandedRowTemplate && ctx.dt.virtualScroll);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dt.expandedRowTemplate && !(ctx.frozen && ctx.dt.frozenExpandedRowTemplate));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dt.frozenExpandedRowTemplate && ctx.frozen);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dt.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet, ɵngcc4.CdkVirtualForOf], pipes: [ɵngcc2.SlicePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableBody, [{
        type: core.Component,
        args: [{
                selector: '[pTableBody]',
                template: "\n        <ng-container *ngIf=\"!dt.expandedRowTemplate && !dt.virtualScroll\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!dt.expandedRowTemplate && dt.virtualScroll\">\n            <ng-template cdkVirtualFor let-rowData let-rowIndex=\"index\" [cdkVirtualForOf]=\"dt.filteredValue||dt.value\" [cdkVirtualForTrackBy]=\"dt.rowTrackBy\" [cdkVirtualForTemplateCacheSize]=\"0\">\n                <ng-container *ngTemplateOutlet=\"rowData ? template: dt.loadingBodyTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.expandedRowTemplate && !(frozen && dt.frozenExpandedRowTemplate)\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData)\">\n                    <ng-container *ngTemplateOutlet=\"dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.frozenExpandedRowTemplate && frozen\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData)\">\n                    <ng-container *ngTemplateOutlet=\"dt.frozenExpandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.loading\">\n            <ng-container *ngTemplateOutlet=\"dt.loadingBodyTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"dt.isEmpty() && !dt.loading\">\n            <ng-container *ngTemplateOutlet=\"dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n    ",
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { columns: [{
            type: core.Input,
            args: ["pTableBody"]
        }], template: [{
            type: core.Input,
            args: ["pTableBodyTemplate"]
        }], frozen: [{
            type: core.Input
        }] }); })();
        return TableBody;
    }());
    TableBody.ctorParameters = function () { return [
        { type: Table },
        { type: TableService },
        { type: core.ChangeDetectorRef }
    ]; };
    TableBody.propDecorators = {
        columns: [{ type: core.Input, args: ["pTableBody",] }],
        template: [{ type: core.Input, args: ["pTableBodyTemplate",] }],
        frozen: [{ type: core.Input }]
    };
    var ScrollableView = /** @class */ (function () {
        function ScrollableView(dt, el, zone) {
            this.dt = dt;
            this.el = el;
            this.zone = zone;
        }
        Object.defineProperty(ScrollableView.prototype, "scrollHeight", {
            get: function () {
                return this._scrollHeight;
            },
            set: function (val) {
                this._scrollHeight = val;
                if (val != null && (val.includes('%') || val.includes('calc'))) {
                    console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
                }
                if (this.dt.virtualScroll && this.virtualScrollBody) {
                    this.virtualScrollBody.ngOnInit();
                }
            },
            enumerable: false,
            configurable: true
        });
        ScrollableView.prototype.ngAfterViewInit = function () {
            if (!this.frozen) {
                if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
                    dom.DomHandler.addClass(this.el.nativeElement, 'p-datatable-unfrozen-view');
                }
                var frozenView = this.el.nativeElement.previousElementSibling;
                if (frozenView) {
                    if (this.dt.virtualScroll)
                        this.frozenSiblingBody = dom.DomHandler.findSingle(frozenView, '.p-datatable-virtual-scrollable-body');
                    else
                        this.frozenSiblingBody = dom.DomHandler.findSingle(frozenView, '.p-datatable-scrollable-body');
                }
                var scrollBarWidth = dom.DomHandler.calculateScrollbarWidth();
                this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
                if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                    this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
                }
            }
            else {
                if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
                    this.scrollableAlignerViewChild.nativeElement.style.height = dom.DomHandler.calculateScrollbarHeight() + 'px';
                }
            }
            this.bindEvents();
        };
        ScrollableView.prototype.bindEvents = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                if (_this.scrollHeaderViewChild && _this.scrollHeaderViewChild.nativeElement) {
                    _this.headerScrollListener = _this.onHeaderScroll.bind(_this);
                    _this.scrollHeaderViewChild.nativeElement.addEventListener('scroll', _this.headerScrollListener);
                }
                if (_this.scrollFooterViewChild && _this.scrollFooterViewChild.nativeElement) {
                    _this.footerScrollListener = _this.onFooterScroll.bind(_this);
                    _this.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this.footerScrollListener);
                }
                if (!_this.frozen) {
                    _this.bodyScrollListener = _this.onBodyScroll.bind(_this);
                    if (_this.dt.virtualScroll)
                        _this.virtualScrollBody.getElementRef().nativeElement.addEventListener('scroll', _this.bodyScrollListener);
                    else
                        _this.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this.bodyScrollListener);
                }
            });
        };
        ScrollableView.prototype.unbindEvents = function () {
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.scrollHeaderViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
            }
            if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
                this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
            }
            if (this.virtualScrollBody && this.virtualScrollBody.getElementRef()) {
                this.virtualScrollBody.getElementRef().nativeElement.removeEventListener('scroll', this.bodyScrollListener);
            }
        };
        ScrollableView.prototype.onHeaderScroll = function () {
            var scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
            this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
            }
            this.preventBodyScrollPropagation = true;
        };
        ScrollableView.prototype.onFooterScroll = function () {
            var scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
            this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
            }
            this.preventBodyScrollPropagation = true;
        };
        ScrollableView.prototype.onBodyScroll = function (event) {
            if (this.preventBodyScrollPropagation) {
                this.preventBodyScrollPropagation = false;
                return;
            }
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
            }
            if (this.frozenSiblingBody) {
                this.frozenSiblingBody.scrollTop = event.target.scrollTop;
            }
        };
        ScrollableView.prototype.onScrollIndexChange = function (index) {
            var _this = this;
            if (this.dt.lazy) {
                if (this.virtualScrollTimeout) {
                    clearTimeout(this.virtualScrollTimeout);
                }
                this.virtualScrollTimeout = setTimeout(function () {
                    var page = Math.floor(index / _this.dt.rows);
                    var virtualScrollOffset = page === 0 ? 0 : (page - 1) * _this.dt.rows;
                    var virtualScrollChunkSize = page === 0 ? _this.dt.rows * 2 : _this.dt.rows * 3;
                    if (page !== _this.virtualPage) {
                        _this.virtualPage = page;
                        _this.dt.onLazyLoad.emit({
                            first: virtualScrollOffset,
                            rows: virtualScrollChunkSize,
                            sortField: _this.dt.sortField,
                            sortOrder: _this.dt.sortOrder,
                            filters: _this.dt.filters,
                            globalFilter: _this.dt.filters && _this.dt.filters['global'] ? _this.dt.filters['global'].value : null,
                            multiSortMeta: _this.dt.multiSortMeta
                        });
                    }
                }, this.dt.virtualScrollDelay);
            }
        };
        ScrollableView.prototype.getPageCount = function () {
            var dataToRender = this.dt.filteredValue || this.dt.value;
            var dataLength = dataToRender ? dataToRender.length : 0;
            return Math.ceil(dataLength / this.dt.rows);
        };
        ScrollableView.prototype.scrollToVirtualIndex = function (index) {
            if (this.virtualScrollBody) {
                this.virtualScrollBody.scrollToIndex(index);
            }
        };
        ScrollableView.prototype.scrollTo = function (options) {
            if (this.virtualScrollBody) {
                this.virtualScrollBody.scrollTo(options);
            }
            else {
                if (this.scrollBodyViewChild.nativeElement.scrollTo) {
                    this.scrollBodyViewChild.nativeElement.scrollTo(options);
                }
                else {
                    this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
                    this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
                }
            }
        };
        ScrollableView.prototype.ngOnDestroy = function () {
            this.unbindEvents();
            this.frozenSiblingBody = null;
        };
ScrollableView.ɵfac = function ScrollableView_Factory(t) { return new (t || ScrollableView)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ScrollableView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScrollableView, selectors: [["", "pScrollableView", ""]], viewQuery: function ScrollableView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c16, true);
        ɵngcc0.ɵɵviewQuery(_c17, true);
        ɵngcc0.ɵɵviewQuery(_c18, true);
        ɵngcc0.ɵɵviewQuery(_c19, true);
        ɵngcc0.ɵɵviewQuery(_c20, true);
        ɵngcc0.ɵɵviewQuery(_c21, true);
        ɵngcc0.ɵɵviewQuery(_c22, true);
        ɵngcc0.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollHeaderViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollHeaderBoxViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollBodyViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollTableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollFooterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollFooterBoxViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableAlignerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.virtualScrollBody = _t.first);
    } }, inputs: { scrollHeight: "scrollHeight", columns: ["pScrollableView", "columns"], frozen: "frozen" }, attrs: _c23, decls: 21, vars: 24, consts: [[1, "p-datatable-scrollable-header"], ["scrollHeader", ""], [1, "p-datatable-scrollable-header-box"], ["scrollHeaderBox", ""], [1, "p-datatable-scrollable-header-table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-datatable-thead"], [1, "p-datatable-tbody"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf", "ngIfElse"], ["virtualScrollTemplate", ""], [1, "p-datatable-scrollable-footer"], ["scrollFooter", ""], [1, "p-datatable-scrollable-footer-box"], ["scrollFooterBox", ""], [1, "p-datatable-scrollable-footer-table", 3, "ngClass", "ngStyle"], [1, "p-datatable-tfoot"], [1, "p-datatable-scrollable-body", 3, "ngStyle"], ["scrollBody", ""], [3, "ngStyle"], ["scrollTable", ""], [1, "p-datatable-tbody", 3, "pTableBody", "pTableBodyTemplate", "frozen"], ["style", "background-color:transparent", 4, "ngIf"], [2, "background-color", "transparent"], ["scrollableAligner", ""], ["tabindex", "0", 1, "p-datatable-virtual-scrollable-body", 3, "itemSize", "minBufferPx", "maxBufferPx", "scrolledIndexChange"]], template: function ScrollableView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "table", 4);
        ɵngcc0.ɵɵtemplate(5, ScrollableView_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementStart(6, "thead", 6);
        ɵngcc0.ɵɵtemplate(7, ScrollableView_ng_container_7_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "tbody", 7);
        ɵngcc0.ɵɵtemplate(9, ScrollableView_ng_template_9_Template, 1, 6, "ng-template", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, ScrollableView_ng_container_10_Template, 8, 15, "ng-container", 9);
        ɵngcc0.ɵɵtemplate(11, ScrollableView_ng_template_11_Template, 6, 16, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(13, "div", 11, 12);
        ɵngcc0.ɵɵelementStart(15, "div", 13, 14);
        ɵngcc0.ɵɵelementStart(17, "table", 15);
        ɵngcc0.ɵɵtemplate(18, ScrollableView_ng_container_18_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementStart(19, "tfoot", 16);
        ɵngcc0.ɵɵtemplate(20, ScrollableView_ng_container_20_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r6 = ɵngcc0.ɵɵreference(12);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dt.tableStyleClass)("ngStyle", ctx.dt.tableStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenColGroupTemplate || ctx.dt.colGroupTemplate : ctx.dt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(16, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenHeaderTemplate || ctx.dt.headerTemplate : ctx.dt.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(18, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.dt.frozenValue)("ngForTrackBy", ctx.dt.rowTrackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.dt.virtualScroll)("ngIfElse", _r6);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dt.tableStyleClass)("ngStyle", ctx.dt.tableStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenColGroupTemplate || ctx.dt.colGroupTemplate : ctx.dt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(20, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.dt.frozenFooterTemplate || ctx.dt.footerTemplate : ctx.dt.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(22, _c7, ctx.columns));
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, ɵngcc2.NgIf, TableBody, ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollableView, [{
        type: core.Component,
        args: [{
                selector: '[pScrollableView]',
                template: "\n        <div #scrollHeader class=\"p-datatable-scrollable-header\">\n            <div #scrollHeaderBox class=\"p-datatable-scrollable-header-box\">\n                <table class=\"p-datatable-scrollable-header-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"p-datatable-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"p-datatable-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.frozenValue\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <ng-container *ngIf=\"!dt.virtualScroll; else virtualScrollTemplate\">\n            <div #scrollBody class=\"p-datatable-scrollable-body\" [ngStyle]=\"{'max-height': dt.scrollHeight !== 'flex' ? scrollHeight : undefined, 'overflow-y': !frozen && dt.scrollHeight ? 'scroll' : undefined}\">\n                <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"p-datatable-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </div>\n        </ng-container>\n        <ng-template #virtualScrollTemplate>\n            <cdk-virtual-scroll-viewport [itemSize]=\"dt.virtualRowHeight\" tabindex=\"0\" [style.height]=\"dt.scrollHeight !== 'flex' ? scrollHeight : undefined\"\n                    [minBufferPx]=\"dt.minBufferPx\" [maxBufferPx]=\"dt.maxBufferPx\" (scrolledIndexChange)=\"onScrollIndexChange($event)\" class=\"p-datatable-virtual-scrollable-body\">\n                <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"p-datatable-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </cdk-virtual-scroll-viewport>\n        </ng-template>\n        <div #scrollFooter class=\"p-datatable-scrollable-footer\">\n            <div #scrollFooterBox class=\"p-datatable-scrollable-footer-box\">\n                <table class=\"p-datatable-scrollable-footer-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"p-datatable-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { scrollHeight: [{
            type: core.Input
        }], columns: [{
            type: core.Input,
            args: ["pScrollableView"]
        }], frozen: [{
            type: core.Input
        }], scrollHeaderViewChild: [{
            type: core.ViewChild,
            args: ['scrollHeader']
        }], scrollHeaderBoxViewChild: [{
            type: core.ViewChild,
            args: ['scrollHeaderBox']
        }], scrollBodyViewChild: [{
            type: core.ViewChild,
            args: ['scrollBody']
        }], scrollTableViewChild: [{
            type: core.ViewChild,
            args: ['scrollTable']
        }], scrollFooterViewChild: [{
            type: core.ViewChild,
            args: ['scrollFooter']
        }], scrollFooterBoxViewChild: [{
            type: core.ViewChild,
            args: ['scrollFooterBox']
        }], scrollableAlignerViewChild: [{
            type: core.ViewChild,
            args: ['scrollableAligner']
        }], virtualScrollBody: [{
            type: core.ViewChild,
            args: [scrolling.CdkVirtualScrollViewport]
        }] }); })();
        return ScrollableView;
    }());
    ScrollableView.ctorParameters = function () { return [
        { type: Table },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    ScrollableView.propDecorators = {
        columns: [{ type: core.Input, args: ["pScrollableView",] }],
        frozen: [{ type: core.Input }],
        scrollHeaderViewChild: [{ type: core.ViewChild, args: ['scrollHeader',] }],
        scrollHeaderBoxViewChild: [{ type: core.ViewChild, args: ['scrollHeaderBox',] }],
        scrollBodyViewChild: [{ type: core.ViewChild, args: ['scrollBody',] }],
        scrollTableViewChild: [{ type: core.ViewChild, args: ['scrollTable',] }],
        scrollFooterViewChild: [{ type: core.ViewChild, args: ['scrollFooter',] }],
        scrollFooterBoxViewChild: [{ type: core.ViewChild, args: ['scrollFooterBox',] }],
        scrollableAlignerViewChild: [{ type: core.ViewChild, args: ['scrollableAligner',] }],
        virtualScrollBody: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport,] }],
        scrollHeight: [{ type: core.Input }]
    };
    var SortableColumn = /** @class */ (function () {
        function SortableColumn(dt) {
            var _this = this;
            this.dt = dt;
            if (this.isEnabled()) {
                this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
                    _this.updateSortState();
                });
            }
        }
        SortableColumn.prototype.ngOnInit = function () {
            if (this.isEnabled()) {
                this.updateSortState();
            }
        };
        SortableColumn.prototype.updateSortState = function () {
            this.sorted = this.dt.isSorted(this.field);
            this.sortOrder = this.sorted ? (this.dt.sortOrder === 1 ? 'ascending' : 'descending') : 'none';
        };
        SortableColumn.prototype.onClick = function (event) {
            if (this.isEnabled() && !this.isFilterElement(event.target)) {
                this.updateSortState();
                this.dt.sort({
                    originalEvent: event,
                    field: this.field
                });
                dom.DomHandler.clearSelection();
            }
        };
        SortableColumn.prototype.onEnterKey = function (event) {
            this.onClick(event);
        };
        SortableColumn.prototype.isEnabled = function () {
            return this.pSortableColumnDisabled !== true;
        };
        SortableColumn.prototype.isFilterElement = function (element) {
            return dom.DomHandler.hasClass(element, 'pi-filter-icon') || dom.DomHandler.hasClass(element, 'p-column-filter-menu-button');
        };
        SortableColumn.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
SortableColumn.ɵfac = function SortableColumn_Factory(t) { return new (t || SortableColumn)(ɵngcc0.ɵɵdirectiveInject(Table)); };
SortableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SortableColumn, selectors: [["", "pSortableColumn", ""]], hostVars: 7, hostBindings: function SortableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function SortableColumn_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKey($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);
        ɵngcc0.ɵɵclassProp("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
    } }, inputs: { field: ["pSortableColumn", "field"], pSortableColumnDisabled: "pSortableColumnDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortableColumn, [{
        type: core.Directive,
        args: [{
                selector: '[pSortableColumn]',
                host: {
                    '[class.p-sortable-column]': 'isEnabled()',
                    '[class.p-highlight]': 'sorted',
                    '[attr.tabindex]': 'isEnabled() ? "0" : null',
                    '[attr.role]': '"columnheader"',
                    '[attr.aria-sort]': 'sortOrder'
                }
            }]
    }], function () { return [{ type: Table }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }], onEnterKey: [{
            type: core.HostListener,
            args: ['keydown.enter', ['$event']]
        }], field: [{
            type: core.Input,
            args: ["pSortableColumn"]
        }], pSortableColumnDisabled: [{
            type: core.Input
        }] }); })();
        return SortableColumn;
    }());
    SortableColumn.ctorParameters = function () { return [
        { type: Table }
    ]; };
    SortableColumn.propDecorators = {
        field: [{ type: core.Input, args: ["pSortableColumn",] }],
        pSortableColumnDisabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
        onEnterKey: [{ type: core.HostListener, args: ['keydown.enter', ['$event'],] }]
    };
    var SortIcon = /** @class */ (function () {
        function SortIcon(dt, cd) {
            var _this = this;
            this.dt = dt;
            this.cd = cd;
            this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
                _this.updateSortState();
            });
        }
        SortIcon.prototype.ngOnInit = function () {
            this.updateSortState();
        };
        SortIcon.prototype.onClick = function (event) {
            event.preventDefault();
        };
        SortIcon.prototype.updateSortState = function () {
            if (this.dt.sortMode === 'single') {
                this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
            }
            else if (this.dt.sortMode === 'multiple') {
                var sortMeta = this.dt.getSortMeta(this.field);
                this.sortOrder = sortMeta ? sortMeta.order : 0;
            }
            this.cd.markForCheck();
        };
        SortIcon.prototype.getMultiSortMetaIndex = function () {
            var multiSortMeta = this.dt._multiSortMeta;
            var index = -1;
            if (multiSortMeta && this.dt.sortMode === 'multiple') {
                for (var i = 0; i < multiSortMeta.length; i++) {
                    var meta = multiSortMeta[i];
                    if (meta.field === this.field || meta.field === this.field) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        SortIcon.prototype.isMultiSorted = function () {
            return this.dt.sortMode === 'multiple' && this.getMultiSortMetaIndex() > -1;
        };
        SortIcon.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
SortIcon.ɵfac = function SortIcon_Factory(t) { return new (t || SortIcon)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SortIcon.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SortIcon, selectors: [["p-sortIcon"]], inputs: { field: "field" }, decls: 2, vars: 6, consts: [[1, "p-sortable-column-icon", "pi", "pi-fw", 3, "ngClass"], ["class", "p-sortable-column-badge", 4, "ngIf"], [1, "p-sortable-column-badge"]], template: function SortIcon_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "i", 0);
        ɵngcc0.ɵɵtemplate(1, SortIcon_span_1_Template, 2, 1, "span", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(2, _c25, ctx.sortOrder === 1, ctx.sortOrder === 0 - 1, ctx.sortOrder === 0));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isMultiSorted());
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortIcon, [{
        type: core.Component,
        args: [{
                selector: 'p-sortIcon',
                template: "\n        <i class=\"p-sortable-column-icon pi pi-fw\" [ngClass]=\"{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}\"></i>\n        <span *ngIf=\"isMultiSorted()\" class=\"p-sortable-column-badge\">{{getMultiSortMetaIndex() + 1}}</span>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ChangeDetectorRef }]; }, { field: [{
            type: core.Input
        }] }); })();
        return SortIcon;
    }());
    SortIcon.ctorParameters = function () { return [
        { type: Table },
        { type: core.ChangeDetectorRef }
    ]; };
    SortIcon.propDecorators = {
        field: [{ type: core.Input }]
    };
    var SelectableRow = /** @class */ (function () {
        function SelectableRow(dt, tableService) {
            var _this = this;
            this.dt = dt;
            this.tableService = tableService;
            if (this.isEnabled()) {
                this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                    _this.selected = _this.dt.isSelected(_this.data);
                });
            }
        }
        SelectableRow.prototype.ngOnInit = function () {
            if (this.isEnabled()) {
                this.selected = this.dt.isSelected(this.data);
            }
        };
        SelectableRow.prototype.onClick = function (event) {
            if (this.isEnabled()) {
                this.dt.handleRowClick({
                    originalEvent: event,
                    rowData: this.data,
                    rowIndex: this.index
                });
            }
        };
        SelectableRow.prototype.onTouchEnd = function (event) {
            if (this.isEnabled()) {
                this.dt.handleRowTouchEnd(event);
            }
        };
        SelectableRow.prototype.onArrowDownKeyDown = function (event) {
            if (!this.isEnabled()) {
                return;
            }
            var row = event.currentTarget;
            var nextRow = this.findNextSelectableRow(row);
            if (nextRow) {
                nextRow.focus();
            }
            event.preventDefault();
        };
        SelectableRow.prototype.onArrowUpKeyDown = function (event) {
            if (!this.isEnabled()) {
                return;
            }
            var row = event.currentTarget;
            var prevRow = this.findPrevSelectableRow(row);
            if (prevRow) {
                prevRow.focus();
            }
            event.preventDefault();
        };
        SelectableRow.prototype.onEnterKeyDown = function (event) {
            if (!this.isEnabled()) {
                return;
            }
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        };
        SelectableRow.prototype.onPageDownKeyDown = function () {
            if (this.dt.virtualScroll) {
                dom.DomHandler.findSingle(this.dt.scrollableViewChild.el.nativeElement, 'cdk-virtual-scroll-viewport').focus();
            }
        };
        SelectableRow.prototype.findNextSelectableRow = function (row) {
            var nextRow = row.nextElementSibling;
            if (nextRow) {
                if (dom.DomHandler.hasClass(nextRow, 'p-selectable-row'))
                    return nextRow;
                else
                    return this.findNextSelectableRow(nextRow);
            }
            else {
                return null;
            }
        };
        SelectableRow.prototype.findPrevSelectableRow = function (row) {
            var prevRow = row.previousElementSibling;
            if (prevRow) {
                if (dom.DomHandler.hasClass(prevRow, 'p-selectable-row'))
                    return prevRow;
                else
                    return this.findPrevSelectableRow(prevRow);
            }
            else {
                return null;
            }
        };
        SelectableRow.prototype.isEnabled = function () {
            return this.pSelectableRowDisabled !== true;
        };
        SelectableRow.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
SelectableRow.ɵfac = function SelectableRow_Factory(t) { return new (t || SelectableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService)); };
SelectableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SelectableRow, selectors: [["", "pSelectableRow", ""]], hostVars: 5, hostBindings: function SelectableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function SelectableRow_click_HostBindingHandler($event) { return ctx.onClick($event); })("touchend", function SelectableRow_touchend_HostBindingHandler($event) { return ctx.onTouchEnd($event); })("keydown.arrowdown", function SelectableRow_keydown_arrowdown_HostBindingHandler($event) { return ctx.onArrowDownKeyDown($event); })("keydown.arrowup", function SelectableRow_keydown_arrowup_HostBindingHandler($event) { return ctx.onArrowUpKeyDown($event); })("keydown.enter", function SelectableRow_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKeyDown($event); })("keydown.shift.enter", function SelectableRow_keydown_shift_enter_HostBindingHandler($event) { return ctx.onEnterKeyDown($event); })("keydown.meta.enter", function SelectableRow_keydown_meta_enter_HostBindingHandler($event) { return ctx.onEnterKeyDown($event); })("keydown.pagedown", function SelectableRow_keydown_pagedown_HostBindingHandler($event) { return ctx.onPageDownKeyDown($event); })("keydown.pageup", function SelectableRow_keydown_pageup_HostBindingHandler($event) { return ctx.onPageDownKeyDown($event); })("keydown.home", function SelectableRow_keydown_home_HostBindingHandler($event) { return ctx.onPageDownKeyDown($event); })("keydown.end", function SelectableRow_keydown_end_HostBindingHandler($event) { return ctx.onPageDownKeyDown($event); })("keydown.space", function SelectableRow_keydown_space_HostBindingHandler($event) { return ctx.onPageDownKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : undefined);
        ɵngcc0.ɵɵclassProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    } }, inputs: { data: ["pSelectableRow", "data"], index: ["pSelectableRowIndex", "index"], pSelectableRowDisabled: "pSelectableRowDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectableRow, [{
        type: core.Directive,
        args: [{
                selector: '[pSelectableRow]',
                host: {
                    '[class.p-selectable-row]': 'isEnabled()',
                    '[class.p-highlight]': 'selected',
                    '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
                }
            }]
    }], function () { return [{ type: Table }, { type: TableService }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }], onTouchEnd: [{
            type: core.HostListener,
            args: ['touchend', ['$event']]
        }], onArrowDownKeyDown: [{
            type: core.HostListener,
            args: ['keydown.arrowdown', ['$event']]
        }], onArrowUpKeyDown: [{
            type: core.HostListener,
            args: ['keydown.arrowup', ['$event']]
        }], onEnterKeyDown: [{
            type: core.HostListener,
            args: ['keydown.enter', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.shift.enter', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.meta.enter', ['$event']]
        }], onPageDownKeyDown: [{
            type: core.HostListener,
            args: ['keydown.pagedown', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.pageup', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.home', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.end', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.space', ['$event']]
        }], data: [{
            type: core.Input,
            args: ["pSelectableRow"]
        }], index: [{
            type: core.Input,
            args: ["pSelectableRowIndex"]
        }], pSelectableRowDisabled: [{
            type: core.Input
        }] }); })();
        return SelectableRow;
    }());
    SelectableRow.ctorParameters = function () { return [
        { type: Table },
        { type: TableService }
    ]; };
    SelectableRow.propDecorators = {
        data: [{ type: core.Input, args: ["pSelectableRow",] }],
        index: [{ type: core.Input, args: ["pSelectableRowIndex",] }],
        pSelectableRowDisabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
        onTouchEnd: [{ type: core.HostListener, args: ['touchend', ['$event'],] }],
        onArrowDownKeyDown: [{ type: core.HostListener, args: ['keydown.arrowdown', ['$event'],] }],
        onArrowUpKeyDown: [{ type: core.HostListener, args: ['keydown.arrowup', ['$event'],] }],
        onEnterKeyDown: [{ type: core.HostListener, args: ['keydown.enter', ['$event'],] }, { type: core.HostListener, args: ['keydown.shift.enter', ['$event'],] }, { type: core.HostListener, args: ['keydown.meta.enter', ['$event'],] }],
        onPageDownKeyDown: [{ type: core.HostListener, args: ['keydown.pagedown', ['$event'],] }, { type: core.HostListener, args: ['keydown.pageup', ['$event'],] }, { type: core.HostListener, args: ['keydown.home', ['$event'],] }, { type: core.HostListener, args: ['keydown.end', ['$event'],] }, { type: core.HostListener, args: ['keydown.space', ['$event'],] }]
    };
    var SelectableRowDblClick = /** @class */ (function () {
        function SelectableRowDblClick(dt, tableService) {
            var _this = this;
            this.dt = dt;
            this.tableService = tableService;
            if (this.isEnabled()) {
                this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                    _this.selected = _this.dt.isSelected(_this.data);
                });
            }
        }
        SelectableRowDblClick.prototype.ngOnInit = function () {
            if (this.isEnabled()) {
                this.selected = this.dt.isSelected(this.data);
            }
        };
        SelectableRowDblClick.prototype.onClick = function (event) {
            if (this.isEnabled()) {
                this.dt.handleRowClick({
                    originalEvent: event,
                    rowData: this.data,
                    rowIndex: this.index
                });
            }
        };
        SelectableRowDblClick.prototype.isEnabled = function () {
            return this.pSelectableRowDisabled !== true;
        };
        SelectableRowDblClick.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
SelectableRowDblClick.ɵfac = function SelectableRowDblClick_Factory(t) { return new (t || SelectableRowDblClick)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService)); };
SelectableRowDblClick.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SelectableRowDblClick, selectors: [["", "pSelectableRowDblClick", ""]], hostVars: 4, hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    } }, inputs: { data: ["pSelectableRowDblClick", "data"], index: ["pSelectableRowIndex", "index"], pSelectableRowDisabled: "pSelectableRowDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectableRowDblClick, [{
        type: core.Directive,
        args: [{
                selector: '[pSelectableRowDblClick]',
                host: {
                    '[class.p-selectable-row]': 'isEnabled()',
                    '[class.p-highlight]': 'selected'
                }
            }]
    }], function () { return [{ type: Table }, { type: TableService }]; }, { onClick: [{
            type: core.HostListener,
            args: ['dblclick', ['$event']]
        }], data: [{
            type: core.Input,
            args: ["pSelectableRowDblClick"]
        }], index: [{
            type: core.Input,
            args: ["pSelectableRowIndex"]
        }], pSelectableRowDisabled: [{
            type: core.Input
        }] }); })();
        return SelectableRowDblClick;
    }());
    SelectableRowDblClick.ctorParameters = function () { return [
        { type: Table },
        { type: TableService }
    ]; };
    SelectableRowDblClick.propDecorators = {
        data: [{ type: core.Input, args: ["pSelectableRowDblClick",] }],
        index: [{ type: core.Input, args: ["pSelectableRowIndex",] }],
        pSelectableRowDisabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['dblclick', ['$event'],] }]
    };
    var ContextMenuRow = /** @class */ (function () {
        function ContextMenuRow(dt, tableService, el) {
            var _this = this;
            this.dt = dt;
            this.tableService = tableService;
            this.el = el;
            if (this.isEnabled()) {
                this.subscription = this.dt.tableService.contextMenuSource$.subscribe(function (data) {
                    _this.selected = _this.dt.equals(_this.data, data);
                });
            }
        }
        ContextMenuRow.prototype.onContextMenu = function (event) {
            if (this.isEnabled()) {
                this.dt.handleRowRightClick({
                    originalEvent: event,
                    rowData: this.data,
                    rowIndex: this.index
                });
                this.el.nativeElement.focus();
                event.preventDefault();
            }
        };
        ContextMenuRow.prototype.isEnabled = function () {
            return this.pContextMenuRowDisabled !== true;
        };
        ContextMenuRow.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
ContextMenuRow.ɵfac = function ContextMenuRow_Factory(t) { return new (t || ContextMenuRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ContextMenuRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ContextMenuRow, selectors: [["", "pContextMenuRow", ""]], hostVars: 3, hostBindings: function ContextMenuRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : undefined);
        ɵngcc0.ɵɵclassProp("p-highlight-contextmenu", ctx.selected);
    } }, inputs: { data: ["pContextMenuRow", "data"], index: ["pContextMenuRowIndex", "index"], pContextMenuRowDisabled: "pContextMenuRowDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenuRow, [{
        type: core.Directive,
        args: [{
                selector: '[pContextMenuRow]',
                host: {
                    '[class.p-highlight-contextmenu]': 'selected',
                    '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
                }
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ElementRef }]; }, { onContextMenu: [{
            type: core.HostListener,
            args: ['contextmenu', ['$event']]
        }], data: [{
            type: core.Input,
            args: ["pContextMenuRow"]
        }], index: [{
            type: core.Input,
            args: ["pContextMenuRowIndex"]
        }], pContextMenuRowDisabled: [{
            type: core.Input
        }] }); })();
        return ContextMenuRow;
    }());
    ContextMenuRow.ctorParameters = function () { return [
        { type: Table },
        { type: TableService },
        { type: core.ElementRef }
    ]; };
    ContextMenuRow.propDecorators = {
        data: [{ type: core.Input, args: ["pContextMenuRow",] }],
        index: [{ type: core.Input, args: ["pContextMenuRowIndex",] }],
        pContextMenuRowDisabled: [{ type: core.Input }],
        onContextMenu: [{ type: core.HostListener, args: ['contextmenu', ['$event'],] }]
    };
    var RowToggler = /** @class */ (function () {
        function RowToggler(dt) {
            this.dt = dt;
        }
        RowToggler.prototype.onClick = function (event) {
            if (this.isEnabled()) {
                this.dt.toggleRow(this.data, event);
                event.preventDefault();
            }
        };
        RowToggler.prototype.isEnabled = function () {
            return this.pRowTogglerDisabled !== true;
        };
RowToggler.ɵfac = function RowToggler_Factory(t) { return new (t || RowToggler)(ɵngcc0.ɵɵdirectiveInject(Table)); };
RowToggler.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RowToggler, selectors: [["", "pRowToggler", ""]], hostBindings: function RowToggler_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function RowToggler_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { data: ["pRowToggler", "data"], pRowTogglerDisabled: "pRowTogglerDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RowToggler, [{
        type: core.Directive,
        args: [{
                selector: '[pRowToggler]'
            }]
    }], function () { return [{ type: Table }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }], data: [{
            type: core.Input,
            args: ['pRowToggler']
        }], pRowTogglerDisabled: [{
            type: core.Input
        }] }); })();
        return RowToggler;
    }());
    RowToggler.ctorParameters = function () { return [
        { type: Table }
    ]; };
    RowToggler.propDecorators = {
        data: [{ type: core.Input, args: ['pRowToggler',] }],
        pRowTogglerDisabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };
    var ResizableColumn = /** @class */ (function () {
        function ResizableColumn(dt, el, zone) {
            this.dt = dt;
            this.el = el;
            this.zone = zone;
        }
        ResizableColumn.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.isEnabled()) {
                dom.DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
                this.resizer = document.createElement('span');
                this.resizer.className = 'p-column-resizer';
                this.el.nativeElement.appendChild(this.resizer);
                this.zone.runOutsideAngular(function () {
                    _this.resizerMouseDownListener = _this.onMouseDown.bind(_this);
                    _this.resizer.addEventListener('mousedown', _this.resizerMouseDownListener);
                });
            }
        };
        ResizableColumn.prototype.bindDocumentEvents = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.documentMouseMoveListener = _this.onDocumentMouseMove.bind(_this);
                document.addEventListener('mousemove', _this.documentMouseMoveListener);
                _this.documentMouseUpListener = _this.onDocumentMouseUp.bind(_this);
                document.addEventListener('mouseup', _this.documentMouseUpListener);
            });
        };
        ResizableColumn.prototype.unbindDocumentEvents = function () {
            if (this.documentMouseMoveListener) {
                document.removeEventListener('mousemove', this.documentMouseMoveListener);
                this.documentMouseMoveListener = null;
            }
            if (this.documentMouseUpListener) {
                document.removeEventListener('mouseup', this.documentMouseUpListener);
                this.documentMouseUpListener = null;
            }
        };
        ResizableColumn.prototype.onMouseDown = function (event) {
            if (event.which === 1) {
                this.dt.onColumnResizeBegin(event);
                this.bindDocumentEvents();
            }
        };
        ResizableColumn.prototype.onDocumentMouseMove = function (event) {
            this.dt.onColumnResize(event);
        };
        ResizableColumn.prototype.onDocumentMouseUp = function (event) {
            this.dt.onColumnResizeEnd(event, this.el.nativeElement);
            this.unbindDocumentEvents();
        };
        ResizableColumn.prototype.isEnabled = function () {
            return this.pResizableColumnDisabled !== true;
        };
        ResizableColumn.prototype.ngOnDestroy = function () {
            if (this.resizerMouseDownListener) {
                this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
            }
            this.unbindDocumentEvents();
        };
ResizableColumn.ɵfac = function ResizableColumn_Factory(t) { return new (t || ResizableColumn)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ResizableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ResizableColumn, selectors: [["", "pResizableColumn", ""]], inputs: { pResizableColumnDisabled: "pResizableColumnDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResizableColumn, [{
        type: core.Directive,
        args: [{
                selector: '[pResizableColumn]'
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { pResizableColumnDisabled: [{
            type: core.Input
        }] }); })();
        return ResizableColumn;
    }());
    ResizableColumn.ctorParameters = function () { return [
        { type: Table },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    ResizableColumn.propDecorators = {
        pResizableColumnDisabled: [{ type: core.Input }]
    };
    var ReorderableColumn = /** @class */ (function () {
        function ReorderableColumn(dt, el, zone) {
            this.dt = dt;
            this.el = el;
            this.zone = zone;
        }
        ReorderableColumn.prototype.ngAfterViewInit = function () {
            if (this.isEnabled()) {
                this.bindEvents();
            }
        };
        ReorderableColumn.prototype.bindEvents = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.mouseDownListener = _this.onMouseDown.bind(_this);
                _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
                _this.dragStartListener = _this.onDragStart.bind(_this);
                _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
                _this.dragOverListener = _this.onDragEnter.bind(_this);
                _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
                _this.dragEnterListener = _this.onDragEnter.bind(_this);
                _this.el.nativeElement.addEventListener('dragenter', _this.dragEnterListener);
                _this.dragLeaveListener = _this.onDragLeave.bind(_this);
                _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
            });
        };
        ReorderableColumn.prototype.unbindEvents = function () {
            if (this.mouseDownListener) {
                document.removeEventListener('mousedown', this.mouseDownListener);
                this.mouseDownListener = null;
            }
            if (this.dragOverListener) {
                document.removeEventListener('dragover', this.dragOverListener);
                this.dragOverListener = null;
            }
            if (this.dragEnterListener) {
                document.removeEventListener('dragenter', this.dragEnterListener);
                this.dragEnterListener = null;
            }
            if (this.dragEnterListener) {
                document.removeEventListener('dragenter', this.dragEnterListener);
                this.dragEnterListener = null;
            }
            if (this.dragLeaveListener) {
                document.removeEventListener('dragleave', this.dragLeaveListener);
                this.dragLeaveListener = null;
            }
        };
        ReorderableColumn.prototype.onMouseDown = function (event) {
            if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || dom.DomHandler.hasClass(event.target, 'p-column-resizer'))
                this.el.nativeElement.draggable = false;
            else
                this.el.nativeElement.draggable = true;
        };
        ReorderableColumn.prototype.onDragStart = function (event) {
            this.dt.onColumnDragStart(event, this.el.nativeElement);
        };
        ReorderableColumn.prototype.onDragOver = function (event) {
            event.preventDefault();
        };
        ReorderableColumn.prototype.onDragEnter = function (event) {
            this.dt.onColumnDragEnter(event, this.el.nativeElement);
        };
        ReorderableColumn.prototype.onDragLeave = function (event) {
            this.dt.onColumnDragLeave(event);
        };
        ReorderableColumn.prototype.onDrop = function (event) {
            if (this.isEnabled()) {
                this.dt.onColumnDrop(event, this.el.nativeElement);
            }
        };
        ReorderableColumn.prototype.isEnabled = function () {
            return this.pReorderableColumnDisabled !== true;
        };
        ReorderableColumn.prototype.ngOnDestroy = function () {
            this.unbindEvents();
        };
ReorderableColumn.ɵfac = function ReorderableColumn_Factory(t) { return new (t || ReorderableColumn)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ReorderableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ReorderableColumn, selectors: [["", "pReorderableColumn", ""]], hostBindings: function ReorderableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function ReorderableColumn_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { pReorderableColumnDisabled: "pReorderableColumnDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReorderableColumn, [{
        type: core.Directive,
        args: [{
                selector: '[pReorderableColumn]'
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDrop: [{
            type: core.HostListener,
            args: ['drop', ['$event']]
        }], pReorderableColumnDisabled: [{
            type: core.Input
        }] }); })();
        return ReorderableColumn;
    }());
    ReorderableColumn.ctorParameters = function () { return [
        { type: Table },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    ReorderableColumn.propDecorators = {
        pReorderableColumnDisabled: [{ type: core.Input }],
        onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
    };
    var EditableColumn = /** @class */ (function () {
        function EditableColumn(dt, el, zone) {
            this.dt = dt;
            this.el = el;
            this.zone = zone;
        }
        EditableColumn.prototype.ngAfterViewInit = function () {
            if (this.isEnabled()) {
                dom.DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
            }
        };
        EditableColumn.prototype.onClick = function (event) {
            if (this.isEnabled()) {
                this.dt.editingCellClick = true;
                if (this.dt.editingCell) {
                    if (this.dt.editingCell !== this.el.nativeElement) {
                        if (!this.dt.isEditingCellValid()) {
                            return;
                        }
                        this.closeEditingCell(true, event);
                        this.openCell();
                    }
                }
                else {
                    this.openCell();
                }
            }
        };
        EditableColumn.prototype.openCell = function () {
            var _this = this;
            this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
            dom.DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
            this.dt.onEditInit.emit({ field: this.field, data: this.data, index: this.rowIndex });
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    var focusCellSelector = _this.pFocusCellSelector || 'input, textarea, select';
                    var focusableElement = dom.DomHandler.findSingle(_this.el.nativeElement, focusCellSelector);
                    if (focusableElement) {
                        focusableElement.focus();
                    }
                }, 50);
            });
        };
        EditableColumn.prototype.closeEditingCell = function (completed, event) {
            if (completed)
                this.dt.onEditComplete.emit({ field: this.dt.editingCellField, data: this.dt.editingCellData, originalEvent: event, index: this.dt.editingCellRowIndex });
            else
                this.dt.onEditCancel.emit({ field: this.dt.editingCellField, data: this.dt.editingCellData, originalEvent: event, index: this.dt.editingCellRowIndex });
            dom.DomHandler.removeClass(this.dt.editingCell, 'p-cell-editing');
            this.dt.editingCell = null;
            this.dt.editingCellData = null;
            this.dt.editingCellField = null;
            this.dt.unbindDocumentEditListener();
        };
        EditableColumn.prototype.onEnterKeyDown = function (event) {
            if (this.isEnabled()) {
                if (this.dt.isEditingCellValid()) {
                    this.closeEditingCell(true, event);
                }
                event.preventDefault();
            }
        };
        EditableColumn.prototype.onEscapeKeyDown = function (event) {
            if (this.isEnabled()) {
                if (this.dt.isEditingCellValid()) {
                    this.closeEditingCell(false, event);
                }
                event.preventDefault();
            }
        };
        EditableColumn.prototype.onShiftKeyDown = function (event) {
            if (this.isEnabled()) {
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else {
                    this.moveToNextCell(event);
                }
            }
        };
        EditableColumn.prototype.onArrowDown = function (event) {
            if (this.isEnabled()) {
                var currentCell = this.findCell(event.target);
                if (currentCell) {
                    var cellIndex = dom.DomHandler.index(currentCell);
                    var targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);
                    if (targetCell) {
                        if (this.dt.isEditingCellValid()) {
                            this.closeEditingCell(true, event);
                        }
                        dom.DomHandler.invokeElementMethod(event.target, 'blur');
                        dom.DomHandler.invokeElementMethod(targetCell, 'click');
                    }
                    event.preventDefault();
                }
            }
        };
        EditableColumn.prototype.onArrowUp = function (event) {
            if (this.isEnabled()) {
                var currentCell = this.findCell(event.target);
                if (currentCell) {
                    var cellIndex = dom.DomHandler.index(currentCell);
                    var targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);
                    if (targetCell) {
                        if (this.dt.isEditingCellValid()) {
                            this.closeEditingCell(true, event);
                        }
                        dom.DomHandler.invokeElementMethod(event.target, 'blur');
                        dom.DomHandler.invokeElementMethod(targetCell, 'click');
                    }
                    event.preventDefault();
                }
            }
        };
        EditableColumn.prototype.onArrowLeft = function (event) {
            if (this.isEnabled()) {
                this.moveToPreviousCell(event);
            }
        };
        EditableColumn.prototype.onArrowRight = function (event) {
            if (this.isEnabled()) {
                this.moveToNextCell(event);
            }
        };
        EditableColumn.prototype.findCell = function (element) {
            if (element) {
                var cell = element;
                while (cell && !dom.DomHandler.hasClass(cell, 'p-cell-editing')) {
                    cell = cell.parentElement;
                }
                return cell;
            }
            else {
                return null;
            }
        };
        EditableColumn.prototype.moveToPreviousCell = function (event) {
            var currentCell = this.findCell(event.target);
            if (currentCell) {
                var targetCell = this.findPreviousEditableColumn(currentCell);
                if (targetCell) {
                    if (this.dt.isEditingCellValid()) {
                        this.closeEditingCell(true, event);
                    }
                    dom.DomHandler.invokeElementMethod(event.target, 'blur');
                    dom.DomHandler.invokeElementMethod(targetCell, 'click');
                    event.preventDefault();
                }
            }
        };
        EditableColumn.prototype.moveToNextCell = function (event) {
            var currentCell = this.findCell(event.target);
            if (currentCell) {
                var targetCell = this.findNextEditableColumn(currentCell);
                if (targetCell) {
                    if (this.dt.isEditingCellValid()) {
                        this.closeEditingCell(true, event);
                    }
                    dom.DomHandler.invokeElementMethod(event.target, 'blur');
                    dom.DomHandler.invokeElementMethod(targetCell, 'click');
                    event.preventDefault();
                }
            }
        };
        EditableColumn.prototype.findPreviousEditableColumn = function (cell) {
            var prevCell = cell.previousElementSibling;
            if (!prevCell) {
                var previousRow = cell.parentElement.previousElementSibling;
                if (previousRow) {
                    prevCell = previousRow.lastElementChild;
                }
            }
            if (prevCell) {
                if (dom.DomHandler.hasClass(prevCell, 'p-editable-column'))
                    return prevCell;
                else
                    return this.findPreviousEditableColumn(prevCell);
            }
            else {
                return null;
            }
        };
        EditableColumn.prototype.findNextEditableColumn = function (cell) {
            var nextCell = cell.nextElementSibling;
            if (!nextCell) {
                var nextRow = cell.parentElement.nextElementSibling;
                if (nextRow) {
                    nextCell = nextRow.firstElementChild;
                }
            }
            if (nextCell) {
                if (dom.DomHandler.hasClass(nextCell, 'p-editable-column'))
                    return nextCell;
                else
                    return this.findNextEditableColumn(nextCell);
            }
            else {
                return null;
            }
        };
        EditableColumn.prototype.findNextEditableColumnByIndex = function (cell, index) {
            var nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                var nextCell = nextRow.children[index];
                if (nextCell && dom.DomHandler.hasClass(nextCell, 'p-editable-column')) {
                    return nextCell;
                }
                return null;
            }
            else {
                return null;
            }
        };
        EditableColumn.prototype.findPrevEditableColumnByIndex = function (cell, index) {
            var prevRow = cell.parentElement.previousElementSibling;
            if (prevRow) {
                var prevCell = prevRow.children[index];
                if (prevCell && dom.DomHandler.hasClass(prevCell, 'p-editable-column')) {
                    return prevCell;
                }
                return null;
            }
            else {
                return null;
            }
        };
        EditableColumn.prototype.isEnabled = function () {
            return this.pEditableColumnDisabled !== true;
        };
EditableColumn.ɵfac = function EditableColumn_Factory(t) { return new (t || EditableColumn)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
EditableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EditableColumn, selectors: [["", "pEditableColumn", ""]], hostBindings: function EditableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function EditableColumn_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKeyDown($event); })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeKeyDown($event); })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) { return ctx.onShiftKeyDown($event); })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) { return ctx.onShiftKeyDown($event); })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) { return ctx.onShiftKeyDown($event); })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) { return ctx.onArrowDown($event); })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) { return ctx.onArrowUp($event); })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) { return ctx.onArrowLeft($event); })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) { return ctx.onArrowRight($event); });
    } }, inputs: { data: ["pEditableColumn", "data"], field: ["pEditableColumnField", "field"], rowIndex: ["pEditableColumnRowIndex", "rowIndex"], pEditableColumnDisabled: "pEditableColumnDisabled", pFocusCellSelector: "pFocusCellSelector" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EditableColumn, [{
        type: core.Directive,
        args: [{
                selector: '[pEditableColumn]'
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }], onEnterKeyDown: [{
            type: core.HostListener,
            args: ['keydown.enter', ['$event']]
        }], onEscapeKeyDown: [{
            type: core.HostListener,
            args: ['keydown.escape', ['$event']]
        }], onShiftKeyDown: [{
            type: core.HostListener,
            args: ['keydown.tab', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.shift.tab', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.meta.tab', ['$event']]
        }], onArrowDown: [{
            type: core.HostListener,
            args: ['keydown.arrowdown', ['$event']]
        }], onArrowUp: [{
            type: core.HostListener,
            args: ['keydown.arrowup', ['$event']]
        }], onArrowLeft: [{
            type: core.HostListener,
            args: ['keydown.arrowleft', ['$event']]
        }], onArrowRight: [{
            type: core.HostListener,
            args: ['keydown.arrowright', ['$event']]
        }], data: [{
            type: core.Input,
            args: ["pEditableColumn"]
        }], field: [{
            type: core.Input,
            args: ["pEditableColumnField"]
        }], rowIndex: [{
            type: core.Input,
            args: ["pEditableColumnRowIndex"]
        }], pEditableColumnDisabled: [{
            type: core.Input
        }], pFocusCellSelector: [{
            type: core.Input
        }] }); })();
        return EditableColumn;
    }());
    EditableColumn.ctorParameters = function () { return [
        { type: Table },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    EditableColumn.propDecorators = {
        data: [{ type: core.Input, args: ["pEditableColumn",] }],
        field: [{ type: core.Input, args: ["pEditableColumnField",] }],
        rowIndex: [{ type: core.Input, args: ["pEditableColumnRowIndex",] }],
        pEditableColumnDisabled: [{ type: core.Input }],
        pFocusCellSelector: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
        onEnterKeyDown: [{ type: core.HostListener, args: ['keydown.enter', ['$event'],] }],
        onEscapeKeyDown: [{ type: core.HostListener, args: ['keydown.escape', ['$event'],] }],
        onShiftKeyDown: [{ type: core.HostListener, args: ['keydown.tab', ['$event'],] }, { type: core.HostListener, args: ['keydown.shift.tab', ['$event'],] }, { type: core.HostListener, args: ['keydown.meta.tab', ['$event'],] }],
        onArrowDown: [{ type: core.HostListener, args: ['keydown.arrowdown', ['$event'],] }],
        onArrowUp: [{ type: core.HostListener, args: ['keydown.arrowup', ['$event'],] }],
        onArrowLeft: [{ type: core.HostListener, args: ['keydown.arrowleft', ['$event'],] }],
        onArrowRight: [{ type: core.HostListener, args: ['keydown.arrowright', ['$event'],] }]
    };
    var EditableRow = /** @class */ (function () {
        function EditableRow(el) {
            this.el = el;
        }
        EditableRow.prototype.isEnabled = function () {
            return this.pEditableRowDisabled !== true;
        };
EditableRow.ɵfac = function EditableRow_Factory(t) { return new (t || EditableRow)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
EditableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EditableRow, selectors: [["", "pEditableRow", ""]], inputs: { data: ["pEditableRow", "data"], pEditableRowDisabled: "pEditableRowDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EditableRow, [{
        type: core.Directive,
        args: [{
                selector: '[pEditableRow]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { data: [{
            type: core.Input,
            args: ["pEditableRow"]
        }], pEditableRowDisabled: [{
            type: core.Input
        }] }); })();
        return EditableRow;
    }());
    EditableRow.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    EditableRow.propDecorators = {
        data: [{ type: core.Input, args: ["pEditableRow",] }],
        pEditableRowDisabled: [{ type: core.Input }]
    };
    var InitEditableRow = /** @class */ (function () {
        function InitEditableRow(dt, editableRow) {
            this.dt = dt;
            this.editableRow = editableRow;
        }
        InitEditableRow.prototype.onClick = function (event) {
            this.dt.initRowEdit(this.editableRow.data);
            event.preventDefault();
        };
InitEditableRow.ɵfac = function InitEditableRow_Factory(t) { return new (t || InitEditableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(EditableRow)); };
InitEditableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InitEditableRow, selectors: [["", "pInitEditableRow", ""]], hostBindings: function InitEditableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function InitEditableRow_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InitEditableRow, [{
        type: core.Directive,
        args: [{
                selector: '[pInitEditableRow]'
            }]
    }], function () { return [{ type: Table }, { type: EditableRow }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }] }); })();
        return InitEditableRow;
    }());
    InitEditableRow.ctorParameters = function () { return [
        { type: Table },
        { type: EditableRow }
    ]; };
    InitEditableRow.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };
    var SaveEditableRow = /** @class */ (function () {
        function SaveEditableRow(dt, editableRow) {
            this.dt = dt;
            this.editableRow = editableRow;
        }
        SaveEditableRow.prototype.onClick = function (event) {
            this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
            event.preventDefault();
        };
SaveEditableRow.ɵfac = function SaveEditableRow_Factory(t) { return new (t || SaveEditableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(EditableRow)); };
SaveEditableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SaveEditableRow, selectors: [["", "pSaveEditableRow", ""]], hostBindings: function SaveEditableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function SaveEditableRow_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SaveEditableRow, [{
        type: core.Directive,
        args: [{
                selector: '[pSaveEditableRow]'
            }]
    }], function () { return [{ type: Table }, { type: EditableRow }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }] }); })();
        return SaveEditableRow;
    }());
    SaveEditableRow.ctorParameters = function () { return [
        { type: Table },
        { type: EditableRow }
    ]; };
    SaveEditableRow.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };
    var CancelEditableRow = /** @class */ (function () {
        function CancelEditableRow(dt, editableRow) {
            this.dt = dt;
            this.editableRow = editableRow;
        }
        CancelEditableRow.prototype.onClick = function (event) {
            this.dt.cancelRowEdit(this.editableRow.data);
            event.preventDefault();
        };
CancelEditableRow.ɵfac = function CancelEditableRow_Factory(t) { return new (t || CancelEditableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(EditableRow)); };
CancelEditableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CancelEditableRow, selectors: [["", "pCancelEditableRow", ""]], hostBindings: function CancelEditableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CancelEditableRow_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CancelEditableRow, [{
        type: core.Directive,
        args: [{
                selector: '[pCancelEditableRow]'
            }]
    }], function () { return [{ type: Table }, { type: EditableRow }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }] }); })();
        return CancelEditableRow;
    }());
    CancelEditableRow.ctorParameters = function () { return [
        { type: Table },
        { type: EditableRow }
    ]; };
    CancelEditableRow.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };
    var CellEditor = /** @class */ (function () {
        function CellEditor(dt, editableColumn, editableRow) {
            this.dt = dt;
            this.editableColumn = editableColumn;
            this.editableRow = editableRow;
        }
        CellEditor.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'input':
                        _this.inputTemplate = item.template;
                        break;
                    case 'output':
                        _this.outputTemplate = item.template;
                        break;
                }
            });
        };
        Object.defineProperty(CellEditor.prototype, "editing", {
            get: function () {
                return (this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement) ||
                    (this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data));
            },
            enumerable: false,
            configurable: true
        });
CellEditor.ɵfac = function CellEditor_Factory(t) { return new (t || CellEditor)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(EditableColumn, 8), ɵngcc0.ɵɵdirectiveInject(EditableRow, 8)); };
CellEditor.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CellEditor, selectors: [["p-cellEditor"]], contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]], template: function CellEditor_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.editing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editing);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CellEditor, [{
        type: core.Component,
        args: [{
                selector: 'p-cellEditor',
                template: "\n        <ng-container *ngIf=\"editing\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!editing\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: EditableColumn, decorators: [{
                type: core.Optional
            }] }, { type: EditableRow, decorators: [{
                type: core.Optional
            }] }]; }, { templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return CellEditor;
    }());
    CellEditor.ctorParameters = function () { return [
        { type: Table },
        { type: EditableColumn, decorators: [{ type: core.Optional }] },
        { type: EditableRow, decorators: [{ type: core.Optional }] }
    ]; };
    CellEditor.propDecorators = {
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var TableRadioButton = /** @class */ (function () {
        function TableRadioButton(dt, tableService, cd) {
            var _this = this;
            this.dt = dt;
            this.tableService = tableService;
            this.cd = cd;
            this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.checked = _this.dt.isSelected(_this.value);
                _this.cd.markForCheck();
            });
        }
        TableRadioButton.prototype.ngOnInit = function () {
            this.checked = this.dt.isSelected(this.value);
        };
        TableRadioButton.prototype.onClick = function (event) {
            if (!this.disabled) {
                this.dt.toggleRowWithRadio({
                    originalEvent: event,
                    rowIndex: this.index
                }, this.value);
            }
            dom.DomHandler.clearSelection();
        };
        TableRadioButton.prototype.onFocus = function () {
            dom.DomHandler.addClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TableRadioButton.prototype.onBlur = function () {
            dom.DomHandler.removeClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TableRadioButton.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TableRadioButton.ɵfac = function TableRadioButton_Factory(t) { return new (t || TableRadioButton)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TableRadioButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableRadioButton, selectors: [["p-tableRadioButton"]], viewQuery: function TableRadioButton_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c26, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, inputs: { disabled: "disabled", value: "value", index: "index", inputId: "inputId", name: "name", ariaLabel: "ariaLabel" }, decls: 6, vars: 10, consts: [[1, "p-radiobutton", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "focus", "blur"], ["role", "radio", 3, "ngClass"], ["box", ""], [1, "p-radiobutton-icon"]], template: function TableRadioButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TableRadioButton_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("focus", function TableRadioButton_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TableRadioButton_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵelement(5, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c27, ctx.checked, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
    } }, directives: [ɵngcc2.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableRadioButton, [{
        type: core.Component,
        args: [{
                selector: 'p-tableRadioButton',
                template: "\n        <div class=\"p-radiobutton p-component\" (click)=\"onClick($event)\">\n            <div class=\"p-hidden-accessible\">\n                <input type=\"radio\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [disabled]=\"disabled\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'p-radiobutton-box p-component':true,\n                'p-highlight':checked, 'p-disabled':disabled}\" role=\"radio\" [attr.aria-checked]=\"checked\">\n                <div class=\"p-radiobutton-icon\"></div>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], index: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], ariaLabel: [{
            type: core.Input
        }], boxViewChild: [{
            type: core.ViewChild,
            args: ['box']
        }] }); })();
        return TableRadioButton;
    }());
    TableRadioButton.ctorParameters = function () { return [
        { type: Table },
        { type: TableService },
        { type: core.ChangeDetectorRef }
    ]; };
    TableRadioButton.propDecorators = {
        disabled: [{ type: core.Input }],
        value: [{ type: core.Input }],
        index: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        name: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input }],
        boxViewChild: [{ type: core.ViewChild, args: ['box',] }]
    };
    var TableCheckbox = /** @class */ (function () {
        function TableCheckbox(dt, tableService, cd) {
            var _this = this;
            this.dt = dt;
            this.tableService = tableService;
            this.cd = cd;
            this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.checked = _this.dt.isSelected(_this.value);
                _this.cd.markForCheck();
            });
        }
        TableCheckbox.prototype.ngOnInit = function () {
            this.checked = this.dt.isSelected(this.value);
        };
        TableCheckbox.prototype.onClick = function (event) {
            if (!this.disabled) {
                this.dt.toggleRowWithCheckbox({
                    originalEvent: event,
                    rowIndex: this.index
                }, this.value);
            }
            dom.DomHandler.clearSelection();
        };
        TableCheckbox.prototype.onFocus = function () {
            dom.DomHandler.addClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TableCheckbox.prototype.onBlur = function () {
            dom.DomHandler.removeClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TableCheckbox.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TableCheckbox.ɵfac = function TableCheckbox_Factory(t) { return new (t || TableCheckbox)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TableCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableCheckbox, selectors: [["p-tableCheckbox"]], viewQuery: function TableCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c26, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, inputs: { disabled: "disabled", value: "value", index: "index", inputId: "inputId", name: "name", required: "required", ariaLabel: "ariaLabel" }, decls: 6, vars: 14, consts: [[1, "p-checkbox", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]], template: function TableCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TableCheckbox_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("focus", function TableCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TableCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("required", ctx.required)("aria-label", ctx.ariaLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c28, ctx.checked, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c29, ctx.checked));
    } }, directives: [ɵngcc2.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableCheckbox, [{
        type: core.Component,
        args: [{
                selector: 'p-tableCheckbox',
                template: "\n        <div class=\"p-checkbox p-component\" (click)=\"onClick($event)\">\n            <div class=\"p-hidden-accessible\">\n                <input type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"disabled\"\n                [attr.required]=\"required\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'p-checkbox-box p-component':true,\n                'p-highlight':checked, 'p-disabled':disabled}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], index: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }], ariaLabel: [{
            type: core.Input
        }], boxViewChild: [{
            type: core.ViewChild,
            args: ['box']
        }] }); })();
        return TableCheckbox;
    }());
    TableCheckbox.ctorParameters = function () { return [
        { type: Table },
        { type: TableService },
        { type: core.ChangeDetectorRef }
    ]; };
    TableCheckbox.propDecorators = {
        disabled: [{ type: core.Input }],
        value: [{ type: core.Input }],
        index: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        name: [{ type: core.Input }],
        required: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input }],
        boxViewChild: [{ type: core.ViewChild, args: ['box',] }]
    };
    var TableHeaderCheckbox = /** @class */ (function () {
        function TableHeaderCheckbox(dt, tableService, cd) {
            var _this = this;
            this.dt = dt;
            this.tableService = tableService;
            this.cd = cd;
            this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(function () {
                _this.checked = _this.updateCheckedState();
            });
            this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.checked = _this.updateCheckedState();
            });
        }
        TableHeaderCheckbox.prototype.ngOnInit = function () {
            this.checked = this.updateCheckedState();
        };
        TableHeaderCheckbox.prototype.onClick = function (event) {
            if (!this.disabled) {
                if (this.dt.value && this.dt.value.length > 0) {
                    this.dt.toggleRowsWithCheckbox(event, !this.checked);
                }
            }
            dom.DomHandler.clearSelection();
        };
        TableHeaderCheckbox.prototype.onFocus = function () {
            dom.DomHandler.addClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TableHeaderCheckbox.prototype.onBlur = function () {
            dom.DomHandler.removeClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TableHeaderCheckbox.prototype.isDisabled = function () {
            return this.disabled || !this.dt.value || !this.dt.value.length;
        };
        TableHeaderCheckbox.prototype.ngOnDestroy = function () {
            if (this.selectionChangeSubscription) {
                this.selectionChangeSubscription.unsubscribe();
            }
            if (this.valueChangeSubscription) {
                this.valueChangeSubscription.unsubscribe();
            }
        };
        TableHeaderCheckbox.prototype.updateCheckedState = function () {
            this.cd.markForCheck();
            if (this.dt.filteredValue) {
                var val = this.dt.filteredValue;
                return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.isAllFilteredValuesChecked());
            }
            else {
                var val = this.dt.value;
                return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === val.length);
            }
        };
        TableHeaderCheckbox.prototype.isAllFilteredValuesChecked = function () {
            var e_4, _b;
            if (!this.dt.filteredValue) {
                return false;
            }
            else {
                try {
                    for (var _c = __values(this.dt.filteredValue), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var rowData = _d.value;
                        if (!this.dt.isSelected(rowData)) {
                            return false;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return true;
            }
        };
TableHeaderCheckbox.ɵfac = function TableHeaderCheckbox_Factory(t) { return new (t || TableHeaderCheckbox)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(TableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TableHeaderCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableHeaderCheckbox, selectors: [["p-tableHeaderCheckbox"]], viewQuery: function TableHeaderCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c26, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, inputs: { disabled: "disabled", inputId: "inputId", name: "name", ariaLabel: "ariaLabel" }, decls: 7, vars: 13, consts: [[1, "p-checkbox", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]], template: function TableHeaderCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TableHeaderCheckbox_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("focus", function TableHeaderCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TableHeaderCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
        ɵngcc0.ɵɵelement(6, "span", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.isDisabled());
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c30, ctx.checked, ctx.isDisabled()));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c29, ctx.checked));
    } }, directives: [ɵngcc2.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableHeaderCheckbox, [{
        type: core.Component,
        args: [{
                selector: 'p-tableHeaderCheckbox',
                template: "\n        <div class=\"p-checkbox p-component\" (click)=\"onClick($event)\">\n            <div class=\"p-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [disabled]=\"isDisabled()\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'p-checkbox-box':true,\n                'p-highlight':checked, 'p-disabled': isDisabled()}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }, { type: TableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { boxViewChild: [{
            type: core.ViewChild,
            args: ['box']
        }], disabled: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], ariaLabel: [{
            type: core.Input
        }] }); })();
        return TableHeaderCheckbox;
    }());
    TableHeaderCheckbox.ctorParameters = function () { return [
        { type: Table },
        { type: TableService },
        { type: core.ChangeDetectorRef }
    ]; };
    TableHeaderCheckbox.propDecorators = {
        boxViewChild: [{ type: core.ViewChild, args: ['box',] }],
        disabled: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        name: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input }]
    };
    var ReorderableRowHandle = /** @class */ (function () {
        function ReorderableRowHandle(el) {
            this.el = el;
        }
        ReorderableRowHandle.prototype.ngAfterViewInit = function () {
            dom.DomHandler.addClass(this.el.nativeElement, 'p-datatable-reorderablerow-handle');
        };
ReorderableRowHandle.ɵfac = function ReorderableRowHandle_Factory(t) { return new (t || ReorderableRowHandle)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ReorderableRowHandle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ReorderableRowHandle, selectors: [["", "pReorderableRowHandle", ""]], inputs: { index: ["pReorderableRowHandle", "index"] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReorderableRowHandle, [{
        type: core.Directive,
        args: [{
                selector: '[pReorderableRowHandle]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { index: [{
            type: core.Input,
            args: ["pReorderableRowHandle"]
        }] }); })();
        return ReorderableRowHandle;
    }());
    ReorderableRowHandle.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ReorderableRowHandle.propDecorators = {
        index: [{ type: core.Input, args: ["pReorderableRowHandle",] }]
    };
    var ReorderableRow = /** @class */ (function () {
        function ReorderableRow(dt, el, zone) {
            this.dt = dt;
            this.el = el;
            this.zone = zone;
        }
        ReorderableRow.prototype.ngAfterViewInit = function () {
            if (this.isEnabled()) {
                this.el.nativeElement.droppable = true;
                this.bindEvents();
            }
        };
        ReorderableRow.prototype.bindEvents = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.mouseDownListener = _this.onMouseDown.bind(_this);
                _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
                _this.dragStartListener = _this.onDragStart.bind(_this);
                _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
                _this.dragEndListener = _this.onDragEnd.bind(_this);
                _this.el.nativeElement.addEventListener('dragend', _this.dragEndListener);
                _this.dragOverListener = _this.onDragOver.bind(_this);
                _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
                _this.dragLeaveListener = _this.onDragLeave.bind(_this);
                _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
            });
        };
        ReorderableRow.prototype.unbindEvents = function () {
            if (this.mouseDownListener) {
                document.removeEventListener('mousedown', this.mouseDownListener);
                this.mouseDownListener = null;
            }
            if (this.dragStartListener) {
                document.removeEventListener('dragstart', this.dragStartListener);
                this.dragStartListener = null;
            }
            if (this.dragEndListener) {
                document.removeEventListener('dragend', this.dragEndListener);
                this.dragEndListener = null;
            }
            if (this.dragOverListener) {
                document.removeEventListener('dragover', this.dragOverListener);
                this.dragOverListener = null;
            }
            if (this.dragLeaveListener) {
                document.removeEventListener('dragleave', this.dragLeaveListener);
                this.dragLeaveListener = null;
            }
        };
        ReorderableRow.prototype.onMouseDown = function (event) {
            if (dom.DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle'))
                this.el.nativeElement.draggable = true;
            else
                this.el.nativeElement.draggable = false;
        };
        ReorderableRow.prototype.onDragStart = function (event) {
            this.dt.onRowDragStart(event, this.index);
        };
        ReorderableRow.prototype.onDragEnd = function (event) {
            this.dt.onRowDragEnd(event);
            this.el.nativeElement.draggable = false;
        };
        ReorderableRow.prototype.onDragOver = function (event) {
            this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
            event.preventDefault();
        };
        ReorderableRow.prototype.onDragLeave = function (event) {
            this.dt.onRowDragLeave(event, this.el.nativeElement);
        };
        ReorderableRow.prototype.isEnabled = function () {
            return this.pReorderableRowDisabled !== true;
        };
        ReorderableRow.prototype.onDrop = function (event) {
            if (this.isEnabled() && this.dt.rowDragging) {
                this.dt.onRowDrop(event, this.el.nativeElement);
            }
            event.preventDefault();
        };
ReorderableRow.ɵfac = function ReorderableRow_Factory(t) { return new (t || ReorderableRow)(ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ReorderableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ReorderableRow, selectors: [["", "pReorderableRow", ""]], hostBindings: function ReorderableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function ReorderableRow_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { index: ["pReorderableRow", "index"], pReorderableRowDisabled: "pReorderableRowDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReorderableRow, [{
        type: core.Directive,
        args: [{
                selector: '[pReorderableRow]'
            }]
    }], function () { return [{ type: Table }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDrop: [{
            type: core.HostListener,
            args: ['drop', ['$event']]
        }], index: [{
            type: core.Input,
            args: ["pReorderableRow"]
        }], pReorderableRowDisabled: [{
            type: core.Input
        }] }); })();
        return ReorderableRow;
    }());
    ReorderableRow.ctorParameters = function () { return [
        { type: Table },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    ReorderableRow.propDecorators = {
        index: [{ type: core.Input, args: ["pReorderableRow",] }],
        pReorderableRowDisabled: [{ type: core.Input }],
        onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
    };
    var ColumnFilterFormElement = /** @class */ (function () {
        function ColumnFilterFormElement(dt) {
            this.dt = dt;
            this.useGrouping = true;
        }
        ColumnFilterFormElement.prototype.ngOnInit = function () {
            var _this = this;
            this.filterCallback = function (value) {
                _this.filterConstraint.value = value;
                _this.dt._filter();
            };
        };
        ColumnFilterFormElement.prototype.onModelChange = function (value) {
            this.filterConstraint.value = value;
            if (this.type === 'boolean' || value === '') {
                this.dt._filter();
            }
        };
        ColumnFilterFormElement.prototype.onTextInputEnterKeyDown = function (event) {
            this.dt._filter();
            event.preventDefault();
        };
        ColumnFilterFormElement.prototype.onNumericInputKeyDown = function (event) {
            if (event.key === 'Enter') {
                this.dt._filter();
                event.preventDefault();
            }
        };
ColumnFilterFormElement.ɵfac = function ColumnFilterFormElement_Factory(t) { return new (t || ColumnFilterFormElement)(ɵngcc0.ɵɵdirectiveInject(Table)); };
ColumnFilterFormElement.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ColumnFilterFormElement, selectors: [["p-columnFilterFormElement"]], inputs: { useGrouping: "useGrouping", field: "field", type: "type", filterConstraint: "filterConstraint", filterTemplate: "filterTemplate", placeholder: "placeholder", minFractionDigits: "minFractionDigits", maxFractionDigits: "maxFractionDigits", prefix: "prefix", suffix: "suffix", locale: "locale", localeMatcher: "localeMatcher", currency: "currency", currencyDisplay: "currencyDisplay" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["builtInElement", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["type", "text", "pInputText", "", 3, "value", "input", "keydown.enter", 4, "ngSwitchCase"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown", 4, "ngSwitchCase"], [3, "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", "pInputText", "", 3, "value", "input", "keydown.enter"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown"], [3, "ngModel", "ngModelChange"]], template: function ColumnFilterFormElement_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ColumnFilterFormElement_ng_container_0_Template, 2, 5, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, ColumnFilterFormElement_ng_template_1_Template, 5, 5, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filterTemplate)("ngIfElse", _r1);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc5.InputText, ɵngcc6.InputNumber, ɵngcc7.NgControlStatus, ɵngcc7.NgModel, ɵngcc8.TriStateCheckbox, ɵngcc9.Calendar], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColumnFilterFormElement, [{
        type: core.Component,
        args: [{
                selector: 'p-columnFilterFormElement',
                template: "\n        <ng-container *ngIf=\"filterTemplate; else builtInElement\">\n            <ng-container *ngTemplateOutlet=\"filterTemplate; context: {$implicit: filterConstraint.value, filterCallback: filterCallback}\"></ng-container>\n        </ng-container>\n        <ng-template #builtInElement>\n            <ng-container [ngSwitch]=\"type\">\n                <input *ngSwitchCase=\"'text'\" type=\"text\" pInputText [value]=\"filterConstraint?.value\" (input)=\"onModelChange($event.target.value)\"\n                    (keydown.enter)=\"onTextInputEnterKeyDown($event)\" [attr.placeholder]=\"placeholder\">\n                <p-inputNumber *ngSwitchCase=\"'numeric'\" [ngModel]=\"filterConstraint?.value\" (ngModelChange)=\"onModelChange($event)\" (onKeyDown)=\"onNumericInputKeyDown($event)\" [showButtons]=\"true\" [attr.placeholder]=\"placeholder\"\n                    [minFractionDigits]=\"minFractionDigits\" [maxFractionDigits]=\"maxFractionDigits\" [prefix]=\"prefix\" [suffix]=\"suffix\" [placeholder]=\"placeholder\"\n                    [mode]=\"currency ? 'currency' : 'decimal'\" [locale]=\"locale\" [localeMatcher]=\"localeMatcher\" [currency]=\"currency\" [currencyDisplay]=\"currencyDisplay\" [useGrouping]=\"useGrouping\"></p-inputNumber>\n                <p-triStateCheckbox *ngSwitchCase=\"'boolean'\" [ngModel]=\"filterConstraint?.value\" (ngModelChange)=\"onModelChange($event)\"></p-triStateCheckbox>\n                <p-calendar *ngSwitchCase=\"'date'\" [ngModel]=\"filterConstraint?.value\" (ngModelChange)=\"onModelChange($event)\"></p-calendar>\n            </ng-container>\n        </ng-template>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: Table }]; }, { useGrouping: [{
            type: core.Input
        }], field: [{
            type: core.Input
        }], type: [{
            type: core.Input
        }], filterConstraint: [{
            type: core.Input
        }], filterTemplate: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], minFractionDigits: [{
            type: core.Input
        }], maxFractionDigits: [{
            type: core.Input
        }], prefix: [{
            type: core.Input
        }], suffix: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], localeMatcher: [{
            type: core.Input
        }], currency: [{
            type: core.Input
        }], currencyDisplay: [{
            type: core.Input
        }] }); })();
        return ColumnFilterFormElement;
    }());
    ColumnFilterFormElement.ctorParameters = function () { return [
        { type: Table }
    ]; };
    ColumnFilterFormElement.propDecorators = {
        field: [{ type: core.Input }],
        type: [{ type: core.Input }],
        filterConstraint: [{ type: core.Input }],
        filterTemplate: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        minFractionDigits: [{ type: core.Input }],
        maxFractionDigits: [{ type: core.Input }],
        prefix: [{ type: core.Input }],
        suffix: [{ type: core.Input }],
        locale: [{ type: core.Input }],
        localeMatcher: [{ type: core.Input }],
        currency: [{ type: core.Input }],
        currencyDisplay: [{ type: core.Input }],
        useGrouping: [{ type: core.Input }]
    };
    var ColumnFilter = /** @class */ (function () {
        function ColumnFilter(el, dt, renderer, config) {
            this.el = el;
            this.dt = dt;
            this.renderer = renderer;
            this.config = config;
            this.type = 'text';
            this.display = 'row';
            this.showMenu = true;
            this.operator = api.FilterOperator.AND;
            this.showOperator = true;
            this.showClearButton = true;
            this.showApplyButton = true;
            this.showMatchModes = true;
            this.showAddButton = true;
            this.hideOnClear = false;
            this.maxConstraints = 2;
            this.useGrouping = true;
        }
        ColumnFilter.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.dt.filters[this.field]) {
                this.initFieldFilterConstraint();
            }
            this.translationSubscription = this.config.translationObserver.subscribe(function () {
                _this.generateMatchModeOptions();
                _this.generateOperatorOptions();
            });
            this.resetSubscription = this.dt.tableService.resetSource$.subscribe(function () {
                _this.clearFilter();
            });
            this.generateMatchModeOptions();
            this.generateOperatorOptions();
        };
        ColumnFilter.prototype.generateMatchModeOptions = function () {
            var _this = this;
            var _a;
            this.matchModes = this.matchModeOptions || ((_a = this.config.filterMatchModeOptions[this.type]) === null || _a === void 0 ? void 0 : _a.map(function (key) {
                return { label: _this.config.getTranslation(key), value: key };
            }));
        };
        ColumnFilter.prototype.generateOperatorOptions = function () {
            this.operatorOptions = [
                { label: this.config.getTranslation(api.TranslationKeys.MATCH_ALL), value: api.FilterOperator.AND },
                { label: this.config.getTranslation(api.TranslationKeys.MATCH_ANY), value: api.FilterOperator.OR }
            ];
        };
        ColumnFilter.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'filter':
                        _this.filterTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    default:
                        _this.filterTemplate = item.template;
                        break;
                }
            });
        };
        ColumnFilter.prototype.initFieldFilterConstraint = function () {
            var defaultMatchMode = this.getDefaultMatchMode();
            this.dt.filters[this.field] = this.display == 'row' ? { value: null, matchMode: defaultMatchMode } : [{ value: null, matchMode: defaultMatchMode, operator: this.operator }];
        };
        ColumnFilter.prototype.onMenuMatchModeChange = function (value, filterMeta) {
            filterMeta.matchMode = value;
            if (!this.showApplyButton) {
                this.dt._filter();
            }
        };
        ColumnFilter.prototype.onRowMatchModeChange = function (matchMode) {
            this.dt.filters[this.field].matchMode = matchMode;
            this.dt._filter();
            this.hide();
        };
        ColumnFilter.prototype.onRowMatchModeKeyDown = function (event) {
            var item = event.target;
            switch (event.key) {
                case 'ArrowDown':
                    var nextItem = this.findNextItem(item);
                    if (nextItem) {
                        item.removeAttribute('tabindex');
                        nextItem.tabIndex = '0';
                        nextItem.focus();
                    }
                    event.preventDefault();
                    break;
                case 'ArrowUp':
                    var prevItem = this.findPrevItem(item);
                    if (prevItem) {
                        item.removeAttribute('tabindex');
                        prevItem.tabIndex = '0';
                        prevItem.focus();
                    }
                    event.preventDefault();
                    break;
            }
        };
        ColumnFilter.prototype.onRowClearItemClick = function () {
            this.clearFilter();
            this.hide();
        };
        ColumnFilter.prototype.isRowMatchModeSelected = function (matchMode) {
            return this.dt.filters[this.field].matchMode === matchMode;
        };
        ColumnFilter.prototype.addConstraint = function () {
            this.dt.filters[this.field].push({ value: null, matchMode: this.getDefaultMatchMode(), operator: this.getDefaultOperator() });
            this.dt._filter();
        };
        ColumnFilter.prototype.removeConstraint = function (filterMeta) {
            this.dt.filters[this.field] = this.dt.filters[this.field].filter(function (meta) { return meta !== filterMeta; });
            this.dt._filter();
        };
        ColumnFilter.prototype.onOperatorChange = function (value) {
            var _this = this;
            this.dt.filters[this.field].forEach(function (filterMeta) {
                filterMeta.operator = value;
                _this.operator = value;
            });
            if (!this.showApplyButton) {
                this.dt._filter();
            }
        };
        ColumnFilter.prototype.toggleMenu = function () {
            this.overlayVisible = !this.overlayVisible;
        };
        ColumnFilter.prototype.onToggleButtonKeyDown = function (event) {
            switch (event.key) {
                case 'Escape':
                case 'Tab':
                    this.overlayVisible = false;
                    break;
                case 'ArrowDown':
                    if (this.overlayVisible) {
                        var focusable = dom.DomHandler.getFocusableElements(this.overlay);
                        if (focusable) {
                            focusable[0].focus();
                        }
                        event.preventDefault();
                    }
                    else if (event.altKey) {
                        this.overlayVisible = true;
                        event.preventDefault();
                    }
                    break;
            }
        };
        ColumnFilter.prototype.onEscape = function () {
            this.overlayVisible = false;
            this.icon.nativeElement.focus();
        };
        ColumnFilter.prototype.findNextItem = function (item) {
            var nextItem = item.nextElementSibling;
            if (nextItem)
                return dom.DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;
            else
                return item.parentElement.firstElementChild;
        };
        ColumnFilter.prototype.findPrevItem = function (item) {
            var prevItem = item.previousElementSibling;
            if (prevItem)
                return dom.DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;
            else
                return item.parentElement.lastElementChild;
        };
        ColumnFilter.prototype.onOverlayAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    this.overlay = event.element;
                    document.body.appendChild(this.overlay);
                    this.overlay.style.zIndex = String(++dom.DomHandler.zindex);
                    dom.DomHandler.absolutePosition(this.overlay, this.icon.nativeElement);
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                    this.bindScrollListener();
                    break;
                case 'void':
                    this.onOverlayHide();
                    break;
            }
        };
        ColumnFilter.prototype.getDefaultMatchMode = function () {
            if (this.matchMode) {
                return this.matchMode;
            }
            else {
                if (this.type === 'text')
                    return api.FilterMatchMode.STARTS_WITH;
                else if (this.type === 'numeric')
                    return api.FilterMatchMode.EQUALS;
                else if (this.type === 'date')
                    return api.FilterMatchMode.DATE_IS;
                else
                    return api.FilterMatchMode.CONTAINS;
            }
        };
        ColumnFilter.prototype.getDefaultOperator = function () {
            return this.dt.filters ? this.dt.filters[this.field][0].operator : this.operator;
        };
        ColumnFilter.prototype.hasRowFilter = function () {
            return this.dt.filters[this.field] && !this.dt.isFilterBlank(this.dt.filters[this.field].value);
        };
        Object.defineProperty(ColumnFilter.prototype, "fieldConstraints", {
            get: function () {
                return this.dt.filters ? this.dt.filters[this.field] : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "showRemoveIcon", {
            get: function () {
                return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "showMenuButton", {
            get: function () {
                return this.showMenu && (this.display === 'row' ? this.type !== 'boolean' : true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "isShowOperator", {
            get: function () {
                return this.showOperator && this.type !== 'boolean';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "isShowAddConstraint", {
            get: function () {
                return this.showAddButton && this.type !== 'boolean' && (this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "applyButtonLabel", {
            get: function () {
                return this.config.getTranslation(api.TranslationKeys.APPLY);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "clearButtonLabel", {
            get: function () {
                return this.config.getTranslation(api.TranslationKeys.CLEAR);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "addRuleButtonLabel", {
            get: function () {
                return this.config.getTranslation(api.TranslationKeys.ADD_RULE);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "removeRuleButtonLabel", {
            get: function () {
                return this.config.getTranslation(api.TranslationKeys.REMOVE_RULE);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColumnFilter.prototype, "noFilterLabel", {
            get: function () {
                return this.config.getTranslation(api.TranslationKeys.NO_FILTER);
            },
            enumerable: false,
            configurable: true
        });
        ColumnFilter.prototype.hasFilter = function () {
            var fieldFilter = this.dt.filters[this.field];
            if (fieldFilter) {
                if (Array.isArray(fieldFilter))
                    return !this.dt.isFilterBlank(fieldFilter[0].value);
                else
                    return !this.dt.isFilterBlank(fieldFilter.value);
            }
            return false;
        };
        ColumnFilter.prototype.isOutsideClicked = function (event) {
            return !(this.overlay.isSameNode(event.target) || this.overlay.contains(event.target)
                || this.icon.nativeElement.isSameNode(event.target) || this.icon.nativeElement.contains(event.target)
                || dom.DomHandler.hasClass(event.target, 'p-column-filter-add-button') || dom.DomHandler.hasClass(event.target.parentElement, 'p-column-filter-add-button')
                || dom.DomHandler.hasClass(event.target, 'p-column-filter-remove-button') || dom.DomHandler.hasClass(event.target.parentElement, 'p-column-filter-remove-button'));
        };
        ColumnFilter.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, 'mousedown', function (event) {
                    if (_this.isOutsideClicked(event)) {
                        _this.hide();
                    }
                });
            }
        };
        ColumnFilter.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        ColumnFilter.prototype.bindDocumentResizeListener = function () {
            var _this = this;
            this.documentResizeListener = function () { return _this.hide(); };
            window.addEventListener('resize', this.documentResizeListener);
        };
        ColumnFilter.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        ColumnFilter.prototype.bindScrollListener = function () {
            var _this = this;
            if (!this.scrollHandler) {
                this.scrollHandler = new dom.ConnectedOverlayScrollHandler(this.icon.nativeElement, function () {
                    if (_this.overlayVisible) {
                        _this.hide();
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        };
        ColumnFilter.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        ColumnFilter.prototype.hide = function () {
            this.overlayVisible = false;
        };
        ColumnFilter.prototype.onOverlayHide = function () {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
        };
        ColumnFilter.prototype.clearFilter = function () {
            this.initFieldFilterConstraint();
            this.dt._filter();
            if (this.hideOnClear)
                this.hide();
        };
        ColumnFilter.prototype.applyFilter = function () {
            this.dt._filter();
            this.hide();
        };
        ColumnFilter.prototype.ngOnDestroy = function () {
            if (this.overlay) {
                this.el.nativeElement.appendChild(this.overlay);
                this.onOverlayHide();
            }
            if (this.translationSubscription) {
                this.translationSubscription.unsubscribe();
            }
            if (this.resetSubscription) {
                this.resetSubscription.unsubscribe();
            }
        };
ColumnFilter.ɵfac = function ColumnFilter_Factory(t) { return new (t || ColumnFilter)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(Table), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PrimeNGConfig)); };
ColumnFilter.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ColumnFilter, selectors: [["p-columnFilter"]], contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function ColumnFilter_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c32, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.icon = _t.first);
    } }, inputs: { type: "type", display: "display", showMenu: "showMenu", operator: "operator", showOperator: "showOperator", showClearButton: "showClearButton", showApplyButton: "showApplyButton", showMatchModes: "showMatchModes", showAddButton: "showAddButton", hideOnClear: "hideOnClear", maxConstraints: "maxConstraints", useGrouping: "useGrouping", field: "field", matchMode: "matchMode", placeholder: "placeholder", matchModeOptions: "matchModeOptions", minFractionDigits: "minFractionDigits", maxFractionDigits: "maxFractionDigits", prefix: "prefix", suffix: "suffix", locale: "locale", localeMatcher: "localeMatcher", currency: "currency", currencyDisplay: "currencyDisplay" }, decls: 5, vars: 8, consts: [[1, "p-column-filter", 3, "ngClass"], ["class", "p-fluid", 3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", 4, "ngIf"], ["type", "button", "class", "p-column-filter-menu-button p-link", "aria-haspopup", "true", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-column-filter-clear-button p-link", 3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "keydown.escape", 4, "ngIf"], [1, "p-fluid", 3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["type", "button", "aria-haspopup", "true", 1, "p-column-filter-menu-button", "p-link", 3, "ngClass", "click", "keydown"], ["icon", ""], [1, "pi", "pi-filter-icon", "pi-filter"], ["type", "button", 1, "p-column-filter-clear-button", "p-link", 3, "ngClass", "click"], [1, "pi", "pi-filter-slash"], [3, "ngClass", "keydown.escape"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-column-filter-row-items", 4, "ngIf", "ngIfElse"], ["menu", ""], [1, "p-column-filter-row-items"], ["class", "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter", 4, "ngFor", "ngForOf"], [1, "p-column-filter-separator"], [1, "p-column-filter-row-item", 3, "click", "keydown", "keydown.enter"], [1, "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter"], ["class", "p-column-filter-operator", 4, "ngIf"], [1, "p-column-filter-constraints"], ["class", "p-column-filter-constraint", 4, "ngFor", "ngForOf"], ["class", "p-column-filter-add-rule", 4, "ngIf"], [1, "p-column-filter-buttonbar"], ["type", "button", "pButton", "", "class", "p-button-outlined", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["type", "button", "pButton", "", "pRipple", "", 3, "label", "click", 4, "ngIf"], [1, "p-column-filter-operator"], ["styleClass", "p-column-filter-operator-dropdown", 3, "options", "ngModel", "ngModelChange"], [1, "p-column-filter-constraint"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["type", "button", "pButton", "", "icon", "pi pi-trash", "class", "p-column-filter-remove-button p-button-text p-button-danger p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange"], ["type", "button", "pButton", "", "icon", "pi pi-trash", "pRipple", "", 1, "p-column-filter-remove-button", "p-button-text", "p-button-danger", "p-button-sm", 3, "label", "click"], [1, "p-column-filter-add-rule"], ["type", "button", "pButton", "", "icon", "pi pi-plus", "pRipple", "", 1, "p-column-filter-add-button", "p-button-text", "p-button-sm", 3, "label", "click"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-outlined", 3, "label", "click"], ["type", "button", "pButton", "", "pRipple", "", 3, "label", "click"]], template: function ColumnFilter_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ColumnFilter_p_columnFilterFormElement_1_Template, 1, 14, "p-columnFilterFormElement", 1);
        ɵngcc0.ɵɵtemplate(2, ColumnFilter_button_2_Template, 3, 5, "button", 2);
        ɵngcc0.ɵɵtemplate(3, ColumnFilter_button_3_Template, 3, 3, "button", 3);
        ɵngcc0.ɵɵtemplate(4, ColumnFilter_div_4_Template, 6, 14, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c37, ctx.display === "row", ctx.display === "menu"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.display === "row");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMenuButton);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMenuButton && ctx.display === "row");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMenu && ctx.overlayVisible);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgIf, ColumnFilterFormElement, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, ɵngcc10.Dropdown, ɵngcc7.NgControlStatus, ɵngcc7.NgModel, ɵngcc11.ButtonDirective], encapsulation: 2, data: { animation: [
            animations.trigger('overlayAnimation', [
                animations.transition(':enter', [
                    animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animations.animate('.12s cubic-bezier(0, 0, 0.2, 1)')
                ]),
                animations.transition(':leave', [
                    animations.animate('.1s linear', animations.style({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColumnFilter, [{
        type: core.Component,
        args: [{
                selector: 'p-columnFilter',
                template: "\n        <div class=\"p-column-filter\" [ngClass]=\"{'p-column-filter-row': display === 'row', 'p-column-filter-menu': display === 'menu'}\">\n            <p-columnFilterFormElement *ngIf=\"display === 'row'\" class=\"p-fluid\" [type]=\"type\" [field]=\"field\" [filterConstraint]=\"dt.filters[field]\" [filterTemplate]=\"filterTemplate\" [placeholder]=\"placeholder\" [minFractionDigits]=\"minFractionDigits\" [maxFractionDigits]=\"maxFractionDigits\" [prefix]=\"prefix\" [suffix]=\"suffix\"\n                                    [locale]=\"locale\"  [localeMatcher]=\"localeMatcher\" [currency]=\"currency\" [currencyDisplay]=\"currencyDisplay\" [useGrouping]=\"useGrouping\"></p-columnFilterFormElement>\n            <button #icon *ngIf=\"showMenuButton\" type=\"button\" class=\"p-column-filter-menu-button p-link\" aria-haspopup=\"true\" [attr.aria-expanded]=\"overlayVisible\"\n                [ngClass]=\"{'p-column-filter-menu-button-open': overlayVisible, 'p-column-filter-menu-button-active': hasFilter()}\" \n                (click)=\"toggleMenu()\" (keydown)=\"onToggleButtonKeyDown($event)\"><span class=\"pi pi-filter-icon pi-filter\"></span></button>\n            <button #icon *ngIf=\"showMenuButton && display === 'row'\" [ngClass]=\"{'p-hidden-space': !hasRowFilter()}\" type=\"button\" class=\"p-column-filter-clear-button p-link\" (click)=\"clearFilter()\"><span class=\"pi pi-filter-slash\"></span></button>\n            <div *ngIf=\"showMenu && overlayVisible\" [ngClass]=\"{'p-column-filter-overlay p-component p-fluid': true, 'p-column-filter-overlay-menu': display === 'menu'}\" \n                [@overlayAnimation]=\"'visible'\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (keydown.escape)=\"onEscape()\">\n                <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: field}\"></ng-container>\n                <ul *ngIf=\"display === 'row'; else menu\" class=\"p-column-filter-row-items\">\n                    <li class=\"p-column-filter-row-item\" *ngFor=\"let matchMode of matchModes; let i = index;\" (click)=\"onRowMatchModeChange(matchMode.value)\" (keydown)=\"onRowMatchModeKeyDown($event)\" (keydown.enter)=\"this.onRowMatchModeChange(matchMode.value)\"\n                        [ngClass]=\"{'p-highlight': isRowMatchModeSelected(matchMode.value)}\" [attr.tabindex]=\"i === 0 ? '0' : null\">{{matchMode.label}}</li>\n                    <li class=\"p-column-filter-separator\"></li>\n                    <li class=\"p-column-filter-row-item\" (click)=\"onRowClearItemClick()\" (keydown)=\"onRowMatchModeKeyDown($event)\" (keydown.enter)=\"onRowClearItemClick()\">{{noFilterLabel}}</li>\n                </ul>\n                <ng-template #menu>\n                    <div class=\"p-column-filter-operator\" *ngIf=\"isShowOperator\">\n                        <p-dropdown [options]=\"operatorOptions\" [ngModel]=\"operator\" (ngModelChange)=\"onOperatorChange($event)\" styleClass=\"p-column-filter-operator-dropdown\"></p-dropdown>\n                    </div>\n                    <div class=\"p-column-filter-constraints\">\n                        <div *ngFor=\"let fieldConstraint of fieldConstraints; let i = index\" class=\"p-column-filter-constraint\">\n                            <p-dropdown  *ngIf=\"showMatchModes && matchModes\" [options]=\"matchModes\" [ngModel]=\"fieldConstraint.matchMode\" (ngModelChange)=\"onMenuMatchModeChange($event, fieldConstraint)\" styleClass=\"p-column-filter-matchmode-dropdown\"></p-dropdown>\n                            <p-columnFilterFormElement [type]=\"type\" [field]=\"field\" [filterConstraint]=\"fieldConstraint\" [filterTemplate]=\"filterTemplate\" [placeholder]=\"placeholder\"\n                            [minFractionDigits]=\"minFractionDigits\" [maxFractionDigits]=\"maxFractionDigits\" [prefix]=\"prefix\" [suffix]=\"suffix\"\n                            [locale]=\"locale\"  [localeMatcher]=\"localeMatcher\" [currency]=\"currency\" [currencyDisplay]=\"currencyDisplay\" [useGrouping]=\"useGrouping\"></p-columnFilterFormElement>\n                            <div>\n                                <button *ngIf=\"showRemoveIcon\" type=\"button\" pButton icon=\"pi pi-trash\" class=\"p-column-filter-remove-button p-button-text p-button-danger p-button-sm\" (click)=\"removeConstraint(fieldConstraint)\" pRipple [label]=\"removeRuleButtonLabel\"></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-column-filter-add-rule\" *ngIf=\"isShowAddConstraint\">\n                        <button type=\"button\" pButton [label]=\"addRuleButtonLabel\" icon=\"pi pi-plus\" class=\"p-column-filter-add-button p-button-text p-button-sm\" (click)=\"addConstraint()\" pRipple></button>\n                    </div>\n                    <div class=\"p-column-filter-buttonbar\">\n                        <button *ngIf=\"showClearButton\" type=\"button\" pButton class=\"p-button-outlined\" (click)=\"clearFilter()\" [label]=\"clearButtonLabel\" pRipple></button>\n                        <button *ngIf=\"showApplyButton\" type=\"button\" pButton (click)=\"applyFilter()\" [label]=\"applyButtonLabel\" pRipple></button>\n                    </div>\n                </ng-template>\n                <ng-container *ngTemplateOutlet=\"footerTemplate; context: {$implicit: field}\"></ng-container>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('overlayAnimation', [
                        animations.transition(':enter', [
                            animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animations.animate('.12s cubic-bezier(0, 0, 0.2, 1)')
                        ]),
                        animations.transition(':leave', [
                            animations.animate('.1s linear', animations.style({ opacity: 0 }))
                        ])
                    ])
                ],
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: Table }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.PrimeNGConfig }]; }, { type: [{
            type: core.Input
        }], display: [{
            type: core.Input
        }], showMenu: [{
            type: core.Input
        }], operator: [{
            type: core.Input
        }], showOperator: [{
            type: core.Input
        }], showClearButton: [{
            type: core.Input
        }], showApplyButton: [{
            type: core.Input
        }], showMatchModes: [{
            type: core.Input
        }], showAddButton: [{
            type: core.Input
        }], hideOnClear: [{
            type: core.Input
        }], maxConstraints: [{
            type: core.Input
        }], useGrouping: [{
            type: core.Input
        }], field: [{
            type: core.Input
        }], matchMode: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], matchModeOptions: [{
            type: core.Input
        }], minFractionDigits: [{
            type: core.Input
        }], maxFractionDigits: [{
            type: core.Input
        }], prefix: [{
            type: core.Input
        }], suffix: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], localeMatcher: [{
            type: core.Input
        }], currency: [{
            type: core.Input
        }], currencyDisplay: [{
            type: core.Input
        }], icon: [{
            type: core.ViewChild,
            args: ['icon']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return ColumnFilter;
    }());
    ColumnFilter.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: Table },
        { type: core.Renderer2 },
        { type: api.PrimeNGConfig }
    ]; };
    ColumnFilter.propDecorators = {
        field: [{ type: core.Input }],
        type: [{ type: core.Input }],
        display: [{ type: core.Input }],
        showMenu: [{ type: core.Input }],
        matchMode: [{ type: core.Input }],
        operator: [{ type: core.Input }],
        showOperator: [{ type: core.Input }],
        showClearButton: [{ type: core.Input }],
        showApplyButton: [{ type: core.Input }],
        showMatchModes: [{ type: core.Input }],
        showAddButton: [{ type: core.Input }],
        hideOnClear: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        matchModeOptions: [{ type: core.Input }],
        maxConstraints: [{ type: core.Input }],
        minFractionDigits: [{ type: core.Input }],
        maxFractionDigits: [{ type: core.Input }],
        prefix: [{ type: core.Input }],
        suffix: [{ type: core.Input }],
        locale: [{ type: core.Input }],
        localeMatcher: [{ type: core.Input }],
        currency: [{ type: core.Input }],
        currencyDisplay: [{ type: core.Input }],
        useGrouping: [{ type: core.Input }],
        icon: [{ type: core.ViewChild, args: ['icon',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
TableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TableModule });
TableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TableModule_Factory(t) { return new (t || TableModule)(); }, imports: [[common.CommonModule, paginator.PaginatorModule, inputtext.InputTextModule, dropdown.DropdownModule, scrolling.ScrollingModule, forms.FormsModule, button.ButtonModule, selectbutton.SelectButtonModule, calendar.CalendarModule, inputnumber.InputNumberModule, tristatecheckbox.TriStateCheckboxModule], ɵngcc1.SharedModule, ɵngcc4.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TableModule, { declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement], imports: [ɵngcc2.CommonModule, ɵngcc3.PaginatorModule, ɵngcc5.InputTextModule, ɵngcc10.DropdownModule, ɵngcc4.ScrollingModule, ɵngcc7.FormsModule, ɵngcc11.ButtonModule, ɵngcc12.SelectButtonModule, ɵngcc9.CalendarModule, ɵngcc6.InputNumberModule, ɵngcc8.TriStateCheckboxModule], exports: [Table, ɵngcc1.SharedModule, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ɵngcc4.ScrollingModule, ColumnFilter] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, paginator.PaginatorModule, inputtext.InputTextModule, dropdown.DropdownModule, scrolling.ScrollingModule, forms.FormsModule, button.ButtonModule, selectbutton.SelectButtonModule, calendar.CalendarModule, inputnumber.InputNumberModule, tristatecheckbox.TriStateCheckboxModule],
                exports: [Table, api.SharedModule, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon,
                    TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, scrolling.ScrollingModule, ColumnFilter],
                declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon,
                    TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement]
            }]
    }], function () { return []; }, null); })();
        return TableModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CancelEditableRow = CancelEditableRow;
    exports.CellEditor = CellEditor;
    exports.ColumnFilter = ColumnFilter;
    exports.ColumnFilterFormElement = ColumnFilterFormElement;
    exports.ContextMenuRow = ContextMenuRow;
    exports.EditableColumn = EditableColumn;
    exports.EditableRow = EditableRow;
    exports.InitEditableRow = InitEditableRow;
    exports.ReorderableColumn = ReorderableColumn;
    exports.ReorderableRow = ReorderableRow;
    exports.ReorderableRowHandle = ReorderableRowHandle;
    exports.ResizableColumn = ResizableColumn;
    exports.RowToggler = RowToggler;
    exports.SaveEditableRow = SaveEditableRow;
    exports.ScrollableView = ScrollableView;
    exports.SelectableRow = SelectableRow;
    exports.SelectableRowDblClick = SelectableRowDblClick;
    exports.SortIcon = SortIcon;
    exports.SortableColumn = SortableColumn;
    exports.Table = Table;
    exports.TableBody = TableBody;
    exports.TableCheckbox = TableCheckbox;
    exports.TableHeaderCheckbox = TableHeaderCheckbox;
    exports.TableModule = TableModule;
    exports.TableRadioButton = TableRadioButton;
    exports.TableService = TableService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-table.umd.js.map