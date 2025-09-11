 import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { renderAvatar } from './cell-renderers/avatar';
import { renderEmail } from './cell-renderers/email';
import { renderEditRating, renderRating } from './cell-renderers/rating';
import {
  COUNTRY_ISO_OPTIONS,
  renderCountry,
  renderEditCountry,
} from './cell-renderers/country';
import { renderSparkline } from './cell-renderers/sparkline';
import { renderEditProgress, renderProgress } from './cell-renderers/progress';
import {
  renderEditStatus,
  renderStatus,
  STATUS_OPTIONS,
} from './cell-renderers/status';
import {
  INCOTERM_OPTIONS,
  renderEditIncoterm,
  renderIncoterm,
} from './cell-renderers/incoterm';








const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  
    {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,colSpan: 1,  hideable: false,  editable: true
  },
{
   field: 'organization',
   sortable: false,
   filterable: false,
   hideable: false,
},

  {
    field: 'avatar',
    headerName: 'Avatar',
    renderCell: renderAvatar,
    valueGetter: (value, row) =>
      row.lastName == null || row.avatar == null
        ? null
        : { lastName: row.lastName, color: row.avatar },
    sortable: false,
    filterable: false,
  },
  { field: 'email', headerName: 'Email', renderCell: renderEmail, width: 150, editable: true },
  {
    field: 'rating',
    headerName: 'Rating',
    renderCell: renderRating,
    renderEditCell: renderEditRating,
    width: 180,
    type: 'number',
    editable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    type: 'singleSelect',
    valueOptions: COUNTRY_ISO_OPTIONS,
    valueFormatter: (value) => value?.label,
    renderCell: renderCountry,
    renderEditCell: renderEditCountry,
    width: 150,
    editable: true,
  },
  {
    field: 'salary',
    headerName: 'Salary',
    type: 'number',
    valueFormatter: (value) =>
      !value || typeof value !== 'number' ? value : `$${value.toLocaleString()}`,
    editable: true,
  },
  {
    field: 'monthlyActivity',
    headerName: 'Monthly activity',
    filterable: false,
    sortable: false,
    editable: false,
    renderCell: renderSparkline,
    width: 150,
  },
  {
    field: 'budget',
    headerName: 'Budget left',
    renderCell: renderProgress,
    renderEditCell: renderEditProgress,
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: renderStatus,
    renderEditCell: renderEditStatus,
    type: 'singleSelect',
    valueOptions: STATUS_OPTIONS,
    width: 150,
    editable: true,
  },
  {
    field: 'incoTerm',
    headerName: 'Incoterm',
    renderCell: renderIncoterm,
    renderEditCell: renderEditIncoterm,
    type: 'singleSelect',
    valueOptions: INCOTERM_OPTIONS,
    editable: true,
  },
];


const rows = [
  {
    id: 1,
    firstName:'Kummari',
    lastName: 'Vivekananda',
    avatar: '#f44336',
    email: 'vivek@example.com',
    rating: 4,
    country: { code: 'IN', label: 'India' },
    salary: 55000,
    monthlyActivity: [5, 10, 15, 20, 18, 22, 17, 25, 12, 10],
    budget: 70,
    status: 'Active',
    incoTerm: 'FOB',
  },
  {
    id: 2,
    firstName:'Lannister',
    lastName: 'karl',
    avatar: '#2196f3',
    email: 'pavan@example.com',
    rating: 3,
    country: { code: 'US', label: 'USA' },
    salary: 62000,
    monthlyActivity: [3, 7, 12, 14, 16, 18, 20, 15, 9, 8],
    budget: 65,
    status: 'Inactive',
    incoTerm: 'CIF',
  },
  {
    id: 3,
     firstName:'Clifford',
    lastName: 'Raj',
    avatar: '#1d2073ff',
    email: 'Raj@example.com',
    rating: 5,
    country: { code: 'DE', label: 'Germany' },
    salary: 80000,
    monthlyActivity: [8, 12, 16, 18, 20, 22, 25, 21, 14, 12],
    budget: 80,
    status: 'Active',
    incoTerm: 'EXW',
  },
   {
    id: 4,
     firstName:'Stark',
    lastName: 'poul',
    avatar: '#eb36f4ff',
    email: 'poul@example.com',
    rating: 3,
    country: { code: 'FR', label: 'France' },
    salary: 50000,
    monthlyActivity: [5, 10, 15, 20, 18, 22, 17, 25, 12, 10],
    budget: 70,
    status: 'Active',
    incoTerm: 'FOB',
  },
  {
    id: 5,
     firstName:'Melisandre',
    lastName: 'Jack',
    avatar: '#2cf321ff',
    email: 'Jack@example.com',
    rating: 2,
    country: { code: 'US', label: 'USA' },
    salary: 42000,
    monthlyActivity: [3, 7, 12, 14, 16, 18, 20, 15, 9, 8],
    budget: 65,
    status: 'Inactive',
    incoTerm: 'CIF',
  },
  {
    id: 6,
     firstName:'Roxie',
    lastName: 'Harry',
    avatar: '#4caf50',
    email: 'Harry@example.com',
    rating: 4,
    country: { code: 'GB', label: 'United Kingdom' },
    salary: 90000,
    monthlyActivity: [8, 12, 16, 18, 20, 22, 25, 21, 14, 12],
    budget: 40,
    status: 'Active',
    incoTerm: 'EXW',
  },
];



