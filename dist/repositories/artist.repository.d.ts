import { ArtistAlbumResponse } from '../responses/artist-albums.response';
import { ArtistResponse } from '../responses/artist.response';
import { Paginable } from '../typings';
export declare function getArtist(artistId: number): Promise<ArtistResponse>;
export declare function getArtistAlbums(artistId: number): Promise<Paginable<ArtistAlbumResponse>>;
