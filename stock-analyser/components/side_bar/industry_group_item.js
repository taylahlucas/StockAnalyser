import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Button from '@material-ui/core/Button'
// import List from '@material-ui/core/List'
// import ListItemText from '@material-ui/core/ListItemText'
import { List, ListItemText, ListItem, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
// import ExpandMore from '@mui/icons-material/ExpandMore'

import Aux from '../../utils/aux'
import baseButtonTheme from '../../styles/mui_themes'
import AsxIndustryGroups from '../../data/asx_industry_groups'

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
    // const [industrySections, setIndustrySections] = useState(Object.entries(AsxIndustryGroups))
    
    return(
        <Aux>
            <ThemeProvider theme={baseButtonTheme}>
                <CssBaseline />
                <Button onClick={() => setOpenMenu(!isOpen)}>{props.title}</Button>
            </ThemeProvider>
            <List>
                {props.items.map((sector) => {
                    {Object.values(sector).map((item) => {
                        console.log("ITEM: " + isOpen)
                        return <ListItem button>
                            <ListItemText primary={item} />
                            {isOpen ? <ExpandMore /> : <ExpandLess />}
                            <Collapse in={isOpen} timeout='auto' unmountOnExit>
                                <List component='div' disablePadding>
                                    <ListItem button sx={{ pl: 4 }}>
                                        <ListItemText primary='Company Name' />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </ListItem>
                    })}
                })}
            </List>
        </Aux>
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