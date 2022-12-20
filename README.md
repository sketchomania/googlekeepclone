# Welcome to Google keep clone project

## 🛠️ Tools and Technologies

### Fronted

- React
- Tailwind
- React Router v6

### State Management

- Redux
- Redux-thunk

### Backend

- Node.js
- GraphQl
- Axios
- express-graphql

### DataBase

- MongoDB Atlas

## 📄 Features

- React with Tailwing Css
- Redux managed workflow
- Graphql for fetching data
- GraphQl Scheme

## ⚙️ Installation

### Clone the repo

```
git clone https://github.com/sketchomania/googlekeepclone.git
```

### Frontend

- change the directory and install all dependencies

  ```
  cd web && npm install
  ```

- create a .env file
  ```
  touch .env
  ```
- add the followin to ".env" file
  ```bash
  # replace with yours
  JWT_SECRET=jwt_sercret
  REACT_APP_API=http://localhost:5000/graphql
  ```
- Start the client
  ```
  npm start
  ```

### Backend

- change the directory and install all dependencies

  ```
  cd server && npm install
  ```

- create a .env file
  ```
  touch .env
  ```
- add the followin to ".env" file
  ```bash
  # replace with yours
  DB_USER=mongo_user_name
  DB_PASS=mongo_password
  DB_NAME=data_base_name
  JWT_SECRET=jwt_sercret
  PORT=5000
  ```
- Start the server
  ```
  npm start
  ```

## Contribution

- note modal close when clicked outside note modal (behavior)

### Features

- onclick of `Esc` button modal should close

## 📃 TODO

### 📌 Priority

- note background image
- add label in note
- dark mode in tailwind
- make noteData and its modificaton function in note component only (not in note modal)

### TODO Web

- Make Readme
- search note, label
- docker integration
- Cleanup functions, check where it can be used
- APPBAR :
- LABEL :
  - show label name on appBar when viewing particular label
- AUTH :
  - check login validity for 1 hour only
- NOTE :
  - add note bar closed when clicked outside
  - show pinned note on top then other notes
  - CRUD in label form note
  - pin note on the top
  - archieve note
  - copy note
  - move to bin
  - note have a 1px border of selected colour
- { Color and theme }
  - show background change modal on note
  - add themes for notes
- DESIGN :
  - improve design & theme look
  - dark mode perfection
- MOBILE VIEW :
  - check all designs for mobile view
- ARCHIEVE :
  - bin feature , archive feature
  - change view from grid to box
  - add central asset source for svg (not working)

### Todo Server

- Send data only related to the user like notes and labels of logged in user only (working on it)
- {Backend}: note: backgroundImage backgroundColor

## 📃 DONE 🎉🎉

### 🚀 Working on Web

- 🎉 Deployed and working
- **NOTE :**
  - ✅ {note}: show check and action bar on note component
  - ✅ {note}: show note icons on hover effect
  - ✅ {note}: show color change modal on note
  - ✅ {note}: show label inside note
  - ✅ {note}: show last edited time
  - ✅ {note, label}: delete feature
  - ✅ {note}: show labels in label tab
  - ✅ {note}: update feature (edit note)
  - ✅ {note}: show note modal when clicked on it (anywhere)
- **LABEL :**
  - ✅ {label}: Edit/update, delete feature (Modal)
  - ✅ {label}: show modal for CRUD Labels
  - ✅ {label}: CRUD for label from side bar
  - ✅ {label}: show all notes of a label, when clicked on it
  - ✅ {label}: separate page for each label to show notes of that label
- **APPBAR :**
  - ✅ Appbar icons and functionality
  - ✅ Appbar refresh button with spinner
- **DATA & REDUX :**
  - ✅ push notes and labels in redux state data (when created)
  - ✅ show label and notes from DataBase
- **UI :**
  - 🎉 modal close when clicked outside note modal (behavior)
  - ✅ show refresh button
  - ✅ {UI}: loading spinner UI improvement
  - ✅ {UI}: Show loading Spinner while loading
- **AUTH :**
  - ✅ {auth}: Login with test credentials
  - ✅ {auth}: Auth form stylings
  - ✅ {auth}:Login issues fixed
- **DESIGN :**
  - ✅ scollbar border and hover effect as google keep
  - ✅ Google keep logo
  - ✅ note icons trasparent background
  - ✅ removed extra side scroll bar
  - ✅ Note component styling
  - ✅ AddNote bar design Done
  - ✅ remove borders of the components
  - ✅ make main head bar fix even when scrolling

### 🚀 Working on Server

- 🎉 server deployed and working
- ✅ create separate branch for working with backend part
- ✅ send user data in authPayload form server
- ✅ user, notes and labels deeply nested resolvers
- ✅ user, notes and labels shcema
- ✅ send data related to user only
- ✅ create note and label

- https://giphy.com/gifs/socializeagency-illustration-rocket-flipbook-ii8uedZgeKlIKJq1Rz
- https://giphy.com/gifs/coming-soon-14ko1wkUS2thu
