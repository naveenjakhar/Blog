import React, { Component } from 'react'
import './Profilecss.css'
import User from './User';
import Userform from './Userform';
export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
          animation_name : '',
          depth: '',
          fade: ''
        };
      }
    
      closePopUp(){
        this.setState({animation_name: 'animate-out'});
        this.setState({depth:'above'});
         this.setState({fade:'fade-out'});
      }
      openPopUp(){
        this.setState({animation_name: 'animate-in'});
        this.setState({depth:'below'});
        this.setState({fade:'fade-in'});
      }
  
    render() {
        return (
            <>
 <div>
 <User />
 <div className="row justify-content-center text-center">
                <button type="button" class="btn btn-warning"id={this.state.depth} onClick={this.openPopUp.bind(this)}>Update Profile</button>
                </div>
            {/* <button className="opener" id={this.state.depth} onClick={this.openPopUp.bind(this)}>Open Pop Up</button> */}
            <section id="pop-up" className={this.state.animation_name}>
              <div id="innerPopUp" className={this.state.fade}>
                
                  <button className="close" onClick={this.closePopUp.bind(this)}>X</button>
                 <Userform  /> 
              </div>
            </section>
          </div>
                
            </>
        )
    }
}
