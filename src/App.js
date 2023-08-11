import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import {FreelancerList, CustomerList} from './CardList';
import SubscriptionForm from './SubscriptionForm';

function App() {
  return (
    <body>
      <Header/ >
      <div class="row"><h1>Featured Freelancers</h1></div>
      <FreelancerList count='3' /><br/>
      <div class="row"><button class="btn btn-primary col-3 mx-auto" >See More</button></div><br/>
      <h1>Featured Customers</h1>
      <CustomerList count='3' />
      <br/><div class="row"><button class="btn btn-primary col-3 mx-auto">See All</button></div><br/>
      <SubscriptionForm 
        description="Sign up for our daily insider!" 
        placeholder="Enter your email" 
        buttonText="Subscribe"
      />
      <Footer/>
    </body>
  );
}

export default App;