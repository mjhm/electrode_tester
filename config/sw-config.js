module.exports = {
  cache: {
    cacheId: 'electrode_tester',
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    title: 'electrode_tester',
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
