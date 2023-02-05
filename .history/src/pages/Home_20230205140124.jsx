import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!title || !description) {
      setError("All fields are required");
      return;
    }

    setTitle("");
    setDescription("");
    
    console.log(title, description);
  };

  return (
    <>
      <div className='flex flex-col h-[100vh] items-center'>
        <div className='flex flex-col space-y-5 items-center'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col space-y-2 w-[80%] top-6 absolute md:right-52
            md:w-[50%] md:top-20 md:static md:space-y-5 md:items-center items-center md:justify-center
            '
          >
            <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52'>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter Title'
                className='border border-gray-300 rounded-md p-2'
              />
            </div>
            <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52 pt-12'>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name='description'
                placeholder='Enter Description'
                className='border border-gray-300 rounded-md p-2'
              />
            </div>
            {error && (
              <div className='flex flex-col space-y-2 w-[50%] top-32 absolute md:right-52 pt-24 font-bold'>
                <p className='text-red-500'>{error}</p>
              </div>
            )}
            <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52 pt-36'>
              <button
                className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default Home;
