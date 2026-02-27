import React from 'react';
import { Person } from '@/components/mod1_2/c3Person';
import { PersonProps } from '@/types/mod1/c3PersonProps'; 
const Page = () => {
    const personData: PersonProps = {
        name: 'Elon Musk',
        avatar: 'https://example.com/avatar.jpg', 
        roles: ['CEO Tesla', 'CEO SpaceX'],
        address: 'California, USA', 
    };
    return (
        <div className="container">
            <h2>Informações da Pessoa</h2>
            <Person 
                name={personData.name} 
                avatar={personData.avatar} 
                roles={personData.roles} 
                address={personData.address} 
            />
        </div>
    );
};
export default Page;