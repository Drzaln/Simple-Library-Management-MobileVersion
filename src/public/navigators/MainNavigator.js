import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import DetailBook from "../../screens/DetailBook";

const AppNavigator = createStackNavigator({
    Home,
    Login,
    Register,
}, {
    headerMode:'none',
    initialRouteName:'Login'
})

export default createAppContainer(AppNavigator)