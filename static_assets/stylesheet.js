import { StyleSheet } from 'react-vr';

export default stylesheet = StyleSheet.create({
  
  //VIEW STYLING
  viewBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch', 
    backgroundColor: '#000000BF',
    position: 'absolute'
  },
  midView: {
    padding: 0.1,
    width: 3,
    height: 3,
    transform: [{translate: [-1.5, 2.75, -5]}],
  },
  mapView: {
    width: 5.5,
    height: 4,
    transform: [
      {translate: [-2.75, 0, -5]},
      {rotateX: -45}],
    padding: 0,
  },
  leftView: {
    padding: 0.1,
    width: 2.2,
    height: 3,
    transform: [
      {translate: [-3.85, 2.75, -4.5]},
      {rotateY: -340}],
  },
  rightView: {
    padding: 0.1,
    width: 2.2,
    height: 3,
    transform: [
      {translate: [1.6, 2.75, -4.5]},
      {rotateY: -20 }],
  },
  mapImage: {
    width: 5.5,
    height: 4,
  },

  //WAYPOINTS
  wayPoint_view: {
    position: 'absolute',
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
    position: 'absolute',
    width: 1, 
    height: .5, 
    //backgroundColor: '#77787980', 
    transform: [{translate: [-1.5, 3.4, -5]}],
    padding: 0.03,
    paddingLeft: 0.1,
  },
  //HOME BUTTON
  homeButton: {
    position: 'absolute',
    width: 1.8, 
    height: .5, 
    transform: [{translate: [-.3, 3.4, -5]}],
    padding: 0.03,
    paddingRight: 0.1,
  },

  //Dissappear
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }


});

