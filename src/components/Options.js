import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options:</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <div className="widget__message">Please add an option to get started!</div>}
        <div>
            {
                props.options.map((opt, index) => (
                    <Option
                        key={opt}
                        option={opt}
                        count={index + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    </div>
)

export default Options