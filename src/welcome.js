import React,{Component} from 'react'
import {Link } from 'react-router-dom'

class Welcome extends Component{
    render(){
        return (
            <div>
                <div className="navbar navbar-fixed-top ">
                    {/*<div className="navbar-header">
                        <a className="navbar-brand" href="/"></a>
                        <button type="button" className="navbar-toggle navbar-toggle-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-toggle navbar-toggle-collapse navbar-login" href="https://note.wiz.cn/login">登录</a>
                        <a className="navbar-toggle navbar-toggle-collapse navbar-search" href="/support.html"><i
                            className="fonts-icon icon-search"></i></a>
                    </div>*/}
                    <div className="navbar-nav-collapse" id="navbar-link">
                        <ul className="navbar-nav navbar-right">
                            <li><a className="navbar-nav-link active" href="/">首页</a></li>
                            <li><a className="navbar-nav-link" >团队服务</a></li>
                            <li><a className="navbar-nav-link" >为知盒子</a></li>
                            <li><a className="navbar-nav-link" >帮助支持</a></li>
                            <li><a className="navbar-nav-link" target="_blank">论坛</a></li>
                            <li><a className="navbar-nav-link" target="_blank">博客</a></li>
                            <li><Link to="/login"><a className="navbar-nav-link" target="_blank">登录</a></Link></li>
                            {/*<li className="navbar-nav-search">
                                <input id="navbar-nav-search-value" type="text" placeholder="帮助搜索" />
                                <a className="navbar-nav-search-btn" href="javascript:search();"><i className="fonts-icon icon-search"></i></a>
                            </li>*/}
                        </ul>
                    </div>
                </div>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1><small>大脑是用来思考的,记录的事交给我们</small></h1>

                                <p>一键收藏、全端全文检索、多级目录、Markdown</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Welcome