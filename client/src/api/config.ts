import axios from 'axios';

export const url = "http://localhost:8080/api";

export async function FetchData(method: string, data: string, api: string) {
    const requestOptions = {
        method: method,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
    };

    try {
        const response = await axios(url + api, requestOptions);

        const json = response.data;

        if (json.message) throw new Error(json.message);

        return json;
    } catch (err: any) {
        return err.message;
    }
}

// export async function FetchDataGet(username, api, name) {
//     const response = await axios.get(url + api + `?${name}=${username}`);

//     const json = response.data;

//     return json;
// }

export const isDataValid = (user: any) => {
    return Object.values(user).every((field) => {
        return field;
    });
};
