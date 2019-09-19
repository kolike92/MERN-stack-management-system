import React from "react";
import ReactNextPaging from "react-next-paging";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "1em",
  padding: 10,
  margin: 5,
  width: 70
};

const PaginacionTabla = ({ itemsperpage, nocolumns, items, pagesspan ,func, onSort,sortedList}) => {
  //console.log("PAGENATION",console.log(this.props)  )
  //console.log(this.props)
  //this.props.history.push('/');)

  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
      func={func}
      onSort={onSort}
      sortedList={sortedList}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled
      }
      ) => (
          <div>
        <table>
        <thead>
          <th >Edit</th>
          <th>Delete</th>
          <th onClick={e => onSort('fname')} >First Name</th>
          <th onClick={e => onSort('lname')}>Last Name</th>
          <th onClick={e => onSort('sex')}>Sex </th>
          <th onClick={e => onSort('age')}>Age </th>
          </thead>
          <tbody>
          {
            items.slice(initialitem, lastitem).map((user, index) => {
              return (
                <tr key={user._id} >
                 <td><Link to={{
                   pathname:`/eUser/${user._id}`,
                   
                   state:{
                     fname:user.fname,
                     lname:user.lname,
                     sex:user.sex,
                     age:user.age
                   }
                   }}> <button className="fa fa-bars" type="button"> Edit</button></Link></td>
                        <td><button className="fa fa-trash" type="button" onClick={()=>func(user._id)}> Delete</button></td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.sex}</td>
                  <td>{user.age}</td>
                </tr>
              );
          })}  
        </tbody>
      </table>   
      <hr></hr>
      <div>
        {noitems > 0
            ? [
                <tr key={"pagingrow" + 100}>
                  <td colSpan={nocolumns} style={{ textAlign: "center" }}>
                    <button
                      style={buttonStyles}
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      {"<<"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      {"<"}
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray
                    ).map(page => {
                      return (
                        <button
                          key={page}
                          {...getSelPageButtonProps({ page: page })}
                          disabled={currentpage == page}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      style={buttonStyles}
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                    >
                      {">"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      {">>"}
                    </button>
                  </td>
                </tr>
              ]
            : null}
    </div>
    </div>
      )
      }
    </ReactNextPaging>
  );
};

export default PaginacionTabla;