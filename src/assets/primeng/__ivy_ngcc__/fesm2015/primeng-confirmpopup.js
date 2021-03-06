import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationKeys, ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/button';

function ConfirmPopup_div_0_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r2.confirmation.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-confirm-popup-icon");
} }
function ConfirmPopup_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 9);
    ɵngcc0.ɵɵlistener("click", function ConfirmPopup_div_0_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.reject(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r3.confirmation.rejectButtonStyleClass || "p-button-text");
    ɵngcc0.ɵɵproperty("icon", ctx_r3.confirmation.rejectIcon)("label", ctx_r3.rejectButtonLabel)("ngClass", "p-confirm-popup-reject p-button-sm");
    ɵngcc0.ɵɵattribute("aria-label", ctx_r3.rejectButtonLabel);
} }
function ConfirmPopup_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 9);
    ɵngcc0.ɵɵlistener("click", function ConfirmPopup_div_0_button_8_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.accept(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r4.confirmation.acceptButtonStyleClass);
    ɵngcc0.ɵɵproperty("icon", ctx_r4.confirmation.acceptIcon)("label", ctx_r4.acceptButtonLabel)("ngClass", "p-confirm-popup-accept p-button-sm");
    ɵngcc0.ɵɵattribute("aria-label", ctx_r4.acceptButtonLabel);
} }
const _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c1 = function (a1) { return { value: "open", params: a1 }; };
function ConfirmPopup_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("@animation.start", function ConfirmPopup_div_0_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onAnimationStart($event); })("@animation.done", function ConfirmPopup_div_0_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onAnimationEnd($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 2, 3);
    ɵngcc0.ɵɵtemplate(3, ConfirmPopup_div_0_i_3_Template, 1, 3, "i", 4);
    ɵngcc0.ɵɵelementStart(4, "span", 5);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵtemplate(7, ConfirmPopup_div_0_button_7_Template, 1, 6, "button", 7);
    ɵngcc0.ɵɵtemplate(8, ConfirmPopup_div_0_button_8_Template, 1, 6, "button", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-confirm-popup p-component")("ngStyle", ctx_r0.style)("@animation", ɵngcc0.ɵɵpureFunction1(12, _c1, ɵngcc0.ɵɵpureFunction2(9, _c0, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.confirmation.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.confirmation.message);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.confirmation.rejectVisible !== false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.confirmation.acceptVisible !== false);
} }
class ConfirmPopup {
    constructor(el, confirmationService, renderer, cd, config) {
        this.el = el;
        this.confirmationService = confirmationService;
        this.renderer = renderer;
        this.cd = cd;
        this.config = config;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.subscription = this.confirmationService.requireConfirmation$.subscribe(confirmation => {
            if (!confirmation) {
                this.hide();
                return;
            }
            if (confirmation.key === this.key) {
                this.confirmation = confirmation;
                if (this.confirmation.accept) {
                    this.confirmation.acceptEvent = new EventEmitter();
                    this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
                }
                if (this.confirmation.reject) {
                    this.confirmation.rejectEvent = new EventEmitter();
                    this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
                }
                this.visible = true;
            }
        });
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        this.cd.markForCheck();
    }
    onAnimationStart(event) {
        if (event.toState === 'open') {
            this.container = event.element;
            document.body.appendChild(this.container);
            this.align();
            this.bindListeners();
        }
    }
    onAnimationEnd(event) {
        switch (event.toState) {
            case 'void':
                this.onContainerDestroy();
                break;
        }
    }
    align() {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
        }
        DomHandler.absolutePosition(this.container, this.confirmation.target);
        const containerOffset = DomHandler.getOffset(this.container);
        const targetOffset = DomHandler.getOffset(this.confirmation.target);
        let arrowLeft = 0;
        if (containerOffset.left < targetOffset.left) {
            arrowLeft = targetOffset.left - containerOffset.left;
        }
        this.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);
        if (containerOffset.top < targetOffset.top) {
            DomHandler.addClass(this.container, 'p-confirm-popup-flipped');
        }
    }
    hide() {
        this.visible = false;
    }
    accept() {
        if (this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide();
    }
    reject() {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
    }
    bindListeners() {
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
    }
    unbindListeners() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            let documentEvent = DomHandler.isIOS() ? 'touchstart' : 'click';
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : document;
            this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
                let targetElement = this.confirmation.target;
                if (this.container !== event.target && !this.container.contains(event.target) &&
                    targetElement !== event.target && !targetElement.contains(event.target)) {
                    this.hide();
                }
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    onWindowResize() {
        this.hide();
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
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.confirmation.target, () => {
                if (this.visible) {
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
    unsubscribeConfirmationSubscriptions() {
        if (this.confirmation) {
            if (this.confirmation.acceptEvent) {
                this.confirmation.acceptEvent.unsubscribe();
            }
            if (this.confirmation.rejectEvent) {
                this.confirmation.rejectEvent.unsubscribe();
            }
        }
    }
    onContainerDestroy() {
        this.unbindListeners();
        this.unsubscribeConfirmationSubscriptions();
        this.confirmation = null;
        this.container = null;
    }
    restoreAppend() {
        if (this.container) {
            document.body.removeChild(this.container);
        }
        this.onContainerDestroy();
    }
    get acceptButtonLabel() {
        return this.confirmation.acceptLabel || this.config.getTranslation(TranslationKeys.ACCEPT);
    }
    get rejectButtonLabel() {
        return this.confirmation.rejectLabel || this.config.getTranslation(TranslationKeys.REJECT);
    }
    ngOnDestroy() {
        this.restoreAppend();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ConfirmPopup.ɵfac = function ConfirmPopup_Factory(t) { return new (t || ConfirmPopup)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ConfirmationService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PrimeNGConfig)); };
ConfirmPopup.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ConfirmPopup, selectors: [["p-confirmPopup"]], inputs: { showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", visible: "visible", key: "key", style: "style", styleClass: "styleClass" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "p-confirm-popup-content"], ["content", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-confirm-popup-message"], [1, "p-confirm-popup-footer"], ["type", "button", "pButton", "", 3, "icon", "label", "ngClass", "class", "click", 4, "ngIf"], [3, "ngClass"], ["type", "button", "pButton", "", 3, "icon", "label", "ngClass", "click"]], template: function ConfirmPopup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ConfirmPopup_div_0_Template, 9, 14, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc3.ButtonDirective], styles: [".p-confirm-popup{margin-top:10px;position:absolute}.p-confirm-popup-flipped{margin-bottom:10px;margin-top:0}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;content:\" \";height:0;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);pointer-events:none;position:absolute;width:0}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after,.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{align-items:center;display:flex}"], encapsulation: 2, data: { animation: [
            trigger('animation', [
                state('void', style({
                    transform: 'scaleY(0.8)',
                    opacity: 0
                })),
                state('open', style({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                transition('void => open', animate('{{showTransitionParams}}')),
                transition('open => void', animate('{{hideTransitionParams}}')),
            ])
        ] }, changeDetection: 0 });
ConfirmPopup.ctorParameters = () => [
    { type: ElementRef },
    { type: ConfirmationService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: PrimeNGConfig }
];
ConfirmPopup.propDecorators = {
    key: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    visible: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmPopup, [{
        type: Component,
        args: [{
                selector: 'p-confirmPopup',
                template: `
        <div *ngIf="visible" [ngClass]="'p-confirm-popup p-component'" [ngStyle]="style" [class]="styleClass"
            [@animation]="{value: 'open', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}"
            (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)">
            <div #content class="p-confirm-popup-content">
                <i [ngClass]="'p-confirm-popup-icon'" [class]="confirmation.icon" *ngIf="confirmation.icon"></i>
                <span class="p-confirm-popup-message">{{confirmation.message}}</span>
            </div>
            <div class="p-confirm-popup-footer">
                <button type="button" pButton [icon]="confirmation.rejectIcon" [label]="rejectButtonLabel" (click)="reject()" [ngClass]="'p-confirm-popup-reject p-button-sm'"
                    [class]="confirmation.rejectButtonStyleClass || 'p-button-text'" *ngIf="confirmation.rejectVisible !== false" [attr.aria-label]="rejectButtonLabel"></button>
                <button type="button" pButton [icon]="confirmation.acceptIcon" [label]="acceptButtonLabel" (click)="accept()" [ngClass]="'p-confirm-popup-accept p-button-sm'"
                    [class]="confirmation.acceptButtonStyleClass" *ngIf="confirmation.acceptVisible !== false" [attr.aria-label]="acceptButtonLabel"></button>
            </div>
        </div>
    `,
                animations: [
                    trigger('animation', [
                        state('void', style({
                            transform: 'scaleY(0.8)',
                            opacity: 0
                        })),
                        state('open', style({
                            transform: 'translateY(0)',
                            opacity: 1
                        })),
                        transition('void => open', animate('{{showTransitionParams}}')),
                        transition('open => void', animate('{{hideTransitionParams}}')),
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-confirm-popup{margin-top:10px;position:absolute}.p-confirm-popup-flipped{margin-bottom:10px;margin-top:0}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;content:\" \";height:0;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);pointer-events:none;position:absolute;width:0}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after,.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{align-items:center;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.ConfirmationService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.PrimeNGConfig }]; }, { showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], visible: [{
            type: Input
        }], key: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
class ConfirmPopupModule {
}
ConfirmPopupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ConfirmPopupModule });
ConfirmPopupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ConfirmPopupModule_Factory(t) { return new (t || ConfirmPopupModule)(); }, imports: [[CommonModule, ButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ConfirmPopupModule, { declarations: function () { return [ConfirmPopup]; }, imports: function () { return [CommonModule, ButtonModule]; }, exports: function () { return [ConfirmPopup]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmPopupModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule],
                exports: [ConfirmPopup],
                declarations: [ConfirmPopup]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ConfirmPopup, ConfirmPopupModule };

//# sourceMappingURL=primeng-confirmpopup.js.map