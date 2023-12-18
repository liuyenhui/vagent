
module.exports = {
  packagerConfig: {
    asar: false,
    dereference: true,
    extraResource: ['./extraResources/tmp.json','./extraResources/assistants']
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './src/assets/dmg-background.png',
        format: 'ULFO'
      }
    },
  ],
  
  plugins: [
    // {
    //   name: '@electron-forge/plugin-auto-unpack-natives',
    //   config: {},
    // },
  ],
  publishers: [
    {
      
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'liuyenhui',
          name: 'vagent'
        },
        release:true,
        prerelease: false,
        draft: true
      }
      
    }
  ]
};
