import { NgModule, Component, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { TerminalService } from './terminalservice';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

function Terminal_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.welcomeMessage);
} }
function Terminal_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "span", 8);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 9);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 10);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const command_r3 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.prompt);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(command_r3.text);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(command_r3.response);
} }
export class Terminal {
    constructor(el, terminalService, cd) {
        this.el = el;
        this.terminalService = terminalService;
        this.cd = cd;
        this.commands = [];
        this.subscription = terminalService.responseHandler.subscribe(response => {
            this.commands[this.commands.length - 1].response = response;
            this.commandProcessed = true;
        });
    }
    ngAfterViewInit() {
        this.container = DomHandler.find(this.el.nativeElement, '.p-terminal')[0];
    }
    ngAfterViewChecked() {
        if (this.commandProcessed) {
            this.container.scrollTop = this.container.scrollHeight;
            this.commandProcessed = false;
        }
    }
    set response(value) {
        if (value) {
            this.commands[this.commands.length - 1].response = value;
            this.commandProcessed = true;
        }
    }
    handleCommand(event) {
        if (event.keyCode == 13) {
            this.commands.push({ text: this.command });
            this.terminalService.sendCommand(this.command);
            this.command = '';
        }
    }
    focus(element) {
        element.focus();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
Terminal.ɵfac = function Terminal_Factory(t) { return new (t || Terminal)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(TerminalService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Terminal.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Terminal, selectors: [["p-terminal"]], inputs: { response: "response", welcomeMessage: "welcomeMessage", prompt: "prompt", style: "style", styleClass: "styleClass" }, decls: 9, vars: 8, consts: [[3, "ngClass", "ngStyle", "click"], [4, "ngIf"], [1, "p-terminal-content"], [4, "ngFor", "ngForOf"], [1, "p-terminal-prompt-container"], [1, "p-terminal-content-prompt"], ["type", "text", "autocomplete", "off", "autofocus", "", 1, "p-terminal-input", 3, "ngModel", "ngModelChange", "keydown"], ["in", ""], [1, "p-terminal-prompt"], [1, "p-terminal-command"], [1, "p-terminal-response"]], template: function Terminal_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function Terminal_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const _r2 = ɵngcc0.ɵɵreference(8); return ctx.focus(_r2); });
        ɵngcc0.ɵɵtemplate(1, Terminal_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, Terminal_div_3_Template, 7, 3, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "span", 5);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "input", 6, 7);
        ɵngcc0.ɵɵlistener("ngModelChange", function Terminal_Template_input_ngModelChange_7_listener($event) { return ctx.command = $event; })("keydown", function Terminal_Template_input_keydown_7_listener($event) { return ctx.handleCommand($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-terminal p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.welcomeMessage);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.commands);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.prompt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.command);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: [".p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{align-items:center;display:flex}.p-terminal-input{background-color:transparent;border:0;color:inherit;flex:1 1 auto;outline:0 none;padding:0}.p-terminal-input::-ms-clear{display:none}"], encapsulation: 2, changeDetection: 0 });
