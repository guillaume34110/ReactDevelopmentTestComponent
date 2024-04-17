import React, { useState } from "react";

interface TestResult {
  name: any;
  result: string;
  message: string;
}

interface TestRunnerProps {
  testFunctions : (()=> {message :string , state :string})[]
}

const TestRunnerComponent = ({ testFunctions } : TestRunnerProps) => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loopCount, setLoopCount] = useState(1);
  const [failedTests, setFailedTests] = useState<(() => TestResult)[]>([]);

  const handleLoopCountChange = (e : React. HTMLInputElement) => {
    setLoopCount(parseInt(e.target.value));
  };

  const runTests = async (tests : (()=>  {message :string , state :string})[]) => {
    const newTestResults : TestResult[] = [];
    const newFailedTests : (() =>  {message :string , state :string}) [] = [];

    for (let i = 0; i < loopCount; i++) {
      for (const test of tests) {
        const result: { state: string; message: string } = await test();
        const newResult : TestResult = {
          name: test.name,
          result: result.state,
          message: result.message,
        };
        newTestResults.push(newResult);
        if (result.state === "Incorrect") {
          newFailedTests.push(test);
        }
      }
    }

    setTestResults(newTestResults);
    setFailedTests(newFailedTests);
  };

  return (
    <div className="p-4 bg-gray-100">
      <button
        onClick={() => runTests(testFunctions)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Run All Tests {loopCount} times
      </button>
      <button
        onClick={() => runTests(failedTests)}
        className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        Run Only Failed Tests
      </button>
      <div className="flex items-center mt-4">
        <label htmlFor="loopCount" className="block text-gray-700 font-bold">
          Loop Count:
        </label>
        <input
          type="number"
          value={loopCount}
          onChange={handleLoopCountChange}
          className="ml-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Test Results:</h2>
        <ul className="mt-2">
          {testResults.map((result, index) => (
            <li key={index} className="mb-2">
              <strong className="mr-2">{result.name}</strong>
              {result.result === "Incorrect" ? (
                <span className="text-red-600">
                  Incorrect: {result.message}
                </span>
              ) : (
                <span className="text-green-600">
                  Correct: {result.message}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestRunnerComponent;
