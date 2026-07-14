import * as cliPkg from 'sanity/cli'

const getCliClient = (cliPkg as any).getCliClient || (cliPkg as any).default?.getCliClient
const client = getCliClient({ apiVersion: '2026-07-14' })

async function cleanup() {
  console.log('🧹 Cleaning up old unused fields from Sanity database...')
  await client
    .patch('homepageContent')
    .unset(['experiencesMetaTitle', 'experiencesMetaDescription'])
    .commit()
  console.log('✅ Unused fields experiencesMetaTitle and experiencesMetaDescription removed!')
}

cleanup().catch(err => {
  console.error('❌ Error during cleanup:', err)
  process.exit(1)
})
