import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField'

const styles = {
  customWidth: {
   width: 150,
 },
};
export default class UserProfiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }
handleChange = (event, index, value) => this.setState({value});
render() {
  return (
      <div>
      <h3>Admin Profili</h3>
        <br/>
        <div>

          <Table>
            <TableHeader>
             <TableRow>
               <TableHeaderColumn>Ad Soyad</TableHeaderColumn>
               <TableHeaderColumn>İşlemler</TableHeaderColumn>
             </TableRow>
            </TableHeader>

            <TableBody>
             <TableRow>
               <TableRowColumn>Ayşe Ak</TableRowColumn>
               <TableRowColumn><div style={styles.button}>
                 <RaisedButton label="Sil" secondary={true}/>
                 <RaisedButton label="Düzenle" primary={true}/>
               </div></TableRowColumn>
             </TableRow>

             <TableRow>
               <TableRowColumn>Ali Yılmaz</TableRowColumn>
               <TableRowColumn><div style={styles.button}>
                 <RaisedButton label="Sil" secondary={true}/>
                 <RaisedButton label="Düzenle" primary={true}/>
               </div></TableRowColumn>

             </TableRow>
             <TableRow>
               <TableRowColumn>Zehra Kıgız</TableRowColumn>
               <TableRowColumn><div style={styles.button}>
                 <RaisedButton label="Sil" secondary={true}/>
                 <RaisedButton label="Düzenle" primary={true}/>
               </div></TableRowColumn>
             </TableRow>
            </TableBody>
            </Table>
          </div>

          <br/>
            <div>
              <TextField
                hintText="Admin Ara"/>
                <br />
            </div>
      </div>
  );
}}
