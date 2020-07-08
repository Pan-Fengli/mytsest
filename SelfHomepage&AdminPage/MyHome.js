import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Navigator from "./Navigator";
class MyHome extends React.Component{
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
            <div>
                <div className="jumbotron text-center" >
                    <h1>这里是标题</h1>
                </div>
                {/*头可以共用之后的就可以构建化了——可以修改active*/}
                <div className = "container" >
                    <Navigator username={this.state.username} userid={this.state.userid}/>
                    {/*然后就是帖子的比如缩略内容，也可以构建化*/}
                    <br/>
                    <div className="media">
                        <div className="media-left">
                            <img src="logo192.png" className="media-object" style={{width:40}}/>
                        </div>
                        <div className="media-body">
                            {/*这些具体的属性或许可以在willmount的时候去查找*/}
                            <a href="#" className="media-heading" style={{fontSize:30}}>小标题</a>
                            <p>缩略文本内容...</p>
                        </div>
                        <div >
                            其他图片可以放在这里
                            <img src="logo192.png" className="media-object" style={{width:40}}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="media">
                        <div className="media-left">
                            <img src="logo192.png" className="media-object" style={{width:40}}/>
                        </div>
                        <div className="media-body">
                            <a href="#" className="media-heading" style={{fontSize:30}}>小标题2</a>
                            <p>缩略文本内容...</p>
                        </div>
                        <div >
                            其他图片可以放在这里
                            <img src="logo192.png" className="media-object" style={{width:40}}/>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="jumbotron text-center" style={{marginBottom:0}}>
                    <p>底部内容</p>
                </div>
            </div>)
            ;
    }
}
export default MyHome;
