import React, { Component } from 'react';

export default class GifSearch extends Component {
    state = { searchValue: "" }

    changeHandler = event => {
        this.setState({ searchValue: event.target.value })
    }

    render() {
        return (
            <form onSubmit={e => { this.props.submitHandler(e, this.state.searchValue); this.setState({ searchValue: "" }) }}>
                <input onChange={this.changeHandler} type="text" value={this.state.searchValue} />
                <button type="submit">Search Gifs</button>
            </form>
        );
    }
}