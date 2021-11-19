import { puppeteerLauncher } from '@web/test-runner-puppeteer';

export default {
  browsers: [puppeteerLauncher({ concurrency: 1 })],
  testRunnerHtml: testFramework =>
    `<html>
      <body>
        <canvas id="game"></canvas>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
};
