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
    top:50
  },
  circle: {
    backgroundColor: '#fff',
    width: 75,
    height: 75,
    borderRadius: 50,
    position: 'absolute',
    left: 50,
    top: 50,
  },
  squad: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#fff',
    width: 150,
    height: 150,
    borderRadius: 4,
    position: 'absolute',
    left: 50,
    top: 350
  },
  textoqd: {
    flex:1,
    alignContent:'center',
    alignItems: 'center',
    fontWeight: '500'
  },

  plus: {
    flex:1,
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#E6A94D"
  }
});
