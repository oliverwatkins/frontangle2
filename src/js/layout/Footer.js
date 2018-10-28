import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
        // marginTop: "30px",
        // marginLeft:"10px",
        backgroundColor: "#fff9fa",
        color: "#123123",
        padding:"5px",
        width: "100%",
        position: "fixed",
        bottom: 0
      };

    return (
      <footer style={footerStyles}>
        <div>
          <div>
            <p>Copyright &copy; Frontangle.com</p>
          </div>
        </div>
      </footer>
    );
  }
}
