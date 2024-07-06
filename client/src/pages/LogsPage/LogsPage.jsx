import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
    MaterialReactTable,

} from "material-react-table";
import { getAllLogs } from "../../utils/AdminFunctions";

function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            const logs = await getAllLogs();
            setLogs(logs);
        };
        fetchLogs();
    }, []);

    const columns = [
        {
            accessorKey: 'timestamp',
            header: 'Timestamp',
            Cell: ({ cell }) => new Date(cell.getValue()).toLocaleString(), // Formatting the timestamp
        },
        {
            accessorKey: 'user', // Accessor key for the column
            header: 'User', // Column header name
        },
        {
            accessorKey: 'logMessage',
            header: 'Log Message',
        },

    ];

    return (
        <Box
            sx={{
                margin: 1,
                backgroundColor: "#fff5e0",
                border: 0.1,
                borderColor: "lightgray",
            }}
        >
            <MaterialReactTable
                columns={columns}
                data={logs}


                muiTopToolbarProps={{
                    sx: {
                        backgroundColor: '#fff5e0'
                    }
                }}
                muiTableContainerProps={{
                    sx: {
                        maxHeight: "60vh", // Set max height to enable scrolling
                    },
                }}
            />
        </Box>
    );
}
export default Logs;