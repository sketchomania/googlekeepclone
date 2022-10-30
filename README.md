# Welcome to Google keep clone project

## Fronted with React and Tailwind

## Redux managed workflow

## Backend with Node, GraphQl, axios and express-graphql

## Mongoose and MongoDB database

## Installation

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

- able to create ✅ note and label from frontend (CRUD)
- edit and save feature
- note modal close when clicked outside note modal (behavior)
- docker integration

### Web

- { todo }
  - add central asset source
  - search
  - check login valid for 1 hour only
- { note }
  - features
    - edit note
    - CRUD in label form note
    - search note
    - pin note on the top
    - archieve note
    - move to bin
    - copy note
    - delete forever
  - show note modal when clicked on it (anywhere)
  - note modal close behavior
  - { Color and theme }
    - show color and theme change card on note
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
  - improve design
  - remove borders of the components
  - make main head bar fix even when scrolling
- { mobile View }
  - check all designs for mobile view
- { work on this later }
  - show refresh button
  - bin feature , archive also
  - change view from grid to box may be
  - dark mode is not satishfying

### Server

- { todo }
  - Send data only related to the user like notes and labels of logged in user only (working on it)

## DONE

### Web

- { done }
  - show label when clicked on it
  - show label and notes from DB
  - show note modal when clicked on it (anywhere)

### Server

- { done }
  - ✅ create separate branch for working with backend part
  - ✅ send user data in authPayload form server
  - ✅ user, notes and labels deeply nested resolvers
  - ✅ user, notes and labels shcema
  - ✅ send data related to user only
