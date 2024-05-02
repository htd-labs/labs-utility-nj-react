import React from 'react';


/* This TypeScript interface allows us to model the props' attributes to enforce compile time safety. The attributes
of a prop can be any combination of datatypes. Here is an example below.*/
interface MyProps {
    myNumProp: number;
    myStringProp: string;
}


/* Class components have a props object inherently. You need only define the datatypes by providing an interface in the diamond brackets (generics). From this
point you can access the props object by using "this.props".*/
class ClassChildComponent extends React.Component<MyProps>{


    render() {

        return (
            <React.Fragment>
                <h4>Class Child Display</h4>

                {/* Here is an example of you display props data. */}
                <p>Here is the "myStringProp" prop data: {this.props.myStringProp}</p>

                <div className="todo-container">
                    {/* TODO: alter the text below so that it properly displays the "myNumProp" data, similar to the text above. */}
                    <p>Here is the "myNumProp" prop data: (TODO replace me in "class-child-component")</p>
                </div>
            </React.Fragment>
        );
    }
}

export default ClassChildComponent;
