import { Link } from 'react-router-dom';

const Register = () =>{
    return(
        <div className='flex items-center gap-2'>
          <Link to={'/login'}>
            <button className='bg-orange-900 text-xl text-secondary px-4 py-2 rounded-lg hover:bg-orange-800 ease-in duration-50'>Login</button>
          </Link>

          <Link to={'/signup'}>
            <button className='bg-stone-500 text-xl text-secondary px-4 py-2 rounded-lg hover:bg-stone-400 ease-in duration-50'>Sign up</button>
          </Link>
        </div>
    )
}

export default Register

