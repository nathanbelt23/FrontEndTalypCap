import { NgModule, Directive, Component, ElementRef, EventEmitter, Output, Input, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { PrimeTemplate } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/ripple';
import * as ɵngcc2 from '@angular/common';

function Button_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a1, a2, a3, a4) { return { "p-button-icon": true, "p-button-icon-left": a1, "p-button-icon-right": a2, "p-button-icon-top": a3, "p-button-icon-bottom": a4 }; };
function Button_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.loading ? "p-button-loading-icon " + ctx_r1.loadingIcon : ctx_r1.icon);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c0, ctx_r1.iconPos === "left" && ctx_r1.label, ctx_r1.iconPos === "right" && ctx_r1.label, ctx_r1.iconPos === "top" && ctx_r1.label, ctx_r1.iconPos === "bottom" && ctx_r1.label));
    ɵngcc0.ɵɵattribute("aria-hidden", true);
} }
function Button_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("aria-hidden", ctx_r2.icon && !ctx_r2.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.label || "\u00A0");
} }
function Button_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r3.badgeClass);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.badgeStyleClass());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.badge);
} }
const _c1 = function (a1, a2, a3, a4, a5) { return { "p-button p-component": true, "p-button-icon-only": a1, "p-button-vertical": a2, "p-disabled": a3, "p-button-loading": a4, "p-button-loading-label-only": a5 }; };
const _c2 = ["*"];
export class ButtonDirective {
    constructor(el) {
        this.el = el;
        this.iconPos = 'left';
        this.loadingIcon = "pi pi-spinner pi-spin";
        this._loading = false;
    }
    ngAfterViewInit() {
        this._initialStyleClass = this.el.nativeElement.className;
        DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            this.createIconEl();
        }
        let labelElement = document.createElement("span");
        if (this.icon && !this.label) {
            labelElement.setAttribute('aria-hidden', 'true');
        }
        labelElement.className = 'p-button-label';
        if (this.label)
            labelElement.appendChild(document.createTextNode(this.label));
        else
            labelElement.innerHTML = '&nbsp;';
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    }
    getStyleClass() {
        let styleClass = 'p-button p-component';
        if (this.icon && !this.label) {
            styleClass = styleClass + ' p-button-icon-only';
        }
        if (this.loading) {
            styleClass = styleClass + ' p-disabled p-button-loading';
            if (!this.icon && this.label)
                styleClass = styleClass + ' p-button-loading-label-only';
        }
        return styleClass;
    }
    setStyleClass() {
        let styleClass = this.getStyleClass();
        this.el.nativeElement.className = styleClass + ' ' + this._initialStyleClass;
    }
    createIconEl() {
        let iconElement = document.createElement("span");
        iconElement.className = 'p-button-icon';
        iconElement.setAttribute("aria-hidden", "true");
        let iconPosClass = this.label ? 'p-button-icon-' + this.iconPos : null;
        if (iconPosClass) {
            DomHandler.addClass(iconElement, iconPosClass);
        }
        DomHandler.addMultipleClasses(iconElement, this.getIconClass());
        let labelEl = DomHandler.findSingle(this.el.nativeElement, '.p-button-label');
        if (labelEl)
            this.el.nativeElement.insertBefore(iconElement, labelEl);
        else
            this.el.nativeElement.appendChild(iconElement);
    }
    getIconClass() {
        return this.loading ? 'p-button-loading-icon ' + this.loadingIcon : this._icon;
    }
    setIconClass() {
        let iconElement = DomHandler.findSingle(this.el.nativeElement, '.p-button-icon');
        if (iconElement) {
            if (this.iconPos)
                iconElement.className = 'p-button-icon p-button-icon-' + this.iconPos + ' ' + this.getIconClass();
            else
                iconElement.className = 'p-button-icon ' + this.getIconClass();
        }
        else {
            this.createIconEl();
        }
    }
    removeIconElement() {
        let iconElement = DomHandler.findSingle(this.el.nativeElement, '.p-button-icon');
        this.el.nativeElement.removeChild(iconElement);
    }
    get label() {
        return this._label;
    }
    set label(val) {
        this._label = val;
        if (this.initialized) {
            DomHandler.findSingle(this.el.nativeElement, '.p-button-label').textContent = this._label || '&nbsp;';
            this.setStyleClass();
        }
    }
    get icon() {
        return this._icon;
    }
    set icon(val) {
        this._icon = val;
        if (this.initialized) {
            this.setIconClass();
            this.setStyleClass();
        }
    }
    get loading() {
        return this._loading;
    }
    set loading(val) {
        this._loading = val;
        if (this.initialized) {
            if (this.loading || this.icon)
                this.setIconClass();
            else
                this.removeIconElement();
            this.setStyleClass();
        }
    }
    ngOnDestroy() {
        this.initialized = false;
    }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ButtonDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ButtonDirective, selectors: [["", "pButton", ""]], inputs: { iconPos: "iconPos", loadingIcon: "loadingIcon", label: "label", icon: "icon", loading: "loading" } });
