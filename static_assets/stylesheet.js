import { StyleSheet } from 'react-vr';

export default stylesheet = StyleSheet.create({
  viewbox: {
    display: 'flex',
  },
  midView: {
    flex: 1,
    flexDirection: 'column',
    width: 3,
    height: 3,
    alignItems: 'stretch',
    padding: 0.1,
    transform: [{translate: [-1, 2.75, -5]}],
    backgroundColor: '#000000BF',
    display: 'flex',
  },
  mapView: {
    flex: 1,
    flexDirection: 'column',
    width: 5.5,
    height: 4,
    alignItems: 'stretch', 
    padding: 0.1,
    transform: [
      {translate: [-2, 3, -5]},
      {rotateX: -45}],
    backgroundColor: '#000000BF',
  },
  leftView: {
    color: 'red',
  },
  rightView: {

  }
  });