/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './College.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery'
import Header from './Header/Header.js'
import List from './List/List.js';


@withStyles(styles)
class College extends React.Component{	
	  static contextTypes = {
	    onSetTitle: PropTypes.func.isRequired
	  };
    constructor(props) {
        super(props);
        this.state = {list:{},totalCount:0};
    }
      //搜索事件
    submitSearch(){
        var type = "高中";
        var str = "";
        var country = $("#filterForm .tabs .selected").attr("data-country");

        var val = $("#txtSearch").val();

        $(".college-filter-box").find(".college-filter-options").each(function(){
            var self = $(this);
            var dataGroup = self.attr("data-group");
            var dataValue = self.children().eq(1).find(".active").attr("data-value");
            if(dataValue != ""){
                str += ";"+dataGroup+"="+dataValue;
            }
        });


        if(!country){
            country="";
        }
        if(!val){
            val="";
        }
        if(!str){
            str="";
        }
        $.ajax({
            url: "http://service.rrliuxue.com/UniversitySearchNodeJsService/UniversitySearch/Country="+country+";Type="+type+";PageIndex=1;PageSize=15;Name="+val+str+"",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名            
        }).done(function (json) {
            console.log("城市"+country+",type"+type+",val"+val+",条件"+str);

            $("#listOfCollege").html("");
            if(json.length >= 1){
                //React.render(<List data={json} />,document.getElementById('listOfCollege'));
                this.setState({list:json,totalCount:json[0].TotalCount});
            }else{
                return false;
            }
        }.bind(this));
     }


    render() {
	    let title = '院校库 - 人人留学';
	    this.context.onSetTitle(title);

        return (
            <div>

                <div className="collegeHeader-Node">
                    <section className="plan">
                        <a href="/college-recommend.aspx">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/plan.jpg" /></a>
                        <div className="action">
                            <a href="/college-recommend.aspx">我要方案</a>
                        </div>
                        <div className="clear"></div>
                    </section>
                    <Header country="美国" submitSearch={this.submitSearch.bind(this)}/>
                    <div id="listOfCollege"></div>

                    <div className="list-box">
                        <div className="title" id="div_PageCount">共检索到 &nbsp;{this.state.totalCount}&nbsp; 所学校</div>
                        <div id="div_SchoolList">
                            <div className="school_lb">
                                <List DataSource={this.state.list} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        //this.submitSearch();
    }
    
}

export default College;
