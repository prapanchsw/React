import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tabs1 = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>
                        Name:
                    </TableCell>
                    <TableCell>Age:</TableCell>
                    <TableCell>Place:</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Prapanch.S</TableCell>
                        <TableCell>22</TableCell>
                        <TableCell>Kollam</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
      
    </div>
  )
}

export default Tabs1
