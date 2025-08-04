import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis";

// Create a new rate limiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. Useful if you're sharing redis
   * with other apps and need to avoid key collisions. Default is "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});

// Use a constant string to limit all requests with a single ratelimit.
// Or use a userID, apiKey, or IP address for individual limits.
const identifier = "api";
const { success } = await ratelimit.limit(identifier);

if (!success) {
  return "Unable to process at this time";
}
doExpensiveCalculation();
return "Here you go!";
