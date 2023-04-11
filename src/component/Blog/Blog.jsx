import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-2xl">when should you use context api?</h2>
        <p className="p-2">
          A context contains references to variables and notifies its consumers
          when these references are changed. There are no restrictions on what
          type of values you can provide, so you can easily pass in functions
          that can be used to communicate events back from consumers, for
          example. To create a context, call the createContext function with an
          arbitrary value. This will be the default value provided to the
          consumers. Optionally provide an interface describing your provided
          object. The returned object will contain helper components you need to
          provide or consume this context. <br />
          USE Context Hook: With the useContext hook, the context object is used
          as an injection token to access its value. If the value is an object,
          it can be easily deconstructed to separate constants. Please note
          useContext can only be used in function components, and the same rules
          apply as with other hooks.
        </p>
      </div>
      <div className="pl-3">
        <h2 className="text-2xl">What is a custom hook?</h2>
        <p className="p-2">
          Custom React JS hooks are reusable functions that a React JS software
          developer can use to add special and unique functionality to the React
          applications. Usually, if there is a requirement to add a feature, one
          can install a third-party library and solve the problem. But what if
          there is no such library with hooks that can be used? This problem is
          solved by using custom React JS hooks. A custom hook is a special
          JavaScript function whose name starts with ‘use’ and can be used to
          call other hooks. Let’s take a look at some major differences between
          a custom React JS hook and React JS components:
          <ul className="p-2">
            <li>A custom hook does not require a specific signature.</li>
            <li>
              A software developer can choose what argument the custom hook has
              and what
            </li>
            <li>A custom hook always starts with the name ‘use’.</li>
          </ul>
        </p>
      </div>
      <div className="pl-3">
        <h2 className="text-2xl">What is useRef hook? How does it works?</h2>
        <p className="p-2">
          A hook is a special function which enables one use state and other
          React features without writing ES6 class components which are
          generally considered difficult to understand, use and master. useRef
          hook is part of the React Hooks API. It is a function which takes a
          maximum of one argument and returns an Object. The returned object has
          a property called current whose value is the argument passed to
          useRef. If you invoke it without an argument, the returned object's
          current property is set to undefined. The code below illustrates how
          to invoke the useRef hook in functional components.
        </p>
      </div>
      <div className="pl-3">
         <h2 className="text-2xl">What is usememo?</h2>
         <p className="p-2">React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
      </div>
    </div>
  );
};

export default Blog;
