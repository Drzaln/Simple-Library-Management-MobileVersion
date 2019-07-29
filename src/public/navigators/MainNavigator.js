import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../../screens/Home";

const AppNavigator = createStackNavigator({
    Home,
}, {
    headerMode:'none',
    initialRouteName:'Home'
})

export default createAppContainer(AppNavigator)