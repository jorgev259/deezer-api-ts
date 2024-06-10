import got from 'got'
import { AlbumFansResponse } from '../responses/album-fans.response'
import { AlbumTracksResponse } from '../responses/album-tracks.response'
import { AlbumResponse } from '../responses/album.response'
import { Paginable } from '../typings'

export function getAlbum(albumId: number): Promise<AlbumResponse> {
  return got(`https://api.deezer.com/album/${albumId}`).json()
}

export async function getAlbumTracks(albumId: number, index: number = 0): Promise<Paginable<AlbumTracksResponse>> {
  const searchParams = { index }
  return got(`https://api.deezer.com/album/${albumId}/tracks`, { searchParams }).json()
}

export function getAlbumFans(albumId: number): Promise<Paginable<AlbumFansResponse>> {
  return got(`https://api.deezer.com/album/${albumId}/fans`).json()
}