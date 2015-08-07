/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

class Item{
   
    render() {
        return (            
                <li>
                    <div className="xuexiao">
                        <div className="xuexiao_top">
                            {this.props.json.Name}<span className="xuexiao_top_x">|</span> <span className="xuexiao_zi">{this.props.json.EnglishName}</span>
                        </div>
                        <div className="xuexiao_bot">
                            <div className="xuexiao_bot_left">
                                <a href="college-detail.aspx?no=588&amp;c=USA&amp;t=\u9ad8\u4e2d">
                                    <img src={this.props.json.Logo} />
                                </a>
                            </div>
                            <div className="xuexiao_bot_right">
                                <div className="xuexiao_bot_right_top">
                                    <div className="bot_right_left">
                                        <div className="left_zuo"><img src="http://new.rrliuxue.com/WebResources/Default/images/college/like.png" /></div>
                                        <div className="left_you">{this.props.json.Follow}</div>
                                    </div>
                                    <div className="bot_right_left">
                                        <div className="left_zuo"><img src="http://new.rrliuxue.com/WebResources/Default/images/college/position.png" /></div>
                                        <div className="left_you">{this.props.json.PlaceArea}</div>
                                    </div>
                                </div>
                                <div className="right_bot">
                                    <div className="sc_paiming">
                                        <div className="sc_paiming_left">
                                            <div className="paiming_zuo">国际</div>
                                            <div className="paiming_you">50</div>
                                        </div>
                                        <div className="sc_paiming_right">
                                            <div className="paiming_zuo">国内</div>
                                            <div className="paiming_you">50</div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </li>
        );
    }
    //dom加载完调用
    componentDidMount(){

        
    }
}

export default Item;
