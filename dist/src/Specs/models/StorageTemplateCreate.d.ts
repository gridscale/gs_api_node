export declare type StorageTemplateCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * snapshot uuid for template
     */
    snapshot_uuid: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
};