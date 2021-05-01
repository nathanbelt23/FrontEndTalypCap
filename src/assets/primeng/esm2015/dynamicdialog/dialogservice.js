import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { DynamicDialogComponent } from './dynamicdialog';
import { DynamicDialogInjector } from './dynamicdialog-injector';
import { DynamicDialogConfig } from './dynamicdialog-config';
import { DynamicDialogRef } from './dynamicdialog-ref';
import * as ɵngcc0 from '@angular/core';
export class DialogService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.dialogComponentRefMap = new Map();
    }
    open(componentType, config) {
        const dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRefMap.get(dialogRef).instance.childComponentType = componentType;
        return dialogRef;
    }
    appendDialogComponentToBody(config) {
        const map = new WeakMap();
        map.set(DynamicDialogConfig, config);
        const dialogRef = new DynamicDialogRef();
        map.set(DynamicDialogRef, dialogRef);
        const sub = dialogRef.onClose.subscribe(() => {
            this.dialogComponentRefMap.get(dialogRef).instance.close();
        });
        const destroySub = dialogRef.onDestroy.subscribe(() => {
            this.removeDialogComponentFromBody(dialogRef);
            destroySub.unsubscribe();
            sub.unsubscribe();
        });
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicDialogComponent);
        const componentRef = componentFactory.create(new DynamicDialogInjector(this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        const domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRefMap.set(dialogRef, componentRef);
        return dialogRef;
    }
    removeDialogComponentFromBody(dialogRef) {
        if (!dialogRef || !this.dialogComponentRefMap.has(dialogRef)) {
            return;
        }
        const dialogComponentRef = this.dialogComponentRefMap.get(dialogRef);
        this.appRef.detachView(dialogComponentRef.hostView);
        dialogComponentRef.destroy();
        this.dialogComponentRefMap.delete(dialogRef);
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
DialogService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac });
DialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DialogService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.Injector }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2R5bmFtaWNkaWFsb2cvZGlhbG9nc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUd2RCxNQUFNLE9BQU8sYUFBYTtBQUMxQixJQUdJLFlBQW9CLHdCQUFrRCxFQUFVLE1BQXNCLEVBQVUsUUFBa0I7QUFDdEksUUFEd0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtBQUFDLFFBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7QUFBQyxRQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7QUFBQyxRQUZuSSwwQkFBcUIsR0FBZ0UsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNuRyxJQUVJLENBQUM7QUFDTCxJQUNXLElBQUksQ0FBQyxhQUF3QixFQUFFLE1BQTJCO0FBQ3JFLFFBQVEsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25FLFFBQ1EsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDO0FBQzlGLFFBQ1EsT0FBTyxTQUFTLENBQUM7QUFDekIsSUFBSSxDQUFDO0FBQ0wsSUFDWSwyQkFBMkIsQ0FBQyxNQUEyQjtBQUNuRSxRQUFRLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDbEMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLFFBQ1EsTUFBTSxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ2pELFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM3QyxRQUNRLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNyRCxZQUFZLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZFLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxRQUNRLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUM5RCxZQUFZLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxRCxZQUFZLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyQyxZQUFZLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gsUUFDUSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQy9HLFFBQVEsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BHLFFBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELFFBQ1EsTUFBTSxPQUFPLEdBQUksWUFBWSxDQUFDLFFBQWlDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztBQUNwRyxRQUFRLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLFFBQ1EsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDaEUsUUFDUSxPQUFPLFNBQVMsQ0FBQztBQUN6QixJQUFJLENBQUM7QUFDTCxJQUNZLDZCQUE2QixDQUFDLFNBQTJCO0FBQ3JFLFFBQVEsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDdEUsWUFBWSxPQUFPO0FBQ25CLFNBQVM7QUFDVCxRQUNRLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3RSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVELFFBQVEsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDckMsUUFBUSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JELElBQUksQ0FBQztBQUNMO3lDQXhEQyxVQUFVO3VHQUNUO0FBQUM7QUFFUyxZQVRTLHdCQUF3QjtBQUFJLFlBQUYsY0FBYztBQUFJLFlBQUYsUUFBUTtBQUFHOzs7cUpBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQXBwbGljYXRpb25SZWYsIEluamVjdG9yLCBUeXBlLCBFbWJlZGRlZFZpZXdSZWYsIENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHluYW1pY0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pY2RpYWxvZyc7XG5pbXBvcnQgeyBEeW5hbWljRGlhbG9nSW5qZWN0b3IgfSBmcm9tICcuL2R5bmFtaWNkaWFsb2ctaW5qZWN0b3InO1xuaW1wb3J0IHsgRHluYW1pY0RpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZHluYW1pY2RpYWxvZy1jb25maWcnO1xuaW1wb3J0IHsgRHluYW1pY0RpYWxvZ1JlZiB9IGZyb20gJy4vZHluYW1pY2RpYWxvZy1yZWYnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG5cbiAgICBkaWFsb2dDb21wb25lbnRSZWZNYXA6IE1hcDxEeW5hbWljRGlhbG9nUmVmLCBDb21wb25lbnRSZWY8RHluYW1pY0RpYWxvZ0NvbXBvbmVudD4+ID0gbmV3IE1hcCgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PiwgY29uZmlnOiBEeW5hbWljRGlhbG9nQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuYXBwZW5kRGlhbG9nQ29tcG9uZW50VG9Cb2R5KGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5kaWFsb2dDb21wb25lbnRSZWZNYXAuZ2V0KGRpYWxvZ1JlZikuaW5zdGFuY2UuY2hpbGRDb21wb25lbnRUeXBlID0gY29tcG9uZW50VHlwZTtcblxuICAgICAgICByZXR1cm4gZGlhbG9nUmVmO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwZW5kRGlhbG9nQ29tcG9uZW50VG9Cb2R5KGNvbmZpZzogRHluYW1pY0RpYWxvZ0NvbmZpZykge1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICBtYXAuc2V0KER5bmFtaWNEaWFsb2dDb25maWcsIGNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gbmV3IER5bmFtaWNEaWFsb2dSZWYoKTtcbiAgICAgICAgbWFwLnNldChEeW5hbWljRGlhbG9nUmVmLCBkaWFsb2dSZWYpO1xuXG4gICAgICAgIGNvbnN0IHN1YiA9IGRpYWxvZ1JlZi5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZk1hcC5nZXQoZGlhbG9nUmVmKS5pbnN0YW5jZS5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZXN0cm95U3ViID0gZGlhbG9nUmVmLm9uRGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVEaWFsb2dDb21wb25lbnRGcm9tQm9keShkaWFsb2dSZWYpO1xuICAgICAgICAgICAgZGVzdHJveVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShEeW5hbWljRGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUobmV3IER5bmFtaWNEaWFsb2dJbmplY3Rvcih0aGlzLmluamVjdG9yLCBtYXApKTtcblxuICAgICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICAgICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcblxuICAgICAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZk1hcC5zZXQoZGlhbG9nUmVmLCBjb21wb25lbnRSZWYpO1xuXG4gICAgICAgIHJldHVybiBkaWFsb2dSZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVEaWFsb2dDb21wb25lbnRGcm9tQm9keShkaWFsb2dSZWY6IER5bmFtaWNEaWFsb2dSZWYpIHtcbiAgICAgICAgaWYgKCFkaWFsb2dSZWYgfHwgIXRoaXMuZGlhbG9nQ29tcG9uZW50UmVmTWFwLmhhcyhkaWFsb2dSZWYpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaWFsb2dDb21wb25lbnRSZWYgPSB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZk1hcC5nZXQoZGlhbG9nUmVmKTtcbiAgICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyhkaWFsb2dDb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgICBkaWFsb2dDb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZk1hcC5kZWxldGUoZGlhbG9nUmVmKTtcbiAgICB9XG59XG4iXX0=