import React from 'react'

export default function Results(props){
    return(
        <div dangerouslySetInnerHTML={{__html:props.output}}></div>
    )
}
