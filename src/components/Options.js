import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <ol>
            {
                props.options.map((opt) => (
                    <Option
                        key={opt}
                        option={opt}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </ol>
    </div>
)

export default Options