import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import mockCompanies from '../../data/asx_mock_company_data'
import { List } from '@material-ui/core'

const propTypes = {
    item: PropTypes.object,
    isOpen: PropTypes.bool
}

const defaultProps = {
    item: undefined,
    isOpen: false
}

const CompanyList = (props) => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        const filteredCompanies = mockCompanies.filter((item) => {
            if (item.sector == props.item) {
                return item
            }
        })
        setCompanies(filteredCompanies)
    }, [])

    return(
        <List>
            {Object.values(companies).map((item) => {
                // Add selectable button (customized TextField)
                return <div>{item.companyName}</div>
            })}
        </List>
    )
}

CompanyList.propTypes = propTypes
CompanyList.defaultProps = defaultProps

export default CompanyList