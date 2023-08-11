import React from 'react';
import {FreelancerCard, CustomerCard} from './Card.jsx';
import './Card.css';

import freelancerList from './freelancerList.js';
import customerList from './customerList.js';

function freelancerComponent(staff, i) {
    return (
        <div class="col">
            <FreelancerCard
                key = {staff.key}
                avatar = {staff.avatar}
                name = {staff.name}
                position = {staff.position}
                rating = {staff.rating}
            />
        </div>
    );
}

function customerComponent(user, i) {
    return (
        <div class="col">
            <CustomerCard
                key = {user.key}
                avatar = {user.avatar}
                name = {user.name}
                description = {user.description}
            />
        </div>
    );
}

const FreelancerList = (props) => {
    return (
        <div class="row">
            {freelancerList.slice(0,props.count).map(freelancerComponent)}
        </div>
    );
};

const CustomerList = (props) =>
{
    return (
        <div class="row">
            {customerList.slice(0,props.count).map(customerComponent)}
        </div>
    );
};

export {FreelancerList, CustomerList};