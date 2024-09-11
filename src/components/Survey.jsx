import { useEffect, useState } from 'react';

const Survey = ({onComplete}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const sessionId = `session-${Date.now()}`;

  const questions = [
    { id: "Q1", text: 'How satisfied are you with our products?', type: 'rating', max: 5 },
    { id: "Q2", text: 'How fair are the prices compared to similar retailers?', type: 'rating', max: 5 },
    { id: "Q3", text: 'How satisfied are you with the value for money of your purchase?', type: 'rating', max: 5 },
    { id: "Q4", text: 'On a scale of 1-10, how would you recommend us?', type: 'rating', max: 10 },
    { id: "Q5", text: 'What could we do to improve our service?', type: 'text' },
  ];

  const handleAnswerChange = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };


  const handleSubmit = () => {
    
      localStorage.setItem(sessionId, JSON.stringify({ ...answers, status: 'COMPLETED' }));
      onComplete();
    
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentQuestion(0); // Reset to the first question after 5 seconds
    }, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className='h-screen'><br /><br />

      <h1 className="text-2xl flex justify-center mt-1 font-bold">Customer Survey</h1>
    <div className="flex flex-col items-center justify-center  h-full bg-blue-300  rounded">
      <h2 className="text-xl flex justify-center font-bold mb-5">Please Give Us Your Valuable Feedback !</h2>
      <div className="w-full max-w-lg mb-10 bg-cyan-300 p-4 rounded-lg shadow-md">
        <h2 className="text-lg flex justify-center font-bold  mb-5 ">Question {currentQuestion + 1}/{questions.length}</h2>
        <p className="mb-6 font-bold flex justify-center ">{currentQuestion + 1}. {questions[currentQuestion].text}</p>
        {questions[currentQuestion].type === 'rating' && (
          <div className="flex justify-center space-x-4 mb-6">
            {[...Array(questions[currentQuestion].max)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handleAnswerChange(index + 1)}
                className={`rounded-full w-10 h-10 ${answers[questions[currentQuestion].id] === index + 1
                  ? 'bg-red-600'
                  : 'bg-green-100'} hover:bg-red-400 text-black`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
        {questions[currentQuestion].type === 'text' && (
          <textarea
            className="w-full p-2 border rounded"
            value={answers[questions[currentQuestion].id] || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
          />
        )}
        <div className="flex justify-evenly">
          <button
            onClick={handlePrevious}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={currentQuestion === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-pink-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
          
        {currentQuestion === questions.length - 1 && (
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Survey;
