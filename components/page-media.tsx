import Image from 'next/image'

import { pageImages, type PageImageKey } from '@/lib/images'

type PageHeroImageProps = {
  imageKey: PageImageKey
  /** Use priority for above-the-fold heroes. */
  priority?: boolean
}

/**
 * Full-bleed editorial photo under the page H1 band. Illustrative only —
 * not a specific listing or builder lot photograph.
 */
export function PageHeroImage({
  imageKey,
  priority = false,
}: PageHeroImageProps) {
  const image = pageImages[imageKey]
  return (
    <figure className="relative -mx-4 overflow-hidden sm:mx-0">
      <div className="relative aspect-[16/9] w-full bg-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="source-line mt-2 px-4 sm:px-0">
        {image.caption}
      </figcaption>
    </figure>
  )
}

type SectionImageProps = {
  imageKey: PageImageKey
  className?: string
}

/** Inline section photo for an H2 block. */
export function SectionImage({ imageKey, className = '' }: SectionImageProps) {
  const image = pageImages[imageKey]
  return (
    <figure className={`grid gap-2 ${className}`.trim()}>
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted sm:aspect-[4/3]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="source-line">{image.caption}</figcaption>
    </figure>
  )
}
