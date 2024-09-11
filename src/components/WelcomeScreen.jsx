

const Welcome = ( {onStart} ) => (
  <div className="flex items-center justify-center min-h-screen ">
    <h1 className="text-2xl font-bold mb-4">Welcome to Our Survey Page</h1>
    <button
      onClick={onStart}
      className="bg-teal-500 ml-5 text-black px-3 py-1 rounded antialiased hover:subpixel-antialiased"
    >
      Start Survey
    </button>
  </div>
);

export default Welcome;
