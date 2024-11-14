import { Text, View } from 'react-native';
import './global.css'; // Corrected import

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
      <Text className="text-4xl font-bold text-black">
        Welcome to my app!
      </Text>
    </View>
  );
}
