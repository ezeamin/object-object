/* eslint-disable no-console */
import { execSync } from 'child_process';
import gradient from 'gradient-string';

const runPrepareScript = () => {
  try {
    console.clear();
    process.stdout.write('\x1b[33m🔧 Running prepare script...\x1b[0m\n\n');

    // Run husky install
    process.stdout.write('⌛ (1/3) Installing Husky...');
    execSync('husky install');
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write('✅ (1/3) Installed Husky\n');

    // Install global dependencies
    process.stdout.write('⌛ (2/3) Installing global dependencies...');
    execSync(
      'npm install npm-check-updates typescript prettier eslint @trivago/prettier-plugin-sort-imports -g --ignore-scripts --silent'
    );
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write('✅ (2/3) Installed global dependencies\n');

    // Check for dependency updates
    process.stdout.write('⌛ (3/3) Checking for dependency updates...');
    const updates = execSync('ncu');
    console.log(`\n${updates}`);
    process.stdout.write('✅ (3/3) Checked for dependency updates\n');

    // Delay 1s before printing success message
    setTimeout(() => {
      const successMessage = gradient(
        '#7aecdd',
        '#ffffff',
        '#f78df7'
      )('Prepare script run successfully!');

      console.log(
        '\n═════════════════════════════════════════════════════════════'
      );
      console.log(`\n\x1b[32m✨ ${successMessage} 🎉\x1b[0m\n`);
      console.log(
        '═════════════════════════════════════════════════════════════\n'
      );

      console.log(
        '\x1b[33m❗ Make sure to check the above dependency updates and their implications, especially on \x1b[31mbreaking changes.'
      );
      console.log('\x1b[33m❗ To update them all, run \x1b[0mncu -u');
      console.log(
        '\x1b[33m❗ To only update one (or more) of them, run \x1b[0mncu [dependency_name(s)] -u\n'
      );
    }, 1000);
  } catch (e: unknown) {
    const error = e as Error;

    console.log(
      '\n═════════════════════════════════════════════════════════════'
    );
    console.error(' \n\x1b[31mPrepare script EXITED 😥\x1b[0m\n');
    console.log(
      '═════════════════════════════════════════════════════════════\n'
    );
    console.error(`Error log: ${error.message}`);
  }
};

runPrepareScript();
