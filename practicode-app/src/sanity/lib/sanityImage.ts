import { client } from './client';
import ImageUrlBuilder from '@sanity/image-url';

const builder = ImageUrlBuilder(client);

export const urlFor = (src: any) => builder.image(src);