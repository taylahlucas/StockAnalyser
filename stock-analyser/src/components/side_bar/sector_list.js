import React, {  useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import CompanyDropDown from './company_dropdown'
import List from '@mui/material/List'
import MockDataGenerator from '../../data/mock/mock_data_generator'

const dataGenerator = new MockDataGenerator(100)

const propTypes = {
    items: PropTypes.array
}

// List of companies in sector
function SectorList(props) {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        setCompanies(dataGenerator.generateCompanies())
    }, [])

    const filterCompanies = (sector) => {
        return companies.filter((company) => {
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