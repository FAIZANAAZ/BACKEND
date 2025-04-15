import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const ENQUIRY_List = () => {
  return (
    <div>
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
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            1
            </TableCell>
            <TableCell>ws</TableCell>
            <TableCell>wxemail.com</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
            <TableCell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Delete
              </a>
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </div>
  
    </div>
  )
}

export default ENQUIRY_List
