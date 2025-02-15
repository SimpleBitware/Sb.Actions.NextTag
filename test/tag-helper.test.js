import { strict as assert } from 'assert';
import generateNextTag from '../src/tag-helper.js';

const undefinedTags = [
        [''],
        [null],
    ];
const invalidTags = [
        ['shAO'],
        ['1.2'],
        ['a.b.c'],
    ];
const validTagsWithoutV = [
        ['1.2.3', '1.2.4'],
        ['1.2.3.4', '1.2.4'],
        ['1.2.3.4-2ae67', '1.2.4'],
        ['v1.2.3', '1.2.4'],
        ['v1.2.3.4', '1.2.4'],
        ['v1.2.3-2ae67', '1.2.4'],
    ];
const validTagsWithV = [
        ['1.2.3', '1.2.4'],
        ['1.2.3.4', '1.2.4'],
        ['1.2.3.4-2ae67', '1.2.4'],
        ['v1.2.3', 'v1.2.4'],
        ['v1.2.3.4', 'v1.2.4'],
        ['v1.2.3-2ae67', 'v1.2.4'],
    ];

describe("generateNextTag", () => {
    undefinedTags.forEach(([current_tag]) => {
        it('should throw if current_tag is ${current_tag}', () => {
            assert.throws(() => generateNextTag(current_tag, false), Error, 'current_tag is not defined');
        });
    });

    invalidTags.forEach(([current_tag]) => {
        it('should throw if current_tag is ${current_tag}, not semantic versioning formatted', () => {
            assert.throws(() => generateNextTag(current_tag, false), Error, 'The provided current_tag format is not valid');
        });
    });

    validTagsWithoutV.forEach(([current_tag, expected_next_tag]) => {
        it(`should return ${expected_next_tag} when preserve_v is false and current_tag is ${current_tag}`, () => {
            assert.equal(generateNextTag(current_tag, false), expected_next_tag);
        });
    });

    validTagsWithV.forEach(([current_tag, expected_next_tag]) => {
        it(`should return ${expected_next_tag} when preserve_v is true and current_tag is ${current_tag}`, () => {
            assert.equal(generateNextTag(current_tag, true), expected_next_tag);
        });
    });
});
