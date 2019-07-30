import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../../screens/Home";
import Login from "../../screens/Login";

const AppNavigator = createStackNavigator({
    Home,
    Login,
}, {
    headerMode:'none',
    initialRouteName:'Login'
})

export default createAppContainer(AppNavigator)