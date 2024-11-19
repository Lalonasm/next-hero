import React from 'react';

// export const metadata = {
//     title: "Post Details",
//     description: "This is from post details"
// }
export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const postData = await res.json();
    return {
        title: {
            absolute:`${postData.title}`
        },
        description: postData.body,
        keywords: postData.body.split(' ')
    }

}

const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json();
    return data;
}

const PostDetailsPage = async ({ params }) => {
    const { title, body } = await getDetailsPost(params.id)
    return (
        <div>
            <h6>Title : {title}</h6>
            <h6>Description : {body}</h6>
        </div>
    );
};

export default PostDetailsPage;