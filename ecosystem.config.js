module.exports = {
    apps: [
      {
        name: "ahikurumsal-frontend",
        cwd: "/var/www/ahikurumsal/frontend",
        script: "node_modules/next/dist/bin/next",
        args: "start",
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: "512M",
        env: {
          NODE_ENV: "production",
          PORT: 3003
        }
      }
    ]
  };