import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ProfileOptions from './ProfileOptions';
import $ from 'jquery';

const UserProfile = () => {
    const firstName = localStorage.getItem('firstName');
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const handleProfileOptions = () => {
        setIsOptionsOpen(!isOptionsOpen)

        $('#profile-options').fadeToggle(150).css({
            'position': 'absolute'
        })
    }

    useEffect(() => {

        function handleClick(e) {
            if (isOptionsOpen) {
                const targetId = e.target.id

                if (targetId !== 'profile-options' && targetId !== 'p-options-btn' && targetId !== 'p-options-chvrn' && targetId !== 'p-options-ul' && targetId !== 'p-options-li') {
                    $('#profile-options').fadeToggle(150).css({
                        'position': 'absolute'
                    })

                    setIsOptionsOpen(!isOptionsOpen);
                }
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isOptionsOpen]);

    return (
        <>
            <div className='flex items-center gap-1'>
                <button className='flex items-center justify-center w-[40px] h-[40px] text-xl bg-neutral-400 text-secondary rounded-full hover:bg-neutral-500 cursor-pointer'>{firstName.toUpperCase().charAt(0)}</button>
                <button id='p-options-btn' className='flex items-center justify-center w-[20px] h-[20px] rounded-full hover:text-neutral-400' onClick={handleProfileOptions}><FaChevronDown id='p-options-chvrn' className='text-xs'></FaChevronDown></button>
            </div>

            <ProfileOptions></ProfileOptions>
        </>
    )
}

export default UserProfile
