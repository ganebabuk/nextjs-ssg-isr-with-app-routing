"use client";
import React from 'react';
import CommonHeader from '@/components/header';
import CommonFooter from '@/components/footer';
import { useRouter } from 'next/navigation';

export default function HomeComponent({ data }) {
    const router = useRouter();
    const redirectToReachUs = () => {
        router.push('/reach-us');
    };

    return (
      <div className="container mx-auto">
            <CommonHeader/>
            {data?.head ? (
            <>
              <h1 className="text-3xl font-bold dark:text-white">
                {data?.head}
              </h1>
              <div
                className={'text-base'}
                dangerouslySetInnerHTML={{ __html: data?.content }}
              />
              <button 
                onClick={redirectToReachUs} 
                type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
              >
                Click here to reach us
              </button>
            </>
            ) : (
            <>
              <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Something wrong!</span> Please try after sometime</div>  
                </div>
              </>
            )}
          <CommonFooter/>
      </div>
    );
}
