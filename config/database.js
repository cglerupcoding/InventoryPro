// This is an example database config file. Replace these presets with your database info and add this file to your .gitignore.
module.exports = {
  'connection': {
    'host': 'localhost',
    'user': 'root',
    'password': 'P@ssword'
  },
  'database': 'project'
};

module.exports = {
  'production': {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
