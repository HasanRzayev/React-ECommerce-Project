import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const mb = isEmailValid && isPasswordValid ? 'mb-0' : 'mb-4';
    const eRegex = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')
    const pRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$')

    const handleEmail = (e) => {
        const value = e.target.value
        setEmail(value)

        if (value.length > 0) {
            const isMatch = eRegex.test(value)

            if (!isMatch) {
                setIsEmailValid(false)
                $('#email-message').fadeIn(100).text("Email can contain only letters, numbers, '@' and '.'")
            }
            else {
                setIsEmailValid(true)
                $('#email-message').fadeOut(100).text('')
            }
        }
    }

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value)

        if (value.length > 0) {
            const isMatch = pRegex.test(value)

            if (!isMatch) {
                setIsPasswordValid(false)
                $('#password-message').fadeIn(100).text("Password must contain minimum eight characters, one upper case letter, one lower case letter, one number and one special character")
            }
            else {
                setIsPasswordValid(true)
                $('#password-message').fadeOut(100).text('')
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEmailValid && isPasswordValid) {
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            if (email === storedEmail && password === storedPassword) {
                console.log('Login is successful');
                window.location.href = '/';
            }
            else if (email === storedEmail && password !== storedPassword) {
                console.log('Invalid email or password');
                $('#login-message').css({
                    'display': 'block'
                }).text('Invalid email or password')
            }
            else {
                console.log("Sorry, we couldn't find an account with that email address");
                $('#login-message').css({
                    'display': 'block'
                }).text("Sorry, we couldn't find an account with that email address")
            }
        }
        else{
            $('#login-message').css({
                'display': 'none'
            }).text('')
        }
    }

    return (
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center justify-center bg-hero bg-cover bg-no-repeat">
            <div className="bg-white rounded-3xl w-[400px] shadow-xl mt-12">
                <div className={`flex items-center justify-center text-4xl font-semibold border-b p-6 ${mb}`}>Login</div>

                <div className="px-8 py-4">
                    <div id="login-message" className="hidden px-1 mb-4 text-sm text-red-500"></div>

                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
                        <div className="mb-3 w-full">
                            <input id="email" className="border rounded-lg px-4 py-2 w-full mb-2" placeholder="Email" value={email} onChange={handleEmail} type="email" required></input>
                            <div id="email-message" className="hidden px-1 text-sm text-red-500"></div>
                        </div>

                        <div className="mb-3 w-full">
                            <input id="password" className="border rounded-lg px-4 py-2 w-full mb-2" placeholder="Password" value={password} onChange={handlePassword} type="password" required></input>
                            <div id="password-message" className="hidden px-1 text-sm text-red-500"></div>
                        </div>

                        <button type="submit" className="bg-orange-900 rounded-lg text-lg text-secondary w-full py-2 hover:bg-orange-800 font-semibold">Login</button>
                    </form>

                    <div className="flex items-center justify-center mt-4">Don't have an account?
                        <Link to={'/signup'}>
                            <button className="px-4 underline text-stone-500">Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login