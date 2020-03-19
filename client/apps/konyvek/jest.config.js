module.exports = {
  name: 'konyvek',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/konyvek',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
