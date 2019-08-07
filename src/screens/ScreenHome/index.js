/**
 * ScreenHome/index.js
 */
import {React, Component} from 'react';
import view from "../ScreenHome/view";
import Fire from "../../../Fire";

const firebase = require('firebase');

export default class ScreenHome extends Component {
    // 配置页面导航header选项
    navigationOptions = () => ({
        headerTitle: '首页',
        headerLeft: null,
        headerTitleStyle:{alignSelf:'center'}
    });

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {};
    }

    handleOnPress = (activityKey) => {
        console.log(activityKey);
        this.navigation.navigate("ScreenDetail", {activityKey: activityKey})
        const db = firebase.firestore();
        const increment = firebase.firestore.FieldValue.increment(1);

        var viewCount = 0;
        var viewCountRef = firebase.database().ref('ActivityList/' + activityKey + '/viewCount');
        viewCountRef.on('value', function(snapshot) {
            viewCount = snapshot.val();
        });
        firebase.database().ref('ActivityList/' + activityKey).update({'viewCount': ++viewCount})

        // const activityRef = db.collection('activities').doc(activityKey);
        // activityRef.get()
        //     .then((docSnapshot) => {
        //         if (docSnapshot.exists) {
        //             activityRef.update({viewCount: increment})
        //         } else {
        //             activityRef.set({
        //                 Id: activityKey,
        //                 viewCount: 1
        //             })
        //         }
        //     });
    }

    componentWillMount() {
        firebase.database().ref().child('ActivityList').on("value", snapshot => {
            // console.log(snapshot.val());
            this.setState({ activities: snapshot.val(),
                            handleOnPress: this.handleOnPress});
        }, function (error) {
            console.log("Error: " + error.code);
        });
        //
        // var collectionRef = firebase.firestore().collection("activities");
        // collectionRef.get().then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.data());
        //     });
        // });
    };

    render() {
        return this.state.activities? view(this): null;
    }
}
