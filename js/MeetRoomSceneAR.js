import React, {Component} from 'react';

import {
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroBox,
    ViroARScene
} from 'react-viro';

export default class MeetRoomSceneAR extends Component {
    constructor() {
        super();

        this.state = {
            text: "Initializing meeting room scanner"
        };
        ViroARTrackingTargets.createTargets({
            "targetOne": {
                source: require('./res/m07-image-marker.jpg'),
                orientation: "Up",
                physicalWidth: 0.1 // real world width in meters
            },
        });
    }

    render() {
        return (
            <ViroARScene>
                <ViroARImageMarker target={"targetOne"}>
                    <ViroBox position={[0, .25, 0]} scale={[.5, .5, .5]}/>
                </ViroARImageMarker>
            </ViroARScene>
        )
    }

}

module.exports = MeetRoomSceneAR;