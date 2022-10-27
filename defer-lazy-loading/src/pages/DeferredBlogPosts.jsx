import { useLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';
import Posts from '../components/Posts';
import { getSlowPosts } from '../util/api';

function DeferredBlogPostsPage() {
    const loaderData = useLoaderData();

    return (
        <>
            <h1>Our Blog Posts</h1>
            <Suspense fallback={<p>loading...</p>}>
                <Await
                    resolve={loaderData.posts}
                    errorElement={<p> error loading blog posts</p>}
                >
                    {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
                    {/* //' has to pass in a function once the data arrived' */}
                </Await>
            </Suspense>
            {/* //'for Await to work, has to wrap it in suspense' */}
        </>
    );
}

export default DeferredBlogPostsPage;

export async function loader() {
    return defer({ posts: getSlowPosts() });
}
