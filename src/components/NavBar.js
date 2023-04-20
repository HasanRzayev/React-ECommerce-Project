import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul>
                <Link to={'/'}>
                    <li className='inline-block text-xl mr-4 hover:text-neutral-400'>Home</li>
                </Link>
                <Link to={'/products'}>
                    <li className='inline-block text-xl mr-4 hover:text-neutral-400'>Products</li>
                </Link>
                <Link to={'/about'}>
                    <li className='inline-block text-xl mr-4 hover:text-neutral-400'>About</li>
                </Link>
                <Link to={'/contact'}>
                    <li className='inline-block text-xl mr-4 hover:text-neutral-400'>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar
