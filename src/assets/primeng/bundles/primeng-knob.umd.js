(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng/knob', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.knob = {}), global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, forms) { 
function Knob__svg_text_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "text", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("x", 50)("y", 57)("fill", ctx_r0.textColor)("name", ctx_r0.name);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.valueToDisplay());
} }
'use strict';

    var KNOB_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return Knob; }),
        multi: true
    };
    var Knob = /** @class */ (function () {
        function Knob(cd, el) {
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
            this.onChange = new core.EventEmitter();
            this.radius = 40;
            this.midX = 50;
            this.midY = 50;
            this.minRadians = 4 * Math.PI / 3;
            this.maxRadians = -Math.PI / 3;
            this.value = null;
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
        }
        Knob.prototype.mapRange = function (x, inMin, inMax, outMin, outMax) {
            return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        };
        Knob.prototype.onClick = function (event) {
            if (!this.disabled && !this.readonly) {
                this.updateValue(event.offsetX, event.offsetY);
            }
        };
        Knob.prototype.updateValue = function (offsetX, offsetY) {
            var dx = offsetX - this.size / 2;
            var dy = this.size / 2 - offsetY;
            var angle = Math.atan2(dy, dx);
            var start = -Math.PI / 2 - Math.PI / 6;
            this.updateModel(angle, start);
        };
        Knob.prototype.updateModel = function (angle, start) {
            var mappedValue;
            if (angle > this.maxRadians)
                mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
            else if (angle < start)
                mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);
            else
                return;
            var newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
            this.value = newValue;
            this.onModelChange(this.value);
            this.onChange.emit(this.value);
        };
        Knob.prototype.onMouseDown = function (event) {
            if (!this.disabled && !this.readonly) {
                this.windowMouseMoveListener = this.onMouseMove.bind(this);
                this.windowMouseUpListener = this.onMouseUp.bind(this);
                window.addEventListener('mousemove', this.windowMouseMoveListener);
                window.addEventListener('mouseup', this.windowMouseUpListener);
                event.preventDefault();
            }
        };
        Knob.prototype.onMouseUp = function (event) {
            if (!this.disabled && !this.readonly) {
                window.removeEventListener('mousemove', this.windowMouseMoveListener);
                window.removeEventListener('mouseup', this.windowMouseUpListener);
                this.windowMouseUpListener = null;
                this.windowMouseMoveListener = null;
                event.preventDefault();
            }
        };
        Knob.prototype.onTouchStart = function (event) {
            if (!this.disabled && !this.readonly) {
                this.windowTouchMoveListener = this.onTouchMove.bind(this);
                this.windowTouchEndListener = this.onTouchEnd.bind(this);
                window.addEventListener('touchmove', this.windowTouchMoveListener);
                window.addEventListener('touchend', this.windowTouchEndListener);
                event.preventDefault();
            }
        };
        Knob.prototype.onTouchEnd = function (event) {
            if (!this.disabled && !this.readonly) {
                window.removeEventListener('touchmove', this.windowTouchMoveListener);
                window.removeEventListener('touchend', this.windowTouchEndListener);
                this.windowTouchMoveListener = null;
                this.windowTouchEndListener = null;
                event.preventDefault();
            }
        };
        Knob.prototype.onMouseMove = function (event) {
            if (!this.disabled && !this.readonly) {
                this.updateValue(event.offsetX, event.offsetY);
                event.preventDefault();
            }
        };
        Knob.prototype.onTouchMove = function (event) {
            if (!this.disabled && !this.readonly && event.touches.length == 1) {
                var rect = this.el.nativeElement.children[0].getBoundingClientRect();
                var touch = event.targetTouches.item(0);
                var offsetX = touch.clientX - rect.left;
                var offsetY = touch.clientY - rect.top;
                this.updateValue(offsetX, offsetY);
            }
        };
        Knob.prototype.writeValue = function (value) {
            this.value = value;
            this.cd.markForCheck();
        };
        Knob.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        Knob.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        Knob.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
        Knob.prototype.containerClass = function () {
            return {
                'p-knob p-component': true,
                'p-disabled': this.disabled
            };
        };
        Knob.prototype.rangePath = function () {
            return "M " + this.minX() + " " + this.minY() + " A " + this.radius + " " + this.radius + " 0 1 1 " + this.maxX() + " " + this.maxY();
        };
        Knob.prototype.valuePath = function () {
            return "M " + this.zeroX() + " " + this.zeroY() + " A " + this.radius + " " + this.radius + " 0 " + this.largeArc() + " " + this.sweep() + " " + this.valueX() + " " + this.valueY();
        };
        Knob.prototype.zeroRadians = function () {
            if (this.min > 0 && this.max > 0)
                return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
            else
                return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
        };
        Knob.prototype.valueRadians = function () {
            return this.mapRange(this._value, this.min, this.max, this.minRadians, this.maxRadians);
        };
        Knob.prototype.minX = function () {
            return this.midX + Math.cos(this.minRadians) * this.radius;
        };
        Knob.prototype.minY = function () {
            return this.midY - Math.sin(this.minRadians) * this.radius;
        };
        Knob.prototype.maxX = function () {
            return this.midX + Math.cos(this.maxRadians) * this.radius;
        };
        Knob.prototype.maxY = function () {
            return this.midY - Math.sin(this.maxRadians) * this.radius;
        };
        Knob.prototype.zeroX = function () {
            return this.midX + Math.cos(this.zeroRadians()) * this.radius;
        };
        Knob.prototype.zeroY = function () {
            return this.midY - Math.sin(this.zeroRadians()) * this.radius;
        };
        Knob.prototype.valueX = function () {
            return this.midX + Math.cos(this.valueRadians()) * this.radius;
        };
        Knob.prototype.valueY = function () {
            return this.midY - Math.sin(this.valueRadians()) * this.radius;
        };
        Knob.prototype.largeArc = function () {
            return Math.abs(this.zeroRadians() - this.valueRadians()) < Math.PI ? 0 : 1;
        };
        Knob.prototype.sweep = function () {
            return this.valueRadians() > this.zeroRadians() ? 0 : 1;
        };
        Knob.prototype.valueToDisplay = function () {
            return this.valueTemplate.replace("{value}", this._value.toString());
        };
        Object.defineProperty(Knob.prototype, "_value", {
            get: function () {
                return this.value != null ? this.value : this.min;
            },
            enumerable: false,
            configurable: true
        });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Knob, [{
        type: core.Component,
        args: [{
                selector: 'p-knob',
                template: "\n        <div [ngClass]=\"containerClass()\" [class]=\"styleClass\" [ngStyle]=\"style\">\n        <svg viewBox=\"0 0 100 100\" [style.width]=\"size + 'px'\" [style.height]=\"size + 'px'\" (click)=\"onClick($event)\" (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\"\n            (touchstart)=\"onTouchStart($event)\" (touchend)=\"onTouchEnd($event)\">\n            <path [attr.d]=\"rangePath()\" [attr.stroke-width]=\"strokeWidth\" [attr.stroke]=\"rangeColor\" class=\"p-knob-range\"></path>\n            <path [attr.d]=\"valuePath()\" [attr.stroke-width]=\"strokeWidth\" [attr.stroke]=\"valueColor\" class=\"p-knob-value\"></path>\n            <text *ngIf=\"showValue\" [attr.x]=\"50\" [attr.y]=\"57\" text-anchor=\"middle\" [attr.fill]=\"textColor\" class=\"p-knob-text\" [attr.name]=\"name\">{{valueToDisplay()}}</text>\n        </svg>\n        </div>\n    ",
                providers: [KNOB_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: ["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-fill-mode:forwards;animation-name:dash-frame;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { valueColor: [{
            type: core.Input
        }], rangeColor: [{
            type: core.Input
        }], textColor: [{
            type: core.Input
        }], valueTemplate: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], step: [{
            type: core.Input
        }], min: [{
            type: core.Input
        }], max: [{
            type: core.Input
        }], strokeWidth: [{
            type: core.Input
        }], showValue: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], severity: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }] }); })();
        return Knob;
    }());
    Knob.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef }
    ]; };
    Knob.propDecorators = {
        styleClass: [{ type: core.Input }],
        style: [{ type: core.Input }],
        severity: [{ type: core.Input }],
        valueColor: [{ type: core.Input }],
        rangeColor: [{ type: core.Input }],
        textColor: [{ type: core.Input }],
        valueTemplate: [{ type: core.Input }],
        name: [{ type: core.Input }],
        size: [{ type: core.Input }],
        step: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        strokeWidth: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        showValue: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        onChange: [{ type: core.Output }]
    };
    var KnobModule = /** @class */ (function () {
        function KnobModule() {
        }
KnobModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: KnobModule });
KnobModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function KnobModule_Factory(t) { return new (t || KnobModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(KnobModule, { declarations: [Knob], imports: [ɵngcc1.CommonModule], exports: [Knob] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KnobModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Knob],
                declarations: [Knob]
            }]
    }], function () { return []; }, null); })();
        return KnobModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.KNOB_VALUE_ACCESSOR = KNOB_VALUE_ACCESSOR;
    exports.Knob = Knob;
    exports.KnobModule = KnobModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-knob.umd.js.map