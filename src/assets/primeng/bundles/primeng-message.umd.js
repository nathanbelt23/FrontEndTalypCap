(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/message', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.message = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 
function UIMessage_div_0_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.text, ɵngcc0.ɵɵsanitizeHtml);
} }
function UIMessage_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, UIMessage_div_0_div_2_span_1_Template, 1, 1, "span", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.escape);
} }
function UIMessage_div_0_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.text);
} }
function UIMessage_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, UIMessage_div_0_ng_template_3_span_0_Template, 2, 1, "span", 7);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.escape);
} }
var _c0 = function (a0, a1, a2, a3, a4) { return { "p-inline-message-info": a0, "p-inline-message-warn": a1, "p-inline-message-error": a2, "p-inline-message-success": a3, "p-inline-message-icon-only": a4 }; };
function UIMessage_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelement(1, "span", 2);
    ɵngcc0.ɵɵtemplate(2, UIMessage_div_0_div_2_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵtemplate(3, UIMessage_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r2 = ɵngcc0.ɵɵreference(4);
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style)("ngClass", ɵngcc0.ɵɵpureFunction5(7, _c0, ctx_r0.severity === "info", ctx_r0.severity === "warn", ctx_r0.severity === "error", ctx_r0.severity === "success", ctx_r0.text == null));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.escape)("ngIfElse", _r2);
} }
'use strict';

    var UIMessage = /** @class */ (function () {
        function UIMessage() {
            this.escape = true;
        }
        Object.defineProperty(UIMessage.prototype, "icon", {
            get: function () {
                var icon = null;
                if (this.severity) {
                    switch (this.severity) {
                        case 'success':
                            icon = 'pi pi-check';
                            break;
                        case 'info':
                            icon = 'pi pi-info-circle';
                            break;
                        case 'error':
                            icon = 'pi pi-times-circle';
                            break;
                        case 'warn':
                            icon = 'pi pi-exclamation-triangle';
                            break;
                        default:
                            icon = 'pi pi-info-circle';
                            break;
                    }
                }
                return icon;
            },
            enumerable: false,
            configurable: true
        });
UIMessage.ɵfac = function UIMessage_Factory(t) { return new (t || UIMessage)(); };
UIMessage.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UIMessage, selectors: [["p-message"]], inputs: { escape: "escape", severity: "severity", text: "text", style: "style", styleClass: "styleClass" }, decls: 1, vars: 1, consts: [["aria-live", "polite", "class", "p-inline-message p-component p-inline-message", 3, "ngStyle", "class", "ngClass", 4, "ngIf"], ["aria-live", "polite", 1, "p-inline-message", "p-component", "p-inline-message", 3, "ngStyle", "ngClass"], [1, "p-inline-message-icon", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["escapeOut", ""], ["class", "p-inline-message-text", 3, "innerHTML", 4, "ngIf"], [1, "p-inline-message-text", 3, "innerHTML"], ["class", "p-inline-message-text", 4, "ngIf"], [1, "p-inline-message-text"]], template: function UIMessage_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, UIMessage_div_0_Template, 5, 13, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.severity);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgClass], styles: [".p-inline-message{align-items:center;display:inline-flex;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UIMessage, [{
        type: core.Component,
        args: [{
                selector: 'p-message',
                template: "\n        <div aria-live=\"polite\" class=\"p-inline-message p-component p-inline-message\" *ngIf=\"severity\" [ngStyle]=\"style\" [class]=\"styleClass\"\n        [ngClass]=\"{'p-inline-message-info': (severity === 'info'),\n                'p-inline-message-warn': (severity === 'warn'),\n                'p-inline-message-error': (severity === 'error'),\n                'p-inline-message-success': (severity === 'success'),\n                'p-inline-message-icon-only': this.text == null}\">\n            <span class=\"p-inline-message-icon\" [ngClass]=\"icon\"></span>\n            <div *ngIf=\"!escape; else escapeOut\">\n                <span *ngIf=\"!escape\" class=\"p-inline-message-text\" [innerHTML]=\"text\"></span>\n            </div>\n            <ng-template #escapeOut>\n                <span *ngIf=\"escape\" class=\"p-inline-message-text\">{{text}}</span>\n            </ng-template>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-inline-message{align-items:center;display:inline-flex;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}"]
            }]
    }], function () { return []; }, { escape: [{
            type: core.Input
        }], severity: [{
            type: core.Input
        }], text: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }] }); })();
        return UIMessage;
    }());
    UIMessage.propDecorators = {
        severity: [{ type: core.Input }],
        text: [{ type: core.Input }],
        escape: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }]
    };
    var MessageModule = /** @class */ (function () {
        function MessageModule() {
        }
MessageModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MessageModule });
MessageModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MessageModule_Factory(t) { return new (t || MessageModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MessageModule, { declarations: [UIMessage], imports: [ɵngcc1.CommonModule], exports: [UIMessage] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MessageModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [UIMessage],
                declarations: [UIMessage]
            }]
    }], function () { return []; }, null); })();
        return MessageModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MessageModule = MessageModule;
    exports.UIMessage = UIMessage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-message.umd.js.map