This is the take home project that mimics that Framer example for Uber. The project can be seen on -- https://still-refuge-72832.herokuapp.com/ 



To install locally:
1. make sure you have node and yarn up to date
2. clone the project
3. run `yarn install`
4. run `yarn start`

Things to note:
1. The UberSwipe component is a copy of the react-swipe node module. The original module's css classes were not functioning properly with how I wanted to set up my classes, so I copied the project and added some classes of my own -- for the sake of time.
2. React-touch is also a node module from which I am using their Swipeable object, allowing my to use swipe functionality on the Desktop verison of the application.