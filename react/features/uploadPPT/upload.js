import React, { Component } from "react";

import { Dialog } from "../base/dialog";

export default class UploadPPT extends Component<Props> {

    render() {
        return (
            <Dialog
                hideCancelButton={false}
                okKey="Upload"
                // onSubmit={this._startRecording}
                cancelKey="Close"
                titleKey="Please Upload Presentation"
                width="small"
            >
                <div style={{ color: "white" }}>
                    {/* <h4>Upload</h4> */}
                    <input type="file" name="uploadPPT" id="uploadPPT" />
                </div>
            </Dialog>
        );
    }
}
