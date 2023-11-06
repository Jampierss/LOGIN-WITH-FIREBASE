# Firebase Authentication App - Login

This is an example project for an authentication app developed using Firebase. It allows users to register, log in, and authenticate with Google. The app uses Firebase credentials for user authentication.

## Firebase Configuration

Before running the app, you need to configure Firebase with your own credentials. You can do this by editing the `index.html` file and replacing the `firebaseConfig` object with your own Firebase credentials. Make sure you have enabled email and Google authentication in your Firebase project.

```javascript
const firebaseConfig = {
    apiKey: "Your_API_Key",
    authDomain: "Your_Domain.firebaseapp.com",
    projectId: "Your_Project_ID",
    storageBucket: "Your_Storage_Bucket",
    messagingSenderId: "Your_Messaging_Sender_ID",
    appId: "Your_App_ID",
    measurementId: "Your_Measurement_ID"
};
```

## Usage

The application has the following features:

- **User Registration:** To register a user, fill in the required fields (email and password) and click the "Sign Up" button.

- **Login:** Registered users can log in using their email and password. Enter the login credentials and click the "Sign In" button.

- **Google Sign-In:** You can also sign in with your Google account. Just click the "Sign In with Google" button.

- **Logout:** To log out, click the "Sign Out" button.

## View

[![screenshoot.jpg](https://i.postimg.cc/SR86YP9F/screenshoot.jpg)](https://postimg.cc/WqNFQXSX)

[![screenshoot1.jpg](https://i.postimg.cc/Vk4jtnJ6/screenshoot1.jpg)](https://postimg.cc/dhkkP7mP)

[![screenshoot2.jpg](https://i.postimg.cc/W1fdjnDM/screenshoot2.jpg)](https://postimg.cc/21hk7n76)
