"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbumFans = exports.getAlbumTracks = exports.getAlbum = void 0;
const got_1 = __importDefault(require("got"));
function getAlbum(albumId) {
    return got_1.default(`https://api.deezer.com/album/${albumId}`).json();
}
exports.getAlbum = getAlbum;
async function getAlbumTracks(albumId, index = 0) {
    const searchParams = { index };
    return got_1.default(`https://api.deezer.com/album/${albumId}/tracks`, { searchParams }).json();
}
exports.getAlbumTracks = getAlbumTracks;
function getAlbumFans(albumId) {
    return got_1.default(`https://api.deezer.com/album/${albumId}/fans`).json();
}
exports.getAlbumFans = getAlbumFans;
