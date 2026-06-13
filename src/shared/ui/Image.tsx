import type { ComponentPropsWithoutRef } from 'react'

import { images, type ImageName } from '../assets/imageRegistry'

type NativeImageProps = Omit<
  ComponentPropsWithoutRef<'img'>,
  'alt' | 'src' | 'srcSet'
>

export interface ImageProps extends NativeImageProps {
  alt: string
  name: ImageName
  pictureClassName?: string
}

export function Image({
  alt,
  name,
  pictureClassName,
  ...imageProps
}: ImageProps) {
  const image = images[name]

  return (
    <picture className={pictureClassName}>
      <source srcSet={image.webp} type="image/webp" />
      <img src={image.png} alt={alt} {...imageProps} />
    </picture>
  )
}
