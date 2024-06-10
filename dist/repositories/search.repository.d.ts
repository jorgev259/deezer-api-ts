import { SearchAlbumResponse } from '../responses/search-album.response';
import { SearchArtistResponse } from '../responses/search-artist.response';
import { SearchPlaylistResponse } from '../responses/search-playlist.response';
import { SearchPodcastResponse } from '../responses/search-podcast.response';
import { SearchTrackResponse } from '../responses/search-track.response';
import { Paginable } from '../typings';
export declare function searchAlbums(query: string | Query, parameters?: OptionalParameters): Promise<Paginable<SearchAlbumResponse>>;
export declare function searchArtists(query: string | Query, parameters?: OptionalParameters): Promise<Paginable<SearchArtistResponse>>;
export declare function searchTracks(query: string | Query, parameters?: OptionalParameters): Promise<Paginable<SearchTrackResponse>>;
export declare function searchPlaylists(query: string | Query, parameters?: OptionalParameters): Promise<Paginable<SearchPlaylistResponse>>;
export declare function searchPodcasts(query: string | Query, parameters?: OptionalParameters): Promise<Paginable<SearchPodcastResponse>>;
declare enum Order {
    RANKING = "RANKING",
    TRACK_ASC = "TRACK_ASC",
    TRACK_DESC = "TRACK_DESC",
    ARTIST_ASC = "ARTIST_ASC",
    ARTIST_DESC = "ARTIST_DESC",
    ALBUM_ASC = "ALBUM_ASC",
    ALBUM_DESC = "ALBUM_DESC",
    RATING_ASC = "RATING_ASC",
    RATING_DESC = "RATING_DESC",
    DURATION_ASC = "DURATION_ASC",
    DURATION_DESC = "DURATION_DESC"
}
interface OptionalParameters {
    strict?: 'on';
    order?: Order;
    index?: number;
}
interface Query {
    artist?: string;
    album?: string;
    track?: string;
    label?: string;
    dur_min?: number;
    dur_max?: number;
    bpm_min?: number;
    bpm_max?: number;
}
export {};
