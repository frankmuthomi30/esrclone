import { Image, ScrollView, Text, View } from 'react-native';
import './global.css';

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}> {/* Allow content to fill the screen */}
      <View className="p-4 flex-1"> {/* Make the main view flexible */}
        <Text className="text-3xl font-bold">Explore</Text>
        <Text>This app includes example code to help you get started.</Text>

        <View className="mt-4">
          <Text className="font-bold">Images</Text>
         
        </View>

        {/* Add more sections as needed */}

      </View>
    </ScrollView>
  );
}
