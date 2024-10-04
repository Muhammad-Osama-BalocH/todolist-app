"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "" || desc.trim() === "") {
      alert("Please fill out both fields.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      desc: desc,
    };

    setMainTask([...mainTask, newTask]);
    setTitle("");
    setDesc("");
  };

  const deleteTask = (taskId) => {
    const updatedTasks = mainTask.filter((task) => task.id !== taskId);
    setMainTask(updatedTasks);
  };

  let renderTask = <h2 className="text-center text-2xl text-gray-600">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task) => (
      <li
        key={task.id}
        className="bg-white p-4 m-4 shadow-md rounded-lg flex justify-between items-center"
      >
        <div>
          <h3 className="text-xl font-bold text-black">{task.title}</h3>
          <p className="text-md text-gray-600">{task.desc}</p>
        </div>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
        >
          Delete
        </button>
      </li>
    ));
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center rounded-lg shadow-lg">
        Osama Todo List
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col items-center">
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-4 px-4 py-2 rounded w-full max-w-lg"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-4 px-4 py-2 rounded w-full max-w-lg"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 hover:bg-gray-800 transition-all"
        >
          Add Task
        </button>
      </form>
      <hr className="my-8 w-full max-w-lg" />
      <div className="p-8 bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-lg">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default Page;

