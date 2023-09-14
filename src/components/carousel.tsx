import React, { FC } from 'react';
import { SimpleCarousel } from '@tourlane/fusion-you';
import { Image } from 'fusion-engine/jsx';

export const Carousel: FC = () => {
  return (
    <SimpleCarousel.Root
      css={{
        '--spacing': '1rem',
      }}
    >
      <SimpleCarousel.Viewport>
        {Array.from({
          length: 10,
        }).map((_, i) => (
          <SimpleCarousel.Item key={i} flexBasis={'1/3'}>
            <Image
              alt='My random image'
              src={`https://picsum.photos/1200/800?random=${i}`}
              aspectRatio={1}
              w={'full'}
              rounded={'3xl'}
              overflow={'hidden'}
              transition={'all'}
              transform={{
                base: 'scale(1)',
                _hover: 'scale(1.1)',
              }}
            />
          </SimpleCarousel.Item>
        ))}
      </SimpleCarousel.Viewport>
    </SimpleCarousel.Root>
  );
};
