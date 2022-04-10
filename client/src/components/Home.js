import { Navigate } from 'react-router-dom'

const Home = ({ user }) => user ?  
        <div className="cool">
            s00p3r $eekr3t $p0+
        </div> 
    : 
        <Navigate to="/" replace={true} />

export default Home