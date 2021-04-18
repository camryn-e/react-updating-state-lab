// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        },() => console.log("state bit click", this.state))
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
            }
        })
    }

    handleClick = (e) => {
        console.log("button clicked:", e.target)
        if(e.target.className == 'bitrate'){
            console.log("button name", e.target.className)
            console.log("bit result:",this.handleBitrateClick)
        } else if(e.target.className == 'resolution'){
            console.log("button name", e.target.className)
            console.log("resolution result:",this.handleResolutionClick)
        }
    }

    render() {
        return(
            <div>
                <button className= 'bitrate' onClick={this.handleBitrateClick}>bit rate num</button>
                <button className= 'resolution' onClick={this.handleResolutionClick}>res</button>
            </div>
            
            // <div> 
            //     <button className= 'resolution' onClick={this.handleClick}>res</button>
            // </div>
        )
    }
}