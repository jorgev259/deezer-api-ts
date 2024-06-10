"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPodcasts = exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = void 0;
const got_1 = __importDefault(require("got"));
function searchAlbums(query, parameters) {
    return request('album', query, parameters);
}
exports.searchAlbums = searchAlbums;
function searchArtists(query, parameters) {
    return request('artist', query, parameters);
}
exports.searchArtists = searchArtists;
function searchTracks(query, parameters) {
    return request('track', query, parameters);
}
exports.searchTracks = searchTracks;
function searchPlaylists(query, parameters) {
    return request('playlist', query, parameters);
}
exports.searchPlaylists = searchPlaylists;
function searchPodcasts(query, parameters) {
    return request('playlist', query, parameters);
}
exports.searchPodcasts = searchPodcasts;
var Order;
(function (Order) {
    Order["RANKING"] = "RANKING";
    Order["TRACK_ASC"] = "TRACK_ASC";
    Order["TRACK_DESC"] = "TRACK_DESC";
    Order["ARTIST_ASC"] = "ARTIST_ASC";
    Order["ARTIST_DESC"] = "ARTIST_DESC";
    Order["ALBUM_ASC"] = "ALBUM_ASC";
    Order["ALBUM_DESC"] = "ALBUM_DESC";
    Order["RATING_ASC"] = "RATING_ASC";
    Order["RATING_DESC"] = "RATING_DESC";
    Order["DURATION_ASC"] = "DURATION_ASC";
    Order["DURATION_DESC"] = "DURATION_DESC";
})(Order || (Order = {}));
async function request(segment, query, parameters) {
    const q = typeof query === 'string' ? query : formatQuery(query);
    const searchParams = { ...parameters, q };
    return got_1.default('https://api.deezer.com/search/' + segment, { searchParams }).json();
}
function formatQuery(query) {
    return Object.keys(query)
        .map((key) => formatPair(key, query[key]))
        .join(' ');
}
function formatPair(key, value) {
    const formattedValue = typeof value == 'string'
        ? `"${value}"`
        : value;
    return `${key}:${formattedValue}`;
}
