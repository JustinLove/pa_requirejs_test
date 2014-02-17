require.config({
  baseUrl: "coui://ui/mods",
  paths: {
  }
})
console.log('load bootstrap')
require(['pa_requirejs_test/success'], function(success) {
  "use strict";

  console.log('run bootstrap')
  success()
})

require(['pa_requirejs_test/error'])
