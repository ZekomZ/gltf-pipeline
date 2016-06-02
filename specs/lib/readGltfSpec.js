'use strict';
var readGltf = require('../../lib/readGltf');

var gltfPath = './specs/data/boxTexturedUnoptimized/CesiumTexturedBoxTest.gltf';
var glbPath = './specs/data/boxTexturedUnoptimized/CesiumTexturedBoxTest.glb';
var invalidPath = './specs/data/boxTexturedUnoptimized/README.md';

describe('readGltf', function() {
    it('parses a .gltf input path, checks that a gltf JSON is defined', function(done) {
        readGltf(gltfPath, function(gltf) {
            expect(gltf).toBeDefined();
            done();
        });
    });

    it('parses a .glb input path, checks that a gltf JSON is defined', function(done) {
        readGltf(glbPath, function(gltf) {
            expect(gltf).toBeDefined();
            done();
        });
    });

    it('throws error when an input path is undefined', function(done) {
        expect(function() {
            try {
                readGltf(undefined, function() {
                    done();
                });
            }
            catch (err) {
                expect(err).toBeDefined();
                expect(err.message).toEqual('Input path is undefined.');
                throw err;
            }
        }).toThrow();
        done();
    });

    it('throws error when file extension of input file is invalid', function(done) {
        expect(function() {
            try {
                readGltf(invalidPath, function() {
                    done();
                });
            }
            catch (err) {
                expect(err).toBeDefined();
                expect(err.message).toEqual('Invalid glTF file.');
                throw err;
            }
        }).toThrow();
        done();
    });
});