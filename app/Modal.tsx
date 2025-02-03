import { View, Text, Button, StyleSheet, Modal } from "react-native";
import React from "react";
import ReactNativeModal from "react-native-modal";

const ModalContainer = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text>Container</Text>
      <Button
        title="Open Modal"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      {/* <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalCont}>
          <View style={styles.modal}>
            <Text>Modal</Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal> */}
      <ReactNativeModal
        isVisible={modalVisible}
        animationIn="fadeInRight"
        animationOut="fadeOutRight"
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
      >
         <View style={{
            backgroundColor: "white",
            height: 300,
            padding: 40,
            borderRadius: 10,
         }}>
            <Text>Modal</Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
      </ReactNativeModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCont: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "red",
    height: 300,
    padding: 40,
    borderRadius: 10,
  },
});

export default ModalContainer;
