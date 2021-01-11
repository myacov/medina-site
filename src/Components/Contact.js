import React, { Component } from 'react';

class Contact extends Component {
   constructor() {
      super();
      this.state = {
        input: {},
        errors: {}
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      let input = this.state.input;
      input[event.target.name] = event.target.value;
    
      this.setState({
        input
      });
    }
      
    handleSubmit(event) {
      event.preventDefault();
    
      if(this.validate()){
          console.log(this.state);
    
          let input = {};
          input["name"] = "";
          input["email"] = "";
          input["message"] = "";
          this.setState({input:input});
    
          alert('Your message was sent, thank you!');
      }
    }
    
    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
    
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!input["message"]) {
          isValid = false;
          errors["message"] = "Please enter your message.";
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }


  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
            <form onSubmit={this.handleSubmit}>
  
  <div class="form-group">
    <label for="name">Name<span className="required">*</span></label>
    <input 
      type="text" 
      name="name" 
      value={this.state.input.name}
      onChange={this.handleChange}
      class="form-control" 
      placeholder="Enter name" 
      id="name" />

      <div className="text-danger">{this.state.errors.name}</div>
  </div>

  <div class="form-group">
    <label for="email">Email Address<span className="required">*</span></label>
    <input 
      type="text" 
      name="email" 
      value={this.state.input.email}
      onChange={this.handleChange}
      class="form-control" 
      placeholder="Enter email" 
      id="email" />

      <div className="text-danger">{this.state.errors.email}</div>
  </div>

  <div class="form-group">
    <label for="message">Message:</label>
    <textarea 
      name="message"
      value={this.state.input.message} 
      onChange={this.handleChange}
      placeholder="Enter message"
      class="form-control" />

      <div className="text-danger">{this.state.errors.message}</div>
  </div>
     
  <div>
      <button className="submit">Submit</button>
      <span id="image-loader">
         <img alt="" src="images/loader.gif" />
      </span>
  </div>
</form>

           <div id="message-warning"> Error </div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Cellphone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
