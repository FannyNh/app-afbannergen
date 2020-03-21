import React from 'react';
import html from './template_banner/FR/160x600/index.html';


class Transform extends React.Component{
    constructor(props){
    super(props);
    this.stringsChanger=this.stringsChanger.bind(this);
    }
    //methode
    stringsChanger = (props)=>{
        var htmlToReplace = props;
        var newhtml = htmlToReplace.replace("HEADLINE__replace", this.props.head);
        return newhtml;
    }
    render(){
        
        // return null;
        return(
            <div>
              {this.stringsChanger(html)}
            </div>
        );
    }
}



export default Transform;