import React from "react";
import {View, Text, Button} from "react-native";

const SuperUserScreen = ({ navigation }) => {
  return(
    <View style={{ alignItems: 'center'}}>
      <Text>SUPER USER SCREEN</Text>
      <Button
        title="GO TO INDEX"
        onPress={() => navigation.navigate('Index')} />
    </View>
  );
};

export default SuperUserScreen;
