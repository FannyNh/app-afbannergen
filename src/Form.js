import React from 'react';
import Transform from './Transform';




class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      slogan1: '',
      cta: '',
      campagnName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    if (event.target.name === "headline") { this.setState({ headline: event.target.value }); }
    if (event.target.name === "slogan1") { this.setState({ slogan1: event.target.value }); }
    if (event.target.name === "cta") { this.setState({ cta: event.target.value }); }
    if (event.target.name === "campagnName") { this.setState({ campagnName: event.target.value }); }
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label > headline : </label>
          <input type="text" id="headline" name="headline" onChange={this.handleChange}/>
          <label > slogan1 : </label>
          <input type="text" name="slogan1" id="slogan1" onChange={this.handleChange} />
          <label > cta : </label>
          <input type="text" name="cta" id="cta"  onChange={this.handleChange}/>
          <label > campagnName : </label>
          <input type="text" name="campagnName" id="campagnName" onChange={this.handleChange} />

          <input type="submit" value="Envoyer" />
        </form>

        <Transform head={this.state.headline} slogan1={this.state.slogan1} cta={this.state.cta} />
      </div>

    );

  }

}

export default Form;