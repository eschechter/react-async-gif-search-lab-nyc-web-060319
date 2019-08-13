import React, { Fragment, Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
    state = { gifs: [] }

    submitHandler = (e, searchValue) => {
        e.preventDefault()
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=HJJwJEpiC6h7XUSo3GO35evZ993uhfHl`
        fetch(url).then(
            resp => resp.json()
        ).then(
            data => {
                const firstThree = data.data.slice(0, 3)
                this.setState({ gifs: firstThree })
            }
        )
    }

    render() {
        return (
            <Fragment>
                <GifList gifs={this.state.gifs} />
                <GifSearch submitHandler={this.submitHandler} />
            </Fragment>
        );
    }
}