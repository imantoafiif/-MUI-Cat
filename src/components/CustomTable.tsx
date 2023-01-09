import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import React from 'react'
import useFetch from '../helpers/hooks/useFetch';
import LinearProgress from '@mui/material/LinearProgress';
import { Pagination, Skeleton, TableFooter, Typography } from '@mui/material';

interface props {
    url: { 
        url: string, 
        params: { page?: number } 
    },
    headers: string[],
    datas: string[],
    show_header?: boolean,
    title: string,
}

const CustomTable = ({ url, headers, datas, show_header = true, title }: props) => {

    const [ items, fetching, exception, fetch ] = useFetch(url.url, url.params)

    const onPageChange = async (e: React.ChangeEvent<unknown>, v: number) => {
        if(v == items.data.current_page) return
        fetch({page: v})
    }

    return (
        <TableContainer
            style={{ boxShadow: '0px 0px 15px 0px #dedede' }} 
            component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell 
                            colSpan={headers.length}
                            sx={{ border: 'none', fontWeight: 'bold' }}
                            style={{width: '20%'}}>
                            <h2 style={{ margin: 0 }}>{title}</h2>
                        </TableCell>   
                    </TableRow>
                </TableHead>
                {
                    show_header && (
                        <TableHead>
                            <TableRow>
                                {
                                    headers.map((item:string) => (
                                        <TableCell
                                            key={item} 
                                            style={{width: '20%', fontWeight: 'bold'}}>
                                            {item}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                    )
                }
                
                <TableBody>
                    {
                        fetching && !items ? 
                        (
                            <TableRow>
                                <TableCell colSpan={headers.length}>
                                    <LinearProgress />
                                </TableCell>
                            </TableRow>
                        ) :
                        (
                            items && items.data.data.map((item:any, key:number) => (
                                <TableRow key={key}>
                                    {
                                        datas.map((data:string) => (
                                            <TableCell key={data}>
                                                {
                                                    fetching ? 
                                                    <Skeleton animation="wave"/> : 
                                                    <Typography>{item[data.toLowerCase()] || '-'}</Typography>
                                                }
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        )
                    }
                </TableBody>
                {
                    items && (
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={headers.length} align="right">
                                    <Pagination 
                                        disabled={fetching}
                                        onChange={onPageChange}
                                        style={{display: 'inline-flex'}}
                                        count={items.data.last_page} color="primary" />
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    )
                }
            </Table>
        </TableContainer>
    )

}

export default CustomTable