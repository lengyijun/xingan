import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import qianduanlogo from '../img/qianduanlogo.jpg'
import hdlogo from '../img/hdlogo.png'

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
                                <h1><small>蒹葭苍苍，白露为霜</small></h1>

                                <p>所谓伊人，在水一方</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="forge" id="DIV_1">
                    <div class="container" id="DIV_2">
                        <div class="row" id="DIV_3">
                            <div class="col-sm-7 col-sm-push-5" id="DIV_4">
                                <img class="img-responsive" src={qianduanlogo} alt="" has_check_key_word="true" id="IMG_5" />
                            </div>
                            <div class="col-sm-5 col-sm-pull-7" id="DIV_6">
                                <h2 id="H2_7">打造你的专属资料库 </h2>

                                <p id="P_8">收集网页内容、书摘、聊天片段等碎片化信息，记录想法、待办事项、个人日记、工作日志、会议记录和项目资料，将这些内容分类别保存到为知笔记中，打造你的专属资料库。 </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="team" id="DIV_11">
    <div class="container" id="DIV_21">
        <div class="row" id="DIV_31">
            <div class="col-sm-7" id="DIV_41">
                <img class="img-responsive" src={hdlogo} alt="" has_check_key_word="true" id="IMG_51"/>
            </div>
            <div class="col-sm-5" id="DIV_61">
                <h2 class="team-h2-first" id="H2_71">使用团队服务多人一起共享资料 </h2>

                <p id="P_91">和团队成员一起使用，分享工作资料、收集成员意见、搭建团队知识库、发送通知公告等；和客户一起使用，为客户提供全平台资料服务；和家人一起使用，共享家庭资料。<a href="biz.html" has_check_key_word="true" id="A_101">了解更多&gt;&gt;</a>
                </p>
            </div>
        </div>
    </div>
</div>
            </div>


        )
    }

}

export default Welcome