import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
        marginTop: "30px",
        marginLeft:"10px",
        // backgroundColor: "#333",
        width: "100%",
        bottom: 20,
        position: "fixed"
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
