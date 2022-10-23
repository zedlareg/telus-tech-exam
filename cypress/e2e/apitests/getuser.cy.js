/// <reference types ="Cypress" />

describe('GET API user tests', ()=> {

  let accessToken = '3e548375ecb702c55696ed1bfd2e3e6de962226d9dd6516716a45f775db9f721'

  it('get users test', ()=> {
    cy.request({
      method : 'GET',
      url : 'https://gorest.co.in/public/v2/users',
      headers : {
        'authorization' : "Bearer " + accessToken
      }

    }).then((res)=>{
      expect(res.status).to.eq(200)
    })
  })

  it('get users by id test', ()=> {
    cy.request({
      method : 'GET',
      url : 'https://gorest.co.in/public/v2/users/2479',
      headers : {
        'authorization' : "Bearer " + accessToken
      }

    }).then((res)=>{
      expect(res.status).to.eq(200)
      expect(res.body.name).to.eq('Mrs. Adikavi Sethi')
    })
  })
})