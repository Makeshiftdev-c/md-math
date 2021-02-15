import React from "react";
import Button from "@material-ui/core/Button";

// snackbar stuff
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// clipboard wrappper
import { CopyToClipboard } from "react-copy-to-clipboard";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Cards = ({ expression }) => {
  //data-y stuff
  const queryString = expression
    .replace(/\s+/g, "%20")
    .replace(/&+/g, "%26")
    .replace(/\++/g, "%2B");
  const markdown =
    "![formula](https://render.githubusercontent.com/render/math?math=" +
    String.raw`${queryString})`;
  const markup =
    '<img alt="formula" src="https://render.githubusercontent.com/render/math?math=' +
    String.raw`${queryString}" />`;

  //fun, cool stuff
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="container-fluid mt-4 pb-2">
      <div className="row mb-auto">
        <div className="col-lg mb-4 copy-container">
          <div className="card">
            <div className="card-header">Markdown</div>
            <div className="card-body">
              <h5 className="card-title">Paste into Markdown File</h5>
              <p className="card-text">
                {" "}
                <code>{markdown}</code>
              </p>
            </div>
            <div className="card-footer">
              <CopyToClipboard text={markdown} onCopy={handleClick}>
                <Button
                  variant="contained"
                  className="card-button"
                  color="primary"
                  size="large"
                  startIcon={
                    <span className="material-icons">content_copy</span>
                  }
                >
                  Copy
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className="col-sm mb-4 copy-container">
          <div className="card">
            <div className="card-header">Markup</div>
            <div className="card-body">
              <h5 className="card-title">Paste into Markup File</h5>
              <p className="card-text">
                <code>{markup}</code>
              </p>
            </div>
            <div className="card-footer">
              <CopyToClipboard text={markup} onCopy={handleClick}>
                <Button
                  variant="contained"
                  className="card-button"
                  color="primary"
                  size="large"
                  startIcon={
                    <span className="material-icons">content_copy</span>
                  }
                >
                  Copy
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Copied to Clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Cards;
