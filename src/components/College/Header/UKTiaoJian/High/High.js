/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery'


class High extends React.Component{

    render() {
        return (
            <div className="college-filter-box high">
                <div className="college-filter-options" data-group="PlaceArea">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li data-value="北爱尔兰"><a className="nofollow"><i></i>北爱尔兰</a></li>
                        <li data-value="威尔士"><a className="nofollow"><i></i>威尔士</a></li>
                        <li data-value="苏格兰"><a className="nofollow"><i></i>苏格兰</a></li>
                        <li data-value="英格兰"><a className="nofollow"><i></i>英格兰</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="SchoolNature">
                    <div className="title">学校性质：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li data-value="女子学校"><a className="nofollow"><i></i>女子学校</a></li>
                        <li data-value="男子学校"><a className="nofollow"><i></i>男子学校</a></li>
                        <li data-value="混合学校"><a className="nofollow"><i></i>混合学校</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="SchoolCharacteristic">
                    <div className="title">学校特色：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li data-value="普通"><a className="nofollow"><i></i>普通</a></li>
                        <li data-value="艺术类"><a className="nofollow"><i></i>艺术类</a></li>
                        <li data-value="军事高中"><a className="nofollow"><i></i>军事高中</a></li>
                    </ul>
                </div>
                <div className="college-filter-options filter-hide filter-hide-UK" data-group="SchoolDormitoryType">
                    <div className="title">住宿类型：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li data-value="学校宿舍"><a className="nofollow"><i></i>学校宿舍</a></li>
                        <li data-value="寄宿家庭"><a className="nofollow"><i></i>寄宿家庭</a></li>
                        <li data-value="监护人陪读"><a className="nofollow"><i></i>监护人陪读</a></li>
                    </ul>
                </div>
                <div className="college-filter-options filter-hide filter-hide-UK" data-group="Tuition">
                    <div className="title">学费范围：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li>（目的国货币）</li>
                        <li data-value="10000"><a className="nofollow"><i></i>10,000以下</a></li>
                        <li data-value="10000-20000"><a className="nofollow"><i></i>10,000-20,000</a></li>
                        <li data-value="21000-30000"><a className="nofollow"><i></i>21,000-30,000</a></li>
                        <li data-value="31000-40000"><a className="nofollow"><i></i>31,000-40,000</a></li>
                        <li data-value="41000-50000"><a className="nofollow"><i></i>41,000-50,000</a></li>
                        <li data-value="51000"><a className="nofollow"><i></i>51,000以上</a></li>
                    </ul>
                </div>
                <div className="college-filter-options filter-hide filter-hide-UK" data-group="Uniproperty">
                    <div className="title">学校类型：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li data-value="公立"><a className="nofollow"><i></i>公立</a></li>
                        <li data-value="私立"><a className="nofollow"><i></i>私立</a></li>
                        <li data-value="教会"><a className="nofollow"><i></i>教会</a></li>
                    </ul>
                </div>
                <div className="college-filter-more" id="moreUK">
                    <button type="button">更多条件<i className="i"></i></button>
                </div>
            </div>
            
        );
    }
    //dom加载完调用
    componentDidMount(){

         $("#moreUK").click(function(){
            if($(this).find(".i").hasClass("up")){
                $("#UK .filter-hide-UK").hide();
                $(this).find(".i").removeClass("up");
            }else{
                $("#UK .filter-hide-UK").show();
                $(this).find(".i").addClass("up");
            }
        });

        $(".college-filter-list li a").click(function(){
            var li = $(this).parent();
            var ul = li.parent();

            //去掉bootstrip-select 干扰
            if (!ul.is(".dropdown-menu")) {
                var optionsbox = $(this).parents(".college-filter-options");
                if (optionsbox.is(".multiple")) {
                    li.toggleClass("active");
                } else {
                    if (li.is(".active")) {
                        return false;
                    }
                    ul.find("li").removeClass("active");
                    li.addClass("active");
                }
                return true;
            }


        });
    }
}

export default High;
