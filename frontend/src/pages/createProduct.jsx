import React, { useState } from 'react';

function CreateProduct() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0); 
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);

  const categoryData = [
    { title: 'fashion' },
    { title: 'electronics' },
    { title: 'stationary' },
    { title: 'home appliance' }
  ];
  const handleImage=(e)=>{
    const file=Array.from(e.target.file) // array.from('abcd') ['a','b','c','d']
    setImages((prevImages)=>[...prevImages,...file]) 
    const preImg=images.map(i=>{URL.createObjectURL(file)})
    setPreviewImage(prev=>[...prev,preImg])
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Create Product</h1>
      <form className="space-y-4">
        
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter your email"
          />
        </div>

       
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Product name"
          />
        </div>

        
        <div>
          <label className="block font-medium">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Product description"
          />
        </div>

       
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border p-2 w-full rounded"
            placeholder="Product price"
          />
        </div>

        
        <div>
          <label className="block font-medium">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            className="border p-2 w-full rounded"
            placeholder="Available stock"
          />
        </div>

        
        <div>
          <label className="block font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full rounded"
          >
            <option value="">Select Category</option>
            {categoryData.map((cat, index) => (
              <option key={index} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
       <div>
         <label>upload Image</label>
         <input type='Number' value={images} multiple onChange={handleImage}/>
         <div>
            {previewImage.map((image,index)=>{
                return(
                    <img src={images} key={index} className='w-[50px] h-[50px]'/>
                )
            })}
         </div>
       </div>
        
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;