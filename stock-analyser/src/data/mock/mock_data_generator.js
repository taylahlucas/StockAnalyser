import AsxCompany from '../models/asxCompany'
import { ParentSectors, SectorGroups } from '../enums/sectors'

class MockDataGenerator {
    constructor(count) {
        this.count = count
    }

    // Generate ASX codes
    generateCodes() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var codes = []
        while (codes.length < this.count) {
            var newCode = ''
            for(var i = 0; i < 3; i++) {
                newCode += alphabet.charAt(Math.random() * alphabet.length)
            }
            newCode += '.AX'
            codes.push(newCode)
            if (!codes.includes(newCode)) {
                codes.push(newCode)
            }
        }
        return codes
    }

    generateCompanies() {
        const codes = this.generateCodes()
        var companyNamesMap = []
        for (var code in codes) {
            const companyName = codes[code].replace('.AX', '') + " Company Pty.Ld"

            // Get parent sector
            const index = Math.floor(Math.random() * Object.keys(ParentSectors).length);
            const sector = Object.keys(ParentSectors)[index]

            // Get industry in parent sector
            const sectorIndex = Math.floor(Math.random() * SectorGroups[sector].length)
            const industry = SectorGroups[sector][sectorIndex]

            companyNamesMap.push(
                new AsxCompany(
                    code,
                    companyName,
                    ParentSectors[sector],
                    industry
                )
            )
        }
        return companyNamesMap
    }
}

export default MockDataGenerator