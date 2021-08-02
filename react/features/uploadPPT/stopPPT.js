import React, { Component } from "react";

import { Dialog } from "../base/dialog";

export default class StopPPT extends Component<Props> {

    render() {
        return (
            <Dialog
                hideCancelButton={false}
                okKey="Stop"
                // onSubmit={this._startRecording}
                cancelKey="Close"
                titleKey="Stop Presentation"
                width="small"
            >
                <div style={{ color: "white" }}>
                    <h4>Stop</h4>
                </div>
            </Dialog>
        );
    }
}
