import React from 'react';


class Searchbar extends  React.Component {
   onInputChange (event){

    console.log(event.target.value);

}

    render()  {

        return( <div className="ui segment">
        <form className="ui form">
            <div className="field">
                <label> News Search</label>
                <input type="text"  onChange={this.onInputChange} />

            </div>

        </form>



        </div>);


    }
    
}


export default Searchbar;