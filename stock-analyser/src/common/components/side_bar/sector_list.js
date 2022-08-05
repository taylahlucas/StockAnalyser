import React, {  useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import mockCompanies from '../../../mock/asx_mock_company_data'
import CompanyDropDown from './company_dropdown'
import ThemedListItem from '../buttons/themed_list_item'
import { List } from '@material-ui/core'
import SectorDropDown from './sector_dropdown'

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
        <List>
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