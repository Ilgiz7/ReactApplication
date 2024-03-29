import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {getStatus, getUserProfile, setUserProfile, setUserProfileThunk, updateStatus} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router";
import withRouter from "./withRouter";
import {profileApi} from "../../api/profileApi";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = 2
        }
       this.props.getUserProfile(userId)
       this.props.getStatus(userId)
    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/> )
    }
}

let  mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getStatus, updateStatus}),
    withRouter,    withAuthRedirect)(ProfileContainer)

