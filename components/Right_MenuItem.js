import React from 'react';

import { View, Text, Image, VrButton, asset } from 'react-vr';

export default function Right_MenuItem(props) {
  const { setContent, info } = props;
  const { imgRef, title, date, name } = info;
  return (
    <View>
      <VrButton
        onClick={() => setContent(name)}
        style={{
          flexDirection: 'row',
          marginBottom: 0.1
        }}>
        <Image
          style={{
            width: 0.75,
            height: 0.75,
            marginRight: 0.05
          }}
          source={asset(`${imgRef}`)} />
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              fontSize: 0.3,
              textAlign: 'left'
            }}>
            {title}
          </Text>
          <Text style={{ fontSize: 0.2, textAlign: 'left' }}>
            {date}
          </Text>
        </View>
      </VrButton>
    </View>
  );
}
