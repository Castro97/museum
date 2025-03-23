'use client';

import { useState } from 'react';

export default function Home() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='flex h-screen justify-center items-center'>
            <button
                type='button'
                className='focus:outline-none'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <a href='/museum'>
                    <img
                        src={hovered ? '/openDoor.png' : '/closedDoor.png'}
                        alt='Museum'
                        className='w-50 h-60 object-cover rounded-lg transition-all duration-300 opacity-100 hover:opacity-80'
                    />
                </a>
            </button>
        </div>
    );
}