ButtonDirective.ctorParameters = () => [
    { type: ElementRef }
];
ButtonDirective.propDecorators = {
    iconPos: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    label: [{ type: Input }],
    icon: [{ type: Input }],
    loading: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[pButton]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { iconPos: [{
            type: Input
        }], loadingIcon: [{
            type: Input
        }], label: [{
            type: Input
        }], icon: [{
            type: Input
        }], loading: [{
            type: Input
        }] }); })();
export class Button {
    constructor() {
        this.type = "button";
        this.iconPos = 'left';
        this.loading = false;
        this.loadingIcon = "pi pi-spinner pi-spin";
        this.onClick = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    badgeStyleClass() {
        return {
            'p-badge p-component': true,
            'p-badge-no-gutter': this.badge && String(this.badge).length === 1
        };
    }
}
Button.ɵfac = function Button_Factory(t) { return new (t || Button)(); };
Button.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Button, selectors: [["p-button"]], contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { type: "type", iconPos: "iconPos", loading: "loading", loadingIcon: "loadingIcon", icon: "icon", badge: "badge", label: "label", disabled: "disabled", style: "style", styleClass: "styleClass", badgeClass: "badgeClass" }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, ngContentSelectors: _c2, decls: 6, vars: 16, consts: [["pRipple", "", 3, "ngStyle", "disabled", "ngClass", "click", "focus", "blur"], [4, "ngTemplateOutlet"], [3, "ngClass", "class", 4, "ngIf"], ["class", "p-button-label", 4, "ngIf"], [3, "ngClass"], [1, "p-button-label"]], template: function Button_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function Button_Template_button_click_0_listener($event) { return ctx.onClick.emit($event); })("focus", function Button_Template_button_focus_0_listener($event) { return ctx.onFocus.emit($event); })("blur", function Button_Template_button_blur_0_listener($event) { return ctx.onBlur.emit($event); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(3, Button_span_3_Template, 1, 9, "span", 2);
        ɵngcc0.ɵɵtemplate(4, Button_span_4_Template, 2, 2, "span", 3);
        ɵngcc0.ɵɵtemplate(5, Button_span_5_Template, 2, 4, "span", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("disabled", ctx.disabled || ctx.loading)("ngClass", ɵngcc0.ɵɵpureFunction5(10, _c1, ctx.icon && !ctx.label, (ctx.iconPos === "top" || ctx.iconPos === "bottom") && ctx.label, ctx.disabled || ctx.loading, ctx.loading, ctx.loading && !ctx.icon && ctx.label));
        ɵngcc0.ɵɵattribute("type", ctx.type);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.contentTemplate && (ctx.icon || ctx.loading));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.contentTemplate && ctx.badge);
    } }, directives: [ɵngcc1.Ripple, ɵngcc2.NgStyle, ɵngcc2.NgClass, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgIf], encapsulation: 2, changeDetection: 0 });
