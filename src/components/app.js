import React from  'react';

import Searchbar from "./Searchbar";
import News from "./News";
import hackerNewsApi from 'services/hackerNewsApi';

hackerNewsApi.getTopStoryIds().then(ids => console.log(ids));




class App extends React.Component {



    render() {

        return (
            <div><Searchbar />
            <News  />
                <News  />
                <News  />
            </div>
        )
    }
};

export default App;