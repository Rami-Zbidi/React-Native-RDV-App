import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './componant/home';
import ListRDV from './componant/listRDV';
import AddRDV from './componant/addRDV';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      appointment: {
          date: '01/01/2001',
          title: 'meeting',
          content: 'something',
          time: '01:01',
      },
  },
  ]);

  const addAppointment = (newAppointment) => {
    setAppointments((Appointments) => [...Appointments, newAppointment])
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ListRDV">
          {(props) => <ListRDV {...props} DATA={appointments} />}
        </Stack.Screen>
        <Stack.Screen name="AddRDV">
        {(props) => <AddRDV {...props} addAppointment={addAppointment} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
