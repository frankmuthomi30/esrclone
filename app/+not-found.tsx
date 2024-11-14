import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-6">
        <Text className="text-2xl font-bold">This screen doesn't exist.</Text>
        <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          <Text className="text-lg">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
