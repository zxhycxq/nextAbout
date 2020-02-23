async function test() {
  const Redis = require("ioredis");

  const redis = new Redis({
    post: 6378
    // host:'127.0.0.1',
  });

  const keys = await redis.keys("*");

  console.log(keys);
}
test();
