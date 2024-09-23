import { useContext, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import UserContext from "../../context/UserContext";
import { Header } from "../../components/Header/Header";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { userName, setUserName } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    const userDataStorage = JSON.parse(sessionStorage.getItem("userToken"))

    if(userDataStorage) {
      const userData = jwtDecode(userDataStorage.token);
      setUserName(userData.name);
    }else{
      navigate('/login')
    }
  }, [])
  
  return (
    <Layout>
      <Header title="Perfil" userName={userName}/>
    </Layout>
  );
}
