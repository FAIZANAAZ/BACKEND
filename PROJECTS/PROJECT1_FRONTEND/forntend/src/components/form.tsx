"use client"

import React from 'react';
import {
  Button,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import ENQUIRY_List from "./list";
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface UserFormProps {
  onSubmit?: (formData: FormData) => void;
}

const UserForm: React.FC<UserFormProps> = (props) => {
  const formdata: FormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formdata.name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
    formdata.email = (e.currentTarget.elements.namedItem('email1') as HTMLInputElement).value;
    formdata.phone = (e.currentTarget.elements.namedItem('phon') as HTMLInputElement).value;
    formdata.message = (e.currentTarget.elements.namedItem('textarea') as HTMLTextAreaElement).value;

    axios.post('https://localhost:4000/websites/api/insert', formdata)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });

    console.log('Form submitted!');
    if (props.onSubmit) {
      props.onSubmit(formdata);
    }
  };

  return (
    <div className="p-3">
      <h1 className='text-3xl py-6 font-bold'>USER ENQUIRY</h1>
      
      <div className='flex items-center justify-center rounded-xl shadow-md gap-24'>
        <form onSubmit={onsubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <Label htmlFor="name">Your Name</Label>
            <TextInput id="name" type="text" placeholder="Enter your name" />
          </div>

          <div>
            <Label htmlFor="email1">Your Email</Label>
            <TextInput id="email1" type="email" placeholder="Enter your email" />
          </div>

          <div>
            <Label htmlFor="phon">Your Phone</Label>
            <TextInput id="phon" type="tel" placeholder="Enter your phone number" />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="textarea">Your Message</Label>
            <Textarea id="textarea" placeholder="Enter your message" rows={4} />
          </div>

          <div className="md:col-span-2">
            <Button type="submit">Submit</Button>
          </div>

        </form>

        <div>
          <ENQUIRY_List/>
        </div>
      </div>

    </div>
  );
};

export default UserForm;
