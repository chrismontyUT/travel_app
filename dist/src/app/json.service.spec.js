"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var json_service_1 = require("./json.service");
describe('JsonService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [json_service_1.JsonService]
        });
    });
    it('should be created', testing_1.inject([json_service_1.JsonService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=json.service.spec.js.map