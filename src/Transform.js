import React from 'react';
import html from './template_banner/FR/160x600/index.html';

var testhtml = html;

class Transform extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
        // return null;
        return(
            <div>
              {testhtml}
            </div>
        );
    }
}



export default Transform;