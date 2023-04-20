import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f2gt3ja', 'template_0pih5nh', form.current, 'gnxhEKrTD8KBvMneB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="container mx-auto">
            <div className='container flex items-center justify-center pt-24 pb-12'>
                <div className='bg-orange-900 border-orange-900 border-2 rounded-xl flex items-center shadow-xl mt-8'>
                    <div className="text-white flex flex-col items-center justify-center px-8">
                        <span className='text-4xl font-semibold'>Contact Us</span>
                        <span className='text-lg mt-3 text-center'>Any question or remarks? Write us a message!</span>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="bg-gray-50 flex flex-col items-center justify-center w-full rounded-r-xl px-8 py-4">
                        <input id="firstName" className="bg-gray-50 border-gray-300 text-xl border rounded-lg m-4 px-4 py-2 w-full" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"></input>

                        <input id="lastName" className="bg-gray-50 border-gray-300 text-xl border rounded-lg mb-4 px-4 py-2 w-full" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"></input>

                        <input id="email" className="bg-gray-50 border-gray-300 text-xl border rounded-lg mb-4 px-4 py-2 w-full" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email"></input>

                        <textarea id="message" rows={3} className="bg-gray-50 border-gray-300 text-xl border rounded-lg mb-4 px-4 py-2 w-full" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                        <button type="submit" className="bg-stone-500 rounded-lg text-xl text-gray-100 w-full mb-4 py-3 hover:bg-stone-400 font-semibold">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact