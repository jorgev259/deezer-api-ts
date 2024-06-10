"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArtistAlbums = exports.getArtist = void 0;
const got_1 = __importDefault(require("got"));
function getArtist(artistId) {
    return got_1.default(`https://api.deezer.com/artist/${artistId}`).json();
}
exports.getArtist = getArtist;
function getArtistAlbums(artistId) {
    return got_1.default(`https://api.deezer.com/artist/${artistId}/albums`).json();
}
exports.getArtistAlbums = getArtistAlbums;
