import { NgModule, Component, ElementRef, Input, Output, EventEmitter, Inject, forwardRef, ContentChildren, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["pOrganizationChartNode", ""];
function OrganizationChartNode_tbody_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.node.label);
} }
function OrganizationChartNode_tbody_0_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function OrganizationChartNode_tbody_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, OrganizationChartNode_tbody_0_div_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.chart.getTemplateForNode(ctx_r2.node))("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r2.node));
} }
const _c2 = function (a0, a1) { return { "pi-chevron-down": a0, "pi-chevron-up": a1 }; };
function OrganizationChartNode_tbody_0_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 8);
    ɵngcc0.ɵɵlistener("click", function OrganizationChartNode_tbody_0_a_6_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.toggleNode($event, ctx_r8.node); })("keydown.enter", function OrganizationChartNode_tbody_0_a_6_Template_a_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.toggleNode($event, ctx_r10.node); });
    ɵngcc0.ɵɵelement(1, "i", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c2, ctx_r3.node.expanded, !ctx_r3.node.expanded));
} }
function OrganizationChartNode_tbody_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td");
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("colspan", ctx_r4.colspan);
} }
const _c3 = function (a0) { return { "p-organizationchart-line-top": a0 }; };
function OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 11);
    ɵngcc0.ɵɵtext(1, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "td", 12);
    ɵngcc0.ɵɵtext(3, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const first_r13 = ctx.first;
    const last_r14 = ctx.last;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c3, !first_r13));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c3, !last_r14));
} }
function OrganizationChartNode_tbody_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template, 4, 6, "ng-template", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.node.children);
} }
function OrganizationChartNode_tbody_0_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 13);
    ɵngcc0.ɵɵelement(1, "table", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r15 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("node", child_r15);
} }
const _c4 = function (a1, a2) { return { "p-organizationchart-node-content": true, "p-organizationchart-selectable-node": a1, "p-highlight": a2 }; };
function OrganizationChartNode_tbody_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tbody");
    ɵngcc0.ɵɵelementStart(1, "tr");
    ɵngcc0.ɵɵelementStart(2, "td");
    ɵngcc0.ɵɵelementStart(3, "div", 1);
    ɵngcc0.ɵɵlistener("click", function OrganizationChartNode_tbody_0_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.onNodeClick($event, ctx_r16.node); });
    ɵngcc0.ɵɵtemplate(4, OrganizationChartNode_tbody_0_div_4_Template, 2, 1, "div", 0);
    ɵngcc0.ɵɵtemplate(5, OrganizationChartNode_tbody_0_div_5_Template, 2, 4, "div", 0);
    ɵngcc0.ɵɵtemplate(6, OrganizationChartNode_tbody_0_a_6_Template, 2, 4, "a", 2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "tr", 3);
    ɵngcc0.ɵɵelementStart(8, "td");
    ɵngcc0.ɵɵelement(9, "div", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "tr", 3);
    ɵngcc0.ɵɵtemplate(11, OrganizationChartNode_tbody_0_ng_container_11_Template, 3, 1, "ng-container", 0);
    ɵngcc0.ɵɵtemplate(12, OrganizationChartNode_tbody_0_ng_container_12_Template, 2, 1, "ng-container", 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(13, "tr", 5);
    ɵngcc0.ɵɵtemplate(14, OrganizationChartNode_tbody_0_td_14_Template, 2, 1, "td", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵattribute("colspan", ctx_r0.colspan);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r0.node.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(17, _c4, ctx_r0.chart.selectionMode && ctx_r0.node.selectable !== false, ctx_r0.isSelected()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.chart.getTemplateForNode(ctx_r0.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.chart.getTemplateForNode(ctx_r0.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.leaf);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("colspan", ctx_r0.colspan);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.node.children && ctx_r0.node.children.length === 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.node.children && ctx_r0.node.children.length > 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.node.children);
} }
function OrganizationChart_table_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "table", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("node", ctx_r0.root);
} }
const _c5 = function (a1) { return { "p-organizationchart p-component": true, "p-organizationchart-preservespace": a1 }; };
export class OrganizationChartNode {
    constructor(chart, cd) {
        this.cd = cd;
        this.chart = chart;
        this.subscription = this.chart.selectionSource$.subscribe(() => {
            this.cd.markForCheck();
        });
    }
    get leaf() {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
    get colspan() {
        return (this.node.children && this.node.children.length) ? this.node.children.length * 2 : null;
    }
    onNodeClick(event, node) {
        this.chart.onNodeClick(event, node);
    }
    toggleNode(event, node) {
        node.expanded = !node.expanded;
        if (node.expanded)
            this.chart.onNodeExpand.emit({ originalEvent: event, node: this.node });
        else
            this.chart.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        event.preventDefault();
    }
    isSelected() {
        return this.chart.isSelected(this.node);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
OrganizationChartNode.ɵfac = function OrganizationChartNode_Factory(t) { return new (t || OrganizationChartNode)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => OrganizationChart)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
OrganizationChartNode.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OrganizationChartNode, selectors: [["", "pOrganizationChartNode", ""]], inputs: { node: "node", root: "root", first: "first", last: "last" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngClass", "click"], ["tabindex", "0", "class", "p-node-toggler", 3, "click", "keydown.enter", 4, "ngIf"], [1, "p-organizationchart-lines", 3, "ngClass"], [1, "p-organizationchart-line-down"], [1, "p-organizationchart-nodes", 3, "ngClass"], ["colspan", "2", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "p-node-toggler", 3, "click", "keydown.enter"], [1, "p-node-toggler-icon", "pi", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], [1, "p-organizationchart-line-left", 3, "ngClass"], [1, "p-organizationchart-line-right", 3, "ngClass"], ["colspan", "2"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "node"]], template: function OrganizationChartNode_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, OrganizationChartNode_tbody_0_Template, 15, 20, "tbody", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.node);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, OrganizationChartNode], styles: [".p-organizationchart-table{border-collapse:separate;border-spacing:0;margin:0 auto}.p-organizationchart-table>tbody>tr>td{padding:0 .75rem;text-align:center;vertical-align:top}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{-ms-user-select:none;-webkit-user-select:none;bottom:-.75rem;cursor:pointer;height:1.5rem;left:50%;margin-left:-.75rem;position:absolute;user-select:none;width:1.5rem;z-index:2}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{height:20px;margin:0 auto;width:1px}.p-organizationchart-line-left,.p-organizationchart-line-right{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{display:inherit;visibility:hidden}"], encapsulation: 2, data: { animation: [
            trigger('childState', [
                state('in', style({ opacity: 1 })),
                transition('void => *', [
                    style({ opacity: 0 }),
                    animate(150)
                ]),
                transition('* => void', [
                    animate(150, style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
OrganizationChartNode.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => OrganizationChart),] }] },
    { type: ChangeDetectorRef }
];
OrganizationChartNode.propDecorators = {
    node: [{ type: Input }],
    root: [{ type: Input }],
    first: [{ type: Input }],
    last: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OrganizationChartNode, [{
        type: Component,
        args: [{
                selector: '[pOrganizationChartNode]',
                template: `
        <tbody *ngIf="node">
            <tr>
                <td [attr.colspan]="colspan">
                    <div [class]="node.styleClass" [ngClass]="{'p-organizationchart-node-content': true, 'p-organizationchart-selectable-node': chart.selectionMode && node.selectable !== false,'p-highlight':isSelected()}"
                        (click)="onNodeClick($event,node)">
                        <div *ngIf="!chart.getTemplateForNode(node)">{{node.label}}</div>
                        <div *ngIf="chart.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="chart.getTemplateForNode(node); context: {$implicit: node}"></ng-container>
                        </div>
                        <a *ngIf="!leaf" tabindex="0" class="p-node-toggler" (click)="toggleNode($event, node)" (keydown.enter)="toggleNode($event, node)">
                            <i class="p-node-toggler-icon pi" [ngClass]="{'pi-chevron-down': node.expanded, 'pi-chevron-up': !node.expanded}"></i>
                        </a>
                    </div>
                </td>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-lines" [@childState]="'in'">
                <td [attr.colspan]="colspan">
                    <div class="p-organizationchart-line-down"></div>
                </td>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-lines" [@childState]="'in'">
                <ng-container *ngIf="node.children && node.children.length === 1">
                    <td [attr.colspan]="colspan">
                        <div class="p-organizationchart-line-down"></div>
                    </td>
                </ng-container>
                <ng-container *ngIf="node.children && node.children.length > 1">
                    <ng-template ngFor let-child [ngForOf]="node.children" let-first="first" let-last="last">
                        <td class="p-organizationchart-line-left" [ngClass]="{'p-organizationchart-line-top':!first}">&nbsp;</td>
                        <td class="p-organizationchart-line-right" [ngClass]="{'p-organizationchart-line-top':!last}">&nbsp;</td>
                    </ng-template>
                </ng-container>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-nodes" [@childState]="'in'">
                <td *ngFor="let child of node.children" colspan="2">
                    <table class="p-organizationchart-table" pOrganizationChartNode [node]="child"></table>
                </td>
            </tr>
        </tbody>
    `,
                animations: [
                    trigger('childState', [
                        state('in', style({ opacity: 1 })),
                        transition('void => *', [
                            style({ opacity: 0 }),
                            animate(150)
                        ]),
                        transition('* => void', [
                            animate(150, style({ opacity: 0 }))
                        ])
                    ])
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".p-organizationchart-table{border-collapse:separate;border-spacing:0;margin:0 auto}.p-organizationchart-table>tbody>tr>td{padding:0 .75rem;text-align:center;vertical-align:top}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{-ms-user-select:none;-webkit-user-select:none;bottom:-.75rem;cursor:pointer;height:1.5rem;left:50%;margin-left:-.75rem;position:absolute;user-select:none;width:1.5rem;z-index:2}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{height:20px;margin:0 auto;width:1px}.p-organizationchart-line-left,.p-organizationchart-line-right{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{display:inherit;visibility:hidden}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => OrganizationChart)]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { node: [{
            type: Input
        }], root: [{
            type: Input
        }], first: [{
            type: Input
        }], last: [{
            type: Input
        }] }); })();
export class OrganizationChart {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.preserveSpace = true;
        this.selectionChange = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
        this.onNodeExpand = new EventEmitter();
        this.onNodeCollapse = new EventEmitter();
        this.selectionSource = new Subject();
        this.selectionSource$ = this.selectionSource.asObservable();
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
        if (this.initialized)
            this.selectionSource.next();
    }
    get root() {
        return this.value && this.value.length ? this.value[0] : null;
    }
    ngAfterContentInit() {
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach((item) => {
            this.templateMap[item.getType()] = item.template;
        });
        this.initialized = true;
    }
    getTemplateForNode(node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    }
    onNodeClick(event, node) {
        let eventTarget = event.target;
        if (eventTarget.className && (eventTarget.className.indexOf('p-node-toggler') !== -1 || eventTarget.className.indexOf('p-node-toggler-icon') !== -1)) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            if (this.selectionMode === 'single') {
                if (selected) {
                    this.selection = null;
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = node;
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else if (this.selectionMode === 'multiple') {
                if (selected) {
                    this.selection = this.selection.filter((val, i) => i != index);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = [...this.selection || [], node];
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            this.selectionChange.emit(this.selection);
            this.selectionSource.next();
        }
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selectionMode && this.selection) {
            if (this.selectionMode === 'single') {
                index = (this.selection == node) ? 0 : -1;
            }
            else if (this.selectionMode === 'multiple') {
                for (let i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    }
    isSelected(node) {
        return this.findIndexInSelection(node) != -1;
    }
}
OrganizationChart.ɵfac = function OrganizationChart_Factory(t) { return new (t || OrganizationChart)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
OrganizationChart.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OrganizationChart, selectors: [["p-organizationChart"]], contentQueries: function OrganizationChart_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { preserveSpace: "preserveSpace", selection: "selection", value: "value", style: "style", styleClass: "styleClass", selectionMode: "selectionMode" }, outputs: { selectionChange: "selectionChange", onNodeSelect: "onNodeSelect", onNodeUnselect: "onNodeUnselect", onNodeExpand: "onNodeExpand", onNodeCollapse: "onNodeCollapse" }, decls: 2, vars: 7, consts: [[3, "ngStyle", "ngClass"], ["class", "p-organizationchart-table", "pOrganizationChartNode", "", 3, "node", 4, "ngIf"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "node"]], template: function OrganizationChart_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, OrganizationChart_table_1_Template, 1, 1, "table", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c5, ctx.preserveSpace));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.root);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, OrganizationChartNode], encapsulation: 2, changeDetection: 0 });
OrganizationChart.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
OrganizationChart.propDecorators = {
    value: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    selectionMode: [{ type: Input }],
    preserveSpace: [{ type: Input }],
    selection: [{ type: Input }],
    selectionChange: [{ type: Output }],
    onNodeSelect: [{ type: Output }],
    onNodeUnselect: [{ type: Output }],
    onNodeExpand: [{ type: Output }],
    onNodeCollapse: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OrganizationChart, [{
        type: Component,
        args: [{
                selector: 'p-organizationChart',
                template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="{'p-organizationchart p-component': true, 'p-organizationchart-preservespace': preserveSpace}">
            <table class="p-organizationchart-table" pOrganizationChartNode [node]="root" *ngIf="root"></table>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { preserveSpace: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], onNodeSelect: [{
            type: Output
        }], onNodeUnselect: [{
            type: Output
        }], onNodeExpand: [{
            type: Output
        }], onNodeCollapse: [{
            type: Output
        }], selection: [{
            type: Input
        }], value: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], selectionMode: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class OrganizationChartModule {
}
OrganizationChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: OrganizationChartModule });
OrganizationChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function OrganizationChartModule_Factory(t) { return new (t || OrganizationChartModule)(); }, imports: [[CommonModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OrganizationChartModule, { declarations: function () { return [OrganizationChart, OrganizationChartNode]; }, imports: function () { return [CommonModule]; }, exports: function () { return [OrganizationChart, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OrganizationChartModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [OrganizationChart, SharedModule],
                declarations: [OrganizationChart, OrganizationChartNode]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uY2hhcnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9vcmdhbml6YXRpb25jaGFydC9vcmdhbml6YXRpb25jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBa0IsWUFBWSxFQUN4RSxNQUFNLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBVyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuSixPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RDdDLE1BQU0sT0FBTyxxQkFBcUI7QUFBRyxJQWNqQyxZQUF5RCxLQUFLLEVBQVMsRUFBcUI7QUFDaEcsUUFEMkUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQUN6RixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQTBCLENBQUM7QUFDaEQsUUFBUSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxD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LEVBQUUsQ0FBQyxpQkFBaUIsRUFBQyxZQUFZLENBQUMsa0JBQ3pDLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFDLHFCQUFxQixDQUFDLGNBQzFEOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEVsZW1lbnRSZWYsSW5wdXQsT3V0cHV0LEFmdGVyQ29udGVudEluaXQsRXZlbnRFbWl0dGVyLFRlbXBsYXRlUmVmLFxuICAgICAgICBJbmplY3QsZm9yd2FyZFJlZixDb250ZW50Q2hpbGRyZW4sUXVlcnlMaXN0LENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RyaWdnZXIsc3RhdGUsc3R5bGUsdHJhbnNpdGlvbixhbmltYXRlfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7UHJpbWVUZW1wbGF0ZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW3BPcmdhbml6YXRpb25DaGFydE5vZGVdJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dGJvZHkgKm5nSWY9XCJub2RlXCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sc3BhblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzc109XCJub2RlLnN0eWxlQ2xhc3NcIiBbbmdDbGFzc109XCJ7J3Atb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50JzogdHJ1ZSwgJ3Atb3JnYW5pemF0aW9uY2hhcnQtc2VsZWN0YWJsZS1ub2RlJzogY2hhcnQuc2VsZWN0aW9uTW9kZSAmJiBub2RlLnNlbGVjdGFibGUgIT09IGZhbHNlLCdwLWhpZ2hsaWdodCc6aXNTZWxlY3RlZCgpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Ob2RlQ2xpY2soJGV2ZW50LG5vZGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWNoYXJ0LmdldFRlbXBsYXRlRm9yTm9kZShub2RlKVwiPnt7bm9kZS5sYWJlbH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2hhcnQuZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNoYXJ0LmdldFRlbXBsYXRlRm9yTm9kZShub2RlKTsgY29udGV4dDogeyRpbXBsaWNpdDogbm9kZX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhbGVhZlwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicC1ub2RlLXRvZ2dsZXJcIiAoY2xpY2spPVwidG9nZ2xlTm9kZSgkZXZlbnQsIG5vZGUpXCIgKGtleWRvd24uZW50ZXIpPVwidG9nZ2xlTm9kZSgkZXZlbnQsIG5vZGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwLW5vZGUtdG9nZ2xlci1pY29uIHBpXCIgW25nQ2xhc3NdPVwieydwaS1jaGV2cm9uLWRvd24nOiBub2RlLmV4cGFuZGVkLCAncGktY2hldnJvbi11cCc6ICFub2RlLmV4cGFuZGVkfVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgW25nQ2xhc3NdPVwiIWxlYWYmJm5vZGUuZXhwYW5kZWQgPyAncC1vcmdhbml6YXRpb25jaGFydC1ub2RlLXZpc2libGUnIDogJ3Atb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1oaWRkZW4nXCIgY2xhc3M9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmVzXCIgW0BjaGlsZFN0YXRlXT1cIidpbidcIj5cbiAgICAgICAgICAgICAgICA8dGQgW2F0dHIuY29sc3Bhbl09XCJjb2xzcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtZG93blwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIFtuZ0NsYXNzXT1cIiFsZWFmJiZub2RlLmV4cGFuZGVkID8gJ3Atb3JnYW5pemF0aW9uY2hhcnQtbm9kZS12aXNpYmxlJyA6ICdwLW9yZ2FuaXphdGlvbmNoYXJ0LW5vZGUtaGlkZGVuJ1wiIGNsYXNzPVwicC1vcmdhbml6YXRpb25jaGFydC1saW5lc1wiIFtAY2hpbGRTdGF0ZV09XCInaW4nXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sc3BhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtb3JnYW5pemF0aW9uY2hhcnQtbGluZS1kb3duXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtY2hpbGQgW25nRm9yT2ZdPVwibm9kZS5jaGlsZHJlblwiIGxldC1maXJzdD1cImZpcnN0XCIgbGV0LWxhc3Q9XCJsYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtbGVmdFwiIFtuZ0NsYXNzXT1cInsncC1vcmdhbml6YXRpb25jaGFydC1saW5lLXRvcCc6IWZpcnN0fVwiPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtcmlnaHRcIiBbbmdDbGFzc109XCJ7J3Atb3JnYW5pemF0aW9uY2hhcnQtbGluZS10b3AnOiFsYXN0fVwiPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIFtuZ0NsYXNzXT1cIiFsZWFmJiZub2RlLmV4cGFuZGVkID8gJ3Atb3JnYW5pemF0aW9uY2hhcnQtbm9kZS12aXNpYmxlJyA6ICdwLW9yZ2FuaXphdGlvbmNoYXJ0LW5vZGUtaGlkZGVuJ1wiIGNsYXNzPVwicC1vcmdhbml6YXRpb25jaGFydC1ub2Rlc1wiIFtAY2hpbGRTdGF0ZV09XCInaW4nXCI+XG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuXCIgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwicC1vcmdhbml6YXRpb25jaGFydC10YWJsZVwiIHBPcmdhbml6YXRpb25DaGFydE5vZGUgW25vZGVdPVwiY2hpbGRcIj48L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdjaGlsZFN0YXRlJywgW1xuICAgICAgICAgICAgc3RhdGUoJ2luJywgc3R5bGUoe29wYWNpdHk6IDF9KSksXG4gICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMH0pLFxuICAgICAgICAgICAgIGFuaW1hdGUoMTUwKVxuICAgICAgICAgICBdKSxcbiAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7b3BhY2l0eTowfSkpXG4gICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHN0eWxlVXJsczogWycuL29yZ2FuaXphdGlvbmNoYXJ0LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbkNoYXJ0Tm9kZSBpbXBsZW1lbnRzIE9uRGVzdHJveXtcblxuICAgIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xuICAgICAgICBcbiAgICBASW5wdXQoKSByb290OiBib29sZWFuO1xuICAgIFxuICAgIEBJbnB1dCgpIGZpcnN0OiBib29sZWFuO1xuICAgIFxuICAgIEBJbnB1dCgpIGxhc3Q6IGJvb2xlYW47XG5cbiAgICBjaGFydDogT3JnYW5pemF0aW9uQ2hhcnQ7XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE9yZ2FuaXphdGlvbkNoYXJ0KSkgY2hhcnQsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0IGFzIE9yZ2FuaXphdGlvbkNoYXJ0O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2hhcnQuc2VsZWN0aW9uU291cmNlJC5zdWJzY3JpYmUoKCkgPT57XG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICBnZXQgbGVhZigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5sZWFmID09IGZhbHNlID8gZmFsc2UgOiAhKHRoaXMubm9kZS5jaGlsZHJlbiYmdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBjb2xzcGFuKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMubm9kZS5jaGlsZHJlbiAmJiB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoKSA/IHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggKiAyOiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBvbk5vZGVDbGljayhldmVudDogRXZlbnQsIG5vZGU6IFRyZWVOb2RlKSB7XG4gICAgICAgIHRoaXMuY2hhcnQub25Ob2RlQ2xpY2soZXZlbnQsIG5vZGUpXG4gICAgfVxuICAgIFxuICAgIHRvZ2dsZU5vZGUoZXZlbnQ6IEV2ZW50LCBub2RlOiBUcmVlTm9kZSkge1xuICAgICAgICBub2RlLmV4cGFuZGVkID0gIW5vZGUuZXhwYW5kZWQ7XG4gICAgICAgIGlmIChub2RlLmV4cGFuZGVkKVxuICAgICAgICAgICAgdGhpcy5jaGFydC5vbk5vZGVFeHBhbmQuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IHRoaXMubm9kZX0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmNoYXJ0Lm9uTm9kZUNvbGxhcHNlLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBub2RlOiB0aGlzLm5vZGV9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBcbiAgICBpc1NlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFydC5pc1NlbGVjdGVkKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atb3JnYW5pemF0aW9uQ2hhcnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ0NsYXNzXT1cInsncC1vcmdhbml6YXRpb25jaGFydCBwLWNvbXBvbmVudCc6IHRydWUsICdwLW9yZ2FuaXphdGlvbmNoYXJ0LXByZXNlcnZlc3BhY2UnOiBwcmVzZXJ2ZVNwYWNlfVwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwicC1vcmdhbml6YXRpb25jaGFydC10YWJsZVwiIHBPcmdhbml6YXRpb25DaGFydE5vZGUgW25vZGVdPVwicm9vdFwiICpuZ0lmPVwicm9vdFwiPjwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPcmdhbml6YXRpb25DaGFydCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgICAgICAgICAgXG4gICAgQElucHV0KCkgdmFsdWU6IFRyZWVOb2RlW107ICAgICAgICAgICAgXG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIHNlbGVjdGlvbk1vZGU6IHN0cmluZztcbiAgICBcbiAgICBASW5wdXQoKSBwcmVzZXJ2ZVNwYWNlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBcbiAgICBASW5wdXQoKSAgZ2V0IHNlbGVjdGlvbigpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHNldCBzZWxlY3Rpb24odmFsOmFueSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB2YWw7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZClcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLm5leHQoKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25Ob2RlU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25Ob2RlVW5zZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uTm9kZUV4cGFuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Ob2RlQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBcbiAgICBwdWJsaWMgdGVtcGxhdGVNYXA6IGFueTtcblxuICAgIHByaXZhdGUgc2VsZWN0aW9uU291cmNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgX3NlbGVjdGlvbjogYW55O1xuXG4gICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgICBzZWxlY3Rpb25Tb3VyY2UkID0gdGhpcy5zZWxlY3Rpb25Tb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgY2Q6Q2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG4gICAgXG4gICAgZ2V0IHJvb3QoKTogVHJlZU5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA/IHRoaXMudmFsdWVbMF0gOiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVNYXAgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZU1hcFtpdGVtLmdldFR5cGUoKV0gPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGU6IFRyZWVOb2RlKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlTWFwKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA/IHRoaXMudGVtcGxhdGVNYXBbbm9kZS50eXBlXSA6IHRoaXMudGVtcGxhdGVNYXBbJ2RlZmF1bHQnXTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIG9uTm9kZUNsaWNrKGV2ZW50OiBFdmVudCwgbm9kZTogVHJlZU5vZGUpIHtcbiAgICAgICAgbGV0IGV2ZW50VGFyZ2V0ID0gKDxFbGVtZW50PiBldmVudC50YXJnZXQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTmFtZSAmJiAoZXZlbnRUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3Atbm9kZS10b2dnbGVyJykgIT09IC0xIHx8wqBldmVudFRhcmdldC5jbGFzc05hbWUuaW5kZXhPZigncC1ub2RlLXRvZ2dsZXItaWNvbicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnNlbGVjdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gKGluZGV4ID49IDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlVW5zZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5maWx0ZXIoKHZhbCxpKSA9PiBpIT1pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlVW5zZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWy4uLnRoaXMuc2VsZWN0aW9ufHxbXSxub2RlXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UubmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGU6IFRyZWVOb2RlKSB7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSAmJiB0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9ICh0aGlzLnNlbGVjdGlvbiA9PSBub2RlKSA/IDAgOiAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpICA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbltpXSA9PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgXG4gICAgaXNTZWxlY3RlZChub2RlOiBUcmVlTm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kSW5kZXhJblNlbGVjdGlvbihub2RlKSAhPSAtMTsgICAgICAgICBcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW09yZ2FuaXphdGlvbkNoYXJ0LFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbT3JnYW5pemF0aW9uQ2hhcnQsT3JnYW5pemF0aW9uQ2hhcnROb2RlXVxufSlcbmV4cG9ydCBjbGFzcyBPcmdhbml6YXRpb25DaGFydE1vZHVsZSB7IH0iXX0=