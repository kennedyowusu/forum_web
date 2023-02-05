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
          <form action=""></form>
        </div>
      </div>
    </>
  )
};

export default Home;
