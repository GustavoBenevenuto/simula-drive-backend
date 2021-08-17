"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppError = /** @class */ (function () {
    function AppError(mensagem, statusCode) {
        this.mensagem = mensagem;
        this.statusCode = statusCode;
    }
    return AppError;
}());
exports.default = AppError;