Terminal.ctorParameters = () => [
    { type: ElementRef },
    { type: TerminalService },
    { type: ChangeDetectorRef }
];
Terminal.propDecorators = {
    welcomeMessage: [{ type: Input }],
    prompt: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    response: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Terminal, [{
        type: Component,
        args: [{
                selector: 'p-terminal',
                template: `
        <div [ngClass]="'p-terminal p-component'" [ngStyle]="style" [class]="styleClass" (click)="focus(in)">
            <div *ngIf="welcomeMessage">{{welcomeMessage}}</div>
            <div class="p-terminal-content">
                <div *ngFor="let command of commands">
                    <span class="p-terminal-prompt">{{prompt}}</span>
                    <span class="p-terminal-command">{{command.text}}</span>
                    <div class="p-terminal-response">{{command.response}}</div>
                </div>
            </div>
            <div class="p-terminal-prompt-container">
                <span class="p-terminal-content-prompt">{{prompt}}</span>
                <input #in type="text" [(ngModel)]="command" class="p-terminal-input" autocomplete="off" (keydown)="handleCommand($event)" autofocus>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{align-items:center;display:flex}.p-terminal-input{background-color:transparent;border:0;color:inherit;flex:1 1 auto;outline:0 none;padding:0}.p-terminal-input::-ms-clear{display:none}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: TerminalService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { response: [{
            type: Input
        }], welcomeMessage: [{
            type: Input
        }], prompt: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class TerminalModule {
}
TerminalModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TerminalModule });
TerminalModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TerminalModule_Factory(t) { return new (t || TerminalModule)(); }, imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TerminalModule, { declarations: function () { return [Terminal]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [Terminal]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TerminalModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                exports: [Terminal],
                declarations: [Terminal]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy90ZXJtaW5hbC90ZXJtaW5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBMEMsS0FBSyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6SyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QmxELE1BQU0sT0FBTyxRQUFRO0FBQUcsSUFvQnBCLFlBQW1CLEVBQWMsRUFBUyxlQUFnQyxFQUFTLEVBQXFCO0FBQzVHLFFBRHVCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFRLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtBQUFDLFFBQVEsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQVZ6RyxhQUFRLEdBQVUsRUFBRSxDQUFDO0FBQ3pCLFFBVVEsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNqRixZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN4RSxZQUFZLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDekMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNYLElBQUksQ0FBQztBQUNMLElBQ0ksZUFBZTtBQUNuQixRQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRixJQUFJLENBQUM7QUFDTCxJQUNJLGtCQUFrQjtBQUN0QixRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO0FBQ25DLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFDbkUsWUFBWSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQzFDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLElBQ0ksUUFBUSxDQUFDLEtBQWE7QUFDOUIsUUFBUSxJQUFJLEtBQUssRUFBRTtBQUNuQixZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNyRSxZQUFZLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDekMsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksYUFBYSxDQUFDLEtBQW9CO0FBQ3RDLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtBQUNqQyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0FBQ3JELFlBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNELFlBQVksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDOUIsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksS0FBSyxDQUFDLE9BQW9CO0FBQzlCLFFBQVEsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hCLElBQUksQ0FBQztBQUNMLElBQ0ksV0FBVztBQUNmLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQy9CLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0w7b0NBckZDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUUsWUFBWSxrQkFDdEIsUUFBUSxFQUFFOzs7MEJBZVQ7QUFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Ozs7O0lBRXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswY0FDSTtBQUFDO0FBQWtDLFlBN0JrQyxVQUFVO0FBQUksWUFJaEYsZUFBZTtBQUFJLFlBSnNHLGlCQUFpQjtBQUFHO0FBQUc7QUFDOUksNkJBOEJMLEtBQUs7QUFBSyxxQkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyx1QkE4QlYsS0FBSztBQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWdDSCxNQUFNLE9BQU8sY0FBYztBQUFHOzBDQUw3QixRQUFRLFNBQUM7SUFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsV0FBVyxDQUFDLGtCQUNuQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQ25CLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMzQjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxBZnRlclZpZXdJbml0LEFmdGVyVmlld0NoZWNrZWQsT25EZXN0cm95LElucHV0LEVsZW1lbnRSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtUZXJtaW5hbFNlcnZpY2V9IGZyb20gJy4vdGVybWluYWxzZXJ2aWNlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSAgIGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdGVybWluYWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3AtdGVybWluYWwgcC1jb21wb25lbnQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIChjbGljayk9XCJmb2N1cyhpbilcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ3ZWxjb21lTWVzc2FnZVwiPnt7d2VsY29tZU1lc3NhZ2V9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdGVybWluYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbW1hbmQgb2YgY29tbWFuZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXRlcm1pbmFsLXByb21wdFwiPnt7cHJvbXB0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC10ZXJtaW5hbC1jb21tYW5kXCI+e3tjb21tYW5kLnRleHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdGVybWluYWwtcmVzcG9uc2VcIj57e2NvbW1hbmQucmVzcG9uc2V9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10ZXJtaW5hbC1wcm9tcHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXRlcm1pbmFsLWNvbnRlbnQtcHJvbXB0XCI+e3twcm9tcHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2luIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjb21tYW5kXCIgY2xhc3M9XCJwLXRlcm1pbmFsLWlucHV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgKGtleWRvd24pPVwiaGFuZGxlQ29tbWFuZCgkZXZlbnQpXCIgYXV0b2ZvY3VzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi90ZXJtaW5hbC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXJtaW5hbCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsQWZ0ZXJWaWV3Q2hlY2tlZCxPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgd2VsY29tZU1lc3NhZ2U6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHByb21wdDogc3RyaW5nO1xuICAgICAgICBcbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuICAgICAgICBcbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgICAgICAgICBcbiAgICBjb21tYW5kczogYW55W10gPSBbXTtcbiAgICBcbiAgICBjb21tYW5kOiBzdHJpbmc7XG4gICAgXG4gICAgY29udGFpbmVyOiBFbGVtZW50O1xuICAgIFxuICAgIGNvbW1hbmRQcm9jZXNzZWQ6IGJvb2xlYW47XG4gICAgXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgdGVybWluYWxTZXJ2aWNlOiBUZXJtaW5hbFNlcnZpY2UsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0ZXJtaW5hbFNlcnZpY2UucmVzcG9uc2VIYW5kbGVyLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzW3RoaXMuY29tbWFuZHMubGVuZ3RoIC0gMV0ucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZFByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gRG9tSGFuZGxlci5maW5kKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5wLXRlcm1pbmFsJylbMF07XG4gICAgfVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tbWFuZFByb2Nlc3NlZCkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wID0gdGhpcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgQElucHV0KClcbiAgICBzZXQgcmVzcG9uc2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHNbdGhpcy5jb21tYW5kcy5sZW5ndGggLSAxXS5yZXNwb25zZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBoYW5kbGVDb21tYW5kKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goe3RleHQ6IHRoaXMuY29tbWFuZH0pO1xuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbFNlcnZpY2Uuc2VuZENvbW1hbmQodGhpcy5jb21tYW5kKTtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZvY3VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLEZvcm1zTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbVGVybWluYWxdLFxuICAgIGRlY2xhcmF0aW9uczogW1Rlcm1pbmFsXVxufSlcbmV4cG9ydCBjbGFzcyBUZXJtaW5hbE1vZHVsZSB7IH0iXX0=