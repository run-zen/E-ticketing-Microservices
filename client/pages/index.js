import React from 'react';
import Link from 'next/link';
import buildClient from '../api/build-client';

function Home({ currentUser }) {
    return (
        <div className="container">
            {currentUser ? (
                <h1>You are signed in</h1>
            ) : (
                <h1>You are not signed in</h1>
            )}
        </div>
    );
}

Home.getInitialProps = async (context) => {
    const client = buildClient(context);
    const { data } = await client.get('/api/users/currentuser');

    return data;
};

export default Home;
