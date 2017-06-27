import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAnNPMb6SVXVB3NkJ7B5vxE3NrrBeXeqbo",
    authDomain: "pi-namite.firebaseapp.com",
    databaseURL: "https://pi-namite.firebaseio.com"
}
var fire = firebase.initializeApp(config)
export default fire

