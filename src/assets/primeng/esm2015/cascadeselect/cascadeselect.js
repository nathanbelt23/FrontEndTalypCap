import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ContentChildren, ElementRef, Output, EventEmitter, ViewChild, forwardRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { ObjectUtils } from 'primeng/utils';
import { DomHandler } from 'primeng/dom';
import { trigger, style, transition, animate } from '@angular/animations';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

function CascadeSelectSub_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function CascadeSelectSub_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CascadeSelectSub_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.optionTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, option_r1));
} }
function CascadeSelectSub_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.getOptionLabelToRender(option_r1));
} }
function CascadeSelectSub_ng_template_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 10);
} }
function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-cascadeSelectSub", 11);
    ɵngcc0.ɵɵlistener("onSelect", function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template_p_cascadeSelectSub_onSelect_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.onOptionSelect($event); })("onOptionGroupSelect", function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template_p_cascadeSelectSub_onOptionGroupSelect_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.onOptionGroupSelect(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("selectionPath", ctx_r7.selectionPath)("options", ctx_r7.getOptionGroupChildren(option_r1))("optionLabel", ctx_r7.optionLabel)("optionValue", ctx_r7.optionValue)("level", ctx_r7.level + 1)("optionGroupLabel", ctx_r7.optionGroupLabel)("optionGroupChildren", ctx_r7.optionGroupChildren)("parentActive", ctx_r7.isOptionActive(option_r1))("dirty", ctx_r7.dirty)("optionTemplate", ctx_r7.optionTemplate);
} }
function CascadeSelectSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵlistener("click", function CascadeSelectSub_ng_template_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const option_r1 = ctx.$implicit; const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onOptionClick($event, option_r1); })("keydown", function CascadeSelectSub_ng_template_1_Template_div_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const option_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onKeyDown($event, option_r1, i_r2); });
    ɵngcc0.ɵɵtemplate(2, CascadeSelectSub_ng_template_1_ng_container_2_Template, 2, 4, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(3, CascadeSelectSub_ng_template_1_ng_template_3_Template, 2, 1, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, CascadeSelectSub_ng_template_1_span_5_Template, 1, 0, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template, 1, 10, "p-cascadeSelectSub", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const _r4 = ɵngcc0.ɵɵreference(4);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.getItemClass(option_r1));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.optionTemplate)("ngIfElse", _r4);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isOptionGroup(option_r1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isOptionGroup(option_r1) && ctx_r0.isOptionActive(option_r1));
} }
const _c1 = function (a0) { return { "p-cascadeselect-panel-root": a0 }; };
const _c2 = ["focusInput"];
const _c3 = ["container"];
function CascadeSelect_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c4 = function (a0, a1) { return { $implicit: a0, placeholder: a1 }; };
function CascadeSelect_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CascadeSelect_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.valueTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c4, ctx_r2.value, ctx_r2.placeholder));
} }
function CascadeSelect_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.label(), " ");
} }
const _c5 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c6 = function (a1) { return { value: "visible", params: a1 }; };
function CascadeSelect_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function CascadeSelect_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onOverlayAnimationStart($event); })("@overlayAnimation.done", function CascadeSelect_div_11_Template_div_animation_overlayAnimation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onOverlayAnimationDone($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵelementStart(2, "p-cascadeSelectSub", 14);
    ɵngcc0.ɵɵlistener("onSelect", function CascadeSelect_div_11_Template_p_cascadeSelectSub_onSelect_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onOptionSelect($event); })("onGroupSelect", function CascadeSelect_div_11_Template_p_cascadeSelectSub_onGroupSelect_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onOptionGroupSelect($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(14, _c6, ɵngcc0.ɵɵpureFunction2(11, _c5, ctx_r5.showTransitionOptions, ctx_r5.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("options", ctx_r5.options)("selectionPath", ctx_r5.selectionPath)("optionLabel", ctx_r5.optionLabel)("optionValue", ctx_r5.optionValue)("level", 0)("optionTemplate", ctx_r5.optionTemplate)("optionGroupLabel", ctx_r5.optionGroupLabel)("optionGroupChildren", ctx_r5.optionGroupChildren)("dirty", ctx_r5.dirty)("root", true);
} }
export const CASCADESELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CascadeSelect),
    multi: true
};
export class CascadeSelectSub {
    constructor(el) {
        this.el = el;
        this.level = 0;
        this.onSelect = new EventEmitter();
        this.onGroupSelect = new EventEmitter();
        this.activeOption = null;
    }
    get parentActive() {
        return this._parentActive;
    }
    ;
    set parentActive(val) {
        if (!val) {
            this.activeOption = null;
        }
        this._parentActive = val;
    }
    ngOnInit() {
        if (this.selectionPath && this.options && !this.dirty) {
            for (let option of this.options) {
                if (this.selectionPath.includes(option)) {
                    this.activeOption = option;
                    break;
                }
            }
        }
        if (!this.root) {
            this.position();
        }
    }
    onOptionClick(event, option) {
        if (this.isOptionGroup(option)) {
            this.activeOption = (this.activeOption === option) ? null : option;
            this.onGroupSelect.emit({
                originalEvent: event,
                value: option
            });
        }
        else {
            this.onSelect.emit({
                originalEvent: event,
                value: this.getOptionValue(option)
            });
        }
    }
    onOptionSelect(event) {
        this.onSelect.emit(event);
    }
    onOptionGroupSelect(event) {
        this.onGroupSelect.emit(event);
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[this.level]);
    }
    isOptionGroup(option) {
        return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[this.level]);
    }
    getOptionLabelToRender(option) {
        return this.isOptionGroup(option) ? this.getOptionGroupLabel(option) : this.getOptionLabel(option);
    }
    getItemClass(option) {
        return {
            'p-cascadeselect-item': true,
            'p-cascadeselect-item-group': this.isOptionGroup(option),
            'p-cascadeselect-item-active p-highlight': this.isOptionActive(option)
        };
    }
    isOptionActive(option) {
        return this.activeOption === option;
    }
    onKeyDown(event, option, index) {
        let listItem = event.currentTarget.parentElement;
        switch (event.key) {
            case 'Down':
            case 'ArrowDown':
                var nextItem = this.el.nativeElement.children[0].children[index + 1];
                if (nextItem) {
                    nextItem.children[0].focus();
                }
                break;
            case 'Up':
            case 'ArrowUp':
                var prevItem = this.el.nativeElement.children[0].children[index - 1];
                if (prevItem) {
                    prevItem.children[0].focus();
                }
                break;
            case 'Right':
            case 'ArrowRight':
                if (this.isOptionGroup(option)) {
                    if (this.isOptionActive(option)) {
                        listItem.children[1].children[0].children[0].children[0].focus();
                    }
                    else {
                        this.activeOption = option;
                    }
                }
                break;
            case 'Left':
            case 'ArrowLeft':
                this.activeOption = null;
                var parentList = listItem.parentElement.parentElement.parentElement;
                if (parentList) {
                    parentList.children[0].focus();
                }
                break;
            case 'Enter':
                this.onOptionClick(event, option);
                break;
        }
        event.preventDefault();
    }
    position() {
        const parentItem = this.el.nativeElement.parentElement;
        const containerOffset = DomHandler.getOffset(parentItem);
        const viewport = DomHandler.getViewport();
        const sublistWidth = this.el.nativeElement.children[0].offsetParent ? this.el.nativeElement.children[0].offsetWidth : DomHandler.getHiddenElementOuterWidth(this.el.nativeElement.children[0]);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
        if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
            this.el.nativeElement.children[0].style.left = '-200%';
        }
    }
}
CascadeSelectSub.ɵfac = function CascadeSelectSub_Factory(t) { return new (t || CascadeSelectSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CascadeSelectSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CascadeSelectSub, selectors: [["p-cascadeSelectSub"]], inputs: { level: "level", parentActive: "parentActive", selectionPath: "selectionPath", options: "options", optionGroupChildren: "optionGroupChildren", optionTemplate: "optionTemplate", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", dirty: "dirty", root: "root" }, outputs: { onSelect: "onSelect", onGroupSelect: "onGroupSelect" }, decls: 2, vars: 4, consts: [["role", "listbox", "aria-orientation", "horizontal", 1, "p-cascadeselect-panel", "p-cascadeselect-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["role", "none", 3, "ngClass"], ["tabindex", "0", "pRipple", "", 1, "p-cascadeselect-item-content", 3, "click", "keydown"], [4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "p-cascadeselect-group-icon pi pi-angle-right", 4, "ngIf"], ["class", "p-cascadeselect-sublist", 3, "selectionPath", "options", "optionLabel", "optionValue", "level", "optionGroupLabel", "optionGroupChildren", "parentActive", "dirty", "optionTemplate", "onSelect", "onOptionGroupSelect", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-cascadeselect-item-text"], [1, "p-cascadeselect-group-icon", "pi", "pi-angle-right"], [1, "p-cascadeselect-sublist", 3, "selectionPath", "options", "optionLabel", "optionValue", "level", "optionGroupLabel", "optionGroupChildren", "parentActive", "dirty", "optionTemplate", "onSelect", "onOptionGroupSelect"]], template: function CascadeSelectSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, CascadeSelectSub_ng_template_1_Template, 7, 5, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx.root));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc2.Ripple, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, CascadeSelectSub], encapsulation: 2, changeDetection: 0 });
CascadeSelectSub.ctorParameters = () => [
    { type: ElementRef }
];
CascadeSelectSub.propDecorators = {
    selectionPath: [{ type: Input }],
    options: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    optionTemplate: [{ type: Input }],
    level: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    dirty: [{ type: Input }],
    root: [{ type: Input }],
    onSelect: [{ type: Output }],
    onGroupSelect: [{ type: Output }],
    parentActive: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CascadeSelectSub, [{
        type: Component,
        args: [{
                selector: 'p-cascadeSelectSub',
                template: `
        <ul class="p-cascadeselect-panel p-cascadeselect-items" [ngClass]="{'p-cascadeselect-panel-root': root}" role="listbox" aria-orientation="horizontal">
            <ng-template ngFor let-option [ngForOf]="options" let-i="index">
                <li [ngClass]="getItemClass(option)" role="none">
                    <div class="p-cascadeselect-item-content" (click)="onOptionClick($event, option)" tabindex="0" (keydown)="onKeyDown($event, option, i)" pRipple>
                        <ng-container *ngIf="optionTemplate;else defaultOptionTemplate">
                            <ng-container *ngTemplateOutlet="optionTemplate; context: {$implicit: option}"></ng-container>
                        </ng-container>
                        <ng-template #defaultOptionTemplate>
                            <span class="p-cascadeselect-item-text">{{getOptionLabelToRender(option)}}</span>
                        </ng-template>
                        <span class="p-cascadeselect-group-icon pi pi-angle-right" *ngIf="isOptionGroup(option)"></span>
                    </div>
                    <p-cascadeSelectSub *ngIf="isOptionGroup(option) && isOptionActive(option)" class="p-cascadeselect-sublist" [selectionPath]="selectionPath" [options]="getOptionGroupChildren(option)"
                        [optionLabel]="optionLabel" [optionValue]="optionValue" [level]="level + 1" (onSelect)="onOptionSelect($event)" (onOptionGroupSelect)="onOptionGroupSelect()"
                        [optionGroupLabel]="optionGroupLabel" [optionGroupChildren]="optionGroupChildren" [parentActive]="isOptionActive(option)" [dirty]="dirty" [optionTemplate]="optionTemplate">
                    </p-cascadeSelectSub>
                </li>
            </ng-template>
        </ul>
    `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { level: [{
            type: Input
        }], onSelect: [{
            type: Output
        }], onGroupSelect: [{
            type: Output
        }], parentActive: [{
            type: Input
        }], selectionPath: [{
            type: Input
        }], options: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], optionTemplate: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], dirty: [{
            type: Input
        }], root: [{
            type: Input
        }] }); })();
export class CascadeSelect {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.onChange = new EventEmitter();
        this.onGroupChange = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onBeforeShow = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.selectionPath = null;
        this.focused = false;
        this.filled = false;
        this.overlayVisible = false;
        this.dirty = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngOnInit() {
        this.updateSelectionPath();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'value':
                    this.valueTemplate = item.template;
                    break;
                case 'option':
                    this.optionTemplate = item.template;
                    break;
            }
        });
    }
    onOptionSelect(event) {
        this.value = event.value;
        this.updateSelectionPath();
        this.onModelChange(this.value);
        this.onChange.emit(event);
        this.hide();
        this.focusInputEl.nativeElement.focus();
    }
    onOptionGroupSelect(event) {
        this.dirty = true;
        this.onGroupChange.emit(event);
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    }
    getOptionGroupChildren(optionGroup, level) {
        return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    }
    isOptionGroup(option, level) {
        return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
    }
    updateSelectionPath() {
        let path;
        if (this.value != null && this.options) {
            for (let option of this.options) {
                path = this.findModelOptionInGroup(option, 0);
                if (path) {
                    break;
                }
            }
        }
        this.selectionPath = path;
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = !(this.selectionPath == null || this.selectionPath.length == 0);
    }
    findModelOptionInGroup(option, level) {
        if (this.isOptionGroup(option, level)) {
            let selectedOption;
            for (let childOption of this.getOptionGroupChildren(option, level)) {
                selectedOption = this.findModelOptionInGroup(childOption, level + 1);
                if (selectedOption) {
                    selectedOption.unshift(option);
                    return selectedOption;
                }
            }
        }
        else if ((ObjectUtils.equals(this.value, this.getOptionValue(option), this.dataKey))) {
            return [option];
        }
        return null;
    }
    show() {
        this.onBeforeShow.emit();
        this.overlayVisible = true;
    }
    hide() {
        this.onBeforeHide.emit();
        this.overlayVisible = false;
        this.cd.markForCheck();
    }
    onClick(event) {
        if (this.disabled) {
            return;
        }
        if (!this.overlayEl || !this.overlayEl || !this.overlayEl.contains(event.target)) {
            if (this.overlayVisible) {
                this.hide();
            }
            else {
                this.show();
            }
            this.focusInputEl.nativeElement.focus();
        }
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlayEl = event.element;
                this.onOverlayEnter();
                break;
        }
    }
    onOverlayAnimationDone(event) {
        switch (event.toState) {
            case 'void':
                this.onOverlayLeave();
                break;
        }
    }
    onOverlayEnter() {
        this.overlayEl.style.zIndex = String(DomHandler.generateZIndex());
        this.appendContainer();
        this.alignOverlay();
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
        this.onShow.emit();
    }
    onOverlayLeave() {
        this.unbindOutsideClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.onHide.emit();
        this.overlayEl = null;
        this.dirty = false;
    }
    writeValue(value) {
        this.value = value;
        this.updateSelectionPath();
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
    alignOverlay() {
        if (this.appendTo) {
            DomHandler.absolutePosition(this.overlayEl, this.containerEl.nativeElement);
            this.overlayEl.style.minWidth = DomHandler.getOuterWidth(this.containerEl.nativeElement) + 'px';
        }
        else {
            DomHandler.relativePosition(this.overlayEl, this.containerEl.nativeElement);
        }
    }
    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (this.overlayVisible && this.overlayEl && !this.containerEl.nativeElement.contains(event.target) && !this.overlayEl.contains(event.target)) {
                    this.hide();
                }
            };
            document.addEventListener('click', this.outsideClickListener);
        }
    }
    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerEl.nativeElement, () => {
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
    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.overlayVisible) {
                    this.hide();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }
    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlayEl);
            else
                document.getElementById(this.appendTo).appendChild(this.overlayEl);
        }
    }
    restoreAppend() {
        if (this.overlayEl && this.appendTo) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.overlayEl);
            else
                document.getElementById(this.appendTo).removeChild(this.overlayEl);
        }
    }
    label() {
        if (this.selectionPath)
            return this.getOptionLabel(this.selectionPath[this.selectionPath.length - 1]);
        else
            return this.placeholder || 'p-emptylabel';
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Down':
            case 'ArrowDown':
                if (this.overlayVisible) {
                    DomHandler.findSingle(this.overlayEl, '.p-cascadeselect-item').children[0].focus();
                }
                else if (event.altKey && this.options && this.options.length) {
                    this.show();
                }
                event.preventDefault();
                break;
            case 'Escape':
                if (this.overlayVisible) {
                    this.hide();
                    event.preventDefault();
                }
                break;
            case 'Tab':
                this.hide();
                break;
        }
    }
    containerClass() {
        return {
            'p-cascadeselect p-component p-inputwrapper': true,
            'p-disabled': this.disabled,
            'p-focus': this.focused
        };
    }
    labelClass() {
        return {
            'p-cascadeselect-label': true,
            'p-placeholder': this.label() === this.placeholder,
            'p-cascadeselect-label-empty': !this.value && (this.label() === 'p-emptylabel' || this.label().length === 0)
        };
    }
    ngOnDestroy() {
        this.restoreAppend();
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.overlayEl = null;
    }
}
CascadeSelect.ɵfac = function CascadeSelect_Factory(t) { return new (t || CascadeSelect)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
CascadeSelect.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CascadeSelect, selectors: [["p-cascadeSelect"]], contentQueries: function CascadeSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function CascadeSelect_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.focusInputEl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerEl = _t.first);
    } }, hostVars: 4, hostBindings: function CascadeSelect_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
    } }, inputs: { showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", value: "value", disabled: "disabled", styleClass: "styleClass", style: "style", options: "options", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", optionGroupChildren: "optionGroupChildren", placeholder: "placeholder", dataKey: "dataKey", inputId: "inputId", tabindex: "tabindex", ariaLabelledBy: "ariaLabelledBy", appendTo: "appendTo", rounded: "rounded" }, outputs: { onChange: "onChange", onGroupChange: "onGroupChange", onShow: "onShow", onHide: "onHide", onBeforeShow: "onBeforeShow", onBeforeHide: "onBeforeHide" }, features: [ɵngcc0.ɵɵProvidersFeature([CASCADESELECT_VALUE_ACCESSOR])], decls: 12, vars: 14, consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["focusInput", ""], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["defaultValueTemplate", ""], ["role", "button", "aria-haspopup", "listbox", 1, "p-cascadeselect-trigger"], [1, "p-cascadeselect-trigger-icon", "pi", "pi-chevron-down"], ["class", "p-cascadeselect-panel p-component", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-cascadeselect-panel", "p-component"], [1, "p-cascadeselect-items-wrapper"], [1, "p-cascadeselect-items", 3, "options", "selectionPath", "optionLabel", "optionValue", "level", "optionTemplate", "optionGroupLabel", "optionGroupChildren", "dirty", "root", "onSelect", "onGroupSelect"]], template: function CascadeSelect_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function CascadeSelect_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("focus", function CascadeSelect_Template_input_focus_3_listener() { return ctx.onFocus(); })("blur", function CascadeSelect_Template_input_blur_3_listener() { return ctx.onBlur(); })("keydown", function CascadeSelect_Template_input_keydown_3_listener($event) { return ctx.onKeyDown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "span", 5);
        ɵngcc0.ɵɵtemplate(6, CascadeSelect_ng_container_6_Template, 2, 5, "ng-container", 6);
        ɵngcc0.ɵɵtemplate(7, CascadeSelect_ng_template_7_Template, 1, 1, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 8);
        ɵngcc0.ɵɵelement(10, "span", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, CascadeSelect_div_11_Template, 3, 16, "div", 10);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = ɵngcc0.ɵɵreference(8);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.labelClass());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.valueTemplate)("ngIfElse", _r3);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.overlayVisible);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, CascadeSelectSub], styles: [".p-cascadeselect{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-cascadeselect-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-cascadeselect-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect .p-cascadeselect-panel{min-width:100%}.p-cascadeselect-panel{position:absolute}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{align-items:center;display:flex;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto}.p-cascadeselect-items{list-style-type:none;margin:0;padding:0}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{display:none;min-width:100%;position:absolute;z-index:1}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}"], encapsulation: 2, data: { animation: [
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
CascadeSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
CascadeSelect.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    options: [{ type: Input }],
    optionLabel: [{ type: Input }],
    optionValue: [{ type: Input }],
    optionGroupLabel: [{ type: Input }],
    optionGroupChildren: [{ type: Input }],
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    dataKey: [{ type: Input }],
    inputId: [{ type: Input }],
    tabindex: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    appendTo: [{ type: Input }],
    disabled: [{ type: Input }],
    rounded: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    focusInputEl: [{ type: ViewChild, args: ['focusInput',] }],
    containerEl: [{ type: ViewChild, args: ['container',] }],
    onChange: [{ type: Output }],
    onGroupChange: [{ type: Output }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    onBeforeShow: [{ type: Output }],
    onBeforeHide: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CascadeSelect, [{
        type: Component,
        args: [{
                selector: 'p-cascadeSelect',
                template: `
        <div #container [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input #focusInput type="text" [attr.id]="inputId" readonly [disabled]="disabled" (focus)="onFocus()" (blur)="onBlur()"  (keydown)="onKeyDown($event)" [attr.tabindex]="tabindex"
                    aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible" [attr.aria-labelledby]="ariaLabelledBy">
            </div>
            <span [ngClass]="labelClass()">
                <ng-container *ngIf="valueTemplate;else defaultValueTemplate">
                        <ng-container *ngTemplateOutlet="valueTemplate; context: {$implicit: value, placeholder: placeholder}"></ng-container>
                </ng-container>
                <ng-template #defaultValueTemplate>
                    {{label()}}
                </ng-template>
            </span>
            <div class="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible">
                <span class="p-cascadeselect-trigger-icon pi pi-chevron-down"></span>
            </div>
            <div class="p-cascadeselect-panel p-component" *ngIf="overlayVisible" 
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" (@overlayAnimation.done)="onOverlayAnimationDone($event)">
                <div class="p-cascadeselect-items-wrapper">
                    <p-cascadeSelectSub [options]="options" [selectionPath]="selectionPath" class="p-cascadeselect-items" 
                        [optionLabel]="optionLabel" [optionValue]="optionValue" [level]="0" [optionTemplate]="optionTemplate"
                        [optionGroupLabel]="optionGroupLabel" [optionGroupChildren]="optionGroupChildren" 
                        (onSelect)="onOptionSelect($event)" (onGroupSelect)="onOptionGroupSelect($event)" [dirty]="dirty" [root]="true">
                    </p-cascadeSelectSub>
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
                providers: [CASCADESELECT_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-cascadeselect{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;position:relative;user-select:none}.p-cascadeselect-trigger{align-items:center;display:flex;flex-shrink:0;justify-content:center}.p-cascadeselect-label{cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect .p-cascadeselect-panel{min-width:100%}.p-cascadeselect-panel{position:absolute}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{align-items:center;display:flex;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto}.p-cascadeselect-items{list-style-type:none;margin:0;padding:0}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{display:none;min-width:100%;position:absolute;z-index:1}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onGroupChange: [{
            type: Output
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], onBeforeShow: [{
            type: Output
        }], onBeforeHide: [{
            type: Output
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], options: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], optionValue: [{
            type: Input
        }], optionGroupLabel: [{
            type: Input
        }], optionGroupChildren: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], inputId: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], rounded: [{
            type: Input
        }], focusInputEl: [{
            type: ViewChild,
            args: ['focusInput']
        }], containerEl: [{
            type: ViewChild,
            args: ['container']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class CascadeSelectModule {
}
CascadeSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CascadeSelectModule });
CascadeSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CascadeSelectModule_Factory(t) { return new (t || CascadeSelectModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CascadeSelectModule, { declarations: function () { return [CascadeSelect, CascadeSelectSub]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [CascadeSelect, CascadeSelectSub, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CascadeSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [CascadeSelect, CascadeSelectSub, SharedModule],
                declarations: [CascadeSelect, CascadeSelectSub]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXNlbGVjdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Nhc2NhZGVzZWxlY3QvY2FzY2FkZXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQWUsZUFBZSxFQUFhLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBQzNRLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBZ0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQVE7QUFDakQsSUFBSSxPQUFPLEVBQUUsaUJBQWlCO0FBQzlCLElBQUksV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFDaEQs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RUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLGtCQUNuRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLGtCQUN4RCxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsY0FDbEQ7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgUmVuZGVyZXIyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlLCBQcmltZVRlbXBsYXRlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyB0cmlnZ2VyLHN0eWxlLHRyYW5zaXRpb24sYW5pbWF0ZSxBbmltYXRpb25FdmVudH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmlwcGxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xuXG5leHBvcnQgY29uc3QgQ0FTQ0FERVNFTEVDVF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENhc2NhZGVTZWxlY3QpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtY2FzY2FkZVNlbGVjdFN1YicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LXBhbmVsIHAtY2FzY2FkZXNlbGVjdC1pdGVtc1wiIFtuZ0NsYXNzXT1cInsncC1jYXNjYWRlc2VsZWN0LXBhbmVsLXJvb3QnOiByb290fVwiIHJvbGU9XCJsaXN0Ym94XCIgYXJpYS1vcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtb3B0aW9uIFtuZ0Zvck9mXT1cIm9wdGlvbnNcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cImdldEl0ZW1DbGFzcyhvcHRpb24pXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1pdGVtLWNvbnRlbnRcIiAoY2xpY2spPVwib25PcHRpb25DbGljaygkZXZlbnQsIG9wdGlvbilcIiB0YWJpbmRleD1cIjBcIiAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50LCBvcHRpb24sIGkpXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25UZW1wbGF0ZTtlbHNlIGRlZmF1bHRPcHRpb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJvcHRpb25UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogb3B0aW9ufVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRPcHRpb25UZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1pdGVtLXRleHRcIj57e2dldE9wdGlvbkxhYmVsVG9SZW5kZXIob3B0aW9uKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LWdyb3VwLWljb24gcGkgcGktYW5nbGUtcmlnaHRcIiAqbmdJZj1cImlzT3B0aW9uR3JvdXAob3B0aW9uKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwLWNhc2NhZGVTZWxlY3RTdWIgKm5nSWY9XCJpc09wdGlvbkdyb3VwKG9wdGlvbikgJiYgaXNPcHRpb25BY3RpdmUob3B0aW9uKVwiIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LXN1Ymxpc3RcIiBbc2VsZWN0aW9uUGF0aF09XCJzZWxlY3Rpb25QYXRoXCIgW29wdGlvbnNdPVwiZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25MYWJlbF09XCJvcHRpb25MYWJlbFwiIFtvcHRpb25WYWx1ZV09XCJvcHRpb25WYWx1ZVwiIFtsZXZlbF09XCJsZXZlbCArIDFcIiAob25TZWxlY3QpPVwib25PcHRpb25TZWxlY3QoJGV2ZW50KVwiIChvbk9wdGlvbkdyb3VwU2VsZWN0KT1cIm9uT3B0aW9uR3JvdXBTZWxlY3QoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uR3JvdXBMYWJlbF09XCJvcHRpb25Hcm91cExhYmVsXCIgW29wdGlvbkdyb3VwQ2hpbGRyZW5dPVwib3B0aW9uR3JvdXBDaGlsZHJlblwiIFtwYXJlbnRBY3RpdmVdPVwiaXNPcHRpb25BY3RpdmUob3B0aW9uKVwiIFtkaXJ0eV09XCJkaXJ0eVwiIFtvcHRpb25UZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtY2FzY2FkZVNlbGVjdFN1Yj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC91bD5cbiAgICBgLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZVNlbGVjdFN1YiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBzZWxlY3Rpb25QYXRoOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdO1xuXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBDaGlsZHJlbjogYW55W107XG5cbiAgICBASW5wdXQoKSBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBJbnB1dCgpIGxldmVsOiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG9wdGlvblZhbHVlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBvcHRpb25Hcm91cExhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkaXJ0eTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHJvb3Q6IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KCkgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uR3JvdXBTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KCkgZ2V0IHBhcmVudEFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudEFjdGl2ZTtcbiAgICB9O1xuICAgIHNldCBwYXJlbnRBY3RpdmUodmFsKSB7XG4gICAgICAgIGlmICghdmFsKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wYXJlbnRBY3RpdmUgPSB2YWw7XG4gICAgfVxuXG4gICAgYWN0aXZlT3B0aW9uOiBhbnkgPSBudWxsO1xuXG4gICAgX3BhcmVudEFjdGl2ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblBhdGggJiYgdGhpcy5vcHRpb25zICYmICF0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uUGF0aC5pbmNsdWRlcyhvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25PcHRpb25DbGljayhldmVudCwgb3B0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24gPSAodGhpcy5hY3RpdmVPcHRpb24gPT09IG9wdGlvbikgPyBudWxsIDogb3B0aW9uO1xuXG4gICAgICAgICAgICB0aGlzLm9uR3JvdXBTZWxlY3QuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25PcHRpb25TZWxlY3QoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbkdyb3VwU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25Hcm91cFNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25MYWJlbChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uTGFiZWwgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25MYWJlbCkgOiBvcHRpb247XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uVmFsdWUpIDogb3B0aW9uO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwTGFiZWwob3B0aW9uR3JvdXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uR3JvdXBMYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBMYWJlbCkgOiBudWxsO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0aW9uR3JvdXApIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlblt0aGlzLmxldmVsXSk7XG4gICAgfVxuXG4gICAgaXNPcHRpb25Hcm91cChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb24sIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlblt0aGlzLmxldmVsXSk7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uTGFiZWxUb1JlbmRlcihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcHRpb25Hcm91cChvcHRpb24pID8gdGhpcy5nZXRPcHRpb25Hcm91cExhYmVsKG9wdGlvbikgOiB0aGlzLmdldE9wdGlvbkxhYmVsKG9wdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0SXRlbUNsYXNzKG9wdGlvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtY2FzY2FkZXNlbGVjdC1pdGVtJzogdHJ1ZSwgXG4gICAgICAgICAgICAncC1jYXNjYWRlc2VsZWN0LWl0ZW0tZ3JvdXAnOiB0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSxcbiAgICAgICAgICAgICdwLWNhc2NhZGVzZWxlY3QtaXRlbS1hY3RpdmUgcC1oaWdobGlnaHQnOiB0aGlzLmlzT3B0aW9uQWN0aXZlKG9wdGlvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzT3B0aW9uQWN0aXZlKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVPcHRpb24gPT09IG9wdGlvbjtcbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQsIG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdEb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdmFyIG5leHRJdGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1VwJzpcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIHZhciBwcmV2SXRlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlbltpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2SXRlbS5jaGlsZHJlblswXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdSaWdodCc6XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvbkdyb3VwKG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25BY3RpdmUob3B0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0xlZnQnOlxuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50TGlzdCA9IGxpc3RJdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudExpc3QuY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25DbGljayhldmVudCwgb3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50SXRlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBjb250YWluZXJPZmZzZXQgPSBEb21IYW5kbGVyLmdldE9mZnNldChwYXJlbnRJdGVtKTtcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBEb21IYW5kbGVyLmdldFZpZXdwb3J0KCk7XG4gICAgICAgIGNvbnN0IHN1Ymxpc3RXaWR0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5vZmZzZXRQYXJlbnQgPyB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ub2Zmc2V0V2lkdGggOiBEb21IYW5kbGVyLmdldEhpZGRlbkVsZW1lbnRPdXRlcldpZHRoKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgICAgIGNvbnN0IGl0ZW1PdXRlcldpZHRoID0gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHBhcmVudEl0ZW0uY2hpbGRyZW5bMF0pO1xuXG4gICAgICAgIGlmICgocGFyc2VJbnQoY29udGFpbmVyT2Zmc2V0LmxlZnQsIDEwKSArIGl0ZW1PdXRlcldpZHRoICsgc3VibGlzdFdpZHRoKSA+ICh2aWV3cG9ydC53aWR0aCAtIERvbUhhbmRsZXIuY2FsY3VsYXRlU2Nyb2xsYmFyV2lkdGgoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5zdHlsZS5sZWZ0ID0gJy0yMDAlJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWNhc2NhZGVTZWxlY3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgI2NvbnRhaW5lciBbbmdDbGFzc109XCJjb250YWluZXJDbGFzcygpXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0ICNmb2N1c0lucHV0IHR5cGU9XCJ0ZXh0XCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIHJlYWRvbmx5IFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChmb2N1cyk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cImxhYmVsQ2xhc3MoKVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWx1ZVRlbXBsYXRlO2Vsc2UgZGVmYXVsdFZhbHVlVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2YWx1ZVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiB2YWx1ZSwgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFZhbHVlVGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIHt7bGFiZWwoKX19XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNhc2NhZGVzZWxlY3QtdHJpZ2dlclwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwib3ZlcmxheVZpc2libGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC10cmlnZ2VyLWljb24gcGkgcGktY2hldnJvbi1kb3duXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LXBhbmVsIHAtY29tcG9uZW50XCIgKm5nSWY9XCJvdmVybGF5VmlzaWJsZVwiIFxuICAgICAgICAgICAgICAgIFtAb3ZlcmxheUFuaW1hdGlvbl09XCJ7dmFsdWU6ICd2aXNpYmxlJywgcGFyYW1zOiB7c2hvd1RyYW5zaXRpb25QYXJhbXM6IHNob3dUcmFuc2l0aW9uT3B0aW9ucywgaGlkZVRyYW5zaXRpb25QYXJhbXM6IGhpZGVUcmFuc2l0aW9uT3B0aW9uc319XCIgKEBvdmVybGF5QW5pbWF0aW9uLnN0YXJ0KT1cIm9uT3ZlcmxheUFuaW1hdGlvblN0YXJ0KCRldmVudClcIiAoQG92ZXJsYXlBbmltYXRpb24uZG9uZSk9XCJvbk92ZXJsYXlBbmltYXRpb25Eb25lKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LWl0ZW1zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtY2FzY2FkZVNlbGVjdFN1YiBbb3B0aW9uc109XCJvcHRpb25zXCIgW3NlbGVjdGlvblBhdGhdPVwic2VsZWN0aW9uUGF0aFwiIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LWl0ZW1zXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwib3B0aW9uTGFiZWxcIiBbb3B0aW9uVmFsdWVdPVwib3B0aW9uVmFsdWVcIiBbbGV2ZWxdPVwiMFwiIFtvcHRpb25UZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uR3JvdXBMYWJlbF09XCJvcHRpb25Hcm91cExhYmVsXCIgW29wdGlvbkdyb3VwQ2hpbGRyZW5dPVwib3B0aW9uR3JvdXBDaGlsZHJlblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgKG9uU2VsZWN0KT1cIm9uT3B0aW9uU2VsZWN0KCRldmVudClcIiAob25Hcm91cFNlbGVjdCk9XCJvbk9wdGlvbkdyb3VwU2VsZWN0KCRldmVudClcIiBbZGlydHldPVwiZGlydHlcIiBbcm9vdF09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1jYXNjYWRlU2VsZWN0U3ViPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdvdmVybGF5QW5pbWF0aW9uJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZVkoMC44KSd9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCd7e3Nob3dUcmFuc2l0aW9uUGFyYW1zfX0nKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJ3t7aGlkZVRyYW5zaXRpb25QYXJhbXN9fScsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1maWxsZWRdJzogJ2ZpbGxlZCcsXG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZm9jdXNdJzogJ2ZvY3VzZWQgfHwgb3ZlcmxheVZpc2libGUnXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtDQVNDQURFU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2Nhc2NhZGVzZWxlY3QuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZVNlbGVjdCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBvcHRpb25zOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIG9wdGlvbkxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBvcHRpb25WYWx1ZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBMYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBDaGlsZHJlbjogYW55W107XG5cbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0YWJpbmRleDogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcHBlbmRUbzogYW55O1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSByb3VuZGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2hvd1RyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnLjEycyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSc7XG5cbiAgICBASW5wdXQoKSBoaWRlVHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMXMgbGluZWFyJztcblxuICAgIEBWaWV3Q2hpbGQoJ2ZvY3VzSW5wdXQnKSBmb2N1c0lucHV0RWw6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJFbDogRWxlbWVudFJlZjtcblxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Hcm91cENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25TaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQmVmb3JlU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25CZWZvcmVIaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIHNlbGVjdGlvblBhdGg6IGFueSA9IG51bGw7XG5cbiAgICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBmaWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG92ZXJsYXlWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBkaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdmFsdWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIG9wdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgb3V0c2lkZUNsaWNrTGlzdGVuZXI6IGFueTtcbiAgICBcbiAgICBzY3JvbGxIYW5kbGVyOiBhbnk7XG4gICAgXG4gICAgcmVzaXplTGlzdGVuZXI6IGFueTtcblxuICAgIG92ZXJsYXlFbDogYW55O1xuXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uUGF0aCgpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29wdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvblNlbGVjdChldmVudCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZXZlbnQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uUGF0aCgpO1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25PcHRpb25Hcm91cFNlbGVjdChldmVudCkge1xuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkdyb3VwQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkxhYmVsKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25MYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uLCB0aGlzLm9wdGlvbkxhYmVsKSA6IG9wdGlvbjtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25WYWx1ZShvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uVmFsdWUgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25WYWx1ZSkgOiBvcHRpb247XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb25Hcm91cCwgbGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbltsZXZlbF0pO1xuICAgIH1cblxuICAgIGlzT3B0aW9uR3JvdXAob3B0aW9uLCBsZXZlbCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbiwgdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuW2xldmVsXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0aW9uUGF0aCgpIHtcbiAgICAgICAgbGV0IHBhdGg7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9IG51bGwgJiYgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHRoaXMuZmluZE1vZGVsT3B0aW9uSW5Hcm91cChvcHRpb24sIDApO1xuICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uUGF0aCA9IHBhdGg7ICAgXG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGaWxsZWRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5maWxsZWQgPSAhKHRoaXMuc2VsZWN0aW9uUGF0aCA9PSBudWxsIHx8IHRoaXMuc2VsZWN0aW9uUGF0aC5sZW5ndGggPT0gMCk7XG4gICAgfVxuXG4gICAgZmluZE1vZGVsT3B0aW9uSW5Hcm91cChvcHRpb24sIGxldmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uLCBsZXZlbCkpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbjtcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkT3B0aW9uIG9mIHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb24sIGxldmVsKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kTW9kZWxPcHRpb25Jbkdyb3VwKGNoaWxkT3B0aW9uLCBsZXZlbCArIDEpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi51bnNoaWZ0KG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZE9wdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKE9iamVjdFV0aWxzLmVxdWFscyh0aGlzLnZhbHVlLCB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbiksIHRoaXMuZGF0YUtleSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gW29wdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMub25CZWZvcmVTaG93LmVtaXQoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5vbkJlZm9yZUhpZGUuZW1pdCgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlFbCB8fCAhdGhpcy5vdmVybGF5RWwgfHwgIXRoaXMub3ZlcmxheUVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk92ZXJsYXlBbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlFbCA9IGV2ZW50LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlFbnRlcigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk92ZXJsYXlBbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRvU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZvaWQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25PdmVybGF5TGVhdmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25PdmVybGF5RW50ZXIoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheUVsLnN0eWxlLnpJbmRleCA9IFN0cmluZyhEb21IYW5kbGVyLmdlbmVyYXRlWkluZGV4KCkpO1xuICAgICAgICB0aGlzLmFwcGVuZENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFsaWduT3ZlcmxheSgpO1xuICAgICAgICB0aGlzLmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmJpbmRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLm9uU2hvdy5lbWl0KCk7XG4gICAgfVxuXG4gICAgb25PdmVybGF5TGVhdmUoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMub25IaWRlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5RWwgPSBudWxsO1xuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSA6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uUGF0aCgpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBhbGlnbk92ZXJsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFic29sdXRlUG9zaXRpb24odGhpcy5vdmVybGF5RWwsIHRoaXMuY29udGFpbmVyRWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlFbC5zdHlsZS5taW5XaWR0aCA9IERvbUhhbmRsZXIuZ2V0T3V0ZXJXaWR0aCh0aGlzLmNvbnRhaW5lckVsLm5hdGl2ZUVsZW1lbnQpICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVsYXRpdmVQb3NpdGlvbih0aGlzLm92ZXJsYXlFbCwgdGhpcy5jb250YWluZXJFbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5vdmVybGF5RWwgJiYgIXRoaXMuY29udGFpbmVyRWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmICF0aGlzLm92ZXJsYXlFbC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBuZXcgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIodGhpcy5jb250YWluZXJFbC5uYXRpdmVFbGVtZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdW5iaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzaXplTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5yZXNpemVMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRDb250YWluZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyA9PT0gJ2JvZHknKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5RWwpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYXBwZW5kVG8pLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheUVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVBcHBlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlFbCAmJiB0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyA9PT0gJ2JvZHknKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5RWwpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYXBwZW5kVG8pLnJlbW92ZUNoaWxkKHRoaXMub3ZlcmxheUVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxhYmVsKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25QYXRoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3B0aW9uTGFiZWwodGhpcy5zZWxlY3Rpb25QYXRoW3RoaXMuc2VsZWN0aW9uUGF0aC5sZW5ndGggLSAxXSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyfHwncC1lbXB0eWxhYmVsJztcbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnRG93bic6XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLm92ZXJsYXlFbCwgJy5wLWNhc2NhZGVzZWxlY3QtaXRlbScpLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmFsdEtleSAmJiB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdUYWInOlxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250YWluZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLWNhc2NhZGVzZWxlY3QgcC1jb21wb25lbnQgcC1pbnB1dHdyYXBwZXInOiB0cnVlLFxuICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgJ3AtZm9jdXMnOiB0aGlzLmZvY3VzZWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBsYWJlbENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtY2FzY2FkZXNlbGVjdC1sYWJlbCc6IHRydWUsXG4gICAgICAgICAgICAncC1wbGFjZWhvbGRlcic6IHRoaXMubGFiZWwoKSA9PT0gdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICdwLWNhc2NhZGVzZWxlY3QtbGFiZWwtZW1wdHknOiAhdGhpcy52YWx1ZSAmJiAodGhpcy5sYWJlbCgpID09PSAncC1lbXB0eWxhYmVsJyB8fCB0aGlzLmxhYmVsKCkubGVuZ3RoID09PSAwKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJlc3RvcmVBcHBlbmQoKTtcbiAgICAgICAgdGhpcy51bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZFJlc2l6ZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdmVybGF5RWwgPSBudWxsO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGUsIFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW0Nhc2NhZGVTZWxlY3QsIENhc2NhZGVTZWxlY3RTdWIsIFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQ2FzY2FkZVNlbGVjdCwgQ2FzY2FkZVNlbGVjdFN1Yl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZVNlbGVjdE1vZHVsZSB7IH1cbiJdfQ==