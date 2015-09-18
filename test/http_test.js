/* global describe:true it:true */
import { expect } from 'chai'
import exec from '../src'

describe('Exec', () => {
  it('execute simple delete request', () => {
    exec('http://localhost:3000/', 'DELETE', [])
      .then(data => {
        expect(data.status).to.equal(200)
      }, reason => {
        throw reason
      })
  })

  it('execute get request with query params', () => {
    return exec('http://localhost:3000/query?ping=pong', 'GET', [])
    .then(data => {
      expect(data.status).to.equal(200)
      expect(data.response).to.equal('{"ping":"pong"}')
    }, reason => {
      throw reason
    })
  })

  it('execute simple post request', () => {
    const obj = {some: 'body'}

    return exec('http://localhost:3000', 'POST', [
      ['Content-Type', 'application/json;charset=UTF-8'],
      ['Accept', 'application/json']
    ], 'json', JSON.stringify(obj)).then(data => {
      expect(data.status).to.equal(200)
      expect(data.response).to.deep.equal(obj)
    }, reason => {
      throw reason
    })
  })
})
