import React from  'react';
import Searchbar from "./Searchbar";
import News from "./News";
import axios from "axios";






class App extends React.Component {

    componentDidMount = async () => {
        this.fetchData()
    }

    fetchData = async () => {
        let response = await axios.get(`https://hn.algolia.com/api/v1/search?query=sports&hitsPerPage=15&page=51`);

    console.log("response=>" , response);
    }



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