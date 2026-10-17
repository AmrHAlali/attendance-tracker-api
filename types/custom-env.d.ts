declare module 'custom-env' {
  export function env(
    envName?: string | boolean,
    dir?: string | null,
    encoding?: string | null,
    defaultEnvFallback?: boolean,
  ): unknown
  export function dotenvConfig(...args: unknown[]): unknown
  export function config(...args: unknown[]): unknown
}
