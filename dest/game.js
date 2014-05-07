var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "tixel", "scenes/galvus"], function(require, exports, Txl, TitleScene) {
    var AlienSquad = (function (_super) {
        __extends(AlienSquad, _super);
        function AlienSquad() {
            _super.call(this);
            this.scene = new TitleScene(this);
            this.start();
        }
        return AlienSquad;
    })(Txl.Game);

    var game = new AlienSquad();
});