import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button.jsx'
import {Link} from 'react-router-dom';
import {getParsed} from '../../utilities.js';



class Settingsdropdown extends React.Component {
    constructor(props){
        super(props);
        
        let adaptation = getParsed("adaptations")
        let adaptationVisited = getParsed("visited");
        
        this.state = {
            highlight: !adaptationVisited["Privacy_futureRequests"]["highlight"]&&(adaptation["privacy_futureRequests"] == "high") || !adaptationVisited ["Timeline_seePost"]["highlight"]&& (adaptation["timeline_seePost"] === "high") || !adaptationVisited["Block_User"]["highlight"] && (adaptation["block_User"] == "high")||!adaptationVisited["Block_Event"]["highlight"] && (adaptation["block_Event"] == "high")||!adaptationVisited["Block_App"]["highlight"] && (adaptation["block_App"] == "high")||!adaptationVisited["Block_AppInvite"]["highlight"] && (adaptation["block_AppInvite"] == "high")? true: false,
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleHighlight = this.handleHighlight.bind(this);
    }
    
    handleClick(){
    
        this.props.changeIcon();
        this.props.settingsdropDown();
        
    }
    
   handleHighlight(){
       
       
        this.setState({
            highlight:false,
        })
    }
    
    render(){
        //console.log("I have been called");
        return (  
            <div id = "dropdown_header"> 
                 <ul >
                     <li> <a className="settings_options_a" href="#">Create Page</a> </li>
                     <li> <a className="settings_options_a">Create Ads</a> </li>
                     <li> <a className="settings_options_a">Manage Ads</a> </li>
                     
                     <li><a className="settings_options_b" href="#Activity Logs">Activity Logs</a></li>
                      <li><a className="settings_options_b" href="#Setting">News Feed preferences</a></li>
                      <li className={this.state.highlight?"high1":null}><Link className="settings_options_b" to={{
                              pathname:'/settings_general/GeneralSettings',
                              state:{fromHeader:true}}} onClick={this.handleClick}>Settings</Link></li>
                     <li><a className="settings_options_b" href="https://clemson.ca1.qualtrics.com/jfe/form/SV_4OYW85t2VedzdCR">Log Out</a></li>
               </ul>  
            </div>
        )
    }
}

export default Settingsdropdown;