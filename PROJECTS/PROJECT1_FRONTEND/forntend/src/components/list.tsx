import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const ENQUIRY_List = ({ data ,getgetData ,Swal ,setForm}: any) => {

  const deleterow = (id: any) => {

    // for confirm sms delete we use swal react library
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result: any) => {
      if (result.isConfirmed) {
        
        // yha hmny api chlai he ke agr confirm hoto ye chaly or he if wagera cofirm ye sb bydafault he sawal ka nichy sy hmara kaam he start


        axios.post(`https://localhost:4000/websites/api/delete/${id} `).then((res)=>{
          toast.success('Deleted successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          getgetData()
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    })
  
  }

  const updateData=(id:any)=>{
    
    axios.post(`https://localhost:4000/websites/api/show/data/update/${id} `).then((res)=>{
      toast.success('Deleted successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setForm(res.data.data)
    })
  }
  return (
    <div>
      <ToastContainer/>
      <h1 className='text-3xl py-6 font-bold'>LIST OF ENQUIRIES</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>

            <TableRow>

              <TableHeadCell>name</TableHeadCell>
              <TableHeadCell>email</TableHeadCell>
              <TableHeadCell>phone number</TableHeadCell>
              <TableHeadCell>message</TableHeadCell>
              <TableHeadCell>
                <span >Edit</span>
              </TableHeadCell>
              <TableHeadCell>
                <span >Delete</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {
              data.map((item: any, index: number) => {
                return (<>
                  <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {index+1}
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>
                      <button onClick={() => {updateData(item._id) }} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </button>
                    </TableCell>
                    <TableCell>
                      <button onClick={() => {deleterow(item._id) }} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>


                </>)
              })
            }

          </TableBody>
        </Table>
      </div>

    </div>
  )
}

export default ENQUIRY_List
