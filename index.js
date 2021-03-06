/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { Provider as PaperProvider } from 'react-native-paper'
// import { Provider as StoreProvider } from 'react-redux'
// import store from './src/public/redux/store'

export default function Index () {
  return (
    // <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    // </StoreProvider>
  )
}

AppRegistry.registerComponent(appName, () => App)
