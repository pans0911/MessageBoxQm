/**
 * Created by pans on 16/11/18.
 */
import React, {Component} from 'react';
import classNames from 'classnames';
import './MessageBoxQm.less';
export default class MessageBoxQm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_hide:true
    };
  }
  open(time){
    let hidetime=(time == undefined) ? 500 : time;
    this.setState({
      is_hide:false
    });
    const that=this;
    setTimeout(function () {
      that.setState({
        is_hide:true
      })
    },hidetime)
  }
  render() {
    const message = classNames({
      "hide": this.state.is_hide,
      "message-box": true
    });
    return (
      <div className={message}>
        {this.props.children}
      </div>
    )
  }
}