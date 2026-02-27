import React from 'react';
import Card from '@/components/mod1_2/c4CardChildren';
const Home = () => {
    return (
        <div>
            <h1>Bem-vindo à página inicial</h1>
            <Card>
                <p>Este é o conteúdo dentro do primeiro Card.</p>
            </Card>
            <Card>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Card>
        </div>
    );
};
export default Home;