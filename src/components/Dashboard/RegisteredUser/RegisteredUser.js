import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, FormControl, Table } from 'react-bootstrap';
import './registeredUser.css'

const RegisteredUser = () => {
    const [registeredUsers, setRegisteredUser] = useState([]);
    const [displayUsers, setDisplayUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const size = 10

    useEffect(() => {
        axios.get(`https://guarded-brook-42731.herokuapp.com/users?page=${currentPage}&&size=${size}`)
            .then(res => {
                setRegisteredUser(res.data.users)
                setDisplayUsers(res.data.users);
                const count = res.data.count;
                const pageNumber = Math.ceil(count / 10);
                setPageCount(pageNumber);
            })
    }, [currentPage])

    const handleSearch = (e) => {
        const searchText = e.target.value;
        console.log(searchText);
        const matchedUsers = registeredUsers.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()) || user.email.toLowerCase().includes(searchText.toLowerCase()) || user.phone.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log(matchedUsers)
        setDisplayUsers(matchedUsers);
    }

    const handleAgeFilter = e => {
        const filterValue = e.target.value;
        if (filterValue) {
            const [min, max] = filterValue.split('-');
            const matchedUser = registeredUsers.filter(user => user.age >= min && user.age <= max);
            setDisplayUsers(matchedUser)
        }
        else {
            setDisplayUsers(registeredUsers);
        }
    }

    const handleCheckbox = e => {
        let checked = e.target.checked;
        console.log(checked, e.target.value)
    }

    return (
        <div className='px-5 py-5'>
            {/* search area  */}
            <FormControl
                className='mb-3'
                placeholder="Search by Email, Phone or Name"
                onChange={handleSearch}
            />
            <Form.Select
                required
                className='filter-width mb-3'
                onChange={handleAgeFilter}
            >
                <option value="">Filter By Age</option>
                <option value="18-25">18-25</option>
                <option value="26-30">26-30</option>
                <option value="31-50">31-50</option>
            </Form.Select>
            <div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayUsers.map((user) => (
                                <tr key={user._id}>
                                    <td>
                                        <Form.Check
                                            type="checkbox"
                                            value={user._id}
                                            onChange={handleCheckbox}
                                        />
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.age}</td>
                                    <td>{user.role}</td>
                                    <td>@mdo</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
            <div className="pagination d-flex justify-content-center">
                {
                    [...Array(pageCount).keys()].map(number => <button
                        className={number === currentPage ? 'selected' : ''}
                        key={number}
                        onClick={() => setCurrentPage(number)}
                    >{number + 1}</button>)
                }
            </div>
        </div >
    );
};

export default RegisteredUser;