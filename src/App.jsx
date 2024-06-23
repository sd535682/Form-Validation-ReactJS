import React from "react";
import EventRegistrationForm from "./components/EventRegistrationForm";

function App() {
  return (
    <div className="font-mono bg-gradient-to-br from-[#2dd4bf] via-[#0f766e] to-[#042f2e] ... min-h-screen max-h-full text-[#f0fdfa] py-4">
      <header className="App-header">
        <h1 className="text-2xl font-bolder mb-4 text-center">
          Level 1: Basic Dynamic Form with Conditional Fields
        </h1>
      </header>
      <main>
        <EventRegistrationForm />
      </main>
    </div>
  );
}

export default App;
