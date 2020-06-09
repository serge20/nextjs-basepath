
const URL_PATH = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "/custom-path";

module.exports = {
    experimental: {
        basePath: URL_PATH
    }
}