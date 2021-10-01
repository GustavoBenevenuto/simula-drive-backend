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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Questoes_1 = __importDefault(require("./Questoes"));
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    Feedback_1 = Feedback;
    var Feedback_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Feedback.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Feedback.prototype, "tipo_feedback", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Feedback.prototype, "mensagem", void 0);
    __decorate([
        typeorm_1.Column({ type: 'decimal', nullable: true, default: 0 }),
        __metadata("design:type", Number)
    ], Feedback.prototype, "avaliacao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Questoes_1.default; }, function (feedback) { return Feedback_1; }),
        typeorm_1.JoinColumn({ name: 'id_questao' }),
        __metadata("design:type", Questoes_1.default)
    ], Feedback.prototype, "questoes", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Feedback.prototype, "id_questao", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Feedback.prototype, "created_at", void 0);
    Feedback = Feedback_1 = __decorate([
        typeorm_1.Entity('feedback')
    ], Feedback);
    return Feedback;
}());
exports.default = Feedback;
