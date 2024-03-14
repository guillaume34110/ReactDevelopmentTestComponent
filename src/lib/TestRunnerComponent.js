
import React, { useState } from 'react';

const TestRunnerComponent = () => {
  const [testResults, setTestResults] = useState([]);
  
  // Function to run a test
  const runTest = async (testFunction) => {
    try {
      const result = await testFunction(); // Execute the test function
      setTestResults(prevResults => [...prevResults, { name: testFunction.name, result }]);
    } catch (error) {
      setTestResults(prevResults => [...prevResults, { name: testFunction.name, error: error.message }]);
    }
  };

  // Function to retrieve and map test functions from a specific folder
  const retrieveAndMapTestFunctions = async () => {
    try {
      const testFunctionFiles = await importAll(require.context('./testFunctions', false, /\.js$/)); // Import all files from the testFunctions folder
      const testFunctions = testFunctionFiles.map(module => module.default); // Extract default exports from modules
      return testFunctions.filter(func => typeof func === 'function'); // Filter out non-functions
    } catch (error) {
      console.error('Error retrieving test functions:', error);
      return [];
    }
  };

  // Function to import all files from a context
  const importAll = (context) => {
    let importedModules = [];
    context.keys().forEach((key) => {
      importedModules.push(context(key));
    });
    return importedModules;
  };

  // Function to execute all test functions
  const executeAllTests = async () => {
    const testFunctions = await retrieveAndMapTestFunctions(); // Retrieve and map test functions
    testFunctions.forEach(runTest); // Execute each test function
  };

  return (
<div className="p-4 bg-gray-100  ">
  <button
    onClick={executeAllTests}
    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
  >
    Run All Tests
  </button>
  <div className="mt-4">
    <h2 className="text-lg font-bold">Test Results:</h2>
    <ul className="mt-2">
      {testResults.map((result, index) => (
        <li key={index} className="mb-2">
          <strong className="mr-2">{result.name}</strong>
          {result.error ? (
            <span className="text-red-600">Error - {result.error}</span>
          ) : (
            <span className="text-green-600">Passed</span>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>
  );
};

export default TestRunnerComponent;