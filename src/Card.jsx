import React from 'react';
import './Card.css';

import { Card, Icon, Image } from 'semantic-ui-react'

const FreelancerCard = (props) =>
{
    return (
        <div class="ui centered card">
        <Image src={props.avatar} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>{props.position}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='star' />
            {props.rating}
        </a>
        </Card.Content>
      </div> 
    );
};

const CustomerCard = (props) =>
{
    return (
        <div class="ui centered card">
        <Image src={props.avatar} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
      </div> 
    );
};

export {FreelancerCard, CustomerCard};
