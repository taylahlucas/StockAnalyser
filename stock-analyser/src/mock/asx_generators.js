function generateAsxCodes(listSize) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var asxCodes = []

    // Generates list of asxCodes of size listSize
    for (let i = 0; i <= listSize - 1; i++) {
        var tempCode = ''
        while(tempCode.length < 3) {
            // Adds a random letter from alphabet to tempCode
            tempCode += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        }

        // TODO: Clear out all duplicate values
        asxCodes.push(tempCode)
    }
    console.log(asxCodes)

}

export default generateAsxCodes