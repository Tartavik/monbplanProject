import type { ComponentPropsWithoutRef } from 'react'

import { icons, type IconName } from '../assets/iconRegistry'

type NativeImageProps = Omit<
  ComponentPropsWithoutRef<'img'>,
  'alt' | 'height' | 'src' | 'width'
>

export interface IconProps extends NativeImageProps {
  alt?: string
  name: IconName
  size: number
}

export function Icon({ alt = '', name, size, ...imageProps }: IconProps) {
  return (
    <img
      src={icons[name]}
      alt={alt}
      width={size}
      height={size}
      {...imageProps}
    />
  )
}
