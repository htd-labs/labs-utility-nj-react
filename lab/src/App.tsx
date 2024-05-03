import React from 'react';
import './App.css';

import DemoComponent from './components/demo-component/demo-component';
import MyFunctionComponent from './components/function-component/function-component';
import MyClassComponent from './components/class-component/class-component';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>

      <p>
        React is a JavaScript library for making a component-based front-end application. A component is a reusable part of your site that may contain the JavaScript or Typescript code needed for your site to function, styling, as well as code similar to HTML in a format named 'JSX' (JavaScript XML), in which this text is displayed in the 'App.tsx' component under the 'src' folder. The 'App.tsx' component is the central component of the site, which you may think of as the 'root' component of the site.
      </p>

      <p>You may also note that there are a variety of ways to write a React app, and from this point onwards, we will be using functional components and TypeScript. Function-based components are newer and are generally regarded as preferable to class-based components, and likewise TypeScript allows for more maintainable code, since it provides compile-time checking that catches many potential bugs that would be unnoticed in JavaScript. On a real project, it is possible that you will run into class components, and/or components written in JavaScript, particularly on older projects. Much of the underlying code functions the same there as it does in our chosen style of React.</p>


      <div className="section-container gap">
        <p>Here is an example of a component in React. This component is defined in src/components/demo-component/demo-component.jsx</p>
        <p>Notice, that the extension for this file is JSX, not TSX. JSX is JavaScript XML, whereas TSX is TypeScript XML. </p>
        <DemoComponent></DemoComponent>
      </div>

      {/* Curley braces in JSX/TSX allow you to access coding functionality that reduces into a singular values like accessing variable, processing ternary statements,
                    calling functions to get a return value, etc. We can also use curly braces to produce comments in JSX/TSX like the one you're reading right now. */}


      <div className="todo-container">


        <p>Our first task is going to be to include another component as part of this component's template. 
          You'll find this is part of what makes React a useful improvement over raw JavaScript - a component may be included 
          in a format reminiscent of a custom HTML element. Check out the comments in the App.tsx file under the 'src' folder 
          for how to add the component 'FunctionComponent' (from the 'src/components' folder) to the site. Here's a tip: when 
          you run the React app, it should auto-reload when you save files, so any changes you make to the site will be 
          reflected there.</p>


        <div className="section-container">
          <p>TODO: add the line below to the TSX code: {"<MyFunctionComponent></MyFunctionComponent>"}. 
          If you're still not convinced of the power of components, try adding it multiple times.</p>
          {/* SYNTAX GOES BELOW, ON THE FOLLOWING LINE */}
          <MyFunctionComponent></MyFunctionComponent>
          
        </div>

        <div className="section-container">
          <p>TODO: add the line below to the TSX code: {"<MyClassComponent></MyClassComponent>"}. If you're still not convinced of the power of components, try adding it multiple times.</p>
          {/* SYNTAX GOES BELOW, ON THE FOLLOWING LINE */}
          <MyClassComponent></MyClassComponent>

        </div>

        <p>The actual component code is located in src/components/class-component and src/components/class-component.</p>
      </div>


      <div>
        <a href="https://legacy.reactjs.org/docs/react-component.html">https://legacy.reactjs.org/docs/react-component.html</a>
      </div>
    </div>
  );
}

export default App;
