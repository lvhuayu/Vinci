/**
 * ScreenCreateActivity/index.js
 */

import React from 'react';
import {Alert, Text, TextInput, StyleSheet, Picker, ImageBackground, Image, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Container, Content, Icon, Left, List, ListItem, Right} from "native-base";
import MyTextInput from "../../components/MyTextInput";

export default self => (
    <Container>
        <Content>
            <List>
                <ListItem onPress={() => self.navigation.navigate("ScreenUserDetailProfile")}>
                    <Left>
                        <Text>昵称</Text>
                    </Left>
                    <MyTextInput
                        style={styles.input}
                        autoCapitalize="none"
                        placeholder='发起一个约会吧'
                        onChangeText={(value) => self.setState({expectation: value})}
                        value={self.state.expectation}
                    />
                </ListItem>
                <ListItem onPress={() => self.navigation.navigate("ScreenUserDetailProfile")}>
                    <Left>
                        <Text>我的约会</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem onPress={() => self.navigation.navigate("ScreenUserDetailProfile")}>
                    <Left>
                        <Text>设置</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>
        </Content>
    </Container>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});