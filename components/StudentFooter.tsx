import React from 'react';
import { BotMessageSquare } from 'lucide-react'; // Import the icon from Lucide

const StudentFooter = () => {
    return (
        <footer className="relative bg-gray-100 py-8 text-black mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-4">
                {/* Help & Support */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Help & Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                    </ul>
                </div>

                {/* Contact Details */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Contact Details</h3>
                    <ul className="space-y-2">
                        <li>📞 +8805555230001</li>
                        <li>📞 +8801303696876</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Social Media</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                    </ul>
                </div>

                {/* Email-ID */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Email-ID</h3>
                    <ul className="space-y-2">
                        <li><a href="mailto:tannu@gmail.com" className="hover:underline">Tannu@Gmail.Com</a></li>
                        <li><a href="mailto:komal@gmail.com" className="hover:underline">Komal@Gmail.Com</a></li>
                        <li><a href="mailto:simran@gmail.com" className="hover:underline">Simran@Gmail.Com</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 mt-8 pt-4 text-center">
                <p className="text-sm">
                    Website Designed And Developed By Innovators Hub <br />
                    © 2024 All Rights Reserved. <br />
                    Powered By Umeed | <a href="#" className="hover:underline">Terms Of Service</a> | <a href="#" className="hover:underline">Privacy Policy</a>
                </p>
            </div>

            {/* BotMessageSquare icon at the bottom-right */}
            <div className="fixed bottom-10 right-10">
                <BotMessageSquare className="w-10 h-10 text-gray-600 cursor-pointer hover:text-black" />
            </div>
        </footer>
    );
};

export default StudentFooter;
