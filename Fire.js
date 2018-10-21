import uuid from 'uuid';

import getUserInfo from "./src/utils/getUserInfo";
import shrinkImageAsync from './src/utils/shrinkImageAsync';
import uploadPhoto from './src/utils/uploadPhoto';

const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

const collectionName = 'snack-SJucFknGX';

class Fire {
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAunHpR-aVEGM8EeFiSqXb8ZicL8S89jvU",
      authDomain: "fanxiang-7aff3.firebaseapp.com",
      databaseURL: "https://fanxiang-7aff3.firebaseio.com",
      projectId: "fanxiang-7aff3",
      storageBucket: "fanxiang-7aff3.appspot.com",
      messagingSenderId: "1092267004871"
    });
    // Some nonsense...
    firebase.firestore().settings({ timestampsInSnapshots: true });

    // Listen for auth
    firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }
    });
  }

  // Sign up
  handleSignUp = async ({navigation, email, password }) => {
    firebase
      .auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Sign up successfully...");
        navigation.navigate("ScreenLogin")
      });
  };

  // Sign in
  handleSignIn = async ({navigation, email, password }) => {
      firebase
          .auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log("Sign in successfully...")
            navigation.navigate("ScreenBottomTab")
          });
  };


  // Download Data
  getPaged = async ({ size, start }) => {
    let ref = Fire.collection.orderBy('timestamp', 'desc').limit(size);
    try {
      if (start) {
        ref = ref.startAfter(start);
      }

      const querySnapshot = await ref.get();
      const data = [];
      querySnapshot.forEach(function(doc) {
        if (doc.exists) {
          const post = doc.data() || {};

          // Reduce the name
          const user = post.user || {};

          const name = user.deviceName;
          const reduced = {
            key: doc.id,
            name: (name || 'Secret Duck').trim(),
            ...post,
          };
          data.push(reduced);
        }
      });

      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      return { data, cursor: lastVisible };
    } catch ({ message }) {
      alert(message);
    }
  };

  // Upload Data
  uploadPhotoAsync = async uri => {
    const path = `${collectionName}/${this.uid}/${uuid.v4()}.jpg`;
    return uploadPhoto(uri, path);
  };

  post = async ({ text, image: localUri }) => {
    try {
      const { uri: reducedImage, width, height } = await shrinkImageAsync(
        localUri,
      );

      const remoteUri = await this.uploadPhotoAsync(reducedImage);
      Fire.collection.add({
        text,
        uid: this.uid,
        timestamp: this.timestamp,
        imageWidth: width,
        imageHeight: height,
        image: remoteUri,
        user: getUserInfo(),
      });
    } catch ({ message }) {
      alert(message);
    }
  };

  // Helpers
  static get collection() {
    return firebase.firestore().collection(collectionName);
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return Date.now();
  }

  createActivity = async ({expectation,note,place,date,gender,fee}) => {
     firebase
         .database().ref('ActivityList/').push({expectation,note,place,date,gender,fee})
         .then((data) => {
          //success callback
          console.log('data ' , data)})
         .catch((error)=>{
          //error callback
          console.log('error ' , error)
        });
  };
}

Fire.shared = new Fire();

export default Fire;
