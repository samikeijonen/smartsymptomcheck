// Project settings, update if needed.
const projectSettings = {
    projectURL: 'http://localhost:10003/',
    themePath: './themes/smartsymptomcheck/',
};

// Project variables, do not update.
const projectVariables = {
    blocksPluginPath: './plugins/meomblocks/',
    outPutFolder: 'build/',
};

// Theme entries, update if needed.
const projectEntries = {
    parentTheme: {
        entries: {
            main: projectSettings.themePath + 'js/main.js',
            'blocks-editor': projectSettings.themePath + 'js/blocks-editor.js',
            theme: projectSettings.themePath + 'scss/theme.scss',
            editor: projectSettings.themePath + 'scss/editor.scss',
        },
        outPutFolder: projectSettings.themePath + projectVariables.outPutFolder,
    },
    blocks: {
        entries: {
            // For some reason index.js creates empty folder.
            main: projectVariables.blocksPluginPath + 'src/main.js',
        },
        outPutFolder:
            projectVariables.blocksPluginPath +
            projectVariables.outPutFolder +
            'blocks/',
        // Set externalType to `blocks` if this is the main block JS file.
        externalType: 'blocks',
    },
};

// Generate JS and CSS automatically from wanted folder.
const generateAutomatically = {
    name: 'automaticAssets',
    baseFolder: projectVariables.blocksPluginPath,
    blob: '{/blocks/**/*.js,/blocks/**/*.scss,/acf-blocks/**/*.js,/acf-blocks/**/*.scss}',
    ignore: [
        `${projectVariables.blocksPluginPath}/blocks/**/block.js`,
        `${projectVariables.blocksPluginPath}/blocks/**/sidebar.js`,
    ],
    outPutFolder:
        projectVariables.blocksPluginPath + projectVariables.outPutFolder,
};

/**
 * Note that all MEOM blocks front-end entries are generated automatically.
 *
 * File names should follow these patterns:
 * front-end styles: {slug}-styles.scss
 * editor styles: {slug}-editor.scss
 * front-end JS: {slug}-js.scss
 *
 * For example if the block slug is `hero`:
 * hero-styles.scss
 * hero-editor.scss
 * hero-js.scss
 */

// Browsersync settings.
const browserSyncSettings = {
    host: 'localhost',
    port: 3000,
    // Possibility to run different URL for child themes.
    // For example npm run start --url="https://some.domain.local"
    proxy: process.env.npm_config_url
        ? process.env.npm_config_url
        : projectSettings.projectURL,
    open: true,
    files: [
        projectSettings.themePath + projectVariables.outPutFolder + '**/*.js',
        projectSettings.themePath + projectVariables.outPutFolder + '**/*.css',
        projectSettings.themePath + '**/*.php',
        projectVariables.blocksPluginPath +
            projectVariables.outPutFolder +
            '**/*.js',
        projectVariables.blocksPluginPath +
            projectVariables.outPutFolder +
            '**/*.css',
        projectVariables.blocksPluginPath + 'blocks/**/*.php',
        projectVariables.blocksPluginPath + 'acf-blocks/**/*.php',
    ],
};

module.exports = {
    projectSettings,
    projectVariables,
    projectEntries,
    generateAutomatically,
    browserSyncSettings,
};
