import React from 'react';
import './SubscriptionForm.css'

const SubscriptionForm = (props) => {
    return (
        <div class="subscription-form">
            <form action="/" method="POST">
                <div class="row">
                    <div class="col-6"><label for="email">{props.description}</label></div>
                    <div class="col-3"><input type="email" class="form-control" name="email" placeholder={props.placeholder}/></div>
                    <div class="col-3"><button type="submit" class="btn btn-primary" name="submit">{props.buttonText}</button></div>
                </div>
            </form>
        </div>
    );
}

export default SubscriptionForm;