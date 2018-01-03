dotattr
=======

Synopsis
--------

Deeply get/set attribute of object nested within objects   


Usage
-----

.. code-block:: javascript


  var dot = require('./dotattr')

  var src = {}
  src.form = {
    user: {
      email: 'bruce@xap.me'
    }
  }

  var email = dot.get(src, 'form.user.email')

  // password is undefined instead of raising KeyError
  var password = dot.get(src, 'form.user.password')


License
-------

MIT_

.. _MIT: LICENSE
