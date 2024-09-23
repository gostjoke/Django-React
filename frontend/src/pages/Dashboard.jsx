import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbarContainer, GridToolbarExport  } from '@mui/x-data-grid';
import { BarChart} from '@mui/x-charts/BarChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'pet',
    headerName: 'Pet',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, pet:"dog" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, pet:"dragon" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, pet:"cat" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, pet:"mouse" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, pet:"dog" },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, pet:"cow" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, pet:"dragon" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, pet:"lulu" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, pet:"dog" },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65, pet:"dog" },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65, pet:"dog" },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65, pet:"dog" },
];


const data = [
  {
    id: 'data-0',
    x1: 329.39,
    x2: 391.29,
    y1: 443.28,
    y2: 153.9,
  },
  {
    id: 'data-1',
    x1: 96.94,
    x2: 139.6,
    y1: 110.5,
    y2: 217.8,
  },
  {
    id: 'data-2',
    x1: 336.35,
    x2: 282.34,
    y1: 175.23,
    y2: 286.32,
  },
  {
    id: 'data-3',
    x1: 159.44,
    x2: 384.85,
    y1: 195.97,
    y2: 325.12,
  },
  {
    id: 'data-4',
    x1: 188.86,
    x2: 182.27,
    y1: 351.77,
    y2: 144.58,
  },
  {
    id: 'data-5',
    x1: 143.86,
    x2: 360.22,
    y1: 43.253,
    y2: 146.51,
  },
  {
    id: 'data-6',
    x1: 202.02,
    x2: 209.5,
    y1: 376.34,
    y2: 309.69,
  },
  {
    id: 'data-7',
    x1: 384.41,
    x2: 258.93,
    y1: 31.514,
    y2: 236.38,
  },
  {
    id: 'data-8',
    x1: 256.76,
    x2: 70.571,
    y1: 231.31,
    y2: 440.72,
  },
  {
    id: 'data-9',
    x1: 143.79,
    x2: 419.02,
    y1: 108.04,
    y2: 20.29,
  },
  {
    id: 'data-10',
    x1: 103.48,
    x2: 15.886,
    y1: 321.77,
    y2: 484.17,
  },
  {
    id: 'data-11',
    x1: 272.39,
    x2: 189.03,
    y1: 120.18,
    y2: 54.962,
  },
  {
    id: 'data-12',
    x1: 23.57,
    x2: 456.4,
    y1: 366.2,
    y2: 418.5,
  },
  {
    id: 'data-13',
    x1: 219.73,
    x2: 235.96,
    y1: 451.45,
    y2: 181.32,
  },
  {
    id: 'data-14',
    x1: 54.99,
    x2: 434.5,
    y1: 294.8,
    y2: 440.9,
  },
  {
    id: 'data-15',
    x1: 134.13,
    x2: 383.8,
    y1: 121.83,
    y2: 273.52,
  },
  {
    id: 'data-16',
    x1: 12.7,
    x2: 270.8,
    y1: 287.7,
    y2: 346.7,
  },
  {
    id: 'data-17',
    x1: 176.51,
    x2: 119.17,
    y1: 134.06,
    y2: 74.528,
  },
  {
    id: 'data-18',
    x1: 65.05,
    x2: 78.93,
    y1: 104.5,
    y2: 150.9,
  },
  {
    id: 'data-19',
    x1: 162.25,
    x2: 63.707,
    y1: 413.07,
    y2: 26.483,
  },
  {
    id: 'data-20',
    x1: 68.88,
    x2: 150.8,
    y1: 74.68,
    y2: 333.2,
  },
  {
    id: 'data-21',
    x1: 95.29,
    x2: 329.1,
    y1: 360.6,
    y2: 422.0,
  },
  {
    id: 'data-22',
    x1: 390.62,
    x2: 10.01,
    y1: 330.72,
    y2: 488.06,
  },
];  


function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

export default function DataGridDemo() {
  return (
    <div>
        <Box sx={{ height: "700px", width: '85%' }}>
          <h1>Data Display</h1>
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        <ScatterChart
          width={600}
          height={300}
          series={[
            {
              label: 'Series A',
              data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
            },
            {
              label: 'Series B',
              data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
            },
          ]}
        />
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{
            toolbar: CustomToolbar,
          }}
          sx={{
            '& .MuiDataGrid-cell': {
              border: '1px solid #888', // 設置每個格子的右邊框
            },
            '& .MuiDataGrid-columnHeader': {
              borderRight: '1px solid #888', // 設置每個列標題的右邊框
              backgroundColor: '#f5f5f5', // 調整標題背景色
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: '1px solid #333', // 設置整個標題行的底部邊框
              border: '1px solid #333',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#fafafa', // 滑鼠懸停時的背景色
            },
            '& .MuiDataGrid-iconButtonContainer .MuiSvgIcon-root': {
              color: 'red', // 你想要的圖示顏色
            },
          }}
        />
        
        </Box>
    </div>
  );
}
// export default Dashboard