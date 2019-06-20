const linkBuilder = require('../linkBuilder');

/**
 * Check if linkBuilder works correctly
 */
test('linkBuilder: Check if link build works' , () => {
    expect(linkBuilder.linkBuilder('www.test.com'))
        .toBe('https://rewriteprefix.com/login?qurl=www.test.com');
});