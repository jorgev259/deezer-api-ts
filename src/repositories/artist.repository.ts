import got from 'got'
import { ArtistAlbumResponse } from '../responses/artist-albums.response'
import { ArtistResponse } from '../responses/artist.response'
import { Paginable } from '../typings'

export function getArtist(artistId: number): Promise<ArtistResponse> {
  return got(`https://api.deezer.com/artist/${artistId}`).json()
}

export function getArtistAlbums(artistId: number): Promise<Paginable<ArtistAlbumResponse>> {
  return got(`https://api.deezer.com/artist/${artistId}/albums`).json()
}