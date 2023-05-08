import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as core from 'example-core'

// serverless pulumi script goes here that uses core.f
new aws.lambda.CallbackFunction('my-function', {
    callback: async (event, context) => {
        console.log(core.f());
        return;
    },
});
export const f = core.f()
