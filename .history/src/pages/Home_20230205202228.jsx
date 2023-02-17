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
      <section className='flex flex-col h-[100vh] pl-10 '>
        <MainContainer />
      </section>
    </>
  )
};

export default Home;
