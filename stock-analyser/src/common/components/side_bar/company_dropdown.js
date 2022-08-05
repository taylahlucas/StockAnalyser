import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from '@material-ui/core'

import ThemedButton from '../buttons/themed_button'
import ThemedListItem from '../buttons/themed_list_item'
import CompanyList from './company_list'

const propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.shape({
                    value: PropTypes.string,
                    name: PropTypes.string
                })
            ])
        ),
        PropTypes.string,
        PropTypes.shape({
            value: PropTypes.string,
            name: PropTypes.string
        })
    ])
}

const defaultProps = {
    id: '',
    className: '',
    title: '',
    options: []
}

const CompanyDropDown = React.forwardRef((props, ref) => {
    const [isOpen, setOpenMenu] = useState(false)

    const targetOptions = (Array.isArray(props.options) ?
        props.options :
        (props.options || '').split('\n')
    )
    
    return (
        <div ref={ref} className={props.className}>
            <ThemedListItem 
                id={props.id}
                key={props.id}
                title={props.title}
                onClick={() => setOpenMenu(!isOpen)} />
            <Collapse in={isOpen}>
                <CompanyList items={targetOptions} />
            </Collapse> 
            
        </div>
        
    )
})

CompanyDropDown.propTypes = propTypes
CompanyDropDown.defaultProps = defaultProps

export default CompanyDropDown