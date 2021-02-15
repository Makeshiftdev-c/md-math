import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import "./button-group.styles.css";

import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

function BasicButtonGroup({ buttonData, handleClick }) {
  const classes = useStyles();

  const clickhandler = (encoding) => handleClick(encoding);

  const buttonsGroups = buttonData.map((___, index) => {
    if (index === 0 || index % 6 === 0) {
      return (
        <ButtonGroup
          key={uuidv4()}
          color="primary"
          aria-label="outlined primary button group"
          fullWidth={true}
        >
          {buttonData.map((innerEncoding, innerIndex) => {
            if (innerIndex >= index && innerIndex <= index + 5) {
              return (
                <Tooltip
                  key={uuidv4()}
                  TransitionComponent={Zoom}
                  title={innerEncoding.encodes}
                >
                  <Button key={innerEncoding.id} onClick={clickhandler}>
                    <span className="image-container">
                      <img
                        alt="symbol"
                        src={innerEncoding.url}
                        className={innerEncoding.class}
                      />
                    </span>
                  </Button>
                </Tooltip>
              );
            }
            return null;
          })}
        </ButtonGroup>
      );
    }
    return null;
  });

  return <div className={classes.root}>{buttonsGroups}</div>;
}

export default React.memo(BasicButtonGroup);
