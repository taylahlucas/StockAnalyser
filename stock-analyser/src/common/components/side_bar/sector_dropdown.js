import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from '@material-ui/core'

import ThemedButton from '../buttons/themed_button'
import SectorList from './sector_list'

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

const SectorDropDown = React.forwardRef((props, ref) => {
    const [isOpen, setOpenMenu] = useState(false)

    const targetOptions = (Array.isArray(props.options) ?
        props.options :
        (props.options || '').split('\n')
    )
    return (
        <div ref={ref} className={props.className}>
            <ThemedButton 
                key={props.id}
                id={props.id}
                title={props.title} 
                variant={props.variant}
                onClick={() => setOpenMenu(!isOpen)}
            />
            <Collapse in={isOpen}>
                <SectorList items={targetOptions}/>
            </Collapse>
        </div>
        
    )
})

SectorDropDown.propTypes = propTypes
SectorDropDown.defaultProps = defaultProps

export default SectorDropDown