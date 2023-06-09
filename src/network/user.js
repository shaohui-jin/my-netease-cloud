import { request } from '@/network/index.js'

/**
 * 用户歌单
 * @param params
 * @returns {*}
 */
export function getUserSongList(params) {
  return request({
    url: '/user/playlist',
    params
  })
}

export function getFm() {
  return request({
    url: `/personal_fm`
  })
}

export function getPlayInfo(uid) {
  return request({
    url: `/user/record`,
    params: {
      uid,
      type: 0
    }
  })
}

export function getFriend() {
  return request({
    url: `/event`,
    params: {
      pagesize: 10
    }
  })
}

export function getUserProfile() {
  return request({
    url: `/artist/sublist`
  })
}

export function getMyAlbum() {
  return request({
    url: `/album/sublist`
  })
}

export function likeMusic(id, like) {
  return request({
    url: `/like`,
    params: {
      id,
      like
    }
  })
}

export function getUserNum() {
  return request({
    url: `/user/subcount`
  })
}
