import Config from 'react-native-config';

enum ApiPath {
    Users = '/users',
    Albums = '/albums',
    Photos = '/photos',
    Posts = '/posts',
    Comments = '/comments',
    Todos = '/todos'
}
enum ApiQueryParam {
    UserId = 'userId',
    AlbumId = 'albumId',
    PostId = 'postId'
}
enum HttpMethod {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Patch = 'PATCH',
    Delete = 'DELETE'
}
enum MimeType {
    ApplicationJson = 'application/json'
}

const apiUrl = (baseUrl: string, path: ApiPath, query?: string): RequestInfo => {
    return `${baseUrl}${path}${query ? `?${query}` : ''}` as RequestInfo;
};

const apiRequest = <T extends any>(url: RequestInfo, method?: HttpMethod, body?: string) => ((): Promise<T> => (
    fetch(url, {
        method: method ? method : HttpMethod.Get,
        headers: {
            Accept: MimeType.ApplicationJson,
            'Content-Type': MimeType.ApplicationJson
        },
        body: body != null && body.length > 0 ? JSON.stringify(body) : null
    })
        .then((response): T => response.json() as any as T)
));
const apiBaseUrl = Config.API_BASE_URL;

class UsersApi implements IUsersApi {
    public getAll() {
        return apiRequest<Array<IUser>>(apiUrl(apiBaseUrl, ApiPath.Users))()
    }

    public getById(id: number) {
        return apiRequest<IUser>(`${apiUrl(apiBaseUrl, ApiPath.Users)}/${id}`)()
    }
}
const Users = new UsersApi();

class AlbumsApi implements IAlbumsApi {
    public getAllByUserId(id: number) {
        const query = `${ApiQueryParam.UserId}=${id}`;
        return apiRequest<Array<IAlbum>>(apiUrl(apiBaseUrl, ApiPath.Albums, query))()
    }
}
const Albums = new AlbumsApi();

class PhotosApi implements IPhotosApi {
    public getAllByAlbumId(id: number) {
        const query = `${ApiQueryParam.AlbumId}=${id}`;
        return apiRequest<Array<IPhoto>>(apiUrl(apiBaseUrl, ApiPath.Photos, query))()
    }
}
const Photos = new PhotosApi();

class PostsApi implements IPostsApi {
    public getAll() {
        return apiRequest<Array<IPost>>(apiUrl(apiBaseUrl, ApiPath.Posts))()
    }
    public getAllByUserId(id: number) {
        const query = `${ApiQueryParam.UserId}=${id}`;
        return apiRequest<Array<IPost>>(apiUrl(apiBaseUrl, ApiPath.Posts, query))()
    }
}
const Posts = new PostsApi();

class CommentsApi implements ICommentsApi {
    public getAll() {
        return apiRequest<Array<IComment>>(apiUrl(apiBaseUrl, ApiPath.Comments))()
    }
    public getAllByPostId(id: number) {
        const query = `${ApiQueryParam.PostId}=${id}`;
        return apiRequest<Array<IComment>>(apiUrl(apiBaseUrl, ApiPath.Comments, query))()
    }
}
const Comments = new CommentsApi();

class TodosApi implements ITodosApi {
    public getAll() {
        return apiRequest<Array<ITodo>>(apiUrl(apiBaseUrl, ApiPath.Todos))()
    }
    public getAllByUserId(id: number) {
        const query = `${ApiQueryParam.UserId}=${id}`;
        return apiRequest<Array<ITodo>>(apiUrl(apiBaseUrl, ApiPath.Todos, query))()
    }
}
const Todos = new TodosApi();

export {Users as UsersApi};
export {Albums as AlbumsApi};
export {Photos as PhotosApi};
export {Posts as PostsApi};
export {Comments as CommentsApi};
export {Todos as TodosApi};
