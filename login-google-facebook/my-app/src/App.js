import React from "react";
import { GoogleLogin } from 'react-google-login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  responseGoogle = response => {
    console.log(response);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <GoogleLogin
          clientId="777737472957-o2b9fdgfpae4ha7e8001ae591p2gv50i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}
