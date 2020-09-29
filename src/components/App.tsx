import React, { useState, useEffect, useRef } from 'react';
import '../assets/Animations.css';
import { CSSTransition } from 'react-transition-group';

function App() {
  const welcomeRef = useRef(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  useEffect(() => {
    setShowWelcomeMessage(true);
  }, []);
  return (
    <CSSTransition in={showWelcomeMessage} classNames="welcome" timeout={2500} nodeRef={welcomeRef}>
      <div ref={welcomeRef} className="flex container px-5 py-64 w-full h-screen max-h-screen justify-center mx-auto items-center text-center">
        <div className="lg:p-20 p-5 rounded shadow mx-auto">
          <h1 className="text-blue-500 font-thin lg:text-4xl text-2xl">Build anything you want.</h1>
          <p className="font-thin lg:text-base text-sm">With Typescript, React, TailwindCSS, and React-Transitions</p>
          <p className="font-hairline lg:text-2xl text-lg">Template by <a href="https://jorg.io" target="_blank" rel="noopener noreferrer" className="text-teal-400 cursor-pointer hover:text-teal-500">jorgio</a></p>
        </div>
      </div>
    </CSSTransition>
  );
}

export default App;
