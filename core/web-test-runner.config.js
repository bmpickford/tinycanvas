import { playwrightLauncher } from '@web/test-runner-playwright';
export default {
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
  ],
  testRunnerHtml: testFramework =>
    `<html>
      <body>
        <canvas id="game"></canvas>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
};
