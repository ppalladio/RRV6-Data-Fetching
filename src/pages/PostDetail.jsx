
import { useLoaderData } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
    const postData = useLoaderData();
    return (
        <>
            <BlogPost title={postData.title} text={postData.body} />
        </>
    );
}

export default PostDetailPage;

export function loader({ params }) {
    const postId = params.id;
    // ' it is called id because the dynamic link points to :id
    return getPost(postId);
}
//' the function returns a promise
