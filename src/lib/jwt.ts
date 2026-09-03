import { SignJWT, jwtVerify } from "jose";

function getJwtSecret() {
  if (process.env.NODE_ENV === "production" && !process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is missing in production. You must provide a secure secret.");
  }
  return new TextEncoder().encode(
    process.env.JWT_SECRET || (process.env.NODE_ENV !== "production" ? "smaa-cars-fallback-secret-for-local-dev-only" : "")
  );
}

const JWT_EXPIRY = "7d";

export interface AdminJWTPayload {
  username: string;
  role: "admin";
}

/**
 * Signs a new JWT token for a given admin username.
 */
export async function signAdminToken(username: string): Promise<string> {
  return await new SignJWT({ username, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRY)
    .sign(getJwtSecret());
}

/**
 * Verifies a JWT token and returns the payload.
 * Throws an error if the token is invalid or expired.
 */
export async function verifyAdminToken(token: string): Promise<AdminJWTPayload> {
  const { payload } = await jwtVerify(token, getJwtSecret());
  return payload as unknown as AdminJWTPayload;
}
