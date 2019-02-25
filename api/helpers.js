/**
 * @module helpers
 */
module.exports = {
    /**
     * @description Returns a random numbers between zero and <max>
     * @param {number} max
     * @returns {number} Random numbers
     */
    getRandom: (max)  => {},

    /**
     * @description Returns a random permutation of numbers between zero and <max>
     * @param {number} max
     * @returns {number[]} A random permutation of numbers between zero and <max>
     */
    getRandPerm: (max)  => {},

    // TODO: Provide examples how this can be used
    // /**
    //  * @description Creates a new BytesWriter
    //  * @since 1.0.0
    //  * @returns {BytesWriter}
    //  */
    // newBytes: ()  => {},

    /**
     * @description Returns a BytesWriter for a given string
     * @since 1.0.0
     * @param {string} value String
     * @returns {BytesWriter}
     */
    bytesFromString: (value)  => {},

    /**
     * @description Returns a BytesWriter for a given hex-string
     * @since 1.0.0
     * @param {string} value Hex-string
     * @returns {BytesWriter}
     */
    bytesFromHex: (value)  => {},

    /**
     * @description Returns a BytesWriter for a given base64-string
     * @since 1.0.0
     * @param {string} value Base64-string
     * @returns {BytesWriter}
     */
    bytesFromBase64: (value)  => {},

    /**
     * @description Encodes a string to base64
     * @param {string} input
     * @returns {string}
     */
    base64Encode: (input)  => {},

    /**
     * @description Decodes a string from base64
     * @param {string} input
     * @returns {string}
     */
    base64Decode: (input)  => {},

    /**
     * @description Encodes a string to hex
     * @param {string} input
     * @returns {string}
     */
    hexEncode: (input)  => {},

    /**
     * @description Decodes a string from hex
     * @param {string} input
     * @returns {string}
     */
    hexDecode: (input)  => {},

    /**
     * @description Generate a hex-encoded MD5 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    MD5Sum: (input)  => {},

    /**
     * @description Generate a hex-encoded SHA1 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    SHA1Sum: (input)  => {},

    /**
     * @description Generate a hex-encoded SHA256 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    SHA256Sum: (input)  => {},

    /**
     * @description Gets the string representation of an object
     * @deprecated This function should not be used anymore, if possible.
     * @param input
     * @returns {string}
     */
    toString: (input)  => {},

    
    // Semi-undocumented stuff:
    // /**
    //  * @description Returns the documentation of a function
    //  * @deprecated Probably doesn't work anymore
    //  * @returns {string} JSDoc String
    //  */
    // document: ()  => {},

    // /**
    //  * @description Returns the internal type of an object
    //  * @deprecated Shouldn't be used
    //  * @param input
    //  * @returns {string} Internal type
    //  */
    // typeOf: (input)  => {},
}