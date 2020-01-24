import {createMuiTheme, Theme} from '@material-ui/core/styles';
import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";
import {Styles} from "@material-ui/styles";
import {blue, green, grey} from "@material-ui/core/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import createTypography from "@material-ui/core/styles/createTypography";
import createPalette from "@material-ui/core/styles/createPalette";

export const defaultFontFamily: string = 'IRANSans';


export const defaultThemeOption: ThemeOptions = {
    overrides: {
        MuiToolbar: {
            root:{
                background: '#FFFFFF',
                color: grey["900"]
            },
            regular: {
                paddingRight: 10,
                minHeight: 55,
                '@media (min-width: 600px)': {
                    minHeight: 55
                }
            }
        },
    },
    direction: 'rtl',
    spacing: 0,
    palette: {
        primary: grey, secondary: green, type: 'light'
    },
    typography: createTypography(createPalette({
        primary: grey, secondary: green, type: 'light'
    }), {})
};

export function getTheme(option: ThemeOptions): Theme {
    return createMuiTheme(option);
}

export default function createStyles<ClassKey extends string, Props extends {} = {}>(styles: Styles<Theme, Props, ClassKey>, options?: any): any {
    function styled(props: any) {
        const {children, ...other} = props;
        return props.children(other);
    }
    return withStyles(styles, options)(styled);
}