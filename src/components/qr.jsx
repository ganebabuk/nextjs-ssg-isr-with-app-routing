"use client";
import React from 'react';
import CommonHeader from '@/components/header';
import CommonFooter from '@/components/footer';
import {useRef, useState } from 'react';
import { useQRCode } from 'next-qrcode';

export default function QRComponent() {
    const { Canvas } = useQRCode();
    const canvasRef = useRef(null);
    const [mobileNumber, setMobileNumber] = useState('');
    const [qrData, setQrData] = useState('');
    const [isValidNumber, setIsValidNumber] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setMobileNumber(value);
        if(!(/^\d{8}$/.test(value))) {
            setIsValidNumber(false);
            setSubmitted(false);
        } else {
            setIsValidNumber(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setQrData(mobileNumber);
        setSubmitted(true);
        setMobileNumber('');
    };
    return (
      <div className="container mx-auto">
          <CommonHeader/>
          <>
            <h1 className="text-3xl font-bold dark:text-white">Reach Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input type="text"
                            value={mobileNumber}
                            onChange={handleInputChange}
                            placeholder="Enter 8-digit mobile number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
                        />
                    </div>
                </div>
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300" type="submit" disabled={!isValidNumber || !mobileNumber}>Generate QR Code</button>
            </form>
            <div className="mt-5" >
                {(qrData && submitted) && (
                <>
                    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <span className="font-medium">Success!</span> Your QR code is generated successfully, please scan it.
                    </div>
                    <div className="flex justify-center items-center">
                        <Canvas
                            logo={{
                                    src: '/images/P_G_Logo_RGB.svg', 
                                    options: {
                                        width: 35,
                                        x: undefined,
                                        y: undefined,
                                    }
                            }}
                            text={`tel: ${qrData}`}
                            options={{
                                errorCorrectionLevel: 'M',
                                margin: 3,
                                scale: 4,
                                width: 200,
                                color: {
                                dark: '#010599',
                                light: '#FFFFFF',
                                },
                            }}
                        />
                    </div>
                </>
                )}
            </div>
        </>
          <CommonFooter/>
      </div>
    );
}
