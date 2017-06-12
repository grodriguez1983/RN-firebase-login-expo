# Super basic ReactNative boilerplate

This project is a super basic starter kit using Expo, Redux, Redux-from, redux-thunk and react-navigation.

## Pre-commit hooks - ESLint
You are going to notice that you won't be able to commit without fixing every eslint error.
With pre-commit this configures eslint as a hook that runs before each commit.

If you don't want to get this pre-commit hook you can remove `pre-commit` from your
`devDependencies`, the configuration from the root of the package.json object and don't
forget that the scripts `eslint` and `add-all` will be no longer necessary either.

Also, feel free to change `.eslintrc` with your own code style.

## What's inside?

If you run the app you're going to see Login and SignUp Screens managed using Redux and Redux-Form and the user is created and managed by `firebase`, after the login you can navigate using `react-navigation` and see and expample of and simple action on Reddux

## Screenshots
![image](https://user-images.githubusercontent.com/12762757/27049176-e1071b80-4f84-11e7-9517-cd4e619b9bac.png)
![image](https://user-images.githubusercontent.com/12762757/27049101-a6e1c496-4f84-11e7-88b6-f5b4087a884e.png)
