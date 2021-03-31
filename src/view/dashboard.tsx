import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import '../css/dashboard.css';
import {CircularProgress} from '@material-ui/core';

interface MyProps {
    data?:any;
    coinsError?:any  
}

class Dashboard extends React.Component<MyProps, {}>{   
     
    render() { 
        console.log("In length",Object.keys(this.props.data).length);
        if(this.props.data && this.props.coinsError.length===0){
            console.log("In data")
            let desArr=[];
            let homeArr=[];
            let marketCapArr=[];
            if(this.props.data.description !== undefined){
                desArr.push(this.props.data.description); 
            }
            if(this.props.data.links !== undefined){
                homeArr.push(this.props.data.links.homepage); 
            }
            if(this.props.data.market_data !== undefined){
                marketCapArr.push(this.props.data.market_data.market_cap);
            }
            if(Object.keys(this.props.data).length!==0){
                return (
                    <Card className="card-head">                    
                        <Typography gutterBottom variant="h5" component="h3" className="pg-title detail-title">Details For {this.props.data.name}</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                            <TableHead>
                                <TableRow className="page-header">
                                    <TableCell>Details</TableCell>
                                    <TableCell>Value</TableCell>                            
                                </TableRow>
                            </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Name</TableCell>                                
                                        <TableCell align="left">{this.props.data.name}</TableCell> 
                                    </TableRow>                            
                                    <TableRow>
                                        <TableCell>Symbol</TableCell>                                
                                        <TableCell align="left">{this.props.data.symbol}</TableCell> 
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Hashing algorithm</TableCell>                                
                                        <TableCell align="left">{this.props.data.hashing_algorithm}</TableCell> 
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Description</TableCell> 
                                        <TableCell align="left">{desArr.length !== 0 ||desArr.length !== undefined ? (
                                            <div>
                                                {desArr.map((des:any,index:any) => (
                                                <div key = {index}>
                                                    <p>{des.en}</p>                                        
                                                </div>
                                                ))}
                                            </div>
                                            ) : (null)}
                                        </TableCell>                               
                                        
                                    </TableRow>
                                    <TableRow> 
                                        <TableCell>Market cap in Euro</TableCell>                                
                                        <TableCell align="left">{marketCapArr.length !== 0 ||marketCapArr.length !== undefined ? (
                                            <div>
                                                {marketCapArr.map((marketeur:any,index:any) => (
                                                <div key = {index}>
                                                    <p>{marketeur.eur}</p>                                        
                                                </div>
                                                ))}
                                            </div>
                                            ) : (null)}
                                        </TableCell>  
                                    </TableRow>
                                    <TableRow> 
                                        <TableCell>Homepage</TableCell>                                
                                        <TableCell align="left">{homeArr.length !== 0 ||homeArr.length !== undefined ? (
                                            <div>
                                                {homeArr.map((homelink:any,index:any) => (
                                                <div key = {index}>
                                                    <p>{homelink}</p>                                        
                                                </div>
                                                ))}
                                            </div>
                                            ) : (null)}
                                        </TableCell>  
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Genesis Date</TableCell>                                
                                        <TableCell align="left">{this.props.data.genesis_date}</TableCell>                                            
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                );
            }
            else{
                return(
                    <Card className="card-head">
                        <CircularProgress size={50}/>
                    </Card>
                )
            }
            
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

const mapStateToProps = (state: any) => ({
    data: state.coins.coinData,
    coinsError:state.coins.coinsError
       
});
export default connect(mapStateToProps)(Dashboard);
