'use strict';

var expect = require('expect.js');

var loader = require('../util/load_po_files');

var autoTestUtils = require('./auto_test_utils');

var INPUT_PATH = __dirname + '/../../test/input/';
describe('#load_po_files', function () {
  describe('#autoLoadPOFiles', function () {
    describe('#async', function () {
      it('#file', function () {
        return loader.autoLoadPOFiles(INPUT_PATH + 'pofiles/en-US.po').then(function (json) {
          var otherJson = autoTestUtils.requireAfterWrite('autoLoadPOFiles_en-US.json', json);
          expect(json).to.eql(otherJson);
        });
      });
      it('#dir', function () {
        return loader.autoLoadPOFiles(INPUT_PATH + 'pofiles').then(function (json) {
          var otherJson = autoTestUtils.requireAfterWrite('autoLoadPOFiles_all.json', json);
          expect(json).to.eql(otherJson);
        });
      });
    });
    describe('#sync', function () {
      it('#file', function () {
        var json = loader.autoLoadPOFilesSync(INPUT_PATH + 'pofiles/en-US.po');
        var otherJson = autoTestUtils.requireAfterWrite('autoLoadPOFiles_en-US.json', json);
        expect(json).to.eql(otherJson);
      });
      it('#dir', function () {
        var json = loader.autoLoadPOFilesSync(INPUT_PATH + 'pofiles');
        var otherJson = autoTestUtils.requireAfterWrite('autoLoadPOFiles_all.json', json);
        expect(json).to.eql(otherJson);
      });
    });
  });
});
//# sourceMappingURL=test_load_po_files.js.map