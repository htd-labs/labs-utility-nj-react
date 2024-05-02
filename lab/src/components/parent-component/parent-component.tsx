import React from 'react';
import ClassChildComponent from '../class-child-component/class-child-component';
import FunctionChildComponent from '../function-child-component/function-child-component';

const ParentComponent: React.FC = () => {
    return (
        <React.Fragment>
            <h1>THE PARENT COMPONENT IS BEING DISPLAYED</h1>
            <p>The concept of props in React allows a "parent" component to pass data to one or more "children" components. This allows children
                components to be reused with different initial data, so they can display in different, yet similar, ways. The prop itself
                takes the form of an object in TypeScript with various attributes that can be accessed then utilized in various way.
                The attributes of a props can be customized to fit the needs of your application; we'll use interfaces to give structure to the props object.
            </p>

            <p>The way you create props differs depending on whether you're using a function component or a class component. In this lab, let's explore 
                using props with both types of components. Take a look at the TSX file for each child component, you'll notice that there is a customized
                interface that defines the datatypes of each props object.
            </p>

            <div className="section-container">
                <h2>Using props with CLASS components.</h2>

                <p>Here are two examples of props being passed to children CLASS components:</p>

                {/* Curley braces in JSX/TSX allow you to access coding functionality that reduces into a singular values like accessing variable, processing ternary statements,
                    calling functions to get a return value, etc. We can also use curly braces to produce comments in JSX/TSX like the one you're reading right now. */}
                <ClassChildComponent myNumProp={7} myStringProp={"Class Child Data 1"}></ClassChildComponent>
                <ClassChildComponent myNumProp={12} myStringProp={"Class Child Data 2"}></ClassChildComponent>

                <div className="todo-container">
                    <p>TODO: render the child CLASS component a third time with new values for the prop's attributes. Make the number 15 and the string "Class Child Data 25".</p>
                    {/* CODE HERE */}
                </div>
            </div>

            <div className="section-container bottom-gap">
                <h2>Using props with FUNCTION components.</h2>

                <p>Here are two examples of props being passed to children FUNCTTION components:</p>

                <FunctionChildComponent myNumProp={5} myStringProp={"Function Child Data 1"}></FunctionChildComponent>
                <FunctionChildComponent myNumProp={10} myStringProp={"Function Child Data 2"}></FunctionChildComponent>

                <div className="todo-container">
                    <p>TODO: render the child FUNCTION component a third time with new values for the prop's attributes. Make the number 1 and the string "Function Child Data 33".</p>
                    {/* CODE HERE */}
                </div>
            </div>

            <div>
                <a href="https://react.dev/learn/describing-the-ui#passing-props-to-a-component">https://react.dev/learn/describing-the-ui#passing-props-to-a-component</a>
            </div>

        </React.Fragment>
    );

    /* OPTIONAL PRACTICE: If you want more practice later, try passing other datatypes as props. In this example, we passed strings, numbers, and booleans; you should try passing an
        object and then try passing a function. */
}

export default ParentComponent;