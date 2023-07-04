import { FetchData } from "./config";

export async function RegisterUser(user: any) {
    const result = await FetchData("POST", user, "/v1/user/signup");
    return result;
}