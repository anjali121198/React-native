import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
const screens = {
    SignIn:{
        screen:SignIn
    },
    SignUp:{
        screen:SignUp
    },
 }

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);