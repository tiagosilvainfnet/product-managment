import { DataGrid } from '@mui/x-data-grid';

const DefaultDatagrid = (props) => {
    return  <DataGrid
              {...props}
              rows={props.rows}
              columns={props.columns}
              initialState={{
              pagination: {
                  paginationModel: {
                  pageSize: 5,
                  },
              },
              }}
              pageSizeOptions={[5]}
            />
}   

export default DefaultDatagrid;