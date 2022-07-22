import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import mockCompanies from '../../data/asx_mock_company_data'
import { List } from '@material-ui/core'

const CompanyList = () => {
    const [companies, setCompanies] = useState([])

    // useEffect(() => {
    //     const filteredCompanies = mockCompanies.filter((item) => {
    //         if (item.sector == props.item) {
    //             return item
    //         }
    //     })
    //     setCompanies(filteredCompanies)
    // }, [])

    return(
        <List>
            {/* List of companies in sector */}
            {Object.values(companies).map((item) => {
                // Add selectable button (customized TextField)
                return <div key={item}>{item.companyName}</div>
            })}
        </List>
    )
}

// CompanyList.propTypes = propTypes
// CompanyList.defaultProps = defaultProps

export default CompanyList