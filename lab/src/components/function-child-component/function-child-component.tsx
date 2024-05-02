import React from 'react';


/* This TypeScript interface allows us to model the props' attributes to enforce compile time safety. The attributes
of a prop can be any combination of datatypes. Here is an example below.*/
interface MyProps {
    myNumProp: number;
    myStringProp: string;
}


/* Function components have a props object defined as a paramater. You need to add the props and it's interface datatypes in the signature of the
function. From this point you can access the props object by accessing the argument.*/
const FunctionChildComponent: React.FC<MyProps> = (props: MyProps) => {
    return (
        <React.Fragment>
            <h4>Function Child Display</h4>

            {/* Here is an example of you display props data. */}
            <p>Here is the "myStringProp" prop data: {props.myStringProp}</p>

            <div className="todo-container">
                {/* TODO: alter the text below so that it properly displays the "myNumProp" data, similar to the text above. */}
                <p>Here is the "myNumProp" prop data: (TODO replace me in function-child-component)</p>
            </div>

        </React.Fragment>
    );
}

export default FunctionChildComponent;