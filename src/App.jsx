import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostLoader } from './pages/BlogPosts';
import NewPostPage from './pages/NewPost';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />}>
            <Route index path="/" element={<WelcomePage />} />
            <Route path="/blog" element={<BlogLayout />}>
                <Route
                    index
                    element={<BlogPostsPage />}
                    loader={blogPostLoader}
                />
                <Route path=":id" element={<PostDetailPage />} />
            </Route>
            <Route path="/blog/new" element={<NewPostPage />} />
        </Route>,
    ),
);

function App() {
    return <RouterProvider router={route} />;
}

export default App;
