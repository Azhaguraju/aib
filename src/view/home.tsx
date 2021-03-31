import React from "react";
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';
import {getCoinsList,getCoinsById,getEmptyCoinsById} from '../action/getCoinsList';
import '../css/home.css';

interface MyProps{
    getCoinsList?:any,
    coinsList?:any,
    getCoinsById?:any,
    history?:any,
    getEmptyCoinsById?:any,
    coinsError?:any
}

interface MyState{
    page:any;
    rowsPerPage:any;
    setPage:any;
    setRowsPerPage:any;    
    order:any;    
}

function stableSort(array:any) {    
    const stabilizedThis = array.map((el:any, index:any) => [el, index]);    
    return stabilizedThis.map((el:any) => el[0]);
}

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


class Home extends React.Component<MyProps,MyState> {
    constructor(props:any){
        super(props);
        this.state={
            page:0,
            rowsPerPage:10,
            setPage:0,
            setRowsPerPage:5,
            order:'asc',                      
        }
    }

    componentDidMount(){       
        this.props.getCoinsList();
    }

    handleChangePage = (event:any,newPage:any)=>{        
        this.setState({
            page:newPage
        })
    }

    handleChangeRowsPerPage=(event:any)=>{
        let rowPage=parseInt(event.target.value,10);
        this.setState({
            rowsPerPage:rowPage,
            page:0
        })
    }

    handleClick=(event:any,id:any)=>{     
        this.props.getEmptyCoinsById("");  
        this.props.getCoinsById(id);
        this.props.history.push("/data");
    }  

    render() {
        if(this.props.coinsList.length>0){
        return (           
            <Card className="card-head"> 
                <CardContent className="pg-inner-container">
                    <Typography gutterBottom variant="h5" component="h3" className="pg-title">Coins Markets List</Typography>
                    <TableContainer component={Paper}>
                        <Table className="home-table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Id</StyledTableCell>
                                    <StyledTableCell>Image</StyledTableCell>
                                    <StyledTableCell>Name</StyledTableCell>
                                    <StyledTableCell>Symbol</StyledTableCell>
                                    <StyledTableCell>Current Price</StyledTableCell>
                                    <StyledTableCell>High 24 hour Price</StyledTableCell>
                                    <StyledTableCell>Low 24 hour Price</StyledTableCell>                            
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {stableSort(this.props.coinsList)
                            .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                            .map((row:any,index:any)=>{                              
                               return(
                                   <TableRow
                                   hover
                                   key={row.id}
                                   className="navigation-link"
                                   onClick={event=>this.handleClick(event,row.id)}                                                                      
                                   >
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell><img src={row.image} className="virual-coins-img" alt="virtual coins"/></TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.symbol}</TableCell>
                                    <TableCell>{row.current_price}</TableCell>                                    
                                    <TableCell>{row.high_24h}</TableCell>
                                    <TableCell>{row.low_24h}</TableCell>
                                   </TableRow>
                               )
                            })                                
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 20, 30]}
                        component="div"
                        count={this.props.coinsList.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        onChangePage={(event:any,newPage:any)=>this.handleChangePage(event,newPage)}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </CardContent>
            </Card> 
        );
        }
        else if(this.props.coinsError.length>0){
            return(
                <Card className="card-head"> 
                    <CardContent className="pg-inner-container">
                    <Typography gutterBottom variant="h5" component="h3" className="pg-title">{this.props.coinsError[0].error}</Typography>
                    </CardContent>
                </Card> 
            )
        }
        else{
            return null;
        }
    }
}
const mapStateToProps = (state:any) => ({
    coinsList:state.coins.coinsList,
    coinsError:state.coins.coinsError
});
export default connect(mapStateToProps,{getCoinsList,getCoinsById,getEmptyCoinsById})(Home);
