
import { Box, FormControl, InputBase, NativeSelect, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setColumns } from 'reducers/contentSetting';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 26px 5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default function ColController(props) {
  const store = useSelector(store => store)
  const columns = useSelector(store => store.contentSetting.columns)
  const dispatch = useDispatch()

  useEffect(() => { // 쿠키 읽기
    const getCookie = (name) => {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    let columns = getCookie('columns');

    if (typeof columns === "string") {
      dispatch(setColumns(Number(columns))) // 쿠키를 임의로 변경시 NaN 에러 발생 가능
    };
  }, [dispatch])

  useEffect(() => {
    console.log(store)
  }, [store])

  const onColCount = (event) => {
    const col=event.target.value
    dispatch(setColumns(col))
    document.cookie = 'columns=' + col + ';path=/;';
  }

  return (
    <Box {...props}>
      <FormControl >
        {/* <InputLabel htmlFor="demo-customized-select-native" variant='filled' >갯수</InputLabel> */}
        <NativeSelect
          id="demo-simple-select-outlined"
          value={columns}
          onChange={onColCount}
          input={<BootstrapInput />}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </NativeSelect>
      </FormControl>
    </Box>
  )
}