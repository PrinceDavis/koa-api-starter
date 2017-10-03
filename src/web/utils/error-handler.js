'use strict'
/*
  Catch Errors Handler

  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
*/

exports.catchErrors = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (e) {
      ctx.status = e.status || 500
      ctx.body = e.message
      // ctx.app.emit('error', err, ctx)
    }
  }
}
