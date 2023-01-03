import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {setUserProfile} from "../../redux/profileReducer";
import { useParams } from "react-router";
import withRouter from "./withRouter";

class ProfileContainer extends React.Component{

    componentDidMount() {
        // debugger
        // let userId = this.props.params.userId
        // if (!userId) {
        //     userId = 2
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ this.props.params.userId)
            .then(response=>{
               this.props.setUserProfile(response.data)
            })
    }

    render() {

        return ( <Profile {...this.props} profile={this.props.profile}/> )

    }

}

let  mapStateToProps = (state)=>({ profile: state.profilePage.profile})


let ProfileContainerWithRoutesPrams = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRoutesPrams)