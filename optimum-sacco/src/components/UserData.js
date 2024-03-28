import './userdata.css'
const UserData = () => {
  return (
    <div className='bg-gray-100'>
      <UserTable />
    </div>
  )
}

// export default UserData


function UserTable() {
  return (
    <div className="text-blue-900">
      <h2 className="text-2xl font-bold mb-4 text-center" >User Data Table</h2>
      <table className="w-3/4 border-collapse border border-blue-900 mx-auto">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-blue-900 px-4 py-2">ID</th>
            <th className="border border-blue-900 px-4 py-2">First Name</th>
            <th className="border border-blue-900 px-4 py-2">Last Name</th>
            <th className="border border-blue-900 px-4 py-2">Email</th>
            <th className="border border-blue-900 px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-100">
            <td className="border border-blue-900 px-4 py-2 text-center">90</td>
            <td className="border border-blue-900 px-4 py-2 text-center">David</td>
            <td className="border border-blue-900 px-4 py-2 text-center">Abisai</td>
            <td className="border border-blue-900 px-4 py-2 text-center">ninnniif</td>
            <td className="border border-blue-900 px-4 py-2 text-center">0034737473434</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserData