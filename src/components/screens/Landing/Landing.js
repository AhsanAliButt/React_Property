import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './LandingStyle';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Welcome to My Store</Text>
        <Text style={styles.text}> Sign In with Account </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;
