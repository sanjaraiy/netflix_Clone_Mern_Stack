import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Browser() {
  const user  = useSelector(store => store.app.user);
  const navigate = useNavigate();
   
  useEffect(()=>{
    if(!user){
      navigate("/");
   }
  },[])
  return (

    <div>
        <Header></Header>
        <div>
            Browser
        </div>
    </div>
  )
}

export default Browser