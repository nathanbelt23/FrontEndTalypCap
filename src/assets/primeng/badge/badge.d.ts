import { OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/api';
export declare class BadgeDirective implements AfterViewInit, OnDestroy {
    el: ElementRef;
    iconPos: 'left' | 'right' | 'top' | 'bottom';
    _value: string;
    initialized: boolean;
    private id;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    get value(): string;
    set value(val: string);
    severity: string;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BadgeDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BadgeDirective, "[pBadge]", never, { "iconPos": "iconPos"; "value": "value"; "severity": "severity"; }, {}, never>;
}
export declare class Badge {
    styleClass: string;
    style: any;
    size: string;
    severity: string;
    value: string;
    containerClass(): {
        'p-badge p-component': boolean;
        'p-badge-no-gutter': boolean;
        'p-badge-lg': boolean;
        'p-badge-xl': boolean;
        'p-badge-info': boolean;
        'p-badge-success': boolean;
        'p-badge-warning': boolean;
        'p-badge-danger': boolean;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Badge, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Badge, "p-badge", never, { "styleClass": "styleClass"; "style": "style"; "size": "size"; "severity": "severity"; "value": "value"; }, {}, never, never>;
}
export declare class BadgeModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<BadgeModule, [typeof Badge, typeof BadgeDirective], [typeof ɵngcc1.CommonModule], [typeof Badge, typeof BadgeDirective, typeof ɵngcc2.SharedModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<BadgeModule>;
}

//# sourceMappingURL=badge.d.ts.map