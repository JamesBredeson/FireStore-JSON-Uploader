
const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./data.json");
const collectionKey = "leads"; //name of the collection

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "hhttps://doorknock-pro.firebaseio.com"
});

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

if (data && (typeof data === "object")) {
    data.forEach(lead => {

        // format data from raw structure to app structure
        let formattedData = {
            "prefix": lead["PREFIX"],
            "firstName": lead["FIRSTNAME"],
            "lastName": lead["LASTNAME"],
            "location": {
                "address": lead["ADDRESS"],
                "address2": lead["ADDRESS 2"],
                "city": lead["CITY"],
                "state": lead["STATE"],
                "zipcode": lead["ZIP"],
                "latitude": lead["LAT"],
                "longitude": lead["LONG"],
            },
            "dateOfBirth": {
                "month": lead["Month"],
                "year": lead["Year"]
            }
        }

        firestore.collection(collectionKey).doc().set(formattedData).then((res) => {
            console.log("Document successfully written!");
        }).catch((error) => {
        console.error("Error writing document: ", error);
        });
    });
}