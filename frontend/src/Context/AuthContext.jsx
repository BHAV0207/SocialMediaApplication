import React from 'react'
import { useContext , createContext , useEffect , useState } from 'react'
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user , setUser] = useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchUserData();
    }
    else{
      setLoading(false)
    }
  })


  const fetchUserData = async () => {
    try{
      const res = await axios.get('http://localhost:6000/api/users/profile');
      setUser(res.data);
    }catch(err){
      localStorage.removeItem('token');
    }
    finally{
      setLoading(false);
    }
  }


  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:6000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      setUser(res.data);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'An error occurred',
      };
    }
  };


  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const register = async (userData) => {
    try {
      const res = await axios.post('http://localhost:6000/api/auth/register', userData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'An error occurred',
      };
    }
  };


  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }} >
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {useContext(AuthContext)}