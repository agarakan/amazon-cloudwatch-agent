// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { UseCaseData } from '../containers/PerformanceReport/data.js';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        border: '1px solid #000',
        textAlign: 'center',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        border: '1px solid #000',
        textAlign: 'center',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {},
}));

export function PerformanceTable(props: { use_cases: UseCaseData[]; data_rate: string }): JSX.Element {
    const { use_cases, data_rate } = props;
    return (
        <TableContainer sx={{ mb: 4 }} component={Paper}>
            <Table sx={{ borderStyle: 'solid' }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell width="50vw" align="center" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                            Use Case
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            align="center"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Instance Type
                        </StyledTableCell>
                        <StyledTableCell
                            width="50%"
                            align="center"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Avg CPU Usage (%)
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            align="center"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Avg Memory Usage (%)
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            align="center"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Avg Memory Swap (%)
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            align="center"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Avg Memory Data (%)
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            align="center"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Avg Virtual Memory (%)
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            align="center"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Avg Write Disk Bytes (MB)
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            align="center"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            File Descriptors
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Avg Net Bytes Sent (MB)
                        </StyledTableCell>
                        <StyledTableCell
                            width="30%"
                            sx={{
                                border: '1px solid #000',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Avg Net Packages Sent (MB)
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {use_cases
                        ?.filter((use_case) => use_case.data?.[data_rate])
                        .map((use_case: UseCaseData, index) => {
                            const metrics = use_case.data[data_rate];
                            const memTotal = Number(metrics?.mem_total);

                            const getFormattedValue = (value: number | undefined, divisor?: number) => {
                                if (!value) {
                                    return '0.00';
                                }
                                return (divisor ? value / divisor : value).toFixed(2);
                            };

                            return (
                                <StyledTableRow key={`${use_case.name}-${index}`}>
                                    <StyledTableCell>{use_case.name}</StyledTableCell>
                                    <StyledTableCell>{use_case.instance_type}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.procstat_cpu_usage))}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.procstat_memory_rss), memTotal)}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.procstat_memory_swap), memTotal)}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.procstat_memory_data), memTotal)}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.procstat_memory_vms), memTotal)}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.procstat_write_bytes))}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.procstat_num_fds))}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.net_bytes_sent))}</StyledTableCell>
                                    <StyledTableCell>{getFormattedValue(Number(metrics?.net_packets_sent))}</StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
