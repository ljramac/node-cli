import chai from 'chai'
import sinon from 'sinon'

const expect = chai.expect

const math = {
  add: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      throw new Error('Arguments must be numbers')
    }

    return a + b
  }
}

describe('Math module', function () {
  describe('add function', function () {
    it('should return the sum of two numbers', function () {
      expect(math.add(2, 3)).to.equal(5)
    })

    it('should throw an error if first argument is not a number', function () {
      expect(() => math.add('a', 3)).to.throw()
    })

    it('should call add once', function () {
      const spy = sinon.spy(math, 'add')
      math.add(1, 2)
      expect(spy.calledOnce).to.be.true
      spy.restore()
    })
  })
})
