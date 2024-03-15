# React Test Development Tool 🚀

This React development tool provides a convenient interface for running and monitoring test cases. It allows you to execute individual test functions, run all tests multiple times, and focus on failed tests for debugging purposes.
## Prerequisites 🛠️

Before using this library, ensure that you have the following dependencies installed:

- ![Node.js](https://img.shields.io/badge/Node.js-^18.0.0-green) - Node.js runtime environment.
- ![npm](https://img.shields.io/badge/npm-^6.0.0-red) or ![Yarn](https://img.shields.io/badge/Yarn-^1.0.0-blue) - Package managers for installing and managing dependencies.

## Installation 🛠️

To use this library in your React project, follow these steps:

1. Install the package using npm or yarn:

   ```bash
   npm install react-test-development-tool
   ```

   ```bash
   yarn add react-test-development-tool
   ```

2. Import the necessary components into your project:

   ```javascript
   import DevelopmentTool from 'react-test-development-tool';
   ```

## Usage ℹ️

### DevelopmentTool Component

The `DevelopmentTool` component renders a user-friendly interface for running tests and handling login credentials (if required). It accepts the following props:

- `testFunctions`: An array of functions representing test cases.
- `loginFetch`: The function to handle login form submission.

Example usage:

```javascript
import React from 'react';
import DevelopmentTool from 'react-test-development-tool';

const MyComponent = () => {
  // Define test functions
  const testFunctions = [
    // Define your test functions here
  ];

  // Function to handle login form submission
  const handleLoginFetch = (username, password) => {
    // Implement your login logic here
  };

  return (
    <DevelopmentTool testFunctions={testFunctions} loginFetch={handleLoginFetch} />
  );
};

export default MyComponent;
```

### TestRunnerComponent

The `TestRunnerComponent` is an internal component used by the `DevelopmentTool` for executing and displaying test results. It can also be used independently if needed. It accepts the following props:

- `testFunctions`: An array of functions representing test cases.

Example usage:

```javascript
import React from 'react';
import TestRunnerComponent from 'react-test-development-tool';

const MyTestRunner = () => {
  // Define test functions
  const testFunctions = [
    // Define your test functions here
  ];

  return (
    <TestRunnerComponent testFunctions={testFunctions} />
  );
};

export default MyTestRunner;
```

## Features 🌟

- **Run All Tests**: Execute all test functions a specified number of times.
- **Run Only Failed Tests**: Run only the tests that have failed in previous executions.
- **Test Results**: View detailed test results, including test names, states (correct or incorrect), and messages.

## Contributing 🤝

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue on the [GitHub repository](https://github.com/guillaume34110/ReactDevelopmentTestComponent).

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
