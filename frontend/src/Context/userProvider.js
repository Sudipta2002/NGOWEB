import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [clientuser, setClientUser] = useState();
    const [ngouser, setNgoUser] = useState();
    const [ngoSearch, setNgoSearch] = useState([]);
    const [search,setSearch]=useState("");
    const [searchDistrict,setSearchDistrict]=useState("");
    const [searchState,setSearchState]=useState("");
    const [searchCountry,setSearchCountry]=useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("clientUserInfo"));
        const ngouserInfo = JSON.parse(localStorage.getItem("ngoUserInfo"));
        setClientUser(userInfo);
        setNgoUser(ngouserInfo);
        if (!clientuser && !ngouser) {
            navigate('/');
        }
        
    }, [navigate])

    return <UserContext.Provider value = {
        { clientuser,ngouser, setClientUser,search,setSearch,ngoSearch, setNgoSearch,searchDistrict,
            setSearchDistrict,searchState,setSearchState,searchCountry,setSearchCountry}
    } > { children } </UserContext.Provider>
};
export const UserState = () => {
    return useContext(UserContext);
}

export default UserProvider;