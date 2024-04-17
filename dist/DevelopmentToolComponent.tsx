import React , { useState } from "react";
import TestRunnerComponent from "./TestRunnerComponent";

/**
 * Component representing a development tool.
 * 
 * @param {Object} props - The props object containing the following properties:
 * @param {Function[]} props.testFunctions - An array of functions representing test cases.
 * @param {Function} props.loginFetch - The function to handle login form submission.
 * 
 * @returns {JSX.Element} JSX element representing the development tool component.
 */
interface DevProps {
testFunctions : (()=> {message : string , state :  string })[]
loginFetch : (username :string , password : string) => void
}

const DevelopmentTool = ({ testFunctions , loginFetch } : DevProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = () => {
    loginFetch(username, password);
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

      <TestRunnerComponent testFunctions={testFunctions}/>
    </div>
  );
};

export default DevelopmentTool;
