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

- appBar show label name
- Make Readme
- search note, label
- docker integration
- Cleanup functions, check where it can be used

### Web

- { todo }
  - {Color} show color change modal on note
  - show label name on appBar when viewing particular label
  - check login valid for 1 hour only
- { note }
  - features
    - CRUD in label form note
    - pin note on the top
    - archieve note
    - copy note
    - move to bin
    - note modal close behavior
  - { Color and theme }
    - show color change modal on note
    - show background change modal on note
    - add themes for notes
  - { label }
- { design }
  - improve design & theme look
- { mobile View }
  - check all designs for mobile view
- { archieve }
  - note modal close when clicked outside note modal (behavior)
  - show refresh button
  - bin feature , archive feature
  - change view from grid to box
  - dark mode perfection
  - add central asset source for svg (not working)

### 📃Server

- { todo }
  - Send data only related to the user like notes and labels of logged in user only (working on it)

## DONE 🎉🎉

### Web

- { done }
  - ✅ show check and action bar on note component
  - ✅ show note icons on hover effect
  - ✅ Login with test credentials
  - ✅ show note color change modal
  - ✅ Appbar icons and functionality,
  - ✅ loading spinner UI improvement
  - ✅ {label}: Edit/update, delete feature (Modal)
    - CRUD for label from side bar
  - ✅ Google keep logo
  - ✅ {label}: show modal for CRUD Labels
  - ✅ show all notes of a label, when clicked on it
    - separate page for each label to show notes of that label
  - ✅ Auth form stylings
  - ✅ {note}: show label inside note
  - ✅ {note}: show last edited time
  - ✅ {note}: show labels in label tab
  - ✅ {note}: update feature (edit note)
  - ✅ {note, label}: delete feature
  - ✅ push notes and labels in redux state data (when created)
  - ✅ Show loading Spinner while loading
  - ✅ show label and notes from DB
  - ✅ show note modal when clicked on it (anywhere)
  - ✅ Login issues fixed
  - { design }
    - ✅ note icons trasparent background
    - ✅ removed extra side scroll bar
    - ✅ Note component styling
    - ✅ AddNote bar design Done
    - ✅ remove borders of the components
    - ✅ make main head bar fix even when scrolling

### Server

- { done }

  - 🎉 server deployed and working
  - ✅ create separate branch for working with backend part
  - ✅ send user data in authPayload form server
  - ✅ user, notes and labels deeply nested resolvers
  - ✅ user, notes and labels shcema
  - ✅ send data related to user only
  - ✅ create note and label

- https://giphy.com/gifs/socializeagency-illustration-rocket-flipbook-ii8uedZgeKlIKJq1Rz
- https://giphy.com/gifs/coming-soon-14ko1wkUS2thu
