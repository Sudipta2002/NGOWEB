import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [clientuser, setClientUser] = useState();
    const [ngoSearch, setNgoSearch] = useState([]);
    const [search,setSearch]=useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("clientUserInfo"));
        setClientUser(userInfo);
        if (!clientuser) {
            navigate('/');
        }
    }, [navigate])

    return <UserContext.Provider value = {
        { clientuser, setClientUser,search,setSearch,ngoSearch, setNgoSearch}
    } > { children } </UserContext.Provider>
};
export const UserState = () => {
    return useContext(UserContext);
}

export default UserProvider;