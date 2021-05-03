import React from 'react'

const Repositories=(props)=> {
    const { userRepositories } = props;
    const posts = userRepositories && userRepositories.map((val, index)=>{
        return (
<div className="card">
  <div className="card-body">
     <div key={index}>
  <a href={val.html_url} ><b> {val.name} </b></a> :{val.description}
     </div>
  </div>
            </div>
          );
    })
    return posts
  
}

export default Repositories
