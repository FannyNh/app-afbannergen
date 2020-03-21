import React from 'react';
import Transform from './Transform';
import html from './template_banner/FR/160x600/index.html';



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
    this.downloadTxtFile = this.downloadTxtFile.bind(this);
  }
  //methode
  stringsChanger = (props) => {
    var htmlToReplace = props;
    var newhtml = htmlToReplace.replace("HEADLINE__replace", this.state.head);
    return newhtml;
  }
  exportFiles = (props) => {

    //export
    console.log('yolo');
    this.downloadTxtFile();
    // this.setState({ export: false });

  }
  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([this.stringsChanger(html)], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  zipFiles = () =>{
    
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
    // this.setState({ export: true }); 
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
        {this.stringsChanger(html)}

        {/* <Transform
            head={this.state.headline}
            slogan1={this.state.slogan1}
            cta={this.state.cta}
            export="false" /> */}
      </div>

    )

  }

}

export default Form;