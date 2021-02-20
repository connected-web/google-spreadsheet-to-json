const { expect } = require('chai')
const gsjson = require('../../')

const spreadsheetId = '1G2_YLuQeKXCtpOWshqIBazzUeefuOMDZ5q10F2u9MHw'

describe('Film Spreadsheet to JSON using Private Auth Credentials', () => {
  it('should request data from a live spreadsheet, and convert to JSON', async () => {
    console.log('Work in progress:', spreadsheetId)
    const json = await gsjson({
      spreadsheetId
    })
    expect(json).to.deep.equal({
      something: 'something'
    })
  })
})
