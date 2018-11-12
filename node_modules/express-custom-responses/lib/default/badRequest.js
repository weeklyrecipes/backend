
function badRequest(data) {
    this.status(400);
    this.send(data || {});
}

module.exports = badRequest;