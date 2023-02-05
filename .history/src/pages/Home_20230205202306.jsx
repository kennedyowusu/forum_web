import { useState } from "react";
import MainContainer from "../components/MainContainer";

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
      <section className='flex flex-col h-[100vh] '>
        <MainContainer />
      </section>
    </>
  )
};

export default Home;
