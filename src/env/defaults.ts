// default config

const config: any = {
    port: process.env.PORT || 3000,
    env: 'development',
    database: {
        client: 'mongodb://heroku_sz1xtlxd:m1go0e6822ttstpvbec0rvt4ob@ds159673-a0.mlab.com:59673,ds159673-a1.mlab.com:59673/heroku_sz1xtlxd?replicaSet=rs-ds159673'
    }
};

// Set the current environment or default to 'development'
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
config.env = process.env.NODE_ENV;

export default config;
