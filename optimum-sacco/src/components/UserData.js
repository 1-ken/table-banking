import React from 'react'

const UserData = () => {
  return (
    <div className='bg-gray-100'>
      <UserDataForm />
    </div>
  )
}

export default UserData
function UserDataForm() {
  return (
    <div className='bg-gray-100'>
      <h1 className='text-center p-10'>User Data</h1>
      {/** User data will be displayed here in table format code to create table */}
      <table className='w-full bg-blue-100'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='p-10'>Name</th>
            <th className='p-10'>Email</th>
            <th className='p-10'>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-gray-100'>
            <td className='p-10'></td>
            <td className='p-10'></td>
            <td className='p-10'>+91 9876543210</td>
          </tr>
          </tbody>
          </table>
          </div>
          )
}