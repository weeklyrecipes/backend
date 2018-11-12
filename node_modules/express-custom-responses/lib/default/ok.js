
function ok(data) {
    this.status(200);
    this.json(data || {});
    console.log('default ok');
}

module.exports = ok;