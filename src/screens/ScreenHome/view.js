/**
 * ScreenHome/index.js
 */

import React from "react";
import {Text, View, Button} from "react-native";

export default self => (
    <View>
        <Text style={{ fontSize: 36 }}>home</Text>
        <Button
            title="go to detail page..."
            // 路由跳转
            onPress={() => self.navigation.navigate("ScreenDetail")}
        />
    </View>
);