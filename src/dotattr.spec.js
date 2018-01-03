var dot = require('./dotattr')

describe('dotGet', function () {
  it('recursively access attributes', function () {
    var src = {}
    src.foo = 'bar'
    src.form = {
      user: {
        email: 'bruce@xap.me',
        password: 'dragon'
      }
    }

    expect(dot.get(src, 'form.user.email')).to.equal('bruce@xap.me')
    expect(dot.get(src, 'form.user.password')).to.equal('dragon')
    expect(dot.get(src, 'foo')).to.equal('bar')
    expect(dot.get(src, 'nothing')).not.to.be.ok
    expect(dot.get(src, 'form.x.y.z')).not.to.be.ok
  })
})

describe('dotSet', function () {
  it('recursively set attributes', function () {
    var target = {}

    dot.set(target, 'form.user.email', 'bruce@xap.me')
    expect(Object.keys(target)).to.deep.equal(['form'])
    expect(target.form.user).to.deep.equal({
      email: 'bruce@xap.me'
    })

    dot.set(target, 'form.user.email', 'lee@xap.me')
    expect(target.form.user).to.deep.equal({
      email: 'lee@xap.me'
    })

    dot.set(target, 'form.score.home', 2)
    expect(Object.keys(target.form)).to.deep.equal(['user', 'score'])
  })
})
