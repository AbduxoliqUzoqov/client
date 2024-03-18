import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Main = () => {
   const [token,setToken] = useState(localStorage.getItem("token") || null);
   const [user,setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      image: ''
   });
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	useEffect(()=>{
	   const fetAp = async () =>{
	      const url = await fetch(`http://localhost:8080/api/user/${token}`);
	      //const url = await fetch("http://localhost:8080/api/user/0");
	      const data = await url.json()
	      setUser(data)
	   }
	   fetAp()
	},[]);

	return (<><div className='wrapper'>
      <section className="section">
         <header>
            <div className="content">
               <img src={user.image}/>
               <div className="details">
                  <span>{user.firstName} {user.lastName}</span>
                  <p>online</p>
               </div>
            </div>
            <button onClick={handleLogout}>⏫</button>
         </header>
         
         <div className="searchsection">
            <form action="#">
               <input name="searchUser" type="search"/>
               <button type="submit">🔍</button>
            </form>
         </div>
         
         
      </section>
    </div>
   </>);
};

export default Main;
