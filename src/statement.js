function Statement(account) {
  this.account = account;
};

Statement.prototype = {
  formatDate(date) {
    var date = new Date(date);
    var day = (date.getDate()).toString();
    var month = (date.getMonth()).toString();
    var year = (date.getFullYear()).toString();
    return day + "/" + month + "/" + year;
  },


};
