
import {atom} from "recoil"
import {IUser} from "../Types/Types"
import { recoilPersist } from "recoil-persist"

const { persistAtom} = recoilPersist()

export const CreateUser = atom({
    key:"New User", // This is a unique identifer or value for the user
    default:{} as IUser, //  This is where all the user information s are beeen kept and its beeen  stored as an object
    effects_UNSTABLE:[persistAtom]
})
