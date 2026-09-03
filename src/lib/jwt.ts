import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "smaa-cars-fallback-secret-change-in-production-32chars"
);

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
    .sign(JWT_SECRET);
}

/**
 * Verifies a JWT token and returns the payload.
 * Throws an error if the token is invalid or expired.
 */
export async function verifyAdminToken(token: string): Promise<AdminJWTPayload> {
  const { payload } = await jwtVerify(token, JWT_SECRET);
  return payload as unknown as AdminJWTPayload;
}
