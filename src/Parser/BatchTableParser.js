import utf8Decoder from '../utils/Utf8Decoder';

export default {
    /** @module BatchTableParser */
    /** Parse batch table buffer and convert to JSON
     * @function parse
     * @param {ArrayBuffer} buffer - the batch table buffer.
     * @return {Promise} - a promise that resolves with a JSON object.
     *
     */
    parse(buffer) {
        const content = utf8Decoder.decode(new Uint8Array(buffer));
        const json = JSON.parse(content);

        if (json.year_of_construction && json.year_of_demolition) {
            for (var i = 0; i < json.year_of_construction.length; i++) {
                if (json.year_of_construction[i] == '') {
                    json.year_of_construction[i] = null;
                }
                else {
                    const start_year = parseInt(json.year_of_construction[i].substring(0, 4), 10);
                    const start_month = parseInt(json.year_of_construction[i].substring(5, 7), 10) - 1; // Month starts at 0 in Date
                    const start_day = parseInt(json.year_of_construction[i].substring(8, 10), 10);
                    json.year_of_construction[i] = new Date(start_year, start_month, start_day);
                }
                if (json.year_of_demolition[i] == '') {
                    json.year_of_demolition[i] = null;
                }
                else {
                    const end_year = parseInt(json.year_of_demolition[i].substring(0, 4), 10);
                    const end_month = parseInt(json.year_of_demolition[i].substring(5, 7), 10) - 1; // Month ends at 0 in Date
                    const end_day = parseInt(json.year_of_demolition[i].substring(8, 10), 10);
                    json.year_of_demolition[i] = new Date(end_year, end_month, end_day);
                }
            }
        }

        return Promise.resolve(json);
    },
};
