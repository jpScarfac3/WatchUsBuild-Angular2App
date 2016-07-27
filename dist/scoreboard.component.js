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
var core_1 = require('@angular/core');
var race_service_1 = require('./race.service');
var scoreboardItem_component_1 = require('./scoreboardItem.component');
var ScoreboardComponent = (function () {
    function ScoreboardComponent(raceService) {
        this.raceService = raceService;
        this.notifications = [];
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raceService.getRaces()
            .subscribe(function (data) { return _this.races = data; });
    };
    ScoreboardComponent = __decorate([
        core_1.Component({
            selector: "scoreboard",
            template: "\n    <header class=\"container\">\n    <h1>Scoreboard</h1>\n    <h3>Race Notifications</h3>\n    <ul>\n      <li *ngFor=\"let notification of notifications\">{{notification}}</li>\n    </ul>\n    </header>\n\n    <div class=\"container-fluid scoreboard-display\">\n      <div class=\"row\">\n        <div class=\"col-xs-4\" *ngFor=\"let race of races\">\n          <scoreboard-item [race]=\"race\" (notification)=\"notifications.unshift($event)\"></scoreboard-item>\n        </div>\n      </div>\n    </div>\n  ",
            directives: [scoreboardItem_component_1.ScoreboardItemComponent],
            providers: [race_service_1.RaceService]
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());
exports.ScoreboardComponent = ScoreboardComponent;
;
//# sourceMappingURL=scoreboard.component.js.map