import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Userlist from "./Userlist";

class AdminHome extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            userid:this.props.userid,
            username:this.props.username,
            state1:0,
        }
    }
    render=()=>{
        return(
            <Userlist username={this.state.username} userid={this.state.userid}/>
        )
            ;
    }
}
export default AdminHome;
