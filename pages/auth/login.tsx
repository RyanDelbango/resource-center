import { useSelector, useDispatch } from 'react-redux'
import { auth, selectAuth } from '../../libs/slice';

const Login = () => {
    const authenticated = useSelector(selectAuth)
    const dispatch = useDispatch()

    console.log(authenticated, auth());

    return (
        <div className="card-body">
            <h1 className="card-title">
                {authenticated ? 'Welcome' : 'Welcome, please log in.'}
            </h1>
            <div className="card-center">
                <button type="button"
                    className="btn btn-primary"
                    onClick={() => dispatch(auth())}
                >
                    {authenticated ? 'Log out' : 'Login'}
                </button>
            </div>
        </div>
    );
}

export default Login;
