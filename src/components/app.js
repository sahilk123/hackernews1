import React from  'react';
import Searchbar from "./Searchbar";
import News from "./News";






class App extends React.Component {



    render() {

        return (
            <div>
                <Searchbar />
                <News  />

            </div>
        )
    }
};

export default App;