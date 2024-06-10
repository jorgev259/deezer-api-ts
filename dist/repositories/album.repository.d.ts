import { AlbumFansResponse } from '../responses/album-fans.response';
import { AlbumTracksResponse } from '../responses/album-tracks.response';
import { AlbumResponse } from '../responses/album.response';
import { Paginable } from '../typings';
export declare function getAlbum(albumId: number): Promise<AlbumResponse>;
export declare function getAlbumTracks(albumId: number, index?: number): Promise<Paginable<AlbumTracksResponse>>;
export declare function getAlbumFans(albumId: number): Promise<Paginable<AlbumFansResponse>>;
