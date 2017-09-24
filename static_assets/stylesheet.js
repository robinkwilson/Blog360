import { StyleSheet } from 'react-vr';

export default stylesheet = StyleSheet.create({
  viewBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch', 

    backgroundColor: '#000000BF',
    display: 'flex',
  },
  midView: {
    padding: 0.1,
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
    padding: 0,
  },
  mapImage: {
    width: 5.5,
    height: 4,
  },
  leftView: {
    color: 'red',
  },
  rightView: {
    color: 'green',
  },
  hideAllViews: {
    display: 'none'
  },

  //WAYPOINTS
  wayPoint_view: {
    padding: 0.1,
    width: 3,
    height: 3,
    transform: [{translate: [-1, 2.75, -3]}],
  },
  wayPoint_img: {
    width: 3,
    height: 3,
  },

  //MENU DISAPPEAR BUTTON
  toggleViewButton: {
    width: 1, 
    height: .5, 
    backgroundColor: '#77787980', 
    transform: [{translate: [-2, 3, -5]}],
    padding: 0.02
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});