import React, {  useState } from 'react'
import PropTypes from 'prop-types'

import mockCompanies from '../../mock/asx_mock_company_data'
import CompanyDropDown from './company_dropdown'
import List from '@mui/material/List'

const propTypes = {
    items: PropTypes.array
}

// List of companies in sector
function SectorList(props) {
    const [filteredCompanies, setFilteredCompanies] = useState([])

    const filterCompanies = (sector) => {
        return mockCompanies.filter((company) => {
            return company.sector == sector.name
        })
    }

    return(
        <List style={{ marginTop: -7 }}>
            {props.items.map((item) => {
                return <CompanyDropDown
                    key={item.value}
                    title={item.name}
                    options={filterCompanies(item)}
                />
            })}
        </List>
    )
}

SectorList.propTypes = propTypes

export default SectorList