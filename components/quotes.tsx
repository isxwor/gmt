'use client';

import { useEffect, useState } from 'react';

type ResponseData = {
  success: true;
  data?: {
    quote: string;
    author: string;
    category: string;
  };
};

type ResponseError = {
  success: false;
  message: string;
};

type ResponseT = ResponseData | ResponseError;

export const Quotes = () => {
  const [data, setData] = useState<ResponseT | null>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/quotes');
      const data = await res.json();

      setData(data);
    };

    // Fetch data on mount
    fetchData();

    const interval = setInterval(async () => {
      // and, update data every 5 seconds
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-center space-y-4'>
      {data?.success ? (
        <>
          <div className='text-2xl font-semibold'>
            &quot;{data.data?.quote}&quot;
          </div>
          <div className='text-sm text-muted'>{data.data?.author}</div>
        </>
      ) : (
        <div className='text-sm text-red-500'>{data?.message}</div>
      )}
    </div>
  );
};
