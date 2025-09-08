

import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowModes,
    DataGrid,
    GridActionsCellItem,
    GridRowEditStopReasons,
    Toolbar,
    ToolbarButton,
} from '@mui/x-data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
} from '@mui/x-data-grid-generator';
import { Typography } from '@mui/material';

import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGridPro, GridLogicOperator } from '@mui/x-data-grid-pro';

const roles = ['Market', 'Finance', 'Development', 'Cloud'];
const randomRole = () => {
    return randomArrayItem(roles);
};

const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        age: 25,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 36,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 19,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 28,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 22,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 48,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 32,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },

];

//--------------EDITING-----------//
const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];



//-----------FILTERING--------//


function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [
            ...oldRows,
            { id, name: '', age: '', role: '', isNew: true },
        ]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <Toolbar>
            <Tooltip title="Add record">
                <ToolbarButton onClick={handleClick}>
                    <AddIcon fontSize="small" />
                </ToolbarButton>
            </Tooltip>
        </Toolbar>
    );
}

export default function FullFeaturedCrudGrid() {
    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState({});

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 180,
            editable: true
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 80,
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'joinDate',
            headerName: 'Join date',
            type: 'date',
            width: 180,
            editable: true,
        },
        {
            field: 'role',
            headerName: 'Department',
            width: 220,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Market', 'Finance', 'Development', 'Cloud'],
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
                const row = rows.find((r) => r.id === id);
                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            material={{
                                sx: {
                                    color: 'primary.main',
                                },
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                const actions = [];
                if (row.age % 2 === 0) {
                    actions.push(
                        <GridActionsCellItem
                            icon={<EditIcon />}
                            label="Edit"
                            onClick={handleEditClick(id)}
                            color="inherit"
                        />
                    );
                }

                // ✅ Delete button always shows
                actions.push(
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />
                );
                return actions;
            },
        },
    ];

    //--------------EDITING----------//
    const { data, loading } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });
   const { data1, loading1 } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
   const [filterModel, setFilterModel] = React.useState({
    items: [
      {
        field: 'rating',
        operator: '>',
        value: '2.5',
      },
    ],
  });

    return (
        <div style={{ padding: '25px' }}>
            <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
                <Typography variant="h4" fontWeight="bold">DATA GRID EDITING</Typography>
                <Typography variant="body2" color="text.secondary">
                    Below we can perform full-featured CRUD (Create, Read, Update, Delete)
                </Typography>
            </Box>
            <Box
                sx={(theme) => ({
                    height: 500,
                    width: '100%',
                    '& .MuiDataGrid-cell--editable': {
                        bgcolor: 'rgb(217 243 190)',
                        ...theme.applyStyles('dark', {
                            bgcolor: '#376331',
                            '& .actions': {
                                color: 'text.secondary',
                            },
                            '& .textPrimary': {
                                color: 'text.primary',
                            },
                        }),
                    },
                })}

            >

                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    slots={{ toolbar: EditToolbar }}
                    slotProps={{
                        toolbar: { setRows, setRowModesModel },
                    }}
                    showToolbar
                    isCellEditable={(params) => params.row.age % 2 === 0}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 5, page: 0 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}


                />
            </Box>


            <div style={{ height: 500, width: '100%', marginTop: '80px',marginBottom: '180px' }}>

                <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
                    <Typography variant="h4" fontWeight="bold">DATA GRID SORTING</Typography>
                    <Typography variant="body2" color="text.secondary">
                        The Data Grid can only sort the rows according to one criterion at a time.
                    </Typography>
                </Box>
                <DataGrid
                    {...data}
                    loading={loading}
                    initialState={{
                        ...data.initialState,
                        sorting: {
                            ...data.initialState?.sorting,
                            sortModel: [
                                {
                                    field: 'rating',
                                    sort: 'desc',
                                },
                            ],
                        },
                        pagination:
                        {paginationModal: {pageSize : 25},
                    },
                    }}
                  
                   pageSizeOptions={[25,50,75,100]}
                   
                />
            </div>

             <div style={{ height: 500, width: '100%',marginBottom: '180px'}}>

                <Box sx={{ p: 2, bgcolor: '#f5f5f5', mb: 2, borderRadius: 1 }}>
                    <Typography variant="h4" fontWeight="bold">DATA GRID FILTERING</Typography>
                    <Typography variant="body2" color="text.secondary">
                       Easily filter your rows based on one or several criteria.
                    </Typography>
                </Box>
               
      <DataGrid
        {...data}
        loading={loading}
        showToolbar
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
        ignoreDiacritics 
         
        
      />

                   
                
            </div>
        </div>
    );
}
