import React from "react";
import Searchbar from "./Searchbar";
import News from "./News";
import axios from "axios";

class App extends React.Component {
    state = {
        news: [],
        searchKeyword: ""
    }

    componentDidMount = async () => {
        this.fetchData()
    }

    fetchData = async () => {
        let response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.searchKeyword}&hitsPerPage=15&page=51`);
        this.setState({
            news: response.data.hits
        });
    }

    onInputChange = (val) => {
        console.log("inout val ==>", val);
        this.setState({
            searchKeyword: val
        }, () => {
            this.fetchData();
        });
    }

    render() {
        return (
            <div>
                <Searchbar onInputChange={this.onInputChange} />
                <News abc={this.state.news} />
            </div>
        );
    }
}

export default App;

