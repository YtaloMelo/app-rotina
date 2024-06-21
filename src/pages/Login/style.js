import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#DDEAED',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24
      },
      texto: {
        color: "#000",
        fontSize: 12
    
      },
      input: {

        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
        width: "80%"
    
    
      },
      button: {
        alignItems: "center",
        backgroundColor: "#48B7B0",
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
        width: 300, // Set width to match the image width    
        height: 40, // Set height to match the image height
      },
    

      btntext: {
        alignItems: 'center',
        alignContent: 'center',
        fontFamily: 'Lato-Black',
        fontSize: 12,
        fontWeight: 'bold',
        color: "#ffffff",
        
      },

      titulo: {
        alignContent: 'flex-start',
        fontFamily: 'Lato-Black',
        fontSize: 20,
        fontWeight: 'bold',
        color: "#2E7A76",
      },
    
      valid: {
        fontFamily: 'Lato-Black',
        fontSize: 10,
        fontWeight: 'bold',
        color: "#DA6767",
      },
      logo: {
        width: 250,
        height: 200,
      }
    
      

})
