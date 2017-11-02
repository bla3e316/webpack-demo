import React from 'react';

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = { name: "Aleks" };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({ name: "Bunny" });
    }

    render() {
        return (
            <h1 onClick={this.clickHandler}>
                {`Hello ${this.state.name}!`}
            </h1>
        );
    }
}

// import React from 'react';
//
// const Home = () => (
//     <h1>Hello React</h1>
// );
//
// export default App;


// const Home = (props) => (
//     return (
//         <h1>Hello React</h1>
//     );
// );
//
// export default App;


// export default class Home extends React.Component {
//     render() {
//         return (
//             <h1>Hello React</h1>
//         );
//     }
// }