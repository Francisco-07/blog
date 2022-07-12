import sanityClient from '@sanity/client'

const options = {
  dataset: 'production',
  projectId: '0khg7a4j',
  useCdn: process.env.NODE_ENV === 'production',
  ignoreBrowserTokenWarning: true,
  apiVersion: '2021-08-31',
  // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data
}

export default sanityClient(options)
