import React, { Component } from 'react';
import {connect} from "react-redux";


export default function(ComposedComponent){

    class Authentication extends Component{

        static contextTypes = {
            router: React.PropTypes.object
        };

        //Not Accessing Resources without Sign in
        componentWillMount(){
            if(!this.props.authenticated){
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push('/');
            }
        }

        render(){
            //console.log('Rendering', ComposedComponent);
            return <ComposedComponent {...this.props}/>
        }
    }
    // Authentication state inside our high order component
    function mapStateToProps(state){
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}