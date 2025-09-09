
import * as React from 'react';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Box  } from '@mui/system';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function DisableRowSelection() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });
  const [copiedData, setCopiedData] = React.useState('');

  const initialState = {
    ...data.initialState,
    columns: {
      columnVisibilityModel: {
        id: false,
        desk: false,
      },
    },
  };


  return (
    <div style={{padding:'25px'}}>
    <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
  <Typography variant="h4" fontWeight="bold">DATA GRID </Typography>
  <Typography variant="body2" color="text.secondary">
     Below You can View last Fields of Data Grid Component Pagination and Selection
  </Typography>
                </Box>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        loading={loading}
        isRowSelectable={(params) => params.row.quantity > 50000}
        checkboxSelection
          initialState={{
                        pagination: {
                            paginationModel: { pageSize: 5, page: 0 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
      />
    </div>

    <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1,mt:7 }}>
  <Typography variant="h4" fontWeight="bold">  Advanced features and Components
</Typography>
  <Typography variant="body2" color="text.secondary">
     Below You can View the Fields of Advanced features and Components Export, Copy and paste, Scrolling, Toolbar and Quick Filter
  </Typography>
  </Box>
  <div style={{ height: 400, width: '100%' }}>
       <DataGrid
          {...data}
          loading={loading}
          showToolbar
           initialState={{
                        pagination: {
                            paginationModel: { pageSize: 25, page: 0 },
                        },
                    }}
                    pageSizeOptions={[25,50,75,100]}
           checkboxSelection
        />
  </div>
    
    </div>
  );
}