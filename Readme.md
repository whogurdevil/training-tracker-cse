# See this app in action: [https://training-tracker-gndec.vercel.app/home](https://training-tracker-gndec.vercel.app/home)

## Use Credientials

```
 - SuperAdmin (Username- Tr000 , Password - password)
 - User (Username- 2115127 , Password - password)
```
# Features

- Two factor Authentication 2FA
- Custom CI/CD pipeline for GNDEC College Server
- Storage of Certificate PDF's as base64 in database
- Export Graphical Representation Data for efficient visualization.
- Export Data in CSV as well as Excel format for easy data analysis.



# TODO

1. Add clickable breadcrumbs for navigation (easy)
2. Setup ci/cd
3. Better state management

```bash
git clone https://github.com/whogurdevil/training-tracker-cse
cd training-tracker-cse
```
# Add reuired environment Variables 

- Backend

```bash
DATABASE= Add MongoDb URI
PORT= Backend Port ( like 8000 )
JWT_TOKEN= Custom String
EMAIL= Add email for otp sending using nodemailer ( use gmail only for sending mail )
PASSWORD= Generate password from 2 factor authentication in account.google.com in App Section 
```

- Client ( Add 2 files with same content .env and .env.production)

```bash
VITE_ENV=development or production
VITE_PROD_BASE_URL= Backend Production URL ( e.g. https://foobar.com/api/ )
VITE_DEV_BASE_URL= Backend Development URL ( e.g. http://localhost:8443/api/ )

```

# Run Services

```bash
cd backend
npm i
nodemon index.js
cd ../client
npm i
npm start
```
