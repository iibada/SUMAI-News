import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './Header.css';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';

// Drawer
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HistoryIcon from '@material-ui/icons/History';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MailIcon from '@material-ui/icons/Mail';
import FeedbackDialog from './FeedbackDialog';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    overflowX: 'hidden',
    border: '0px',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    border: '0px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listText: {
    fontFamily: "NotoSansKR-Regular",
    fontSize: 15,
  },

  imgLogo: {
    width: 80,
    height: 28.2,
    alt: 'SUMAI',
  },
  summaryTypo: {
    color: "#0000008A",
  },
  link: {
    display: 'flex',
    alignItems: "center",
    textDecoration: 'none',
    minWidth: "142px",
  },
}))

function ListItemCreater(props) {
  const {url, primary, history, Icon, sm, classes} = props

  const backgoroundColor = window.location.pathname === url ? '#e6e6e6' : '#fff'
  const iconButtonColor = window.location.pathname === url ? 'primary' : 'inherit'
  const Link = () => {window.location.pathname === url ? window.location.reload() : history.push(url)}

  return (
    <ListItem button style={{ padding: sm ? '20px' : '20px 20px 20px 13.5px', backgroundColor: backgoroundColor}} onClick={Link}>
      <ListItemIcon> <Icon color={iconButtonColor} style={{ fontSize: '30px' }} /> </ListItemIcon>
      <ListItemText disableTypography primary={primary} className={classes.listText} />
    </ListItem>
  )

}

export default function MiniDrawer(props) {
  const theme = useTheme();
  const xsm = useMediaQuery(theme.breakpoints.up('xsm'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  const history = useHistory();

  const { open, setOpen } = props

  const [dialogOpen, setDialogOpen] = React.useState(false)

  return (
    <Box>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })
        }}
      >

        <div className={classes.toolbar} />

        <List className="MenuList">
          <ListItemCreater sm={sm} classes={classes} Icon={HomeIcon} url={'/'} primary={"홈"} history={history}/>
          <ListItemCreater sm={sm} classes={classes} Icon={WhatshotIcon} url={'/trending'} primary={"인기"} history={history}/>
          <ListItemCreater sm={sm} classes={classes} Icon={HistoryIcon} url={'/history'} primary={"열람 기록"} history={history}/>
          <ListItemCreater sm={sm} classes={classes} Icon={ThumbUpIcon} url={'/like'} primary={"좋아요 표시한 문서"} history={history}/>
        </List>
        <Divider />
        <List>
          <ListItem button style={{ padding: sm ? '20px' : '20px 20px 20px 13.5px' }} onClick={() => setDialogOpen(true)}>
            <ListItemIcon> <MailIcon style={{ fontSize: '30px' }} /> </ListItemIcon>
            <ListItemText disableTypography primary="의견 보내기" className={classes.listText} />
          </ListItem>
        </List>
      </Drawer>
      <FeedbackDialog open={dialogOpen} setOpen={setDialogOpen} />
    </Box>
  )
}