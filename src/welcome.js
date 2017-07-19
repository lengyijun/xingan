import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import qianduanlogo from '../img/qdlogo.png'
import hdlogo from '../img/hdlogo.jpg'
import jiaoda from '../img/jiaoda.jpg'
import wikiimg from '../img/wiki.jpg'
import miaomen from '../img/miaomen.jpg'

class Welcome extends Component{
    render(){
        return (
            <div style={{ background: "white" }}>
                <div className="navbar navbar-fixed-top ">
                    <div className="navbar-nav-collapse" id="navbar-link">
                        <ul className="navbar-nav navbar-right">
                            <li><a className="navbar-nav-link active" href="/">首页</a></li>
                            <li><a className="navbar-nav-link" >团队服务</a></li>
                            <li><a className="navbar-nav-link" href="https://github.com/sjtu-lyj/xingan" target="_blank">前端</a></li>
                            <li><a className="navbar-nav-link" href="https://github.com/wangjksjtu/SJTU-SSE" target="_blank">后端</a></li>
                            <li><a className="navbar-nav-link" href="http://115.159.88.104:7474/browser/" target="_blank">数据库</a></li>
                            <li><Link to="/login"><a className="navbar-nav-link" target="_blank">登录</a></Link></li>
                        </ul>
                    </div>
                </div>
                {/*<div className="banner" style={{ background: `url(${jiaoda}) no-repeat center center`,"background-size":"100% 100%" }}>*/}
                <div className="banner" style={{ background: `url(${miaomen}) no-repeat center center`,"background-size":"100% 100%" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1><small>蒹葭苍苍，白露为霜</small></h1>

                                <p>所谓伊人，在水一方</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="data-manager" id="dmDIV_1">
                    <div class="container text-center" id="dmDIV_2">
                        <div class="row" id="dmDIV_3">
                            <div class="col-xs-12 text-center" id="dmDIV_4"><h2 id="H2_5">我想这里介绍一下项目的特色，需要配图</h2></div>
                        </div>
                        <div class="row" id="dmDIV_6">
                            <div class="col-sm-4 col-xs-6" id="dmDIV_7">
                                <img class="img-responsive center-block" src="www/img/index/collect.png" alt="" id="IMG_8" />

                                <h3 id="H3_9">加密</h3>

                                <p id="P_10">可信赖的守护你的数据</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_27">
                                <img class="img-responsive center-block" src="www/img/index/search.png" alt="" id="IMG_28" />

                                <h3 id="H3_29">查找</h3>

                                <p id="P_30">云端通过关键词搜索，支持组合搜索</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_11">
                                <img class="img-responsive center-block" src="www/img/index/note.png" alt="" id="IMG_12" />

                                <h3 id="H3_13">动态</h3>

                                <p id="P_14">重新定义了更新索引的方法 </p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_15">
                                <img class="img-responsive center-block" src="www/img/index/edit.png" alt="" id="IMG_16" />

                                <h3 id="H3_17">效率</h3>

                                <p id="P_18">平衡树保证了O(n)的搜索复杂度</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_19">
                                <img class="img-responsive center-block" src="www/img/index/save.png" alt="" id="IMG_20" />

                                <h3 id="H3_21">图数据库</h3>

                                <p id="P_22">资料永久保存在图数据库，支持并行搜索</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_23">
                                <img class="img-responsive center-block" src="www/img/index/arrange.png" alt="" id="IMG_24" />

                                <h3 id="H3_25">操作</h3>

                                <p id="P_26">支持上传，新建，更新，删除笔记操作</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="forge" id="DIV_1">
                    <div className="container" id="DIV_2">
                        <div className="row" id="DIV_3">
                            <div className="col-sm-7 col-sm-push-5" id="DIV_4">
                                <img className="img-responsive" src={qianduanlogo} alt="" has_check_key_word="true" id="IMG_5" />
                            </div>
                            <div className="col-sm-5 col-sm-pull-7" id="DIV_6">
                                <h2 id="H2_7">前端</h2>

                                <p id="P_8">这里讲一下前端的实现</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="team" id="DIV_11">
                    <div className="container" id="DIV_21">
                        <div classNaem="row" id="DIV_31">
                            <div className="col-sm-7" id="DIV_41">
                                <img className="img-responsive" src={hdlogo} alt="" has_check_key_word="true" id="IMG_51" />
                            </div>
                            <div className="col-sm-5" id="DIV_61">
                                <h2 className="team-h2-first" id="H2_71">后端</h2>

                                <p id="P_91">后端实现</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wikicolumn" id="wikiDIV_1">
                    <div className="container" id="wikiDIV_2">
                        <div className="row" id="wikiDIV_3">
                            <div className="col-sm-7 col-sm-push-5" id="wikiDIV_4">
                                <img className="img-responsive" src={wikiimg} alt="" has_check_key_word="true" id="wikiIMG_5" />
                            </div>
                            <div className="col-sm-5 col-sm-pull-7" id="wikiDIV_6">
                                <h2 id="H2_7">测试数据</h2>

                                <p id="P_8">测试数据来自于wikipedia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Welcome