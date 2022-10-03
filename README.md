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

- change the directory
  ```
  cd client
  ```
- install all dependencies
  ```
  npm install
  ```
- create a .env file
  ```
  touch .env
  ```
- add the followin to ".env" file
  ```bash
  # replace with your
  EFSDF_KEY = DFASDF
  EFSDF_KEY = DFASDF
  ```
- Start the client
  ```
  npm start
  ```

### Backend

- change the directory
  ```
  cd client
  ```
- install all dependencies
  ```
  npm install
  ```
- create a .env file
  ```
  touch .env
  ```
- add the followin to ".env" file
  ```bash
  # replace with your
  EFSDF_KEY = DFASDF
  EFSDF_KEY = DFASDF
  ```
- Start the server
  ```
  npm start
  ```

# TODO

## 📌 Priority

- ⭕CURR⭕ add note from frontend
- ⭕ able to add data from frontend 
- show data related to user only (almost done, got one error)
- able to create note and label from frontend
- edit note and save
- CRUD label and note
- note modal close when clicked outside note modal (behavior)
- docker integration

## documenting

- { todo }
  - document every task todo or done
- { done }

## web related

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

## server related

- { todo }
  - Send data only related to the user like notes and labels of logged in user only

# DONE

## web related

- { done }
  - show label when clicked on it
  - show label and notes from DB
  - show note modal when clicked on it (anywhere)

## server related

- { done }
  - create separate branch for working with backend part
  - send user data in authPayload form server
  - user, notes and labels deeply nested resolvers
  - user, notes and labels shcema
