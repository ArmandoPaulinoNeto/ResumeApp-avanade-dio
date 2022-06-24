import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  Linking,
} from 'react-native';
import icons from 'react-native-vector-icons/Feather';
import photo from './assets/img/perfil.png';
const link = 'https://github.com/ArmandoPaulinoNeto';
const handleGoToGitHub = async () => {

  const response = await Linking.canOpenURL(link);
  response ? await Linking.openURL(link) : alert('Não foi possível acessar o link.');
};

const App = () =>{ 
  return (
    <SafeAreaView style={style.container}>
     
      <View style={style.viweProfil}>
        <Text style={style.textTitle}>PROFILE</Text>
        <Text style={style.textDescription}>Sistemas de Informação | Desenvolvedor Junior | Java | Mobile | Kotlin | Flutter | Back End</Text>
        <Text style={style.textContact}>Limoeiro, Pe, Brazil</Text>
        <Pressable onPress={handleGoToGitHub}>
          <Text style={style.textContact}>www.linkedin.com/in/armandopsneto</Text>
        </Pressable>
      </View>
      <View>
        <Image style={style.imgProfil} source={photo}/>        
      </View>
    </SafeAreaView>    
  );
};

export default App;

const style = StyleSheet.create({
  container:{ 
    backgroundColor: '#649abf',
    alignItems: 'center',
    flex: 1,
  },
  imgProfil:{
    marginTop: 30,
    height: 380,
    width: 320,
    borderWidth: 5,   
    borderColor: '#ffbbdd',
    position: 'relative',
  },
  viweProfil:{ 
    backgroundColor: '#4d7fa2',  
    height: 430,
    width: 350,
    position: 'absolute',
    borderWidth: 5,   
    borderColor: '#ff7799',
    marginTop: 300,
  },
  textTitle:{
    paddingLeft:20,
    paddingTop: 120, 
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  textDescription:{  
    padding:20,  
    fontSize: 20,
    color: 'white',    
  },
  textContact:{  
    paddingBottom: 5,
    paddingLeft: 20,      
    fontSize: 20,
    color: 'white',    
  },
});
