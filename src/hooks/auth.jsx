import {createContext, useContext, useState, useEffect} from "react";

import {api} from '../service/api'

const AuthContext = createContext({});


function AuthProvider({children}){
  const [data, setData] = useState({});
  
  

  async function signIn({email,password}){
    if(!email || !password){
      return alert("Informe Login e Senha")
    }

    try{

      const response = await api.post("/sessions",{email,password})

      const { user , token} = response.data
      setData({user,token})

      localStorage.setItem("@rocketmovie:user",JSON.stringify(user));
      localStorage.setItem("@rocketmovie:token",token);

      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      
    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível realizar o login.")
      }
    }
  }

  function signOut(navigate){
    localStorage.removeItem("@rocketmovie:token");
    localStorage.removeItem("@rocketmovie:user");

    setData({});

    navigate("/")

    
   
  }

  async function updateProfile({user,navigate,avatarFile}){
    
    if(!user.name || !user.email){
      return alert("O campo nome e email são obrigatórios!")
    }

    try{

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch('/users/avatar',fileUploadForm);
        
        user.avatar =  response.data.avatar
      }

      user.avatar = avatarFile ? user.avatar : data.user.avatar

      await api.put("/users/update",user)
      localStorage.setItem("@rocketmovie:user", JSON.stringify(user))

      setData({user,token:data.token});
   

      await navigate("/")

      return alert('Perfil Atualizado');


    }catch(error){
      if(error.response){
        return alert(error.response.data.message)
      }else{
        return alert("Não foi possível atualizar o perfil.")
      }
    }

  }

  useEffect(()=>{
    
    const token = localStorage.getItem("@rocketmovie:token")
    const user = localStorage.getItem("@rocketmovie:user")

    if(token && user ){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      
      }
        
        )

    }

  },[]);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user:data.user
      }}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth(){
  const context = useContext(AuthContext)

  return context;
}


export {AuthProvider , useAuth}