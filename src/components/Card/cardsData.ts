import type { ImageName } from '../../shared/assets/imageRegistry'
import type { CardMetrics } from './types'

export interface CardData {
  id: number
  image: ImageName
  imageAlt: string
  selectedDateMetrics: CardMetrics
  todayMetrics: CardMetrics
  uploadedAt: Date
}

export const cardsData: CardData[] = [
  {
    id: 1,
    image: 'image1',
    imageAlt: 'Forest landscape',
    todayMetrics: { likes: 128, comments: 31 },
    selectedDateMetrics: { likes: 67, comments: 22 },
    uploadedAt: new Date(2016, 3, 11),
  },
  {
    id: 2,
    image: 'image2',
    imageAlt: 'Ocean landscape',
    todayMetrics: { likes: 94, comments: 18 },
    selectedDateMetrics: { likes: 52, comments: 14 },
    uploadedAt: new Date(2016, 4, 9),
  },
  {
    id: 3,
    image: 'image3',
    imageAlt: 'Mountain landscape',
    todayMetrics: { likes: 156, comments: 42 },
    selectedDateMetrics: { likes: 81, comments: 27 },
    uploadedAt: new Date(2016, 5, 2),
  },
  {
    id: 4,
    image: 'image4',
    imageAlt: 'Woodland landscape',
    todayMetrics: { likes: 103, comments: 24 },
    selectedDateMetrics: { likes: 59, comments: 19 },
    uploadedAt: new Date(2016, 6, 18),
  },
  {
    id: 5,
    image: 'image5',
    imageAlt: 'Minimal landscape',
    todayMetrics: { likes: 76, comments: 12 },
    selectedDateMetrics: { likes: 43, comments: 9 },
    uploadedAt: new Date(2016, 7, 7),
  },
  {
    id: 6,
    image: 'image6',
    imageAlt: 'Dark landscape',
    todayMetrics: { likes: 132, comments: 36 },
    selectedDateMetrics: { likes: 74, comments: 23 },
    uploadedAt: new Date(2016, 8, 15),
  },
  {
    id: 7,
    image: 'image7',
    imageAlt: 'City landscape',
    todayMetrics: { likes: 118, comments: 29 },
    selectedDateMetrics: { likes: 63, comments: 17 },
    uploadedAt: new Date(2016, 9, 23),
  },
  {
    id: 8,
    image: 'image8',
    imageAlt: 'Colorful landscape',
    todayMetrics: { likes: 147, comments: 39 },
    selectedDateMetrics: { likes: 88, comments: 26 },
    uploadedAt: new Date(2016, 10, 4),
  },
]
