/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SnapshotExportToS3Payload = {
    properties: {
        s3auth: {
            properties: {
                access_keys: {
                    type: 'string',
                },
                secret_key: {
                    type: 'string',
                },
            },
        },
        s3data: {
            properties: {
                bucket: {
                    type: 'string',
                },
                filename: {
                    type: 'string',
                },
                private: {
                    type: 'boolean',
                },
            },
        },
    },
};