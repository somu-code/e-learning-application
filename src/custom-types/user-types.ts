export type User = {
  id: number;
  email: string;
  name: string | null;
  password: string;
} | null;

export type userPayload = {
  email: string;
  role: Role;
};

export enum Role {
  "user",
  "admin",
}
