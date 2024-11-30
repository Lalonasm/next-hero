

export async function GET() {
    return Response.json({
        comments
    })
}
export async function POST(request) {
    const newComment = await request.json();
    comments.push({
        id: comments.length + 1,
        text: newComment.text
    });
    return Response.json({
        message: 'new comment added',
        comments
    })
}





const comments = [
    {
        id: 1,
        text: 'comment 1'
    },
    {
        id: 2,
        text: 'comment 2'
    },
    {
        id: 3,
        text: 'comment 3'
    },
    {
        id: 4,
        text: 'comment 4'
    },
    {
        id: 5,
        text: 'comment 5'
    },
]