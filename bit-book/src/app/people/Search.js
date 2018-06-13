import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ""
        }
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value
        })
        this.props.search(event.target.value);
    }

    render() {
        return (
            <div className='search'>
                <i className="fa fa-search"></i><input type='text' value={this.state.inputText} onChange={this.handleInput} placeholder="Search" />
            </div>
        )
    }
}

export default Search;