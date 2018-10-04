/**
 * ScreenDetail/index.js
 */

// 引入依赖略
import React from "react";
import {Text, View, Button} from "react-native";

export default self => (
    <View>
        <Text style={{ fontSize: 16 }}>Detail Page</Text>
        <Button
            title="Go to the home page "
            // 路由跳转
            onPress={() => self.navigation.navigate("ScreenHome")}
        />
    </View>
);