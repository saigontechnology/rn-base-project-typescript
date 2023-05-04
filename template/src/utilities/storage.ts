import AsyncStorage from '@react-native-async-storage/async-storage'

export const clearAllData = async (): Promise<void> => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // Do something if there is error
  }
}

export const setData = async (key: string, data: any): Promise<void> => {
  const stringValue = typeof data === 'string' ? data : JSON.stringify(data)
  try {
    await AsyncStorage.setItem(key, stringValue)
  } catch (e) {
    // Do something if there is error
  }
}

export const getData = async <T>(key: string): Promise<T | string | null> => {
  const jsonValue = await AsyncStorage.getItem(key)
  try {
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (e) {
    return jsonValue
  }
}

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    // Do something if there is error
  }
}
