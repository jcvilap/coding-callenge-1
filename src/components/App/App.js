import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Drawer, Paper} from 'material-ui';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import AboutIcon from 'material-ui-icons/People';
import HomeIcon from 'material-ui-icons/Home';
import MenuIcon from 'material-ui-icons/Menu';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import Home from '../Home';
import About from '../About';
import './App.css';

const theme = createMuiTheme();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open})
    }


    render() {
        const {open} = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <div className="app">
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton color="contrast" onClick={this.handleToggle}><MenuIcon /></IconButton>
                                <h2 className="app-title">iFit</h2>
                            </Toolbar>
                            <Drawer open={open} onRequestClose={this.handleToggle} onClick={this.handleToggle}>
                                <Toolbar>
                                    <IconButton onClick={this.handleToggle}><MenuIcon /></IconButton>
                                    <h2 className="app-title">iFit</h2>
                                </Toolbar>
                                <List disablePadding>
                                    <Link to="/">
                                        <ListItem button>
                                            <ListItemIcon><HomeIcon /></ListItemIcon>
                                            <ListItemText primary="Home" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/about">
                                        <ListItem button>
                                            <ListItemIcon><AboutIcon /></ListItemIcon>
                                            <ListItemText primary="About" />
                                        </ListItem>
                                    </Link>
                                </List>
                            </Drawer>
                        </AppBar>
                        <div className="app-content">
                            <Paper className="app-content-item">
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                            </Paper>
                        </div>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