const columns1 = [
  { field: 'TeamMembers', headerName: 'Team Members', width: 180 },
  { field: 'DraftTask', headerName: 'Draft Task', type: 'number', width: 150 },
  { field: 'Ready_To_Deploy', headerName: 'Ready To Deploy', type: 'number', width: 180 },
  { field: 'Complete', headerName: 'Complete', type: 'number', width: 150 },
  { field: 'Blocked', headerName: 'Blocked', type: 'number', width: 150 },
];

const rows1 = [
  { id: 1, TeamMembers: 'Vivekananda', DraftTask: 9, Ready_To_Deploy: 8, Complete: 1, Blocked: 4 },
  { id: 2, TeamMembers: 'Pavan', DraftTask: 6, Ready_To_Deploy: 8, Complete: 5, Blocked: 1 },
  { id: 3, TeamMembers: 'Srini', DraftTask: 8, Ready_To_Deploy: 8, Complete: 1, Blocked: 3 },
  { id: 4, TeamMembers: 'Praneeth', DraftTask: 4, Ready_To_Deploy: 8, Complete: 2, Blocked: 2 },
  { id: 5, TeamMembers: 'Ravi', DraftTask: 7, Ready_To_Deploy: 8, Complete: 5, Blocked: 3 },
  { id: 6, TeamMembers: 'Nikhil', DraftTask: 5, Ready_To_Deploy: 5, Complete: 4, Blocked: 1 },
  { id: 7, TeamMembers: 'Bala', DraftTask: 6, Ready_To_Deploy: 4, Complete: 5, Blocked: 3 },
];


export default function DataGrid1() {
  const [nbRows, setNbRows] = React.useState(5);

  const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
  const addRow = () => setNbRows((x) => Math.min(rows1.length, x + 1));

const columnGroupingModel = [
  

      {
        groupId: 'Full name',
        children: [{ field: 'lastName' }, { field: 'firstName' }],
      },
      { field: 'organization' },
  
];




  return (
    <div style={{ padding: '25px' }}>
      <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
        <Typography variant="h4" fontWeight="bold">DATA GRID DASHBOARD</Typography>
        <Typography variant="body1" color="text.secondary">
          IN THIS DASHBOARD YOU CAN SEE DATA GRID COMPONENTS
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 10 }}>
        <Box sx={{ width: '100%' }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Button size="small" onClick={removeRow}>Remove a row</Button>
            <Button size="small" onClick={addRow}>Add a row</Button>
          </Stack>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows1.slice(0, nbRows)}
              columns={columns1}
              pageSize={5}initialState={{
    pagination: {
      paginationModel: { pageSize: 5, page: 0 }, // default page size 5
    },
  }}
  pageSizeOptions={[5, 10, 25]} 
             
            />
          </div>
        </Box>
      </Container>

      <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
        <Typography variant="h5" fontWeight="bold">DATA GRID COLUMNS AND ROWS</Typography>
        <Typography variant="body2" color="text.secondary">
          BELOW CAN SEE ALL MANPULATIONS WITH COLUMN AND ROWS FIELD
        </Typography>
      </Box>

      <div style={{ height: 500, width: '100%'}}>
        <DataGrid rows={rows} columns={columns}
        rowHeight={55}
        checkboxSelection
        disableRowSelectionOnClick
        columnGroupingModel={columnGroupingModel}
        pageSize={5}initialState={{
    pagination: {
      paginationModel: { pageSize: 5, page: 0 }, // default page size 5
    },
  }}
  pageSizeOptions={[5, 10, 25]} />
      </div>
    </div>
  );
}




