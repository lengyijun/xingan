import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import qianduanlogo from '../img/qdlogo.png'
import hdlogo from '../img/hdlogo.png'
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

                                <h3 id="H3_9">收集</h3>

                                <p id="P_10">我想这里介绍一下项目的特色，需要配图</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_11">
                                <img class="img-responsive center-block" src="www/img/index/note.png" alt="" id="IMG_12" />

                                <h3 id="H3_13">记录</h3>

                                <p id="P_14">以文字、清单、图片、拍照、语音等形式记录，一次记录永久保存。</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_15">
                                <img class="img-responsive center-block" src="www/img/index/edit.png" alt="" id="IMG_16" />

                                <h3 id="H3_17">编辑</h3>

                                <p id="P_18">遵循Office习惯的轻量级编辑工具，同时支持Markdown，帮你写出漂亮的文档。</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_19">
                                <img class="img-responsive center-block" src="www/img/index/save.png" alt="" id="IMG_20" />

                                <h3 id="H3_21">保存</h3>

                                <p id="P_22">资料永久保存在云端，修改后的笔记会保存历史版本，无需担心资料丢失。</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_23">
                                <img class="img-responsive center-block" src="www/img/index/arrange.png" alt="" id="IMG_24" />

                                <h3 id="H3_25">整理</h3>

                                <p id="P_26">使用群组、多级文件夹、标签和笔记内链整理资料，让资料井井有条。</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_27">
                                <img class="img-responsive center-block" src="www/img/index/search.png" alt="" id="IMG_28" />

                                <h3 id="H3_29">查找</h3>

                                <p id="P_30">通过文件夹、关键词搜索、快捷方式、近期笔记和消息等方式快速找到所需资料。</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_31">
                                <img class="img-responsive center-block" src="www/img/index/share.png" alt="" id="IMG_32" />

                                <h3 id="H3_33">共享</h3>

                                <p id="P_34">用链接、QQ、微信等方式分享资料给任何人，用群组和团队成员一起共享资料。</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_35">
                                <img class="img-responsive center-block" src="www/img/index/discuss.png" alt="" id="IMG_36" />

                                <h3 id="H3_37">讨论</h3>

                                <p id="P_38">团队成员直接评论笔记，针对这篇笔记的工作讨论集中保存在评论中。</p>
                            </div>
                            <div class="col-sm-4 col-xs-6" id="dmDIV_39">
                                <img class="img-responsive center-block" src="www/img/index/multiPlatform.png" alt="" id="IMG_40" />

                                <h3 id="H3_41">多平台支持</h3>

                                <p id="P_42">支持Windows、Mac、Linux、iPhone、iPad、Android等平台，随时随地使用。</p>
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