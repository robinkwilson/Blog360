
import React from 'react';
import { View } from 'react-vr';

import {
  Waypoint,
  MapView
} from './index.js';

export default function WorldMap(props) {
  const { curWaypoint, setContent } = props;
  const isSeattle = curWaypoint === 'Seattle';
  return (
    <View>
      <MapView />
      {/* EasternEurope */}
      <Waypoint
        selected={!isSeattle}
        setContent={setContent}
        place={'EasternEurope'} x={0.2} y={-0.5} z={-3} />
      {/* Seattle */}
      <Waypoint
        selected={isSeattle}
        setContent={setContent}
        place={'Home'} x={-1.05} y={-0.6} z={-3} />
    </View>
  );
}

