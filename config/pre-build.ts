/* eslint-disable no-console */
import gradient from 'gradient-string';
import { exec, ExecException } from 'node:child_process';

const runCommand = (
  command: string,
  type: string,
  successMessage: string,
  errorMessage: string
) => {
  return new Promise<void>((resolve, reject) => {
    console.log(`⌛ ${type}...`);
    exec(
      command,
      (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          console.error(
            `\x1b[31m❌ ${errorMessage}\n${error.message}\n${stdout}\x1b[0m`
          );
          reject();
        } else if (stderr) {
          console.error(
            `\x1b[31m❌ ${errorMessage}\n${stderr}\n${stdout}\x1b[0m`
          );
          reject();
        } else {
          console.log(`\x1b[32m✅ ${successMessage}\x1b[0m\n`);
          resolve();
        }
      }
    );
  });
};

const parseArguments = () => {
  const args = process.argv.slice(2);
  const argumentRegex = /^--\w+(?:-\w+)?$/;

  const parsedArgs: string[] = [];
  let currentArg: string | null = null;

  args.forEach((arg) => {
    if (argumentRegex.test(arg)) {
      if (currentArg) {
        parsedArgs.push(currentArg);
      }
      currentArg = arg;
    } else if (currentArg) {
      currentArg += ` ${arg}`;
    }
  });

  if (currentArg) {
    parsedArgs.push(currentArg);
  }

  return parsedArgs;
};
const runBuildCommand = () => {
  const buildArguments = parseArguments();
  const args = buildArguments.join(' ');
  const env = args.includes('--mode')
    ? buildArguments.find((arg) => arg.includes('--mode'))?.split(' ')[1]
    : 'production';

  const buildCommand = `next build ${args}`;

  console.log('\x1b[33m🚀 Running build command...\x1b[0m');
  if (args) console.log(`\n\x1b[33m🔧 Args are: \x1b[0m${args}`);
  console.log(`\x1b[33m⚙️  Using .env: \x1b[0m${env}`);

  exec(
    buildCommand,
    (error: ExecException | null, stdout: string, stderr: string) => {
      console.log('\n', stdout);
      if (stderr) console.log(stderr);

      if (error) {
        console.error(`\n\x1b[31m❌ Build failed: ${error.message}\x1b[0m`);
      } else {
        console.log('\n\x1b[32m✅ Build succeeded\x1b[0m');
      }
      console.log(
        '\n═════════════════════════════════════════════════════════════\n'
      );
    }
  );
};

const runPreBuildScript = async () => {
  let isLint = false;
  let isPreCommit = false;
  let fixESLint = false;
  const buildArguments = parseArguments();
  const args = buildArguments.join(' ');

  if (args.includes('--ignore-build')) {
    isLint = true;
  }

  if (args.includes('--pre-commit')) {
    isPreCommit = true;
  }

  if (args.includes('--fix')) {
    fixESLint = true;
  }

  console.clear();
  if (isPreCommit)
    console.log('\x1b[33m🔍 Running pre-commit script...\x1b[0m\n');
  else if (isLint) console.log('\x1b[33m🔍 Running lint script...\x1b[0m\n');
  else console.log('\x1b[33m🔧 Running pre-build script...\x1b[0m\n');

  try {
    await runCommand(
      'tsc',
      'TypeScript',
      'TypeScript compilation succeeded',
      'TypeScript compilation failed\n\n'
    );
    if (fixESLint) {
      console.log(
        '\x1b[33m⚠️  WARNING: ESLint will check AND overwrite your files, starting in 5... ⚠️\x1b[0m'
      );
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
      console.log('\x1b[33m⚠️  WARNING: Starting ESLint fix...\x1b[0m\n');
    }
    await runCommand(
      `npx eslint . ${fixESLint ? '--fix' : ''}`,
      'ESLint',
      `ESLint ${fixESLint ? 'check and fix' : 'check'} passed`,
      `ESLint ${fixESLint ? 'check and fix' : 'check'} failed\n\n`
    );
    if (isLint) {
      console.log(
        '\x1b[33m⚠️  WARNING: Prettier will check AND overwrite your files, starting in 5... ⚠️\x1b[0m'
      );
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
      console.log('\x1b[33m⚠️  WARNING: Starting Prettier fix...\x1b[0m\n');
    }
    await runCommand(
      'npm run prettier:write',
      'Prettier',
      !isLint ? 'Prettier check passed' : 'Prettier fix finished',
      !isLint ? 'Prettier check passed' : 'Prettier fix failed.\n\n'
    );

    console.log(
      '═════════════════════════════════════════════════════════════\n'
    );

    const message = {
      preCommit: 'Pre-commit script completed successfully!',
      preBuild: 'Pre-build script completed successfully!',
      isLint: 'Lint completed successfully! Site is ready for deployment',
    };

    // eslint-disable-next-line no-nested-ternary
    const mode = isPreCommit ? 'preCommit' : isLint ? 'isLint' : 'preBuild';

    const successMessage = gradient(
      '#7aecdd',
      '#ffffff',
      '#f78df7'
    )(message[mode]);
    console.log(`\x1b[32m✨ ${successMessage} 🎉\x1b[0m\n`);
    console.log(
      '═════════════════════════════════════════════════════════════\n'
    );

    if (!isLint) runBuildCommand();
  } catch (error) {
    console.error('\n\x1b[31m❌ Pre-build script failed to complete\x1b[0m\n');
    throw new Error('Pre-build script failed to complete');
  }
};

runPreBuildScript();
