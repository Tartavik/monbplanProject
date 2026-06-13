import blueSquare from './blue_square.png'
import calendar from './images/calendar.png'
import heartFill from './images/heart-fill.png'
import plus from './images/plus.png'
import roundComment from './images/round-comment.png'
import tile from './tile.png'
import tileActive from './tile_active.png'

export const icons = {
  blueSquare,
  calendar,
  heartFill,
  plus,
  roundComment,
  tile,
  tileActive,
} as const

export type IconName = keyof typeof icons
