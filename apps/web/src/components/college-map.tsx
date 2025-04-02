'use client';

import { Map as MaplibreMap } from '@vis.gl/react-maplibre';
import { env } from '~/env';

export const CollegeMap = () => {
  return (
    <MaplibreMap
      initialViewState={{
        longitude: 91.420597,
        latitude: 23.844638,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle={`https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json?api_key=${env.NEXT_PUBLIC_OLA_MAPS_API_KEY}`}
      transformRequest={(url, resourceType) => {
        const transformedUrl = `${url}&api_key=${env.NEXT_PUBLIC_OLA_MAPS_API_KEY}`;
        if (resourceType === 'Style') return { url };
        return { url: transformedUrl, credentials: 'include' };
      }}
    />
  );
};
