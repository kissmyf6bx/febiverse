import { Suspense } from 'react';
import OrderPageContent from './OrderPageContent';
import Loader from '@/components/Loader';

const OrderPage = () => {
  return (
    <Suspense fallback={<div className='h-screen w-full flex items-center justify-center bg-black'><Loader /></div>}>
      <OrderPageContent />
    </Suspense>
  );
};

export default OrderPage;