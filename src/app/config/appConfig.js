const appConfig = {
    debug: false,
    autoRefresh: true,
    refreshTimeMs: new Date().getHours() > 17 || new Date().getHours() < 8 ? 15000 : 5000,
}
export default appConfig