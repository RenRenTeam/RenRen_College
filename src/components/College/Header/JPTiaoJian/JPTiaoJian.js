/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import High from './High/High.js';
import YanJiuSheng from './YanJiuSheng/YanJiuSheng.js';

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

class JPTiaoJian extends React.Component{
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r: '0'};
    }
    radHandleChange(e) {
        this.setState({
          r: e.target.value
        })

        var s = e.target.value;
        if(s == 0){
            React.render(<High />, document.getElementById('JPSChool'));
        }else if(s == 1){
            React.render(<YanJiuSheng />, document.getElementById('JPSChool'));
        }else {
            $("#JPSChool").html("");
        }
    }
    render() {
        return (
            <div id="JP" className="college-filter-content tab-content-box">
                <div className="college-level-box">
                    <div className="college-level">
                        <Radio value="0" name="radio_JP"
                              checked = {this.state.r === '0'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>日本大学</label>
                    </div>
                    <div className="college-level">
                        <Radio value="1" name="radio_JP"
                              checked = {this.state.r === '1'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>研究生院</label>
                    </div>
                    <div className="college-level">
                        <Radio value="2" name="radio_JP"
                              checked = {this.state.r === '2'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>语言学校</label>
                    </div>
                    <div className="college-level">
                        <Radio value="3" name="radio_JP"
                              checked = {this.state.r === '3'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>日本高中</label>
                    </div>
                </div>
                <div id="JPSChool"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        React.render(<High />, document.getElementById('JPSChool'));
    }
}

export default JPTiaoJian;
