import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/sanityImage';
/*
String(urlFor(post[0].banner)
*/
// Barebones lazy-loaded image component
const ImageBlock = ({value, isInline}: any) => {
  const {width, height} = getImageDimensions(value)
  return (
    <Image
      src={String(urlFor(value.src))}
      alt={value.alt || ' '}
      loading="lazy"
      width={width}
      height={height}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

export default ImageBlock;