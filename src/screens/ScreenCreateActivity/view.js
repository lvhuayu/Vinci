/**
 * ScreenCreateActivity/index.js
 */

import React from "react";
import DatePicker from "react-native-datepicker";
import RadioGroup from "../../components/RadioGroup";
import MyTextInput from "../../components/MyTextInput";

import {Text, View, StyleSheet, PixelRatio, KeyboardAvoidingView} from "react-native";

export default self => (
    <KeyboardAvoidingView>
        <View style={styles.container}>
            <View style={styles.innerBox}>
                <View style={styles.row}>
                    <Text style={styles.label}> 对象 </Text>
                    <RadioGroup
                        style={{marginTop: 19, marginLeft: 26}}
                        orientation='row'
                        margin={45}
                        data={[{"text": "女士"}, {"text": "男士"}, {"text": "皆可"}]}
                        imgSize={16}
                        textSize={16}
                        selectedTextColor='#ff5953'
                        unSelectedTextColor='#c4c4c4'
                        selectedImg={require('../../assets/images/radio_button.png')} // 被选状态时的图片
                        unSelectedImg={require('../../assets/images/radio-button-off.png')} // 未被选状态时的图片
                        drawablePadding={3}
                        itemChange={(value) => self.setState({gender: value})}
                    />
                </View>
                <View style={styles.divide_line}/>
                <View style={styles.row}>
                    <Text style={styles.label}> 活动 </Text>
                    <MyTextInput
                        style={styles.input}
                        autoCapitalize="none"
                        placeholder='发起一个约会吧'
                        onChangeText={(value) => self.setState({expectation: value})}
                        value={self.state.expectation}
                    />
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.innerBox}>
                <View style={styles.activity_note}>
                    <View style={styles.row}>
                        <Text style={styles.label}> 说明 </Text>
                        <MyTextInput
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder='打动对方和你约会'
                            onChangeText={(value) => self.setState({note: value})}
                            value={self.state.note}
                        />
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.innerBox}>
                <View style={styles.activity_details}>
                    <View style={styles.row}>
                        <Text style={styles.label}> 场景 </Text>
                        <MyTextInput
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder='饭店 / 咖啡馆 / 电影院'
                            onChangeText={(value) => self.setState({place: value})}
                            value={self.state.place}
                        />
                    </View>
                    <View style={styles.divide_line}/>
                    <View style={styles.row}>
                        <Text style={styles.label}> 时间 </Text>
                        <DatePicker
                            style={styles.datePicker}
                            date={self.state.date}
                            mode="datetime"
                            format="YYYY-MM-DD HH:mm"
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    borderWidth: 0,
                                },
                                dateText: {
                                    fontSize:16
                                },
                            }}
                            onDateChange={(date) => {self.setState({date: date.toString()})}}
                        />
                    </View>
                    <View style={styles.divide_line}/>
                    <View style={styles.row}>
                        <Text style={styles.label}> 费用 </Text>
                        <RadioGroup
                            style={{marginTop: 19, marginLeft: 26}}
                            orientation='row'
                            margin={20}
                            data={[{"text": "我请客"}, {"text": "平分帐单"}, {"text": "你请客"}]}
                            imgSize={16}
                            textSize={16}
                            selectedTextColor='#ff5953'
                            unSelectedTextColor='#c4c4c4'
                            selectedImg={require('../../assets/images/radio_button.png')} // 被选状态时的图片
                            unSelectedImg={require('../../assets/images/radio-button-off.png')} // 未被选状态时的图片
                            drawablePadding={3}
                            itemChange={(value) => self.setState({fee: value})}
                        />
                    </View>
                </View>
            </View>
        </View>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    container:{
        flexDirection: "column",
        marginBottom:10,
        marginLeft:1,
        marginRight:1,
        backgroundColor:'#FFFFFF',
    },
    input:{
        position: 'absolute',
        marginTop:17,
        marginBottom:17,
        marginLeft:60,
        width:'70%',
        fontSize:18
    },
    innerBox:{
        marginLeft:10,
        marginRight:10
    },
    profile:{
        flexDirection: "row",
        marginTop:18,
        marginBottom:15,
    },
    photo:{
        justifyContent: 'center',
        width:52,
        borderRadius:26,
        height:52,
    },
    resume:{
        flexDirection: "column",
        marginLeft:15,
    },
    name:{
        marginTop:6,
        marginBottom:6,
        fontSize:17
    },
    age:{
        backgroundColor: '#87cefa',
        width:35,
        height:18,
        fontSize:15,
        marginLeft:6,
        borderRadius:26,
        alignItems:'center'
    },
    activity:{
        flexDirection: "column",
        marginTop:12,
    },
    subject:{
        marginBottom:2,
        fontSize:17
    },
    divide_line:{
        height: 1/PixelRatio.get(),
        backgroundColor:'#c4c4c4',
    },
    label:{
        marginTop:17,
        marginBottom:17,
        fontSize:17,
        alignItems:'center',
        justifyContent:'center',
        color:'#c4c4c4',
    },
    text:{
        marginTop:12,
        fontSize:14
    },
    datePicker: {
        marginTop:7,
        position: 'absolute',
        right: 5,
        width: 150,
        fontSize:17,
    },
    gender: {

    },
    activity_details: {
    },
    activity_note: {
    },
});