import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.prijava}>
          <View style={styles.prvinaslov}>
            <Text style={styles.naslov}>Sign in</Text>
          </View>
                
          <View style={styles.druginaslov}>
            <Text style={styles.podnaslov}>Stay updated on your professional world</Text>
          </View>

          <View style={styles.emailWrapper}>
            <View style={styles.phoneWrapper}>
            <Text style={styles.email}>Email or Phone</Text>
            </View>
          </View>

          <View style={styles.passwordWrapper}>
            <View style={styles.password}>
            <Text style={styles.password}>Password</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.buttonForgot}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signIn}>
            <Text style={styles.buttonSignIn}>Sign in</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.labelOr}>or</Text>
          </View>

          <TouchableOpacity style={styles.signInApple}>
          <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
          }}
          style={{ height: 22, borderRadius: 100, width: '9%', padding: 4 }}
        />
            <Text style={styles.buttonSignInApple}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newToLinkedIn}>
              <View>
                <Text style={styles.labelNew}>New to LinkedIn?</Text>
              </View>
              <TouchableOpacity style={styles.joinNow}>
                <Text style={styles.buttonJoin}>Join Now</Text>
              </TouchableOpacity>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  prijava:{
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "lightgray",
  },
  prvinaslov: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  naslov: {
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: 160,
  },
  druginaslov: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  podnaslov: {
    fontWeight: 500,
    fontSize: 13,
    marginRight: 20,
    color: 'gray'
  },
  emailWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 15,
    marginTop: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray"
  },
  email:{
    color: "gray"
  },
  passwordWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 15,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray"
  },
  password:{
    color: "gray"
  },
  signIn: {
    marginTop: 20,
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#4CB2DF",
  },
  buttonSignIn:{
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: 500
  },
  signInApple: {
    marginTop: 1,
    padding: 10,
    paddingLeft: 35,
    marginHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: 'row',
    align: "center"
  },
  buttonSignInApple:{
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    fontWeight: 500,
    padding: 2,
  },
labelOr:{
  padding: 20,
  textAlign: "center",
  color: "gray",
},
newToLinkedIn:{
  padding: 10,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
labelNew:{
 padding: 10,
},
buttonJoin: {
    color: "#289CFC",
    fontWeight: 500,
},
buttonForgot: {
    color: "#289CFC",
    fontWeight: 500
},
});
