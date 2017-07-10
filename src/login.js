import React,{Component} from 'react'
import {Link } from 'react-router-dom'

class Login extends Component{
    render(){
        return(
           <div>
               <header id="login-header">
                    <div id="kb-info">
                        <h3 id="kbname">
                            SSE
                        </h3>
                    </div>
                </header>
                <div id="main" className="login">
                    <div className="wrapper">
                        <div id="login-register" className="tab-content">
                            <div className="tab-tips">
                                <h2 id="login-tip" data-lang="login.label.title">
                                    登陆账号
                                </h2>
                            </div>
                            <div id="loginarea">
                                <div className="form patch-ph float-label">
                                    <div className="form-control">
                                        <div className="col">
                                            <input id="login-wizID" type="text" data-placeholder="common.label.email_mobile" name="email" placeholder="邮箱 或 手机号" data-checkerindex="0"/>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <div className="col">
                                            <input id="login-password" type="password" maxlength="100" data-placeholder="common.label.password" name="password" placeholder="密码" data-checkerindex="1"/>
                                        </div>
                                    </div>
                                    <div className="form-control submitBtn">
                                        <div className="col">
                                            <Link to="/app">
                                                <a id="loginbtn" data-lang="common.label.login" className="btn btn-primary disabled">登录</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Login