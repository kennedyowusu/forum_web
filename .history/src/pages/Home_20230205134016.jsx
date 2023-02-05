import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
  };

  return (
    <>
      <div className='flex flex-col h-[100vh] items-center'>
        <div className='flex flex-col space-y-5 items-center'>
          <form action='' onSubmit={handleSubmit}>
            <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52'>
              <input
                type='text'
                name='title'
                id='title'
                
                placeholder='Enter Title'
                className='border border-gray-300 rounded-md p-2'
              />
            </div>

            <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52 pt-12'>
              <textarea
                name='description'
                id='description'
                placeholder='Enter Description'
                className='border border-gray-300 rounded-md p-2'
              />
            </div>

            <div className='flex flex-col space-y-2 w-[50%] top-6 absolute md:right-52 pt-36'>
              <button
                className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={() => {}}
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
