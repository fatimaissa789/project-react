import { fetchUser } from "../utils/StorageData"

const userInfo = fetchUser()
export const initialState = {
    user:userInfo,
    foodItems:null,
}