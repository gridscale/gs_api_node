

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './../Specs';
import { SshkeyCreate, SshkeyUpdate } from './../Specs';

interface SSHKey {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.SshkeysGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.SshkeyGetResponse>>;
    create(_attributes: SshkeyCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: SshkeyUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}


class SSHKey extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/sshkeys'); }

}

export { SSHKey };


