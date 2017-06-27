import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAnNPMb6SVXVB3NkJ7B5vxE3NrrBeXeqbo",
    authDomain: "pi-namite.firebaseapp.com",
    databaseURL: "https://pi-namite.firebaseio.com"
}
var fire = firebase.initializeApp(config)

//create reference
const dfRefObject = fire.database().ref().child('items');

//sync object changes
dfRefObject.on('value', snap =>console.log(snap.val())); ///{preObject.innerText = JSON.stringify(snap.val(), 3)});

export default fire

