import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BasicButtonGroup from "../button-group/button-group.component";
import ButtonEncodings from "../../global/encodings";

const themeX = createMuiTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "initial",
      },
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={6}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
    boxShadow: "0 0 5px black",
  },
  tabRoot2: {
    minWidth: 120,
    flex: 1,
  },
}));

export default function NavTabs({ handleClick }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={themeX}>
        <AppBar position="static">
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable auto tabs example"
          >
            <LinkTab
              classes={{ root: classes.tabRoot2 }}
              label="Math"
              {...a11yProps(0)}
            />
            <LinkTab
              classes={{ root: classes.tabRoot2 }}
              label="Trig"
              {...a11yProps(1)}
            />
            <LinkTab
              classes={{ root: classes.tabRoot2 }}
              label="Logic"
              {...a11yProps(2)}
            />
            <LinkTab
              classes={{ root: classes.tabRoot2 }}
              label="Arrow"
              {...a11yProps(3)}
            />
            <LinkTab
              classes={{ root: classes.tabRoot2 }}
              label="Symbol"
              {...a11yProps(4)}
            />
            <LinkTab
              classes={{ root: classes.tabRoot2 }}
              label="Format"
              {...a11yProps(5)}
            />
          </Tabs>
        </AppBar>
      </ThemeProvider>
      <div className="container-fluid">
        <TabPanel value={value} index={0}>
          <BasicButtonGroup
            handleClick={handleClick}
            buttonData={ButtonEncodings.math}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BasicButtonGroup
            handleClick={handleClick}
            buttonData={ButtonEncodings.gkandfun}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <BasicButtonGroup />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <BasicButtonGroup />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <BasicButtonGroup />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <BasicButtonGroup />
        </TabPanel>
      </div>
    </div>
  );
}
