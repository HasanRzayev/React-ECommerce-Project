const ProfileOptions = (props) => {
    return (
        <div id='profile-options' className='hidden  right-[90px] top-[77px]'> {/* right-[90px] */}
            <ul id="p-options-ul" className='bg-white w-[250px] border rounded-l-xl shadow-xl p-2'>
                <li id="p-options-li" className='py-2 px-2 text-xs text-stone-600'>More options</li>
                <li id="p-options-li" className='py-2 px-2 rounded-lg hover:bg-stone-200 cursor-pointer'>Profile</li>
                <li id="p-options-li" className='py-2 px-2 rounded-lg hover:bg-stone-200 cursor-pointer'>Settings</li>
                <li id="p-options-li" className='py-2 px-2 rounded-lg hover:bg-stone-200 cursor-pointer'>Privacy & Policy</li>
                <li id="p-options-li" className='py-2 px-2 rounded-lg hover:bg-stone-200 cursor-pointer'>Log out</li>
            </ul>
        </div>
    )
}

export default ProfileOptions