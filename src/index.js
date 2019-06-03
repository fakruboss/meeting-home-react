import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as constants from "./app-constants.js";

function Zmeeting() {
    return (
        <div className="zmeeting-con">
            <ZmeetingInstant />
            <ZmeetingSchedule />
        </div>
    );
}

function ZmeetingInstant() {
    return (
        <div>
            <h3 className="zmeeting-heading">{constants.MEET_HEADING}</h3>
            <p className="meeting-home-desc">{constants.MEET_DESC}</p>
            <button className="meeting-home-primary-btn">Meet Now!</button>
        </div>
    );
}

function ZmeetingSchedule() {
    return (
        <div>
            <p className="meeting-home-desc">{constants.MEET_INSTANT_DESC}</p>
            <button className="meeting-home-secondary-btn">
                Schedule a Meeting
            </button>
        </div>
    );
}
function Zwebinar() {
    return (
        <div className="zwebinar-con">
            <h3 className="zmeeting-heading">{constants.WEBI_HEADING}</h3>
            <p className="meeting-home-desc">{constants.WEBI_DESC}</p>
            <button className="meeting-home-primary-btn">
                Schedule a Webinar
            </button>
        </div>
    );
}

class MeetingAdPopup extends React.Component {
    render() {
        return (
            <div className="meeting-ad-popup">
                <div className="home-popup">
                    <h3 className="popup-heading-margin">Meeting</h3>
                    <div className="home-popup-modal home-meeting-popup">
                        <div className="modal-con-header">
                            <h3 className="headingText">
                                {constants.MEET_HEADING_POPUP}
                            </h3>
                            <p className="home-popup-step">Step 1 of 2</p>
                        </div>
                        <div className="home-popup-body">
                            <p>{constants.MEET_DESC_POPUP}</p>
                        </div>
                        <div className="modal-con-footer home-popup-footer">
                            <button
                                className="meeting-home-primary-btn home-popup-btn"
                                onClick={this.props.hideMeetingShowWebinar}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className="modal-layout" />
            </div>
        );
    }
}

class WebinarAdPopup extends React.Component {
    render() {
        return (
            <div className="webinar-ad-popup">
                <div className="home-popup">
                    <h3 className="popup-heading-margin">Webinar</h3>
                    <div className="home-popup-modal home-webinar-popup">
                        <div className="modal-con-header">
                            <h3 className="headingText">
                                {constants.WEBI_HEADING_POPUP}
                            </h3>
                        </div>
                        <div className="home-popup-body">
                            <p>{constants.WEBI_DESC_POPUP}</p>
                        </div>
                        <div className="modal-con-footer home-popup-footer">
                            <button
                                className="meeting-home-primary-btn home-popup-btn"
                                onClick={this.props.hideWebinar}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
                <div className="modal-layout" />
            </div>
        );
    }
}

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMeetingAd: true,
            isShowWebinarAd: false
        };
        this.hideMeetingShowWebinar = this.hideMeetingShowWebinar.bind(this);
        this.hideWebinar = this.hideWebinar.bind(this);
    }

    hideMeetingShowWebinar() {
        this.setState({
            isShowMeetingAd: false,
            isShowWebinarAd: true
        });
    }

    hideWebinar() {
        this.setState({
            isShowWebinarAd: false
        });
    }

    render() {
        let meetingAdPopup;
        let webinarAdPopup;

        if (this.state.isShowMeetingAd) {
            meetingAdPopup = (
                <MeetingAdPopup
                    hideMeetingShowWebinar={this.hideMeetingShowWebinar}
                />
            );
        }

        if (this.state.isShowWebinarAd) {
            webinarAdPopup = <WebinarAdPopup hideWebinar={this.hideWebinar} />;
        }

        return (
            <div>
                <Zmeeting />
                <Zwebinar />
                {meetingAdPopup}
                {webinarAdPopup}
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById("root"));
