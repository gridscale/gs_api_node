import {GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, VoidApiResult, RequestOptions, GenericApiResult } from '../api';
import * as models from './../Specs';
import { CreateResponse, StorageCreate, StorageUpdate, SnapshotUpdate, SnapshotExportToS3Payload, SnapshotCreate, SnapshotScheduleUpdate, SnapshotScheduleCreate } from './../Specs';


interface Storage {
    // override some method signatures for more explicit interfaces
    list(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.StoragesGetResponse>>;
    get(_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.StorageGetResponse>>;
    create(_attributes: StorageCreate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: StorageUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>>;
}

class Storage extends GridscaleObjects {

    constructor(_api: APIClass) {
        super(_api, '/objects/storages');
    }


    /**
     *  Clone a Storage
     *
     * @param _uuid Object UUID to Clone
     * @param _callback Callback Function
     */
    clone(_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<CreateResponse>> {
      return this._api.post(  this._basepath + '/' + _uuid + '/clone', _callback);
    }


    /**
     *  Snapshots
     *
     */


    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    snapshots(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.SnapshotsGetResponse>> {
        return this._sub('snapshots', _uuid, _options, _callback);
    }


    /**
     * Get Single Snapshot
     *
     * @param _uuid
     * @param _snapshot_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.SnapshotGetResponse>>}
     */
    snapshot(_uuid: string, _snapshot_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.SnapshotGetResponse>> {
        return this._sub_get('snapshots', _uuid, _snapshot_uuid, _callback);
    }


    /**
     * Patch Snapshot
     *
     * Attribures
     *  name
     *  labels
     *
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchSnapshot(_uuid: string, _snapshot_uuid: string, _attribute: SnapshotUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_patch('snapshots', _uuid, _snapshot_uuid, _attribute, _callback);
    }

    /**
     * Rollback Storage to this Snapshot
     *
     * Attribures
     *  name
     *  labels
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    rollbackSnapshot(_uuid: string, _snapshot_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.patch( '/objects/storages/' + _uuid + '/snapshots/' + _snapshot_uuid + '/rollback' , {rollback: true}, _callback);
    }



    /**
     * Rollback Storage to this Snapshot
     *
     * Attribures
     *  - name
     *  - labels
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    exportSnapshot(_uuid: string, _snapshot_uuid: string, _data: SnapshotExportToS3Payload, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
      return this._api.patch( '/objects/storages/' + _uuid + '/snapshots/' + _snapshot_uuid + '/export_to_s3' , _data, _callback);
    }


    /**
     * Create a Snapshot of this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<CreateResponse>>}
     */
    createSnapshot(_uuid: string, _attribute: SnapshotCreate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<CreateResponse>> {
        return this._sub_post('snapshots', _uuid, _attribute, _callback);
    }


    /**
     * Remove Snapshot
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeSnapshot(_uuid: string, _snapshot_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_remove('snapshots', _uuid, _snapshot_uuid, _callback);
    }


    /**
     *  Snapshots Scheduler
     *
     */


    /**
     *  Get Snapshot Schedler for this Storage
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    snapshotSchedulers(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.SnapshotSchedulesGetResponse>> {
        return this._sub('snapshot_schedules', _uuid, _options, _callback);
    }


    /**
     * Get Single Snapshot Schedler
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.SnapshotScheduleGetResponse>>}
     */
    snapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.SnapshotScheduleGetResponse>> {
        return this._sub_get('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    }


    /**
     * Patch Snapshot Schedler
     *
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchSnapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _attribute: SnapshotScheduleUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_patch('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _attribute, _callback);
    }


    /**
     * Create a Snapshot Schedler for this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {Promise<ApiResult<CreateResponse>>}
     */
    createSnapshotScheduler(_uuid: string, _attribute: SnapshotScheduleCreate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<CreateResponse>> {
        return this._sub_post('snapshot_schedules', _uuid, _attribute, _callback);
    }


    /**
     * Remove Snapshot Schedler
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_scheduler_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeSnapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_remove('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    }

    /**
     * List all backup schedules for the storage
     *
     * @param _uuid Storage UUID
     * @param _options requestOptions
     * @param _callback
     * @returns {Promise<ApiResult<models.StorageBackupSchedulesGetResponse>>}
     */
    backupSchedules(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.StorageBackupSchedulesGetResponse>> {
        return this._sub('backup_schedules', _uuid, _options, _callback);
    }

    /**
     * Fetches one backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param _callback
     */
    backupScheduler(_uuid: string, _backup_schedule_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.StorageBackupScheduleGetResponse>> {
        return this._sub_get('backup_schedules', _uuid, _backup_schedule_uuid, _callback);
    }


    /**
     * Creates a new backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_options
     * @param _callback
     */
    createBackupScheduler(_uuid: string, _backup_schedule_options: models.StorageBackupScheduleCreate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<CreateResponse>> {
        return this._sub_post('backup_schedules', _uuid, _backup_schedule_options, _callback);
    }

    /**
     * Modifies existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid  Backup-Schedule UUID
     * @param backup_schedule_options
     * @param callback
     */
    patchBackupSchedule(_uuid: string, _backup_schedule_uuid: string, _backup_schedule_options: models.StorageBackupScheduleUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.StorageBackupScheduleUpdate>> {
        return this._sub_patch('backup_schedules', _uuid, _backup_schedule_uuid, _backup_schedule_options, _callback);
    }

    /**
     * Remove existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param callback
     */
    removeStorageBackupSchedule(_uuid: string, _backup_schedule_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_remove('backup_schedules', _uuid, _backup_schedule_uuid, _callback);
    }

    /**
     * List all backups of the storage
     *
     * @param _uuid Storage UUID
     * @param _callback
     */
    backups(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.StorageBackupsGetResponse>> {
        return this._sub('backups', _uuid, _options, _callback);
    }

    /**
     * Remove existing backup
     *
     * @param _uuid Storage UUID
     * @param _backup_uuid
     * @param _callback
     */
    deleteStorageBackup(_uuid: string, _backup_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_remove('backups', _uuid, _backup_uuid, _callback);
    }

    rollbackStorageBackup(_uuid: string, _backup_uuid: string, _attributes: models.StorageRollback, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_patch('backups', _uuid, _backup_uuid + '/rollback', _attributes, _callback);
    }

    /**
     * Creates a new storage from an existing backup
     * @param _name Name of the new storage
     * @param _backup_uuid Backup-UUID to restore from
     * @param _callback
     */
    createFromBackup(_name: string, _backup_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<CreateResponse>> {
        return this._api.post(this._basepath + '/import', { backup: {
            name: _name,
            backup_uuid: _backup_uuid,
        }}, _callback);
    }


}
export { Storage };
