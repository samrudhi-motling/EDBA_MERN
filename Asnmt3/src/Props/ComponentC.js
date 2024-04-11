import React from "react";
function ComponentC(props){
    // console.log("props: ", props)
    return <div>
        <h4>In ComponentC</h4>
        <p>{JSON.stringify(props.details)}</p>
    </div>
}

export default ComponentC