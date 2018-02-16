import { StyleSheet } from 'react-vr';

export default stylesheet = StyleSheet.create({

  //VIEW STYLING
  view_panel: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000BF',
    position: 'absolute'
  },
  mid_view: {
    padding: 0.1,
    width: 3,
    height: 3,
    transform: [{ translate: [-1.5, 2.75, -5] }],
  },
  left_view: {
    padding: 0.1,
    width: 2.2,
    minHeight: 3,
    transform: [
      { translate: [-3.85, 2.75, -4.5] },
      { rotateY: -340 }
    ],
  },
  right_view: {
    padding: 0.1,
    minWidth: 2.3,
    height: 3,
    transform: [
      { translate: [1.65, 2.75, -4.5] },
      { rotateY: -20 }],
  },

  //MENU DISAPPEAR BUTTON
  hide_button_top: {
    position: 'absolute',
    width: 1,
    height: .5,
    transform: [
      { translate: [-1.5, 3.4, -5] }
    ],
    padding: 0.03,
    paddingLeft: 0.1,
  },
  hide_button_bottom: {
    position: 'absolute',
    width: 2,
    height: 1,
    backgroundColor: 'red',
    transform: [
      { translate: [0, -3, 0] }, 
      { rotateX: -90 }
    ],
    padding: 0.03,
    paddingLeft: 0.1,
  },
  hide_button_text: {
    fontSize: 0.3,
    fontWeight: '400',
    textAlign: 'center',
  },
  
  //HOME BUTTON
  homeButton: {
    position: 'absolute',
    width: 1.8,
    height: .5,
    transform: [
      { translate: [-0.3, 3.4, -5] }
    ],
    padding: 0.03,
    paddingRight: 0.1,
  },

  //Dissappear
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  },

  subtitle: {
    fontSize: 0.2
  },
  bodyText: {
    fontSize: 0.2
  },
  title: {
    fontSize: 0.3
  },

  right_icon_container: {
    flexDirection: 'row',
    marginBottom: 0.1,
    minWidth: 2.65
  },
  right_icon_img: {
    width: 0.75,
    height: 0.75,
    marginRight: 0.05
  },

  left_panel_text: {
    position: 'absolute',
    fontSize: 0.2,
    transform: [
      { translate: [-3.85, 2.75, -4.5] },
      { rotateY: -340 }
    ]
  },

  left_imgs_container: {
    marginTop: 0.3,
    minHeight: 3
  },

  left_icon_img: {
    width: 2,
    height: 1,
    marginBottom: 0.1,
  },

  column: {
    flexDirection: 'column'
  },

  // HOME BUTTON
  home_button_text: {
    fontSize: 0.3,
    fontWeight: '400',
    textAlign: 'center',
  }
});

