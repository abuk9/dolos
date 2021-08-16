import React, {useState} from 'react';
import {
  Modal,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TextInput,
  Pressable
} from 'react-native';
import Colors from '../../global/colors';
import OnOffSwitch from '../onOffSwitch';
import RoundButton from '../roundButton';

export default function TodoListAddModal({
  modalVisible,
  setModalVisible,
  onSubmit, // gets an array of strings with inputs in order (top to bottom)
}) {
  const [isNotificationOn, setIsNotificationOn] = useState(false) // Unused for now
  let values = [];
  return (
    <Modal animationType="fade" visible={modalVisible} transparent={true}>
      <Pressable style={styles.modalBg} onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="Title"
            onChangeText={text => {
              values[0] = text;
            }}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Description"
            onChangeText={text => {
              values[1] = text;
            }}
          />

          <Text style={styles.text}>Due Jan 15 at 9:45 AM</Text>

          <View style={{flexDirection: 'row'}}>
            <OnOffSwitch
              onTitle="Do" offTitle="Don't"
              isOn={isNotificationOn}
              setIsOn={setIsNotificationOn}
            />
            <Text style={styles.text}>send me a notification</Text>
          </View>

          {/* todo - create custom buttons */}
          <View style={styles.buttonBar}>
            <RoundButton
              title="cancel"
              color={Colors.cancelGrey}
              onPress={() => setModalVisible(false)}
            />
            <RoundButton
              title="accept"
              color={Colors.acceptGreen}
              onPress={() => {
                onSubmit(values);
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonBar: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 15,
  },
  inputBox: {
    padding: 0, // reset default padding
    // paddingHorizontal: 8, A suggestion, looks better to me
    borderBottomWidth: 1,
    borderColor: Colors.textDefault,
    marginVertical: 12,
  },
  modalBg: {
    // opacity is inherited so this is how we make it independent
    backgroundColor: 'rgba(225,225,225,0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '88%',
    paddingVertical: 25,
    paddingHorizontal: 35,
    borderRadius: 20,
  },
  text: {
    color: Colors.textDefault,
    alignSelf: 'center',
    paddingVertical: 12,
  },
});
