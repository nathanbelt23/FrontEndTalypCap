import { ElementRef, OnDestroy, DoCheck, NgZone, OnInit, QueryList, TemplateRef, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/inputtext';
export declare class PasswordDirective implements OnDestroy, DoCheck {
    el: ElementRef;
    zone: NgZone;
    promptLabel: string;
    weakLabel: string;
    mediumLabel: string;
    strongLabel: string;
    feedback: boolean;
    set showPassword(show: boolean);
    panel: HTMLDivElement;
    meter: any;
    info: any;
    filled: boolean;
    scrollHandler: any;
    documentResizeListener: any;
    constructor(el: ElementRef, zone: NgZone);
    ngDoCheck(): void;
    onInput(e: any): void;
    updateFilledState(): void;
    createPanel(): void;
    showOverlay(): void;
    hideOverlay(): void;
    onFocus(): void;
    onBlur(): void;
    onKeyup(e: any): void;
    testStrength(str: string): number;
    normalize(x: any, y: any): number;
    get disabled(): boolean;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    onWindowResize(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PasswordDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PasswordDirective, "[pPassword]", never, { "promptLabel": "promptLabel"; "weakLabel": "weakLabel"; "mediumLabel": "mediumLabel"; "strongLabel": "strongLabel"; "feedback": "feedback"; "showPassword": "showPassword"; }, {}, never>;
}
export declare const Password_VALUE_ACCESSOR: any;
export declare class Password implements AfterContentInit, OnInit {
    private cd;
    private config;
    disabled: boolean;
    promptLabel: string;
    mediumRegex: string;
    strongRegex: string;
    weakLabel: string;
    mediumLabel: string;
    strongLabel: string;
    feedback: boolean;
    appendTo: any;
    toggleMask: boolean;
    inputStyleClass: string;
    styleClass: string;
    style: any;
    inputStyle: any;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    placeholder: string;
    input: ElementRef;
    contentTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    templates: QueryList<any>;
    overlayVisible: boolean;
    meter: any;
    infoText: string;
    focused: boolean;
    unmasked: boolean;
    mediumCheckRegExp: any;
    strongCheckRegExp: any;
    resizeListener: any;
    outsideClickListener: any;
    scrollHandler: any;
    overlay: any;
    value: string;
    onModelChange: Function;
    onModelTouched: Function;
    constructor(cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    onAnimationStart(event: any): void;
    appendContainer(): void;
    alignOverlay(): void;
    onInput(event: any): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onKeyUp(event: any): void;
    onMaskToggle(): void;
    testStrength(str: any): number;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    bindScrollListener(): void;
    bindResizeListener(): void;
    unbindScrollListener(): void;
    unbindResizeListener(): void;
    unbindOutsideClickListener(): void;
    containerClass(): {
        'p-password p-component p-inputwrapper': boolean;
        'p-inputwrapper-filled': boolean;
        'p-inputwrapper-focus': boolean;
        'p-input-icon-right': boolean;
    };
    inputFieldClass(): {
        'p-password-input': boolean;
        'p-disabled': boolean;
    };
    toggleIconClass(): "pi pi-eye-slash" | "pi pi-eye";
    strengthClass(): string;
    filled(): boolean;
    promptText(): any;
    weakText(): any;
    mediumText(): any;
    strongText(): any;
    restoreAppend(): void;
    inputType(): "text" | "password";
    getTranslation(option: string): any;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Password, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Password, "p-password", never, { "mediumRegex": "mediumRegex"; "strongRegex": "strongRegex"; "feedback": "feedback"; "showTransitionOptions": "showTransitionOptions"; "hideTransitionOptions": "hideTransitionOptions"; "disabled": "disabled"; "promptLabel": "promptLabel"; "weakLabel": "weakLabel"; "mediumLabel": "mediumLabel"; "strongLabel": "strongLabel"; "appendTo": "appendTo"; "toggleMask": "toggleMask"; "inputStyleClass": "inputStyleClass"; "styleClass": "styleClass"; "style": "style"; "inputStyle": "inputStyle"; "placeholder": "placeholder"; }, {}, ["templates"], never>;
}
export declare class PasswordModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<PasswordModule, [typeof PasswordDirective, typeof Password], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.InputTextModule], [typeof PasswordDirective, typeof Password]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<PasswordModule>;
}

//# sourceMappingURL=password.d.ts.map