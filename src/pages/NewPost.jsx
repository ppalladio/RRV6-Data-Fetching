import { redirect, useNavigate } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
    const navigate = useNavigate();

    function cancelHandler() {
        navigate('/blog');
    }

    return (
        <>
            <NewPostForm
                onCancel={cancelHandler}
                //' onSubmit={submitHandler} we dont handle onsubmit manually

                submitting={isSubmitting}
            />
        </>
    );
}

export default NewPostPage;

export async function action({ request }) {
    const formData = await request.formData();

    const post = {
        title: formData.get('title'),
        body: formData.get('post-text'),
    };
    try {
        savePost(post);
    } catch (err) {
        if (err.status === 422) {
            throw err;
        }
        throw err;
    }
    return redirect('/blog');
}
//' the request contains the data that was submitted with the form

//' this new function will be added as a new attribute to the path it related to.
