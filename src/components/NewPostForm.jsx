import classes from './NewPostForm.module.css';
import { Form } from 'react-router-dom';
//'use form component to handle form submission in react-router v6
function NewPostForm({ onCancel, submitting }) {
    return (
        <Form className={classes.form} method="post" action="/blog/new">
            {/**
             * //' attribute ACTION define the path where the request will be sent to'
             * //' actually no request was sent anywhere, this is still a client side code, request will be send to action function defined us, which we can then send to backend server or perform other behaviors '
             */}
            <fieldset>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    minLength={5}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="text">Post Text</label>
                <textarea
                    id="text"
                    name="post-text"
                    required
                    minLength={10}
                    rows={5}
                ></textarea>
            </fieldset>
            <button type="button" onClick={onCancel} disabled={submitting}>
                Cancel
            </button>
            <button disabled={submitting}>
                {submitting ? 'Submitting...' : 'Create Post'}
            </button>
        </Form>
    );
}

export default NewPostForm;
