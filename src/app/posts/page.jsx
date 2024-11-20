// import { getPosts } from "@/services/postApi";
import Link from "next/link";
import { redirect } from "next/navigation";

// export const metadata = {
//     title: "Post ",
//     description: "About post",
// };

const getPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    // if (data) {
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data;
}


const PostPage = async () => {


    const postsData = await getPost()
    // console.log(postsData);

    return (
        <div className="">
            <h6>All Posts </h6>
            <div className="grid grid-cols-4 gap-6">
                {
                    postsData?.slice(0, 20)?.map(({ title, body, id }) => (
                        <div key={id} className="p-6 border-2">
                            <h6 className=" font-bold">Title: {title}</h6>
                            <h6>Description :{body}</h6>
                            <button className="bg-red-400  font-bold py-2 px-4 rounded"><Link href={`/posts/${id}`}>See Details</Link></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;