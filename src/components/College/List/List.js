/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './List.less';
import withStyles from '../../../decorators/withStyles';
import Item from '../Item/Item.js';

require('rc-pagination/assets/index.css')
require('rc-select/assets/index.css')
var Pagination = require('rc-pagination')
var Select=require('rc-select');

@withStyles(styles)
class List{
    onChangeFun(key){
        console.log(key);
    }
    render() {
        var items;
        console.log(this.props)
        if(this.props.DataSource instanceof Array){
            items = this.props.DataSource.map(function (item) {
                return (<Item json={item} />)
            });          
         }

        var Pagination = require('rc-pagination');
        return (
            <div>               
                <ul>
                    {items}
                </ul>
                <Pagination
                    selectComponentClass={Select}
                    showQuickJumper={true} showSizeChanger={true} onChange={this.onChangeFun.bind(this)} total={450} />
            </div>
        );
    }
}

export default List;
