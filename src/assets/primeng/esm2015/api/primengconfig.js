import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterMatchMode } from './filtermatchmode';
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export class PrimeNGConfig {
    constructor() {
        this.ripple = false;
        this.filterMatchModeOptions = {
            text: [
                FilterMatchMode.STARTS_WITH,
                FilterMatchMode.CONTAINS,
                FilterMatchMode.NOT_CONTAINS,
                FilterMatchMode.ENDS_WITH,
                FilterMatchMode.EQUALS,
                FilterMatchMode.NOT_EQUALS
            ],
            numeric: [
                FilterMatchMode.EQUALS,
                FilterMatchMode.NOT_EQUALS,
                FilterMatchMode.LESS_THAN,
                FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
                FilterMatchMode.GREATER_THAN,
                FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
            ],
            date: [
                FilterMatchMode.DATE_IS,
                FilterMatchMode.DATE_IS_NOT,
                FilterMatchMode.DATE_BEFORE,
                FilterMatchMode.DATE_AFTER
            ]
        };
        this.translation = {
            startsWith: 'Starts with',
            contains: 'Contains',
            notContains: 'Not contains',
            endsWith: 'Ends with',
            equals: 'Equals',
            notEquals: 'Not equals',
            noFilter: 'No Filter',
            lt: 'Less than',
            lte: 'Less than or equal to',
            gt: 'Greater than',
            gte: 'Greater than or equal to',
            is: 'Is',
            isNot: 'Is not',
            before: 'Before',
            after: 'After',
            dateIs: 'Date is',
            dateIsNot: 'Date is not',
            dateBefore: 'Date is before',
            dateAfter: 'Date is after',
            clear: 'Clear',
            apply: 'Apply',
            matchAll: 'Match All',
            matchAny: 'Match Any',
            addRule: 'Add Rule',
            removeRule: 'Remove Rule',
            accept: 'Yes',
            reject: 'No',
            choose: 'Choose',
            upload: 'Upload',
            cancel: 'Cancel',
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: 'Today',
            weekHeader: 'Wk',
            weak: 'Weak',
            medium: 'Medium',
            strong: 'Strong',
            passwordPrompt: 'Enter a password'
        };
        this.translationSource = new Subject();
        this.translationObserver = this.translationSource.asObservable();
    }
    getTranslation(key) {
        return this.translation[key];
    }
    setTranslation(value) {
        this.translation = Object.assign(Object.assign({}, this.translation), value);
        this.translationSource.next(this.translation);
    }
}
PrimeNGConfig.ɵfac = function PrimeNGConfig_Factory(t) { return new (t || PrimeNGConfig)(); };
PrimeNGConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PrimeNGConfig_Factory() { return new PrimeNGConfig(); }, token: PrimeNGConfig, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PrimeNGConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWVuZ2NvbmZpZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9wcmltZW5nY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQ7O0FBR0EsTUFBTSxPQUFPLGFBQWE7QUFDMUIsSUFGQTtBQUFnQixRQUdaLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDNUIsUUFDSSwyQkFBc0IsR0FBRztBQUM3QixZQUFRLElBQUksRUFBRTtBQUNkLGdCQUFZLGVBQWUsQ0FBQyxXQUFXO0FBQ3ZDLGdCQUFZLGVBQWUsQ0FBQyxRQUFRO0FBQ3BDLGdCQUFZLGVBQWUsQ0FBQyxZQUFZO0FBQ3hDLGdCQUFZLGVBQWUsQ0FBQyxTQUFTO0FBQ3JDLGdCQUFZLGVBQWUsQ0FBQyxNQUFNO0FBQ2xDLGdCQUFZLGVBQWUsQ0FBQyxVQUFVO0FBQ3RDLGFBQVM7QUFDVCxZQUFRLE9BQU8sRUFBRTtBQUNqQixnQkFBWSxlQUFlLENBQUMsTUFBTTtBQUNsQyxnQkFBWSxlQUFlLENBQUMsVUFBVTtBQUN0QyxnQkFBWSxlQUFlLENBQUMsU0FBUztBQUNyQyxnQkFBWSxlQUFlLENBQUMscUJBQXFCO0FBQ2pELGdCQUFZLGVBQWUsQ0FBQyxZQUFZO0FBQ3hDLGdCQUFZLGVBQWUsQ0FBQyx3QkFBd0I7QUFDcEQsYUFBUztBQUNULFlBQVEsSUFBSSxFQUFFO0FBQ2QsZ0JBQVksZUFBZSxDQUFDLE9BQU87QUFDbkMsZ0JBQVksZUFBZSxDQUFDLFdBQVc7QUFDdkMsZ0JBQVksZUFBZSxDQUFDLFdBQVc7QUFDdkMsZ0JBQVksZUFBZSxDQUFDLFVBQVU7QUFDdEMsYUFBUztBQUNULFNBQUssQ0FBQztBQUNOLFFBQ1ksZ0JBQVcs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QVcsbUNBQU8sSUFBSSxDQUFDLFdBQVcsR0FBSyxLQUFLLENBQUMsQ0FBQztBQUMzRCxRQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RELElBQUksQ0FBQztBQUNMOzhGQUFDO0FBQUM7eUNBdEZELFVBQVUsU0FBQyxFQUFDO0FBQVUsRUFBRSxNQUFNLEVBQUM7O2dEQUMzQjtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmlsdGVyTWF0Y2hNb2RlIH0gZnJvbSAnLi9maWx0ZXJtYXRjaG1vZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuL3RyYW5zbGF0aW9uJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgUHJpbWVOR0NvbmZpZyB7XG5cbiAgICByaXBwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGZpbHRlck1hdGNoTW9kZU9wdGlvbnMgPSB7XG4gICAgICAgIHRleHQ6IFtcbiAgICAgICAgICAgIEZpbHRlck1hdGNoTW9kZS5TVEFSVFNfV0lUSCxcbiAgICAgICAgICAgIEZpbHRlck1hdGNoTW9kZS5DT05UQUlOUyxcbiAgICAgICAgICAgIEZpbHRlck1hdGNoTW9kZS5OT1RfQ09OVEFJTlMsXG4gICAgICAgICAgICBGaWx0ZXJNYXRjaE1vZGUuRU5EU19XSVRILFxuICAgICAgICAgICAgRmlsdGVyTWF0Y2hNb2RlLkVRVUFMUyxcbiAgICAgICAgICAgIEZpbHRlck1hdGNoTW9kZS5OT1RfRVFVQUxTXG4gICAgICAgIF0sXG4gICAgICAgIG51bWVyaWM6IFtcbiAgICAgICAgICAgIEZpbHRlck1hdGNoTW9kZS5FUVVBTFMsXG4gICAgICAgICAgICBGaWx0ZXJNYXRjaE1vZGUuTk9UX0VRVUFMUyxcbiAgICAgICAgICAgIEZpbHRlck1hdGNoTW9kZS5MRVNTX1RIQU4sXG4gICAgICAgICAgICBGaWx0ZXJNYXRjaE1vZGUuTEVTU19USEFOX09SX0VRVUFMX1RPLFxuICAgICAgICAgICAgRmlsdGVyTWF0Y2hNb2RlLkdSRUFURVJfVEhBTixcbiAgICAgICAgICAgIEZpbHRlck1hdGNoTW9kZS5HUkVBVEVSX1RIQU5fT1JfRVFVQUxfVE9cbiAgICAgICAgXSxcbiAgICAgICAgZGF0ZTogW1xuICAgICAgICAgICAgRmlsdGVyTWF0Y2hNb2RlLkRBVEVfSVMsXG4gICAgICAgICAgICBGaWx0ZXJNYXRjaE1vZGUuREFURV9JU19OT1QsXG4gICAgICAgICAgICBGaWx0ZXJNYXRjaE1vZGUuREFURV9CRUZPUkUsXG4gICAgICAgICAgICBGaWx0ZXJNYXRjaE1vZGUuREFURV9BRlRFUlxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uID0ge1xuICAgICAgICBzdGFydHNXaXRoOiAnU3RhcnRzIHdpdGgnLFxuICAgICAgICBjb250YWluczogJ0NvbnRhaW5zJyxcbiAgICAgICAgbm90Q29udGFpbnM6ICdOb3QgY29udGFpbnMnLFxuICAgICAgICBlbmRzV2l0aDogJ0VuZHMgd2l0aCcsXG4gICAgICAgIGVxdWFsczogJ0VxdWFscycsXG4gICAgICAgIG5vdEVxdWFsczogJ05vdCBlcXVhbHMnLFxuICAgICAgICBub0ZpbHRlcjogJ05vIEZpbHRlcicsXG4gICAgICAgIGx0OiAnTGVzcyB0aGFuJyxcbiAgICAgICAgbHRlOiAnTGVzcyB0aGFuIG9yIGVxdWFsIHRvJyxcbiAgICAgICAgZ3Q6ICdHcmVhdGVyIHRoYW4nLFxuICAgICAgICBndGU6ICdHcmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8nLFxuICAgICAgICBpczogJ0lzJyxcbiAgICAgICAgaXNOb3Q6ICdJcyBub3QnLFxuICAgICAgICBiZWZvcmU6ICdCZWZvcmUnLFxuICAgICAgICBhZnRlcjogJ0FmdGVyJyxcbiAgICAgICAgZGF0ZUlzOiAnRGF0ZSBpcycsXG4gICAgICAgIGRhdGVJc05vdDogJ0RhdGUgaXMgbm90JyxcbiAgICAgICAgZGF0ZUJlZm9yZTogJ0RhdGUgaXMgYmVmb3JlJyxcbiAgICAgICAgZGF0ZUFmdGVyOiAnRGF0ZSBpcyBhZnRlcicsXG4gICAgICAgIGNsZWFyOiAnQ2xlYXInLFxuICAgICAgICBhcHBseTogJ0FwcGx5JyxcbiAgICAgICAgbWF0Y2hBbGw6ICdNYXRjaCBBbGwnLFxuICAgICAgICBtYXRjaEFueTogJ01hdGNoIEFueScsXG4gICAgICAgIGFkZFJ1bGU6ICdBZGQgUnVsZScsXG4gICAgICAgIHJlbW92ZVJ1bGU6ICdSZW1vdmUgUnVsZScsXG4gICAgICAgIGFjY2VwdDogJ1llcycsXG4gICAgICAgIHJlamVjdDogJ05vJyxcbiAgICAgICAgY2hvb3NlOiAnQ2hvb3NlJyxcbiAgICAgICAgdXBsb2FkOiAnVXBsb2FkJyxcbiAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgZGF5TmFtZXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICAgICAgICBkYXlOYW1lc1Nob3J0OiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gICAgICAgIGRheU5hbWVzTWluOiBbXCJTdVwiLFwiTW9cIixcIlR1XCIsXCJXZVwiLFwiVGhcIixcIkZyXCIsXCJTYVwiXSxcbiAgICAgICAgbW9udGhOYW1lczogW1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLFxuICAgICAgICBtb250aE5hbWVzU2hvcnQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgICAgICB0b2RheTogJ1RvZGF5JyxcbiAgICAgICAgd2Vla0hlYWRlcjogJ1drJyxcbiAgICAgICAgd2VhazogJ1dlYWsnLFxuICAgICAgICBtZWRpdW06ICdNZWRpdW0nLFxuICAgICAgICBzdHJvbmc6ICdTdHJvbmcnLFxuICAgICAgICBwYXNzd29yZFByb21wdDogJ0VudGVyIGEgcGFzc3dvcmQnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBcbiAgICB0cmFuc2xhdGlvbk9ic2VydmVyID0gdGhpcy50cmFuc2xhdGlvblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICBcbiAgICBnZXRUcmFuc2xhdGlvbihrZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbltrZXldO1xuICAgIH1cblxuICAgIHNldFRyYW5zbGF0aW9uKHZhbHVlOiBUcmFuc2xhdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uID0gey4uLnRoaXMudHJhbnNsYXRpb24sIC4uLnZhbHVlfTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvblNvdXJjZS5uZXh0KHRoaXMudHJhbnNsYXRpb24pO1xuICAgIH1cbn0iXX0=