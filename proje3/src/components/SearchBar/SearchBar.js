import React, { Component } from 'react'
import './searchbar.css'

class SearchBar extends Component {
    state={
        search:''
    };

inputChanged = (e) =>
{
    console.log(e.target.value);
    this.setState({
        search:e.target.value
    });
}
searchImage= () =>
{
    console.log('başarılı');
    this.props.onSearchImage(this.state.search)
}

    render() {
        return (
            <div className="search-bar-container ui input">
                <input type="text" onKeyPress={(e)=>{
                    if(e.key ==='Enter'){
                        this.searchImage();
                    }
                }} onChange={this.inputChanged} placeholder="Ara" />
                <button onClick={this.searchImage} className='ui icon button'><i className="search icon"></i></button>
                
            </div>
        )
    }

}
export default SearchBar;