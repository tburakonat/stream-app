# Stream App

This project contains a frontend with Create React App, a simple backend which contains a JSON database and a RTMP Server to request live streams.

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
