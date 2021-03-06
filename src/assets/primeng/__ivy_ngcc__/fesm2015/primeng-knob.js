import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ElementRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Knob__svg_text_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "text", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("x", 50)("y", 57)("fill", ctx_r0.textColor)("name", ctx_r0.name);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.valueToDisplay());
} }
const KNOB_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Knob),
    multi: true
};
class Knob {
    constructor(cd, el) {
        this.cd = cd;
        this.el = el;
        this.valueColor = "var(--primary-color, Black)";
        this.rangeColor = "var(--surface-d, LightGray)";
        this.textColor = "var(--text-color-secondary, Black)";
        this.valueTemplate = "{value}";
        this.size = 100;
        this.step = 1;
        this.min = 0;
        this.max = 100;
        this.strokeWidth = 14;
        this.showValue = true;
        this.readonly = false;
        this.onChange = new EventEmitter();
        this.radius = 40;
        this.midX = 50;
        this.midY = 50;
        this.minRadians = 4 * Math.PI / 3;
        this.maxRadians = -Math.PI / 3;
        this.value = null;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    mapRange(x, inMin, inMax, outMin, outMax) {
        return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    onClick(event) {
        if (!this.disabled && !this.readonly) {
            this.updateValue(event.offsetX, event.offsetY);
        }
    }
    updateValue(offsetX, offsetY) {
        let dx = offsetX - this.size / 2;
        let dy = this.size / 2 - offsetY;
        let angle = Math.atan2(dy, dx);
        let start = -Math.PI / 2 - Math.PI / 6;
        this.updateModel(angle, start);
    }
    updateModel(angle, start) {
        let mappedValue;
        if (angle > this.maxRadians)
            mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
        else if (angle < start)
            mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);
        else
            return;
        let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
        this.value = newValue;
        this.onModelChange(this.value);
        this.onChange.emit(this.value);
    }
    onMouseDown(event) {
        if (!this.disabled && !this.readonly) {
            this.windowMouseMoveListener = this.onMouseMove.bind(this);
            this.windowMouseUpListener = this.onMouseUp.bind(this);
            window.addEventListener('mousemove', this.windowMouseMoveListener);
            window.addEventListener('mouseup', this.windowMouseUpListener);
            event.preventDefault();
        }
    }
    onMouseUp(event) {
        if (!this.disabled && !this.readonly) {
            window.removeEventListener('mousemove', this.windowMouseMoveListener);
            window.removeEventListener('mouseup', this.windowMouseUpListener);
            this.windowMouseUpListener = null;
            this.windowMouseMoveListener = null;
            event.preventDefault();
        }
    }
    onTouchStart(event) {
        if (!this.disabled && !this.readonly) {
            this.windowTouchMoveListener = this.onTouchMove.bind(this);
            this.windowTouchEndListener = this.onTouchEnd.bind(this);
            window.addEventListener('touchmove', this.windowTouchMoveListener);
            window.addEventListener('touchend', this.windowTouchEndListener);
            event.preventDefault();
        }
    }
    onTouchEnd(event) {
        if (!this.disabled && !this.readonly) {
            window.removeEventListener('touchmove', this.windowTouchMoveListener);
            window.removeEventListener('touchend', this.windowTouchEndListener);
            this.windowTouchMoveListener = null;
            this.windowTouchEndListener = null;
            event.preventDefault();
        }
    }
    onMouseMove(event) {
        if (!this.disabled && !this.readonly) {
            this.updateValue(event.offsetX, event.offsetY);
            event.preventDefault();
        }
    }
    onTouchMove(event) {
        if (!this.disabled && !this.readonly && event.touches.length == 1) {
            const rect = this.el.nativeElement.children[0].getBoundingClientRect();
            const touch = event.targetTouches.item(0);
            const offsetX = touch.clientX - rect.left;
            const offsetY = touch.clientY - rect.top;
            this.updateValue(offsetX, offsetY);
        }
    }
    writeValue(value) {
        this.value = value;
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
    containerClass() {
        return {
            'p-knob p-component': true,
            'p-disabled': this.disabled
        };
    }
    rangePath() {
        return `M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`;
    }
    valuePath() {
        return `M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`;
    }
    zeroRadians() {
        if (this.min > 0 && this.max > 0)
            return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
        else
            return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
    }
    valueRadians() {
        return this.mapRange(this._value, this.min, this.max, this.minRadians, this.maxRadians);
    }
    minX() {
        return this.midX + Math.cos(this.minRadians) * this.radius;
    }
    minY() {
        return this.midY - Math.sin(this.minRadians) * this.radius;
    }
    maxX() {
        return this.midX + Math.cos(this.maxRadians) * this.radius;
    }
    maxY() {
        return this.midY - Math.sin(this.maxRadians) * this.radius;
    }
    zeroX() {
        return this.midX + Math.cos(this.zeroRadians()) * this.radius;
    }
    zeroY() {
        return this.midY - Math.sin(this.zeroRadians()) * this.radius;
    }
    valueX() {
        return this.midX + Math.cos(this.valueRadians()) * this.radius;
    }
    valueY() {
        return this.midY - Math.sin(this.valueRadians()) * this.radius;
    }
    largeArc() {
        return Math.abs(this.zeroRadians() - this.valueRadians()) < Math.PI ? 0 : 1;
    }
    sweep() {
        return this.valueRadians() > this.zeroRadians() ? 0 : 1;
    }
    valueToDisplay() {
        return this.valueTemplate.replace("{value}", this._value.toString());
    }
    get _value() {
        return this.value != null ? this.value : this.min;
    }
}
Knob.ɵfac = function Knob_Factory(t) { return new (t || Knob)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Knob.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Knob, selectors: [["p-knob"]], inputs: { valueColor: "valueColor", rangeColor: "rangeColor", textColor: "textColor", valueTemplate: "valueTemplate", size: "size", step: "step", min: "min", max: "max", strokeWidth: "strokeWidth", showValue: "showValue", readonly: "readonly", disabled: "disabled", styleClass: "styleClass", style: "style", severity: "severity", name: "name" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([KNOB_VALUE_ACCESSOR])], decls: 5, vars: 15, consts: [[3, "ngClass", "ngStyle"], ["viewBox", "0 0 100 100", 3, "click", "mousedown", "mouseup", "touchstart", "touchend"], [1, "p-knob-range"], [1, "p-knob-value"], ["text-anchor", "middle", "class", "p-knob-text", 4, "ngIf"], ["text-anchor", "middle", 1, "p-knob-text"]], template: function Knob_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "svg", 1);
        ɵngcc0.ɵɵlistener("click", function Knob_Template__svg_svg_click_1_listener($event) { return ctx.onClick($event); })("mousedown", function Knob_Template__svg_svg_mousedown_1_listener($event) { return ctx.onMouseDown($event); })("mouseup", function Knob_Template__svg_svg_mouseup_1_listener($event) { return ctx.onMouseUp($event); })("touchstart", function Knob_Template__svg_svg_touchstart_1_listener($event) { return ctx.onTouchStart($event); })("touchend", function Knob_Template__svg_svg_touchend_1_listener($event) { return ctx.onTouchEnd($event); });
        ɵngcc0.ɵɵelement(2, "path", 2);
        ɵngcc0.ɵɵelement(3, "path", 3);
        ɵngcc0.ɵɵtemplate(4, Knob__svg_text_4_Template, 2, 5, "text", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("width", ctx.size + "px")("height", ctx.size + "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("d", ctx.rangePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.rangeColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("d", ctx.valuePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.valueColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showValue);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf], styles: ["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-fill-mode:forwards;animation-name:dash-frame;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}"], encapsulation: 2, changeDetection: 0 });
Knob.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
Knob.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    severity: [{ type: Input }],
    valueColor: [{ type: Input }],
    rangeColor: [{ type: Input }],
    textColor: [{ type: Input }],
    valueTemplate: [{ type: Input }],
    name: [{ type: Input }],
    size: [{ type: Input }],
    step: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    disabled: [{ type: Input }],
    showValue: [{ type: Input }],
    readonly: [{ type: Input }],
    onChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Knob, [{
        type: Component,
        args: [{
                selector: 'p-knob',
                template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
        <svg viewBox="0 0 100 100" [style.width]="size + 'px'" [style.height]="size + 'px'" (click)="onClick($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)"
            (touchstart)="onTouchStart($event)" (touchend)="onTouchEnd($event)">
            <path [attr.d]="rangePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="rangeColor" class="p-knob-range"></path>
            <path [attr.d]="valuePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="valueColor" class="p-knob-value"></path>
            <text *ngIf="showValue" [attr.x]="50" [attr.y]="57" text-anchor="middle" [attr.fill]="textColor" class="p-knob-text" [attr.name]="name">{{valueToDisplay()}}</text>
        </svg>
        </div>
    `,
                providers: [KNOB_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-fill-mode:forwards;animation-name:dash-frame;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { valueColor: [{
            type: Input
        }], rangeColor: [{
            type: Input
        }], textColor: [{
            type: Input
        }], valueTemplate: [{
            type: Input
        }], size: [{
            type: Input
        }], step: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }], showValue: [{
            type: Input
        }], readonly: [{
            type: Input
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], severity: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();
class KnobModule {
}
KnobModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: KnobModule });
KnobModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function KnobModule_Factory(t) { return new (t || KnobModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(KnobModule, { declarations: function () { return [Knob]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Knob]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KnobModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Knob],
                declarations: [Knob]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { KNOB_VALUE_ACCESSOR, Knob, KnobModule };

//# sourceMappingURL=primeng-knob.js.map