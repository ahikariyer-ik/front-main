module.exports = {
    apps: [
      {
        name: "ahikariyer-front",
        cwd: "/home/ahikariyer-front",
        script: "node_modules/next/dist/bin/next",
        args: "start",
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: "512M",
        env: {
          NODE_ENV: "production",
          PORT: 3001
        }
      }
    ]
  };