import React from 'react';
import { BotMessageSquare } from 'lucide-react'; // Import the icon from Lucide

const Footer = () => {
    return (
        <div className="relative bg-gray-200 p-6 text-center font-sans flex justify-center gap-20 mt-40 py-10" id='contact'>
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Indira Gandhi Delhi Technical University For Women</p>
                <p className="text-gray-600">Kashmere Gate, Delhi 110006</p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                <p className="text-gray-600">Email: <a href="mailto:xyz@gmail.com" className="text-blue-500 hover:underline">xyz@gmail.com</a></p>
                <p className="text-gray-600">Contact number: <a href="tel:+1234567890" className="text-blue-500 hover:underline">1234567890</a></p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">Additional Information</h3>
                <p className="text-gray-600"><strong>Website:</strong> <a href="http://www.dtu.ac.in" className="text-blue-500 hover:underline">www.dtu.ac.in</a></p>
                <p className="text-gray-600"><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600"><strong>Social Media:</strong></p>
                <p className="text-gray-600">
                    <a href="https://facebook.com/dtu" className="text-blue-500 hover:underline">Facebook</a> |
                    <a href="https://twitter.com/dtu" className="text-blue-500 hover:underline">Twitter</a> |
                    <a href="https://instagram.com/dtu" className="text-blue-500 hover:underline">Instagram</a>
                </p>
            </div>

            {/* BotMessageSquare icon at the bottom-right */}
            <div className="fixed bottom-10 right-10">
                <BotMessageSquare className="w-10 h-10 text-gray-600 cursor-pointer hover:text-black" />
            </div>
        </div>
    );
};

export default Footer;
