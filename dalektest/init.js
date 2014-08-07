module.exports = {
'Page title is correct': function (test) {
  test
    .open('http://192.168.1.137:3000/#login')
    .done();
}
};