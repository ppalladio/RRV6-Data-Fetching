import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostLoader } from './pages/BlogPosts';
import NewPostPage, { action as newPostAction } from './pages/NewPost';
import PostDetailPage, { loader as postDataLoader } from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/ErrorPage';

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />} errorElement={ErrorPage}>
            <Route index path="/" element={<WelcomePage />} />
            <Route path="/blog" element={<BlogLayout />}>
                <Route
                    index
                    element={<BlogPostsPage />}
                    loader={blogPostLoader}
                />
                <Route
                    path=":id"
                    element={<PostDetailPage />}
                    loader={postDataLoader}
                />
            </Route>
            <Route
                path="/blog/new"
                element={<NewPostPage />}
                action={newPostAction}
            />
        </Route>,
    ),
);

function App() {
    return <RouterProvider router={route} />;
}

export default App;
