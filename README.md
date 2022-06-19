# Taiwander

##### This is the react native project about creating the similar "tinder" app  

The technique of this projects contains below : 
> 1. The difference between useState and useRef(current.focus()):**useRef** can let textInput be reused 
> 2. flip between different pages by using the method -- NavigationContainer(import {NavigationContainer} from '@react-navigation/native') 
> 3. The use of ImageBackground -- can let the words be on the picture
> 4. TouchableWithoutFeedback:delete the keyboard if click another place 
> 5. Animated.timing() : represent the animation 
> React.useEffect() : can let the function loaded and automatically run this function 

The function packages should be imported before using these functions: 
1. import { StyleSheet, Text, View,ImageBackground,TextInput,Keyboard,TouchableWithoutFeedback,TouchableOpacity,Alert,Image,SafeAreaView} from 'react-native';
2. import {NavigationContainer} from '@react-navigation/native' 
3. import {createStackNavigator} from '@react-navigation/stack' 
4. import {Animated} from 'react-native' 
