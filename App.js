import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './componant/home';
import ListRDV from './componant/listRDV';
import AddRDV from './componant/addRDV';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ListRDV" component={ListRDV} />
        <Stack.Screen name="AddRDV" component={AddRDV} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
