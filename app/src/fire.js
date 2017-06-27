import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAnNPMb6SVXVB3NkJ7B5vxE3NrrBeXeqbo",
    authDomain: "pi-namite.firebaseapp.com",
    databaseURL: "https://pi-namite.firebaseio.com"
}
var fire = firebase.initializeApp(config)

//create element
const ulist = document.getElementById('list');

//create reference
const dfRefObject = fire.database().ref().child('items');


const dblist = dfRefObject.child('364255')

//sync object changes
dfRefObject.on('value', snap =>console.log(snap.val())); ///{preObject.innerText = JSON.stringify(snap.val(), 3)});



// sync list changes
//console.log(snap.val())});


dblist.on('value', snap => {

//const li = document.createElement('li');
      //    li.innerText = snap.val();
//ulist.appendChild(li);
});


export default fire

