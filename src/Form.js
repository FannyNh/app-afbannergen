import React from 'react';
import Transform from './Transform';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      desti1: '',
      desti2: '',
      desti3: '',
      prix1: '',
      prix2: '',
      prix3: '',
      remark: '',
      date: '',
      cta: '',
      ctaML: '',
      mention: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    if (event.target.name === "headline") { this.setState({ headline: event.target.value }); }
    else if (event.target.name === "desti1") { this.setState({ desti1: event.target.value }); }
    else if (event.target.name === "desti2") { this.setState({ desti2: event.target.value }); }
    else if (event.target.name === "desti3") { this.setState({ desti3: event.target.value }); }
    else if (event.target.name === "prix1") { this.setState({ prix1: event.target.value }); }
    else if (event.target.name === "prix2") { this.setState({ prix2: event.target.value }); }
    else if (event.target.name === "prix3") { this.setState({ prix3: event.target.value }); }

    // this.setState({headline: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.headline + " " + this.state.desti1);
    event.preventDefault();
  }
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label > headline : </label>
          <input type="text" id="headline" name="headline" onChange={this.handleChange} />
          <label > desti1 : </label>
          <input type="text" name="desti1" id="desti1" onChange={this.handleChange} />
          <label > desti2 : </label>
          <input type="text" name="desti2" id="desti2" onChange={this.handleChange} />
          <label > desti3 : </label>
          <input type="text" name="desti3" id="desti3" onChange={this.handleChange} />
          <label > prix1 : </label>
          <input type="text" name="prix1" id="prix1" onChange={this.handleChange} />
          <label > prix2 : </label>
          <input type="text" name="prix2" id="prix2" onChange={this.handleChange} />
          <label > prix3 : </label>
          <input type="text" name="prix3" id="prix3" onChange={this.handleChange} />

          <input type="submit" value="Envoyer" />
        </form>

        <Transform head={this.state.headline} desti={this.state.desti1} />
      </div>

    );

  }

}

export default Form;