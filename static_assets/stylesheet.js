import { StyleSheet } from 'react-vr';

export default stylesheet = StyleSheet.create({
  viewBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch', 
    padding: 0.1,
    backgroundColor: '#000000BF',
    display: 'flex',
  },
  midView: {
    width: 3,
    height: 3,
    transform: [{translate: [-1, 2.75, -5]}],
  },
  mapView: {
    width: 5.5,
    height: 4,
    transform: [
      {translate: [-2, 3, -5]},
      {rotateX: -45}],
  },
  leftView: {
    color: 'red',
  },
  rightView: {

  },
  hideAllViews: {
    display: 'none'
  },

  button: {
    width: 0.7
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

  });