
import{useLoaderData} from 'react-router-dom'
import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
const loaderData = useLoaderData()
//'loaderData gets the result from the url in getPosts()
    return (
        <>
            <h1>Our Blog Posts</h1>
            <Posts blogPosts={loaderData}/>
        </>
    );
}
//' the page is only rendered when the info have arrived

export default BlogPostsPage;

export function loader() {
    return getPosts();
}
