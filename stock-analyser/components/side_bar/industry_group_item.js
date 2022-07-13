import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { List, ListItem } from '@material-ui/core'

import ThemedButton from '../buttons/themed_button'
import IndustrySectionsList from '../side_bar/industry_sections_list'

const propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const IndustryGroupItem = (props) => {
    const [isOpen, setOpenMenu] = useState(false)

    return(
        <List>
            <ListItem>
                <ThemedButton title={props.title} onClick={() => setOpenMenu(!isOpen)} />
            </ListItem>
            <ListItem>
                <IndustrySectionsList items={props.items} isOpen={isOpen} />
            </ListItem>
        </List>
    )
}

IndustryGroupItem.propTypes = propTypes
IndustryGroupItem.defaultProps = defaultProps

export default IndustryGroupItem

/* <div 
style={{ 
    padding: '10px',
    marginTop: '5px',
    backgroundColor: '#E2F5FF',
    borderRadius: '10px',
    marginLeft: '10px',
    marginRight: '10px'}}>
<div    
    style={{
        position: 'relative',
        marginLeft: '10px',
        color: '#707070'
    }}
    disabled={props.disabled}
    onClick={() => {
        setOpenMenu(!isOpen) 
        props.setActiveMenu(props.title)}}>
    {props.title}
</div>
</div>
{props.isOpen && isOpen
? 
<div 
    style={{ 
        maxHeight: '200px',
        overflow: 'scroll',
        backgroundColor: '#EFEFEF',
        borderRadius: '10px',
        marginLeft: '15px',
        marginRight: '10px'}}>
    {props.items 
    ?
        props.items.map((item, index) => {
            return (
                <div 
                    key={index}
                    style={{ 
                        padding: '10px',
                        marginLeft: '20px'
                    }}>
                    <ToggleButton onSelect={(selected) => selected ? props.onRemoveCompany(item) : props.onAddCompany(item)} />
                    <div style={{
                            position: 'relative',
                            marginLeft: '30px',
                            marginTop: '-15px',
                            color: '#707070',
                            fontSize: '12px'
                        }}>{item.label}</div>
                </div>
            )
        })
    :
        null
    }
</div>
: 
null
} */