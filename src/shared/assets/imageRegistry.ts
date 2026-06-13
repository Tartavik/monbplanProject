import image1Png from './images/image_1.png'
import image1Webp from './images/image_1.webp'
import image2Png from './images/image_2.png'
import image2Webp from './images/image_2.webp'
import image3Png from './images/image_3.png'
import image3Webp from './images/image_3.webp'
import image4Png from './images/image_4.png'
import image4Webp from './images/image_4.webp'
import image5Png from './images/image_5.png'
import image5Webp from './images/image_5.webp'
import image6Png from './images/image_6.png'
import image6Webp from './images/image_6.webp'
import image7Png from './images/image_7.png'
import image7Webp from './images/image_7.webp'
import image8Png from './images/image_8.png'
import image8Webp from './images/image_8.webp'
import logoPng from './images/Logo.png'
import logoWebp from './images/Logo.webp'

export const images = {
  image1: {
    png: image1Png,
    webp: image1Webp,
  },
  image2: {
    png: image2Png,
    webp: image2Webp,
  },
  image3: {
    png: image3Png,
    webp: image3Webp,
  },
  image4: {
    png: image4Png,
    webp: image4Webp,
  },
  image5: {
    png: image5Png,
    webp: image5Webp,
  },
  image6: {
    png: image6Png,
    webp: image6Webp,
  },
  image7: {
    png: image7Png,
    webp: image7Webp,
  },
  image8: {
    png: image8Png,
    webp: image8Webp,
  },
  logo: {
    png: logoPng,
    webp: logoWebp,
  },
} as const

export type ImageName = keyof typeof images
