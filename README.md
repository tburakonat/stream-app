# Stream App

This project contains a frontend with Create React App, a simple backend which contains a JSON database and a RTMP Server to request live streams.
You can copy this project and use `npm start in the api and client directories` to start it locally.

This app also uses:

## React-Redux

-   Redux manages state by storing the currently signed-in user and streams that are fetched by components

## Redux Thunk

-   Redux Thunk allows async events in action creators

## React Router

-   The routes follow REST convention

## React Final Form

-   Before users can create or edit streams react final form validates their inputs and shows error messages if needed

## Google OAuth

-   Users can watch any created livestream but only if they are signed in they can create a live stream, edit and delete their livestream

## Images

1. This is the Startpage of the app
![Startpage of the app](https://user-images.githubusercontent.com/97620083/182022109-78c787d9-d917-488b-a18e-49783462b4c8.png)

2. This is the Google OAuth Modal
![Google OAuth Modal](https://user-images.githubusercontent.com/97620083/182022164-782ebe8f-d151-4a99-abe6-910944c35302.jpg)

3. This is the redux store of the app
![Redux Store](https://user-images.githubusercontent.com/97620083/182022223-5d5b79e4-d1d4-4b60-9a85-f085b70bc89d.png)

4. Users can only edit / delete their own streams
![Users can edit and delete their streams](https://user-images.githubusercontent.com/97620083/182022245-061691a0-096d-4c00-bc99-b8727a4d74de.png)
