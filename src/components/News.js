import React from "react";

class News extends React.Component {
    render() {

        if (this.props.abc.length === 0) {
            return (
                <div>

                        <div className="ui active inverted dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                        <p></p>
                </div>
            );
        }
        return (
            <div className="ui segment">
                <div className="ui relaxed divided list">
                    {
                        this.props.abc.map(news => {
                            return (
                                <div className="item">
                                    <div className="content">
                                        <a href={news.url} className="header">{news.title} &nbsp; <b> &nbsp; ( {news.url} )</b></a>
                                        <div className="description"> Created AT  {news.created_at}
                                            <a href={news.author} className="label">    &nbsp; Author:  {news.author}</a>
                                        </div>

                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default News;