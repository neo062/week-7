import { useNavigate } from 'react-router-dom'
const Appbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => {
                navigate('/')
            }}>
                Landing Page
            </button>
            <button onClick={() => {
                navigate('/dashboard')
            }}>
                Dashboard
            </button>
        </div>
    )
}

export default Appbar