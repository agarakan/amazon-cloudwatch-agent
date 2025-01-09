// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT
import { Button, CircularProgress, Container, Link, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import moment from 'moment';
import * as React from 'react';
import { TRANSACTION_PER_MINUTE } from '../../common/Constant';
import { usePageEffect } from '../../core/page';
import { PerformanceTable } from '../../core/table';
import { ServicePRInformation, UseCaseData } from './data';
import { createDefaultServicePRInformation, GetLatestPerformanceReports, GetServiceLatestVersion, GetServicePRInformation } from './service';
import { PasswordDialog } from '../../common/Dialog';
import { SelectChangeEvent } from '@mui/material/Select';
import ReactMarkdown from 'react-markdown';

export default function PerformanceReport(props: { password: string; password_is_set: boolean; set_password_state: any }): JSX.Element {
    usePageEffect({ title: 'Amazon CloudWatch Agent' });
    const { password, password_is_set, set_password_state } = props;
    const [{ version, commit_date, commit_title, commit_hash, commit_url, use_cases, ami_id, collection_period, body }] = useStatePerformanceReport(password);
    const [{ data_type }, setDataTypeState] = useStateDataType();
    const [isHidden, setIsHidden] = React.useState(true);

    const handleDataTypeChange = (event: SelectChangeEvent) => {
        setDataTypeState({ data_type: event.target.value });
    };

    const toggleContent = () => {
        setIsHidden(!isHidden);
    };
    const selectedUseCaseData: UseCaseData[] = use_cases.filter((useCase: UseCaseData) => useCase?.data_type?.toLowerCase() === data_type.toLowerCase());

    return (
        <Container>
            <PasswordDialog password={password} password_is_set={password_is_set} set_password_state={set_password_state} />
            {!version || !commit_title ? (
                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <CircularProgress color="inherit" />
                </Container>
            ) : (
                <Container sx={{ py: '5vh', border: '1px solid' }} maxWidth="lg">
                    <Container sx={{ mb: 4 }}>
                        <Typography sx={{ mb: 2, fontWeight: 'bold' }} variant="h2">
                            Performance Report
                            <hr />
                        </Typography>
                    </Container>
                    <Container sx={{ mb: 4 }}>
                        <TableContainer
                            sx={{
                                mb: 4,
                                display: 'flex',
                                justifyContent: 'center',
                                boxShadow: 'unset',
                            }}
                            component={Paper}
                        >
                            <Table
                                sx={{
                                    borderStyle: 'solid',
                                    width: 'fit-content',
                                }}
                                size="small"
                                aria-label="a dense table"
                            >
                                <TableBody>
                                    {['Version', 'Architectural', 'Collection Period', 'Testing AMI', 'Commit Hash', 'Commit Name', 'Commit Date', 'Data Type', 'Release Notes']?.map((name) => (
                                        <TableRow key={name}>
                                            <TableCell
                                                sx={{
                                                    border: '1px solid #000',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {name}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    border: '1px solid #000',
                                                }}
                                            >
                                                {name === 'Version' ? (
                                                    <Link href={`https://github.com/aws/amazon-cloudwatch-agent/releases/tag/${version}`}>{version}</Link>
                                                ) : name === 'Architectural' ? (
                                                    <Typography variant="h4">EC2</Typography>
                                                ) : name === 'Collection Period' ? (
                                                    <Typography variant="h4">{collection_period}s</Typography>
                                                ) : name === 'Testing AMI' ? (
                                                    <Typography variant="h4">{ami_id}</Typography>
                                                ) : name === 'Commit Hash' ? (
                                                    <Typography variant="h4">{commit_hash}</Typography>
                                                ) : name === 'Commit Name' ? (
                                                    <Link href={commit_url} variant="h4">
                                                        {commit_title}
                                                    </Link>
                                                ) : name === 'Commit Date' ? (
                                                    <Typography variant="h4">{commit_date}</Typography>
                                                ) : name === 'Data Type' ? (
                                                    <Select sx={{ height: '41px' }} value={data_type} onChange={handleDataTypeChange}>
                                                        <MenuItem value={'Metrics'}>Metric</MenuItem>
                                                        <MenuItem value={'Traces'}>Trace</MenuItem>
                                                        <MenuItem value={'Logs'}>Logs</MenuItem>
                                                    </Select>
                                                ) : (
                                                    <div>
                                                        <Button
                                                            onClick={toggleContent}
                                                            className="toggle-button"
                                                            variant="outlined"
                                                            sx={{
                                                                marginBottom: 0,
                                                                backgroundColor: '#ffffff',
                                                                borderColor: '#333333',
                                                                color: '#333333',
                                                                '&:hover': {
                                                                    backgroundColor: '#f5f5f5',
                                                                    borderColor: '#333333',
                                                                },
                                                            }}
                                                        >
                                                            {isHidden ? 'Show release notes' : 'Hide release notes'}
                                                        </Button>
                                                        {!isHidden && <ReactMarkdown className="markdown-content">{body}</ReactMarkdown>}
                                                    </div>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <hr />
                    </Container>
                    {TRANSACTION_PER_MINUTE.map((tpm) => (
                        <Container key={tpm}>
                            <Typography sx={{ mb: 2, fontWeight: 'bold' }} variant="h3">
                                {data_type} (TPM: {tpm}){' '}
                            </Typography>
                            <PerformanceTable key={data_type} data_rate={String(tpm)} use_cases={selectedUseCaseData} />
                        </Container>
                    ))}
                </Container>
            )}
        </Container>
    );
}

function useStatePerformanceReport(password: string) {
    const [state, setState] = React.useState({
        version: undefined as string | undefined,
        commit_url: undefined as string | undefined,
        commit_date: undefined as string | undefined,
        commit_hash: undefined as string | undefined,
        commit_title: undefined as string | undefined,
        use_cases: [] as UseCaseData[],
        ami_id: undefined as string | undefined,
        collection_period: undefined as string | undefined,
        error: undefined as string | undefined,
        body: undefined as string | undefined,
    });

    React.useEffect(() => {
        (async () => {
            if (password === '') {
                return;
            }

            const [service_info, performance_reports] = await Promise.all([GetServiceLatestVersion(password), GetLatestPerformanceReports(password)]);
            if (service_info == null || performance_reports == null || performance_reports.length === 0) {
                return;
            }

            const use_cases: UseCaseData[] = [];
            // We only get the latest commit ID; therefore, only use case are different; however, general metadata
            // information (e.g Commit_Hash, Commit_Date of the PR) would be the same for all data.
            const commit_hash = performance_reports.at(0)?.CommitHash.S || '';
            const commitHashes = performance_reports.map((report) => report.CommitHash?.S);
            const commit_date = performance_reports.at(0)?.CommitDate.N;
            const collection_period = performance_reports.at(0)?.CollectionPeriod.S;
            const ami_id = performance_reports.at(0)?.InstanceAMI.S;
            for (const pReport of performance_reports) {
                // Instead of using Max, Min, Std, P99, we would use Avg for every collected metrics
                use_cases.push({
                    name: pReport?.UseCase.S,
                    data_type: pReport?.DataType.S,
                    instance_type: pReport?.InstanceType.S,
                    data: Object.keys(pReport?.Results.M).reduce(
                        (accu, tpm) => ({
                            ...accu,
                            [tpm]: {
                                procstat_cpu_usage: pReport?.Results.M[tpm]?.M?.procstat_cpu_usage?.M?.Average?.N,
                                procstat_memory_rss: pReport?.Results.M[tpm]?.M?.procstat_memory_rss?.M?.Average?.N,
                                procstat_memory_swap: pReport?.Results.M[tpm]?.M?.procstat_memory_swap?.M?.Average?.N,
                                procstat_memory_vms: pReport?.Results.M[tpm]?.M?.procstat_memory_vms?.M?.Average?.N,
                                procstat_memory_data: pReport?.Results.M[tpm]?.M?.procstat_memory_data?.M?.Average?.N,
                                procstat_write_bytes: pReport?.Results.M[tpm]?.M?.procstat_write_bytes?.M?.Average?.N,
                                procstat_num_fds: pReport?.Results.M[tpm]?.M?.procstat_num_fds?.M?.Average?.N,
                                net_bytes_sent: pReport?.Results.M[tpm]?.M?.net_bytes_sent?.M?.Average?.N,
                                net_packets_sent: pReport?.Results.M[tpm]?.M?.net_packets_sent?.M?.Average?.N,
                                mem_total: pReport?.Results.M[tpm]?.M?.mem_total?.M?.Average?.N,
                            },
                        }),
                        {}
                    ),
                });
            }
            const commit_info: ServicePRInformation[] = await GetServicePRInformation(password, commitHashes);
            const commit_info_finalized = commit_info.find((value) => value !== undefined) ?? createDefaultServicePRInformation();

            setState((prev: any) => ({
                ...prev,
                version: service_info.tag_name,
                ami_id: ami_id,
                collection_period: collection_period,
                use_cases: use_cases,
                commit_title: `${commit_info_finalized?.title} (#${commit_info_finalized?.number})`,
                commit_url: commit_info_finalized?.html_url,
                commit_hash: commit_info_finalized?.sha ?? commit_hash,
                commit_date: formatUnixTimestamp(commit_date ?? 0),
                body: service_info.body ?? 'Release notes unavailable',
            }));
        })();
    }, [password, setState]);
    return [state, setState] as const;
}

export const formatUnixTimestamp = (timestamp: string | number, format: string = 'dddd, MMMM Do, YYYY h:mm:ss A'): string => {
    try {
        // Handle string input
        const unixTime = typeof timestamp === 'string' ? Number(timestamp) : timestamp;

        // Validate timestamp
        if (!Number.isFinite(unixTime) || unixTime < 0) {
            console.log('invalid unix timestamp:');
            return moment.unix(0).format(format);
        }

        return moment.unix(unixTime).format(format);
    } catch (error) {
        console.error('Error formatting unix timestamp:', error);
        return moment.unix(0).format(format);
    }
};

function useStateDataType() {
    const [state, setState] = React.useState({
        data_type: 'Metrics' as 'Metrics' | 'Traces' | 'Logs' | string,
    });

    return [state, setState] as const;
}
