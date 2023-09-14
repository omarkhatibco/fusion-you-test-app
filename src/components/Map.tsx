import React, { FC } from 'react';
import { GoogleMap, Icon } from '@tourlane/fusion-you';
import { Image } from 'fusion-engine/jsx';
import {
  Container,
  f,
  Grid,
  Box,
  Divider,
  Flex,
  HTMLFProps,
  Circle,
} from 'fusion-engine/jsx';

import { GOOGLE_MAP_API_KEY, cities } from '@/config';

export const Map: FC = () => {
  return (
    <GoogleMap.Script
      apiKey={GOOGLE_MAP_API_KEY}
      callback={(state, loader) => {
        console.log({
          state,
          loader,
        });
      }}
    >
      <GoogleMap.Root>
        <f.div w='full' h='full' position={'relative'}>
          <GoogleMap.FailureStatus>
            Error Loading google map
          </GoogleMap.FailureStatus>
          <GoogleMap.LoadingStatus>Loading...</GoogleMap.LoadingStatus>
          <GoogleMap.Viewport
            defaultCenter={{
              lat: cities?.[0].position[0],
              lng: cities?.[0].position[1],
            }}
            defaultZoom={8}
          >
            {cities?.map((city, index) => (
              <GoogleMap.Marker
                key={index}
                position={{
                  lat: city.position[0],
                  lng: city.position[1],
                }}
              >
                <Circle
                  w={'8'}
                  h={'8'}
                  bgColor={{
                    base: 'primary',
                    _hover: 'error',
                  }}
                  color={'on.primary'}
                >
                  Hi
                </Circle>
              </GoogleMap.Marker>
            ))}
          </GoogleMap.Viewport>
          <GoogleMap.Controls>
            <GoogleMap.FullscreenControl />
            <GoogleMap.ZoomControls />
          </GoogleMap.Controls>
        </f.div>
      </GoogleMap.Root>
    </GoogleMap.Script>
  );
};
