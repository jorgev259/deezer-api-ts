"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrack = void 0;
const got_1 = __importDefault(require("got"));
function getTrack(trackId) {
    return got_1.default(`https://api.deezer.com/track/${trackId}`).json();
}
exports.getTrack = getTrack;
