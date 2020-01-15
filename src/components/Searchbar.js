import React from 'react';


class Searchbar extends  React.Component {


    render()  {

        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label> News Search</label>
                        <input type="text" onChange={(event)=>this.props.onInputChange(event.target.value)} />
                    </div>
                </form>
            </div>
        )



    }

}


export default Searchbar;