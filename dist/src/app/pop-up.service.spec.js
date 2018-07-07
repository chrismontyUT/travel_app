"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var pop_up_service_1 = require("./pop-up.service");
describe('PopUpService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [pop_up_service_1.PopUpService]
        });
    });
    it('should be created', testing_1.inject([pop_up_service_1.PopUpService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=pop-up.service.spec.js.map