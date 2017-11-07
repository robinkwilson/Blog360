import React from 'react';

import { View, Image, VrButton, asset } from 'react-vr';

export default function Left(props) {
  const { panoRef, panoRotateY, key } = this.props.info;
  return (
    <View key={key}>
      <VrButton style={{ marginBottom: .1 }} onClick={() => this.props.changePano(panoRef, panoRotateY)}>
        <Image
          style={{
            width: 2,
            height: 1,
            marginRight: 0.05
          }}
          source={asset(`cat.jpg`)} />
      </VrButton>
    </View>
  );
}
