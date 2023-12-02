module.exports = {
  apps: [
    {
      name: 'company-profile-4',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        "NUXT_APP_BASE_URL": "/icoen",
        "PORT": 3001
      }
    }
  ]
}