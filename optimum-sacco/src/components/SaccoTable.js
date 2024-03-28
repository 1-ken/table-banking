import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SaccoTable() {
    const [saccos, setSaccos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/saccos')
            .then(res => setSaccos(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Pin</th>
                </tr>
            </thead>
            <tbody>
                {saccos.map(sacco => (
                    <tr key={sacco._id}>
                        <td>{sacco.name}</td>
                        <td>{sacco.phoneNumber}</td>
                        <td>{sacco.pin}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SaccoTable;