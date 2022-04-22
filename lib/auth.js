module.exports = {
    isLogind: function (req, res) {
        if (!req.session.is_logined) {
            res.redirect('/login');
        }
    },
    isAdmin: function (req, res) {
        if (!req.session.Admin) {
            res.redirect('/files');
        }
    }
}