import React from 'react';


class News extends  React.Component {


    render()  {

        return( <div className="ui segment">

            <div className="ui relaxed divided list">
                <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <a className="header">Semantic-Org/Semantic-UI</a>
                        <div className="description">Updated 10 mins ago</div>
                    </div>
                </div>
                <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <a className="header">Semantic-Org/Semantic-UI-Docs</a>
                        <div className="description">Updated 22 mins ago</div>
                    </div>
                </div>
                <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <a className="header">Semantic-Org/Semantic-UI-Meteor</a>
                        <div className="description">Updated 34 mins ago</div>
                    </div>
                </div>
            </div>



        </div>);


    }

}


export default News;