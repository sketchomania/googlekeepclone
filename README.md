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

## 📃 TODO

### 📌 Priority

- Make Readme
- deploy the backend
- {note, label}: update feature
- search
- note modal close when clicked outside note modal (behavior)
- docker integration
- ✅ Cleanup functions, check if it can be used

### Web

- { todo }
  - add central asset source
  - check login valid for 1 hour only
- { note }
  - features
    - edit note
    - CRUD in label form note
    - pin note on the top
    - archieve note
    - copy note
    - move to bin
    - delete forever
    - note modal close behavior
  - { Color and theme }
    - show color and theme change note card colors
    - add themes
- { label }
  - show label inside note
  - create new label
  - bin label
  - archive label
  - CRUD
    - CRUD for label from side bar
    - CRUD label in note
  - separate page for each label to show notes of that label
- { design }
  - improve design & theme look
- { mobile View }
  - check all designs for mobile view
- { archieve }
  - show refresh button
  - bin feature , archive also
  - change view from grid to box may be
  - dark mode perfection

### 📃Server

- { todo }
  - Send data only related to the user like notes and labels of logged in user only (working on it)

## DONE 🎉🎉

### Web

- { done }
  - ✅ {note, label}: delete feature
  - ✅ push notes and labels in redux state data (when created)
  - ✅ Show loading Spinner while loading
  - ✅ show label when clicked on it
  - ✅ show label and notes from DB
  - ✅ show note modal when clicked on it (anywhere)
  - ✅ Login issues fixed
  - { design }
    - ✅ removed extra side scroll bar
    - ✅ Note component styling 
    - ✅ AddNote bar design Done
    - ✅ remove borders of the components
    - ✅ make main head bar fix even when scrolling

### Server

- { done }
  - ✅ create separate branch for working with backend part
  - ✅ send user data in authPayload form server
  - ✅ user, notes and labels deeply nested resolvers
  - ✅ user, notes and labels shcema
  - ✅ send data related to user only
  - ✅ create note and label
