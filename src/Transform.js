import React from 'react';
import html from './template_banner/FR/160x600/index.html';


class Transform extends React.Component{
    constructor(props){
    super(props);
    this.stringsChanger=this.stringsChanger.bind(this);
    this.exportFiles=this.exportFiles.bind(this);
    this.downloadTxtFile=this.downloadTxtFile.bind(this);
    }
    //methode
    stringsChanger = (props)=>{
        var htmlToReplace = props;
        var newhtml = htmlToReplace.replace("HEADLINE__replace", this.props.head);
        return newhtml;
    }
    exportFiles = (props)=>{
        if(this.props.export){
            //export
            console.log('yolo');
            this.downloadTxtFile();
            this.setState({ export: false });
        }
    }
    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob( [this.stringsChanger(html)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "index.html";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }
    render(){
        
        // return null;
        return(
            <div>
              {this.stringsChanger(html)}
            </div>
        ) && this.exportFiles()
    }
}



export default Transform;