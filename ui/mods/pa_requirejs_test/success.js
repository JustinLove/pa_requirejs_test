console.log('load success')
define([], function() {
  console.log('execute success')
  return function() {
    console.log('run success')
  }
})
