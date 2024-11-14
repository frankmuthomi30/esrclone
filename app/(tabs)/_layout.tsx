import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import HomeScreen from './index'; // Import your HomeScreen component
import ExploreScreen from './explore'; // Import your ExploreScreen component
import './global.css'; 

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Set active tab color
        tabBarInactiveTintColor: 'gray', // Set inactive tab color
        // ... other tab bar options you might need
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => ( // Access color and size props
            <View className="flex items-center justify-center"> 
              {/* Center icon and text */}
              {/* Replace with your home icon component */}
              <Text style={{ color, fontSize: size }}>Home</Text> 
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View className="flex items-center justify-center">
              {/* Replace with your explore icon component */}
              <Text style={{ color, fontSize: size }}>Explore</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
