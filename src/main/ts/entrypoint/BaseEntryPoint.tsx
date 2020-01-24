import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createGenerateId, JssProvider, SheetsRegistry} from 'react-jss'
import {AppContainer} from "react-hot-loader";
import {Theme, ThemeProvider} from '@material-ui/core/styles';
import createStyles, {defaultThemeOption, getTheme} from "./ContextManager";
import {AppBar, Fade, LinearProgress, Slide, useScrollTrigger} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {AccountCircle, Add} from "@material-ui/icons";
import {green, grey} from "@material-ui/core/colors";
import Slider from 'infinite-react-carousel';

type splashClasses = 'root';
const SplashStyled = createStyles<splashClasses>(theme => ({
    root:{
        width: '100%',
        height: '100vh',
        background: 'radial-gradient(' + grey["200"] + ', #FFFFFF)'
    },
}));

type classes = 'root' | 'menuButton' | 'title' | 'banner' | 'avatar';
const Styled = createStyles<classes>(theme => ({
    root: {
        paddingTop: 55,
        flexGrow: 1,
        direction: theme.direction
    },
    menuButton: {
        marginLeft: theme.spacing(2)
    },
    title:{
        flexGrow: 1,
    },
    banner: {
        width: '100%',
        height: '100vh'
    },
    avatar: {
        height: 55
    }
}));

interface Props {
    window?: () => Window;
}

export default class BaseEntryPoint extends React.Component<Props, any> {

    static readonly ROOT_DIV_ID = '@#rootDiv#@';

    state = {
        userAgentIsValid: false,
        currentUserLoaded: false,
    };

    static render(component: any): void {
        ReactDOM.render(<AppContainer>{component}</AppContainer>, document.getElementById(BaseEntryPoint.ROOT_DIV_ID));
    }

    getTheme(): Theme {
        return getTheme(defaultThemeOption);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                userAgentIsValid: true,
                currentUserLoaded: true
            });
        }, 3000);
    }

    render() {
        const {userAgentIsValid, currentUserLoaded} = this.state;
        const sheets = new SheetsRegistry();
        const generateId = createGenerateId();
        return <JssProvider registry={sheets} generateId={generateId}>
            <ThemeProvider theme={this.getTheme()}>
                {!userAgentIsValid || !currentUserLoaded?this.renderBeforeUserLoad():this.renderAfterUserLoad()}
            </ThemeProvider>
        </JssProvider>;
    }

    renderBeforeUserLoad() {
        return <SplashStyled>{({classes})=>(
            <div className={classes.root}>
                <LinearProgress/>
                <div style={{display: 'block',textAlign: 'center',width: '100%', top: '30vh', position: 'absolute'}}>
                    <img src={'images/material.png'}/>
                    {/*<span style={{fontFamily: 'IRANSans', fontSize:'2em', display: 'block'}}>Application Title</span>*/}
                </div>
            </div>
        )}</SplashStyled>;
    }

    renderAfterUserLoad() {
        const {userAgentIsValid, currentUserLoaded} = this.state;
        return <Styled>{({classes}) => (
            <Fade enter={true} in={userAgentIsValid && currentUserLoaded} timeout={1000}>
                <div className={classes.root}>
                    {this.renderToolbar()}
                    {this.renderHeader()}
                    {/*<Drawer*/}
                    {/*    className={classes.drawer}*/}
                    {/*    variant="permanent"*/}
                    {/*    classes={{*/}
                    {/*        paper: classes.drawerPaper,*/}
                    {/*    }}>*/}

                    {/*</Drawer>*/}
                    {/*<main className={classes.content}>*/}
                    {/*    <div className={classes.toolbar} />*/}
                    {/*</main>*/}
                </div>
            </Fade>
        )}</Styled>;
    }

    renderToolbar() {
        return <Styled>{({classes}) => (
            <Slide appear={true} direction={"down"} in={true}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Photos
                        </Typography>
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleMenu}
                                color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </Slide>
        )}</Styled>;
    }

    renderHeader() {
        const { window } = this.props;
        const trigger = useScrollTrigger({ target: window ? window() : undefined });
        return <Styled>{({classes}) => (
            <Slider dots>
                <img className={classes.banner} src={'images/bg3.jpg'}/>
                <img className={classes.banner} src={'images/bg4.jpg'}/>
            </Slider>
        )}</Styled>;
    }
}