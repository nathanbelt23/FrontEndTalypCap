import { NgModule, Directive, ElementRef, HostListener, Input, NgZone, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, Component, ViewChild, ChangeDetectorRef, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { PrimeNGConfig, PrimeTemplate, TranslationKeys } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/inputtext';

const _c0 = ["input"];
function Password_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 5);
    ɵngcc0.ɵɵlistener("click", function Password_i_3_Template_i_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onMaskToggle(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.toggleIconClass());
} }
function Password_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Password_div_4_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Password_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Password_div_4_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.contentTemplate);
} }
const _c1 = function (a0) { return { "width": a0 }; };
function Password_div_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵelement(1, "div", 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div", 12);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r9.strengthClass())("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c1, ctx_r9.meter ? ctx_r9.meter.width : ""));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.infoText);
} }
function Password_div_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c3 = function (a1) { return { value: "visible", params: a1 }; };
function Password_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6, 7);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function Password_div_4_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onAnimationStart($event); });
    ɵngcc0.ɵɵtemplate(2, Password_div_4_ng_container_2_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵtemplate(3, Password_div_4_ng_container_3_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵtemplate(4, Password_div_4_ng_template_4_Template, 4, 5, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(6, Password_div_4_ng_container_6_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r8 = ɵngcc0.ɵɵreference(5);
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", "p-password-panel p-component")("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(9, _c3, ɵngcc0.ɵɵpureFunction2(6, _c2, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.contentTemplate)("ngIfElse", _r8);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.footerTemplate);
} }
export class PasswordDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.promptLabel = 'Enter a password';
        this.weakLabel = 'Weak';
        this.mediumLabel = 'Medium';
        this.strongLabel = 'Strong';
        this.feedback = true;
    }
    set showPassword(show) {
        this.el.nativeElement.type = show ? 'text' : 'password';
    }
    ngDoCheck() {
        this.updateFilledState();
    }
    onInput(e) {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
    createPanel() {
        this.panel = document.createElement('div');
        this.panel.className = 'p-password-panel p-component p-password-panel-overlay p-connected-overlay';
        this.meter = document.createElement('div');
        this.meter.className = 'p-password-meter';
        this.info = document.createElement('div');
        this.info.className = 'p-password-info';
        this.info.textContent = this.promptLabel;
        this.panel.appendChild(this.meter);
        this.panel.appendChild(this.info);
        this.panel.style.minWidth = DomHandler.getOuterWidth(this.el.nativeElement) + 'px';
        document.body.appendChild(this.panel);
    }
    showOverlay() {
        if (this.feedback) {
            if (!this.panel) {
                this.createPanel();
            }
            this.panel.style.zIndex = String(++DomHandler.zindex);
            this.panel.style.display = 'block';
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    DomHandler.addClass(this.panel, 'p-connected-overlay-visible');
                    this.bindScrollListener();
                    this.bindDocumentResizeListener();
                }, 1);
            });
            DomHandler.absolutePosition(this.panel, this.el.nativeElement);
        }
    }
    hideOverlay() {
        if (this.feedback && this.panel) {
            DomHandler.addClass(this.panel, 'p-connected-overlay-hidden');
            DomHandler.removeClass(this.panel, 'p-connected-overlay-visible');
            this.unbindScrollListener();
            this.unbindDocumentResizeListener();
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.ngOnDestroy();
                }, 150);
            });
        }
    }
    onFocus() {
        this.showOverlay();
    }
    onBlur() {
        this.hideOverlay();
    }
    onKeyup(e) {
        if (this.feedback) {
            let value = e.target.value, label = null, meterPos = null;
            if (value.length === 0) {
                label = this.promptLabel;
                meterPos = '0px 0px';
            }
            else {
                var score = this.testStrength(value);
                if (score < 30) {
                    label = this.weakLabel;
                    meterPos = '0px -10px';
                }
                else if (score >= 30 && score < 80) {
                    label = this.mediumLabel;
                    meterPos = '0px -20px';
                }
                else if (score >= 80) {
                    label = this.strongLabel;
                    meterPos = '0px -30px';
                }
            }
            if (!this.panel || !DomHandler.hasClass(this.panel, 'p-connected-overlay-visible')) {
                this.showOverlay();
            }
            this.meter.style.backgroundPosition = meterPos;
            this.info.textContent = label;
        }
    }
    testStrength(str) {
        let grade = 0;
        let val;
        val = str.match('[0-9]');
        grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
        val = str.match('[a-zA-Z]');
        grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
        val = str.match('[!@#$%^&*?_~.,;=]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
        val = str.match('[A-Z]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
        grade *= str.length / 8;
        return grade > 100 ? 100 : grade;
    }
    normalize(x, y) {
        let diff = x - y;
        if (diff <= 0)
            return x / y;
        else
            return 1 + 0.5 * (x / (x + y / 4));
    }
    get disabled() {
        return this.el.nativeElement.disabled;
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
                if (DomHandler.hasClass(this.panel, 'p-connected-overlay-visible')) {
                    this.hideOverlay();
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
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    onWindowResize() {
        this.hideOverlay();
    }
    ngOnDestroy() {
        if (this.panel) {
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.unbindDocumentResizeListener();
            document.body.removeChild(this.panel);
            this.panel = null;
            this.meter = null;
            this.info = null;
        }
    }
}
PasswordDirective.ɵfac = function PasswordDirective_Factory(t) { return new (t || PasswordDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
PasswordDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PasswordDirective, selectors: [["", "pPassword", ""]], hostVars: 6, hostBindings: function PasswordDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function PasswordDirective_input_HostBindingHandler($event) { return ctx.onInput($event); })("focus", function PasswordDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function PasswordDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("keyup", function PasswordDirective_keyup_HostBindingHandler($event) { return ctx.onKeyup($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputtext", true)("p-component", true)("p-filled", ctx.filled);
    } }, inputs: { promptLabel: "promptLabel", weakLabel: "weakLabel", mediumLabel: "mediumLabel", strongLabel: "strongLabel", feedback: "feedback", showPassword: "showPassword" } });
PasswordDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
PasswordDirective.propDecorators = {
    promptLabel: [{ type: Input }],
    weakLabel: [{ type: Input }],
    mediumLabel: [{ type: Input }],
    strongLabel: [{ type: Input }],
    feedback: [{ type: Input }],
    showPassword: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onKeyup: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PasswordDirective, [{
        type: Directive,
        args: [{
                selector: '[pPassword]',
                host: {
                    '[class.p-inputtext]': 'true',
                    '[class.p-component]': 'true',
                    '[class.p-filled]': 'filled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { promptLabel: [{
            type: Input
        }], weakLabel: [{
            type: Input
        }], mediumLabel: [{
            type: Input
        }], strongLabel: [{
            type: Input
        }], feedback: [{
            type: Input
        }], showPassword: [{
            type: Input
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }], onFocus: [{
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], onKeyup: [{
            type: HostListener,
            args: ['keyup', ['$event']]
        }] }); })();
export const Password_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Password),
    multi: true
};
export class Password {
    constructor(cd, config) {
        this.cd = cd;
        this.config = config;
        this.mediumRegex = '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})';
        this.strongRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})';
        this.feedback = true;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.overlayVisible = false;
        this.focused = false;
        this.unmasked = false;
        this.value = null;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    ngOnInit() {
        this.infoText = this.promptText();
        this.mediumCheckRegExp = new RegExp(this.mediumRegex);
        this.strongCheckRegExp = new RegExp(this.strongRegex);
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.overlay.style.zIndex = String(DomHandler.generateZIndex());
                this.appendContainer();
                this.alignOverlay();
                this.bindScrollListener();
                this.bindResizeListener();
                break;
            case 'void':
                this.unbindScrollListener();
                this.unbindResizeListener();
                this.overlay = null;
                break;
        }
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                document.getElementById(this.appendTo).appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.appendTo) {
            this.overlay.style.minWidth = DomHandler.getOuterWidth(this.input.nativeElement) + 'px';
            DomHandler.absolutePosition(this.overlay, this.input.nativeElement);
        }
        else {
            DomHandler.relativePosition(this.overlay, this.input.nativeElement);
        }
    }
    onInput(event) {
        this.onModelChange(event.target.value);
        this.onModelTouched();
    }
    onFocus(event) {
        this.focused = true;
        if (this.feedback) {
            this.overlayVisible = true;
        }
    }
    onBlur(event) {
        this.focused = false;
        if (this.feedback) {
            this.overlayVisible = false;
        }
    }
    onKeyUp(event) {
        if (this.feedback) {
            let value = event.target.value;
            let label = null;
            let meter = null;
            switch (this.testStrength(value)) {
                case 1:
                    label = this.weakText();
                    meter = {
                        strength: 'weak',
                        width: '33.33%'
                    };
                    break;
                case 2:
                    label = this.mediumText();
                    meter = {
                        strength: 'medium',
                        width: '66.66%'
                    };
                    break;
                case 3:
                    label = this.strongText();
                    meter = {
                        strength: 'strong',
                        width: '100%'
                    };
                    break;
                default:
                    label = this.promptText();
                    meter = null;
                    break;
            }
            this.meter = meter;
            this.infoText = label;
            if (!this.overlayVisible) {
                this.overlayVisible = true;
            }
        }
    }
    onMaskToggle() {
        this.unmasked = !this.unmasked;
    }
    testStrength(str) {
        let level = 0;
        if (this.strongCheckRegExp.test(str))
            level = 3;
        else if (this.mediumCheckRegExp.test(str))
            level = 2;
        else if (str.length)
            level = 1;
        return level;
    }
    writeValue(value) {
        if (value === undefined)
            this.value = null;
        else
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
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.input.nativeElement, () => {
                if (this.overlayVisible) {
                    this.overlayVisible = false;
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.overlayVisible) {
                    this.overlayVisible = false;
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }
    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }
    containerClass() {
        return { 'p-password p-component p-inputwrapper': true,
            'p-inputwrapper-filled': this.filled(),
            'p-inputwrapper-focus': this.focused,
            'p-input-icon-right': this.toggleMask
        };
    }
    inputFieldClass() {
        return { 'p-password-input': true,
            'p-disabled': this.disabled
        };
    }
    toggleIconClass() {
        return this.unmasked ? 'pi pi-eye-slash' : 'pi pi-eye';
    }
    strengthClass() {
        return `p-password-strength ${this.meter ? this.meter.strength : ''}`;
    }
    filled() {
        return (this.value != null && this.value.toString().length > 0);
    }
    promptText() {
        return this.promptLabel || this.getTranslation(TranslationKeys.PASSWORD_PROMPT);
    }
    weakText() {
        return this.weakLabel || this.getTranslation(TranslationKeys.WEAK);
    }
    mediumText() {
        return this.mediumLabel || this.getTranslation(TranslationKeys.MEDIUM);
    }
    strongText() {
        return this.strongLabel || this.getTranslation(TranslationKeys.STRONG);
    }
    restoreAppend() {
        if (this.overlay && this.appendTo) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.overlay);
            else
                document.getElementById(this.appendTo).removeChild(this.overlay);
        }
    }
    inputType() {
        return this.unmasked ? 'text' : 'password';
    }
    getTranslation(option) {
        return this.config.getTranslation(option);
    }
    ngOnDestroy() {
        this.restoreAppend();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    }
}
Password.ɵfac = function Password_Factory(t) { return new (t || Password)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PrimeNGConfig)); };
Password.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Password, selectors: [["p-password"]], contentQueries: function Password_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Password_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { mediumRegex: "mediumRegex", strongRegex: "strongRegex", feedback: "feedback", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", disabled: "disabled", promptLabel: "promptLabel", weakLabel: "weakLabel", mediumLabel: "mediumLabel", strongLabel: "strongLabel", appendTo: "appendTo", toggleMask: "toggleMask", inputStyleClass: "inputStyleClass", styleClass: "styleClass", style: "style", inputStyle: "inputStyle", placeholder: "placeholder" }, features: [ɵngcc0.ɵɵProvidersFeature([Password_VALUE_ACCESSOR])], decls: 5, vars: 13, consts: [[3, "ngClass", "ngStyle"], ["pInputText", "", 3, "ngClass", "ngStyle", "value", "input", "focus", "blur", "keyup"], ["input", ""], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "click"], [3, "ngClass"], ["overlay", ""], [4, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], ["content", ""], [1, "p-password-meter"], ["className", "p-password-info"]], template: function Password_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("input", function Password_Template_input_input_1_listener($event) { return ctx.onInput($event); })("focus", function Password_Template_input_focus_1_listener($event) { return ctx.onFocus($event); })("blur", function Password_Template_input_blur_1_listener($event) { return ctx.onBlur($event); })("keyup", function Password_Template_input_keyup_1_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, Password_i_3_Template, 1, 1, "i", 3);
        ɵngcc0.ɵɵtemplate(4, Password_div_4_Template, 7, 11, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.inputStyleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.inputFieldClass())("ngStyle", ctx.inputStyle)("value", ctx.value);
        ɵngcc0.ɵɵattribute("type", ctx.inputType())("placeholder", ctx.placeholder);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.toggleMask);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc3.InputText, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], styles: [".p-password{display:inline-flex;position:relative}.p-password-panel{position:absolute}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;transition:width 1s ease-in-out;width:0}.p-fluid .p-password{display:flex}"], encapsulation: 2, data: { animation: [
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
Password.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: PrimeNGConfig }
];
Password.propDecorators = {
    disabled: [{ type: Input }],
    promptLabel: [{ type: Input }],
    mediumRegex: [{ type: Input }],
    strongRegex: [{ type: Input }],
    weakLabel: [{ type: Input }],
    mediumLabel: [{ type: Input }],
    strongLabel: [{ type: Input }],
    feedback: [{ type: Input }],
    appendTo: [{ type: Input }],
    toggleMask: [{ type: Input }],
    inputStyleClass: [{ type: Input }],
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    inputStyle: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    placeholder: [{ type: Input }],
    input: [{ type: ViewChild, args: ['input',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Password, [{
        type: Component,
        args: [{
                selector: 'p-password',
                template: `
        <div [ngClass]="containerClass()" [ngStyle]="style" [class]="styleClass">
            <input #input pInputText [ngClass]="inputFieldClass()" [ngStyle]="inputStyle" [class]="inputStyleClass" [attr.type]="inputType()" [attr.placeholder]="placeholder" [value]="value" (input)="onInput($event)" (focus)="onFocus($event)" 
                (blur)="onBlur($event)" (keyup)="onKeyUp($event)" />
            <i *ngIf="toggleMask" [ngClass]="toggleIconClass()" (click)="onMaskToggle()"></i>
            <div #overlay *ngIf="overlayVisible" [ngClass]="'p-password-panel p-component'" 
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onAnimationStart($event)">
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <ng-container *ngIf="contentTemplate; else content">
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </ng-container>
                <ng-template #content>
                    <div class="p-password-meter">
                        <div [ngClass]="strengthClass()" [ngStyle]="{'width': meter ? meter.width : ''}"></div>
                    </div>
                    <div className="p-password-info">{{infoText}}</div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
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
                providers: [Password_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-password{display:inline-flex;position:relative}.p-password-panel{position:absolute}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;transition:width 1s ease-in-out;width:0}.p-fluid .p-password{display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.PrimeNGConfig }]; }, { mediumRegex: [{
            type: Input
        }], strongRegex: [{
            type: Input
        }], feedback: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], disabled: [{
            type: Input
        }], promptLabel: [{
            type: Input
        }], weakLabel: [{
            type: Input
        }], mediumLabel: [{
            type: Input
        }], strongLabel: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], toggleMask: [{
            type: Input
        }], inputStyleClass: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], input: [{
            type: ViewChild,
            args: ['input']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class PasswordModule {
}
PasswordModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PasswordModule });
PasswordModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PasswordModule_Factory(t) { return new (t || PasswordModule)(); }, imports: [[CommonModule, InputTextModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PasswordModule, { declarations: function () { return [PasswordDirective, Password]; }, imports: function () { return [CommonModule, InputTextModule]; }, exports: function () { return [PasswordDirective, Password]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PasswordModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, InputTextModule],
                exports: [PasswordDirective, Password],
                declarations: [PasswordDirective, Password]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC9wYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBbUIsTUFBTSxFQUFVLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLGVBQWUsRUFBMEIsU0FBUyxFQUFvQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVRLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN0RSxPQUFPLEVBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDMUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVsRCxNQUFNLE9BQU8saUJBQWlCO0FBQUcsSUE0QjdCLFlBQW1CLEVBQWMsRUFBUyxJQUFZO0FBQUksUUFBdkMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQVEsU0FBSSxHQUFKLElBQUksQ0FBUTtBQUFDLFFBMUI5QyxnQkFBVyxHQUFXLGtCQUFrQixDQUFDO0FBQ3RELFFBQ2EsY0FBUyxHQUFXLE1BQU0sQ0FBQztBQUN4QyxRQUNhLGdCQUFXLEdBQVcsUUFBUSxDQUFDO0FBQzVDLFFB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QixRQUFRLFNBQUM7SUFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLGtCQUN4QyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsa0JBQ3RDLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxjQUM5Qzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLERpcmVjdGl2ZSxFbGVtZW50UmVmLEhvc3RMaXN0ZW5lcixJbnB1dCxPbkRlc3Ryb3ksRG9DaGVjayxOZ1pvbmUsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIENvbXBvbmVudCwgQWZ0ZXJDb250ZW50SW5pdCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7YW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtEb21IYW5kbGVyLCBDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtQcmltZU5HQ29uZmlnLCBQcmltZVRlbXBsYXRlLCBUcmFuc2xhdGlvbktleXN9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BQYXNzd29yZF0nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0dGV4dF0nOiAndHJ1ZScsXG4gICAgICAgICdbY2xhc3MucC1jb21wb25lbnRdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLnAtZmlsbGVkXSc6ICdmaWxsZWQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSxEb0NoZWNrIHtcblxuICAgIEBJbnB1dCgpIHByb21wdExhYmVsOiBzdHJpbmcgPSAnRW50ZXIgYSBwYXNzd29yZCc7XG5cbiAgICBASW5wdXQoKSB3ZWFrTGFiZWw6IHN0cmluZyA9ICdXZWFrJztcblxuICAgIEBJbnB1dCgpIG1lZGl1bUxhYmVsOiBzdHJpbmcgPSAnTWVkaXVtJztcblxuICAgIEBJbnB1dCgpIHN0cm9uZ0xhYmVsOiBzdHJpbmcgPSAnU3Ryb25nJztcblxuICAgIEBJbnB1dCgpIGZlZWRiYWNrOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHNldCBzaG93UGFzc3dvcmQoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudHlwZSA9IHNob3cgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xuICAgIH1cblxuICAgIHBhbmVsOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIG1ldGVyOiBhbnk7XG5cbiAgICBpbmZvOiBhbnk7XG5cbiAgICBmaWxsZWQ6IGJvb2xlYW47XG5cbiAgICBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgICBkb2N1bWVudFJlc2l6ZUxpc3RlbmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gICAgb25JbnB1dChlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGaWxsZWRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5maWxsZWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjcmVhdGVQYW5lbCgpIHtcbiAgICAgICAgdGhpcy5wYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnBhbmVsLmNsYXNzTmFtZSA9ICdwLXBhc3N3b3JkLXBhbmVsIHAtY29tcG9uZW50IHAtcGFzc3dvcmQtcGFuZWwtb3ZlcmxheSBwLWNvbm5lY3RlZC1vdmVybGF5JztcbiAgICAgICAgdGhpcy5tZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLm1ldGVyLmNsYXNzTmFtZSA9ICdwLXBhc3N3b3JkLW1ldGVyJztcbiAgICAgICAgdGhpcy5pbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuaW5mby5jbGFzc05hbWUgPSAncC1wYXNzd29yZC1pbmZvJztcbiAgICAgICAgdGhpcy5pbmZvLnRleHRDb250ZW50ID0gdGhpcy5wcm9tcHRMYWJlbDtcbiAgICAgICAgdGhpcy5wYW5lbC5hcHBlbmRDaGlsZCh0aGlzLm1ldGVyKTtcbiAgICAgICAgdGhpcy5wYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmluZm8pO1xuICAgICAgICB0aGlzLnBhbmVsLnN0eWxlLm1pbldpZHRoID0gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHRoaXMuZWwubmF0aXZlRWxlbWVudCkgKyAncHgnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucGFuZWwpO1xuICAgIH1cblxuICAgIHNob3dPdmVybGF5KCkge1xuICAgICAgICBpZiAodGhpcy5mZWVkYmFjaykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhbmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYW5lbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBhbmVsLnN0eWxlLnpJbmRleCA9IFN0cmluZygrK0RvbUhhbmRsZXIuemluZGV4KTtcbiAgICAgICAgICAgIHRoaXMucGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5wYW5lbCwgJ3AtY29ubmVjdGVkLW92ZXJsYXktdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWJzb2x1dGVQb3NpdGlvbih0aGlzLnBhbmVsLCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZU92ZXJsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmZlZWRiYWNrICYmIHRoaXMucGFuZWwpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5wYW5lbCwgJ3AtY29ubmVjdGVkLW92ZXJsYXktaGlkZGVuJyk7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMucGFuZWwsICdwLWNvbm5lY3RlZC1vdmVybGF5LXZpc2libGUnKTtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICAgIG9uRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gICAgb25LZXl1cChlKSB7XG4gICAgICAgIGlmICh0aGlzLmZlZWRiYWNrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsID0gbnVsbCxcbiAgICAgICAgICAgIG1ldGVyUG9zID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy5wcm9tcHRMYWJlbDtcbiAgICAgICAgICAgICAgICBtZXRlclBvcyA9ICcwcHggMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzY29yZSA9IHRoaXMudGVzdFN0cmVuZ3RoKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChzY29yZSA8IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy53ZWFrTGFiZWw7XG4gICAgICAgICAgICAgICAgICAgIG1ldGVyUG9zID0gJzBweCAtMTBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNjb3JlID49IDMwICYmIHNjb3JlIDwgODApIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSB0aGlzLm1lZGl1bUxhYmVsO1xuICAgICAgICAgICAgICAgICAgICBtZXRlclBvcyA9ICcwcHggLTIwcHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzY29yZSA+PSA4MCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IHRoaXMuc3Ryb25nTGFiZWw7XG4gICAgICAgICAgICAgICAgICAgIG1ldGVyUG9zID0gJzBweCAtMzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMucGFuZWwgfHwgIURvbUhhbmRsZXIuaGFzQ2xhc3ModGhpcy5wYW5lbCwgJ3AtY29ubmVjdGVkLW92ZXJsYXktdmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1ldGVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IG1ldGVyUG9zO1xuICAgICAgICAgICAgdGhpcy5pbmZvLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXN0U3RyZW5ndGgoc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGdyYWRlOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgdmFsOiBSZWdFeHBNYXRjaEFycmF5O1xuXG4gICAgICAgIHZhbCA9IHN0ci5tYXRjaCgnWzAtOV0nKTtcbiAgICAgICAgZ3JhZGUgKz0gdGhpcy5ub3JtYWxpemUodmFsID8gdmFsLmxlbmd0aCA6IDEvNCwgMSkgKiAyNTtcblxuICAgICAgICB2YWwgPSBzdHIubWF0Y2goJ1thLXpBLVpdJyk7XG4gICAgICAgIGdyYWRlICs9IHRoaXMubm9ybWFsaXplKHZhbCA/IHZhbC5sZW5ndGggOiAxLzIsIDMpICogMTA7XG5cbiAgICAgICAgdmFsID0gc3RyLm1hdGNoKCdbIUAjJCVeJio/X34uLDs9XScpO1xuICAgICAgICBncmFkZSArPSB0aGlzLm5vcm1hbGl6ZSh2YWwgPyB2YWwubGVuZ3RoIDogMS82LCAxKSAqIDM1O1xuXG4gICAgICAgIHZhbCA9IHN0ci5tYXRjaCgnW0EtWl0nKTtcbiAgICAgICAgZ3JhZGUgKz0gdGhpcy5ub3JtYWxpemUodmFsID8gdmFsLmxlbmd0aCA6IDEvNiwgMSkgKiAzMDtcblxuICAgICAgICBncmFkZSAqPSBzdHIubGVuZ3RoIC8gODtcblxuICAgICAgICByZXR1cm4gZ3JhZGUgPiAxMDAgPyAxMDAgOiBncmFkZTtcbiAgICB9XG5cbiAgICBub3JtYWxpemUoeCwgeSkge1xuICAgICAgICBsZXQgZGlmZiA9IHggLSB5O1xuXG4gICAgICAgIGlmIChkaWZmIDw9IDApXG4gICAgICAgICAgICByZXR1cm4geCAvIHk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiAxICsgMC41ICogKHggLyAoeCArIHkvNCkpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBiaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBuZXcgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKERvbUhhbmRsZXIuaGFzQ2xhc3ModGhpcy5wYW5lbCwgJ3AtY29ubmVjdGVkLW92ZXJsYXktdmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICB1bmJpbmRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnVuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5wYW5lbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5wYW5lbCk7XG4gICAgICAgICAgICB0aGlzLnBhbmVsID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubWV0ZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbmZvID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgUGFzc3dvcmRfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYXNzd29yZCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtcGFzc3dvcmQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3MoKVwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgcElucHV0VGV4dCBbbmdDbGFzc109XCJpbnB1dEZpZWxkQ2xhc3MoKVwiIFtuZ1N0eWxlXT1cImlucHV0U3R5bGVcIiBbY2xhc3NdPVwiaW5wdXRTdHlsZUNsYXNzXCIgW2F0dHIudHlwZV09XCJpbnB1dFR5cGUoKVwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3ZhbHVlXT1cInZhbHVlXCIgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50KVwiIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIiBcbiAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIiAvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJ0b2dnbGVNYXNrXCIgW25nQ2xhc3NdPVwidG9nZ2xlSWNvbkNsYXNzKClcIiAoY2xpY2spPVwib25NYXNrVG9nZ2xlKClcIj48L2k+XG4gICAgICAgICAgICA8ZGl2ICNvdmVybGF5ICpuZ0lmPVwib3ZlcmxheVZpc2libGVcIiBbbmdDbGFzc109XCIncC1wYXNzd29yZC1wYW5lbCBwLWNvbXBvbmVudCdcIiBcbiAgICAgICAgICAgICAgICBbQG92ZXJsYXlBbmltYXRpb25dPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3Nob3dUcmFuc2l0aW9uUGFyYW1zOiBzaG93VHJhbnNpdGlvbk9wdGlvbnMsIGhpZGVUcmFuc2l0aW9uUGFyYW1zOiBoaWRlVHJhbnNpdGlvbk9wdGlvbnN9fVwiIChAb3ZlcmxheUFuaW1hdGlvbi5zdGFydCk9XCJvbkFuaW1hdGlvblN0YXJ0KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudFRlbXBsYXRlOyBlbHNlIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcGFzc3dvcmQtbWV0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwic3RyZW5ndGhDbGFzcygpXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IG1ldGVyID8gbWV0ZXIud2lkdGggOiAnJ31cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1wYXNzd29yZC1pbmZvXCI+e3tpbmZvVGV4dH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignb3ZlcmxheUFuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgne3tzaG93VHJhbnNpdGlvblBhcmFtc319JylcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCd7e2hpZGVUcmFuc2l0aW9uUGFyYW1zfX0nLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtQYXNzd29yZF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFzc3dvcmQuY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsT25Jbml0IHtcbiAgICBcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHByb21wdExhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtZWRpdW1SZWdleDogc3RyaW5nID0gJ14oKCg/PS4qW2Etel0pKD89LipbQS1aXSkpfCgoPz0uKlthLXpdKSg/PS4qWzAtOV0pKXwoKD89LipbQS1aXSkoPz0uKlswLTldKSkpKD89Lns2LH0pJztcblxuICAgIEBJbnB1dCgpIHN0cm9uZ1JlZ2V4OiBzdHJpbmcgPSAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS57OCx9KSc7XG5cbiAgICBASW5wdXQoKSB3ZWFrTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG1lZGl1bUxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdHJvbmdMYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZmVlZGJhY2s6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgYXBwZW5kVG86IGFueTtcblxuICAgIEBJbnB1dCgpIHRvZ2dsZU1hc2s6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMTJzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xcyBsaW5lYXInO1xuXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIFxuICAgIG92ZXJsYXlWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBtZXRlcjogYW55O1xuICAgIFxuICAgIGluZm9UZXh0OiBzdHJpbmc7XG4gICAgXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIHVubWFza2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBtZWRpdW1DaGVja1JlZ0V4cDogYW55O1xuXG4gICAgc3Ryb25nQ2hlY2tSZWdFeHA6IGFueTtcblxuICAgIHJlc2l6ZUxpc3RlbmVyOiBhbnk7XG5cbiAgICBvdXRzaWRlQ2xpY2tMaXN0ZW5lcjogYW55O1xuXG4gICAgc2Nyb2xsSGFuZGxlcjogYW55O1xuXG4gICAgb3ZlcmxheTogYW55O1xuXG4gICAgdmFsdWU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGNvbmZpZzogUHJpbWVOR0NvbmZpZykge31cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZm9vdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbmZvVGV4dCA9IHRoaXMucHJvbXB0VGV4dCgpO1xuICAgICAgICB0aGlzLm1lZGl1bUNoZWNrUmVnRXhwID0gbmV3IFJlZ0V4cCh0aGlzLm1lZGl1bVJlZ2V4KTtcbiAgICAgICAgdGhpcy5zdHJvbmdDaGVja1JlZ0V4cCA9IG5ldyBSZWdFeHAodGhpcy5zdHJvbmdSZWdleCk7XG4gICAgfVxuXG4gICAgb25BbmltYXRpb25TdGFydChldmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQudG9TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5ID0gZXZlbnQuZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gU3RyaW5nKERvbUhhbmRsZXIuZ2VuZXJhdGVaSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsaWduT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kUmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd2b2lkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFwcGVuZENvbnRhaW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvID09PSAnYm9keScpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYXBwZW5kVG8pLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGlnbk92ZXJsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUubWluV2lkdGggPSBEb21IYW5kbGVyLmdldE91dGVyV2lkdGgodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSArICdweCc7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFic29sdXRlUG9zaXRpb24odGhpcy5vdmVybGF5LCB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5yZWxhdGl2ZVBvc2l0aW9uKHRoaXMub3ZlcmxheSwgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSW5wdXQoZXZlbnQpICB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5mZWVkYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmZlZWRiYWNrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgICAgICAgICAgbGV0IG1ldGVyID0gbnVsbDtcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRlc3RTdHJlbmd0aCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy53ZWFrVGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBtZXRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoOiAnd2VhaycsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMzLjMzJSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy5tZWRpdW1UZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIG1ldGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZW5ndGg6ICdtZWRpdW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc2Ni42NiUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IHRoaXMuc3Ryb25nVGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBtZXRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVuZ3RoOiAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IHRoaXMucHJvbXB0VGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBtZXRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1ldGVyID0gbWV0ZXI7XG4gICAgICAgICAgICB0aGlzLmluZm9UZXh0ID0gbGFiZWw7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5VmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAgICBcblxuICAgIG9uTWFza1RvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy51bm1hc2tlZCA9ICF0aGlzLnVubWFza2VkO1xuICAgIH1cblxuICAgIHRlc3RTdHJlbmd0aChzdHIpIHtcbiAgICAgICAgbGV0IGxldmVsID0gMDtcblxuICAgICAgICBpZiAodGhpcy5zdHJvbmdDaGVja1JlZ0V4cC50ZXN0KHN0cikpXG4gICAgICAgICAgICBsZXZlbCA9IDM7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWVkaXVtQ2hlY2tSZWdFeHAudGVzdChzdHIpKVxuICAgICAgICAgICAgbGV2ZWwgPSAyO1xuICAgICAgICBlbHNlIGlmIChzdHIubGVuZ3RoKVxuICAgICAgICAgICAgbGV2ZWwgPSAxO1xuXG4gICAgICAgIHJldHVybiBsZXZlbDtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICB9XG5cbiAgICBiaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBuZXcgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGJpbmRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kUmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udGFpbmVyQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7J3AtcGFzc3dvcmQgcC1jb21wb25lbnQgcC1pbnB1dHdyYXBwZXInOiB0cnVlLFxuICAgICAgICAgICAgJ3AtaW5wdXR3cmFwcGVyLWZpbGxlZCc6IHRoaXMuZmlsbGVkKCksXG4gICAgICAgICAgICAncC1pbnB1dHdyYXBwZXItZm9jdXMnOiB0aGlzLmZvY3VzZWQsXG4gICAgICAgICAgICAncC1pbnB1dC1pY29uLXJpZ2h0JzogdGhpcy50b2dnbGVNYXNrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaW5wdXRGaWVsZENsYXNzKCkge1xuICAgICAgICByZXR1cm4geydwLXBhc3N3b3JkLWlucHV0JyA6IHRydWUsIFxuICAgICAgICAgICAgICAgICdwLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRvZ2dsZUljb25DbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5tYXNrZWQgPyAncGkgcGktZXllLXNsYXNoJyA6ICdwaSBwaS1leWUnO1xuICAgIH1cblxuICAgIHN0cmVuZ3RoQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBgcC1wYXNzd29yZC1zdHJlbmd0aCAke3RoaXMubWV0ZXIgPyB0aGlzLm1ldGVyLnN0cmVuZ3RoIDogJyd9YDtcbiAgICB9XG5cbiAgICBmaWxsZWQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAhPSBudWxsICYmIHRoaXMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwKVxuICAgIH1cblxuICAgIHByb21wdFRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb21wdExhYmVsIHx8IHRoaXMuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLlBBU1NXT1JEX1BST01QVCk7XG4gICAgfVxuXG4gICAgd2Vha1RleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndlYWtMYWJlbCB8fCB0aGlzLmdldFRyYW5zbGF0aW9uKFRyYW5zbGF0aW9uS2V5cy5XRUFLKTtcbiAgICB9XG5cbiAgICBtZWRpdW1UZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZWRpdW1MYWJlbCB8fCB0aGlzLmdldFRyYW5zbGF0aW9uKFRyYW5zbGF0aW9uS2V5cy5NRURJVU0pO1xuICAgIH1cblxuICAgIHN0cm9uZ1RleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cm9uZ0xhYmVsIHx8IHRoaXMuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLlNUUk9ORyk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUFwcGVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyA9PT0gJ2JvZHknKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmFwcGVuZFRvKS5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXRUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bm1hc2tlZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnNsYXRpb24ob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdldFRyYW5zbGF0aW9uKG9wdGlvbik7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZUFwcGVuZCgpO1xuICAgICAgICB0aGlzLnVuYmluZFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElucHV0VGV4dE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1Bhc3N3b3JkRGlyZWN0aXZlLCBQYXNzd29yZF0sXG4gICAgZGVjbGFyYXRpb25zOiBbUGFzc3dvcmREaXJlY3RpdmUsIFBhc3N3b3JkXVxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZE1vZHVsZSB7IH1cbiJdfQ==