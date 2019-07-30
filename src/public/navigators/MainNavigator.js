import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import DetailBook from "../../screens/DetailBook";
import AddBook from "../../screens/AddBook";

const AppNavigator = createStackNavigator({
    Home,
    Login,
    Register,
    DetailBook,
    AddBook,
}, {
    headerMode:'none',
    initialRouteName:'Home'
})

export default createAppContainer(AppNavigator)