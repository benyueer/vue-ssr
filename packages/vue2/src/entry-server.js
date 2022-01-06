import createApp from './main'

// eslint-disable-next-line no-unused-vars
export default context => {

  return new Promise((resolve, reject) => {
    const {app, router} = createApp()
    
    router.push(context.url)

    router.onReady(() => {
      const matchedComponets = router.getMatchedComponents()
      if (!matchedComponets.length) {
        return reject({code: 404})
      }

      resolve(app)
    }, reject)
  })
}