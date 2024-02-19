const baseURL='https://jsonplaceholder.typicode.com';

const users='/users'
const posts='/posts'


const urls={
    users:{
        base:users,
        byId:(id)=>`${users}/${id}`,
        getPostByUserId:(id)=>`${users}/${id}/posts`
    },
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    }
}

export {
    baseURL,urls
}