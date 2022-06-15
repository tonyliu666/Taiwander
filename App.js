import React,{useState,useRef} from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,TextInput,Keyboard,TouchableWithoutFeedback,TouchableOpacity,Alert,Image,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Animated} from 'react-native'


function HomeScreen({navigation}){
  const [phone,setPhone] = useState('')  
  const inputref = useRef()

  const clickHandler = ()=>{
    inputref.current.focus()
  }
  state = {opacity: new Animated.Value(0)} //define opacity

  const varify=()=>{
    if (phone.length!=10){
      /*congratulation,we will find a pair with you */ 
      Alert.alert("電話格式不符合，請重新輸入")
    }else{
      //重新渲染畫面，恭喜並且開新的配對畫面
      // TextInput.current.focus()
        if(phone[0]==0&&phone[1]==9){
          Alert.alert("電話格式符合，即將為您配對")
          // navigation.navigate("")
          navigation.navigate("Congrats")
        }
        else{
          Alert.alert("電話格式不符合，請重新輸入")
        }
      }
  }
  return (
    <View style={styles.container}>
      {/*ImageBackground style={{width:450,height:555,flex:1}}*/ }
      <ImageBackground style={{width:450,height:777,flex:1}}source = {require('./登入封面.jpg')} >
        <Text style={styles.welcome_text}>Welcome to Taiwander</Text>
        <Text style={styles.ans_text}>Please answer your telephone number</Text>
        
        {/*看可不可以再改善觸控的機制*/ }
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.center}>
                <TextInput
                style = {{height:40,width:400,borderRadius:0,borderColor:'darkgray',borderWidth:5,backgroundColor:'gray',color:'white',fontSize:28,textAlign:'center'}}
                onChangeText={(text)=>setPhone(text)} 
                value = {phone}
                secureTextEntry={true}
                placeholder = 'please enter your phonenumber'
                keyboardType = {'numeric'}
                editable={true}
                alignItems={'center'}
                onSubmitEditing={Keyboard.dismiss}
                onHandlePress={() => setAutoFocus(true)}
                ref={inputref}
                />
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.center}>
          <Text style={styles.ans_text}>
            Is this your phone number {phone} ? 
          </Text>
        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.button} onPress={()=>varify()}>
          <Text style={styles.ans_text}>
            Yes,register! 
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button,{backgroundColor:'#8B0000'}]} onPress={clickHandler}>
          <Text style={styles.ans_text}>
            No,enter again.  
          </Text>
        </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  );
}
// function animate_text(random_number){
  
//   React.useEffect(()=>{
//     ,[])
//   const click_picture=()=>{
//   }
//   return(
//     <View style={styles.container}>
//       <Animated.Text style={[styles.subTitle,{marginLeft:AnimateText}]}>
//           This is your true lover's phone number {random_number}
//       </Animated.Text>
//     </View>
//   )
// }
function DetailScreen (props){
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [click,setclick] = useState(0)

  const AnimateText = useRef(new Animated.Value(0)).current
  const [num,setnum] = useState(10000000000)
  const open_gift=()=>{//產生隨機一組電話號碼，可以用動畫的方式產生
    // animate_text(random_number)
    if (click ==0){
      var random_number = Math.floor(Math.random()*10000000000)+1
      setnum(random_number)
      setclick(1)
      Animated.timing(AnimateText,{
        toValue: 1,
        duration: 1500,
        delay:300,
        useNativeDriver:true,
      }).start()
    }else{
      Alert.alert("Please click the button below to erase the phone num")
    }
  }
  React.useEffect(()=>{
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim,{
          toValue: 1,
          duration: 500,
          useNativeDriver:true,
        }),
        Animated.timing(fadeAnim,{
          toValue: 0,
          duration: 500,
          useNativeDriver:true,
        })
      ])
    ).start();
  },[])
  
  const hide = ()=>{
    Animated.timing(AnimateText,{
      toValue: 0,
      duration: 30,
      delay:20,
      useNativeDriver:true,
    }).start()
    setclick(0)
  }
  return(
    <SafeAreaView style ={styles.container}>
      <Animated.View style={{opacity:fadeAnim}}>
        <Text style={styles.second_page_text}>
           Click this following picture
        </Text>
      </Animated.View>
      <Animated.Text style={[styles.subTitle,{opacity:AnimateText}]}>
          This is your true lover's phone number {num}
      </Animated.Text>
      <TouchableOpacity onPress={() => open_gift()}>
        <Image style={styles.imagestyle} source={require('./beauty.jpg')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>hide()}>
        <Text>Another boy/girl</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={HomeScreen}/>
        <Stack.Screen name="Congrats" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex:0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome_text:{
    color: "white",
    fontSize: 30,
    lineHeight: 250,
    fontWeight: "bold",
    textAlign: "center",
  },
  second_page_text:{
    color: "white",
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  ans_text:{textAlign:"center",
  borderColor:"green",
  color:"yellow",
  fontSize: 20,
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle:{
    padding: 5,
    marginTop:30,
    width: 400,
    height:400,
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContentContainer: {
    alignItems: "center",
    paddingBottom: 60
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    opacity: .8,
  },
});
