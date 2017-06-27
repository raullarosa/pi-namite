import pyrebase

def removeItem(sku, building):
    db = connect()
    cur_inventory = db.child("items").child(sku).child("cur_inventory").get().val()
    db.child("items").child(sku).update({"cur_inventory": cur_inventory-1})

def addItem(sku, building):
    db = connect()
    cur_inventory = db.child("items").child(sku).child("cur_inventory").get().val()
    db.child("items").child(sku).update({"cur_inventory": cur_inventory+1})

def connect():
    config = {
        "apiKey": "AIzaSyAnNPMb6SVXVB3NkJ7B5vxE3NrrBeXeqbo",
        "authDomain": "",
        "databaseURL": "https://pi-namite.firebaseio.com/",
        "storageBucket": ""
    }
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    return db
