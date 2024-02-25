import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { saveUserCurrentLocation } from '../../store/reducers/user';

const PrivateRoutes = () => {
    
    const dispatch =useAppDispatch()
    const userLogged = useAppSelector((state) => state.user.isLogged)
    const userLoginSucceed = useAppSelector((state) => state.auth.isLoginSucceed)
    const location = useLocation()


    //save the previous path when user is redirected to /login
    if(!userLogged) dispatch(saveUserCurrentLocation(location.pathname))

    return(
        userLogged || userLoginSucceed ? <Outlet/> : <Navigate to="/login" />
    )
}

export default PrivateRoutes
