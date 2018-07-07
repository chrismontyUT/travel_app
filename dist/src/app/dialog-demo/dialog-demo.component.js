"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var my_dialog_component_1 = require("../my-dialog/my-dialog.component");
var DialogDemoComponent = /** @class */ (function () {
    function DialogDemoComponent(dialog) {
        this.dialog = dialog;
    }
    DialogDemoComponent.prototype.ngOnInit = function () {
    };
    DialogDemoComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(my_dialog_component_1.MyDialogComponent, {
            width: 'contain',
            data: 'This text is passed into the dialog!'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    DialogDemoComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog-demo',
            templateUrl: './dialog-demo.component.html',
            providers: [my_dialog_component_1.MyDialogComponent],
            styleUrls: ['./dialog-demo.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], DialogDemoComponent);
    return DialogDemoComponent;
}());
exports.DialogDemoComponent = DialogDemoComponent;
//# sourceMappingURL=dialog-demo.component.js.map