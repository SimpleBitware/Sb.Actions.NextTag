const generateNextTag = require('../src/tag-helper');

const undefinedTags = [
    [''],
    [null],
  ];
undefinedTags.forEach(([current_tag]) => {
    test('should throw if current_tag is ${current_tag}', () => {
        expect(() => generateNextTag(current_tag, false)).toThrow('current_tag is not defined');
    })
});

const invalidTags = [
    ['shAO'],
    ['1.2'],
    ['a.b.c'],
  ];
invalidTags.forEach(([current_tag]) => {
    test('should throw if current_tag is ${current_tag}, not semantic versioning formatted', () => {
        expect(() => generateNextTag(current_tag, false)).toThrow('The provided current_tag format is not valid');
    })
});

const validTagsWithoutV = [
    ['1.2.3', '1.2.4'],
    ['1.2.3.4', '1.2.4'],
    ['v1.2.3', '1.2.4'],
    ['v1.2.3.4', '1.2.4'],
  ];
validTagsWithoutV.forEach(([current_tag, expected_next_tag]) => {
    test(`should return ${expected_next_tag} when preserve_v is false and current_tag is ${current_tag}`, () => {
        expect(generateNextTag(current_tag, false)).toBe(expected_next_tag);
    })
});

const validTagsWithV = [
    ['1.2.3', '1.2.4'],
    ['1.2.3.4', '1.2.4'],
    ['v1.2.3', 'v1.2.4'],
    ['v1.2.3.4', 'v1.2.4'],
  ];
validTagsWithV.forEach(([current_tag, expected_next_tag]) => {
    test(`should return ${expected_next_tag} when preserve_v is true and current_tag is ${current_tag}`, () => {
        expect(generateNextTag(current_tag, true)).toBe(expected_next_tag);
    })
});
