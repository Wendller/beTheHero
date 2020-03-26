import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá WEND, estou entrando em contato pois gostaria de ajudar com o caso "Sem shape" com o valor de R$ 360,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['wendler_mendes@hotmail.com'],
      body: message
    })
  } 

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=55(86)88778431&text=${message}`);
  }

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty], { marginTop: 0 }}>ONG: </Text>
        <Text style={styles.incidentValue}>WEND </Text>

        <Text style={styles.incidentProperty}>CASO: </Text>
        <Text style={styles.incidentValue}>Sem shape </Text>

        <Text style={styles.incidentProperty}>VALOR: </Text>
        <Text style={styles.incidentValue}>R$ 360,00 </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroeTitle}>Salve o dia!</Text>
        <Text style={styles.heroeTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroeDescription}>Entre em contato: </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText} onPress={sendWhatsApp}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText} onPress={sendMail}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}