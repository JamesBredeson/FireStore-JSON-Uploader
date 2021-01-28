

# Uploading leads to database

## Instructions:
1. Download this repository onto your local machine.
2. Export leads data to a .CSV file. **The first row of each collumn should be formatted with these exact titles and order**:
- "PREFIX""
- "FIRSTNAME"
- "LASTNAME"
- "ADDRESS"
- "ADDRESS 2"
- "CITY"
- "STATE"
- "ZIP"
- "LAT"
- "LONG"
- "Month"
- "Year"
3. Convert .CSV format to JSON. (Use https://www.csvjson.com and **make sure ARRAY option is set**)
4. Download converted file and rename file to "data.json". Move `data.json` file to parent directory.
5. Generate the private key from firebase and store it **locally** inside parent directory as `serviceAccountKey.json`. To generate private key, Go to Firebase console > Settings > Firebase Admin  SDK and click "Generate new private key" at the bottom of the page.
6. Make sure that `databaseURL` var inside of `index.js` is set appropiatley to database url (found on code snippet in Firebase console > Settings > Firebase Admin  SDK).
7. Install dependencies by running `npm install` inside main directory.
8. Run `node index.js`
