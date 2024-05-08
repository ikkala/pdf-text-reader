import {runShellCommand} from '@augment-vir/node-js';

describe('test as esm package', () => {
    it('runs', async () => {
        await runShellCommand(
            `node --experimental-default-type=module -e "console.log(await import('pdf-text-reader'))"`,
            {rejectOnError: true},
        );
    });
});
