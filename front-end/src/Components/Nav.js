import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

export default function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout =()=>{
    console.warn("apple");
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
    <img 
    alt='logo'
    className='logo'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYugcd50H-J9k2aqtQ8GgebajaY3aMC7k7uw&usqp=CAU'></img>
        { auth? <ul className='nav-ul'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">Update Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li> 
            
        </ul>
        :
        <ul className='nav-ul nav-right'>
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
        }
    </div>
  )
}
