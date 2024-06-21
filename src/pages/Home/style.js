import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#DDEAED',
  },
  post1: {
    backgroundColor: '#48B7B0',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    aspectRatio: 3 / 4,
    position: 'absolute',
    top: 15,
    left: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    transform: [{ scale: 1.75 }],
    width: 250,
    height: 200,
    overflow: 'auto',
    margin: 20,
  },
  texto: {
    color: "#fff",
    fontSize: 12,
    gap: 10,
    left: 50,
    top: 50
  },
  perfilimg: {
    width: 120,
    height: 120,
    position: 'absolute', // Make perfilimg absolute for positioning
    top: 100, // Adjust top position based on your desired margin
    left: 30, // Adjust left position based on your desired margin
    borderRadius: 50, // Add rounded corners to match the image
  },


  squad: {
    flex: 1,
    width: 150,
    height: 150,
    borderRadius: 4,
    position: 'absolute',
    left: 50,
    top: 350
  },

  textoqd: {
    alignContent: 'center',
    fontWeight: '400',
    top: 75, // Adjust top position based on your desired margin
    left: 60,
    color: '#ffffff'
  },

  plus: {
    flex: 1,
    borderRadius: 4

  },

  squad2: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    width: 300,
    height: 200,
    top: 550,
    bottom: 30, // Position squad2 at the bottom of the screen
    left: 30, // Adjust left position based on your desired margin
  },

  textorp: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    top: 550,
    fontFamily: 'Lato-Black',
    fontSize: 16,
    fontWeight: 'bold',


  }

});
