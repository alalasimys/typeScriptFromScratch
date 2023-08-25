var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DocumentItem = /** @class */ (function () {
    function DocumentItem() {
        this.setState(new DraftDocumentItemState());
    }
    DocumentItem.prototype.getState = function () {
        return this.state;
    };
    DocumentItem.prototype.setState = function (state) {
        this.state = state;
        this.state.setContext(this);
    };
    DocumentItem.prototype.publishDoc = function () {
        this.state.publish();
    };
    DocumentItem.prototype.deleteDoc = function () {
        this.state.delete();
    };
    return DocumentItem;
}());
var DocumentItemState = /** @class */ (function () {
    function DocumentItemState() {
    }
    DocumentItemState.prototype.setContext = function (item) {
        this.item = item;
    };
    return DocumentItemState;
}());
var DraftDocumentItemState = /** @class */ (function (_super) {
    __extends(DraftDocumentItemState, _super);
    function DraftDocumentItemState() {
        var _this = _super.call(this) || this;
        _this.name = 'DraftDocument';
        return _this;
    }
    DraftDocumentItemState.prototype.publish = function () {
        console.log("\u041D\u0430 \u0441\u0430\u0439\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u0442\u0435\u043A\u0441\u0442 ".concat(this.item.text));
        this.item.setState(new PublishDocumentItemState());
    };
    DraftDocumentItemState.prototype.delete = function () {
        console.log('Документ удалён');
    };
    return DraftDocumentItemState;
}(DocumentItemState));
var PublishDocumentItemState = /** @class */ (function (_super) {
    __extends(PublishDocumentItemState, _super);
    function PublishDocumentItemState() {
        var _this = _super.call(this) || this;
        _this.name = 'PublishDocument';
        return _this;
    }
    PublishDocumentItemState.prototype.publish = function () {
        console.log('Нельзя опубликовать опубликованный документ');
    };
    PublishDocumentItemState.prototype.delete = function () {
        console.log('Снято с публикации');
        this.item.setState(new DraftDocumentItemState());
    };
    return PublishDocumentItemState;
}(DocumentItemState));
var item = new DocumentItem();
item.text = 'Мой пост!';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
