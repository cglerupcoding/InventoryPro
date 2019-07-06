// module.exports = {
//   'connection': {
//     'host': 'localhost',
//     'user': 'root',
//     'password': 'P@ssword'
//   },
//   'database': 'project'
// };

module.exports = {
  'production': {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
