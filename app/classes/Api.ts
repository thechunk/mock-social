import Config from 'react-native-config';

export enum ApiPath {
    Users = '/users'
}
export enum HttpMethod {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Patch = 'PATCH',
    Delete = 'DELETE'
}

const apiUrl = (baseUrl: String, path: ApiPath): RequestInfo => {
    return `${baseUrl}${path}` as RequestInfo;
};

const apiRequest = <T extends any>(url: RequestInfo, method?: HttpMethod, body?: String) => ((): Promise<T> => (
    fetch(url, {
        method: method ? method : HttpMethod.Get,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: body != null && body.length > 0 ? JSON.stringify(body) : null
    })
        .then((response): T => response.json() as any as T)
));
const apiBaseUrl = Config.API_BASE_URL;

export interface IUser {
    id: number,
    name: String,
    username: String,
    email: String
}
export interface IUsersApi {
    getAll(): Promise<Array<IUser>>;
    getById(id: number): Promise<IUser>;
}
class UsersApi implements IUsersApi {
    public getAll() {
        return apiRequest<Array<IUser>>(apiUrl(apiBaseUrl, ApiPath.Users))()
    }

    public getById(id: number) {
        return apiRequest<IUser>(`${apiUrl(apiBaseUrl, ApiPath.Users)}/${id}`)()
    }
}
const Users = new UsersApi();

export {Users as UsersApi};