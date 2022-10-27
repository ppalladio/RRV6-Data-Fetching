import {
    redirect,
    useNavigate,
    useActionData,
    useNavigation,
} from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
    const navigate = useNavigate();
    const data = useActionData();
    const navigation = useNavigation();
    //#navigation gives more info about if our action and loader functions are doing some work and their status
    function cancelHandler() {
        navigate('/blog');
    }

    return (
        <>
            {data && data.status && <p>{data.message}</p>}
            <NewPostForm
                onCancel={cancelHandler}
                //' onSubmit={submitHandler} we dont handle onsubmit manually
                submitting={navigation.state === 'submitting'}
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
            return err;
        }
        throw err;
    }
    return redirect('/blog');
}
//' the request contains the data that was submitted with the form

//' this new function will be added as a new attribute to the path it related to.
