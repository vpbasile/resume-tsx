import * as React from "react"

// <> My modules
import ErrorBoundary from "./components/ErrorBoundary"
import Resume from "./components/Resume/index.tsx";

function App() {
  return (
    <div className="App container">
      <ErrorBoundary>
        <Resume />
      </ErrorBoundary>
    </div>
  );
}

export default App;