Button.propDecorators = {
    type: [{ type: Input }],
    iconPos: [{ type: Input }],
    icon: [{ type: Input }],
    badge: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    loading: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    badgeClass: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    onClick: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Button, [{
        type: Component,
        args: [{
                selector: 'p-button',
                template: `
        <button [attr.type]="type" [class]="styleClass" [ngStyle]="style" [disabled]="disabled || loading"
            [ngClass]="{'p-button p-component':true,
                        'p-button-icon-only': (icon && !label),
                        'p-button-vertical': (iconPos === 'top' || iconPos === 'bottom') && label,
                        'p-disabled': this.disabled || this.loading,
                        'p-button-loading': this.loading,
                        'p-button-loading-label-only': this.loading && !this.icon && this.label}"
                        (click)="onClick.emit($event)" (focus)="onFocus.emit($event)" (blur)="onBlur.emit($event)" pRipple>
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            <span [ngClass]="{'p-button-icon': true,
                        'p-button-icon-left': iconPos === 'left' && label,
                        'p-button-icon-right': iconPos === 'right' && label,
                        'p-button-icon-top': iconPos === 'top' && label,
                        'p-button-icon-bottom': iconPos === 'bottom' && label}"
                        [class]="loading ? 'p-button-loading-icon ' + loadingIcon : icon" *ngIf="!contentTemplate && (icon||loading)" [attr.aria-hidden]="true"></span>
            <span class="p-button-label" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate">{{label||'&nbsp;'}}</span>
            <span [ngClass]="badgeStyleClass()" [class]="badgeClass" *ngIf="!contentTemplate && badge">{{badge}}</span>
        </button>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], iconPos: [{
            type: Input
        }], loading: [{
            type: Input
        }], loadingIcon: [{
            type: Input
        }], onClick: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], icon: [{
            type: Input
        }], badge: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], badgeClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class ButtonModule {
}
ButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[CommonModule, RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [ButtonDirective, Button]; }, imports: function () { return [CommonModule, RippleModule]; }, exports: function () { return [ButtonDirective, Button]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule],
                exports: [ButtonDirective, Button],
                declarations: [ButtonDirective, Button]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBZSxNQUFNLEVBQVcsS0FBSyxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBMkMsTUFBTSxlQUFlLENBQUM7QUFDOU4sT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUMsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQWdCM0IsWUFBbUIsRUFBYztBQUFJLFFBQWxCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQWR6QixZQUFPLEdBQXdDLE1BQU0sQ0FBQztBQUNuRSxRQUNhLGdCQUFXLEdBQVcsdUJBQXVCLENBQUM7QUFDM0QsUUFLVyxhQUFRLEdBQVksS0FBSyxDQUFDO0FBQ3JDLElBS3dDLENBQUM7QUFDekMsSUFDSSxlQUFlO0FBQ25CLFFBQVEsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztBQUNsRSxRQUFRLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUNuRixRQUNRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUN2QixZQUFZLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztB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b2R1bGUsRGlyZWN0aXZlLENvbXBvbmVudCxFbGVtZW50UmVmLEV2ZW50RW1pdHRlcixBZnRlclZpZXdJbml0LE91dHB1dCxPbkRlc3Ryb3ksSW5wdXQsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFRlbXBsYXRlUmVmLCBRdWVyeUxpc3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEb21IYW5kbGVyfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7UmlwcGxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7IFxuaW1wb3J0IHtQcmltZVRlbXBsYXRlfSBmcm9tICdwcmltZW5nL2FwaSc7IFxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twQnV0dG9uXSdcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGljb25Qb3M6ICdsZWZ0JyB8ICdyaWdodCcgfCAndG9wJyB8ICdib3R0b20nID0gJ2xlZnQnO1xuICAgICAgICAgICAgXG4gICAgQElucHV0KCkgbG9hZGluZ0ljb246IHN0cmluZyA9IFwicGkgcGktc3Bpbm5lciBwaS1zcGluXCI7XG5cbiAgICBwdWJsaWMgX2xhYmVsOiBzdHJpbmc7XG4gICAgXG4gICAgcHVibGljIF9pY29uOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgX2xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgIHB1YmxpYyBpbml0aWFsaXplZDogYm9vbGVhbjtcbiAgICBcbiAgICBwdWJsaWMgX2luaXRpYWxTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG4gICAgXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9pbml0aWFsU3R5bGVDbGFzcyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWU7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkTXVsdGlwbGVDbGFzc2VzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5nZXRTdHlsZUNsYXNzKCkpO1xuXG4gICAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSWNvbkVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgaWYgKHRoaXMuaWNvbiAmJiAhdGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsRWxlbWVudC5jbGFzc05hbWUgPSAncC1idXR0b24tbGFiZWwnO1xuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsKVxuICAgICAgICAgICAgbGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubGFiZWwpKTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIGxhYmVsRWxlbWVudC5pbm5lckhUTUwgPSAnJm5ic3A7JztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIGdldFN0eWxlQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHN0eWxlQ2xhc3MgPSAncC1idXR0b24gcC1jb21wb25lbnQnO1xuICAgICAgICBpZiAodGhpcy5pY29uICYmICF0aGlzLmxhYmVsKSB7XG4gICAgICAgICAgICBzdHlsZUNsYXNzID0gc3R5bGVDbGFzcyArICcgcC1idXR0b24taWNvbi1vbmx5JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHN0eWxlQ2xhc3MgPSBzdHlsZUNsYXNzICsgJyBwLWRpc2FibGVkIHAtYnV0dG9uLWxvYWRpbmcnO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmljb24gJiYgdGhpcy5sYWJlbClcbiAgICAgICAgICAgICAgICBzdHlsZUNsYXNzID0gc3R5bGVDbGFzcyArICcgcC1idXR0b24tbG9hZGluZy1sYWJlbC1vbmx5JztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN0eWxlQ2xhc3M7XG4gICAgfVxuXG4gICAgc2V0U3R5bGVDbGFzcygpIHtcbiAgICAgICAgbGV0IHN0eWxlQ2xhc3MgPSB0aGlzLmdldFN0eWxlQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IHN0eWxlQ2xhc3MgKyAnICcgKyB0aGlzLl9pbml0aWFsU3R5bGVDbGFzcztcbiAgICB9XG5cbiAgICBjcmVhdGVJY29uRWwoKSB7XG4gICAgICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBpY29uRWxlbWVudC5jbGFzc05hbWUgPSAncC1idXR0b24taWNvbic7XG4gICAgICAgIGljb25FbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgbGV0IGljb25Qb3NDbGFzcyA9IHRoaXMubGFiZWwgPyAncC1idXR0b24taWNvbi0nICsgdGhpcy5pY29uUG9zIDogbnVsbDtcbiAgICAgICAgXG4gICAgICAgIGlmIChpY29uUG9zQ2xhc3MpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoaWNvbkVsZW1lbnQsIGljb25Qb3NDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBEb21IYW5kbGVyLmFkZE11bHRpcGxlQ2xhc3NlcyhpY29uRWxlbWVudCwgdGhpcy5nZXRJY29uQ2xhc3MoKSk7XG4gICAgICAgIGxldCBsYWJlbEVsID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5wLWJ1dHRvbi1sYWJlbCcpXG5cbiAgICAgICAgaWYgKGxhYmVsRWwpXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGljb25FbGVtZW50LCBsYWJlbEVsKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGljb25FbGVtZW50KVxuICAgIH1cblxuICAgIGdldEljb25DbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZyA/ICdwLWJ1dHRvbi1sb2FkaW5nLWljb24gJyArIHRoaXMubG9hZGluZ0ljb24gOiB0aGlzLl9pY29uO1xuICAgIH1cblxuICAgIHNldEljb25DbGFzcygpIHtcbiAgICAgICAgbGV0IGljb25FbGVtZW50ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5wLWJ1dHRvbi1pY29uJyk7XG4gICAgICAgIGlmIChpY29uRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaWNvblBvcykgXG4gICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ3AtYnV0dG9uLWljb24gcC1idXR0b24taWNvbi0nICsgdGhpcy5pY29uUG9zICsgJyAnICsgdGhpcy5nZXRJY29uQ2xhc3MoKTtcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ3AtYnV0dG9uLWljb24gJyArIHRoaXMuZ2V0SWNvbkNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUljb25FbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlSWNvbkVsZW1lbnQoKSB7XG4gICAgICAgIGxldCBpY29uRWxlbWVudCA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcucC1idXR0b24taWNvbicpO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoaWNvbkVsZW1lbnQpXG4gICAgfVxuICAgIFxuICAgIEBJbnB1dCgpIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdmFsO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcucC1idXR0b24tbGFiZWwnKS50ZXh0Q29udGVudCA9IHRoaXMuX2xhYmVsIHx8ICcmbmJzcDsnO1xuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZUNsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb247XG4gICAgfVxuXG4gICAgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEljb25DbGFzcygpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZUNsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgc2V0IGxvYWRpbmcodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWw7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLmljb24pXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJY29uQ2xhc3MoKTtcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJY29uRWxlbWVudCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvbiBbYXR0ci50eXBlXT1cInR5cGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmdcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWJ1dHRvbiBwLWNvbXBvbmVudCc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwLWJ1dHRvbi1pY29uLW9ubHknOiAoaWNvbiAmJiAhbGFiZWwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3AtYnV0dG9uLXZlcnRpY2FsJzogKGljb25Qb3MgPT09ICd0b3AnIHx8IGljb25Qb3MgPT09ICdib3R0b20nKSAmJiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAncC1idXR0b24tbG9hZGluZyc6IHRoaXMubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwLWJ1dHRvbi1sb2FkaW5nLWxhYmVsLW9ubHknOiB0aGlzLmxvYWRpbmcgJiYgIXRoaXMuaWNvbiAmJiB0aGlzLmxhYmVsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIiAoZm9jdXMpPVwib25Gb2N1cy5lbWl0KCRldmVudClcIiAoYmx1cik9XCJvbkJsdXIuZW1pdCgkZXZlbnQpXCIgcFJpcHBsZT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsncC1idXR0b24taWNvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAncC1idXR0b24taWNvbi1sZWZ0JzogaWNvblBvcyA9PT0gJ2xlZnQnICYmIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3AtYnV0dG9uLWljb24tcmlnaHQnOiBpY29uUG9zID09PSAncmlnaHQnICYmIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3AtYnV0dG9uLWljb24tdG9wJzogaWNvblBvcyA9PT0gJ3RvcCcgJiYgbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAncC1idXR0b24taWNvbi1ib3R0b20nOiBpY29uUG9zID09PSAnYm90dG9tJyAmJiBsYWJlbH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImxvYWRpbmcgPyAncC1idXR0b24tbG9hZGluZy1pY29uICcgKyBsb2FkaW5nSWNvbiA6IGljb25cIiAqbmdJZj1cIiFjb250ZW50VGVtcGxhdGUgJiYgKGljb258fGxvYWRpbmcpXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1idXR0b24tbGFiZWxcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJpY29uICYmICFsYWJlbFwiICpuZ0lmPVwiIWNvbnRlbnRUZW1wbGF0ZVwiPnt7bGFiZWx8fCcmbmJzcDsnfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJiYWRnZVN0eWxlQ2xhc3MoKVwiIFtjbGFzc109XCJiYWRnZUNsYXNzXCIgKm5nSWY9XCIhY29udGVudFRlbXBsYXRlICYmIGJhZGdlXCI+e3tiYWRnZX19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSBcImJ1dHRvblwiO1xuXG4gICAgQElucHV0KCkgaWNvblBvczogc3RyaW5nID0gJ2xlZnQnO1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYmFkZ2U6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGxvYWRpbmdJY29uOiBzdHJpbmcgPSBcInBpIHBpLXNwaW5uZXIgcGktc3BpblwiO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGJhZGdlQ2xhc3M6IHN0cmluZztcblxuICAgIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjb250ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmFkZ2VTdHlsZUNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtYmFkZ2UgcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgJ3AtYmFkZ2Utbm8tZ3V0dGVyJzogdGhpcy5iYWRnZSAmJiBTdHJpbmcodGhpcy5iYWRnZSkubGVuZ3RoID09PSAxXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtCdXR0b25EaXJlY3RpdmUsQnV0dG9uXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtCdXR0b25EaXJlY3RpdmUsQnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Nb2R1bGUgeyB9XG4iXX0=