import React from 'react';
var perf =require('./template_banner/FR/160x600/test.html');

class Transform extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
        // return null;
        return(
            <div>
                 <iframe src={perf }></iframe>
            </div>
        );
    }
}



export default Transform;