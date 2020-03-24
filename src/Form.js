import React from 'react';
import html from './template_banner/FR/160x600/index.html';
import imgTest from './template_banner/FR/160x600/assets/images/picture_wow.jpg';
import cssTest from './template_banner/FR/160x600/assets/styles/main.css';
import JSZip from 'jszip'
import { saveAs } from 'file-saver';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      slogan1: '',
      cta: '',
      campagnName: '',
      // export: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stringsChanger = this.stringsChanger.bind(this);
    this.exportFiles = this.exportFiles.bind(this);
    this.zipFiles = this.zipFiles.bind(this);
  }
  //methode
  stringsChanger = (props) => {
    var htmlToReplace = props;
    var newhtml = htmlToReplace.replace("HEADLINE__replace", this.state.head);
    return newhtml;
  }
  exportFiles = (props) => {
    //export
    this.zipFiles();
  }


  zipFiles = () => {
    // create a file and a folder
    var zip = new JSZip();
    var img = zip.folder("assets/images");
    var css = zip.folder("assets/styles");
    zip.file("index.html", this.stringsChanger(html));
    img.file("picture_wow.jpg", imgTest);
    css.file("main.css", cssTest);
  
    zip.generateAsync({ type: "blob" })
      .then(function (content) {
        // see FileSaver.js
        saveAs(content, "example-160x600.zip");
      });
  }

  handleChange = (event) => {
    if (event.target.name === "headline") {
      if (true) { }
      if (true) { }
      else {
        this.setState({ headline: event.target.value });

      }

    }
    if (event.target.name === "slogan1") {

      this.setState({ slogan1: event.target.value });

    }
    if (event.target.name === "cta") { this.setState({ cta: event.target.value }); }
    if (event.target.name === "campagnName") { this.setState({ campagnName: event.target.value }); }
  }

  handleSubmit(event) { 
    this.exportFiles();
    event.preventDefault();
  }



  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label > headline : </label>
          <input type="text" id="headline" name="headline" onChange={this.handleChange} />
          <label > slogan1 : </label>
          <input type="text" name="slogan1" id="slogan1" onChange={this.handleChange} />
          <label > cta : </label>
          <input type="text" name="cta" id="cta" onChange={this.handleChange} />
          <label > campagnName : </label>
          <input type="text" name="campagnName" id="campagnName" onChange={this.handleChange} />

          <input type="submit" value="Envoyer" disabled={false} />
        </form>
        {/* {this.stringsChanger(html)} */}
    
      </div>

    )

  }

}

export default Form;