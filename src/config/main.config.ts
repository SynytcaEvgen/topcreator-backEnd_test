export const MAIN_CONFIG = new (class {
  get dbUrl(): string {
    return process.env.DB_URI;
  }
})();
