import  { useEffect } from 'react';

const ThankYou = ({ onReset }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReset();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onReset]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100">
      <h1 className="text-2xl font-bold mb-4">Thank you for your time!</h1>
    </div>
  );
};

export default ThankYou;

