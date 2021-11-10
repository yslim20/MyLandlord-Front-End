import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

// ============ Tabel Head Create Data
function createData(avatar, name, address, rate) {
  return {
    avatar,
    name,
    address,
    rate,
  };
}

//================ fake data for table body
const rows = [
  createData(1, 'Jasper White','4388 Buchanan St 1901 Burnaby BC V5C 6R8', 5),
  createData(2, 'Daniel Robinson','Protperty Address: 406 47th Ave E Vancouver BC V5W 2B4', 2),
  createData(3, 'Susan Davis','1181 Edgewood Pl North Vancouver BC V7R 1Z1', 5),
  createData(4, 'Mary Lawing','1470 Pennyfarthing Dr 203 Vancouver BC V6J 4Y2', 3),
  createData(5, 'Earl A. Sanchez','3421 10th Ave W Vancouver BC V6R 2E7', 5),
  createData(6, 'James Ward','731 Beachview Dr North Vancouver BC V7G 1P8', 5),
  createData(7, 'Jack Chambers','406 47th Ave E Vancouver BC V5W 2B4', 2),
  createData(8, 'Jasper White','4388 Buchanan St 1901 Burnaby BC V5C 6R8', 5),
  createData(9, 'Daniel Robinson','Protperty Address: 406 47th Ave E Vancouver BC V5W 2B4', 2),
  createData(10, 'Susan Davis','1181 Edgewood Pl North Vancouver BC V7R 1Z1', 5),
  createData(11, 'Mary Lawing','1470 Pennyfarthing Dr 203 Vancouver BC V6J 4Y2', 3),
  createData(12, 'Earl A. Sanchez','3421 10th Ave W Vancouver BC V6R 2E7', 5),
  createData(13, 'James Ward','731 Beachview Dr North Vancouver BC V7G 1P8', 5),
];

// ============ Function for filtering
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ============ Tabel Head Information
const headCells = [
  {
    id: 'avatar',
    numeric: true,
    disablePadding: true,
    label: 'Avatar',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'rate',
    numeric: true,
    disablePadding: false,
    label: 'Rate',
  },
  
];

// ============ EnhancedTableHead Function
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{
        span: {
          fontFamily: "'Heebo', sans-serif",
          fontSize: "1.125em",
          fontWeight: 500,
          color: "#5333ED",
        },  
             
      }}
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            // color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              align: "center",
              tr: {
                fontFamily: "'Heebo', sans-serif",
                fontSize: "1.125em",
              }
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// ============ EnhancedTableHead Props
EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  return <></>
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// ============ Function ============== //
const EnhancedTable = ({

// ============ Props
  boxSizing = "border-box",
  marginB = 30,
  width = "100%",

}) => {

// ============ useState
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);

// Row to show
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

// ============ filetering function
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

// ============ handleclick function
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

// ============ Layout
  return (
    <Box sx={{ width: '100%', mb: {marginB} }}>
      <Paper sx={{ width: {width}, mb: 4 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
{/* // ============ TableHead */}
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

{/* // ============ TableBody */}
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      align= "center"
                      sx={{
                        td: {
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "1em",
                          borderBottomColor: "C4C4C4",
                        }
                      }}
                    >
{/*================= CHECKBOX =================*/}
                      <TableCell padding="checkbox">
                        <Checkbox
                          // color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                          sx={{ 
                            span: {
                              primaryColor: "#5333ED"
                            } 
                          }}
                        />
                      </TableCell>

{/*================= AVATAR =================*/}
                      <TableCell 
                        sx={{
                          boxSizing: {boxSizing},
                        }}
                        align="center"
                      >
                        {row.avatar}
                      </TableCell>

{/*================= NAME =================*/}
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                        sx={{
                          boxSizing: {boxSizing},
                        }}
                        
                      >
                        {row.name}
                      </TableCell>

{/*================= ADDRESS =================*/}
                      <TableCell 
                        align="left"
                        sx={{
                          boxSizing: {boxSizing},
                        }}
                      >
                        {row.address}
                      </TableCell>
{/*================= RATE =================*/}
                      <TableCell 
                        align="center"
                        sx={{
                          boxSizing: {boxSizing},
                        }}
                      >
                        {row.rate}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default EnhancedTable;