import React , { useState } from "react";
import TestRunnerComponent from "./TestRunnerComponent";

const DevelopmentTool = () => {
  // State for login credentials
  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState(' ');

  // State for selected persona
  const [persona, setPersona] = useState(' ');

  // Function to handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Logic to handle login
  };

  // Function to handle persona selection
  const handlePersonaChange = (e) => {
    setPersona(e.target.value);
    // Logic to switch personas
  };




  return (
<div className="w-full h-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
  {/* Login Form */}
  <form onSubmit={handleLoginSubmit} className="mb-4">
  <div className="mb-4">
    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
    <input
      id="username"
      type="text"
      placeholder="Enter your username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
    <input
      id="password"
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
  </div>
  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
    Login
  </button>
</form>

  {/* Persona Switcher */}
  <select value={persona} onChange={handlePersonaChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500">
    <option value="">Select Persona</option>
    {/* List of personas */}
  </select>

  {/* Test Functions */}
  <TestRunnerComponent />
</div>

  );
};

export default DevelopmentTool;