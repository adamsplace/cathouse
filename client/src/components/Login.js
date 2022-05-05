import { useNavigate } from 'react-router-dom'
export default function Login() {

    const navigate = useNavigate()
    const goBack = () => navigate( "/" )

    return (
        <div className="cool">
            <h1>I'm the login page!</h1>
            <button onClick={goBack}>back</button>
        </div>
    )
}