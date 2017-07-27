import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import qianduanlogo from '../img/qdlogo.png'
import hdlogo from '../img/hdlogo.png'
import dataimg from '../img/data.png'
import baofenyu from '../img/baofenyu.jpg'

import chaozuo from '../img/icon/操作.png'
import dongtai from '../img/icon/动态.png'
import jiami from '../img/icon/加密.png'
import liantong from '../img/icon/连通.png'
import sousuo from '../img/icon/搜索.png'
import xiaolv from '../img/icon/效率.png'

import neo4j from '../img/neo4j.png'
import yunjisuan from '../img/yunjisuan.jpg'
import yun from '../img/yun.jpg'

class Welcome extends Component{
    render(){
        return (
            <div style={{ background: "white" }}>
                <div className="navbar navbar-fixed-top ">
                    <div className="navbar-nav-collapse" id="navbar-link">
                        <ul className="navbar-nav navbar-right">
                            <li><a className="navbar-nav-link active" href="/">首页</a></li>
                            <li><a className="navbar-nav-link" href="https://github.com/lengyijun/xingan" target="_blank">前端</a></li>
                            <li><a className="navbar-nav-link" href="https://github.com/lengyijun/DSSE-GraphDB" target="_blank">后端</a></li>
                            <li><a className="navbar-nav-link" href="http://115.159.88.104:7474/browser/" target="_blank">neo4j</a></li>
                            <li><a className="navbar-nav-link" href="http://115.159.88.104:2118/" target="_blank">管理</a></li>
                            <li><Link to="/login"><a className="navbar-nav-link" target="_blank">登录</a></Link></li>
                        </ul>
                    </div>
                </div>
                {/*<div className="banner" style={{ background: `url(${jiaoda}) no-repeat center center`,"background-size":"100% 100%" }}>*/}
                <div className="banner" style={{ background: `url(${baofenyu}) no-repeat center center`,"background-size":"100% 100%" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1><small>海燕</small></h1>

                                <p>让暴风雨来得更猛烈些吧！</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="data-manager" id="dmDIV_1">
                    <div class="container text-center" id="dmDIV_2">
                        <div class="row" id="dmDIV_3">
                            <div class="col-xs-12 text-center" id="dmDIV_4"><h2 id="H2_5">项目特色</h2></div>
                        </div>
                        <div class="row" id="dmDIV_6">
                            <div class="col-sm-4 col-xs-6" id="dmDIV_7">
                                <img class="img-responsive center-block" src={jiami} alt="" id="IMG_8" />

                                <h3 id="H3_9">加密</h3>

                                <p id="P_10">在密文上计算，完美保证数据安全</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_27">
                                <img class="img-responsive center-block" src={sousuo} alt="" id="IMG_28" />

                                <h3 id="H3_29">可搜索</h3>

                                <p id="P_30">云端通过关键词搜索，支持组合搜索</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_11">
                                <img class="img-responsive center-block" src={dongtai} alt="" id="IMG_12" />

                                <h3 id="H3_13">动态</h3>

                                <p id="P_14">重新定义了更新索引的方法 </p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_15">
                                <img class="img-responsive center-block" src={xiaolv} alt="" id="IMG_16" />

                                <h3 id="H3_17">效率</h3>

                                <p id="P_18">平衡树保证了O(n)的搜索复杂度</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_19">
                                <img class="img-responsive center-block" src={liantong} alt="" id="IMG_20" />

                                <h3 id="H3_21">图数据库</h3>

                                <p id="P_22">资料永久保存在图数据库，支持并行搜索</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_23">
                                <img class="img-responsive center-block" src={chaozuo} alt="" id="IMG_24" />

                                <h3 id="H3_25">操作</h3>

                                <p id="P_26">支持上传，新建，更新，删除操作</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="forge" id="DIV_1" style={{"background-image":"url("+ neo4j + ")","background-repeat":"no-repeat","background-size":"100%" }}>
                    <div className="container" id="DIV_2">
                        <div className="row" id="DIV_3">
                            <div className="col-sm-7 col-sm-push-5" id="DIV_4">
                                <img className="img-responsive" src={qianduanlogo} alt="" has_check_key_word="true" id="IMG_5" />
                            </div>
                            <div className="col-sm-5 col-sm-pull-7" id="DIV_6">
                                <h2 id="H2_7">前端</h2>

                                <p id="P_8">模块化设计，给用户呈现友好的交互界面。实时显示数据库状态，数据位置一目了然</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="team" id="DIV_11" style={{ background: `url(${yun}) no-repeat center center`,"background-size":"100% 100%" }}>
                    <div className="container" id="DIV_21">
                        <div classNaem="row" id="DIV_31">
                            <div className="col-sm-7" id="DIV_41">
                                <img className="img-responsive" src={hdlogo} alt="" has_check_key_word="true" id="IMG_51" />
                            </div>
                            <div className="col-sm-5" id="DIV_61">
                                <h2 className="team-h2-first" id="H2_71">后端</h2>

                                <p id="P_91">高并发性，高可用性。数据的安全值得信赖</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wikicolumn" id="wikiDIV_1" style={{ background: `url(${yunjisuan}) no-repeat center center`,"background-size":"100% 100%" }}>
                    <div className="container" id="wikiDIV_2">
                        <div className="row" id="wikiDIV_3">
                            <div className="col-sm-7 col-sm-push-5" id="wikiDIV_4">
                                <img className="img-responsive" src={dataimg} alt="" has_check_key_word="true" id="wikiIMG_5" />
                            </div>
                            <div className="col-sm-5 col-sm-pull-7" id="wikiDIV_6">
                                <h2 id="H2_7">数据</h2>

                                <p id="P_8">中英文等多种语言，论文、邮件、笔记、隐私数据全文搜索</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Welcome