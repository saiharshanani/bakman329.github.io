import React from 'react';
import ReactDOM from 'react-dom';
import {CreateEvent} from '../controller/databaseFunctions.js';
import  PropTypes from 'prop-types';
import {highLightStyle} from '../adaptations/Highlight.js';

//Get the hashId session index.htm/:sessionid=theidisthisone

/**http://fakebook.usabart.nl/?session_id=a09eb84d555bb8d55510ef28a56a6f3d&changesub=auto&unsubstatus=auto&reportspam=auto&requestphoto=auto&timelinevisibility=auto&restrictuser=auto&blockevent=auto&chatoffline=auto&withholdcellphone=auto&withholdotherphone=auto&withholdim=auto&withholdstreet=auto&withholdinterest=auto&withholdreligion=auto&withholdpolitical=auto
*/

const highLight = {
  backgroundColor:highLightStyle.yellow,
  color:highLightStyle.black
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
     
     this.state={
        highlight:false,
     }
  }

  componentWillMount(){
    // Initialize the adaptation method 
     let adaptationMethod = this.props.adapt;
     console.log("The button adaptation Method is " + adaptationMethod)
      if (adaptationMethod === 'high'){
          this.setState({
              highlight:true,
          })
      }
      
  }


  onClick() {
    var state = this.props.onClick();
     
    if (state == null) {
      return;
    }

    var event = { action : state.action,
                  details : state.context,
                  object : state.name,
                  session_id: localStorage.session_id
                };
    
    //console.log("The Button session is", this.context.session_id);
    // console.log("The Button newsfeed is", this.context.NewsFeed);
    // console.log("The Button timeline is", this.context.Timeline);
     
    CreateEvent(event);
  }

  render() {
    let inner = this.state.highlight ? <span style={highLight}>{this.props.children}</span> : this.props.children;
    // Type prop is one of {default, cancel, confirm}
    return (<a
      id={this.props.id} href={this.props.href ? this.props.href : "javascript:void(0)"}
      style={this.props.style}
      onClick={this.onClick}
      className={"button"  + ' ' + (this.props.type ? this.props.type : "default")}>{inner}</a>);
  }
}

// Helps the Button Component access the global variables
Button.contextTypes = {
    NewsFeed: PropTypes.bool,
    Timeline: PropTypes.bool
};

export default Button;