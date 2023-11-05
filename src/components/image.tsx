import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ImageTypes = {
  image: IGatsbyImageData
  i: number
  dataSpeed: string
  imageDescription: string
}

export default function Image({ image, i, dataSpeed, imageDescription }: ImageTypes) {
  return (
    <>
      <div data-speed={dataSpeed} className={`image-wrapper${i} image-wrapper overflow-hidden cursor-default relative rounded-sm w-3/4 h-3/4 md:w-2/3 md:h-2/3`}>
        <GatsbyImage
          image={image}
          className={`w-full h-[150%] image${i} image`}
          alt={`human${i}`} />
        <div className={`image-description${i} h-1/2 w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 -z-10 line-clamp-6 md:line-clamp-[9] lg:line-clamp-[12] xl:line-clamp-none`}>
          <p className='text-slate-200 text-xl text-center'>
            {imageDescription}
          </p>
        </div>
      </div>
    </>
  );
};