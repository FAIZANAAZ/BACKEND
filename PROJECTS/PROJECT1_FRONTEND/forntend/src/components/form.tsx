"use client"

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  Button,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import ENQUIRY_List from "./list";
import axios from 'axios';
import Swal from 'sweetalert2'




const UserForm = () => {
 

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id:""
  });

  const onsubmit = (e: any) => {

    e.preventDefault();



    if (form._id) {

      axios.put(`https://localhost:4000/websites/api/put/${form._id}`, form).then((res) => {
        toast.success('Form submitted successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          _id:""
        })

        getData()
      })
      
    }else{
    axios.post('https://localhost:4000/websites/api/insert',form)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          _id:""
        })
        // ye hm reset kry hen again data
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });

      toast.success('Form submitted successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }}




  // get data

  const [getlist, setgetlist] = useState()
  const getData=async()=>{
    axios.get('https://localhost:4000/websites/api/get').then((res)=>{
      return res.data
    }).then((finalData)=>{
      if (finalData.status){
        setgetlist(finalData.data)
      }
    })
    
  }


useEffect(()=>{
  getData()
},[])


  const getValue=(e:any)=>{
     
    const inputName :string=e.target.name;
    const inputValue=e.target.value;
    const oldData:any={...form}
    oldData[inputName]=inputValue;
    setForm(oldData);
    
    

  }

  return (
    <div className="p-3">
       <ToastContainer />
       {/* ye call krna hita he zaror */}
      <h1 className='text-3xl py-6 font-bold'>USER ENQUIRY</h1>
      
      <div className='flex items-center justify-center rounded-xl shadow-md gap-24'>
        <form onSubmit={()=>{
          onsubmit(event)
        }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <Label htmlFor="name">Your Name</Label>
            <TextInput id="name" type="text" name='name' placeholder="Enter your name" value={form.name} onChange={getValue} />
          </div>

          <div>
            <Label htmlFor="email1">Your Email</Label>
            <TextInput id="email1" type="email" name='email' placeholder="Enter your email" value={form.email}  onChange={getValue}/>
          </div>

          <div>
            <Label htmlFor="phon">Your Phone</Label>
            <TextInput id="phon" type="tel" name='phone' placeholder="Enter your phone number" value={form.phone} onChange={getValue} />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="textarea">Your Message</Label>
            <Textarea id="textarea" name='message' placeholder="Enter your message" rows={4} value={form.message} onChange={getValue}/>
          </div>

          <div className="md:col-span-2">
            <Button type="submit">
              {form._id ? "Update" : "Submit"}
            </Button>
          </div>

        </form>

        <div>
          <ENQUIRY_List data={getlist} get={getData} Swal={Swal} setForm={setForm}/>
        </div>
      </div>

    </div>
  );
};

export default UserForm;
