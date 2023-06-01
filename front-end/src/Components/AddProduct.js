import React,{useState} from 'react'

export default function AddProduct() {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const [error,setError] = useState(false);

    const addProduct= async ()=>{
      
      console.warn(!name);
      if(!name || !price || !category || !company){
        setError(true);
        return false;
      }
        console.warn(name,price,category,company)
        const userId =  JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        }); 
        result = await result.json()
        console.warn(result);
       // console.warn(userId._id);
    }
  return (
    <div className='product'>
        <h1>Add Products</h1>
        <input type="text" placeholder='enter product name' className='inputbox'
          value={name} onChange={(e)=>{setName(e.target.value)}}/>
        {error && !name && <span className='invalid-input'>invalid name"</span>} 

         <input type="text" placeholder='enter product price' className='inputbox'
         value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
          {error && !price && <span className='invalid-input'>invalid price"</span>}

         <input type="text" placeholder='enter product category' className='inputbox'
         value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
          {error && !category && <span className='invalid-input'>invalid category"</span>}

         <input type="text" placeholder='enter product company' className='inputbox'
         value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
          {error && !company && <span className='invalid-input'>invalid company"</span>}

         <button className='appbutton' onClick={addProduct}>Add Product</button> 
    </div>
  )
}
