import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {getUserProfile, setUserProfile, setUserProfileThunk} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router";
import withRouter from "./withRouter";
import {profileApi} from "../../api/profileApi";

class ProfileContainer extends React.Component{

    componentDidMount() {

        // let userId = this.props.params.userId
        // if (!userId) {
        //     userId = 2
        // }

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ this.props.params.userId)
        //     .then(response=>{
        //        this.props.setUserProfile(response.data)
        //     })

        // profileApi.getProfile(this.props.params.userId)
        //     .then(data=>{
        //         this.props.setUserProfile(data)
        //     })

       this.props.getUserProfile(this.props.params.userId)

    }

    render() {
        if (!this.props.isAuth) return  <Navigate to="/login"  />
        return ( <Profile {...this.props} profile={this.props.profile}/> )

    }

}

let  mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let ProfileContainerWithRoutesPrams = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, getUserProfile})(ProfileContainerWithRoutesPrams)