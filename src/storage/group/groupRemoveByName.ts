import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION } from "@storage/storageConfig"
import { groupsGetAll } from "./groupsGetAll"

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll()

    const filtered = storedGroups.filter(group => group !== groupDeleted)
    const groups = JSON.stringify(filtered)

    await AsyncStorage.setItem(GROUP_COLLECTION, groups)
    await AsyncStorage.removeItem(`${GROUP_COLLECTION}-${groupDeleted}`)
  } catch (error) {
    throw error
  }
}